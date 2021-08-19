import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import InputMask from 'react-input-mask'

import { newClient } from '../../api/api'

export function CreateClient() {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState('')
    
    const [isAllFilled, setIsAllFilled] = useState(true)
    const [isDisabled, setIsDisabled] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if(name === '' || splitData(cpf) !== 11 || splitData(phone) !== 11 || splitData(birthday) !== 8) {
            
            setIsAllFilled(false)
            return alert('Algum campo está vazio ou incompleto. Verifique e tente novamente.')

        } else {

            const data = {
                name,
                cpf,
                phone,
                birthday
            }
            
            setIsDisabled(true)
            await newClient(data)
            setIsDisabled(false)
    
            setName('')
            setCpf('')
            setPhone('')
            setBirthday('')
            setIsAllFilled(true)
        }
    }

    function splitData(data) {
        return data.split("").filter(n => Number(n) || n === '0').join('').length
    }

    useEffect(() => {
        if(name !== '' || cpf !== '' || phone !== '' || birthday !== '') {
            setIsAllFilled(true)
        }
    }, [name, cpf, phone, birthday])

    return (
        
        <Container>
            <h1>Cadastrar novo cliente</h1>

            <form 
                onSubmit={handleSubmit} 
                className={!isAllFilled ? 'empty-fields' : ''}
            >
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
                        <InputMask
                            mask='999.999.999-99'
                            placeholder='XXX.XXX.XXX-XX'
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Telefone</label>
                        <InputMask
                            mask='(99) 99999-9999' 
                            placeholder='(XX) XXXXX-XXXX' 
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Data de nascimento</label>
                        <InputMask
                            mask='99/99/9999' 
                            placeholder='XX/XX/XXXX'
                            value={birthday}
                            onChange={e => setBirthday(e.target.value)}
                        />
                    </div>
                </div>

                <button type='submit' disabled={isDisabled}>Criar novo cliente</button>
            </form>
        </Container>
    )
}
