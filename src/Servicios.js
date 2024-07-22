import React from 'react'
import './index.css'

const Servicios = () => {
  return (
    <section className='sectionServicios'>
        <span className='title-services'>
            <h1>Nuestros Servicios</h1>
            <p>Ofrecemos una amplia gama de servicios de desarrollo de software para satisfacer las necesidades de nuestros clientes.</p>    
            <a href=''><button className='btn-primary'>Ver mas</button></a>
        </span>
        <div className='containerDev'>
            <div className='card'>
                <h2>Desarrollo Web</h2>
                <p>Creamos sitios web y aplicaciones web a medida, optimizados para un rendimiento y una experiencia de usuario excepcionales.</p>
            </div>
            <div className='card'>
                <h2>Desarrollo Móvil</h2>
                <p>Desarrollamos aplicaciones móviles nativas y multiplataforma que ofrecen una experiencia de usuario fluida y atractiva.</p>
            </div>
            <div className='card'>
                <h2>Integración de Sistemas</h2>
                <p>Integramos diferentes sistemas y plataformas para crear soluciones integradas y eficientes.</p>
            </div>
        </div>
    </section>
  )
}

export default Servicios
