import { SiteClient } from 'datocms-client'

export default async function newCliet(req, res){

    const TOKEN = 'd64a915d638c61aeecb502b7a9b36c'
    const client = new SiteClient(TOKEN)

    const { name, cpf, phone, birthday} = req.body

    const newRecord = await client.items.create({
        itemType: '1067019',
        name,
        cpf,
        phone,
        birthday
    })

    return res.json({newRecord})
}