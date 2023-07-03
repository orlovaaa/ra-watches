import { useState } from 'react'
import PropTypes from 'prop-types'

export default function AddWatch({onAddWatch}) {
    const [form, setForm] = useState({
        name: '',
        offsetUTC: ''
    })

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm(prevStep => ({...prevStep, [name]: value}))
    }

    const handleAddWatch = (ev) => {
        ev.preventDefault();
        const watch = {
            name: form.name,
            offsetUTC: Number(form.offsetUTC),
        }

        onAddWatch(watch)
        setForm({
            name: '',
            offsetUTC: ''
        })
    }

    
    return (
        <form className='form'>
            <div className="form__box">
                <label className="form__box-label">Название</label>
                <input type='string' name='name' className="form__box-input" value={form.name} onChange={handleChange} required/>
            </div>
            <div className="form__box">
                <label className="form__box-label">Временная зона</label>
                <input type='number' name='offsetUTC' className="form__box-input" value={form.offsetUTC} onChange={handleChange} required/>
            </div>
            <div className="form__box">
                <button className='form__box-btn' onClick={handleAddWatch}>Добавить</button>
            </div>
        </form>
    )
}

AddWatch.propTypes = {
    onAddWatch: PropTypes.func,
    form: PropTypes.object,
    setForm: PropTypes.func
}