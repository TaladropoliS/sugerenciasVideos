class Multimedia {
    constructor(url) {
        let _url = url
        this.getUrl = () => _url
        this.setUrl = (nuevaUrl) => _url = nuevaUrl
    }

    get url() {
        return this.getUrl()
    }

    set url(nuevaUrl) {
        this.setUrl(nuevaUrl)
    }

    setInicio() {
        return 'Este método es para realizar un cambio en la URL del video'
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        let _id = id
        this.getId = () => _id
        this.setId = (nuevaId) => _id = nuevaId
    }

    get id() {
        return this.getId()
    }

    set id(nuevaId) {
        this.setId(nuevaId)
    }

    playMultimedia() {
        let frame = document.getElementById(this.getId())
        frame.setAttribute('src', this.getUrl())
    }

    setInicio(tiempo) {
        let nuevaUrl = `${this.getUrl()}?start=${tiempo}`;
        this.setUrl(nuevaUrl);
    }
}

const miReproductor = (() => {
    let miMetodoPrivado;


    miMetodoPrivado = () => {


        let musica1 = new Reproductor('https://www.youtube.com/embed/r48BLz42NuI?autoplay=1&mute=0', 'musica')
        let pelicula1 = new Reproductor('https://www.youtube.com/embed/Wlfnn5AadQQ?', 'pelicula')
        let serie1 = new Reproductor('https://www.youtube.com/embed/8pApNU09c_g?', 'serie')

        console.log(musica1.id + '\n' + musica1.url)
        console.log(pelicula1.id + '\n' + pelicula1.url)
        console.log(serie1.id + '\n' + serie1.url)

        musica1.playMultimedia()
        pelicula1.playMultimedia()
        serie1.playMultimedia()

        musica1.setInicio(60)
        pelicula1.setInicio(1)
        serie1.setInicio(60)

    };

    return {
        miFuncionPublica: () => {
            miMetodoPrivado();
        }
    }
})();


miReproductor.miFuncionPublica();