import { useRef } from "react";
import Sound from "./atoms/Sound";
import { useState } from "react";
export default function ProfileModal({ isOpen, onClose, button }) {
    const content = {
        1: {
            title: "رعمسيس",
            text: "  كانت رعمسيس هي أول نقطة إنطلاق",
            audio: "/audio/first.mp3",
            image:"/pics/ramsis.jpeg",
        },
        2: {
            title: "إيثام",
            text: "Content for button 2",
            audio: "/audio/first.mp3",
        },
        3: {
            title: "سكوت",
            text: "Content for button 3",
            audio: "/audio/first.mp3",
        },
          4: {
            title: "مجدل",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
        },
        5: {
            title: "فم حيروث",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
        },
    };
     const [showImage,setShowImage]=useState(false);
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
            <div className="bg-white rounded-lg w-100 max-h-80 overflow-y-auto p-6 ">
                
                    <div className="flex justify-between mb-4" >
                        <h2 className="text-2xl font-bold">{content[button]?.title}</h2>
                        <button onClick={handleClose} className=" flex justify-end font-semibold text-2xl">x</button>
                    </div>
                    
                    <div className="flex items-center gap-4">
                    <Sound audioRef={audioRef} />
                    <audio ref={audioRef} src={content[button]?.audio}/>
                    </div>
                    <div className="text-amber-700 ">
                        <hr />
                    </div>
                    <div className="flex justify-center my-4">
                        <img src={content[button]?.image} alt={content[button]?.title} className="w-48 rounded-lg cursor-pointer hover:scale-105 transition" onClick={()=>setShowImage(true)} />
                    </div>
                    
                 <p>{content[button]?.text}</p>
                </div>
                {showImage && (
    <div
        className="fixed inset-0 bg-black/80 flex justify-center items-center z-[60]"
        onClick={() => setShowImage(false)}
    >
        <img
            src={content[button]?.image}
            alt={content[button]?.title}
            className="max-w-[50vw] max-h-[50vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
        />
    </div>
)}
               
            </div>

        
    )
}