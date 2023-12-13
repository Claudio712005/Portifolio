import React, { useEffect, useState } from 'react';
import '../assets/styles/home.sass'

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
            {erroNaSolicitacao ? (<p>Ocorreu um erro na solicitação.</p>) : 
                (resultado.length > 0 && (<h2>Olá {resultado[0][1]} você está na HOME, seu Email é : {resultado[0][4]}</h2>))
            }
        </div>
    );
}

export default HomePage;