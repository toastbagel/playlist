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
//totalsongs.push("userInputs"); // let's comment this out for now! we'll need to use .push soon! but not now :)

//let songList = ["Depature", "Tell Me", "The Day", "Classic Man"];
//let songAuthors = [
//"MOL$, Yun Head",
//"RAFA, lullaboy",
//"NateWantsToBattle",
//"Jidenna, Roman GianArthur"
//];
//let songLength = ["2:09", "3:27", "1:35", "3:46"];
//let songImages = [
//"https://images.genius.com/8f9c67f4b811c7c1c7cf46f9e52ec0d3.1000x1000x1.png",
//"https://i1.sndcdn.com/artworks-M6fqaOorgqByUn8Q-mM4ymg-t500x500.jpg",
//"https://i.scdn.co/image/ab67616d0000b273e70890c397046a2ebac00203",
//"https://upload.wikimedia.org/wikipedia/en/d/d5/Classic_Man_Art.jpg"
//];
//let songLinks = [
//"https://www.youtube.com/watch?v=LLuxpRT6G5o",
//"https://www.youtube.com/watch?v=F_j7CdtAN00",
//"https://www.youtube.com/watch?v=p4H5ul0cW2s",
//"https://www.youtube.com/watch?v=R9SZI4zdW-o"
//];

function displaySongInfo() {
  // ok cool! so the goal of this function is to display all of the songs in our app!
  // in other words, we want to display all of the data that we've stored in our "totalsongs" array
  // first! let's make sure that our totalsongs contains each of the song objects that we've created! (instead of the song name strings)

  //do you mean the function name like in line 35?
  // yeah, we're going to change the elements in our totalsongs array variable (our array can contain variables!)
  //oh actually you're close! you've got the right names, but you've put them in as strings! what's the small change on line 35
  //to make them variable names instead?
  // periods? instead of quotes? -> nope! but close! we just need to remove the quotes.
  // removing the quotes tells our program to that these aren't strings! they're the names of variables - ok nice!

  // second! we want to be able to display the info "for" each of the song objects in our array. what's a code thing
  // we learned that allows us to step through arrays one element at a time? (hint in quotes in the question)
  // for loop? -yep! lets write one out!
  // i need to find the format, hold on
  for (let song of totalsongs) {
    // now we're going to define some code that we want to run "for" each of our individual songname objects!
    // lets just start with displaying a song's name! how might we do that?
    //would this be the .push()? - .push will help us add new things to our array! so not yet, we just want to show what already is in our array
    // rephrased, let's "".append" some object data to the html element with the class "song". maybe we can start by appending the entire "song" variable to see what happens?
    $(".songs").append("<p>" + song.songName + "</p>");
    $(".artists").append("<p>" + song.songArtist + "</p>");
    $(".lengths").append("<p>" + song.songLength + "</p>");
    $(".links").append("<a href='" + song.songLink + "'>Link</a>");
        $(".images").append("<img src='" + song.songArt + "'>");

    
    
    
  // NICE!! what happens with this code?
    // well i have the live example but it doesn't show anything. looking! 
    
    // aha! let's append to the ".songs" (plural) element. I think you commented this out in the html so we'll have to comment it back in
    // I can't find where I commented out .songs oh! in the HTML, line 30
    // ok nice! are you seeing the weird thing that gets output?
    //yes. -> sweeet. checking for understanding! why do you see it 4 times? -> we have 4 values(?) in the array -> yep! exactly
    // so now that we know our loop is working and that we're doing this append 1 per thing in our array, 
    // how can we modify line 80 so that we're only appending the song name of each of our objects? -> songName -> yep! make that change! -> inside of the parenthesis or the outside? -> try both! see what happens
    // oh one more hint! remember that songName is an object property of your song variables! how do you get a property off an object?
    // YESSSSS! now what's happening? -> now it shows the name of the songs nice!
    // so now, go ahead and in the other HTML divs next to the ".songs" div, show other pieces of song info! should be similar to line 80
    // does all of this make sense so far? -> i think so ok cool! I'll stick around in here for ~5 more minutes, but see if you can append
    // songArtist data too! (to a different div) nice!
    // try adding the rest too
    
    // re: ".push" think about how this might be useful when adding more songs to the array! when do you want to add more songs?
    // everything looks good here! good luck! ->
    
    //where would i append to because its not going to just be one part of all elements?
    // lets just start with ".song"! but you're right, we're going to have to add a few more appends in a sec
    // just starting with a more simple version of what we want to end up with!
  }
}

//nice! on the left hand side (of ___), we're going to tell the code what we're looping over! which variable are we trying to loop over?
// nice! on the right hand side (let ____ ), we're just going to declare a variable! lets give it a name that represents 1 element in our totalsongs array
// cool! don't forget the {} for our loop. sweet! now lets add code inside of our loop

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

//function addSongInfo() {
//let newSong = $(".song").val();
//songList.push(newSong);
//$(".song").val("");

// let newImage = $(".image").val();
//songImages.push(newImage);
//$(".image").val("");

// let newLength = $(".length").val();
//songLength.push(newLength);
//$(".length").val("");

//  let newLink = $(".link").val();
// songLinks.push(newLink);
// $(".link").val("");

// let newAuthor = $(".artist").val();
// songAuthors.push(newAuthor);
// $(".artist").val("");
//}

$("#add").click(function() {
  emptySongInfo();
  //  addSongInfo();
  //  displaySongInfo();
  let userInputs = {};
  userInputs.songName = $(".song").val();
  userInputs.songArtist = $(".artist").val();
  userInputs.songLength = $(".length").val();
  userInputs.songArt = $(".image").val();
  userInputs.songLink = $(".link").val();
});

displaySongInfo();
