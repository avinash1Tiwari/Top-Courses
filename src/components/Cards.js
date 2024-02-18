import React, { useState } from 'react';
import Card from './Card';


const Cards = (props)=>{

    let courses = props.courses;
    console.log(courses)
    let category = props.category

    
  function getAllCourse() {
    let allCourses = [];
    if(category === "All")
    {
        Object.values(courses).forEach(array => {
            array.forEach(courseData =>{
    
                allCourses.push(courseData)
            })
        })
    
        return allCourses;
    }
    
    return courses[category]
    
    // Additional code may follow here
}

const [likedCourses,setLikedCourses] = useState([]);
    return(

        <div className='flex flex-wrap gap-4 justify-center'>
               { 
               getAllCourse().map((course) =>(
                <Card key = {course.id} course = {course}
                likedCourses = {likedCourses}  setLikedCourses = {setLikedCourses}
                ></Card>

               ))
               
               
               }
        </div>
    )
}


export default Cards;