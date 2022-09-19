import React from "react";
import './menuFilmes.css';
import Series from '../pages/series';
import Filmes from '../pages/Filmes';
import menuFilmes from '../pages/menuFilmes';
import { useNavigate} from 'react-router-dom';
import show from '../pages/descricao';
import hide from '../pages/hide';

function Menu () {
    const navigate = useNavigate();
    
        return (           
            <div><div id="logo3035"></div> 
           <header>
                <div class="cabecalho">
                    <button id="inicio__container" onClick={()=>navigate('/Inicio')}  type="submit">
                        Inicio
                    </button> 
                    <button id="series__container" onClick={()=>navigate('/Series')}  type="submit">
                        Series
                    </button> 
                    <button id="filmes__container" onClick={()=>navigate('/Filmes')}  type="submit">
                        Filmes
                    </button> 
                    <div class="caixa">
                        <form action="#">
                            <input  type="text"   class="pesquisa"/> 
                        </form>
                    <div class='notificacao'></div>
                    </div>
                        <div class="name" id="name__container">
                            <button class="nome">
                                c
                            </button>
                        </div>
                    
                </div>
                
            </header>
            <h3 id="populares">Filmes </h3>
            <div className='escondido1' ><button onClick={hide}  className="sair">X</button> 
                <div className="capaFilme"><button className="assistir" id="play"> Assistir</button>
                </div>
                <div className="sinopse">
                    <h1>A Queda</h1> Sinopse: Becky e Hunter são duas amigas que buscam aventura e enfrentam grande alturas em suas escaladas. Depois de um grande drama vivido por elas, as duas decidem escalar uma remota torre de rádio abandonada com mais de 2000 pés de altura. Parecia a aventura perfeita para desligar a mente do trágico acontecimento que vivenciaram com o namorado de uma delas. Elas não contavam que ficariam presas e isoladas naquele lugar sem sinal de celular, sem energia e sem pessoas por perto.</div>
                    <h3 className="relevante">74% relevante</h3><h3 className="ano">Lançamento: 29/09/2022</h3><h3 className="numero"> 12</h3><h3 className="duracao">2H19min </h3>
                <h3 className="elenco">Elenco: Grace Caroline Currey, Virginia Gardner, Jeffrey Dean Morgan.</h3><h3 className='genero'>Genero: Terror</h3>
        
            </div>
            <div class="assistidos__container">
            <button class="filme1" />
                        <button class="filme2 " onClick={show}/>
                        <button class="filme3" />
                        <button class="filme4" />
                        <button class="filme5" />
                        <button class="filme6" />
                        <button class="filme7" />
                        <button class="filme8" />
                        <button class="filme9" />

            
            </div>
            </div>
        

        );
 }
 export default Menu;