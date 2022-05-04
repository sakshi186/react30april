import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
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
   fetch('http://localhost:1337/api/friends',{
     method:'POST',
     headers: {
      'Authorization':'Bearer a4d8199c6b5d4f3d21a1ea25227c78ae4f4de1924909c2169379f3388a1d3ecbca4fc014a478adbe7bea8610ed2f3953bca8667be768e0582081b58130c2f46106221a0dc8f64aec321b4098619c03871ba39d586601c0d94383111782135a43b786fbe0179e3e30666376961a8882250f1bd7cf3d1e77dfb97dc13dd3330ccf',
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
