
import './App.css';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { BASE_URL, headers, TOKEN } from './Helper';

//rfc
function App() {
  //1.states/variables
  const [studentName, setStudentName] = useState('')

  //useEffect(<function>,<dependency>)
  useEffect(()=>{

  },[])
  
  //2.function
let myFunction =()=>{
  console.log(studentName);
  //api calling
  var data={
    "data":{
      "name":studentName
    }
  }
   //promise chain
   fetch(BASE_URL + '/api/teachers',{
     method:'POST',
     headers:{
       ...headers
     },
     body:JSON.stringify(data)
   }).then(response => response.json())//it will make our data readable
   .then((d)=>{
    if('error' in d){
      if(d.error.status === 401){
        swal(d.error.name, d.error.message, "error");
       }
     }
     else{
       //console.log(d.data);
      //console.log(d.status);
     if(Object.keys(d.data).length !== 0){
      swal("Good job!", "data created successfully", "success");
     }
     }
   }).catch((e)=>{
//console.log('MYERROR ',e);
   }).finally((all)=>{});
}
  //3.return statements
  return (
    <div className="App">
      { studentName }
      <form>
      <label>Enter Student Name:<br/>
        <input autoFocus type="text" value={ studentName } onChange={ (e)=>{setStudentName(e.target.value)}}/>
      </label><br/>
      <input type="button" onClick={ myFunction } name="studentName" value="Save Student" />
    </form>
    </div>
  );
}

export default App;
