import React, { useState, useRef, useEffect } from 'react';
import Ellipse from './assets/Ellipse.png';
import Doctor from './assets/Doctor.png';
import './css/Chat.css';

function ChatArea() {
  const [messages, setMessages] = useState([
    { text: 'Hello!', sender: 'user' },
    { text: 'Hi there!', sender: 'other' },
    { text: 'Hello!', sender: 'user' },
    { text: 'Hi there!', sender: 'other' },
    { text: 'Hello!', sender: 'user' },
    { text: 'Hi there!', sender: 'other' },
    // Add more messages as needed
  ]);

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the messages container when new messages are added
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className=" h-100 bg-white shadow-md overflow-hidden relative rounded-3xl">
      <div className=" text-black py-2 font-bold w-5/6 m-auto text-xl border-b-lightGris border-solid border-b-2 ">
        Chat
      </div>
      <div className="px-4 py-3 overflow-y-auto max-h-99" id="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-center mb-4 ${
              message.sender === 'user' ? 'justify-end' : ''
            }`}
          >
            {message.sender === 'other' && (
              <img
                src={Ellipse}
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
            <div
              className={`mb-2 ${
                message.sender === 'user'
                  ? 'text-white bg-primaryBlue rounded-3xl ml-32'
                  : 'bg-lightGris text-black rounded-3xl '
              } py-2 px-3 rounded w-min min-w-32 `}
            >
              {message.text}
            </div>
            {message.sender === 'user' && (
              <img
                src={Doctor}
                className="w-8 h-8 rounded-full ml-2"
              />
            )}
            <div ref={messagesEndRef} />{' '}
            {/* This div ensures scrolling to the bottom */}
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 bottom-0 w-full absolute">
        <input
          type="text"
          className="flex-1  px-3 py-1 border-2 border-solid border-sky-500  mr-2 focus:outline-none focus:ring focus:border-blue-300 rounded-3xl"
          placeholder="Message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)} // Use onKeyDown instead of onKeyPress
        />
        <button
          type="button"
          className=" text-sky-500 hover:text-sky-700 font-bold text-lg px-4 py-2 rounded-md absolute right-7"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatArea;
