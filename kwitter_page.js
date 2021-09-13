var firebaseConfig = {
    apiKey: "AIzaSyCHmEnuAbaGmv_Z42jH9BkG5L4JucwpKa4",
    authDomain: "lets-chat-web-app-f8d98.firebaseapp.com",
    projectId: "lets-chat-web-app-f8d98",
    storageBucket: "lets-chat-web-app-f8d98.appspot.com",
    messagingSenderId: "305048089604",
    appId: "1:305048089604:web:c5ff83e57b9d2d81663151",
    measurementId: "G-DB7BP75S11"
  };
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").ariaValueMax;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}