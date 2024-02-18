import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import  { filterData,apiUrl } from './data'
import {toast} from 'react-toastify'
import Spinner from "./components/Spinner";

const App = () => {

  const [loading,setLoading] = useState(true)
  const [courses,setCourses] = useState([]);
  // const [courses,setCourses] = useState(null);

 
  async function getCourses(){

    setLoading(true)
    try{

      const response = await fetch(apiUrl);
      const output = await response.json();

      setCourses(output.data)
    }
    catch(e){
      toast.error("something problem in network")
    }

    setLoading(false)
  }

  useEffect(()=>{
    getCourses();
  },[])


  const [category,setCategory] = useState(filterData[0].title)

  // console.log(courses)


  return (<div className="bg-slate-500 min-h-[100vh]">
 
    <div>
    <Navbar></Navbar>
    </div>
   <div >
   <Filter 
   filterdata = {filterData}
   category = {category}
   setCategory = {setCategory}
   ></Filter>
   </div>
   <div className=" flex flex-wrap w-11/12 max-w-[1200px] justify-center 
   justify-items-center mx-auto">
   {
      loading == true ? (<Spinner/>):( <Cards courses = {courses} category = {category}></Cards>)
     
      }
   </div>
  </div>);
};

export default App;
