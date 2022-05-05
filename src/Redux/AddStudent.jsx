import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from './action/addStudent'
import studentReducer from './reducers/addStudent'

const AddStudent = () => {
  const[students,setStudents]=useState({name:'',batch:''})
  const dispatcher=useDispatch()

  const submitDetail =(event)=>{
    event.preventDefault()
    const {name,batch}=students;
    if(name===''|| batch==='') alert("Enter details")
    
    dispatcher(addStudent(students))
    
  }
   const storeData= useSelector((state)=>state.studentReducer)

  return (
    <div>
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' value={students.name} onChange ={(e)=>setStudents({...students,name:e.target.value})} /> <br />
            <label htmlFor="batch">Batch</label>
            <input type="text" id='batch' value={students.batch} onChange ={(e)=>setStudents({...students,batch:e.target.value})} /> <br /> <br />
            <input type="submit" onClick={submitDetail}  />
        </form>

        <div>
            <h2>Details</h2>
            <ul>
                {storeData.map((std)=>
                    <>
                    <li>{std.name}</li>
                    <li>{std.batch}</li> <br />
                    </>
                )}
            </ul> 
        </div>
    </div>
  )
}

export default AddStudent
