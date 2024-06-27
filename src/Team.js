import React from 'react'

const Team = () => {
  return (
    <section>
        <span className='title-services'>
            <h1>Nuestro equipo</h1>
            <p>Nuestro equipo está formado por expertos en desarrollo de software que se esfuerzan por brindar soluciones de alta calidad a nuestros clientes.</p>    
        </span>
        {/* Lista de equipo */}
        <div className='cards-users'>
        <div className='containerDev'>
            <div className='card'>
                <img src='https://avatars.githubusercontent.com/u/125914742?v=4' className='' alt=""/>
                <h2>Rafael Cienfuegos Murrieta</h2>
                <p>CEO</p>
            </div>
            <div className='card'>
                <img src='https://avatars.githubusercontent.com/u/166253468?v=4' className='' alt=""/>
                <h2>Jose Antonio Mejia Medina</h2>
                <p>CTO</p>
            </div>
        </div>  
        </div>
    </section>
  )
}

export default Team
