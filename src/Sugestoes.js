import Sugestao from "./Sugestao";

export default function Sugestoes(){
    return(
        <div class="sugestoes">
            <Titulo />
            <Sugestao />
        </div>
    )
}
function Titulo(){
    return(
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    )
}