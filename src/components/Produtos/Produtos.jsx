"use client"

import { useState } from "react";

export default function Produtos(props) {
    const [produtos, setProdutos] = useState([

        {
            id: 1,

            nome: 'Mamão',

            tipo: 'Fruta laranja',

            desc: 'Rica em vitamina E'
        },

        {
            id: 2,

            nome: 'Melão',

            tipo: 'Fruta verde',

            desc: 'Rico em vitamina A'
        },

        {
            id: 3,

            nome: 'Manga',

            tipo: 'Fruta Amarela',

            desc: 'Rica em vitamina C'
        }

    ]);

    return (
        <div>
            <h1>Produtos</h1>
            <div>
                {produtos.map((produto, indice) => (
                    <div key={indice}>
                        <p>ID: {produto.id}</p>
                        <p>Nome: {produto.nome}</p>
                        <p>Desc: {produto.desc}</p>
                        <p>Tipo: {produto.tipo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}