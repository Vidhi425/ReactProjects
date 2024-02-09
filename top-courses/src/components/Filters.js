import React from 'react'

const Filters =(props)=>{
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;

function filterhandler(data){
    setCategory(data.title)
}


    return(
        <div>
           
            {filterData.map((data)=>{
              return(
                <button key={data.id}
                onClick={()=>filterhandler}
                >
                    {data.title}
                </button>
              )  
            })}
           
        </div>
    )
}

export default Filters