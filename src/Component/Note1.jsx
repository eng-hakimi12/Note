import { useEffect, useState } from "react"

function Note1(){

    const [data, setData] = useState([])

    useEffect(() => {
        const Notes = JSON.parse(localStorage.getItem("data"))
        if (Notes){
            setData(Notes)
        }
      
    })
       // delete

       const handledete = (id) => {
        const getData = localStorage.getItem("data")
        const data = getData ? JSON.parse(getData) : []
        const updateNote = data.filter( (item) => item.id != id)
        localStorage.setItem("data", JSON.stringify(updateNote))
    }

    return <div>
        <h1 className="font-bold text-[30px]  mb-5 mt-5 ml-[600px]">Hell Notes</h1>
        <div className="grid grid-cols-[300px_300px_300px]  justify-center gap-8">
            {
                data.length > 0 ? data.map((note) =>{
                    return <div id="box" className="bg-red-500 w-[300px] border-2 border-sky-500 text-white font-bold pl-9 pt-10 h-[200px] rounded">
                        <h1 className="text-[20px]  text-green-300">{note.title}</h1>
                        <p className="text-[20px] text-blue-300">{note.description}</p>
                        <button onClick={() => handledete(note.id)} id="deleteBtn" className="bg-blue-300 border-2 border-sky-500 h-7 hidden mt-10 w-16">Delete</button>

                    </div>

                })
                :
                <p className="mt-[200px] font-bold  text-[30px]">There is notes</p>
            }
            
        </div>
    </div>
}

export default Note1