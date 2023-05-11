export default function Menu(props: any) {
    return ( 
        <div className={`
            flex flex-col gap-20 flex-wrap
        `}>
            {props.children}
        </div>
    )
}