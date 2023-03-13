import { Paper, Stack } from "@mui/material";
import React from "react";
import sapato from "./sapato.png";

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
          </Stack>
        </>
    )
}