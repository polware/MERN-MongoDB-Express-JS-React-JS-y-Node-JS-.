import React from 'react'
import "../about.css"
import ReactRoundedImage from "react-rounded-image";
import Img1 from '../media/Paul.jpg'
import Img2 from '../media/Felipe.jpg'
import Img3 from '../media/Cristian.jpg'
import Img4 from '../media/User.jpg'

export default function Quienessomos() {
    return (
        <div className="container">
            <br/>
            <hr/>
            <h2>Quiénes Somos</h2>
            <hr/>
            <div className='about-container'>
            <div className='about-desc'>
                <h3>Scrum Master: Paul H. Vargas P.</h3>
                <p>Soy ingeniero de sistemas y estudiante de este grandioso curso de Programación que nos ha brindado Misión TIC 2022. Soy huilense, de la tierra que baila el Sanjuanero y celebra el Reinado Nacional del Bambuco. Hoy hago parte de este equipo de trabajo que da su mejor esfuerzo para presentar de manera formidable este proyecto web, y mi propósito será siempre sacar el mejor provecho al curso y continuar aprendiendo para ser un mejor desarrollador Full Stack.</p>
            </div>
            <div className='about-img'>
                <ReactRoundedImage
                    image={Img1}
                    roundedColor="#005DFF"
                    imageWidth="300"
                    imageHeight="296"
                    roundedSize="8"
                    borderRadius="150"
                    />            
            </div>
            </div>
            
            <div className='about-container'>
            <div className='about-desc'>
                <h3>Product Owner: Jessica D. Páez J.</h3>
                <p>Mi nombre es Jessica Páez, nací a 2600 metros más cerca de las estrellas; en la ciudad de Bogotá, soy Ingeniera Mecatrónica, trabajo como desarrolladora web Full-Stack, tengo el honor de pertenecer a este gran equipo. Con el apoyo de Misión TIC hemos creado esta maravillosa página la cual les permite a los estudiantes a encontrar su vocación, estamos seguros de que, con la alianza de sus profesores, padres y esta página nuestros jóvenes podrán escoger la mejor decisión.</p>
            </div>
            <div className='about-img'>
                <img src={Img4} alt="about" width="300" height="300"/>
            </div>
            </div>
                    
            <div className='about-container'>
            <div className='about-desc'>
                <h3>Development Team: Andrés Felipe Cruz</h3>
                <p>Mi nombre es Andrés Felipe Cruz Eraso, docente del área de tecnología e Informática en la ciudad de Popayán con formación en ingeniería de sistemas y actualmente con la experiencia de aprendizaje y actualización de conocimientos a través de Misión TIC 2022 se abre un nuevo mundo de conocimiento para compartir con mis estudiantes, cualificar mis destrezas en programación y aplicarlas en la herramienta web de orientación vocacional que desarrollamos conjuntamente con mi equipo. Esperamos poder contribuir a todos los estudiantes quienes estén en el proceso de orientar su vocación.</p>
            </div>
            <div className='about-img'>
                <ReactRoundedImage
                        image={Img2}
                        roundedColor="#005DFF"
                        imageWidth="290"
                        imageHeight="282"
                        roundedSize="8"
                        borderRadius="150"
                        />
                </div>
            </div>
            <div className='about-container'>
            <div className='about-desc'>
                <h3>Development Team: Breyner Patrón R.</h3>
                <p>Mi nombre es Breyner David Patrón Ramírez, soy de la bahía más linda de América, Santa Marta. Soy estudiante de Ingeniería de sistemas y del curso Misión TIC 2022, el cual me ha ayudado a crecer y a demostrar mis destrezas en el mundo de la programación.</p>
            </div>
            <div className='about-img'>
                <img src={Img4} alt="about" width="300" height="300"/>
                </div>
            </div>

            <div className='about-container'>
            <div className='about-desc'>
                <h3>Development Team: Cristian F. Gil C.</h3>
                <p>Soy de la ciudad de los tesoros escondidos mayormente conocida como Tunja (Boyacá), actualmente soy un estudiante inspirado en la tecnología y programación, con ello aspiro a ser Ingeniero de Sistemas. Por otro lado, y con la oportunidad de Misión TIC y la UTP, desarrollo capacidades fundamentales e importantes para mi futuro profesional y mayormente implementando conocimiento y una buena posibilidad con este Test Vocacional Chaside.</p>
            </div>
            <div className='about-img'>
                <ReactRoundedImage
                            image={Img3}
                            roundedColor="#005DFF"
                            imageWidth="290"
                            imageHeight="285"
                            roundedSize="8"
                            borderRadius="150"
                            />
                </div>
            </div>
            <br/>
        </div>
    )
}
