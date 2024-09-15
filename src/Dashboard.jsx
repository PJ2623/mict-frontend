import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
    const [userData, setUserData] = useState({})

    useEffect(() => { 
        const data = JSON.parse(localStorage.getItem('userData'));
        setUserData(data);
    }, [])
    
  return (
    <>
      <div className="sidebar">
        <Link href="#home">Home</Link>
        <Link href="#news">Announcements</Link>
        <Link href="#about">Create Announcement</Link>
        <Link to="dashboard/posts">Posts</Link>
        <Link to="dashboard/create-post">Create Post</Link>
        <Link href="#about">Polls</Link>
        <Link href="#about">Create Poll</Link>        
        <Link to="/dashboard/chatbot">ChatBot</Link>
        
        <Link to="/login">Logout</Link>
      </div>

      <div className="content">
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard