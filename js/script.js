let userInputs = {};

let songDeparture = {
  songName: "Departure",
  songArtist: "MOL$, Yun Head",
  songLength: "2:09",
  songArt:
    "https://images.genius.com/8f9c67f4b811c7c1c7cf46f9e52ec0d3.1000x1000x1.png",
  songLink: "https://www.youtube.com/watch?v=LLuxpRT6G5o"
};

let songTellMe = {
  songName: "Tell Me",
  songArtist: "RAFA, lullaboy",
  songLength: "3:27",
  songArt:
    "https://i1.sndcdn.com/artworks-M6fqaOorgqByUn8Q-mM4ymg-t500x500.jpg",
  songLink: "https://www.youtube.com/watch?v=F_j7CdtAN00"
};

let songTheDay = {
  songName: "The Day",
  songArtist: "NateWantsToBattle",
  songLength: "3:56",
  songArt: "https://i.scdn.co/image/ab67616d0000b273e70890c397046a2ebac00203",
  songLink: "https://www.youtube.com/watch?v=78fFoIyYsIQ"
};

let songVORACITY = {
  songName: "VORACITY",
  songArtist: "MYTH & ROID",
  songLength: "3:51",
  songArt: "https://i.ytimg.com/vi/AYLm4HOJV-8/maxresdefault.jpg",
  songLink: "https://www.youtube.com/watch?v=uhlfcFzsLGU"
};

let totalsongs = [songVORACITY, songTheDay, songTellMe, songDeparture];

function displaySongInfo() {
  for (let song of totalsongs) {
    $(".songs").append("<p>" + song.songName + "</p>");
    $(".artists").append("<p>" + song.songArtist + "</p>");
    $(".lengths").append("<p>" + song.songLength + "</p>");
    $(".links").append("<p><a href='" + song.songLink + "'>Link</a></p>");
    $(".images").append("<p><img src='" + song.songArt + "'></p>");
  }
}

function emptySongInfo() {
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  userInputs.songName = $(".song").val();
  userInputs.songArtist = $(".artist").val();
  userInputs.songLength = $(".length").val();
  userInputs.songArt = $(".image").val();
  userInputs.songLink = $(".link").val();
  totalsongs.push(userInputs);
}

$("#add").click(function() {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();