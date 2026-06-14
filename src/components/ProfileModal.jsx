import { useRef } from "react";
import Sound from "./atoms/Sound";
export default function ProfileModal({ isOpen, onClose, button }) {
    const audioRef = useRef(null);
    if (!isOpen) return null;
    const content = {
        1: {
            title: "رعمسيس",
            text: "  كانت رعمسيس هي أول نقطة إنطلاق",
            audio: "/audio/first.mp3",
        },
        2: {
            title: "Second Stop",
            text: "Content for button 2",

        },
        3: {
            title: "Third Stop",
            text: "Content for button 3",
        },
    };
    const audioRef= useRef(null);
    if (!isOpen) return null;
    const handleClose =()=> {
        if (audioRef.current){
            audioRef.current.pause();
            audioRef.current.currentTime=0;
        }
        onClose();
    }
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-100 max-h-80 overflow-y-auto p-6">
                
                    <div className="flex justify-between mb-4" >
                        <h2 className="text-2xl font-bold">{content[button]?.title}</h2>
                        <button onClick={handleClose} className=" flex justify-end font-semibold text-2xl">x</button>
                    </div>
                    <div className="flex items-center gap-4">
                    <Sound audioRef={audioRef} />
                    <audio ref={audioRef} src={content[button]?.audio}/>
                    </div>
                    
                 <p>{content[button]?.text}</p>
                </div>
               
            </div>

        
    )
}