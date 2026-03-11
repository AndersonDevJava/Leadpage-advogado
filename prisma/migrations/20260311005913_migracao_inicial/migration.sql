-- CreateEnum
CREATE TYPE "AreaInteresse" AS ENUM ('DIREITO_EMPRESARIAL', 'DIREITO_FAMILIA', 'DIREITO_IMOBILIARIO', 'DIREITO_CIVIL', 'DIREITO_CONSUMIDOR', 'DIREITO_TRABALHISTA', 'OUTRO');

-- CreateTable
CREATE TABLE "Contato" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "area" "AreaInteresse" NOT NULL,
    "mensagem" TEXT NOT NULL,

    CONSTRAINT "Contato_pkey" PRIMARY KEY ("id")
);
