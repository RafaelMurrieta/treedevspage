import React from 'react'
import TreeDevsIcon from './assets/treedevslogo.jpg'

const IntroPge = () => {
  return (
    <section className='sectionIntro'>
        <div className='headerIntro'>
            <div className='title'>
                <h1>TreeDevs: Desarrollando soluciones innovadoras</h1>
                <p>Somos una empresa de desarrollo de software dedicada a crear soluciones a medida para nuestros clientes. Nuestro equipo de expertos se esfuerza por entender las necesidades de cada cliente y desarrollar aplicaciones eficientes y escalables.</p>
            </div>
            <div className='fotogrhap'>
                <img src={TreeDevsIcon} alt='Logo de treeDevs'/>
            </div>
        </div>
    </section>
  )
}

export default IntroPge
