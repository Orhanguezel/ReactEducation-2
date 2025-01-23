### **StaticRouter Nedir?**

**StaticRouter**, React Router kütüphanesinin bir parçasıdır ve **statik ortamlar** için tasarlanmış bir yönlendirme türüdür. Genellikle **sunucu tarafı render (Server-Side Rendering - SSR)** işlemleri sırasında veya yönlendirme yollarını kontrol eden, sabit bir yapı gerektiğinde kullanılır.

StaticRouter, diğer yönlendirme türlerinden farklı olarak URL değişikliklerini izlemez. Bunun yerine, yönlendirme yollarını manuel olarak belirlemenizi ve yönlendirme işlemlerini programatik olarak yönetmenizi sağlar.

---

### **StatikRouter Kullanım Alanları**

1. **Sunucu Tarafı Render (SSR):**
   - React uygulamalarını sunucu tarafında render etmek için StaticRouter tercih edilir. Sunucuda, URL çubuğu yerine sunucunun sağladığı yönlendirme bilgileri kullanılır.

2. **Statik Ortamlar:**
   - Birden fazla URL'nin sabit olduğu durumlarda veya tarayıcı URL çubuğunu kontrol etme gereksinimi olmadığında kullanılabilir.

3. **Özel Yönlendirme Kontrolleri:**
   - Yönlendirme mantığının tamamen kontrol edilebilmesi gereken durumlarda StaticRouter uygundur.

---

### **StatikRouter Özellikleri**
- URL çubuğunu değiştirmez, yönlendirme bilgileri dışarıdan geçilir.
- Yönlendirme mantığını manuel olarak belirlemenize olanak tanır.
- Tarayıcı bağımsızdır, bu nedenle sunucu tarafında güvenle kullanılabilir.

---

### **StaticRouter Kullanımı**

#### **Kurulum**
React Router kütüphanesini yükleyin:
```bash
npm install react-router-dom
```

#### **Örnek Kullanım**
Sunucu tarafında bir yönlendirme örneği:

```jsx
import React from "react";
import { StaticRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Ana Sayfa</h1>;
}

function About() {
  return <h1>Hakkında</h1>;
}

function App({ location }) {
  return (
    <StaticRouter location={location}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </StaticRouter>
  );
}

export default App;
```

#### **Sunucu Tarafı Render İşlemi**
StaticRouter, sunucunun sağladığı `location` bilgisini kullanır. Örneğin:

```jsx
import ReactDOMServer from "react-dom/server";
import App from "./App";

const location = "/about"; // Sunucudan gelen URL bilgisi
const html = ReactDOMServer.renderToString(<App location={location} />);
console.log(html);
```

---

### **StaticRouter Özellikleri ve Props**

| **Prop**       | **Açıklama**                                                                                          |
|----------------|------------------------------------------------------------------------------------------------------|
| **`location`** | Hangi yolun render edileceğini belirtir. (Örneğin: `/about`, `/home`)                                 |
| **`basename`** | URL'nin başlangıcına bir temel yol ekler. Örneğin: `/app` -> `/app/home`, `/app/about`.               |
| **`context`**  | Yönlendirme sırasında bilgi paylaşımı yapmak için kullanılır. Örneğin, yönlendirme durumu kaydedilir. |

---

### **StaticRouter ile Context Kullanımı**

StaticRouter'da, yönlendirme sonuçlarını takip etmek için `context` kullanabilirsiniz:

```jsx
import React from "react";
import { StaticRouter, Routes, Route, Navigate } from "react-router-dom";

function Home() {
  return <h1>Ana Sayfa</h1>;
}

function About() {
  return <h1>Hakkında</h1>;
}

function App({ location, context }) {
  return (
    <StaticRouter location={location} context={context}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </StaticRouter>
  );
}

// Sunucuda kullanım
const context = {};
const location = "/nonexistent";
ReactDOMServer.renderToString(<App location={location} context={context} />);
console.log(context); // { url: '/' }
```

---

### **StaticRouter Kullanmanın Avantajları**
1. **SSR Desteği:**
   - StaticRouter, sunucuda render edilen uygulamalarda etkili bir şekilde çalışır.
2. **Tam Kontrol:**
   - Yönlendirme mantığını tamamen kontrol etmenize olanak tanır.
3. **Esnek Yapı:**
   - Sabit yönlendirme işlemleri için idealdir.

---

### **StaticRouter Kullanmanın Dezavantajları**
1. **SEO İçin Yetersizdir:**
   - Sadece sunucu tarafında anlamlıdır, istemci tarafında uygun değildir.
2. **Dinamik Yönlendirme Yoktur:**
   - Kullanıcı etkileşimleri ile URL çubuğunu değiştiremez.
3. **Tarayıcı Navigasyonu Desteği Eksik:**
   - `back`, `forward` gibi tarayıcı özelliklerini desteklemez.

---

### **StaticRouter vs. Diğer Router Türleri**

| **Özellik**              | **StaticRouter**                      | **BrowserRouter**                   | **MemoryRouter**               |
|---------------------------|---------------------------------------|-------------------------------------|--------------------------------|
| **Kullanım Alanı**        | Sunucu tarafı render                  | İstemci tarafı render               | Test ortamları, URL gereksiz durumlar |
| **URL Çubuğu**            | Kullanılmaz                          | Tarayıcı URL çubuğu                 | Değişmez                       |
| **Navigasyon**            | Manuel                               | Tarayıcı geçmişi kullanır            | Bellek                         |
| **SEO Desteği**           | Sunucu tarafından sağlanır            | Uygundur                            | Yok                            |

---

### **Sonuç**
**StaticRouter**, sunucu tarafında çalışan React uygulamalarında ve sabit yönlendirme gereksinimlerinde en uygun çözümlerden biridir. Tarayıcı bağımsız olduğu için özellikle sunucu tarafında yönlendirme mantığını tamamen kontrol etmek isteyen projelerde kullanılır. Ancak istemci tarafında dinamik yönlendirme gerekiyorsa `BrowserRouter` tercih edilmelidir.