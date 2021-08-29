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

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(false)
    const [isSearchEmpty, setIsSearchEmpty] = useState(false)
    const [tempClient, setTempClient] = useState({})

    function handleSearch(text) {
        const result = clientList.filter(client => {
            return  client.name.toLowerCase().includes(text)  || 
                    client.cpf.toLowerCase().includes(text)   ||
                    client.phone.toLowerCase().includes(text)   ||
                    client.birthday.toLowerCase().includes(text)
        })
        
        if(result.length !== 0){
            setSearchResult(result)
            setIsSearchEmpty(false)
        }
        else setIsSearchEmpty(true)
    }

    async function handleDeleteClient(id) {
        
        try {
            setIsDeleteButtonDisabled(true)
            
            await deleteClient(id)

            const deletedClient = client => client.id !== id
    
            setClientList(clientList.filter(deletedClient))
            setSearchResult(searchResult.filter(deletedClient))

        } catch(e) {
            alert(`Falha ao deletar cliente. Por favor tente novamente mais tarde ou entre em contato com o Nino Lindão :D
            \nError: ${e}`)
        } finally {
            setIsDeleteModalOpen(false)
            setIsDeleteButtonDisabled(false)
        }
    }
    
    function handleEdit(id) {
        setIsEditModalOpen(true)
        setTempClient(clientList.find(client => client.id === id))
    }

    function handleDelete(id) {
        setIsDeleteModalOpen(true)
        setTempClient(clientList.find(client => client.id === id))
    }

    async function handleSubmitUpdate(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const { id } = tempClient

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
            alert(`Falha ao atualizar cliente. Por favor tente novamente mais tarde ou entre em contato com o Nino Lindão :D
            \nError: ${e}`)
        } finally {
            setIsEditModalOpen(false)
        }
        
    }
    
    useEffect(() => {
        clientService.allClients().then(res => {
            const list = res.data.data.allClients
            setClientList(list)
        })
    }, [])

    useEffect(() => {
        if(searchWord === '') {
            setSearchResult([])
            setIsSearchEmpty(false)
        }
    }, [searchWord])

    return (
        <Container>

            {
                clientList.length !== 0 
                ? <div>

                    <h1 className='title'>Todos os clientes</h1>

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
                    
                    {
                        !isSearchEmpty
                        ? <table>
                            <thead className='table-header'>
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
                                                <td><span className='category'>Nome:</span>{client.name}</td>
                                                <td><span className='category'>CPF:</span>{client.cpf}</td>
                                                <td><span className='category'>Telefone:</span>{client.phone}</td>
                                                <td><span className='category'>Data de nascimento:</span>{client.birthday}</td>
                                                <td>
                                                    <button onClick={() => handleEdit(client.id)}>
                                                        <FaRegEdit size='1.3rem'/>
                                                    </button>
                                                    <button onClick={() => handleDelete(client.id)}>
                                                        <FiTrash2 size='1.3rem'/>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    : searchResult.map(client => {
                                            return (
                                                <tr key={client.id}>
                                                    <td><span className='category'>Nome:</span>{client.name}</td>
                                                    <td><span className='category'>CPF:</span>{client.cpf}</td>
                                                    <td><span className='category'>Telefone:</span>{client.phone}</td>
                                                    <td><span className='category'>Data de nascimento:</span>{client.birthday}</td>
                                                    <td>
                                                        <button onClick={() => handleEdit(client.id)}>
                                                            <FaRegEdit size='1.3rem'/>
                                                        </button>
                                                        <button onClick={() => handleDelete(client.id)}>
                                                            <FiTrash2 size='1.3rem'/>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                            </tbody>
                        </table>
                        : <h1 className='title less-brightness'>Nenhum cliente encontrado</h1>

                    }
                
                </div>
                
                : <h1 className='title'>Nenhum cliente cadastrado</h1>
            }

            {
                isEditModalOpen && 
                <Modal 
                    onClose={() => setIsEditModalOpen(false)}
                    className='editing-modal'
                >
                    <form onSubmit={handleSubmitUpdate}>
                        <label>Nome</label>
                        <input 
                            placeholder="Nome"
                            value={tempClient.name}
                            name='name'
                            onChange={e => setTempClient(prevState => {
                                return {...prevState, name: e.target.value}
                            })}
                        />

                        <label>CPF</label>
                        <InputMask
                            mask='999.999.999-99' 
                            placeholder="cpf"
                            value={tempClient.cpf}
                            name='cpf'
                            onChange={e => setTempClient(prevState => {
                                return {...prevState, cpf: e.target.value}
                            })}
                        />

                        <label>Telefone</label>
                        <InputMask
                            mask='(99) 99999-9999' 
                            placeholder="telefone"
                            value={tempClient.phone}
                            name='phone'
                            onChange={e => setTempClient(prevState => {
                                return {...prevState, phone: e.target.value}
                            })}
                        />
                        
                        <label>Data de nascimento</label>
                        <InputMask
                            mask='99/99/9999' 
                            placeholder="data de nascimento"
                            value={tempClient.birthday}
                            name='birthday'
                            onChange={e => setTempClient(prevState => {
                                return {...prevState, birthday: e.target.value}
                            })}
                        />

                        <button>Salvar</button>
                    </form>
                </Modal>
            }

            {
                isDeleteModalOpen &&
                <Modal
                    onClose={() => setIsDeleteModalOpen(false)}
                >
                    <h1 className='deleting-modal-title'>Tem certeza que deseja apagar este cliente?</h1>

                    <button
                        onClick={() => handleDeleteClient(tempClient.id)}
                        className='deleting-modal-button'
                        disabled={isDeleteButtonDisabled}
                    >
                        Sim
                    </button>

                    <button 
                        onClick={() => setIsDeleteModalOpen(false)}
                        className='deleting-modal-button'
                    >
                        Não
                    </button>
                </Modal>
            }

        </Container>
    )
}
