import { Article } from "./Article"
import redBull from "../assets/img/redBull.jpg"
import kylian from "../assets/img/kylian.jpg"
import Robert from "../assets/img/Robert.png"

export function ArticleContainer (){
    return(
    <section className="mt-6 lg:flex">
        <Article
         img={redBull}
         numero="01"
         titulo="Tenemos F1"
         texto="Esta semana regresa a Canada la carrera de F1"
        />
        <Article 
        img={kylian}
        numero="02"
        titulo="Kylian Mbappé se va al Real Madrid"
        texto="Tal y como se esperaba el futbolista acaba de firmar con el reciente ganador de europa"
        />
        <Article
        img={Robert}
        numero="03"
        titulo="Robert el preñador"
        texto="Robert embaraza las mujereres y luego la abandona"
        />
    </section>
    )
}