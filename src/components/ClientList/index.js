import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { FiSearch, FiTrash2 } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';

export function ClientList() {

    const [clientList, setClientList] = useState([])
    
    useEffect(() => {

        axios.post('https://graphql.datocms.com/', {
                "query" : `query {
                    allClients {
                        id,
                        name,
                        cpf,
                        phone,
                        birthday
                    }
                }`
            }, {
                headers: {
                    'Authorization' : '33286cab3a939389f726a1ac1b78a7',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then(res => {
            const list = res.data.data.allClients
            setClientList(list)
        })
    }, [])


    return (
        <Container>

            {
                clientList.length !== 0 &&
                <div>

                    <h1>Todos os clientes</h1>

                    <div className='search-input'>
                        <FiSearch size={'1.6rem'}/>    
                        <input placeholder='Pesquisar cliente'/>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Telefone</th>
                                <th>Data de nascimento</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                clientList.map(client => {
                                    return (
                                        <tr key={client.id}>
                                            <td>{client.name}</td>
                                            <td>{client.cpf}</td>
                                            <td>{client.phone}</td>
                                            <td>{client.birthday}</td>
                                            <td>
                                                <button><FaRegEdit size='1.3rem'/></button>
                                                <button><FiTrash2 size='1.3rem'/></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                
            }
        </Container>
    )
}
