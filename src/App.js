import React, {useState} from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

import {STUDENTS} from "./studentsList"


/**helper functions  */
const checkIfStudentExists = (student)=> {
  student = student.toLocaleLowerCase();
  for (let x of STUDENTS){
    if (x.name.toLocaleLowerCase() === student){
      return false
    }
  }
  return true;
}
// `joiningDate` && `validityDate` format "yyyy-mm-dd"
function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function getValidityDate(student){
  student = student.toLocaleLowerCase();
  for (let x of STUDENTS){
    if (x.name.toLocaleLowerCase() === student){
      return x.validityDate
    }
  }
}
/**helper functions ends here */


const title = "Hacker Dormitory";
function App() {
  const [txtInput, setTxtInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [residentLists, setResidentLists] = useState([])

  const [error, setError] = useState()

  const resetInputs = ()=> {
    setTxtInput('')
    setDateInput('')
  }

  const Add = ()=> {
    if(checkIfStudentExists(txtInput)){
      setError(`Sorry, ${txtInput} is not a verified student!`)
      return resetInputs();
    }
    const validityDate = getValidityDate(txtInput)
    if(!checkValidity(dateInput, validityDate)){
      setError(`Sorry, ${txtInput}'s validity has Expired!`)
      return resetInputs();
    }
    setError(null)
    const newList = [...residentLists, txtInput]
    setResidentLists(newList)
    return resetInputs()
  }

  return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search 
          searchProps={{txtInput, setTxtInput, dateInput, setDateInput, Add}}
        />
        <Error errorMessage={error}/>
        <ResidentsList Props = {{residentLists}}/>
      </div>
    </div>
  );
}

export default App;
