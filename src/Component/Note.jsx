import { useState } from "react"
import Form from "./Form"

function Note() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = ()=> {
        setIsOpen(true)
    }

    const handleClose = ()=> {
        setIsOpen(false)
    }

 

    return <div>
        <div className="flex justify-between  bg-yellow-200 h-20">
        <h1 className="text-red-300 text-[20px] text-3xl ml-5 mt-3">Nooty</h1>
        <button onClick={handleOpen} className="bg-red-600 w-[140px] h-10 mt-3 mr-5 rounded-[10px] font-bold  px-8 ">Add Note</button>
        </div>
        {
            isOpen == true ? <Form Close={handleClose} /> : ""
        }
    </div>
}

export default Note