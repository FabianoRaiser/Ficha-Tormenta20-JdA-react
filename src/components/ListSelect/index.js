
import './ListSelect.css'

const ListSelect = ({ label, list }) => {
    
    return (
        <div className='select'>
            <label>{label}</label>
            <select>
                {list.map(item => <option key={item.nome}>{item.nome}</option>)}
            </select>
        </div>
    )
}

export default ListSelect;