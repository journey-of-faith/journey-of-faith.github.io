import { AiOutlineSound } from "@react-icons/all-files/ai/AiOutlineSound"
export default function Sound({ audioRef }) {
    const toggleSound = () => {
        if (!audioRef.current) return;

        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    return(
        <div>
            <button onClick={toggleSound} className="cursor-pointer text-3xl text-blue-500"><AiOutlineSound/></button>
        
        </div>
    )
}