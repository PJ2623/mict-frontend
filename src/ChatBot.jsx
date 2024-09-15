import { useEffect, useState } from 'react';

function ChatBot() {
    const [botResponses, setBotResponses] = useState([]); // Store multiple responses
    const [userMessage, setUserMessage] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8000/api/v1/bot/chat");

        // Connection opened
        ws.addEventListener("open", () => {
            console.log("WebSocket connection opened.");
        });

        // Listen for messages from the server
        ws.addEventListener("message", (event) => {
            setBotResponses(prevResponses => [...prevResponses, event.data]); // Add new response to the list
            console.log('Message from server: ', event.data);
        });

        // Save the socket to the state
        setSocket(ws);

        // Clean up the WebSocket when the component unmounts
        return () => {
            ws.close();
        };
    }, []);

    const onClickHandler = () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            console.log('Sending message:', userMessage);
            socket.send(userMessage);  // Send message through WebSocket
            setUserMessage('');  // Clear the input field
        } else {
            console.log('WebSocket is not open. ReadyState:', socket?.readyState);
        }
    };

    return (
        <>
            <h2>ChatBot</h2>
            <div className="chatBotResponseArea">
                <ul>
                    {botResponses.map((response, index) => (
                        <li key={index}>{response}</li> // Display each response as a list item
                    ))}
                </ul>
            </div>
            <div className="chatBotInputArea">
                <input
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    type="text"
                    placeholder="Type a message"
                />
                <button onClick={onClickHandler}>Send</button>
            </div>
        </>
    );
}

export default ChatBot;
