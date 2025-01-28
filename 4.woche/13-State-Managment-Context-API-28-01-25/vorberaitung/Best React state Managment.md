Yukarıdaki yazı, 2022 yılında popüler olan **React durum yönetimi (state management)** kütüphanelerini tanıtan ve karşılaştıran bir makale niteliğindedir. Durum yönetimi, React uygulamalarında veri akışını kontrol etmek, uygulama görünümünü ve kullanıcı deneyimini düzenlemek açısından kritik bir öneme sahiptir. Bu yüzden, açık kaynak kütüphaneler sayesinde durum yönetimini kolaylaştırmak mümkündür. Yazıda, **6 popüler durum yönetimi kütüphanesi** ele alınmış ve detaylı bir şekilde açıklanmıştır. Aşağıda bu kütüphanelerin detaylı açıklaması verilmiştir:

---

### **1. Recoil**
- **Facebook** tarafından geliştirilen ve 2020 yılında duyurulan Recoil, React'e özgü atomik bir yaklaşım sunar.
- **Atomlar ve Selectorlar** adlı iki temel yapı kullanılır:
  - **Atom**: React'teki `useState`'e benzer, ancak bileşenler arasında paylaşılabilir ve bileşenlerin dışında oluşturulabilir.
  - **Selector**: Atomlara veya diğer selector'lara bağımlı olan ve bu bağımlılıklar değiştiğinde yeniden hesaplanan saf fonksiyonlardır.
- React Suspense ile entegre çalışır ve asenkron veri yönetimi için uygundur.

```javascript
const isAvailableState = atom({
  key: "isAvailableState", // Benzersiz anahtar
  default: true, // Varsayılan değer
});

const statusState = selector({
  key: "statusState",
  get: ({ get }) => {
    const isAvailable = get(isAvailableState);
    return isAvailable ? "Available" : "Unavailable";
  },
});
```

### **2. Jotai**
- **Minimalist bir API** ve daha küçük bir paket boyutu (3.2 kB) ile dikkat çeker.
- Recoil'e benzer bir yaklaşım benimser, ancak **JavaScript'in WeakMap yapısını** kullanır. Bu, daha etkili bir bellek yönetimi sağlar.
- Atomlar üzerinde çalışır ve React Suspense ile kolayca entegre olur.

```javascript
const isAvailableState = atom(true);

const statusState = atom((get) => {
  const isAvailable = get(isAvailableState);
  return isAvailable ? "Available" : "Unavailable";
});
```

---

### **3. Redux**
- **En bilinen ve yaygın kullanılan** React durum yönetim kütüphanelerinden biridir.
- Durum yalnızca bir **action** (eylem) gönderilerek güncellenebilir. Reducer adı verilen saf bir fonksiyon, action ve mevcut durumu alarak yeni durumu üretir.
- Redux'un en büyük problemi, gereksiz kod tekrarı ve **boilerplate** miktarının fazlalığıdır.
- **Redux Toolkit** bu sorunu çözmek için geliştirilmiştir:
  - Daha az kod
  - Immer ile kolay durum değişiklikleri
  - Redux-Thunk ile asenkron işlem desteği

```javascript
const exampleSlice = createSlice({
  name: "example",
  initialState: { isAvailable: true },
  reducers: {
    makeAvailable: (state) => {
      state.isAvailable = true;
    },
    makeUnavailable: (state) => {
      state.isAvailable = false;
    },
  },
});
```

---

### **4. Rematch**
- Redux'un basitleştirilmiş ve daha hafif bir versiyonudur.
- Boilerplate kodu azaltır ve Redux'un en iyi uygulamalarını takip eder.
- **Models** adı verilen bir yapı sunar; bu yapı, state (durum), reducer ve efektleri bir arada toplar.

```javascript
const countModel = {
  state: 0,
  reducers: {
    increment(state, payload) {
      return state + payload;
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
};
```

---

### **5. Zustand**
- Sadece 1 kB'den küçük boyutuyla bu listedeki en hafif kütüphanedir.
- **Hooks API** kullanarak React bileşenleri için basit bir durum yönetimi sunar.
- Daha küçük ve orta ölçekli projelerde kullanılabilir.
- Geçici durum güncellemeleri ve React Concurrent Mode ile sorunsuz çalışır.

```javascript
const useStore = create((set, get) => ({
  isAvailable: true,
  makeAvailable: () => set((state) => ({ ...state, isAvailable: true })),
  makeUnavailable: () => set((state) => ({ ...state, isAvailable: false })),
}));
```

---

### **6. Hookstate**
- **React Hook'larıyla tamamen uyumlu** bir durum yönetimi kütüphanesidir.
- Hem yerel hem de global durum yönetimi için aynı API'yi kullanır.
- **Scalability (ölçeklenebilirlik)** açısından güçlüdür ve iç içe geçmiş durumlar (nested state) için performanslı bir çözüm sunar.

```javascript
const state = createState({
  isAvailable: true,
});

const makeAvailable = () => state.isAvailable.set(true);
const makeUnavailable = () => state.isAvailable.set(false);

const isAvailable = state.isAvailable.get();
```

---

### **React Context**
- **Küçük ve orta ölçekli projelerde** React'in yerleşik `State` ve `Context API` araçları yeterli olabilir.
- Ek kütüphaneler eklemek yerine React'in sunduğu bu araçlarla başlayabilir ve ihtiyacınıza göre kütüphaneler ekleyebilirsiniz.

---

### **Sonuç**
- **Küçük projeler** için Zustand veya React Context tercih edilebilir.
- **Orta ölçekli projeler** için Recoil veya Jotai idealdir.
- **Büyük ve karmaşık projelerde** Redux veya Rematch kullanılabilir.

Bu makaleden çıkarılacak sonuç, proje gereksinimlerinizi dikkatlice analiz ederek ihtiyaçlarınıza uygun bir kütüphane seçmeniz gerektiğidir.