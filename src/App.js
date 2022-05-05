
import './App.css';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { BASE_URL, TOKEN } from './Helper';

//rfc
function App() {
  //1.states/variables
  const [studentName, setStudentName] = useState('sakshi')

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
     headers: {
      'Authorization':'Bearer '+ TOKEN,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     },
     body:JSON.stringify(data)
   }).then((d)=>{
     console.log(d.status);
     if(d.status == 200){
      swal("Good job!", "data created successfully", "success");
     }
   }).catch((e)=>{}).finally((all)=>{});
}
  //3.return statements
  return (
    <div className="App">
      { studentName }
      <form>
      <label>Enter Student Name:<br/>
        <input type="text" value={ studentName } onChange={ (e)=>{setStudentName(e.target.value)}}/>
      </label><br/>
      <input type="button" onClick={ myFunction } name="studentName" value="Save Student" />
    </form>
    </div>
  );
}

export default App;
