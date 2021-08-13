import { SiteClient } from 'datocms-client'

const TOKEN = 'd64a915d638c61aeecb502b7a9b36c'
const client = new SiteClient(TOKEN)

export async function newClient(data){

    await client.items.create({
        itemType: '1067019',
        ...data
    })
}

export function deleteClient(itemId){

    client.items.destroy(itemId)
}