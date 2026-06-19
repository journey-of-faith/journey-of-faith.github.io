import Journey from "./Journey";
import AboutMoses from "./AboutMoses";
import Concept from "./Concept";
import References from "./References";
import { Routes, Route } from "react-router";
export default function Pages() {
    return (
        <div className="w-full min-h-screen bg-linear-to-r from-amber-200 to-blue-200">
        <Routes>
            <Route path='journey' element={<Journey/>}/>
            <Route path='aboutmoses' element={<AboutMoses/>} />
            <Route path='concept' element={<Concept/>}/>
            <Route path='reference' element={<References/>}/>
        </Routes>
        <div className="flex justify-center p-7"><img className="m-3 rounded-4xl" src="./mosesPro.jpeg" alt="" /></div>
        
        </div>
    )
}
