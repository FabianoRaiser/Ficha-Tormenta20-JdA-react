import Points from '../Points';
import './PointsCard.css'

const PointsCard = () => {
    return (
        <section className='points-card'>
            <Points label={"Vida"}/>
            <Points label={"Mana"}/>
        </section>
    )
}

export default PointsCard;