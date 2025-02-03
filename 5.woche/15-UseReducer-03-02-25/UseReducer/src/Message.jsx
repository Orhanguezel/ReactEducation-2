import { useState } from 'react';

export default function Chat({ contact, message, dispatch }) {
  
  const handleSendMessage = () => {
    // 1. Alert ile mesajı göster
    alert(`Message to ${contact.email}: ${message}`);
    
    // 2. Mesaj girişini temizle
    dispatch({
      type: 'edited_message',
      message: '',
    });
  };

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      {/* Gönder butonu */}
      <button onClick={handleSendMessage}>
        Send to {contact.email}
      </button>
    </section>
  );
}
