import React from 'react'
import './index.css'
const Team = () => {
  return (
    <div className='idTeam'>
        <span className='title-services'>
            <h1>Nuestro equipo</h1>
            <p>Nuestro equipo está formado por expertos en desarrollo de software que se esfuerzan por brindar soluciones de alta calidad a nuestros clientes.</p>    
        </span>
        <div className='cards-users'>
        <div className='containerDev'>
            <div className='cards'>
                <img src='https://avatars.githubusercontent.com/u/125914742?v=4' className='' alt=""/>
                <h2>Rafael Cienfuegos Murrieta</h2>
                <p>CEO</p>
            </div>
            <div className='cards'>
                <img src='https://avatars.githubusercontent.com/u/166253468?v=4' className='' alt=""/>
                <h2>José Antonio Mejia Medina</h2>
                <p>CTO</p>
            </div>
        </div>  
        </div>
    </div>
  )
}

export default Team
