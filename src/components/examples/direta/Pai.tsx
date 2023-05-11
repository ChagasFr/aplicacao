import Filho from './Filho'

export interface PaiProps {
    nome: string
    sobrenome: string
}

export default function Pai(props: PaiProps) {
    return (
        <div>
            <h1 className='text-xl font-bold'>
                {props.nome} {props.sobrenome}
            </h1>
            <ul className='list-disc ml-12'>
                <Filho nome="Pedro" sobrenome={props.sobrenome}></Filho>
                <Filho nome="Ana" sobrenome={props.sobrenome}></Filho>
                <Filho nome="Rafael" sobrenome={props.sobrenome}></Filho>
                <Filho nome="Leticia" sobrenome={props.sobrenome}></Filho>
            </ul>
        </div>
    )
}