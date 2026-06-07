import Journey from "./Journey";
import AboutMoses from "./AboutMoses";
import { Routes, Route } from "react-router";
export default function Pages() {
    return (
        <Routes>
            <Route path='journey' element={<Journey/>}/>
            <Route path='aboutmoses' element={<AboutMoses/>} />

        </Routes>
    )
}