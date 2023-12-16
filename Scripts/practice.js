console.log("practice")

// student's info
let studentname="David"
let mygrade=4.5;
let isStudent= true;
const URL="Https://sdgku.edu"

//dispaly values
console.log(" my name is " + studentname);
console.log("102 grade: " + mygrade);
console.log(" Active: " +isStudent);

let num1=10;
let num2=5;

console.log("multiplication: " + num1*num2);
console.log("Addition: " +(num1+num2));
console.log("Subtraction: "+ (num1-num2));
console.log("Div: "+ (num1/num2));

let assignmentName = "Class 1 - Assingment 1";
let description= "Assignments are due the day Session 3 is held by 11:59 p.m. (in the time zone in which each student resides). Assignments represent 20% of the overall course grade.";
let pointsAs1 = 6.66;
let pointsAs2 = 6.66;
let pointsAs3 = 6.66;

let total = pointsAs1 + pointsAs2 + pointsAs3;
let fileUploads= true;
let studentAnnotation = false;

let dueDate="12/20/2023";

document.write(`<h1> ${assignmentName} </h1>`);
document.write(`<p> ${description} </p>`);

 // My NETFLIX HOME PAGE
 let userProfileName = "David";
 let recommendedForYou = ["HEADLINERS ONLY"];
 let continueWatching = ["Family Business", "LEO"];
 let trendingNow = ["SQUID GAME", "College Hill"];
 let newReleases = ["Love and Monsters", "1670"];

 // Display genres
 let genres = {
   action: ["Colombiana"],
   comedy: ["Identity Thief"],
   drama: ["Lost Girls"]
 };
  let realStories = ["Collin in Black and white", "Queen Cleopatra"];
 let bingeWorthyTvShows = ["The Surrogacy", "Top Boy"];
 let raunchyComedyMovies = ["Sextuplets", "Sausage Party"];
 let ChrismasMovies=["Jingle Jangle", "Just Another Christmas"];
 let originals = ["Family Switch", "BEEF"];
 let upcomingReleases = ["Rebel Moon"];
 let languagePreferences = ["English"];
 let videoQualitySettings = ["HD", "4K", "Standard"];
 let playbackControls = ["Play", "Pause", "Volume"];

 //Display account settings
 let accountSettings = {
   name: "David smith",
   email: "Topgun8727@gmail.com",
   plan: "Premium"
 };
 let notificationCenter = ["New episodes available", "Recommended for you"];

 //Display footer links
 const footerLinks = ["Help", "Terms of Service", "Privacy Policy"];

  // Display variables on the HTML page
  document.write("<h1>Welcome to My Netflix Home Page</h1>");

  document.write(`<p>User Profile Name: ${userProfileName}</p>`);
  document.write(`<p>Recommended For You: ${recommendedForYou.join(', ')}</p>`);
  document.write(`<p>Continue Watching: ${continueWatching.join(', ')}</p>`);
  document.write(`<p>Trending Now: ${trendingNow.join(', ')}</p>`);
  document.write(`<p>New Releases: ${newReleases.join(', ')}</p>`);

  // Display genres
  document.write("<h2>Genres</h2>");
  document.write("<ul>");
  for (const genre in genres) {
    document.write(`<li>${genre}: ${genres[genre].join(', ')}</li>`);
  }
  document.write("</ul>");

  document.write(`<p>Real Stories: ${realStories.join(', ')}</p>`);
  document.write(`<p>Binge-Worthy TV Shows: ${bingeWorthyTvShows.join(', ')}</p>`);
  document.write(`<p>Raunchy Comedy Movies: ${raunchyComedyMovies.join(', ')}</p>`);
  document.write(`<p>Christmas Movies: ${ChrismasMovies.join(', ')}</p>`);
  document.write(`<p>Originals: ${originals.join(', ')}</p>`);
  document.write(`<p>Upcoming Releases: ${upcomingReleases.join(', ')}</p>`);
  document.write(`<p>Language Preferences: ${languagePreferences.join(', ')}</p>`);
  document.write(`<p>Video Quality Settings: ${videoQualitySettings.join(', ')}</p>`);
  document.write(`<p>Playback Controls: ${playbackControls.join(', ')}</p>`);

  // Display account settings
  document.write("<h2>Account Settings</h2>");
  document.write(`<p>Name: ${accountSettings.name}</p>`);
  document.write(`<p>Email: ${accountSettings.email}</p>`);
  document.write(`<p>Plan: ${accountSettings.plan}</p>`);

  document.write("<h2>Notification Center</h2>");
  document.write(`<p>${notificationCenter.join(', ')}</p>`);

  // Display footer links
  document.write("<h2>Footer Links</h2>");
  document.write("<ul>");
  for (const link of footerLinks) {
    document.write(`<li>${link}</li>`);
  }
  document.write("</ul>");



  
   