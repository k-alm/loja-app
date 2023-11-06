import {promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function GET(){
    //Realizando a leitura do arquivo db.json desde a raiz do projeto
    const file = fs.readFile(process.cwd() + "/src/app/api/base/db.json", "utf8");

    //Recuperando o arquivo
    const listaUsuarios = await JSON.parse(file)

    //Retornando os dados do arquivo db.json
    return NextResponse.json(listaUsuarios.usuarios);
    
}

export async function POST(request, response){
    //Realizando a leitura do arquivo db.json desde a raiz do projeto
    const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", "utf8");

    //Recebendo os dados do formulário através do request.json
    const userLogin = await request.json();

    //Recuperando o arquivo
    const listaUsuarios = await JSON.parse(file)

    //Criando a lógica de validação de usuário
    const userValidado = listaUsuarios.usuarios.find((user) => user.email === userLogin.email && user.senha === userLogin.senha);

    //Verificando se o user foi validado
    if(!userValidado){
        return NextResponse.json({"status": false});
    }

    //Retornando o status da validação
    return NextResponse.json({"status": true});
    
}