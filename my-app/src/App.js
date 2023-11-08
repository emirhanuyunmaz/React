import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //Değişebilme ihtimali bulunan değerler için kullanılır.
  const [name,setName]=useState("")
  const [age,setAge]=useState(0)
  //Burada bir arr içerisine ekleme yapılacagı zaman yapılacak işlemler
  const [friends,setFriends]=useState(["Fatma"])
  //Bir object içersine ekleme veya çıkartma işlemi yapılacaksa
  //Değiştirme işleminde (...adress) eklemezsek eski değerleri muhafaza etmez
  const [adress,setAdress]=useState({title:"Kahramanmaraş",code:46000})

  return (
    <div className="App">
      <h1> İsim :{name}</h1>
      <h2>Yas:{age}</h2>
      <button  onClick={()=>{setAge(22)}}>Age</button>
      <button onClick={()=>{setName("Emirhan")}}>Name</button>
      <br/>
      <hr/>
      <br/>
      <div>
        {friends.map((friend,index)=>(
            <p key={index}>{friend}</p>
        ))}
      </div>
      <br/>
      <button onClick={()=>setFriends([...friends,"Ayşe"])}>add Friend</button>

          <br/>
          <hr/>
          <br/>
      <div>
        <p>{adress.title} {adress.code}</p>
        <button onClick={()=>setAdress({...adress,code:42000,title:"Konya"})}>New Adress</button>
      </div>


    </div>
  );
}

export default App;
