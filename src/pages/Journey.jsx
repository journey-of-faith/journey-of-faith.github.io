import { useState } from "react";
import PageTitle from "../components/atoms/PageTitle";
import ProfileModalAudio from "../components/ProfileModalAudio";
import Button from "../components/atoms/Button";
export default function Journey() {
    const [selectButton, setSelectButton] = useState (null);
    return (
        <>
        <div>
            <div className="flex justify-center -z-10 m-3">
                <PageTitle title="رحلة إيمان عبر البرية " />
            </div>
            <div className="flex justify-center relative w-full max-w-200">
                <img
                    src="/map.jpg"
                    alt="map"
                    className="w-full h-auto"
                />

                <div className="absolute top-[18%] left-[19.5%]">
                    <Button number="1" onClick={()=>setSelectButton(1)}/>
                </div>
                <div className="absolute top-[30%] left-[25%]">
                    <Button number="2" onClick={()=> setSelectButton(2)} />
                </div>

                <div className="absolute top-[20.8%] left-[25%]">
                    <Button number="3" onClick={()=>setSelectButton(3)}/>
                </div>
                
                <div className="absolute top-[40%] left-[25.2%]">
                    <Button number="4" onClick={()=> setSelectButton(4)} />
                </div>
                <div className="absolute top-[48%] left-[33%]">
                    <Button number="5" onClick={()=> setSelectButton(5)} />
                </div>
                <div className="absolute top-[55%] left-[39%]">
                    <Button number="6" onClick={()=> setSelectButton(6)} />
                </div>
                <div className="absolute top-[63%] left-[42.21%]">
                    <Button number="7" onClick={()=> setSelectButton(7)} />
                </div>
                <div className="absolute top-[69%] left-[52%]">
                    <Button number="8" onClick={()=> setSelectButton(8)} />
                </div>
                <div className="absolute top-[84%] left-[61.5%]">
                    <Button number="9" onClick={()=> setSelectButton(9)} />
                </div>
                <div className="absolute top-[79%] left-[65.8%]">
                    <Button number="10" onClick={()=> setSelectButton(10)} />
                </div>
                <div className="absolute top-[73%] left-[67%]">
                    <Button number="11" onClick={()=> setSelectButton(11)} />
                </div>
                <div className="absolute top-[67.6%] left-[69.4%]">
                    <Button number="12" onClick={()=> setSelectButton(12)} />
                </div>
                <div className="absolute top-[45.9%] left-[69.6%]">
                    <Button number="13" onClick={()=> setSelectButton(13)} />
                </div>
                 <div className="absolute top-[39.5%] left-[68%]">
                    <Button number="14" onClick={()=> setSelectButton(14)} />
                </div>
                <div className="absolute top-[33.5%] left-[65.9%]">
                    <Button number="15" onClick={()=> setSelectButton(15)} />
                </div>
                <div className="absolute top-[58%] left-[76%]">
                    <Button number="16" onClick={()=> setSelectButton(16)} />
                </div>
                 <div className="absolute top-[48.3%] left-[79.4%]">
                    <Button number="17" onClick={()=> setSelectButton(17)} />
                </div>
                <div className="absolute top-[35.6%] left-[82.8%]">
                    <Button number="18" onClick={()=> setSelectButton(18)} />
                </div>
                <div className="absolute top-[12.3%] left-[89%]">
                    <Button number="19" onClick={()=> setSelectButton(19)} />
                </div>
                <div className="absolute top-[4.3%] left-[89.5%]">
                    <Button number="20" onClick={()=> setSelectButton(20)} />
                </div>
                <div className="absolute top-[0.4%] left-[85.5%]">
                    <Button number="21" onClick={()=> setSelectButton(21)} />
                </div>
            </div>
        </div>
        <ProfileModalAudio 
        isOpen={selectButton !==null}
       button={selectButton}
       onClose={()=>setSelectButton(null)}/>
       

        </>
    )
}

