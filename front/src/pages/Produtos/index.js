import Menu from "../../components/Menu";
import {Card, Button} from "@mui/material";
import React from "react";
import {useState} from "react";

export default function Produtos () {
    let quantidade = 10;

    const add = () => {
        alert ('adicionando');
    }

    const remove = () => {
        alert ('diminuindo');
    }

    return (
        <div>
            <Menu/>
            Página de Produtos

            <hr/>

            <Card>
                <Button onClick={remove}>-</Button>
                 {quantidade}
                <Button onClick={add}>+</Button>
            </Card>
        </div>


    )

}