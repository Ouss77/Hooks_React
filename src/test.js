import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

const Home = () => {
 const navigate = useNavigate();
 return (
   <div>
     <h1>
       Home page
     </h1>
     {/*
     When we click this button the navigate function will change the url to
     `/profile` and render the profile component
      */}
     <button onClick={() => navigate('/profile')}>Navigate to Profile </button>
   </div>
 )
}
const Profile = () => {
 const navigate = useNavigate();
 const [timer, setTimer] = useState(0)
 useEffect(() => {
   setInterval(() => {
     setTimer(timer + 1)
   }, 1000);
 })
 /*
 After the 5 second the function navigate will change the url into `/`
 and the home page will be rendered
 */
 useEffect(() => {
   setTimeout(() => {
     navigate('/')
   }, 5000);
 }, [])
 return (
   <div>
     <h1>Profile Page</h1>
     <p>
       Count down: <span>{timer}</span>
     </p>
   </div>
 )
}
function App() {
 return (
   <div className="App">
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route index path='/profile' element={<Profile />}></Route>
     </Routes>
   </div>
 );
}

export default App;