import React from "react";
import './menuFilmes.css';
import Series from '../pages/series';
import Filmes from '../pages/Filmes';
import menuFilmes from '../pages/menuFilmes';
import { useNavigate} from 'react-router-dom';
import show from '../pages/descricao';

function Menu () {
    const navigate = useNavigate();
    
        return (           
            <div>
                <div id="logo3035"></div> 
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
            <h3 id="populares">Series </h3>
            <div class="assistidos__container">
                <div class="mais__assistidios">

                        <button class="series1"></button>
                        <button class="series2 "/>
                        <button class="series3" />
                        <button class="series4" />
                        <button class="series5" />
                        <button class="series6" />
                        <button class="series7" />
                        <button class="series8" />
                        <button class="series9" />
                </div>

            </div>
        


            </div>
        );
 }
 export default Menu;