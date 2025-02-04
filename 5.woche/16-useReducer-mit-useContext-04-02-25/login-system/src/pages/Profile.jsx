// 📜 src/pages/ProfilePage.js
import React, { useState } from "react";
import { useAuth } from "../context/UserContext";
import { API } from "../api/apiConfig";

function ProfilePage() {
  const { state, dispatch } = useAuth();
  const [newName, setNewName] = useState(state.user?.name || "");

  const updateProfile = async () => {
    try {
      const response = await fetch(`${API.USERS}/${state.user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName }),
      });

      if (response.ok) {
        dispatch({ type: "UPDATE", payload: { name: newName } });
        alert("Profil güncellendi!");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Bir hata oluştu!");
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>ID: {state.user.id}</div>
      <div>Username: {state.user.username}</div>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={updateProfile}>Save</button>
    </div>
  );
}

export default ProfilePage;
