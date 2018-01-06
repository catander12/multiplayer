
  var config = {
    apiKey: "AIzaSyCvfgfHxzKpJzhHdoZ8b71tINStuxr9dlI",
    authDomain: "myrockpaper.firebaseapp.com",
    databaseURL: "https://myrockpaper.firebaseio.com",
    projectId: "myrockpaper",
    storageBucket: "",
    messagingSenderId: "808722094804"
  };
  firebase.initializeApp(config);
var username = "Guest";
var db = firebase.database();

login();
function login(){
		username = prompt("Please enter a username.","Guest");
		var test = db.ref("Players").child(username);
		console.log(test);
		if(test != undefined){
			console.log("hooray");
			
		}
	}

$('#chat_input').keypress(function(event){


	var keycode = (event.keyCode ? event.keyCode : event.which);

	if(keycode == '13'){

		var text = $("#chat_input").val();
		$("#chat_input").val("");
		db.ref("Chat").push({
			user: username,
			message: text
		});
		console.log("enter pressed"); 
	};

});

firebase.database().ref("Chat").on("child_added", function(childSnapshot) {
	var chat = childSnapshot.val();
	var message = chat.user + ": " + chat.message;

	var box = $("<div class='message'>");
	box.append(message);
	$("#chat").append(box);


	});