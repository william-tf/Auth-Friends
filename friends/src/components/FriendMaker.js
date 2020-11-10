import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from './utils/auth'
import axios from 'axios'


const initialValues = {
    id: Date.now(),
    name: '',
    age: '',
    email:''
}


const FriendMaker = () => {
    const [form, setForm] = useState(initialValues)
    const history = useHistory()

    const change = (e) =>{
        const {value, name} = e.target;
        setForm({...form,
            [name]:value
        })
    }

    const submit = (e) =>{
        e.preventDefault();
        const newCard = {id:form.id, name:form.name, age:form.age, email:form.email}
        setForm(initialValues);
        postEvent(newCard);
        history.push('/protected')

    }


    const postEvent = (newCard)=>{
        axiosWithAuth()
        .post('/friends', newCard)
        .then(res =>{
            console.log('this is inside friendMaker:', res);
            history.push('/protected')
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            <form onSubmit={submit}>
                <input
                name="name"
                type="text"
                value={form.name}
                onChange={change}
                placeholder="enter name"
                />
                <input
                name="age"
                type="text"
                value={form.age}
                onChange={change}
                placeholder="enter age"
                />
                <input
                type="text"
                name="email"
                value={form.email}
                onChange={change}
                placeholder="enter email"
                />
                <button>Add Fwiend:3</button>
            </form>
        </div>
    )
}

export default FriendMaker