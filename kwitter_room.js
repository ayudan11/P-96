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
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("RoomName- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;     
      //End code 
      });});}
getData();

    function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
    }

    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
    