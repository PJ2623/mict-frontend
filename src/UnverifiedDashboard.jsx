import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';

function UnverifiedDashboard() {
    
  return (
    <>
      <div className="sidebar">
        <Link href="#home">Home</Link>
        <Link href="#news">Announcements</Link>
        <Link to="unverified-dashboard/posts">Posts</Link>
        <Link ef="#about">Polls</Link>
        <Link to="/unverified-dashboard/chatbot">ChatBot</Link>
        <Link to="/login">Logout</Link>
      </div>

      <div className="content">
        <Outlet />
      </div>
    </>
  )
}

export default UnverifiedDashboard