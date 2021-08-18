import axios from 'axios';

export const clientService= {
    allClients: () => axios.post('https://graphql.datocms.com/', {
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
    )
}