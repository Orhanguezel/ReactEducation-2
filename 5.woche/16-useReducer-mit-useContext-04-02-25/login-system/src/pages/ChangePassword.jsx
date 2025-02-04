// 📜 src/pages/ChangePassword.js
import { useState } from "react";
import { useAuth } from "../context/UserContext";

function ChangePassword() {
  const { dispatch } = useAuth();
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = () => {
    dispatch({ type: "CHANGE_PASSWORD", payload: newPassword });
    alert("Şifreniz başarıyla değiştirildi!");
  };

  return (
    <div>
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="New Password"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
}

export default ChangePassword;
