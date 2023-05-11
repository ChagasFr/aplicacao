export interface LinhaProps {
    children: any
}

export default function Linha(props: LinhaProps) {
    return (
        <div className="flex flex-warp justify-center gap-20">
            {props.children}
        </div>
    )
}