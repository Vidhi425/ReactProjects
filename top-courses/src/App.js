import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Filters from "./components/Filters"
import Cards from "./components/Cards" 
import { filterData,apiUrl } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Spinner from "./components/Spinner"



const  App =() =>{

  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      console.log(output)
      setCourses(output.data);
    }
    catch(error) {
        toast.error("Unable to fetch data form API");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
 
  
  return (
    <div >
      <Navbar/>

     <Filters
     filterData={filterData}
     category={category}
     setCategory={setCategory}
     />
<div>
  {
    loading ?  (<Spinner/>):(<Cards courses={courses} category={category} />)
  }
</div>

     
    </div>
  )
}

export default App;
