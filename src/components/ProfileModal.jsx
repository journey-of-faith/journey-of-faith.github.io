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
            title: "سكوت",
            text: "Content for button 3",
            audio: "/audio/first.mp3",
            image:"/pics/skoot.jpeg",
        },
        3: {
            title: "إيثام",
            text: "Content for button 2",
            audio: "/audio/first.mp3",
            image:"/pics/etham.jpeg",
        },
     
          4: {
            title: "مجدل",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/magdal.jpeg",
        },
        5: {
            title: "فم حيروث",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/famhorith.jpeg",
        },
        6: {
            title: "مارة",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/mara.jpeg",
        },
        7: {
            title: "إيليم",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/eleem.jpeg",
        },
        8: {
            title: "رفيديم",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/ramsis.jpeg",
        },
          9: {
            title: "جبل حوريب",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/mount.jpeg",
        },
        10: {
            title: "تبعيرة",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/tabeera.jpeg",
        },
          11: {
            title: "قبروت هتأوة",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/ramsis.jpeg",
        },
        12: {
            title: "حضيروت",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/hadairoot.jpeg",
        },
        13: {
            title: "مقهيلوت",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/makhiloot.jpeg",
        },
        14: {
            title: "جبل هور",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/mount.jpeg",
        },
        15: {
            title: "قادش برنيع",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/ramsis.jpeg",
        },
        16: {
            title: "عصيون جابر",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/esyoonGaber.jpeg",
        },
        17: {
            title: "جدجاد",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/ramsis.jpeg",
        },
        18: {
            title: "فونون",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/ramsis.jpeg",
        },
        19: {
            title: "قير",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/ramsis.jpeg",
        },
        20: {
            title: "حشبون",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/ramsis.jpeg",
        },
         21: {
            title: "جبل نبو",
            text:"مجدل كانت نقطة حراسة مصرية على حدود مصر الشرقية. خيّم بنو إسرائيل بالقرب منها قبل عبور البحر مباشرة. في هذا المكان بدا الشعب محاصرًا بين البحر وجيش فرعون، لكن الله حوّل الموقف المستحيل إلى أعظم معجزة خلاص في رحلة الخروج",
            audio: "/audio/first.mp3",
            image:"/pics/ramsis.jpeg",
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
                        <button onClick={handleClose} className=" flex justify-end font-semibold text-2xl cursor-pointer hover:text-amber-900 hover:scale-120 transition">x</button>
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
        className="fixed inset-0 bg-black/80 flex justify-center items-center z-60"
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