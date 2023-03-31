import './InfoCard.css'
import InputText from './../InputText';
import ListSelect from './../ListSelect';
import LvlChar from './../LvlChar'

const InfoCard = ({ racas, classes, origens, divindades }) => {
    return (
        <section className='info-card'>
            <InputText label="Personagem" />
            <InputText label="Jogador" />
            <ListSelect label="Raça" list={racas}/>
            <ListSelect label="Origem" list={origens}/>
            <ListSelect label="Classe" list={classes} />
            <ListSelect label="Divindade" list={divindades} />
            <LvlChar />
        </section>
    )
}

export default InfoCard;