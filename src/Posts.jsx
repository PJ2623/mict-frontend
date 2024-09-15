import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/posts/`);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    const onClickHandler = async (e) => { 
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/v1/posts/${author}/${title}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment: comment,
            }),
        });

        const result = await response.json();

        console.log('Success:', result);
        alert('Comment posted successfully');
    }

    const imageOnClickHandler = async (post) => { 

        const response = await fetch(`http://localhost:8000/api/v1/sentiments/${post.author}/${post.title}`);
        const result = await response.json();

        console.log(result);
    }

    return (
        <div className="cardContainer">
            {posts.map((post) => (
                <div key={posts.indexOf(post)} className="card">
                    <img src={post.image || "img_avatar.png"} alt="Avatar" style={{ width: "100%" }} onClick={() => imageOnClickHandler(post)} />
                    <div className="p-d-container">
                        <h4><b>{post.title || "Untitled Post"}</b></h4>
                        <p>{post.content || "Unknown Author"}</p>
                    </div>
                    <div className="postCommentInputContainer">
                        <input 
                            value={comment} 
                            onChange={(e) => { 
                            setComment(e.target.value);
                            setAuthor(post.author)
                            setTitle(post.title) 
                            }} 
                            placeholder="Type your comment here" 
                            required
                        /> 
                        <button id="d-comment-btn" onClick={onClickHandler}> 
                            Comment 
                        </button>
                    </div> 
                </div>
            ))}
        </div>
    );
}

export default Posts;
