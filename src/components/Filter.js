
import React from "react";


const Filter = (props) => {
    let filterdata = props.filterdata;

    let category = props.category
    let setCategory = props.setCategory


    function clickHandler(title)
    {
        setCategory(title)
    }

    
    // console.log()
    return (
        <div className="flex gap-5 justify-center p-5">
            {

                filterdata.map((data) => (
                    <button  key = {data.id}  className="  bg-black text-white hover:opacity-50 border-2 
                    py-1 px-2 font-medium rounded-lg" onClick={()=>clickHandler(data.title)} >{data.title}</button>
                ))
            }
        </div>
    )
}

export default Filter;