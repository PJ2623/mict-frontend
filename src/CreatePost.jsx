import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function CreatePost() {
  const navigate = useNavigate();
  const formData = new FormData();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set the image state to the selected file
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('userData'));
        
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    const response = await fetch(`http://localhost:8000/api/v1/posts/${user.email}`, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    console.log('Success:', result);
    navigate('/dashboard/dashboard/posts');
  }; 

  return (
    <div className="App-Create-Post"> 
      <form onSubmit={handleSubmit}> 
        <fieldset> 
          <h2>Create Post</h2> 
          <div className="Field"> 
            <label> 
              Title <sup>*</sup> 
            </label> 
            <input 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Enter title" 
              required
            /> 
          </div> 
          <div className="Field"> 
            <label> 
              Content <sup>*</sup>
            </label> 
            <input 
              value={content}  
              onChange={(e) => setContent(e.target.value)} 
              placeholder="Type something" 
              required
            /> 
          </div>
          <div className="Field"> 
            <label> 
              Upload Image <sup>*</sup>
            </label> 
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange}
              required 
            /> 
          </div>
          <button type="submit"> 
            Submit 
          </button> 
        </fieldset> 
      </form> 
    </div>
  );
}

export default CreatePost;
