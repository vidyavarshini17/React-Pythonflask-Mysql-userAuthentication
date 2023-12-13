from flask import Flask,jsonify,request
from flask_cors import CORS
from flask_mysqldb import MySQL

app=Flask(__name__)
CORS(app)

app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']=''
app.config['MYSQL_DB']='users_db'

mysql=MySQL(app)
@app.route('/createUser', methods=['POST'])
def create_user():
    try:
        # Get data from the request
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        # Create a cursor and execute the query
        cursor = mysql.connection.cursor()
        cursor.execute('INSERT INTO users (username, password) VALUES (%s, %s)', (username, password))
        mysql.connection.commit()
        cursor.close()
        return jsonify({'message':True})
    
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500
@app.route('/checkUser', methods=['POST'])
def checkUser():
    try:
        # Get data from the request
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        # Create a cursor and execute the query
        cursor = mysql.connection.cursor()
        cursor.execute('SELECT * from users where BINARY username=%s and BINARY password=%s', (username, password))
        user = cursor.fetchone()
        cursor.close()
        if user:
            return jsonify({'message': True})
        else:
            return jsonify({'message': False})
    
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)