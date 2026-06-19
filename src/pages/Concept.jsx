import PageTitle from "../components/atoms/PageTitle";
export default function Concept() {
    return (
        <div className="w-full min-h-screen bg-linear-to-r from-amber-200 to-blue-200">
            <div className="flex justify-center ">
                <PageTitle title="الهدف" />
            </div >
             <div className="flex justify-end mr-4 text-right leading-8 text-xl p-7" dir="rtl">
                    <h2> هو موقع إلكتروني تعليمي تفاعلي يهدف إلى تقديم رحلة شعب بني إسرائيل منذ خروجهم من مصر وحتى وصولهم إلى أرض كنعان بطريقة مبتكرة تجمع بين التعلم والتفاعل. يتيح الموقع للمستخدم استكشاف المحطات المختلفة للرحلة من خلال خريطة تفاعلية، مع عرض الأحداث المرتبطة بكل محطة باستخدام النصوص والصور والملفات الصوتية. كما يركز المشروع على الأبعاد الروحية والتفاسير العميقة لكل حدث، مستعرضاً الرموز والظلال الكتابية والتطبيقات الحياتية لها، مما يسهم في تبسيط المعلومات وزيادة تفاعل المستخدم مع المحتوى. يستهدف المشروع طلاب المرحلة الإعدادية وما فوق، بالإضافة إلى الخدام والمهتمين بدراسة الأحداث الكتابية والتاريخية بطريقة حديثة وتفاعلية.</h2></div>

            <div className="flex justify-center">
                <img className= " rounded-3xl " src="/stMosesPic.jpeg" alt="" width={1000} height={600}  />
            </div>
        </div>
    )
}