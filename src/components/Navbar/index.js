import {Badge, Button, TextField, } from "@mui/material";
import {Settings} from "@mui/icons-material";
export default function Navbar() {
    return (
        <div>
            <Settings/>
            Navbar
            <Button color="secondary" variant="contained">Entrar</Button>

            <TextField label="Oq vc procura"/>
        </div>
    )
}
