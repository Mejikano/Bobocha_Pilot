//function checkLoginState() {
  console.log("login script");
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    //console.log("hello world");
    //console.log(response.status);
    //console.log(response);
  });

  
//}