import PageTitle from "../components/atoms/PageTitle";
export default function Concept() {
    return (
        <div>
            <div className="flex justify-center ">
                <PageTitle title="الهدف" />
            </div >
            <div className="flex justify-end-safe grid-cols-2">

            <div>
                <img src="/stMosesPic.jpeg" alt="" />
            </div>
               
                <div className="flex justify-end mr-4 text-right leading-8" dir="rtl">
                    <h2>"هل أنت مستعد للسير مع شعب الله في البرية؟ اكتشف الأماكن، عِش الأحداث، وتعلّم كيف يقود الله أولاده خطوة بخطوة نحو أرض الموعد." ✨📖🗺️<br />هى
                        ""رحلة عبر البرية" هي تجربة تفاعلية تأخذ طلاب المرحلة الإعدادية في جولة بين محطات خروج بني إسرائيل، لاستكشاف المواقع الجغرافية والأحداث الكتابية والدروس الروحية التي تكشف أمانة الله وقيادته لشعبه في كل خطوة من الرحلة .</h2></div>
           
             </div>
        </div>
    )
}