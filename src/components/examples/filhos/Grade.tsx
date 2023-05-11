export default function Grade(props: any) {
    return (
        <div className={`
            grid grid-cols-3 gap-4
        `}>
            {props.children}
        </div>
    )
}