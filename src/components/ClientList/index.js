import React, { useEffect, useState } from 'react'

import { Container } from './styles'
import { Modal } from '../Modal';
import InputMask from 'react-input-mask'

import { FiSearch, FiTrash2 } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";

import { deleteClient, updateClient } from '../../api/api'
import { clientService } from '../../services/clientService';


export function ClientList() {

    const [clientList, setClientList] = useState([])
    const [searchWord, setSearchWord] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingClient, setEditingClient] = useState({})

    function handleSearch(text) {
        const result = clientList.filter(client => {
            return  client.name.toLowerCase().includes(text)  || 
                    client.cpf.toLowerCase().includes(text)   ||
                    client.phone.toLowerCase().includes(text)   ||
                    client.birthday.toLowerCase().includes(text)
        })
        
        result.length === 0 
        ? console.log('nenhum resultado encontrado') 
        : setSearchResult(result)

        console.log(result)
    }

    async function handleDeleteClient(id) {
        await deleteClient(id)
        
        const deletedClient = client => client.id !== id

        setClientList(clientList.filter(deletedClient))
        setSearchResult(searchResult.filter(deletedClient))
    }
    
    function handleEdit(id) {
        setIsModalOpen(true)
        setEditingClient(clientList.filter(client => client.id === id)[0])
    }

    function onClientChange(id, name, cpf, phone, birthday){
        setEditingClient({
            id,
            name,
            cpf,
            phone,
            birthday
        })
    }

    async function handleSubmitUpdate(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const id = editingClient.id

        const data = {
            name: formData.get('name'),
            cpf: formData.get('cpf'),
            phone: formData.get('phone'),
            birthday: formData.get('birthday')
        }

        try {
            
            await updateClient(id, data)
    
            const updatedClient = client => client.id === id ? {id, ...data} : client
    
            setClientList(clientList.map(updatedClient))
            setSearchResult(searchResult.map(updatedClient))
    
            
        } catch(e) {
            alert(`Error: ${e}`)
        } finally {
            setIsModalOpen(false)
        }
        
    }
    
    useEffect(() => {
        clientService.allClients().then(res => {
            const list = res.data.data.allClients
            setClientList(list)
        })
    }, [])

    useEffect(() => searchWord === '' && setSearchResult([]), [searchWord])

    return (
        <Container>

            {
                clientList.length !== 0 
                ? <div>

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
                                                <button onClick={() => handleEdit(client.id)}>
                                                    <FaRegEdit size='1.3rem'/>
                                                </button>
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
                                                <button onClick={() => handleEdit(client.id)}>
                                                    <FaRegEdit size='1.3rem'/>
                                                </button>
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
                
                : <h1>Nenhum cliente cadastrado</h1>
            }

            {
                isModalOpen && 
                <Modal 
                    onClose={() => setIsModalOpen(false)}
                >
                    <form onSubmit={handleSubmitUpdate}>
                        <label>Nome</label>
                        <input 
                            placeholder="Nome"
                            value={editingClient.name}
                            name='name'
                            onChange={(e) => {onClientChange(
                                    editingClient.id, 
                                    e.target.value,
                                    editingClient.cpf,
                                    editingClient.phone,
                                    editingClient.birthday
                                )}}
                        />

                        <label>CPF</label>
                        <InputMask
                            mask='999.999.999-99' 
                            placeholder="cpf"
                            value={editingClient.cpf}
                            name='cpf'
                            onChange={(e) => {onClientChange(
                                editingClient.id, 
                                editingClient.name,
                                e.target.value,
                                editingClient.phone,
                                editingClient.birthday
                            )}}
                        />

                        <label>Telefone</label>
                        <InputMask
                            mask='(99) 99999-9999' 
                            placeholder="telefone"
                            value={editingClient.phone}
                            name='phone'
                            onChange={(e) => {onClientChange(
                                editingClient.id, 
                                editingClient.name,                                
                                editingClient.cpf,
                                e.target.value,
                                editingClient.birthday
                            )}}
                        />
                        
                        <label>Data de nascimento</label>
                        <InputMask
                            mask='99/99/9999' 
                            placeholder="data de nascimento"
                            value={editingClient.birthday}
                            name='birthday'
                            onChange={(e) => {onClientChange(
                                editingClient.id, 
                                editingClient.name, 
                                editingClient.cpf,
                                editingClient.phone,
                                e.target.value,
                            )}}
                        />

                        <button>Salvar</button>
                    </form>
                </Modal>
            }

        </Container>
    )
}
