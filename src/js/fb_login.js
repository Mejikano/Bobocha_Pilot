  window.fbAsyncInit = function() {
    FB.init({
      appId      : '689321112121618',
      cookie     : true,
      xfbml      : true,
      version    : 'Beta'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
  console.log("login script");
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    //console.log("hello world");
    //console.log(response.status);
    //console.log(response);
  });

  
}