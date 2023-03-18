import { Paper, Stack } from '@mui/material';
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
          <div>
                        Tenis
         </div>
          <span>K-Swiss V8 - Masculino</span>
          <h4>$100</h4>
          </Stack>
        </>    )
}