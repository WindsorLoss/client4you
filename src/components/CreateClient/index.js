import React from 'react'
import { Container } from './styles'

export function CreateClient() {
    return (
        <Container>
            <h1>Cadastrar novo cliente</h1>

            <form>
                <div className='form-name'>
                    <label>Nome</label>
                    <input placeholder='Insira um nome' />
                </div>

                <div className='form-rest'>
                    <div>
                        <label>CPF</label>
                        <input placeholder='XXX.XXX.XXX-XX'/>
                    </div>
                    <div>
                        <label>Telefone</label>
                        <input placeholder='(XX) XXXXX-XXXX' />
                    </div>
                    <div>
                        <label>Data de nascimento</label>
                        <input placeholder='XX/XX/XXXX'/>
                    </div>
                </div>

                <button type='submit'>Criar novo cliente</button>
            </form>
        </Container>
    )
}
