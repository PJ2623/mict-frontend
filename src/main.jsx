import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Dashboard.jsx'
import SignUp from './SignUp.jsx'
import Login from './Login.jsx'
import UnverifiedDashboard from './UnverifiedDashboard.jsx'
import ChatBot from './ChatBot.jsx'
import CreatePost from './CreatePost.jsx'
import Posts from './Posts.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/chatbot',
        element: <ChatBot />,
      },
      {
        path: 'dashboard/create-post',
        element: <CreatePost />,
      },
      {
        path: 'dashboard/posts',
        element: <Posts />,
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/unverified-dashboard',
    element: <UnverifiedDashboard />,
    children: [
      {
        path: '/unverified-dashboard/chatbot',
        element: <ChatBot />,
      },
      {
        path: 'unverified-dashboard/posts',
        element: <Posts />,
      }
    ]
  },
  {
    path: '/create-post',
    element: <CreatePost />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
