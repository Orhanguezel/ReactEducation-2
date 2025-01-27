import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserProfile() {
  const { id } = useParams(); // URL'deki parametreyi al
  const [user, setUser] = useState(null); // Kullanıcı bilgilerini saklamak için state
  const [loading, setLoading] = useState(true); // Yüklenme durumunu kontrol etmek için state
  const [error, setError] = useState(null); // Hata durumunu kontrol etmek için state

  useEffect(() => {
    // API çağrısı
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Yüklenme durumu
  if (loading) {
    return <p>Loading...</p>;
  }

  // Hata durumu
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Kullanıcı verisi mevcutsa göster
  return (
    <div>
      <h1>User Profile</h1>
      {user && (
        <div>
          <h2>User name: {user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;

