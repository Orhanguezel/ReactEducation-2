### **`useParams` Nedir?**

`useParams`, React Router kütüphanesinde bulunan bir **hook**'tur. Yönlendirme sırasında URL'de tanımlanmış olan dinamik parametrelere erişim sağlar. Özellikle dinamik sayfalar oluştururken (örneğin, kullanıcı profilleri veya ürün detay sayfaları) kullanılır.

---

### **`useParams`'ın Özellikleri**

1. **URL Parametrelerine Erişim:**
   - URL'de belirtilen parametreleri bir nesne olarak döndürür.
2. **Dinamik Yönlendirme:**
   - Farklı parametrelere göre bileşenlerin içeriğini dinamik olarak oluşturmanıza olanak tanır.
3. **Kolay Kullanım:**
   - React Router ile gelen basit bir hook olduğu için ekstra yapılandırma gerektirmez.

---

### **Temel Kullanım**

#### 1. **Basit Örnek**

Bir React uygulamasında, `useParams` ile bir kullanıcının profil sayfasını oluşturalım:

```jsx
import React from "react";
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";

function UserProfile() {
  const { username } = useParams(); // useParams ile URL'deki 'username' parametresini alıyoruz.
  return <h1>{username} adlı kullanıcının profili</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/profile/Orhan">Orhan'ın Profili</Link>
        <Link to="/profile/Ahmet">Ahmet'in Profili</Link>
      </nav>
      <Routes>
        <Route path="/profile/:username" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Açıklama:**
- **`path="/profile/:username"`:** `:username` dinamik bir parametredir. URL'deki bu kısmın değerine `useParams` ile erişilir.
- **`useParams()`:** `{ username: 'Orhan' }` gibi bir nesne döndürür.

---

#### 2. **Birden Fazla Parametre**

Birden fazla parametreyi kullanmak için:

```jsx
import React from "react";
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { categoryId, productId } = useParams();
  return (
    <h1>
      Kategori: {categoryId}, Ürün: {productId}
    </h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/category/12/product/34">Ürün Detayı</Link>
      </nav>
      <Routes>
        <Route path="/category/:categoryId/product/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Çıktı:**
- URL: `/category/12/product/34`
- Ekranda görünen:
  ```
  Kategori: 12, Ürün: 34
  ```

---

### **`useParams`'ın Çalışma Mantığı**

1. **URL Tanımlaması:**
   - Route tanımında `:` kullanılarak dinamik parametreler belirtilir. Örneğin: `/user/:id`.
2. **Parametre Yakalama:**
   - `useParams()` çağrıldığında, URL'deki parametreler bir nesne olarak döner.
3. **React Component'te Kullanım:**
   - Dönen parametreler bileşenin davranışını ve görüntüsünü dinamik olarak değiştirmek için kullanılabilir.

---

### **`useParams` ile Dinamik Veri Çekme**

`useParams`, dinamik olarak belirli bir kaynağın bilgilerini almak için kullanılabilir. Örneğin, bir API'den kullanıcı bilgisi çekelim:

```jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // API'den kullanıcı bilgilerini çek
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, [userId]);

  if (!userData) return <p>Yükleniyor...</p>;

  return (
    <div>
      <h1>{userData.name} adlı kullanıcının profili</h1>
      <p>Email: {userData.email}</p>
      <p>Şehir: {userData.address.city}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Açıklama:**
- `userId`, URL'den alınarak API isteğinde kullanılır.
- Gelen verilerle dinamik bir kullanıcı profili oluşturulur.

---

### **Props ve `useParams` Arasındaki Fark**

1. **Props Kullanımı:**
   - Gelen parametreler üst bileşenden alt bileşene props olarak aktarılır.
   - Daha fazla kod yazmayı gerektirir.

2. **`useParams` Kullanımı:**
   - Dinamik parametreleri doğrudan alır.
   - Daha temiz ve kolay bir yöntemdir.

---

### **`useParams` ile Hata Yönetimi**

URL'deki parametre yanlış veya eksik olduğunda hata oluşabilir. Bunun önüne geçmek için varsayılan değerler veya hata kontrolü yapılabilir:

```jsx
function UserProfile() {
  const { userId } = useParams();

  if (!userId) {
    return <h1>Geçersiz Kullanıcı ID'si</h1>;
  }

  return <h1>Kullanıcı ID: {userId}</h1>;
}
```

---

### **Avantajlar ve Dezavantajlar**

| **Avantajlar**                            | **Dezavantajlar**                                             |
|-------------------------------------------|---------------------------------------------------------------|
| Dinamik yönlendirmelerde parametre erişimi kolaydır. | Hatalı parametre kullanımı sonucu bileşen yanlış çalışabilir. |
| Daha az kod ve temiz bir yapı sağlar.      | URL parametrelerinin doğruluğunu manuel kontrol etmek gerekir. |
| API ile dinamik veri çekimi için uygundur. |                                                              |

---

### **Sonuç**

`useParams`, React Router ile dinamik yönlendirme yapmanın en kolay yollarından biridir. Dinamik parametreleri doğrudan alarak uygulamanın kullanıcıya özel içerik sunmasını sağlar. Örneğin, kullanıcı profilleri, ürün detayları veya kategori tabanlı sayfalar gibi birçok farklı senaryoda etkili bir şekilde kullanılabilir.