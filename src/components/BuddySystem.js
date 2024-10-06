import React, { useState } from 'react';

const BuddySystem = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to control chat visibility
  const [messages, setMessages] = useState([]); // State to store messages
  const [newMessage, setNewMessage] = useState(''); // State to track the new message input

  // Function to handle sending a message
  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  return (
    <section className="p-8 bg-blue-50 relative">
      <h2 className="text-3xl font-bold mb-6 text-center">Buddy System</h2>

      {/* Container for buddy cards */}
      <div className="buddy-room mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {/* User 1 Card */}
        <div className="buddy-card bg-white p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
          <div className="flex items-center space-x-4">
            {/* Avatar for User 1 */}
            <img
              src="img4.jpeg"
              alt="User 1 Avatar"
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-300"
            />
            <div>
              <h3 className="text-2xl font-semibold">User 1</h3>
              <p className="text-gray-600">Fitness Level: Intermediate</p>
            </div>
          </div>
          {/* Progress Bar for Exercises */}
          <div className="mt-4">
            <p className="text-gray-700">Exercises Completed: 5/10</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>

        {/* User 2 Card */}
        <div className="buddy-card bg-white p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
          <div className="flex items-center space-x-4">
            {/* Avatar for User 2 */}
            <img
              src="img3.jpeg"
              alt="User 2 Avatar"
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-300"
            />
            <div>
              <h3 className="text-2xl font-semibold">User 2</h3>
              <p className="text-gray-600">Fitness Level: Beginner</p>
            </div>
          </div>
          {/* Progress Bar for Exercises */}
          <div className="mt-4">
            <p className="text-gray-700">Exercises Completed: 3/10</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <div className="text-center mt-8">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          onClick={() => setIsChatOpen(true)} // Open the chat window
        >
          Chat with Buddy
        </button>
      </div>

      {/* Chat Window - Right Sidebar */}
      {isChatOpen && (
        <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-lg p-4 flex flex-col z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Chat with User 2</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-gray-600">
              Close
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-grow overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div key={index} className={`p-2 mb-2 ${message.sender === 'You' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'You' ? 'bg-green-100' : 'bg-gray-100'}`}>
                  {message.sender}: {message.text}
                </span>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow border rounded-l-lg p-2"
            />
            <button
              onClick={sendMessage}
              className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BuddySystem;
