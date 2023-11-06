import axios from "axios";


async function getData(userID){
    const {data : users }=await axios(`https://jsonplaceholder.typicode.com/users/${userID}`)

    const {data : userPost}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
    
    console.log("USER:"+users)
    console.log("USER POST:",userPost)
    
}
getData(2)
//getData(1)
