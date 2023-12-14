from flask import Flask, jsonify, g
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

def get_db():
    if 'db' not in g:
        g.db = mysql.connector.connect(
            host="localhost",
            user="root",
            password="54157592808",
            database="portifolio"
        )
    return g.db

@app.teardown_appcontext
def close_db(error):
    db = g.pop('db', None)
    if db is not None:
        db.close()

@app.route('/api/dados', methods=['GET'])
def index():
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM dev;")
    data = cursor.fetchall()
    cursor.close()

    return jsonify(data)

@app.route('/api/linguagens', methods=['GET'])
def linguagens():
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM linguagens;")
    dados = cursor.fetchall()
    cursor.close()

    return jsonify(dados)

if __name__ == '__main__':
    app.run(port=8080)
