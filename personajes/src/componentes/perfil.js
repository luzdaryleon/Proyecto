import React from 'react';
import '../estilos/perfil.css';

function perfil(props) {
    return (
        <div className='contenedor-perfil'>
        <img
        className='contenedor-perfil'
                src={`../imagenes/perfil/${props.imagen}.png`}
                alt='Desarrollad@r' />
        <div className='contenedor-texto-pefil'>
                {props.nombre} en {props.pais}
            <p className='cargo-perfil'>
                    {props.cargo} en {props.empresa}
            </p>  
            <p className='resena-perfil'>
                {props.resena}
            </p>
            </div>
        </div>
    )
};

export default perfil;

