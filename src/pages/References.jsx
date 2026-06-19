import PageTitle from "../components/atoms/PageTitle";
export default function References() {
    return (
        <div className="w-full min-h-screen bg-linear-to-r from-amber-200 to-blue-200">
            <div className="flex justify-center -z-10 m-3">
                <PageTitle title="المراجع" />
            </div>
            <div className="flex justify-end-safe grid-cols-2">
                <img src="/stMosesPic.jpeg" alt="" className="p-2 rounded-3xl w-3xl max-h-screen mr-3 " />
                <div className="flex justify-items mr-4 text-right leading-8 text-lg font-semibold" dir="rtl">
                    <ul>
                        <li>+ كتاب المقدس </li>
                        <li>+ الكتاب المقدس ذو الخلفيات التوضيحية</li>
                        <li>+ أوريجانوس، النصوص المسيحية، عظات على سفر الخروج، ترجمة مريم رشاد حليم و جرجس بشرى، مركز باناريون للتراث الآبائي </li>
                        <li>+ تادرس يعقوب ملطي، من تفسير الآباء الأولين، سفر الخروج، كنيسة الشهيد مارجرجس سبورتنج </li>
                        <li>+ القمص تادرس يعقوب ملطي – تفسير سفر الخروج</li>
                        <li>+ تفسير القمص تادرس يعقوب ملطي لسفر العدد</li>
                        <li>+ تفسير سفر العدد للقمص أنطونيوس فكري</li>
                        <li>+ دائرة المعارف الكتابية المسيحية</li>
                        <li>+ مقدمات الأسفار وخرائط الكتاب المقدس الصادرة عن St-Takla.org </li>
                        <li>+ أطلس الكتاب المقدس الصادر عن دار الثقافة القبطية</li>
                        <li>+ صحراء الخروج لإدوارد بالمر</li>
                        <li>+ محاضرات ابونا كيرلس رشدى </li>
                        <li>+ محاضرات ابونا مرقس فوزى</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
