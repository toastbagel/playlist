let songList = ["Depature", "Tell Me", "The Day", "Classic Man"];
let songAuthors = [
  "MOL$, Yun Head",
  "RAFA, lullaboy",
  "NateWantsToBattle",
  "Jidenna, Roman GianArthur"
];
let songLength = ["2:09", "3:27", "1:35", "3:46"];
let songImages = [
  "https://images.genius.com/8f9c67f4b811c7c1c7cf46f9e52ec0d3.1000x1000x1.png",
  "https://i1.sndcdn.com/artworks-M6fqaOorgqByUn8Q-mM4ymg-t500x500.jpg",
  "https://i.scdn.co/image/ab67616d0000b273e70890c397046a2ebac00203",
  "https://upload.wikimedia.org/wikipedia/en/d/d5/Classic_Man_Art.jpg"
];
let songLinks = [
  "https://www.youtube.com/watch?v=LLuxpRT6G5o",
  "https://www.youtube.com/watch?v=F_j7CdtAN00",
  "https://www.youtube.com/watch?v=p4H5ul0cW2s",
  "https://www.youtube.com/watch?v=R9SZI4zdW-o"
];

function displaySongInfo() {
  let counter = 0;
  for (let songnames of songList) {
    $(".container").append(
      "<div>   <span class='column images'><img src='" +
        songImages[counter] +
        "' ></span>" +
        "   <span class='column songs'>" +
        songnames +
        "</span>" +
        "  <span class='column artists'>" +
        songAuthors[counter] +
        "</span>" +
        "   <span class='column lengths'>" +
        songLength[counter] +
        "</span>" +
        "    <span class='column links'><a href='" +
        songLinks[counter] +
        "'>Link</a>" +
        "</span></div>"
    );
    counter++;
  }
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  let newSong = $(".song").val();
  songList.push(newSong);
  $(".song").val("");
  
  let newImage = $(".image").val();
  songImages.push(newImage);
  $(".image").val("");
  
   let newLength = $(".length").val();
  songLength.push(newLength);
  $(".length").val("");
  
   let newLink = $(".link").val();
  songLinks.push(newLink);
  $(".link").val("");
  
  let newAuthor = $(".artist").val();
  songAuthors.push(newAuthor);
  $(".artist").val("");
}

$("#add").click(function() {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
