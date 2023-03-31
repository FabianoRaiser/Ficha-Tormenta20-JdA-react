import './SpanAtri.css'

const SpanAtri = ({ label }) => {
    return (
        <div className='span-atri'>
            <label>{label}</label>
            <span>0</span>
        </div>
    )
}

export default SpanAtri;