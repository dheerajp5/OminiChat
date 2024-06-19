function H1 ({children}) {
    console.log("called ", children)
    return <h1 className="text-2xl font-bold">{children}</h1>
}

// function P
export function P({children}) { return <div className=" w-full my-3"><span className="text-md my-3 font-medium ">{children}</span> </div> }

export default H1;
// export P
