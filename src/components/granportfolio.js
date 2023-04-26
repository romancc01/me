
import React from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import imagen from'../static/images/cards/portfolio.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Image = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
});


const Granportafolio = ({ imagenSeleccionada }) => {
  return (
    <Box sx={{ width: '60%' }}>
      <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          {/* <Item>
          <img src={imagenSeleccionada || imagen} alt="Imagen de proyecto"></img>
          </Item> */}
          <Item>
            <div style={{ maxWidth: '500px', maxHeight: '600px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
              <Image src={imagenSeleccionada || imagen} alt="Imagen de proyecto" />
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Granportafolio;
