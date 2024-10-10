import { useState } from "react"
import {toast, Toaster} from "react-hot-toast"
function Form({Close}) {



        const [title, setTitle] = useState("")
        const [description, setDescription] = useState("")

        const [error,setError] = useState(false)

        const handleForm = (event) => {
            event.preventDefault()
            if(title == "" && description == ""){
                setError(true)
            }
            else {
                setError(false)
            }

            const newNote = {
                id: Date.now(),
                title: title,
                description: description
            }
            const getData = localStorage.getItem("data")
            let data = getData ? JSON.parse(getData) : []
            data = [...data, newNote]
            localStorage.setItem("data", JSON.stringify(data))


            toast.success("Note saved successFully", {
                position: "top-center"
            })
        }

 

    return <div className="  bg-[rgba(0,0,0,0.5)] h-screen absolute w-full top-0">
        {/* <div>
            <h1 className="font-bold text-red-300 text-3xl mt-3">This is Form</h1>
        </div> */}
        <div className="flex  justify-center pt-20">
    <form className="mt-10 bg-red-200   p-3 w-[400px] h-[450px]">
    <i onClick={Close}  class=" text-3xl fa-solid fa-x"></i>
    

    {
        error == true ? <p className="text-red-500">Fadlan buxi Form ka </p>
        : ""
    }
        <input value={title} onChange={(event) => setTitle(event.target.value) } className="w-[360px] border-2 border-black my-5 h-[40px]  "  type="text" placeholder="Enter title" />
        <br />
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} className=" border-2 border-black" rows={8} cols={46} />

        <br />

        <button onClick={handleForm} className="bg-white  border-2 border-black px-[150px] my-5 py-3 text-3xl rounded">Save</button>

    </form>
    </div>
    <Toaster />
    </div>
}


export default Form