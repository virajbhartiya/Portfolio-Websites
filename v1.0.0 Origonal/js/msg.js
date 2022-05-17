async function login() {
  "use strict";
  var name = document.getElementById("contactName").value;
  var email = document.getElementById("contactEmail").value;
  var msg = document.getElementById("contactMessage").value;
  var subject = document.getElementById("contactSubject").value;
  var sLoader = $('#submit-loader');
  let url = 'https://script.google.com/macros/s/AKfycbyYF3MWR9OjVKQVASeEE7skyyZgOz9ZqVZK0Yr48w/exec?email=' + email + '&msg=' + msg + '&name=' + name + '&subject=' + subject;

  try {
    sLoader.fadeIn(); 
    await fetch(url)
      .then(res => res.json())
      .then((_) => {
        sLoader.fadeOut(); 
      })
      .catch(_ => 	$('#message-warning').html("Something went wrong. Please try again."));
  } catch (e) {
    alert("Something went wrong !");
  }

}