
function Form({Close}) {
    return <div className="  bg-[rgba(0,0,0,0.5)] h-screen absolute w-full top-0">
        {/* <div>
            <h1 className="font-bold text-red-300 text-3xl mt-3">This is Form</h1>
        </div> */}
        <div className="flex bg-red-300	 justify-center pt-20">
    <form className="mt-10   p-3 w-[400px] h-[450px]">
    <i onClick={Close}  class=" text-3xl fa-solid fa-x"></i>
        <input className="w-[360px] border-2 border-black my-5 h-[40px]  "  type="text" placeholder="Enter title" />
        <br />
        <textarea className=" border-2 border-black" rows={8} cols={46} />

        <br />

        <button className="bg-white  border-2 border-black px-[150px] my-5 py-3 text-3xl rounded">Save</button>

    </form>
    </div>

    </div>
}

export default Form