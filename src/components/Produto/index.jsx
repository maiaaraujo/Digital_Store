import { Paper, Stack } from "@mui/material";
import React from "react";
import tenis02 from './tenis02.png';

export default function Produto ()
{
    return (
    <>
        <Stack>
        <Paper elevation={2}>
            <img src={tenis02}/>
        </Paper>
        <span>Categoria</span>
        <h4>Nome do produto</h4>
        </Stack>
     </>
    );
}