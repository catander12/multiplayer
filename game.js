
  var config = {
    apiKey: "AIzaSyCvfgfHxzKpJzhHdoZ8b71tINStuxr9dlI",
    authDomain: "myrockpaper.firebaseapp.com",
    databaseURL: "https://myrockpaper.firebaseio.com",
    projectId: "myrockpaper",
    storageBucket: "",
    messagingSenderId: "808722094804"
  };
  firebase.initializeApp(config);

var db = firebase.database();

var username = prompt("Please enter a username.","Ugly");


$('#chat_input').keypress(function(event){


	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){

		var text = $("#chat_input").val();
		$("#chat_input").val("");
		db.ref().push({
			user: username,
			message: text
		});
		console.log("enter pressed"); 
	};

});

firebase.database().ref().on("child_added", function(childSnapshot) {
	var chat = childSnapshot.val();

	var message = chat.user + ": " + chat.message;

	var box = $("<div class='message'>");
	box.append(message);
	$("#chat").append(box);


	});