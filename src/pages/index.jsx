import Journey from "./Journey";
import AboutMoses from "./AboutMoses";
import Concept from "./Concept";
import References from "./References";
import { Routes, Route } from "react-router";
export default function Pages() {
    return (
        <div>
        <Routes>
            <Route path='journey' element={<Journey/>}/>
            <Route path='aboutmoses' element={<AboutMoses/>} />
            <Route path='concept' element={<Concept/>}/>
            <Route path='reference' element={<References/>}/>
        </Routes>
        {/* <img className="flex justify-center m-3" src="./stMoses.jpg" alt="" /> */}
        </div>
    )
}