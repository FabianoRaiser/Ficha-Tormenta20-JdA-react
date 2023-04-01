import './SkillsCard.css'

const SkillsCard = ({ list }) => {
    return (
        <section className='skills-card'>
            <h3>Perícias</h3>
            <ul>
                <li className='skills-title'><span>Treinado</span><span>Nome</span><span>Total</span><span>1/2 Nivel</span><span>Hab</span><span>Treino</span><span>Outros</span></li>
                {list.map(item =>
                    <li key={item.id}
                        className='skills-item'>
                        <input type='checkbox' />
                        <p>{item.nome}</p>
                        <span className='skills-item__total'>00</span>
                        <span>1</span>
                        <span>hab</span>
                        <span>0</span>
                        <input className='input-outros'/>
                    </li>)}
            </ul>
        </section>
    )
}

export default SkillsCard;