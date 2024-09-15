import './App.css'; 
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
 

 
function Login() {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState({ 
    value: "", 
    isTouched: false, 
  });
  
 
 const handleSubmit = async (e) => { 
   e.preventDefault();
   
   const response = await fetch('http://localhost:8000/fake-login', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       email: email,
       password: password.value,
     }),
   })

   const result = await response.json();

    console.log('Success:', result);
   localStorage.setItem('userData', JSON.stringify(result));
   
   if (!result.verified) {
      navigate('/unverified-dashboard');
      return;
   }
    navigate('/dashboard');
 }; 
 
 return ( 
   <div className="App-Login"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Login</h2> 
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
         <button type="submit"> 
           Login 
         </button> 
       </fieldset> 
     </form> 
   </div> 
 ); 
} 

export default Login; 