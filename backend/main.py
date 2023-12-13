from flask import Flask, request, redirect, url_for, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="54157592808",
    database="portifolio"
)
cursor = db.cursor()

@app.route('/api/dados', methods=['GET'])
def index():
    cursor.execute("SELECT  dev.idDev, dev.nome, dev.dtNasc, dev.sexo, dev.email, urlMidia.nomeMidia, urlMidia.tipo AS tipoMidia, urlMidia.posse, urlMidia.url AS urlMidia, endereco.pais, endereco.estado, endereco.cidade, endereco.bairro, endereco.rua, linguagens.tipo AS tipoLinguagem, linguagens.nivelExperiencia, linguagens.nome AS nomeLinguagem, projetos.nomeProjeto, projetos.dtCriacao AS dtCriacaoProjeto, projetos.dificuldade, projetos.coletividade, linguagemProjeto.uso AS usoLinguagemProjeto, urlMidia.url AS urlMidiaProjeto FROM dev LEFT JOIN urlMidia ON dev.idDev = urlMidia.fkDev LEFT JOIN endereco ON dev.idDev = endereco.fkDev LEFT JOIN linguagens ON dev.idDev = linguagens.fkDev LEFT JOIN projetos ON dev.idDev = projetos.fkDev LEFT JOIN linguagemProjeto ON linguagens.idLinguagem = linguagemProjeto.fkLinguagem AND projetos.idProjeto = linguagemProjeto.fkProjeto LEFT JOIN midiaProjeto ON urlMidia.idMidia = midiaProjeto.fkUrls AND projetos.idProjeto = midiaProjeto.fkProjeto;")
    data = cursor.fetchall()
    
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=8080)
