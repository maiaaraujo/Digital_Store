import Menu from "../../components/Menu";
import {Card, Button, Grid} from "@mui/material";
import React from "react";

import "./styles.css";

function CadaProduto (props) {
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
        <Card style={{width: '100%', padding: '10px'}}>
        {props.produto} (R$ {props.valor})

        <Button  disabled={quantidade <= 1} onClick={remove}>-</Button>
         {quantidade}
        <Button className="x" onClick={add}>+</Button>

        <hr/>

        
        TOTAL: R$ {props.valor * quantidade}
        </Card>
    )
}

export default function Produtos () {
    

    return (
        <div>
            <Menu/>
            Página de Produtos

            <hr/>

            <Grid container spacing={4}>
                <Grid item>
                    <CadaProduto produto="Pratinho" valor="8.90"/>
                </Grid>

                <Grid item>
                    <CadaProduto produto="Heineken" valor="10"/>
                </Grid>

                <Grid item>
                    <CadaProduto produto="Coca-cola" valor="5"/>
                </Grid>

                <Grid item>
                    <CadaProduto produto="Fanta" valor="5"/>
                </Grid>
           </Grid>

        
</div>
  )

}