import './App.css';
import Hello from "./Comp/comp_1"
import Users from './Comp/users';

const name="Emir"
const isLogin=false
const list=[
{
  id : 0,
  name :"Fatma" 
}
,
{
  id : 1,
  name :"Ayşe" 
}
,
{
  id : 2,
  name :"Ali" 
}
]


function App() {
  return (
    <div>
       <Hello/>
       {/* <h1>{name}</h1> */}{/*Bir değişlendeki değerler için kullanılan yapı*/}
      {/*<h3>{!isLogin && name}</h3>{/*if / else kullanımı */}
      <h1>
      {isLogin ? `Giriş yaptınzı : ${name} ` : "Giriş Yapamadınız"}
      </h1>

      <Users name="Emirhan" age={22} surname="Uyunmaz" liste={list} />



    </div>
  );
}

export default App;
