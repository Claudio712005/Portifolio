import React, { useEffect, useState } from 'react';
import '../assets/styles/home.sass'
import imgDevPng from '../assets/images/398679bb-a7e4-44df-9479-dc11058676f0.png'

function HomePage() {
    const [resultado, setDadosDoBanco] = useState([]);
    const [erroNaSolicitacao, setErroNaSolicitacao] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/dados');

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

    return (
        <div className='pagina-principal'>
            <div className='first-content'>
                <div className="left-first-content">
                    <h1><span>{erroNaSolicitacao ? ('') : (resultado.length > 0 && (resultado[0][2]))}</span><span>{erroNaSolicitacao ? ('') : (resultado.length > 0 && (resultado[0][3]))};</span></h1>
                    <button>BAIXAR CURRÍCULO <i class="fa-solid fa-download"></i></button>
                    <h6>Baixe agora meu currículo e descubra as experiências que estão moldando minha jornada.</h6>
                </div>
                <div className="center-first-content">
                    <img src={imgDevPng} alt="dev-img" />
                </div>
                <div className="right-first-content">
                    <div className="box">
                        
                    </div>
                    <div className="box">
                        
                    </div>
                    <div className="box">
                        
                    </div>
                </div>
            </div>
            <div className="second-content"></div>
        </div>
    );
}

export default HomePage;