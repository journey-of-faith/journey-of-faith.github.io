import { AiOutlineSound } from "@react-icons/all-files/ai/AiOutlineSound"
export default function Sound({ audioRef }) {

    return(
        <div>
            <button onClick={()=>audioRef.current.play()} className="cursor-pointer text-3xl text-blue-500"><AiOutlineSound/></button>
        
        </div>
    )
}