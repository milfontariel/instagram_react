export default function Post(props){
    return(
        <div class="post">
            <Topo usuario={props.usuario} />
            <Conteudo conteudo={props.conteudo} />
            <Fundo curtida={props.curtida} curtidas={props.curtidas} />
        </div>
    )
}
function Topo(props){
    return(
        <div class="topo">
            <div class="usuario">
                <img src={`assets/img/${props.usuario}.svg`} />
                {props.usuario}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}
function Conteudo(props){
    return(
        <div class="conteudo">
            <img src={`assets/img/${props.conteudo}.svg`} />
        </div>
    )
}
function Fundo(props){
    return(
        <div class="fundo">
            <Acoes></Acoes>
            <Curtidas curtida={props.curtida} curtidas={props.curtidas} />
        </div>
    )
}
function Acoes(){
    return(
        <div class="acoes">
            <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
            <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}
function Curtidas(props){
    return(
        <div class="curtidas">
            <img src={`assets/img/${props.curtida}.svg`} />
            <div class="texto">
                Curtido por <strong>{props.curtida}</strong> e <strong>outras {props.curtidas} pessoas</strong>
            </div>
        </div>
    )
}

