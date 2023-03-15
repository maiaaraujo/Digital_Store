import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

export default function DetalhesProduto() {
    const {id} = useParams();

    return (
        <div>
            Detalhes do Produto {id}

            <Grid container>
                <Grid item xs={7}>
                Fotos
                </Grid>

                <Grid item xs={5}>
                Informações
                </Grid>

            </Grid>
        </div>
    )
}

