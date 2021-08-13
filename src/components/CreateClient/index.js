import { SiteClient } from 'datocms-client'
import React, { useState } from 'react'
import { Container } from './styles'

export function CreateClient() {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState('')

    async function createNewClient(data){

        const client = new SiteClient('d64a915d638c61aeecb502b7a9b36c')

        await client.items.create({
            itemType: '1067019',
            ...data
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            name,
            cpf,
            phone,
            birthday
        }

        createNewClient(data)

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
