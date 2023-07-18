
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyCEe1KYMHmjKmMBCGlaBsWMmNG1bi_5mUQ",
  authDomain: "li-fashion-e5db1.firebaseapp.com",
  projectId: "li-fashion-e5db1",
  storageBucket: "li-fashion-e5db1.appspot.com",
  messagingSenderId: "821847268184",
  appId: "1:821847268184:web:63ee0329742adef84aa32d",
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const  emailR  = document.getElementById('email');
const  passwordR  = document.getElementById('password');
const  userName  = document.getElementById('username');
const  btnCreateUser  = document.querySelector('#btnCreateUser');




async function getUsers(database) {
 const userCollection = await collection(database, 'users');
 const result = await getDocs(userCollection);
 const userList = result.docs.map(doc => doc.data());
 return userList;
}

try {
   getUsers(db).then(response => console.log(response)); 
} catch(err) {
 console.log(err);
}

 //create new user

  async function createNewUser(database, userDB) {
  const newUser = await addDoc(collection(database, 'users'), userDB);
  return newUser;
}


btnCreateUser.addEventListener('click', (event) => {
  event.preventDefault(); 
  try {
    const userObject = {
      email: emailR.value,
      password: passwordR.value,
      userName: userName.value,
      
    }
    createNewUser(db, userObject).then(response => console.log(response.id));
  } catch (error) {
    console.error(error);
  }
}); 


