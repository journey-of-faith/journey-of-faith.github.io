export default function Button({number,onClick}){
    return(
        <button onClick={onClick} className="bg-red-950 text-zinc-300 hover:bg-amber-500 font-semibold px-2 py-1 rounded-full text-sm cursor-pointer ">{number}</button>
    )
}