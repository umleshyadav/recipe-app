import React, { useState } from "react";
import Mealcards from "./Mealcards";

const Mainpage=()=>{

    const [data,setData]=useState();
    const [search,setSearch]=useState("");
    const [msg,setMsg]=useState("");

    const handleInput=(event)=>{
        setSearch(event.target.value);

    }

const myfun = async()=>{
    if(search===""){
        setMsg("Please enter something")
    }
    else{
        const get=await fetch(`https:\\www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const jsonData=await get.json();
       // console.log(jsonData.meals);
        setData(jsonData.meals);
        setMsg("")

    }
   
}

    return(
        <div className="front-page">
            <br></br>
        <h1 className="head">Food Recipe App by Nitesh</h1>
        <div  className='container'>
            <div className='searchBar'>
                <input type='text' placeholder='Enter dishes' onChange={handleInput}/>
                <button onClick={myfun}>Search</button>
            </div>
            <h2 className="msg">{msg}</h2>
            <div>
         <Mealcards detail={data}/>
            </div>
        </div>
        </div>
    )
}
export default Mainpage;