import PageTitle from "../components/atoms/PageTitle"
export default function AboutMoses() {
    return (
        <div>
            <div className="flex justify-center ">
                <PageTitle title="نبذة عن موسى النبي" />
            </div>
            <div className="flex justify-between grid-cols-2">
            <div className="p-4 rounded-3xl">
                <img src="./stMoses.jpg" alt="" />
            </div>
            <div className="mr-4" dir="rtl">
                <h2 className=" mr-4 text-right leading-8">موسى النبي، كليم الله ورجل الله، هو أحد أعظم شخصيات العهد القديم وأبرز الأنبياء الذين هيأوا البشرية لعمل الفداء. وُلد في زمن العبودية المرة في أرض مصر، ولكن العناية الإلهية العجيبة أنقذته من الموت في النهر ليربى في قصر فرعون، متمرساً بكل حكمة المصريين، ليكون مُعداً لقيادة شعب الله.</h2>
            </div>
            
            </div>
        </div>
    )
}