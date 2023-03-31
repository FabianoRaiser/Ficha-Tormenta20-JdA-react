import './Points.css'

const Points = ({ label }) => {
    return (
        <div className='points'>
            <h3>Pontos de {label}</h3>
            <div>
                <label>Máximos</label>
                <span>0</span>
            </div>
            <div>
                <label>Atuais</label>
                <input type="number" />
            </div>
        </div>
    )
}

export default Points;