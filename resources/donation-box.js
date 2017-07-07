window.addEventListener("message", function(event) {
  if (event.origin != 'http://www.123contactform.com') {
    console.log('wrong domain:' + event.origin);
    return;
  }

  console.log( "received: " + event.data );
});
