import Menu from "../../components/Menu";
import {Card, Button} from "@mui/material";
import React from "react";
//import {useState} from "react";

function CadaProduto () {
    const [quantidade, alterarQuantidade] = React.useState(1);

    const add = () => { 
       alterarQuantidade(quantidade + 1);
    }

    const remove = () => {
        if (quantidade === 1) {
            return;
        }
        alterarQuantidade(quantidade - 1);
    }
    return (
        <Card>
        Pizza de cogumelos ( R$ 29 )

        <Button disabled={quantidade <= 1} onClick={remove}>-</Button>
         {quantidade}
        <Button onClick={add}>+</Button>

        <hr/>

        TOTAL: R$ {29 * quantidade}
        </Card>
    )
}

export default function Produtos () {
    

    return (
        <div>
            <Menu/>
            Página de Produtos

            <hr/>
        
        <CadaProduto/>

        <CadaProduto/>
           
        </div>


    )

}