import { Link } from "react-router";
export default function TopNavBar() {
    return (
        <nav className="hidden sticky sm:flex text-zinc-200 bg-linear-to-r from-amber-950 to-amber-700 px-2 py-3 justify-between gap-2">
            <div>
                <img src="/stMoses.jpg" alt="" className="flex w-15 h-15 rounded-full" />
            </div>
            
            
            <div >
                <Link to="aboutmoses" className="m-4 font-normal text-xl"> شخصية موسى النبي  </Link>
                <Link to="journey" className="m-4 font-normal text-xl">رحلة الإيمان </Link>
                <Link to="reference" className="m-4 font-normal text-xl">المراجع</Link>
            </div>
            <div>
                <Link to="concept" className="m-4 font-normal text-xl">الهدف</Link>
            </div>

        </nav>
    )
}