import React, { useEffect, useState } from 'react';
import '../assets/styles/home.sass'
import imgDevPng from '../assets/images/398679bb-a7e4-44df-9479-dc11058676f0.png'

function HomePage() {
    const [resultado, setDadosDoBanco] = useState([]);
    const [erroNaSolicitacao, setErroNaSolicitacao] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/dados');

                if (response.status === 200) {
                    const dados = await response.json();
                    console.log('Dados recebidos:', dados);

                    setDadosDoBanco(dados);
                } else {
                    setErroNaSolicitacao(true);
                    throw new Error('Não foi encontrado nada.');
                }
            } catch (error) {
                console.error('Erro na solicitação:', error);
                setErroNaSolicitacao(true);
            }
        };

        fetchData();
    }, []);

    console.log(resultado)
    return (
        <div className='pagina-principal'>
            <div className='first-content'>
                <div className="left-first-content">
                    <h1>
                        <span>
                            {erroNaSolicitacao ? ('') : (resultado.devs && resultado.devs.length > 0 && resultado.devs[0].primeiroNome)}
                        </span>
                        <span>
                            {erroNaSolicitacao ? ('') : (resultado.devs && resultado.devs.length > 0 && resultado.devs[0].sobrenome)}
                        </span>
                    </h1>
                    <button>BAIXAR CURRÍCULO <i class="fa-solid fa-download"></i></button>
                    <h6>Baixe agora meu currículo e descubra as experiências que estão moldando minha jornada.</h6>
                </div>
                <div className="center-first-content">
                    <img src={imgDevPng} alt="dev-img" />
                </div>
                <div className="right-first-content">
                    <div className="box">
                        <i class="fa-solid fa-code"></i>
                        <h2>Habilidades</h2>
                    </div>
                    <div className="box">
                        <i class="fa-solid fa-person-digging"></i>
                        <h2>Projetos</h2>
                    </div>
                    <div className="box">
                        <i class="fa-solid fa-person-digging"></i>
                        <h2>Linha do tempo</h2>
                    </div>
                </div>
            </div>
            <div className="second-content">
                
            </div>
        </div>
    );
}

export default HomePage;