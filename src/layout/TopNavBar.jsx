import { Link } from "react-router";
export default function TopNavBar() {
    return (
        <nav className="hidden sticky sm:flex text-zinc-200 bg-linear-to-r from-amber-950 to-amber-700 px-2 py-3 justify-between gap-2">
            <div>
                <img src="/stMoses.jpg" alt="" className="flex w-20 h-20 rounded-full" />
            </div>
            
            
            <div >
                <Link to="aboutmoses" className="m-4">About Prophet Moses</Link>
                <Link to="journey">The Journey</Link>
            </div>
            <div>
                <Link>Concept</Link>
            </div>

        </nav>
    )
}