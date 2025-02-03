# **useReducer Hook’u: Derinlemesine Açıklama ve Kullanımı**

## **1. useReducer Nedir?**
`useReducer`, **React'in bir hook'udur** ve bileşenler içinde bir "reducer" kullanarak **state yönetimini** sağlar. Özellikle, **karmaşık state değişikliklerini daha düzenli ve ölçeklenebilir bir şekilde yönetmek** için `useState`’e alternatif olarak kullanılır.

React’te bir bileşenin state'ini yönetmek için genellikle `useState` kullanılır. Ancak bir bileşenin **state değişiklikleri karmaşık hale geldikçe**, **birden fazla state değişkeni birbirine bağımlı hale geldikçe** veya **state değişikliklerini merkezi bir yerde toplamak gerektiğinde**, `useReducer` daha iyi bir çözüm sunar.

---

## **2. useReducer’ın Temel Kullanımı**
React bileşenlerinde state’i yönetmek için `useReducer` hook'unun nasıl kullanıldığına bakalım:

### **Temel Kullanım:**
```js
const [state, dispatch] = useReducer(reducer, initialArg, init?);
```

| **Parametre**      | **Açıklama** |
|--------------------|-------------|
| **state**         | Mevcut state değerini tutar. |
| **dispatch**      | State'i değiştirmek için kullanılır. `dispatch(action)` ile aksiyon gönderilir. |
| **reducer**       | State'in nasıl güncelleneceğini belirleyen saf (pure) fonksiyondur. |
| **initialArg**    | Başlangıçtaki state değeridir. |
| **init?** (opsiyonel) | Başlangıç state'ini hesaplayan bir fonksiyon verilebilir. |

---

### **3. useReducer Kullanımı Adım Adım**
1. **Reducer Fonksiyonunu Yaz**
   - `state` ve `action` alır.
   - Yeni `state` döndürür.

2. **useReducer'ı Bileşene Dahil Et**
   - `const [state, dispatch] = useReducer(reducer, initialState);` şeklinde çağrılır.

3. **dispatch ile Aksiyon Gönder**
   - `dispatch({ type: "increment" })` gibi aksiyonlar göndererek state'i değiştiririz.

---

## **4. Basit Örnek: Bir Sayaç (Counter)**
Aşağıdaki örnek, bir sayacın `useReducer` ile nasıl yönetilebileceğini gösterir.

```js
import { useReducer } from 'react';

// Reducer fonksiyonu
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Bilinmeyen aksiyon tipi!');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Sayac: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Artır</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Azalt</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Sıfırla</button>
    </div>
  );
}

export default Counter;
```

### **Nasıl Çalışıyor?**
- `counterReducer`, `action.type`'a göre **yeni state’i hesaplayan fonksiyon** olarak çalışır.
- **Başlangıç state** `{ count: 0 }` olarak tanımlandı.
- Kullanıcı butonlara bastığında `dispatch` çağrılır ve `state` güncellenir.

---

## **5. useReducer’ın Sağladığı Avantajlar**
### **useState ile Farkı**
| **Özellik**         | **useState** | **useReducer** |
|---------------------|-------------|---------------|
| Kullanım Kolaylığı  | Daha basit  | Daha yapılandırılmış |
| State Güncellenmesi | `setState` ile yapılır | `dispatch` fonksiyonu ile yapılır |
| Karmaşık State Yönetimi | Zor | Daha kolay |
| Aksiyon Yönetimi | Yok | `action` objesi ile yapılır |
| Performans | Küçük projeler için yeterli | Büyük projelerde daha optimize |

### **Ne Zaman useReducer Kullanılır?**
✅ **Birden fazla state değişkeni birbirine bağlı olduğunda.**  
✅ **State değişiklikleri karmaşık hale geldiğinde.**  
✅ **State güncellemelerinin belirli mantıklara bağlı olması gerektiğinde.**  
✅ **State değişikliklerini bileşenden ayrı bir yerde yönetmek gerektiğinde.**

---

## **6. useReducer ile Form Yönetimi**
Daha karmaşık bir örnek olarak bir formun yönetilmesine bakalım.

```js
import { useReducer } from 'react';

// Reducer fonksiyonu
function formReducer(state, action) {
  switch (action.type) {
    case 'changed_name':
      return { ...state, name: action.payload };
    case 'changed_age':
      return { ...state, age: action.payload };
    case 'reset':
      return { name: '', age: '' };
    default:
      throw new Error('Bilinmeyen aksiyon tipi!');
  }
}

const initialState = { name: '', age: '' };

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <div>
      <input
        value={state.name}
        onChange={(e) => dispatch({ type: 'changed_name', payload: e.target.value })}
        placeholder="Adınızı girin"
      />
      <input
        value={state.age}
        onChange={(e) => dispatch({ type: 'changed_age', payload: e.target.value })}
        placeholder="Yaşınızı girin"
      />
      <button onClick={() => dispatch({ type: 'reset' })}>Sıfırla</button>
      <p>Ad: {state.name}, Yaş: {state.age}</p>
    </div>
  );
}

export default Form;
```

### **Nasıl Çalışıyor?**
- Kullanıcı input’a yazdıkça `dispatch({ type: 'changed_name', payload: e.target.value })` ile yeni state hesaplanıyor.
- **State değişimleri merkezi bir yerde kontrol ediliyor** (`formReducer`).
- `reset` aksiyonu çağrıldığında, state **başlangıç değerine** sıfırlanıyor.

---

## **7. useReducer Kullanırken Yapılan Hatalar ve Çözümleri**
### **1. State Doğrudan Değiştirilmeli mi?**
❌ **Yanlış Kullanım (State’i doğrudan değiştirmek hatalıdır!)**
```js
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      state.count += 1;  // ❌ Hata: State doğrudan değiştirildi.
      return state;
    default:
      return state;
  }
}
```
✅ **Doğru Kullanım**
```js
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };  // ✅ Yeni bir state nesnesi döndürülüyor.
    default:
      return state;
  }
}
```

### **2. useReducer’ın İçinde dispatch Çağırmak**
❌ **Yanlış Kullanım**
```js
function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  dispatch({ type: 'increment' });  // ❌ Sonsuz döngüye girer!
  return <div>{state.count}</div>;
}
```
✅ **Doğru Kullanım (dispatch buton içinde çağrılmalı!)**
```js
<button onClick={() => dispatch({ type: 'increment' })}>Artır</button>
```

---

## **Sonuç ve Özet**
- `useReducer`, **karmaşık state yönetimi** gereken bileşenlerde `useState`'e göre **daha avantajlıdır**.
- **Tüm state güncellemeleri tek bir yerde (reducer fonksiyonunda) yönetilir**.
- **Performans açısından daha optimize bir yapı sunar** ve gereksiz render’ları engeller.

Eğer daha fazla detay veya ileri düzey konular görmek istersen, haber ver! 🚀