(function (window){
  let speakWord = "Hello";
  let helloSpeaker = function speak (names){
    console.log(speakWord + ' ' + names);
  }
  window.helloSpeaker = helloSpeaker;
})(window);