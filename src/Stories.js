export default function Stories(){
    return(
        <div class="stories">
            <Story />
            <Setinha />
        </div>
    )
}
function Story(){
    return(
        storyImages.map((name) => {
            return (
                <div class="story">
                    <div class="imagem">
                        <img src={`assets/img/${name}.svg`} />
                    </div>
                    <div class="usuario">
                        {name}
                    </div>
                </div>
            )
        })
    )
}

function Setinha(){
    return(
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
}

const storyImages = [
    '9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet',
    'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet'
];
