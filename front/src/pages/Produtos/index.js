import Menu from "../../components/Menu";
import {Card, Button} from "@mui/material";
import React from "react";
//import {useState} from "react";

export default function Produtos () {
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
        <div>
            <Menu/>
            Página de Produtos

            <hr/>

            <Card>
                Pizza de cogumelos ( R$ 29 )

                <Button onClick={remove}>-</Button>
                 {quantidade}
                <Button onClick={add}>+</Button>

                <hr/>

                TOTAL: R$ {29 * quantidade}
            </Card>
        </div>


    )

}