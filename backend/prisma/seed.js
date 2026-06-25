import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main(){
    const emailAdmin = 'AdevWeb.br@gmail.com';
    const senhaAdmin = 'AndersonFullStack';

    console.log('Gerando a senha hash....');

    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senhaAdmin, saltRounds);


    console.log('Criando administrador no banco de dados...')

    const admin = await prisma.user.upsert({
        where: {email: emailAdmin},
        update: {},
        create: {
            email: emailAdmin,
            password: senhaHash,
            name: 'Administrador'   
        },
    });
    console.log('Administrador criado com sucesso:', admin);
};

main()
.catch((e) => {
    console.log("Erro ao rodar o seed: ", e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
})