import React, { useEffect, useState } from 'react';
import '../assets/styles/home.sass'
import imgDevPng from '../assets/images/398679bb-a7e4-44df-9479-dc11058676f0.png'


function HomePage() {
    var timeout
    const [resultado, setDadosDoBanco] = useState([]);
    const [erroNaSolicitacao, setErroNaSolicitacao] = useState(false);

    const [resultadoLinguagem, setDadosDoBancoLinguagem] = useState([]);
    const [erroNaSolicitacaoLinguagem, setErroNaSolicitacaoLinguagem] = useState(false);

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

        const fetchDataLinguagens = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/linguagens');

                if (response.status === 200) {
                    const dados = await response.json();
                    console.log('Dados recebidos:', dados);

                    setDadosDoBancoLinguagem(dados);
                } else {
                    setErroNaSolicitacaoLinguagem(true);
                    throw new Error('Não foi encontrado nada.');
                }
            } catch (error) {
                console.error('Erro na solicitação:', error);
                setErroNaSolicitacaoLinguagem(true);
            }
        }

        fetchDataLinguagens();
    }, []);

    document.addEventListener('mousemove', (e) => {
        let x = e.pageX;
        let y = e.pageY;

        const cursor = document.querySelector('.cursor');
        if(cursor) {
            cursor.style.opacity = 1
            cursor.style.top = y + 'px'
            cursor.style.left = x + 'px'
        } else{
            const cursor = document.querySelector('.cursor');
        }

        const mouseStop = () => {
            cursor.style.opacity = 0;
        }
        
        clearTimeout(timeout);
        timeout = setTimeout(mouseStop, 500)
    })

    document.addEventListener('mouseout', (e) => {
        const cursor = document.querySelector('.cursor');
        if(cursor) {
            cursor.style.opacity = 0
        } else{
            const cursor = document.querySelector('.cursor');
        }
    })

    console.log(resultado)
    return (
        <div className='pagina-principal'>
            <div className="cursor"></div>
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
                        <i class="fa-solid fa-code"></i>
                        <h2>Habilidades</h2>
                    </div>
                    <div className="box">
                        <i class="fa-solid fa-person-digging"></i>
                        <h2>Projetos</h2>
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