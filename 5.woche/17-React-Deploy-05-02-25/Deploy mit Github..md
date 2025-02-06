### **React Projesini GitHub Pages ile Deploy Etme**

GitHub Pages, statik web sayfalarını barındırmak için kullanılan ücretsiz bir hizmettir. React uygulamalarını GitHub Pages üzerinden deploy etmek için aşağıdaki adımları takip edebilirsin.

---

## **1. GitHub Deposu Hazırlama**
Öncelikle, GitHub üzerinde bir depo oluşturman gerekiyor.

1. GitHub hesabına giriş yap.
2. Yeni bir **repository** oluştur (**Public** olarak ayarla).
3. Bilgisayarında terminal veya VS Code kullanarak projeyi bu repository'ye bağla:
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/kullaniciadi/repo-adi.git
   git push -u origin main
   ```

---

## **2. GitHub Pages İçin `gh-pages` Paketini Yükleme**
GitHub Pages ile deploy edebilmek için `gh-pages` paketine ihtiyacın var.

1. Terminalde aşağıdaki komutu çalıştırarak paketi yükle:
   ```sh
   npm install gh-pages --save-dev
   ```

---

## **3. `package.json` Dosyasını Güncelleme**
`package.json` dosyasında aşağıdaki değişiklikleri yapmalısın.

1. `"homepage"` alanını ekleyerek GitHub Pages için URL belirt:
   ```json
   "homepage": "https://kullaniciadi.github.io/repo-adi"
   ```

2. `"scripts"` bölümüne aşağıdaki satırları ekle:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

   Eğer `dist` yerine `build` klasörünü kullanıyorsan:
   ```json
   "deploy": "gh-pages -d build"
   ```

---

## **4. Projeyi Build Edip Deploy Etme**
Artık projeyi GitHub Pages'e deploy edebilirsin.

1. **Build komutunu çalıştır**:
   ```sh
   npm run build
   ```
   veya
   ```sh
   npm run build --base=/repo-adi/
   ```

2. **Deploy et**:
   ```sh
   npm run deploy
   ```

Bu adımlar tamamlandıktan sonra GitHub Pages üzerinden projen yayınlanmış olacak.

---

## **5. GitHub Pages Ayarlarını Yapma**
GitHub sayfandan repository'ne gir ve **Settings > Pages** sekmesine git.

- **Source** kısmında **gh-pages branch** seçili olmalı.
- **URL’yi kopyala** ve tarayıcıdan kontrol et.

---

## **Hata ve Çözümler**
### **1. Sayfa Beyaz Geliyor**
- `homepage` alanını `package.json` içinde tanımladığından emin ol.
- Eğer `vite.config.js` kullanıyorsan, `base` ayarını eklemelisin:
  ```js
  export default defineConfig({
    base: "/repo-adi/",
    plugins: [react()]
  });
  ```

### **2. 404 Hatası Alıyorum**
- `git push` ile kodların GitHub’a aktarıldığını kontrol et.
- Repository ayarlarında **Pages** bölümünden **gh-pages** branch’inin seçili olduğuna emin ol.

---

Bu adımları takip ederek React projenin GitHub Pages üzerinde nasıl deploy edileceğini öğrenmiş oldun. Sonraki adımda Render ile deploy sürecine geçebiliriz! 🚀