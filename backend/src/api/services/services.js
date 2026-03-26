import { prisma } from '../lib/conectionDataBase.js'

export async function createContatoServices(data){
    return await prisma.contato.create({
        data
    })
}