import InputAtri from '../InputAtri';
import SpanAtri from '../SpanAtri';
import './AtriCard.css'

const AtriCard = () => {
    return (
        <section className='atri-card'>
            <h3>Atributos</h3>
            <p>Pontos Disponiveis: {10}</p>
            <div>
                <InputAtri label={"For"} />
                <InputAtri label={"Des"} />
                <InputAtri label={"Con"} />
                <InputAtri label={"Int"} />
                <InputAtri label={"Sab"} />
                <InputAtri label={"Car"} />
            </div>
            <p>Resultado Final</p>
            <div>
                <SpanAtri label={"For"} />
                <SpanAtri label={"Des"} />
                <SpanAtri label={"Con"} />
                <SpanAtri label={"Int"} />
                <SpanAtri label={"Sab"} />
                <SpanAtri label={"Car"} />
            </div>
        </section>
    )
}

export default AtriCard;