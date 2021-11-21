import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#0288d1',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const theme = createTheme();

export default function Resultados() {
    const [identidad, setIdentidad] = useState('')
    const [nombre, setNombre] = useState('')
    const [letraintereses, setLetraintereses] = useState('')
    const [letraaptitudes, setLetraaptitudes] = useState('')
    const [ramaintereses, setRamaintereses] = useState('')
    const [ramaaptitudes, setRamaaptitudes] = useState('')
	//const [preguntasafirmativas, setPreguntasAfirmativas] = useState('')
    
    useEffect( ()=>{
        listarResultados()        
    },[] )

    const listarResultados=async()=>{
        const id = sessionStorage.getItem('idusuario')
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/resultados/listarID/'+id,
        {
          headers:{'autorizacion':token}
        })
        console.log(respuesta.data)
        setIdentidad(respuesta.data.identidad)
        setNombre(respuesta.data.nombre)
        setLetraintereses(respuesta.data.letraintereses)
        setLetraaptitudes(respuesta.data.setLetraaptitudes)
        setRamaintereses(respuesta.data.ramaintereses)
        setRamaaptitudes(respuesta.data.ramaaptitudes)
        //setPreguntasAfirmativas(resultados.preguntasafirmativas)
      }

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />        
        <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Box sx={{
                  marginTop: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                  <AppRegistrationIcon/>
              </Avatar>
            <Typography component="h1" variant="h4" align="center" color="blue">
            Resultado Test Chaside
            </Typography>
            <br/>
            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>                            
                            <StyledTableCell align="center">Identificación</StyledTableCell>
                            <StyledTableCell align="center">Nombre(s)</StyledTableCell>
                            <StyledTableCell align="center">Letra Intereses</StyledTableCell>
                            <StyledTableCell align="center">Rama Intereses</StyledTableCell>
                            <StyledTableCell align="center">Letra Aptitudes</StyledTableCell>
                            <StyledTableCell align="center">Rama Aptitudes</StyledTableCell>
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                            <StyledTableCell align="center">{identidad}</StyledTableCell>
                            <StyledTableCell align="center">{nombre}</StyledTableCell>
                            <StyledTableCell align="center">{letraintereses}</StyledTableCell>
                            <StyledTableCell align="center">{ramaintereses}</StyledTableCell>
                            <StyledTableCell align="center">{letraaptitudes}</StyledTableCell>
                            <StyledTableCell align="center">{ramaaptitudes}</StyledTableCell>
                            <StyledTableCell align="center">
                            <Button type="submit" variant="contained" sx={{ mt: 1, mb: 1 }} color="warning">Repetir Test</Button>
                            </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                  </TableContainer>
                  <br/>
                  <img src="/img/Tabla_Chaside.jpg" alt="Tabla Chaside" width="680" height="300"></img>
            </Box>
          </Paper>
        </Container>
    </ThemeProvider>
    )
}

