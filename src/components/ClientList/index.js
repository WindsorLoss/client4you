import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { FiSearch, FiTrash2 } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";

import { deleteClient } from '../../api/api'

import axios from 'axios';

export function ClientList() {

    const [clientList, setClientList] = useState([])
    const [searchWord, setSearchWord] = useState('')
    const [searchResult, setSearchResult] = useState([])

    function handleSearch(text) {
        const result = clientList.filter(client => {
            return  client.name.toLowerCase().includes(text)  || 
                    client.cpf.toLowerCase().includes(text)   ||
                    client.phone.toLowerCase().includes(text)   ||
                    client.birthday.toLowerCase().includes(text)
        })
        
        result.length === 0 ? console.log('nenhum resultado encontrado') :
        setSearchResult(result)
    }

    function handleDeleteClient(id) {
        setClientList(clientList.filter(client => client.id !== id))
        deleteClient(id)
    }
    
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

    useEffect(() => searchWord === '' && setSearchResult([]), [searchWord])

    return (
        <Container>

            {
                clientList.length !== 0 &&
                <div>

                    <h1>Todos os clientes</h1>

                    <div className='search-input'>
                        <FiSearch size={'1.6rem'}/>    
                        <input 
                            placeholder='Pesquisar cliente'
                            value={searchWord}
                            onChange={(e) => {
                                setSearchWord(e.target.value)
                                handleSearch(searchWord.toLowerCase())
                            }}
                        />
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
                                searchResult.length === 0 
                                ? clientList.map(client => {
                                    return (
                                        <tr key={client.id}>
                                            <td>{client.name}</td>
                                            <td>{client.cpf}</td>
                                            <td>{client.phone}</td>
                                            <td>{client.birthday}</td>
                                            <td>
                                                <button><FaRegEdit size='1.3rem'/></button>
                                                <button onClick={() => handleDeleteClient(client.id)}>
                                                    <FiTrash2 size='1.3rem'/>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                : searchResult.map(client => {
                                    return (
                                        <tr key={client.id}>
                                            <td>{client.name}</td>
                                            <td>{client.cpf}</td>
                                            <td>{client.phone}</td>
                                            <td>{client.birthday}</td>
                                            <td>
                                                <button><FaRegEdit size='1.3rem'/></button>
                                                <button onClick={() => handleDeleteClient(client.id)}>
                                                    <FiTrash2 size='1.3rem'/>
                                                </button>
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
