import Post from './Post';

export default function Posts(){
    return(
        <div class="posts">
            {ConteudoPost.map((post) => {
                return(
                    <Post usuario={post.usuario} conteudo={post.conteudo}
                    curtida={post.curtida} curtidas={post.curtidas} />
                    );
            })}
        </div>
        
    )
}

const ConteudoPost = [
    {
        usuario: 'meowed',
        conteudo: 'gato-telefone',
        curtida: 'respondeai',
        curtidas: 101.523
    },
    {
        usuario: 'barked',
        conteudo: 'dog',
        curtida: 'adorable_animals',
        curtidas: 99.159
    }
];