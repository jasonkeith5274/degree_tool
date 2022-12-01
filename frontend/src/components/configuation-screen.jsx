import * as React from "react";
import {useState, useEffect} from 'react'
import axios from "axios" 
  
function Configuration() {
  
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function fetchClasses() {
      const URL = 'http://localhost:8000/api/courses/';
      try {
        const res = await axios.get(URL);
        console.log(res.data);
        setClasses(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchClasses();
  }, []);

  if (!classes.length) return <h3>Loading...</h3>;
  

  const columns = [{  
    Header: 'Class Number',  
    accessor: ''  
    },{  
    Header: 'Age',  
    accessor: 'age'  
    }]  


  return (
    <div>
      
    </div>
  );
}
  
export default Configuration;