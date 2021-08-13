import React, { useState } from 'react'
import { Container } from './styles'

import { newClient } from '../../api/api'

export function CreateClient() {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            name,
            cpf,
            phone,
            birthday
        }

        newClient(data)

        setName('')
        setCpf('')
        setPhone('')
        setBirthday('')
    }

    return (
        
        <Container>
            <h1>Cadastrar novo cliente</h1>

            <form onSubmit={handleSubmit}>
                <div className='form-name'>
                    <label>Nome</label>
                    <input 
                        placeholder='Insira um nome'
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />
                </div>

                <div className='form-rest'>
                    <div>
                        <label>CPF</label>
                        <input 
                            placeholder='XXX.XXX.XXX-XX'
                            type='number'
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Telefone</label>
                        <input 
                            placeholder='(XX) XXXXX-XXXX' 
                            type='number'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Data de nascimento</label>
                        <input 
                            placeholder='XX/XX/XXXX'
                            type='number'
                            value={birthday}
                            onChange={e => setBirthday(e.target.value)}
                        />
                    </div>
                </div>

                <button type='submit'>Criar novo cliente</button>
            </form>
        </Container>
    )
}
