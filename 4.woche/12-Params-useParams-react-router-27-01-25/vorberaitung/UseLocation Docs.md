### React Router'da `useLocation` Hook'u

#### Giriş
Tek Sayfa Uygulamaları (Single Page Applications - SPA), sayfalar arası geçişlerde farklı bir yaklaşım benimser. Geleneksel Çoklu Sayfa Uygulamalarında (Multi-Page Applications - MPA), her sayfa için ayrı bir HTML dosyası sunucuya yüklenir ve istemciden gelen her yeni istekle bu dosyalar sunucudan alınır. Buna karşılık, SPA'larda tek bir HTML dosyası sunucuya yüklenir ve istemci bir istek yaptığında, tüm uygulama (HTML dosyası) istemciye gönderilir. Bu yaklaşım, kullanıcıların istemci tarafında (client-side routing) yeni bir istek göndermeden doğrudan gezinmelerine olanak tanır.

React Router'ın sağladığı `useLocation` hook'u, belirli bir bileşene ilişkin `pathname`, `hash`, `state`, `key` veya `search` gibi bilgilere erişmemizi sağlar. Bu bilgiler, web uygulamalarında yan etkiler (side effects) oluşturmak için kullanılabilir.

Bu yazıda, `useLocation` hook'unun React Router'da nasıl uygulanacağını ve bileşenlere ilişkin konum nesnesinin (location object) nasıl döndürüleceğini ve bu nesnenin özelliklerine nasıl erişileceğini açıklayacağız.

#### Ön Koşullar
Bu makaleyi takip edebilmek için aşağıdaki konularda temel bilgiye sahip olmalısınız:
- React projesi nasıl kurulur
- React Router nasıl yüklenir

#### `useLocation` Hook'u Nedir?
`useLocation` hook'u, React Router'da bir bileşenin mevcut konumunu döndürmek için kullanılır. Bu hook, bir nesne döner ve bu nesne aşağıdaki özellikleri içerir:
- `pathname`: Geçerli yolun adını döner.
- `state`: Bir bileşenden diğerine aktarılabilen durumu içerir.
- `search`: URL'deki sorgu parametrelerini içerir.
- `key`: Geçerli URL'nin benzersiz tanımlayıcısını içerir.
- `hash`: URL'deki hash segmentini içerir.

Bu özellikler, `useEffect` hook'u ile birlikte kullanılarak tıklamalar, kaydırma olayları gibi yan etkiler oluşturmak veya bir `Link` bileşenine aktarılan durumu geri döndürmek için kullanılabilir.

#### `useLocation` Hook'unun Kullanımı
`useLocation` hook'unu kullanmak için, öncelikle `react-router-dom` paketinden içe aktarmamız gerekir:

```javascript
import { useLocation } from 'react-router-dom';
```

Ardından, `useLocation` hook'unu bir değişkene atayarak kullanabiliriz:

```javascript
export default function App() {
  const location = useLocation();

  return (
    <>
      <p>Merhaba, useLocation</p>
    </>
  );
}
```

`location` değişkeni aracılığıyla, `useLocation` hook'unun döndürdüğü nesnenin özelliklerine erişebiliriz. Örneğin:

```javascript
export default function App() {
  const location = useLocation();

  console.log(location);

  return (
    <>
      <p>Merhaba, useLocation</p>
    </>
  );
}
```

Bu kod, `location` nesnesini bir nesne olarak döndürecektir.

#### `useLocation` Hook'u ile Elde Edilen Özellikler

**1. `pathname`**
`location` nesnesinin `pathname` özelliği, belirli bir bileşenin yol adını döner. Yol adı, port numarasından sonra gelen kısımdır.

Örnek URL:
```
http://localhost:5173/urunler
```
Bu URL'de:
- Port numarası: `5173`
- Pathname: `/urunler`

`pathname`'e erişmek için:

```javascript
export default function App() {
  const location = useLocation();
  console.log(location.pathname);

  // veya

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <p>Merhaba, useLocation</p>
    </>
  );
}
```

**2. `state`**
`location` nesnesinin `state` özelliği, bir bileşenden diğerine aktarılabilen verileri içerir. `state`'i ayarlamak için, bir `Link` veya `NavLink` bileşenine `state` özelliği eklenir:

```javascript
<li>
  <NavLink
    to="/"
    state={`Hoş geldiniz ${
      pathname.substring(1) !== "" ? "ana" : ""
    } sayfasına`}
  >
    Ana Sayfa
  </NavLink>
</li>
<li>
  <NavLink
    to="urunler"
    state={`Hoş geldiniz ${pathname.substring(1)} sayfasına`}
  >
    Ürünler
  </NavLink>
</li>
```

Bu örnekte, kullanıcının tıkladığı belirli bağlantının `pathname` değeri bir string olarak döndürülür ve `state` özelliğine atanır. `substring(1)` metodu, `pathname`'den ilk karakter olan `/` işaretini kaldırır. Ternary operatörü ise, yolun boş bir string içerip içermediğini kontrol eder ve buna göre "ana" ifadesini ekler.

**3. `search`**
`location` nesnesinin `search` özelliği, URL'deki sorgu stringini döner. Örneğin, aşağıdaki URL'de:

```
http://example.com/arama?yas=20&isim=alex
```

Sorgu stringi, `?` karakterinden sonra başlayan ve `&` ile ayrılan anahtar-değer çiftlerinden oluşur. Bu anahtar-değer çiftlerine parametreler denir.

`search` özelliğine erişmek için:

```javascript
export default function App() {
  const location = useLocation();
  console.log(location.search);

  // veya

  const { search } = useLocation();
  console.log(search);

  return (
    <>
      <p>Merhaba, useLocation</p>
    </>
  );
}
```

**4. `key`**
`location` nesnesinin `key` özelliği, geçerli URL'nin benzersiz bir tanımlayıcısını içerir.

`key` özelliğine erişmek için:

```javascript
export default function App() {
  const location = useLocation();
  console.log(location.key);

  // veya

  const { key } = useLocation();
  console.log(key);

  return (
    <>
      <p>Merhaba, useLocation</p>
    </>
  );
}
```

**5. `hash`**
`location` nesnesinin `hash` özelliği, geçerli URL'nin `#` işaretinden sonraki kısmını döner. Bu, aynı sayfa içindeki farklı bölümler arasında veya başka bir sayfadaki belirli bir bölü 