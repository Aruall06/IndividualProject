$(function() {

    $registerform = $('#register-section')
    $loginform = $('#login-section')

    $loginform.hide();
    $registerform.hide();

    $('#login').click(function(e) {
    $loginform.show();
    $registerform.hide();
    });

    $('#register').click(function(e) {
      $loginform.hide();
      $registerform.show();
    });

    $('#login-button').click(function(e) {
    var username = $('#username').val();
    var password = $('#password').val();
    loginRequest(username, password);
  });


  $('#register-button').click(function(e) {
    var username = $('#registerusername').val();
    var password = $('#registerpassword').val();
    registerRequest(username, password);
  });

});

function registerRequest(username, password) {
  $.ajax({
    url: "http://localhost:3000/api/users",
    type: 'POST',
    dataType: 'json',
    data: {
      "username": username,
      "password": password
    },
    async: false,
    statusCode: {
      201: function(response) {
        $('#message').append('<p>You have successfully registered. Now you can login</p>');
      },
    }
  });
}

function loginRequest(username, password) {
  $.ajax({
    url: "http://localhost:3000/api/users/login",
    type: 'POST',
    dataType: 'json',
    data: {
      "username": username,
      "password": password
    },
    async: false,
    statusCode: {
      200: function(response) {
        localStorage.setItem('user', response.user);
        localStorage.setItem('username', response.username);

        $('#userMessage').append('<h1>Welcome, ' + localStorage.getItem('username') + '</h1>')
        console.log("logged in");
            window.location.href = '../pages/gallery.html';
      },
      400: function(response) {
        $('message').html("<p>A user does not exist with the given details</p>");
        $('#username').val("");
        $('#password').val("");
        console.log("doesnt work");
      }
    }
  });
}
