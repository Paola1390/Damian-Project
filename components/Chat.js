import { useState } from 'react';

const Chat = () => {
  const [mensaje, setMensaje] = useState('');
  const [chat, setChat] = useState([
    { id: 1, sender: 'Damián', text: '¿Has hecho tus tareas hoy?' }
  ]);

  const handleInputChange = (e) => {
    setMensaje(e.target.value);
  };

  const handleSendMessage = () => {
    if (mensaje.trim()) {
      setChat([...chat, { id: chat.length + 1, sender: 'Paola', text: mensaje }]);
      setMensaje('');
      
      // Simula una respuesta automática de Damián
      setTimeout(() => {
        setChat((prevChat) => [
          ...prevChat,
          { id: prevChat.length + 1, sender: 'Damián', text: '¡Bien hecho! Sigue así.' }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Chat con Damián</h2>
      <div className="bg-gray-100 p-4 rounded-lg max-h-96 overflow-y-auto mb-4">
        {chat.map((message) => (
          <div key={message.id} className={`mb-3 ${message.sender === 'Damián' ? 'text-left' : 'text-right'}`}>
            <p className={`font-semibold ${message.sender === 'Damián' ? 'text-gray-700' : 'text-blue-600'}`}>
              {message.sender}: 
            </p>
            <p className={`p-2 rounded-lg inline-block ${message.sender === 'Damián' ? 'bg-white' : 'bg-blue-100'}`}>
              {message.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={mensaje}
          onChange={handleInputChange}
          placeholder="Escribe tu mensaje..."
          className="w-full p-2 border rounded-l-lg focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
