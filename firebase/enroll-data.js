// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDha9Duz6_rORnZ8llDybmE7qEErd9O7rk",
    authDomain: "bachpanplus-12784.firebaseapp.com",
    projectId: "bachpanplus-12784",
    storageBucket: "bachpanplus-12784.appspot.com",
    messagingSenderId: "482786725183",
    appId: "1:482786725183:web:2dadbc0b9c5225c11d178a"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  const form = document.getElementById('enroll-form');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = form.gname.value;
    const email = form.gmail.value;
    const child_name = form.cname.value;
    const child_age = form.cage.value;
    const child_msg = form.message.value;

    if (name.trim() === '' || email.trim() === '' 
    || child_name.trim() === '' || child_age.trim() === '' || child_msg.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }
  
    try {
      await db.collection('enroll').add({
        name: name,
        email: email,
        child_name: child_name,
        child_age: child_age,
        child_msg: child_msg
      });
      form.reset();
      alert('Thank you for interest. We will contact you shortly. :)');
      window.location.replace('index.html');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('An error occurred.');
    }
  });
  