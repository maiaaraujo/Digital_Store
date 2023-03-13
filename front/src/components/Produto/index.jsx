import { Paper } from "@mui/material";
import React from "react";

export default function Produto()
{
    return(
        <>
          <Paper elevation={2}> 
             Produto
          </Paper>
          <span>Categoria</span>
          <h4>Nome do Produto</h4>
        </>
    )
}