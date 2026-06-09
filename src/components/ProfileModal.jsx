export default function ProfileModal({isOpen, onClose, button}){
    if (!isOpen)return null;
    const content = {
        1:{
            title: "First Stop",
            text:"Content for button 1",
        },
        2:{
            title: "Second Stop",
            text:"Content for button 2",
        },
        3:{
            title:"Third Stop",
            text:"Content for button 3",
        },
        
    };
    return(
        <div>
            
        </div>
    )
}