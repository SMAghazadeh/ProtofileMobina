import { useState, useEffect } from 'react';
import axios from 'axios';

const MessageTable = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <div>Loading messages...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        {/* Table headers same as before */}
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Name</th>
            <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Email</th>
            <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Message</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {messages.length > 0 ? (
            messages.map((message) => (
              <tr key={message._id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b text-black">{message.name}</td>
                <td className="py-3 px-4 border-b  text-black">{message.email}</td>
                <td className="py-3 px-4 border-b  text-black">{message.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-4 text-center text-gray-500">
                No messages found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MessageTable;