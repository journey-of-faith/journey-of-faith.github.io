import PageTitle from "../components/atoms/PageTitle";
import Button from "../components/atoms/Button";
export default function Journey() {
    return (
        <div>
            <div className="flex justify-center -z-10 m-3">
                <PageTitle title="رحلة إيمان عبر اليرية" />
            </div>
            <div className="relative w-full max-w-200">
                <img
                    src="/map.jpg"
                    alt="map"
                    className="w-full h-auto"
                />

                <div className="absolute top-[18%] left-[19.5%]">
                    <Button number="1" />
                </div>

                <div className="absolute top-[21.2%] left-[25%]">
                    <Button number="2" />
                </div>
                <div className="absolute top-[29%] left-[25%]">
                    <Button number="3" />
                </div>
            </div>
        </div>
    )
}