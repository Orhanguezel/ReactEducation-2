**Render Deploy Nedir? Nasıl Kullanılır? Backend Projeleri İçin Nasıl Çalıştırılır?**

### **Render Deploy Nedir?**
[Render](https://render.com/) bulut tabanlı bir platformdur ve uygulamaları kolayca dağıtmak (deploy etmek) için kullanılır. Hem frontend hem de backend projeleri için ücretsiz ve ücretli seçenekler sunar. Özellikle **Node.js, Python, Ruby, Docker, Go ve PHP** gibi backend teknolojilerini destekler.

**Avantajları:**
- Kolay deploy süreci (GitHub, GitLab ve Bitbucket entegrasyonu var).
- Otomatik ölçeklendirme.
- Çevre değişkenleri (environment variables) kolay yönetilebilir.
- Veritabanı (PostgreSQL, Redis vb.) desteği var.
- Statik siteler için CDN desteği.

---

## **Backend Projesi Render Üzerinde Nasıl Deploy Edilir?**
Şimdi adım adım **Node.js/Express.js tabanlı bir backend projesini** Render üzerinde nasıl deploy edeceğini anlatalım.

---

### **Adım 1: GitHub’a Push (Kodları Yükleme)**
Öncelikle backend projenin GitHub, GitLab veya Bitbucket üzerinde bir repository’si olması gerekiyor. 

**Eğer projen GitHub’a yüklenmemişse:**
1. Terminali aç ve projenin dizinine gir:
   ```bash
   cd /path/to/your/project
   ```
2. Git deposu başlat:
   ```bash
   git init
   ```
3. Dosyaları ekle:
   ```bash
   git add .
   ```
4. Commit yap:
   ```bash
   git commit -m "Initial commit"
   ```
5. GitHub’a yükle (Repository oluşturduğunu varsayıyorum):
   ```bash
   git branch -M main
   git remote add origin https://github.com/kullaniciadi/projeadi.git
   git push -u origin main
   ```

---

### **Adım 2: Render’a Giriş Yap ve Yeni Servis Oluştur**
1. [Render.com](https://render.com/) adresine git ve **GitHub ile giriş yap**.
2. **New +** butonuna tıkla ve **Web Service** seçeneğini seç.
3. Açılan ekranda **GitHub hesabını bağla** ve **backend repository'ni seç**.
4. **Deploy Ayarları**:
   - **Name:** Projeye bir isim ver (örneğin: `my-backend`).
   - **Region:** Yakın bir bölge seç (Avrupa için `Frankfurt` önerilir).
   - **Runtime:** Node.js seç.
   - **Build Command:** (Eğer bir `build` komutun yoksa boş bırakabilirsin)
     ```bash
     npm install
     ```
   - **Start Command:** (Eğer Express.js kullanıyorsan genellikle şu şekilde olur)
     ```bash
     node server.js
     ```
     veya
     ```bash
     npm start
     ```

---

### **Adım 3: Çevre Değişkenlerini (Environment Variables) Tanımla**
Eğer `.env` dosyası kullanıyorsan, **Render üzerinde manuel olarak tanımlaman gerekiyor.**
1. **Environment Variables** (Çevre Değişkenleri) bölümüne git.
2. `.env` dosyandaki değişkenleri tek tek ekle:
   - Örneğin:
     ```
     PORT = 3000
     DATABASE_URL = mongodb+srv://username:password@cluster.mongodb.net/mydb
     JWT_SECRET = mysecretkey
     ```

---

### **Adım 4: Deploy Başlat**
- **Create Web Service** butonuna bas.
- Render **otomatik olarak build** eder ve projen deploy edilir.
- **Logları takip etmek için Render Dashboard'a girip "Logs" sekmesini kullanabilirsin.**

---

## **Adım 5: API’yi Test Et**
Render deploy tamamlandıktan sonra **API’nin çalışıp çalışmadığını test et**.

**Örnek:**
Eğer proje şu adrese deploy edilmişse:
```
https://my-backend.onrender.com
```
Bir terminal açıp API'yi test edebilirsin:
```bash
curl https://my-backend.onrender.com/api/health
```
veya Postman kullanarak API'ye istek atabilirsin.

---

### **Render ile Backend Projesini Güncelleme**
Kodlarında bir değişiklik yaptıysan:
1. Güncellemeleri GitHub’a push et:
   ```bash
   git add .
   git commit -m "Update API"
   git push origin main
   ```
2. Render otomatik olarak en son değişiklikleri çeker ve yeniden deploy eder.

---

## **Ekstra: Render Üzerinde Database Kullanımı**
Eğer bir **PostgreSQL** veya **Redis** veritabanı ihtiyacın varsa, Render’ın kendi içinde barındırdığı veritabanlarını kullanabilirsin.

1. Render’da **New + → PostgreSQL** seçeneğini seç.
2. Bir veritabanı oluştur ve sana verilen **DATABASE_URL** değişkenini `.env` içine ekle.

---

## **Sonuç**
✔ **Render ile backend projeni kolayca deploy edebilirsin.**  
✔ **GitHub ile entegre çalışır, değişiklikleri otomatik çeker.**  
✔ **Ücretsiz plan ile küçük projeleri çalıştırabilirsin.**  

Render konusunda daha fazla pratiğe ihtiyacın olursa, örnek bir proje yaparak seninle birlikte canlı deploy edebiliriz. 🚀