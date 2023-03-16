import { Button, Paper, Stack } from '@mui/material';
import { blue, pink } from '@mui/material/colors';
import React from 'react';
import sapato from './sapato.png';

export default function Produto()
{
    return(
        <>
          <Stack>
          <Paper elevation={2}> 
             <img src={sapato}/>
          </Paper>
          <span>Categoria</span>
          <h4>Nome do Produto</h4>
          <Button sx={{ backgroundColor: blue[500]}}>Compre agora</Button>
          </Stack>
        </>
    )
}