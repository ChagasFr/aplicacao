import { useState } from "react"

interface Produto {
    nome: string
    preco: number
    desconto: number
}

export default function Formulario() {
    const [produto, alterearProduto] = useState<Produto>({
        nome: '',
        preco: 0,
        desconto: 0
    })

    return (
        <div className='flex flex-col gap-5 items-center'>
            <span className="text-2xl font-black">Exemplo Formulario</span>
            <div>
                <span>Nome:</span>
                <input
                    type="text"
                    value={produto.nome}
                    className='entrada'
                    onChange={e => {
                        alterearProduto({
                            ...produto,
                            nome: e.target.value
                        })
                    }}
                />
            </div>
            <div>
                <span>Preco:</span>
                <input
                    type="text"
                    value={produto.preco}
                    className='entrada'
                    onChange={e => {
                        alterearProduto({
                            ...produto,
                            preco: +e.target.value
                        })
                    }}
                />
            </div>
            <div>
                <span>Preco:</span>
                <input
                    type="number"
                    value={produto.desconto}
                    min={0}
                    max={0.6}
                    step={0.01}
                    className='entrada'
                    onChange={e => {
                        alterearProduto({
                            ...produto,
                            desconto: +e.target.value
                        })
                    }}
                />
            </div>
            <div className='flex flex-col gap-2 text-2xl'>
                <span>{JSON.stringify(produto)}</span>
                <span>{produto.nome}</span>
                <span>{produto.preco}</span>
                <span>R$ {produto.desconto}</span>
                <span>R$ {produto.preco * (1 - produto.desconto)}</span>
            </div>
        </div>
    )
}