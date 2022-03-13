(function (window){
  let speakWord = "Good Bye";
  let byeSpeaker = function speak (names){
    console.log(speakWord + ' ' + names);
  }
  window.byeSpeaker = byeSpeaker;
})(window);