import { useParams } from "react-router-dom";

export default function DetalhesProduto() {
    const {id} = useParams();

    <div>
        Detalhes do Produto {id}
    </div>
}

