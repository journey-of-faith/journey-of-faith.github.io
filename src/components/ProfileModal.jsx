export default function ProfileModal({ isOpen, onClose, button }) {
    if (!isOpen) return null;
    const content = {
        1: {
            title: "First Stop",
            text: "Content for button 1",
        },
        2: {
            title: "Second Stop",
            text: "Content for button 2",
        },
        3: {
            title: "Third Stop",
            text: "Content for button 3",
        },

    };
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-\[700px\] max-h-[80vh] overflow-y-auto p-6 ">
                <div className="flex justify-between mb-4" >
                    <h2 className="text-2xl font-bold">{content[button]?.title}</h2>
                    <button onClick={onClose}>x</button>
                </div>
                <p>{content[button]?.text}</p>

            </div>

        </div>
    )
}