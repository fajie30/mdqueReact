export function MDBtn({bg, color, colorInt, text, addClass, ...props}){
    return(
        <button
            className={`inline-flex justify-center rounded-md border border-transparent px-3 py-2 bg-${bg}-${colorInt} text-sm font-medium text-${color} hover:bg-${bg}-${Number(colorInt) + 200} focus:outline-none ${addClass}`}
            {...props}
        >
                <span className="">{text}</span>
        </button>
    )
}

export function MDBtnIcon({Icon, bg, color, colorInt, text, addClass, ...props}){
    return(
        <button
            className={`inline-flex justify-center rounded-md border border-transparent px-3 py-2 bg-${bg}-${colorInt} text-sm font-medium text-${color} hover:bg-${bg}-${Number(colorInt) + 100} focus:outline-none ${addClass}`}
            {...props}
        >
                <Icon className="h-5 w-5"/><span className="ml-2">{text}</span>
        </button>
    )
}
