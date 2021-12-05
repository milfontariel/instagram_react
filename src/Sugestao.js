export default function Sugestao(){
    return(
        sugestao.map((user) => {
            return(
                <div class="sugestao">
                    <div class="usuario">
                    <img src={`assets/img/${user.usuario}.svg`} />
                    <div class="texto">
                        <div class="nome">{user.usuario}</div>
                        <div class="razao">{
                            user.segue 
                            ? 'Segue você' 
                            : 'Novo no Instagram'
                        }</div>
                    </div>
                    </div>
    
                    <div class="seguir">Seguir</div>
                </div>    
            );
        })
    )
}

const sugestao = [
    {
        usuario: 'bad.vibes.memes',
        segue: true
    },
    {
        usuario: 'chibirdart',
        segue: true
    },
    {
        usuario: 'razoesparaacreditar',
        segue: false
    },
    {
        usuario: 'adorable_animals',
        segue: true
    },
    {
        usuario: 'smallcutecats',
        segue: true
    }
];