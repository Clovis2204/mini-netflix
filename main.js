import React, { Component } from  'react';
import { Navigate, Redirect } from 'react-router'
import menuFilmes from '../pages/menuFilmes';
import { useNavigate} from 'react-router-dom';

const name = document.getElementById("name2");
function saveName() {
    localStorage.setItem('name2', name.value);
  }
  
  
  

function Main () {
    const navigate = useNavigate();

        return (         
            <div class="menu__login">
                <div id="logo3035"></div>
                <div className='main'>
                        <h1 className='entrar'>
                            Entrar
                        </h1>
                    <section>
                        <div id='linha'>
                        </div>
                        <div id='linha2'></div>
                    </section>
                    <form action="#" id="margem">
                        <input type="text" className='name' class="usuario__container" required placeholder="Nome de usuario" />
                    </form>
                    <div>
                        <form action="#" id="margem2">
                        <input  type="text"   class="senha__container" required placeholder="Senha"/> 
                        </form>
                    </div>
                    
                    <button   onClick={()=>navigate('/Inicio')} class="botao__container" type="submit">
                        entrar
                    </button> 
                    
                </div>
            </div>
        );
};  
export default Main;