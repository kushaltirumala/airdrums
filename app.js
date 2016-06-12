const increment = 100;


var audioType = '.mp3'


songs = ['clave', 'hihat', 'kick', 'rim', 'snare'];

function playAudio(drumNumber){
  var audioPlayer = document.getElementById('audio');
    audioPlayer.setAttribute('src', 'music/' + songs[drumNumber] + audioType);
    audioPlayer.setAttribute('controls', 'controls');
    audioPlayer.load();
    audioPlayer.play();
}

function getTrackNumber(pos) {
  if(pos != null) {
    var x = pos[0];
    var number = Math.floor((x+300)/100);
    return number;
  }
}

Leap.loop(function (frame) {
	if(frame.valid) {
	if(frame.gestures.length > 0){
    frame.gestures.forEach(function(gesture){
        switch (gesture.type){
          case "keyTap":
            var track = getTrackNumber(frame.gestures[0].position);
            console.log('playing track number' + track);
            playAudio(track);
        }
    });
  } 
}

});