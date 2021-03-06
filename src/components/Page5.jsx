import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Calcular from "./Chaside";

function Page5() {
    return (
        <div>
            <hr/>
            <Box sx={{
                  marginTop: 1,                  
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent:'center',
                }}>
            <ol>
                <p>81. ¿Harías el diseño de un afiche para una campaña contra el sida?</p>
                <Button variant="contained" onClick={() => Calcular(81, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(81, 0)}>No</Button>
                <p/>
                <p>82. ¿Dirigirías un grupo de teatro independiente?</p>
                <Button variant="contained" onClick={() => Calcular(82, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(82, 0)}>No</Button>
                <p/>
                <p>83. ¿Enviarías tu curriculum a una empresa automotriz que solicita gerente para su área de producción?</p>
                <Button variant="contained" onClick={() => Calcular(83, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(83, 0)}>No</Button>
                <p/>
                <p>84. ¿Participarías en un grupo de defensa internacional dentro de alguna fuerza armada?</p>
                <Button variant="contained" onClick={() => Calcular(84, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(84, 0)}>No</Button>
                <p/>
                <p>85. ¿Te costearías tus estudios trabajando en una auditoría?</p>
                <Button variant="contained" onClick={() => Calcular(85, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(85, 0)}>No</Button>
                <p/>
                <p>86. ¿Eres de los que defiende causas perdidas?</p>
                <Button variant="contained" onClick={() => Calcular(86, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(86, 0)}>No</Button>
                <p/>
                <p>87. ¿Ante una emergencia epidémica participarías en una campaña brindando tu ayuda?</p>
                <Button variant="contained" onClick={() => Calcular(87, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(87, 0)}>No</Button>
                <p/>
                <p>88. ¿Sabrías responder qué significa ADN y ARN?</p>
                <Button variant="contained" onClick={() => Calcular(88, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(88, 0)}>No</Button>
                <p/>
                <p>89. ¿Elegirías una carrera cuyo instrumento de trabajo fuese la utilización de un idioma extranjero?</p>
                <Button variant="contained" onClick={() => Calcular(89, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(89, 0)}>No</Button>
                <p/>
                <p>90. ¿Trabajar con objetos te resulta más gratificante que trabajar con personas?</p>
                <Button variant="contained" onClick={() => Calcular(90, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(90, 0)}>No</Button>
                <p/>
                <p>91. ¿Te resultaría gratificante ser asesor contable en una empresa reconocida?</p>
                <Button variant="contained" onClick={() => Calcular(91, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(91, 0)}>No</Button>
                <p/>
                <p>92. ¿Ante un llamado solidario, te ofrecerías para cuidar a un enfermo?</p>
                <Button variant="contained" onClick={() => Calcular(92, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(92, 0)}>No</Button>
                <p/>
                <p>93. ¿Te atrae investigar sobre los misterios del universo, por ejemplo, los agujeros negros?</p>
                <Button variant="contained" onClick={() => Calcular(93, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(93, 0)}>No</Button>
                <p/>
                <p>94. ¿El trabajo individual te resulta más rápido y efectivo que el trabajo grupal?</p>
                <Button variant="contained" onClick={() => Calcular(94, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(94, 0)}>No</Button>
                <p/>
                <p>95. ¿Dedicarías parte de tu tiempo a ayudar a personas de zonas desamparadas?</p>
                <Button variant="contained" onClick={() => Calcular(95, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(95, 0)}>No</Button>
                <p/>
                <p>96. ¿Cuando eliges tu ropa o decoras un ambiente, tienes en cuenta la combinación de los colores, las telas o el estilo de los muebles?</p>
                <Button variant="contained" onClick={() => Calcular(96, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(96, 0)}>No</Button>
                <p/>
                <p>97. ¿Te gustaría trabajar como profesional dirigiendo la construcción de una empresa hidroeléctrica?</p>
                <Button variant="contained" onClick={() => Calcular(97, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(97, 0)}>No</Button>
                <p/>
                <p>98. ¿Sabes qué es el PIB?</p>
                <Button variant="contained" onClick={() => Calcular(98, 1)}>Si</Button>&nbsp;
                <Button variant="contained" onClick={() => Calcular(98, 0)}>No</Button>
                <p/>
            </ol>
            </Box>
        </div>
    )
}

export default Page5
