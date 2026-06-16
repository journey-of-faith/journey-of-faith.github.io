import PageTitle from "../components/atoms/PageTitle";
export default function References() {
    return (
        <div>
            <div className="flex justify-center -z-10 m-3">
                <PageTitle title="المراجع" />
            </div>
            <div className="flex justify-end-safe grid-cols-2">
                <img src="/stMosesPic.jpeg" alt="" className="p-2 rounded-3xl max-w-3xl max-h-screen mr-3" />
                <div className="flex justify-items mr-4">
                    <ul>
                        <li>أوريجانوس، النصوص المسيحية، عظات على سفر الخروج، ترجمة مريم رشاد حليم و جرجس بشرى، مركز باناريون للتراث الآبائي+ </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
