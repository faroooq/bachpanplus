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
  
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    if (name.trim() === '' || email.trim() === '' 
    || subject.trim() === '' || message.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }
  
    try {
      await db.collection('contact').add({
        name: name,
        email: email,
        subject: subject,
        message: message,
      });
      form.reset();
      alert('Thank you for contacting us. We will get back to you soon. :)');
      window.location.replace('index.html');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('An error occurred.');
    }
  });
  