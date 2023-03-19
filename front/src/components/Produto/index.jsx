import { Paper, Stack, Chip, Grid } from "@mui/material";
import React from "react";
import sapato from './sapato.png';



export default function Produto ()
{
    return (
    <>
    <Stack>
        <Paper elevation={2}>
            <img src={sapato} alt='sapato.png'/>
        </Paper>

        <h6>Tênis</h6>
        <span>K-Swiss V8 - Masculino</span>
        <div className="price"> <h4>$200</h4> <b>$100</b> </div>

    </Stack>
     </>
    );
}