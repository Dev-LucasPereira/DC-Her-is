const container = document.querySelector(".heros-nav")
var cardHero = document.querySelector(".card")
const container2 = document.querySelector(".container-2")

var herosDc = [
    {
        aka: "Batman",
        name: "Bruce Wayne",
        photo: "https://static.wikia.nocookie.net/dccomics/images/0/08/Batman_Vol_3_131_Textless_Fabok_Variant.jpg/revision/latest?cb=20240221225901&path-prefix=pt",
        height: "1,88m a 1,90m",
        weight: "80kg a 90kg",
        gender: "Masculino",
        bio: "Marcado pelo assassinato dos pais, Bruce Wayne jura combater o crime em Gotham City como o vigilante Batman. Sem superpowers, ele se destaca pela inteligência, tecnologia e habilidades de detetive. Aliado a figuras como Robin e Batgirl, enfrenta vilões icônicos como Coringa e Pinguim em uma cidade corrompida. Símbolo do medo para os criminosos, Batman protege os inocentes e luta pela justiça em Gotham.",
        powers: "Intelecto genial, Mestre em artes marciais, Riqueza, Estragista nato, Maior detetive do mundo"
    },
    {
        aka: "Super Homem",
        name: "Clark Kent",
        photo: "https://static.wikia.nocookie.net/dccomics/images/a/a5/Superman_Vol_5_1_Textless.jpg/revision/latest/scale-to-width-down/1200?cb=20200421194020&path-prefix=pt",
        height: "1,90m a 2 metros",
        weight: "100kg a 120kg",
        gender: "Masculino",
        bio: "Kal-El, enviado à Terra como bebê de Krypton, é criado por Jonathan e Martha Kent em Smallville. Tornando-se Superman, ele usa seus powers kryptonianos para defender a verdade e a justiça em Metropolis. Clark Kent, um jornalista do Planeta Diário, esconde sua identidade heroca para viver uma vida normal. Sua Fortaleza da Solidão no Pólo Norte guarda tecnologia kryptoniana e memórias de seu planeta natal. Superman, um ícone cultural atemporal, continua inspirando gerações com seus valores e heroísmo.",
        powers: "Super força, Invulnerabilidade, Super velocidade, Voo, Visão de raio-X, Visão telescópica, Visão calorífica, Super audição, Sopro super poderoso, Fator de cura acelerado"
    },
    {
        aka: "Mulher Maravilha",
        name: "Diana de Themyscira",
        photo: "https://nishiweb.com.br/animecomics/images/upload/110.jpg",
        height: "1,75m a 1,80m",
        weight: "65kg a 75kg",
        gender: "Feminino",
        bio: "Nascida na paradisíaca Themyscira, Diana é treinada como guerreira e enviada à Terra para combater a guerra. Torna-se a Mulher Maravilha, defensora da verdade e da justiça, utilizando o Laço da Verdade e os Braceletes da Vitória. Inteligente, compassiva e diplomática, Diana se une à Liga da Justiça e se torna um ícone do feminismo, inspirando mulheres com sua força, bravura e compromisso com a justiça.",
        powers: "Força sobre-humana, Velocidade sobre-humana, Invulnerabilidade, Voo, Fator de cura, Comunicação com animais, Inteligência, Combate corpo a corpo, Conhecimento em tática e estratégia"
    },
    {
        aka: "Flash",
        name: "Barry Allen",
        photo: "https://hqrock.com.br/wp-content/uploads/2011/06/flash-for-reboot.jpg",
        height: "1,75m a 1,80m",
        weight: "70kg a 80kg",
        gender: "Masculino",
        bio: "Barry Allen, o Flash, é um cientista forense que, após um acidente com produtos químicos e um raio, adquiriu supervelocidade. Motivado pela morte da mãe nas mãos de um velocista, Barry dedica sua vida a combater o crime e proteger os inocentes.",
        powers: "Supervelocidade, Intangibilidade, Fator de cura acelerado, Criação de vórtices, Viagem no tempo "
    },
    {
        aka: "Capitão Marvel",
        name: "Billy Batson",
        photo: "https://static.wikia.nocookie.net/dccomics/images/6/61/Shazam%21_Vol_3_1_Textless_Variant.jpg/revision/latest?cb=20190608173315&path-prefix=pt",
        height: "1,80m a 1,90m",
        weight: "80kg a 90kg",
        gender: "Masculino",
        bio: "Billy Batson, um menino puro de coração, é escolhido pelo Mago Shazam para ser o Campeão da Eternidade. Ao pronunciar a palavra mágica 'Shazam!', Billy se transforma no poderoso Shazam, um adulto com os powers dos deuses. Shazam usa seus powers para defender os inocentes e lutar contra o mal. Ele é um símbolo de esperança e inspiração para todos que o veem, mostrando que mesmo um jovem comum pode se tornar um herói extraordinário.",
        powers: "Super força, Super velocidade, Invulnerabilidade, Voo, Sabedoria de Salomão, Magia, Compartilhamento de Poder"
    },
    {
        aka: "Mulher Gavião",
        name: "Shayera Hol",
        photo: "https://i.pinimg.com/736x/e5/4a/e1/e54ae13d3508d50309ae60756484fde8.jpg",
        height: "1,75m a 1,80m",
        weight: "65kg a 70kg",
        gender: "Feminino",
        bio: "Shayera Hol, a Mulher Gavião, guerreira alada de Thanagar, cruzou o cosmos para defender a Terra. Com força, velocidade e agilidade sobre-humanas, ela voa pelos céus como um raio de esperança. Treinada como Guardiã Alada, Shayera alia inteligência tática à ferocidade em combate, tornando-se  membro crucial da Liga da Justiça. Leal aos seus amigos e defensora da justiça, ela enfrenta qualquer desafio com bravura e determinação.",
        powers: "Voo, Força Sobre-humana, Fator de cura acelerado, Visão aguçada, Conhecimento de combate, Memória de vidas passadas"
    },
    {
        aka: "Aquaman",
        name: "Arthur Curry",
        photo: "https://static.wikia.nocookie.net/dccomics/images/a/a0/Aquaman_Vol_8_48_Textless_Variant.jpg/revision/latest?cb=20190615033729&path-prefix=pt",
        height: "1,80m a 1,90m",
        weight: "90kg a 100kg",
        gender: "Masculino",
        bio: "Arthur Curry, Aquaman, herdeiro da Atlântida, governa os oceanos com força sobre-humana e telepatia marinha. Criado entre dois mundos, une a Atlântida à superfície, buscando paz e coexistência, com tridente mágico, enfrenta vilões e defende mares e Terra. Símbolo de esperança e defensor da natureza, inspira o respeito pelos oceanos. Líder sábio e compassivo, guia seu povo e a humanidade para um futuro melhor.",
        powers: "Força sobre-humana, Natação sobre-humana, Comunicação com animais marinhos, Visão noturna, Resistência à pressão, Durabilidade sobre-humana, Fator de cura acelerado, Controle da água"
    },
    {
        aka: "Cyborg",
        name: "Victor Stone",
        photo: "https://static.wikia.nocookie.net/dccomics/images/7/78/Cyborg_Vol_1_1_Textless.jpg/revision/latest?cb=20180125190239&path-prefix=pt",
        height: "1,80m a 2 metros",
        weight: "150kg a 200kg",
        gender: "Masculino",
        bio: "Victor Stone, um atleta promissor, teve sua vida alterada por um acidente trágico. Reconstruído com tecnologia cibernética, ele se tornou o Ciborgue, transcendendo a soma de suas partes mecânicas. Símbolo de força interior e potencial humano, o Ciborgue representa a esperança de um futuro onde tecnologia e humanidade coexistem em harmonia.",
        powers: "Força sobre-humana, Velocidade sobre-humana, Resistência sobre-humana, Fator de cura acelerado, Acesso a informação, Inteligência artificial, Tecnologia alienígena"
    },
    {
        aka: "Lanterna Verde",
        name: "John Stewart",
        photo: "https://i.pinimg.com/474x/c2/3c/66/c23c66c241fe996c26cfee48dbc1f843.jpg",
        height: "1,80m a 1,90m",
        weight: "80kg a 90kg",
        gender: "Masculino",
        bio: "John Stewart, o Lanterna Verde, destaca-se pela inteligência, estratégia e liderança. Ex-fuzileiro e arquiteto, ele utiliza o anel de poder de forma criativa e estratégica, construindo estruturas de luz e projetando energia com precisão. Líder nato e estrategista brilhante, John inspira outros Lanternas Verdes. Motivado pela justiça, protege os inocentes e busca soluções pacíficas. Símbolo de esperança e inspiração, ele prova que inteligência e liderança superam qualquer obstáculo.",
        powers: "Voo, Força sobre-humana, Projeção de energia, Construções de luz sólida, Campo de força, Tradução universal"
    },
    {
        aka: "Caçador de Marte",
        name: "Martian Manhunter",
        photo: "https://pm1.aminoapps.com/6341/d2d752d6b5300fedbc184470f618690a6da0eba4_hq.jpg",
        height: "1,85m a 1,90m",
        weight: "90kg a 100kg",
        gender: "Masculino",
        bio: "J'onn J'onzz, o Caçador de Marte, protege a Terra com força, voo, invisibilidade e telepatia. Refugiado após a destruição de Marte, luta pela justiça na Liga da Justiça. Inteligente e introspectivo, ele inspira outros heróis com sua sabedoria e powers únicos.",
        powers: "Força sobre-humana, Voo, Invisibilidade, Intangibilidade, Mudança de forma, Telepatia, Telecinese, Visão marciana, Longevidade sobre-humana"
    },
]


herosDc.map((hero) => { // estrutura do arrow function () => {}, dentro dos parenteses é o item/objeto que estou enviando , a seta representa uma function e dentro de chaves é oque a function faz
    var newCard = document.createElement("button")
    var cardName = document.createElement("div")

    newCard.setAttribute("class", "card")
    cardName.setAttribute("class", "card-name")

    container.appendChild(newCard)
    newCard.appendChild(cardName)

    newCard.style.cssText = `background-image: url(${hero.photo});`
    cardName.textContent = hero.aka

    newCard.addEventListener("click", function () {
        var bio = document.querySelector(".bio")
        var powerText = document.querySelector(".power")
        var height = document.querySelector(".height")
        var weight = document.querySelector(".weight")
        var gender = document.querySelector(".gender")

        bio.textContent = hero.bio
        powerText.textContent = hero.powers
        height.textContent = hero.height
        weight.textContent = hero.weight
        gender.textContent = hero.gender

        styleSelected(newCard, cardName)

    })
})


function styleSelected(cardSelect, nameSelect) {
    var cssCard = document.querySelectorAll(".card") // retorna um array NodeList "nodeList é um array q nao funciona com map "
    var cssName = document.querySelectorAll(".card-name")

    var cssCard2 = [...cssCard] // convertando o cssCard para um array normal, estou usando spread quue é os "..." que pega tudo o que está dentro de um array
    var cssName2 = [...cssName]

    cssCard2.map((card) => {
        card.style.border = "2px solid rgb(154, 154, 154)"

    })

    cssName2.map((card) => {
        card.style.borderLeft = "8px solid rgb(192, 191, 191)"
        card.style.backgroundColor = "rgba(39, 39, 39, 0.748)"

    })

    cardSelect.style.border = "2px solid #0333cf"
    nameSelect.style.borderColor = "#3e5fcd"
    nameSelect.style.backgroundColor = "#0333cf76"

}

function teste(event) {
    if (event.key === "Enter") {

        let divPai = document.querySelector(".heros-nav")
        let divFilhos = divPai.querySelectorAll("button")
        divFilhos.forEach(butao => butao.remove()) // forEach só pode ser usada na divFilhos por que ela é um array de buttons// forEach é similar ao map
        
      
        herosDc.map((hero) => {
            if (hero.aka.toLowerCase().includes(event.target.value.toLowerCase())) {
                console.log("batata")
                var newCard = document.createElement("button")
                var cardName = document.createElement("div")
            
                newCard.setAttribute("class", "card")
                cardName.setAttribute("class", "card-name")
            
                container.appendChild(newCard)
                newCard.appendChild(cardName)
            
                newCard.style.cssText = `background-image: url(${hero.photo});`
                cardName.textContent = hero.aka
            
                newCard.addEventListener("click", function () {
                    var bio = document.querySelector(".bio")
                    var powerText = document.querySelector(".power")
                    var height = document.querySelector(".height")
                    var weight = document.querySelector(".weight")
                    var gender = document.querySelector(".gender")
            
                    bio.textContent = hero.bio
                    powerText.textContent = hero.powers
                    height.textContent = hero.height
                    weight.textContent = hero.weight
                    gender.textContent = hero.gender
            
                    styleSelected(newCard, cardName)
            
                })

            }
        })

    }
}