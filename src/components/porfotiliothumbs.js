
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import imagen from'../static/images/cards/portfolio.jpg'
import imagen1 from'../static/images/cards/SIPSEIV.png'
import Button from '@mui/material/Button';
const proyectos = [
  {
    id: 1,
    nombre: 'Proyecto 1',
    descripcion: 'Descripción del proyecto 1',
    ima: imagen
  },
  {
    id: 2,
    nombre: 'Proyecto 2',
    descripcion: 'Descripción del proyecto 2',
    ima: imagen1
  },
  {
    id: 3,
    nombre: 'Proyecto 3',
    descripcion: 'Descripción del proyecto 3',
    ima: imagen
  },
  {
    id: 4,
    nombre: 'Proyecto 4',
    descripcion: 'Descripción del proyecto 4',
    ima: imagen
  },
  {
    id: 5,
    nombre: 'Proyecto 5',
    descripcion: 'Descripción del proyecto 5',
    ima: imagen
  },
  {
    id: 6,
    nombre: 'Proyecto 6',
    descripcion: 'Descripción del proyecto 6',
    ima: imagen
  }
];

const Item = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '300px', // altura fija para el contenedor
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // ajustar la imagen al contenedor
  
  },  
  '& .MuiTouchRipple-root': {
    color: 'rgba(255, 255, 255, 0.3)',
  },
  '& .MuiTouchRipple-rippleVisible': {
    animationDuration: '1s',
  },
}));

export default function RowAndColumnSpacing() {
  const [titulo, setTitulo] = React.useState('');

  const handleClick = (nombre) => {
    setTitulo(nombre);
  };

  return (
    <Box sx={{ width: '40%', margin: '0 auto'}}>
    <Box sx={{ width: '40%', margin:'0 auto',height:'30%' }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} wrap="wrap">
         {titulo}
        </Grid>
    </Box>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} wrap="wrap">
        {proyectos.map((proyecto) => (
          <Grid item xs={4} key={proyecto.id} >
            <Item onClick={() => handleClick(proyecto.nombre)}  >
              <img src={proyecto.ima} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} alt={proyecto.descripcion}></img>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
