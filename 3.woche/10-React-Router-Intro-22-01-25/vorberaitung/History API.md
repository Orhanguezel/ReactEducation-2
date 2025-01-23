### **History API Nedir?**

**History API**, tarayıcının oturum geçmişine erişim sağlayan bir API'dir. Bu API, **`history`** adındaki global nesne üzerinden çalışır ve kullanıcı geçmişinde ileri ve geri gitme veya geçmiş yığınını manipüle etme gibi işlemleri gerçekleştirir. 

Bu API, yalnızca **ana iş parçacığında (Window)** kullanılabilir. **Worker** veya **Worklet** gibi bağlamlarda kullanılamaz.

---

### **Temel Kavramlar ve Kullanım**
History API, kullanıcının geçmişinde gezinmek ve sayfa geçmişini değiştirmek için birkaç önemli yöntem sunar:

#### **1. Geçmişte İleri ve Geri Gitme**
- **Geri gitmek için:** 
  ```javascript
  history.back();
  ```
  Bu, kullanıcının tarayıcısındaki **geri** düğmesine basmasıyla aynı işlemi yapar.

- **İleri gitmek için:**
  ```javascript
  history.forward();
  ```
  Bu da kullanıcının tarayıcısındaki **ileri** düğmesine basmasına eşdeğerdir.

---

#### **2. Geçmişte Belirli Bir Noktaya Gitme**
**`history.go()`** yöntemi, oturum geçmişindeki bir sayfayı yüklemek için kullanılır. Bu yöntem, mevcut sayfaya göre bir **göreceli pozisyon** alır:
- Şu anki sayfanın pozisyonu **`0`**'dır.
- Geri gitmek için negatif değer, ileri gitmek için pozitif değer verilir.

Örnekler:
- Bir önceki sayfaya gitmek:
  ```javascript
  history.go(-1);
  ```
  **`history.back()`** ile aynıdır.

- Bir sonraki sayfaya gitmek:
  ```javascript
  history.go(1);
  ```
  **`history.forward()`** ile aynıdır.

- Şu anki sayfayı yenilemek:
  ```javascript
  history.go(0); // veya history.go();
  ```

---

#### **3. Geçmiş Yığınına Yeni Giriş Eklemek veya Değiştirmek**
History API, geçmiş yığınına yeni bir giriş eklemek veya mevcut bir girişi değiştirmek için iki ana yöntem sunar:
- **`history.pushState()`**: Yeni bir giriş ekler.
- **`history.replaceState()`**: Mevcut girişin yerini alır.

Her iki yöntem de şu parametreleri alır:
- **Durum Nesnesi (`state`):** Geçmiş yığınına kaydedilen veriler.
- **Başlık (`title`):** Şu anda genellikle tarayıcılar tarafından kullanılmaz, ama doldurulması gerekir.
- **URL:** Tarayıcı adres çubuğunda gösterilecek URL.

Örnek:
```javascript
history.pushState({ page: 1 }, "Title 1", "?page=1");
history.replaceState({ page: 2 }, "Title 2", "?page=2");
```

---

#### **4. `popstate` Etkinliği**
Kullanıcı geçmişte ileri veya geri hareket ettiğinde, **`popstate`** etkinliği tetiklenir. Bu olayla, geçmişteki hareketleri dinleyebilir ve bu hareketlere göre işlem yapabilirsiniz.

Örnek:
```javascript
window.addEventListener("popstate", (event) => {
  console.log(
    `Konum: ${document.location}, Durum: ${JSON.stringify(event.state)}`
  );
});
```

---

### **Örnek: History API Kullanımı**
Aşağıdaki örnek, **`pushState`**, **`replaceState`**, ve **`popstate`** yöntemlerini nasıl kullanabileceğimizi gösterir:
```javascript
// popstate olayını dinler
window.addEventListener("popstate", (event) => {
  alert(
    `Konum: ${document.location}, Durum: ${JSON.stringify(event.state)}`
  );
});

// Yeni geçmiş girişleri ekle
history.pushState({ page: 1 }, "Başlık 1", "?page=1");
history.pushState({ page: 2 }, "Başlık 2", "?page=2");

// Geçmişteki mevcut girişi değiştir
history.replaceState({ page: 3 }, "Başlık 3", "?page=3");

// Geçmişte geri ve ileri git
history.back(); // ?page=1 sayfasına geri döner
history.go(2);  // ?page=3 sayfasına ilerler
```

---

### **History API'nin Sağladığı Yöntemler ve Özellikler**

| **Yöntem/Özellik**        | **Açıklama**                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| `history.back()`           | Kullanıcının tarayıcı geri düğmesine basmasıyla aynı işlemi yapar.         |
| `history.forward()`        | Kullanıcının tarayıcı ileri düğmesine basmasıyla aynı işlemi yapar.        |
| `history.go(x)`            | Belirtilen pozisyona göre geçmişte gezinir.                                |
| `history.pushState()`      | Yeni bir geçmiş kaydı ekler.                                               |
| `history.replaceState()`   | Mevcut geçmiş kaydını değiştirir.                                          |
| `history.length`           | Geçmiş yığınındaki toplam giriş sayısını döner.                           |

---

### **Neden History API Kullanılır?**
- **SPA'lerde Navigation:** React veya Vue gibi framework'lerle tek sayfa uygulamaları geliştirirken tarayıcı geçmişini yönetmek için kullanılır.
- **Kullanıcı Deneyimi:** Tarayıcı geri ve ileri düğmelerini etkin bir şekilde kullanarak kullanıcı deneyimini iyileştirir.
- **SEO ve URL Yönetimi:** Dinamik içeriklerin farklı URL'lerle ilişkilendirilmesini sağlar.

---

### **Sonuç**
**History API**, modern web uygulamalarında tarayıcı geçmişini yönetmek ve kullanıcı deneyimini geliştirmek için güçlü bir araçtır. React Router gibi kütüphaneler, History API'yi temel alarak çalışır ve SPA'lerde gezinmeyi kolaylaştırır.