import './InputAtri.css'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"

const InputAtri = ({ label }) => {
    return (
        <div className='input-atri'>
            <label>{label}</label>
            <button className='botao'><FaPlusCircle /></button>
            <span>0</span>
            <button className='botao'><FaMinusCircle /></button>
        </div>
    )
}

export default InputAtri;