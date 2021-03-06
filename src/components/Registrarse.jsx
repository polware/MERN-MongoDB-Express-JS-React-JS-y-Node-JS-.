import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { NavLink } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios'
import Swal from 'sweetalert2'

const theme = createTheme();

export default function Registrarse() {
  const [nombres,setNombres]=useState('')
  const [apellidos,setApellidos]=useState('')
  const [identificacion,setIdentificacion]=useState('')
  const [contrasena,setContrasena]=useState('')
  const [correo,setCorreo]=useState('')
  
  const [letraintereses] = useState('')
  const [letraaptitudes] = useState('')
  const [ramaintereses] = useState('')
  const [ramaaptitudes] = useState('')
  const [preguntasafirmativas] = useState('')

  const guardar = async(e) => {
      e.preventDefault();
      
      const identidad = document.getElementById('identificacion').value
      const nombre = document.getElementById('nombres').value
      const resultados = {
        identidad,
        nombre,
        letraintereses,
        letraaptitudes,
        ramaintereses,
        ramaaptitudes,
        preguntasafirmativas,
      }
      
      const student={
          nombres,
          apellidos,
          identificacion,
          contrasena,
          correo,
      }
      const respuesta = await Axios.post('/estudiante/crear', student);
      const mensaje= respuesta.data.mensaje
      if(mensaje === 'ERROR') {
          Swal.fire({
            icon: 'error',
            title: 'No. identificación ya está registrado',
            showConfirmButton: false,
            timer: 2000
            })
          document.getElementById('identificacion').value = ""
      }
      else {
        await Axios.post('/resultados/crear', resultados);
        Swal.fire({
          icon: 'success',
          title: mensaje,
          showConfirmButton: false,
          timer: 1500
          })
          setTimeout(()=>{
              window.location.href='/'
          },1500)
      }      
    };

      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">Registrar Cuenta</Typography>
            <Box component="form" noValidate onSubmit={guardar} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField name="nombres" required fullWidth id="nombres" label="Nombre(s)" autoFocus onChange={(e)=>setNombres(e.target.value)}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField required fullWidth id="apellidos" label="Apellido(s)" name="apellidos" onChange={(e)=>setApellidos(e.target.value)}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth id="identificacion" label="N° Identificación" name="id" onChange={(e)=>setIdentificacion(e.target.value)}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth id="correo" label="Correo Electrónico" type="email" onChange={(e)=>setCorreo(e.target.value)}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth name="contrasena" label="Contraseña" type="password" id="contrasena" onChange={(e)=>setContrasena(e.target.value)}/>
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Registrarse</Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <NavLink variant="body2" className="nav-link" to="/">¿Ya tiene una cuenta? Iniciar Sesión</NavLink>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <br/>
            <br/>
          </Container>
        </ThemeProvider>
      );
}
