### **useNavigate Nedir?**

`useNavigate`, React Router'da kullanılan ve uygulama içinde programlı bir şekilde yönlendirme yapmayı sağlayan bir React Hook'udur. Bu, özellikle kullanıcı bir butona tıkladığında, form gönderdiğinde veya belirli bir işlem gerçekleştiğinde başka bir sayfaya yönlendirme yapmak istediğinizde kullanılır.

`useNavigate` React Router v6 ile tanıtılmıştır ve eski `useHistory` Hook'un yerini almıştır.

---

### **useNavigate Nasıl Kullanılır?**

#### **Temel Kullanım**

`useNavigate` Hook'u, bir sayfadan diğerine yönlendirme işlemi için bir fonksiyon döner. Bu fonksiyon çağrıldığında belirtilen rota (`path`) ile yönlendirme yapılır.

```javascript
import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/about"); // /about rotasına yönlendirir
  };

  return (
    <div>
      <button onClick={handleNavigation}>Hakkında Sayfasına Git</button>
    </div>
  );
}
```

---

### **useNavigate Parametreleri**

`useNavigate` fonksiyonu iki parametre alabilir:

1. **Path (Gidilecek Rota):**
   - Yönlendirilmek istenen rota belirtilir.
   - Örneğin: `navigate("/home")`.

2. **Options (Seçenekler):**
   - `replace`: Eğer `true` olarak ayarlanırsa, mevcut geçmiş kaydı (history) değiştirilir. Geri butonu kullanıldığında bir önceki sayfaya gidilemez.
   - `state`: Yönlendirme sırasında ek veri taşımak için kullanılır.

   **Örnek:**
   ```javascript
   navigate("/profile", { replace: true, state: { userId: 123 } });
   ```

---

### **State ile Veri Taşıma**

`useNavigate` ile bir sayfadan diğerine veri gönderebilirsiniz. Veriler `state` parametresi ile taşınır ve hedef sayfada bu veriler `useLocation` ile alınır.

**Veri Gönderme:**
```javascript
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile", { state: { userId: 42 } });
  };

  return (
    <div>
      <button onClick={goToProfile}>Profil Sayfasına Git</button>
    </div>
  );
}
```

**Veriyi Alma:**
```javascript
import { useLocation } from "react-router-dom";

function ProfilePage() {
  const location = useLocation();
  const { userId } = location.state || {};

  return <h1>Profil ID: {userId}</h1>;
}
```

---

### **Geri ve İleri Gitme**

`useNavigate`, belirli bir rota yerine geçmişteki veya gelecekteki sayfalara yönlendirme yapmak için de kullanılabilir:

#### **Bir Adım Geri Gitme**
```javascript
navigate(-1); // Bir önceki sayfaya yönlendirir
```

#### **Bir Adım İleri Gitme**
```javascript
navigate(1); // Bir sonraki sayfaya yönlendirir
```

---

### **replace Seçeneği**

`replace` seçeneği kullanıldığında, yönlendirme geçmiş kaydını değiştirdiği için kullanıcı geri düğmesine bastığında önceki sayfaya geri dönemez.

**Örnek:**
```javascript
navigate("/dashboard", { replace: true });
```

---

### **useNavigate Kullanımı ile Örnekler**

#### **Bir Formdan Yönlendirme**
Form gönderildiğinde bir başka sayfaya yönlendirme yapmak için kullanılabilir.

```javascript
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form işlemleri burada yapılır
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Kullanıcı Adı" />
      <button type="submit">Giriş Yap</button>
    </form>
  );
}
```

---

#### **Dinamik Yönlendirme**

Bir URL parametresi ile yönlendirme yapabilirsiniz.

```javascript
function UserList() {
  const navigate = useNavigate();

  const goToUserProfile = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <div>
      <button onClick={() => goToUserProfile(1)}>Kullanıcı 1</button>
      <button onClick={() => goToUserProfile(2)}>Kullanıcı 2</button>
    </div>
  );
}
```

---

### **useNavigate ile Geriye Dönüş ve İleri Gitme**

SPA'larda önceki ve sonraki sayfalara gezinmek için kullanılabilir:

```javascript
import { useNavigate } from "react-router-dom";

function NavigationExample() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Geri</button>
      <button onClick={() => navigate(1)}>İleri</button>
    </div>
  );
}
```

---

### **Avantajları**

1. **Esneklik:** URL parametreleri, durum bilgisi (state) ve diğer seçeneklerle çalışabilir.
2. **SPA ile Uyum:** Sayfa yenilemesi olmadan hızlı yönlendirme sağlar.
3. **React Router ile Tam Entegrasyon:** React Router ile kullanımı kolay ve standarttır.

---

### **Sonuç**

`useNavigate`, React Router kullanan projelerde uygulama içi yönlendirmeyi kolaylaştıran güçlü bir araçtır. Özellikle SPA projelerinde kullanıcı etkileşimlerine bağlı yönlendirme işlemleri için vazgeçilmezdir. Hem basit yönlendirmeler hem de dinamik verilerle çalışmak için etkili bir çözümdür.