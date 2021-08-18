import { SiteClient } from 'datocms-client'

const TOKEN = 'd64a915d638c61aeecb502b7a9b36c'
const client = new SiteClient(TOKEN)

export async function newClient(data){

    await client.items.create({
        itemType: '1067019',
        ...data
    })
}

export async function deleteClient(itemId){

    await client.items.destroy(itemId)
}

export async function updateClient(id, data) {
    
    await client.items.update(id, {
        ...data
    })
}