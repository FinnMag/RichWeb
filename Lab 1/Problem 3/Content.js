let newImages = [
  "https://cdn.discordapp.com/attachments/761240881180704778/1140344138198421655/780dca91-69a7-4403-8fb9-a33a317c5c41-1668996120447-pfarm-with-png-watermarked.png?ex=6535633d&is=6522ee3d&hm=ddb94fc9539983a1e65c3c3115b86b760fce9d9cfacb2e3a68ee5420022057b3&",
  "https://cdn.discordapp.com/attachments/761240881180704778/1052738460731056128/PNG_image.PNG?ex=65307317&is=651dfe17&hm=ef6911567198acd2720574f96fb61fb43c66eccf313dffeeb6a6fd7694b624e3&",
  "https://cdn.discordapp.com/attachments/761240881180704778/808678844059746344/9k.png?ex=652e80dc&is=651c0bdc&hm=f5654d8b089190bde4d61f170eaa5d7f3a0b3c1be738725046036a5b33cec9e8&",
  "https://cdn.discordapp.com/attachments/761240881180704778/798671597698940999/47d.png?ex=652f02e3&is=651c8de3&hm=a7c09dc469a859bfe1af5d369419210466cd533ef786ad7b95b767fe8ec9cc58&"

];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
  const randomImg = Math.floor(Math.random() * newImages.length)
  imgs[i].src = newImages[randomImg]
}

//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++) {
  headers[i].innerText = "Where is my friend Ben?";
}

// do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].innerText = "I'm lost without him";
}

// Change background colour
document.body.style.backgroundColor = "purple";

// Change the background colour of a div
const divElement = document.getElementsByTagName("div");
divElement.style.backgroundColor = "lime";

// Change the font and colour of all p elements
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
  paragraph.style.fontFamily = "Comic Sans";
  paragraph.style.color = "blue";
});

//change the font and colour of all <body> elements
const bodies = document.querySelectorAll('body');
bodies.forEach(body => {
  body.style.fontFamily = "Arial"; // 
  body.style.color = "green";
});

