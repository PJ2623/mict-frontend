import './App.css'; 
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
 

 
function App() {
  
  const navigate = useNavigate();
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [employer, setEmployer] = useState("");
  const [position, setPosition] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [verifyPassword, setVerifyPassword] = useState({ 
   value: "", 
   isTouched: false, 
 });
  
 
 const handleSubmit = async (e) => { 
   e.preventDefault();
   
   const response = await fetch('http://localhost:8000/api/v1/users', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       first_name: firstName,
       last_name: lastName,
       email: email,
       phone_number: phoneNumber,
       employer: employer,
       position: position,
       national_id_number: nationalID,
       dob: {
         day: day,
         month: month,
         year: year,
       },
       password: password.value,
       verify_password: verifyPassword.value,
     }),
   })

   const result = await response.json();

    console.log('Success:', result);
    localStorage.setItem('userData', JSON.stringify(result));
    navigate('/dashboard');
 }; 
 
 return ( 
   <div className="App"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Sign Up</h2> 
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           <input 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
             required
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name"
             required
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address"
             required
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Phone Number <sup>*</sup> 
           </label> 
           <input 
             value={phoneNumber} 
             onChange={(e) => { 
               setPhoneNumber(e.target.value); 
             }} 
             placeholder="First name"
             required
           /> 
         </div>
         <div className="Field"> 
           <label> 
             Employer 
           </label> 
           <input 
             value={employer} 
             onChange={(e) => { 
               setEmployer(e.target.value); 
             }} 
             placeholder="Employer"
             required
           /> 
         </div>
         <div className="Field"> 
           <label> 
             Position <sup>*</sup> 
           </label> 
           <input 
             value={position} 
             onChange={(e) => { 
               setPosition(e.target.value); 
             }} 
             placeholder="Position"
             required
           /> 
         </div>
         <div className="Field"> 
           <label> 
             ID Number <sup>*</sup> 
           </label> 
           <input 
             value={nationalID} 
             onChange={(e) => { 
               setNationalID(e.target.value); 
             }} 
             placeholder="National ID"
             required
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Day of Birth <sup>*</sup> 
           </label> 
           <input 
             value={day} 
             onChange={(e) => { 
               setDay(e.target.value); 
             }} 
             placeholder="Day of birth"
             required
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Month of Birth <sup>*</sup> 
           </label> 
           <input 
             value={month} 
             onChange={(e) => { 
               setMonth(e.target.value); 
             }} 
             placeholder="Month of birth"
             required
           /> 
         </div>
         <div className="Field"> 
           <label> 
             Year of Birth <sup>*</sup> 
           </label> 
           <input 
             value={year} 
             onChange={(e) => { 
               setYear(e.target.value); 
             }} 
             placeholder="Year of birth"
             required
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password"
             required
           /> 
         </div>
         <div className="Field"> 
           <label> 
             Verify Password 
           </label> 
           <input 
             value={verifyPassword.value} 
             type="password" 
             onChange={(e) => { 
               setVerifyPassword({ ...verifyPassword, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setVerifyPassword({ ...verifyPassword, isTouched: true }); 
             }} 
             placeholder="Verify Password"
             required
           /> 
         </div>
         <button type="submit"> 
           Create account 
         </button> 
       </fieldset> 
     </form> 
   </div> 
 ); 
} 

export default App; 