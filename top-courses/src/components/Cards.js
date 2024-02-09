import React, { useState } from 'react';
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
const [likedCourses,setLikedCourses]=useState([]);


    function getCourses() {
        if(category==='All'){
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        }else{
            //sirrf specific category ka data pass hoga
            return courses = [category]
        }
        }
        

    return (
        <div>
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                ))
            }
        </div>
    );
};

export default Cards;
