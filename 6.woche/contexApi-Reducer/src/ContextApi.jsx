// import { createContext } from "react"; // createContext reactin sagladigi bir fonksiyondur. Bu fonksiyon ile bir context olusturulur.

// 1.Adim: createContext() fonksiyonu ile bir context olusturulur.
// iki önemli özelliği vardır: Provider ve Consumer.
// Provider: Contexti kullanılabilir hale getiren componenttir. veriyi saglayan componenttir.
// Consumer: Contexti kullanan componenttir. veriyi kullanan componenttir. Tüketicidir.

// export const OfferContext= createContext();  // bununla global veri alani olusturulur

// Neden Context API kullanılır?
// Context API, React uygulamalarında verileri paylaşmak için kullanılır.
//Global state yönetimi için kullanılır. (Thema, kullanici oturumlari vs.)
// Props drilling sorununu çözmek için kullanılır. (Bir componentten başka bir componente props geçirme sorununu çözmek için kullanılır.)
// Prpps Drilling: Bir componentten başka bir componentine props geçirme işlemidir. Bu işlemde componentler arasında bir hiyerarşi oluşur. Bu hiyerarşi derinleştikçe props geçirme işlemi zorlaşır. Context API bu sorunu çözmek için kullanılır.
// Props Drillingden kurtulmak icin asagidaki yöntemler kullanilir:
// Context API
// Redux
// Mobx
// Recoil
// Zustand

// Reducer Nedir?
// Reducer, bir fonksiyondur. Bu fonksiyon, bir önceki state ve action alır ve yeni bir state döndürür.
// Reducer bir state yönetim teknigidir. "Bir aksiyon oldugunda statei degistirme" islemidir.
// Reducer, bir state yönetim tekniğidir. State yönetimi için kullanılır.
// Reducer, bir fonksiyondur. Bu fonksiyon, bir önceki state ve action alır ve yeni bir state döndürür.
// Reactte useReducer hooku ile kullanılır.

// Reducer Kullanımı
// 1. Adım: Reducer fonksiyonu oluşturulur.
// 2. Adım: useReducer hooku ile state ve dispatch fonksiyonu oluşturulur.
// 3. Adım: State ve dispatch fonksiyonu component içinde kullanılır.

// 1. Adım: Reducer fonksiyonu oluşturulur.
// Reducer fonksiyonu, bir önceki state ve action alır ve yeni bir state döndürür.

// (state, action) => yeniState  seklinde bir fonksiyon olusturulur.

// Bir aksiyon iki parcadan olusur: type ve payload.
// type: Aksiyonun türüdür. Yapilacak islemi tanimalar. örnegin ekleme islemi. ADD_OFFER, DELETE_OFFER, UPDATE_OFFER gibi.
// payload: Aksiyonun değeridir. islemle ilgili veriyi tutar. örnegin eklemek istedigin teklif.

// örnek bir aksiyon:
/*
{ type: "ADD_OFFER", payload: { id: 1, name: "Yeni Teklif" } }
{ type: "DELETE_OFFER", payload: { id: 1 } }
{ type: "UPDATE_OFFER", payload: { id: 1, name: "Güncel Teklif" } }
{ type: "GET_OFFER", payload: { id: 1 } }
{ type: "GET_ALL_OFFER", payload: { } }
*/
// Kodun isleyisi:
/*
case "ADD_OFFER":
return [...state, action.payload];

* Mevcut state arrayinin kopyasini alir ve action.payload ile gelen veriyi ekler.
state : [{id:1, name:"Teklif1"}, {id:2, name:"Teklif2"}]   suanki tekliflerin listesi. 
action.payload: {id:3, name:"Teklif3"}  eklemek istedigimiz teklif.
return [...state, action.payload];  sonuc: [{id:1, name:"Teklif1"}, {id:2, name:"Teklif2"}, {id:3, name:"Teklif3"}]  yeni tekliflerin listesi.

case "UPDATE_PROFILE":
  return { ...state, name: action.payload.name };

* Mevcut state objesinin kopyasini alir ve action.payload ile gelen veriyi ekler.
state : {id:1, name:"Teklif1"}   suanki teklif.
action.payload: {id:1, name:"Teklif2"}  guncellemek istedigimiz teklif.
return { ...state, name: action.payload.name };  sonuc: {id:1, name:"Teklif2"}  yeni teklif.

case "ADD_OFFER_TO_TOP":
  return [action.payload, ...state];

* Mevcut state arrayinin kopyasini alir ve action.payload ile gelen veriyi ekler.


case "ADD_OFFER_BY_CATEGORY":
  return {
    ...state,
    [action.payload.category]: [
      ...(state[action.payload.category] || []),
      action.payload.offer
    ]
  };

* Mevcut state objesinin kopyasini alir ve action.payload ile gelen veriyi ekler.
state : {id:1, name:"Teklif1"}   suanki teklif.
action.payload: {category:"category1", offer:{id:1, name:"Teklif1"}}  eklemek istedigimiz teklif.
return {
    ...state,
    [action.payload.category]: [
      ...(state[action.payload.category] || []),
      action.payload.offer
    ]
    };  sonuc: {category1:[{id:1, name:"Teklif1"}]}  yeni tekliflerin listesi.



case "UPDATE_OFFER":
return state.map((offer) => offer.id === action.payload.id ? action.payload : offer);

* Mevcut state arrayini map fonksiyonu ile döner. Eger mevcut teklifin idsi action.payload ile gelen idye esitse, action.payload ile gelen veriyi ekler. Degilse mevcut teklifi geri döner.

case "DELETE_OFFER":
  return state.filter((offer) => offer.id !== action.payload);

* Mevcut state arrayini filter fonksiyonu ile döner. Eger mevcut teklifin idsi action.payload ile gelen idye esit degilse, mevcut teklifi geri döner. Eger esitse mevcut teklifi filtreler.

case "CHANGE_STATUS":
  return state.map((offer) =>
    offer.id === action.payload.id
      ? { ...offer, status: action.payload.status }
      : offer
  );

  * Mevcut state arrayini map fonksiyonu ile döner. Eger mevcut teklifin idsi action.payload ile gelen idye esitse, mevcut teklifin statusunu action.payload ile gelen status ile degistirir. Degilse mevcut teklifi geri döner.
*/

/*

Dizi ile Reducer Kullanımı
const initialState = [
  { id: 1, name: "Teklif1" },
  { id: 2, name: "Teklif2" }
];

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_OFFER":
        return [...state, action.payload];
        case "DELETE_OFFER":
        return state.filter((offer) => offer.id !== action.payload);
        default:
        return state;
    }
    }

const [offers, dispatch] = useReducer(reducer, initialState);

Objeler ile Reducer Kullanımı
const initialState = { id: 1, name: "Teklif1" };

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_OFFER":
        return { ...state, name: action.payload.name };
        default:
        return state;
    }
    }
    
    const [offer, dispatch] = useReducer(reducer, initialState);

Örnek1 Dizi ile Reducer Kullanımı:



const offers = [{ id: 1, name: "Teklif A" }];
const action = { type: "ADD_OFFER", payload: { id: 2, name: "Teklif B" } };

const newState = [...offers, action.payload];
console.log(newState);
Sonuç: [{ id: 1, name: "Teklif A" }, { id: 2, name: "Teklif B" }]


Örnek2 Objeler ile Reducer Kullanımı:

const profile = { name: "Ahmet", age: 30 };
const action = { type: "UPDATE_PROFILE", payload: { name: "Mehmet" } };

const newState = { ...profile, name: action.payload.name };
console.log(newState);
// Sonuç: { name: "Mehmet", age: 30 }






*/

import { useReducer, useState } from "react";

// Initial State
const initialState = [
  { id: 1, name: "Orhan", email: "orhan@example.com" },
  { id: 2, name: "Ahmet", email: "ahmet@example.com" },
  { id: 3, name: "Mehmet", email: "mehmet@example.com" }
];

// Reducer Function
const userReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return state.map((user) =>
        user.id === action.payload.id
          ? { ...user, name: action.payload.name }
          : user
      );
    default:
      return state;
  }
};

export default function BeispielReducer() {
  const [users, dispatch] = useReducer(userReducer, initialState);


  const [editingUser, setEditingUser] = useState(null);
  const [newName, setNewName] = useState("");

  const handleEdit = (user) => {
    setEditingUser(user);
    setNewName(user.name);
  };

  const handleUpdate = () => {
    dispatch({
      type: "UPDATE_NAME",
      payload: { id: editingUser.id, name: newName }
    });
    setEditingUser(null);
    setNewName("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Kullanıcı Listesi</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            style={{ cursor: "pointer", marginBottom: "10px" }}
            onClick={() => handleEdit(user)}
          >
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      {editingUser && (
        <div style={{ marginTop: "20px" }}>
          <h3>{editingUser.name} için Güncelleme</h3>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleUpdate} style={{ marginLeft: "10px" }}>
            Güncelle
          </button>
        </div>
      )}
    </div>
  );
}
