import './InputText.css'

const InputText = ({ label }) => {
    return (
        <div className='input'>
            <label>{label}</label>
            <input type="text" />
        </div>
    )
}

export default InputText;