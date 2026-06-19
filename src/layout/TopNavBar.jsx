import { Link } from "react-router";
export default function TopNavBar() {
    return (
        <nav className="hidden sticky sm:flex text-zinc-200 bg-linear-to-r from-amber-950 to-amber-700 p-3 flex justify-between gap-2">
            <div>
                <img src="/stMoses.jpg" alt="" className="flex  w-18 h-18 rounded-full" />
            </div>
            
            
            <div >
                <Link to="aboutmoses" className="m-4 font-normal text-xl hover:text-amber-400"> شخصية موسى النبي  </Link>
                <Link to="journey" className="m-4 font-normal text-xl  hover:text-amber-400">رحلة الإيمان </Link>
                <Link to="reference" className="m-4 font-normal text-xl  hover:text-amber-400">المراجع</Link>
            </div>
            <div>
                <Link to="concept" className="m-4 font-normal text-xl  hover:text-amber-400">الهدف</Link>
            </div>

        </nav>
    )
}