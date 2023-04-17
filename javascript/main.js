let slider = tns({
  container: ".my-slider",
  slideBy: "1",
  speed: "400",
  autoplay: true,
  autoplayButtonOutput: false,
  controls: "false",
  nav: "false",
  controlsContainer: "#custom-control",
  controlsPosition: "bottom",
  navPosition: "bottom",
  mouseDrag: true,
  responsive: {
    0: {
      nav: false,
    },
    480: {
      items: 1,
      gutter: 10,
      nav: false,
    },
    786: {
      items: 2,
      gutter: 10,
      nav: true,
    },
    1024: {
      items: 4,
      gutter: 10,
      nav: true,
    },
    1600: {
      items: 5,
      gutter: 10,
      nav: true,
    },
  },
});
// Start expending cards
AllPanel = document.querySelectorAll(".img-container .panel");
AllPanel.forEach((panel) => {
  panel.onclick = function (e) {
    AllPanel.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
});
// Start circle progress
let prevButton = document.querySelector(".progress-steps .prev");
let nextButton = document.querySelector(".progress-steps .next");
let theProgress = document.querySelector(".circle-container .progress");
let Allcircle = document.querySelectorAll(".circle-container .circle");
let progressWidth = 0;
currentActive = 1;

nextButton.onclick = function () {
  currentActive++;
  if (currentActive > Allcircle.length) {
    currentActive = Allcircle.length;
  }
  update();
  prevButton.classList.remove("disabled");
  progressWidth = progressWidth + 33.33;
  theProgress.style.width = `${progressWidth}%`;
  

  if (progressWidth >= 99.9) {
    this.classList.add("disabled");
  }
};
prevButton.onclick = function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
  progressWidth = progressWidth - 33.33;
  theProgress.style.width = `${progressWidth}%`;

  nextButton.classList.remove("disabled");

  if (progressWidth <= 0) {
    this.classList.add("disabled");
  }
};

function update() {
  Allcircle.forEach((circle, indx) => {
    
    if (indx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}
// start animationMove
theMenu = document.querySelector(".menu-bar");
MenuContainer = document.querySelector(".menuBar-container");
closeMenu = document.querySelector(".menuBar-container .close");
theContent = document.querySelector(".theContent");
navItems = document.querySelector(".animation-rotate .nav-items");
listItem = document.querySelector(".animation-rotate .listItem a");
theMenu.onclick = () => {
  MenuContainer.classList.add("hide");
  theContent.classList.add("rotate");
  navItems.style.left = "3%";
};
closeMenu.onclick = () => {
  MenuContainer.classList.remove("hide");
  theContent.classList.remove("rotate");
  navItems.style.left = "-20%";
};
// start search section
let inputSearch = document.querySelector(".search input");
let theIcon = document.querySelector(".search i");
theIcon.onclick = () => {
  inputSearch.classList.toggle("change");
  inputSearch.focus();
};
// start overlay section
let thecounter = document.querySelector(".theCounter");
let theOverlay = document.querySelector(".overlay");
counter = 0;
countDown = 30;
opacity = 1;
window.onload = function () {
  start = setInterval(function () {
    counter++;
    thecounter.innerText = `${counter}%`;
    if (counter >= 99) {
      clearInterval(start);
    }
    if (counter > 37) {
      opacity--;
      thecounter.style.opacity = opacity;
    }
  }, 40);
};

setInterval(() => {
  countDown--;
  theOverlay.style.filter = `blur(${countDown}px)`;
}, 155);
// start scroll animation
allBoxes = document.querySelectorAll(".scroll-animation .box");

window.addEventListener("scroll", checkBoxs);
checkBoxs();
function checkBoxs() {
  const bo = window.innerHeight - 180;
  allBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < bo) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
// start split
let split = document.querySelectorAll(".split-container .spilt");
split.forEach((ele) => {
  ele.addEventListener("mouseenter", (e) => {
    ele.classList.add("hover");
    
  });
  ele.addEventListener("mouseleave", (e) => {
    ele.classList.remove("hover");
    
  });
});

// start make div sounds
let theSounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

theSounds.forEach((sound) => {
  let spanSounds = document.createElement("span");
  spanSounds.innerText = sound;
  document.querySelector(".sounds-container").appendChild(spanSounds);
  spanSounds.addEventListener("click", () => {
    stopSong();
    document.getElementById(sound).play();
  });
});
function stopSong() {
  theSounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
  });
}
// start the joke
let jokbtn = document.querySelector(".all-container button");
let jokeEl = document.querySelector(".all-container .theJoke");
jokbtn.onclick = generateJoke;

// USING .then()
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();
  jokeEl.innerHTML = data.joke;
}
generateJoke();

// start the key events
let insert = document.querySelector(".keyEvents .insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
      <div class="key">
        ${event.key === " " ? "space" : event.key}
        <small>event.sKey</small>
        </div>
        <div class="key">
        ${event.keyCode}
        <small>event.KeyCode</small>
        </div>
        <div class="key">
        ${event.code}
        <small>event.Code</small>
      </div>
    `;
});
// start faq question
let Faq = document.querySelector(".faq");
let thefaqButton = document.querySelectorAll(" .faq button");
thefaqButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    button.querySelector(".open").classList.toggle("hide");
    button.querySelector(".close").classList.toggle("show");
    button.parentElement.classList.toggle("active");
    button.parentElement.querySelector("p").classList.toggle("show");
  });
});
// start making the rendom choises

let textarea = document.querySelector(".randomChoice #textarea");

let theResults = document.querySelector(".randomChoice .theResults");
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    e.target.value = "";
    randomtag();
  }
});
function createTags(input) {
  let tags = input.split(",").filter((tag) => tag.trim());
  theResults.innerHTML = "";
  tags.forEach((tag) => {
    let span = document.createElement("span");
    span.innerText = tag;
    span.className = "tag";
    theResults.appendChild(span);
  });
}
function randomtag() {
  let time = 30;
  let interval = setInterval(() => {
    let randomtag = pickrandomtag();
    highLight(randomtag);
    setTimeout(() => {
      unhighLight(randomtag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      let randomtag = pickrandomtag();
      highLight(randomtag);
    }, 100);
  }, time * 100);
}
function pickrandomtag() {
  let Alltags = document.querySelectorAll(".tag");
  return Alltags[Math.floor(Math.random() * Alltags.length)];
}

function highLight(tag) {
  tag.classList.add("highLight");
}
function unhighLight(tag) {
  tag.classList.remove("highLight");
}
// start navbar animated
let btnclose = document.querySelector(".nav-container .btn");
let navContainer = document.querySelector(".nav-container");
btnclose.addEventListener("click", (e) => {
  navContainer.classList.toggle("show-nav");
});
// start increament number

let theNum = document.querySelectorAll(".increament .box span");
let section = document.querySelector(".increament");
started = false;
thetargetNum = 0;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 500) {
    if (!started) {
      theNum.forEach((num) => {
        num.innerHTML = 0;
        function updatetheNum() {
          const target = +num.dataset.num;
          const theIntegerNum = +num.innerHTML;
          const increament = target / 200;
          if (theIntegerNum < target) {
            num.innerHTML = `${Math.ceil(theIntegerNum + increament)}`;
          }
          setTimeout(updatetheNum, 10);
        }
        updatetheNum();
      });
    }
    started = true;
  }
};
// start clac water

function createtheCups() {
  divContainer = document.querySelector(".Water .All");
  for (let i = 0; i < 8; i++) {
    div = document.createElement("div");
    div.className = "theCup";
    divContainer.appendChild(div);
    let firstSpan = document.createElement("span");
    let secondSpan = document.createElement("span");
    firstSpan.appendChild(document.createTextNode("250"));
    secondSpan.appendChild(document.createTextNode("ml"));
    div.append(firstSpan, secondSpan);
  }
  // setting the overlay
  let AllCups = document.querySelectorAll(".theCup");
  let overlayBottle = document.querySelector(".overlay-bottle");
  let overlayNum = document.querySelector(".overlay-bottle .num");
  let remained = document.querySelector(".the_bottle .remained");
  let vlaueRemained = document.querySelector(".the_bottle h3");
  AllCups.forEach((cup, indx) => {
    cup.addEventListener("click", () => drinkWater(indx));
  });

  function drinkWater(indx) {
    if (
      AllCups[indx].classList.contains("change-style") &&
      !AllCups[indx].nextElementSibling.classList.contains("change-style")
    ) {
      indx--;
    }

    AllCups.forEach((cup, indx2) => {
      if (indx2 <= indx) {
        cup.classList.add("change-style");
      } else {
        cup.classList.remove("change-style");
      }
    });

    let fullCups = document.querySelectorAll(".theCup.change-style").length;
    let cupsLenght = AllCups.length;
    if (fullCups == 0) {
      vlaueRemained.innerText = `${2}L`;
      overlayBottle.style.opacity = 0;
      overlayBottle.style.height = 0;
    } else {
      overlayBottle.style.opacity = 1;
      overlayNum.innerText = `${(fullCups / cupsLenght) * 100}%`;
      overlayBottle.style.height = `${(fullCups / cupsLenght) * 350}px`;
      vlaueRemained.innerText = `${2 - (250 * fullCups) / 1000}L`;
      if (overlayNum.innerText == `${100}%`) {
        AllCups[7].style.cssText = "pointer-events:none";
        remained.style.visibility = "hidden";
        remained.style.height = 0;
      } else {
        AllCups[7].style.cssText = "pointer-events:visible";
        remained.style.visibility = "visible";
      }
    }
  }
}
createtheCups();
let images = [
  "card-1.jpg",
  "card-2.jpg",
  "card-3.jpg",
  "card-4.jpg",
  "card-5.jpg",
  "card-6.jpg",
  "card-7.jpg",
  "card-8.jpg",
  "card-9.jpg",
  "card-10.jpg",
  "card-11.jpg",
  "card-12.jpg",
  "card-13.jpg",
  "card-14.jpg",
  "card-15.jpg",
  "card-16.jpg",
  "card-17.jpg",
  "card-18.jpg",
  "card-19.jpg",
  "card-20.jpg",
];
// start making the movies
let moviesSection = document.querySelector(".movies");
let search = document.querySelector("#search");
let form = document.querySelector("#form");
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const api_search =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
get(API_URL);
async function get(url) {
  const responce = await fetch(url);
  const data = await responce.json();
  showMovies(data);
}
// start using data
function showMovies(data) {
  divContainer = document.createElement("div");
  divContainer.className = "div-Container";
  for (let i = 0; i < data.results.length; i++) {
    theBox = document.createElement("div");
    theBox.className = "theBox";
    MovieOver = document.createElement("div");
    MovieOver.className = "MovieOver";
    OverHead = document.createElement("h3");
    OverHead.innerHTML = "OverView";
    Overpara = document.createElement("p");
    Overpara.innerHTML = `${data.results[i].overview}`;
    MovieOver.append(OverHead, Overpara);
    theBox.prepend(MovieOver);
    img = document.createElement("img");
    img.src = `${IMG_PATH + data.results[i].poster_path}`;
    divInfo = document.createElement("div");
    divInfo.className = "Info";
    para = document.createElement("h3");
    para.innerHTML = `${data.results[i].title}`;
    span = document.createElement("span");
    span.innerHTML = `${data.results[i].vote_average}`;
    if (data.results[i].vote_average > 7.5) {
      span.style.color = "#00e700";
    }
    if (data.results[i].vote_average < 5) {
      span.style.color = "red";
    }
    divInfo.append(para, span);
    theBox.append(img, divInfo);
    divContainer.appendChild(theBox);
  }
  moviesSection.appendChild(divContainer);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let SearchTerm = search.value;
  if (SearchTerm && SearchTerm !== "") {
    get(api_search + SearchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
// start making the background-images
AllImgs = [
  "background1.jpg",
  "background2.jpg",
  "background3.jpg",
  "background4.jpg",
  "background5.jpg",
  "background6.jpg",
];

let imgs = document.querySelector(".allImgs .img");
let backgrond_images = document.querySelector(".background-images");
let arrowRight = document.querySelector(".background-images .right");
let arrowLeft = document.querySelector(".background-images .left");
let indx = 0;

arrowRight.addEventListener("click", (e) => {
  arrowLeft.classList.remove("not-work");
  if (indx === AllImgs.length - 1) {
    indx = -1;
  }
  indx++;
  imgs.style.backgroundImage = `url(/css/images/background-images/${AllImgs[indx]})`;
  backgrond_images.style.backgroundImage = `url(/css/images/background-images/${AllImgs[indx]})`;
});
arrowLeft.addEventListener("click", (e) => {
  if (indx == 0) {
    indx = AllImgs.length;
  }
  arrowRight.classList.remove("not-work");
  indx--;
  imgs.style.backgroundImage = `url(/css/images/background-images/${AllImgs[indx]})`;
  backgrond_images.style.backgroundImage = `url(/css/images/background-images/${AllImgs[indx]})`;
});
// start the clock
// change mode dark
let modeButton = document.querySelector(".clock .DarkMode");
modeButton.addEventListener("click", (e) => {
  modeButton.classList.toggle("activeDark");
  e.target.parentElement.classList.toggle("dark");
  document.querySelector(".theWatch").classList.toggle("change");
});

setInterval(get, 1000);
function get() {
  let redArrow = document.querySelector(".theWatch .redArrow");
  let bigArrow = document.querySelector(".theWatch .bigArrow");
  let smallArrow = document.querySelector(".theWatch .smallArrow");
  let theTime = document.querySelector(".clock .theTime");
  let theDate = document.querySelector(".clock .theDate");
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const newDate = new Date();
  const theDay = newDate.getDay();
  const theMonth = newDate.getMonth();
  const thedate = newDate.getDate();
  const getSeconds = newDate.getSeconds() / 60;
  const getMinutes = (newDate.getMinutes() + getSeconds) / 60;
  const getHours = (getMinutes + newDate.getHours()) / 12;
  const setMinutes = newDate.getMinutes();
  const setHours = newDate.getHours() % 12;
  const hours = newDate.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  setClock(redArrow, getSeconds);
  setClock(bigArrow, getMinutes);
  setClock(smallArrow, getHours);
  theTime.innerHTML = `<span>${setHours}</span>:<span>${setMinutes < 10 ? `0${setMinutes}` : setMinutes
    } </span> ${ampm}`;
  theDate.innerHTML = `${days[theDay]} ,${months[theMonth]} <span>${thedate}</span>`;
  function setClock(ele, time) {
    ele.style.setProperty("--rotation", time * 360);
  }
}
// start ripple button
const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.offsetX;
    const y = e.offsetY;

    const xInside = x;
    const yInside = y;

    const circle = document.createElement("span");
    circle.classList.add("circle");

    circle.style.left = xInside + "px";
    circle.style.top = yInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
// start drag images
let empty = document.querySelectorAll(".DragImages .containerImages");
let fill = document.querySelector(".fill");
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
function dragStart() {
  
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}
function dragEnd() {
  this.className = "fill";
}

empty.forEach((ele) => {
  ele.addEventListener("dragover", dragOver);
  ele.addEventListener("dragenter", dragEnter);
  ele.addEventListener("dragleave", dragLeave);
  ele.addEventListener("drop", Drop);
});
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hoverd";
}
function dragLeave() {
  this.className = "containerImages";
}
function Drop() {
  this.className = "containerImages";
  this.classList.remove("hoverd");
  this.appendChild(fill);
}

// end the darg images
// start making drwing app
let theValue = document.querySelector(".control-drawing .value");
let themainControl = document.querySelector(".control-drawing .mistake");
let canvas = document.querySelector(".drawing .canvas");
let stroke = document.querySelector(".changeValues #stroke");
let minus = document.querySelector(".control-drawing .minus");
let plus = document.querySelector(".control-drawing .plus");
// reset the canvas and make it flexible
window.addEventListener("resize", Resize);
function Resize() {
  canvas.width = window.innerWidth - 100;
  canvas.height = window.innerHeight - 100;
}
Resize();
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

// make the variables
is_drawing = false;
let theWidth = 5;
let imageData = [];
let redo = [];
let theIndex = -1;
// let thelastIndex = -1;
// setting the addEvnelistener
let Ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", mouseEnter);
canvas.addEventListener("mouseup", mouseUp);
canvas.addEventListener("mousemove", mouseMove);

function mouseEnter(e) {
  is_drawing = true;
  Ctx.beginPath();
  Ctx.moveTo(e.offsetX, e.offsetY);
  e.preventDefault();
}
function mouseUp(e) {
  Ctx.closePath();
  is_drawing = false;
  e.preventDefault();
  imageData.push(Ctx.getImageData(0, 0, canvas.width, canvas.height));
  redo.push(Ctx.getImageData(0, 0, canvas.width, canvas.height));
  theIndex += 1;
}
function mouseMove(e) {
  if (is_drawing) {
    Ctx.lineTo(e.offsetX, e.offsetY);
    Ctx.strokeStyle = stroke.value;
    Ctx.lineWidth = theWidth;
    Ctx.lineCap = "round";
    Ctx.lineJoin = "round";
    Ctx.stroke();
  }
  e.preventDefault();
}

// control the drawing
plus.addEventListener("click", (e) => {
  theWidth += 5;
  if (theWidth > 50) {
    theWidth = 50;
  }
  theValue.innerText = theWidth;
});
minus.addEventListener("click", (e) => {
  theWidth -= 5;
  if (theWidth < 5) {
    theWidth = 5;
  }
  theValue.innerText = theWidth;
});
// create the clear button
function clearButton() {
  div = document.createElement("button");
  div.className = "clear";
  div.innerText = "clear";
  themainControl.appendChild(div);
  div.addEventListener("click", (e) => {
    Ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  });
}
clearButton();

// start the undo function
function undo() {
  if (theIndex <= 0) {
    Ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  } else {
    theIndex -= 1;
    Ctx.putImageData(imageData[theIndex], 0, 0);
  }
}

function restore() {
  if (theIndex < imageData.length - 1) {
    theIndex += 1;
    Ctx.putImageData(redo[theIndex], 0, 0);
  }
}
// End the drawing app
// start contentPlaceholder
let contentHeader = document.querySelectorAll(".content_placeholder h3");
let contentPara = document.querySelectorAll(".content_placeholder p");
let imgContent = document.querySelectorAll(".theCard .imgCon");
async function getContent() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  for (let i = 0; i < 3; i++) {
    contentHeader[i].innerHTML = data[i].title;
    contentPara[i].innerHTML = data[i].body;
  }
  // addText to element
  let span = document.querySelectorAll(".theCard .innerInfo span");
  span[0].innerHTML = `Sam`;
  span[1].innerHTML = `Oct 09,2019`;
  span[2].innerHTML = `Simba`;
  span[3].innerHTML = `Oct 08,2020`;
  span[4].innerHTML = `Sassy`;
  span[5].innerHTML = `Oct 05,2021`;
  imgContent.forEach((img) => {
    img.classList.remove("bg-animated");
    img.parentElement.querySelectorAll(".innerInfo span").forEach((span) => {
      span.classList.remove("bg-animated", "animated-bg-text");
    });
  });
  let InfoParent = document.querySelectorAll(".theCard .info");
  InfoParent.forEach((info) => {
    let para = document.querySelectorAll(".theCard .info p");
    para.forEach((p) => {
      p.classList.remove("bg-animated", "animated-bg-text");
    });
    info.querySelectorAll("h3").forEach((head) => {
      head.classList.remove("bg-animated", "animated-bg-text");
    });
  });
  document.querySelectorAll(".theCard img").forEach((img) => {
    img.style.opacity = "1";
  });
}
setTimeout(getContent, 5000);
// start skeleton loader
window.addEventListener("load", (e) => {
  imgContent.forEach((img) => {
    img.classList.add("bg-animated");
    img.parentElement.querySelectorAll(".innerInfo span").forEach((span) => {
      span.classList.add("bg-animated", "animated-bg-text");
    });
  });
  document.querySelectorAll(".theCard img").forEach((img) => {
    img.style.opacity = "0";
  });
  function createElemetns() {
    let InfoParent = document.querySelectorAll(".theCard .info");
    InfoParent.forEach((info) => {
      for (let i = 0; i <= 5; i++) {
        let para = document.createElement("p");
        para.classList.add("bg-animated", "animated-bg-text");
        info.appendChild(para);
      }
      info.querySelectorAll("h3").forEach((head) => {
        head.classList.add("bg-animated", "animated-bg-text");
      });
    });
  }
  createElemetns();
});
// star doubleslider
let alldoubleImages = document.querySelectorAll(
  ".double-slider .rightSlider div"
);
let leftSlider = document.querySelectorAll(".double-slider .leftSlider div");
let rightSlider = document.querySelector(".double-slider .rightSlider");
let thefirstIndex = 0;
let theSecondIndex = 0;
let theClickButton = document.querySelector(".controlSlider .right-btn");
let theLiftButton = document.querySelector(".controlSlider .left-btn");

theClickButton.addEventListener("click", (e) => {
  thefirstIndex -= 100;
  
  theSecondIndex -= -100;
  
  alldoubleImages.forEach((e, index) => {
    if (thefirstIndex === -400) {
      thefirstIndex = 0;
    }
    e.style.transform = `translateY(${thefirstIndex}%)`;
  });
  alldoubleImages[thefirstIndex];
  if (thefirstIndex === 3) {
    thefirstIndex = -1;
  }
  // start left slider
  leftSlider.forEach((e) => {
    if (theSecondIndex === 400) {
      theSecondIndex = 0;
    }
    e.style.transform = `translateY(${theSecondIndex}%)`;
  });
});
// when click on the left button
theLiftButton.addEventListener("click", (e) => {
  thefirstIndex += 100;
  theSecondIndex += -100;
  alldoubleImages.forEach((e, index) => {
    if (thefirstIndex === 100) {
      thefirstIndex = -300;
    }
    e.style.transform = `translateY(${thefirstIndex}%)`;
  });
  if (thefirstIndex === 3) {
    thefirstIndex = -1;
  }
  // start left slider
  leftSlider.forEach((e) => {
    if (theSecondIndex === -100) {
      theSecondIndex = 300;
    }
    e.style.transform = `translateY(${theSecondIndex}%)`;
  });
});
// start toast notification
let themainToast = document.querySelector(".toast-notification");
let themainButton = document.querySelector(".toast-notification .show-message");
let theText = ["messageOne", "messageTwo", "messageThree", "messageFour"];
let theHolder = document.querySelector(".theHolder");
let theColors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "0", "A", "B", "C", "D", "E", "F"];
let randomColors = [];
function createNotifications() {
  themainButton.addEventListener("click", (e) => {
    randomColors.length = 0;
    for (let i = 0; i <= 5; i++) {
      let colors = theColors[Math.floor(Math.random() * theColors.length)];
      randomColors.push(colors);
    }
    let randomText = theText[Math.floor(Math.random() * theText.length)];
    let div = document.createElement("div");
    div.className = "notification";
    div.innerText = randomText;
    div.style.color = `#${randomColors.join("")}`;
    theHolder.appendChild(div);
    setTimeout(() => div.remove(), 3000);
  });
}
createNotifications();
// start github profile
let githubSection = document.querySelector(".github-profile .main");
const theSearchButton = document.querySelector(".github-profile .btn-search");
const ourForm = document.querySelector(".github-profile #github-form");
let theSearchInput = document.querySelector(".user-form #searchGithub");
const apiLink = "https://api.github.com/users/";

async function getUsers(username) {
  
  try {
    const { data } = await axios(apiLink + username);
    
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    createErrorCard("No profile with this username");
  }
}
async function getRepos(username) {
  try {
    const { data } = await axios(apiLink + username + "/repos?sort=created");
    
    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `;
  githubSection.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

  githubSection.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 5).forEach((repo) => {
    
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}
ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = theSearchInput.value;
  getUsers(user);
  theSearchInput.value = "";
});
// start dblClick section

let loveImage = document.querySelector(".Double-click .loveImage");
let theloveCounter = document.querySelector(".Double-click p .count");
let loveCount = 0;

loveImage.addEventListener("dblclick", (e) => {
  loveCount++;
  theloveCounter.innerHTML = loveCount;
  let x = e.offsetX;
  let y = e.offsetY;
  const heart = document.createElement("i");
  heart.classList.add("fas", "fa-heart", "love");
  heart.style.cssText = `left:${x}px;top:${y}px`;
  loveImage.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 1000);
});
// start create moving text
let movingText = document.querySelector(".moving-text");
let theSpeed = document.querySelector(".contorlText #speed");
let theSpecificText = "we all love programming it is the future!";
let theLength = theSpecificText.length;
let theInput = document.querySelector("auto-text #number");
idx = 1;
speed = 300 / theSpeed.value;
function setAutoText() {
  movingText.innerHTML = theSpecificText.slice(0, idx);
  idx++;
  if (idx > theLength) {
    idx = 1;
  }
  setTimeout(setAutoText, speed);
}
setAutoText();

theSpeed.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});

// start password generator
// get elements
let theCount = document.querySelector(".features .pass #count");
let theUpperCase = document.querySelector(".features .pass #upperCase");
let theLowerCase = document.querySelector(".features .pass #lowerCase");
let theNumbers = document.querySelector(".features .pass #numbers");
let theSymbols = document.querySelector(".features .pass #symbols");
let allPass = document.querySelectorAll(".features .pass");
let theSubmit = document.querySelector(".holder #submit");
let spanContent = document.querySelector(".holder .thePassword span");
let clipboard = document.querySelector(".holder .thePassword i");

let newRandomUpper = [];
// start work
// first get random of elements
function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbols() {
  const AllSymbols = "!@#$%^&*(){}=<>?/,.";
  return AllSymbols[Math.floor(Math.random() * AllSymbols.length)];
}
// second put it in an object
const randomElements = {
  upper: getRandomUpperCase,
  lower: getRandomLowerCase,
  number: getRandomNumber,
  symbol: getRandomSymbols,
};
// when click the submit
theSubmit.addEventListener("click", (e) => {
  let length = +theCount.value;
  let hasUpper = theUpperCase.checked;
  let hasLower = theLowerCase.checked;
  let hasNumbers = theNumbers.checked;
  let hasSymbols = theSymbols.checked;
  spanContent.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumbers,
    hasSymbols,
    length
  );
});
clipboard.addEventListener("click", (e) => {
  let textarea = document.querySelector("textarea");
  let password = spanContent.innerText;
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("password copied to clipboard!");
});
// start generate the password
function generatePassword(upper, lower, number, symbol, length) {
  const typeCount = upper + lower + number + symbol;
  const typeArray = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typeCount === 0) {
    return "";
  }
  // start the loop
  let generatedPassword = "";
  for (let i = 0; i < length; i += typeCount) {
    typeArray.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomElements[funcName]();
    });
  }
  return generatedPassword;
}

// start good cheap fast
let circleBtn = document.querySelectorAll(".sameHolder .Circle-btn");
let fast = document.querySelector(".sameHolder #fast");
let cheap = document.querySelector(".sameHolder #cheap");
let good = document.querySelector(".sameHolder #good");
circleBtn.forEach((circle) =>
  circle.addEventListener("change", (e) => doThis(e.target))
);
function doThis(theClickedBtn) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedBtn) {
      fast.checked = false;
    }
    if (cheap === theClickedBtn) {
      good.checked = false;
    }
    if (fast === theClickedBtn) {
      cheap.checked = false;
    }
  }
}
// start making the notes
let AddNote = document.querySelector(".NotesApp .NewNote");
let NoteContainer = document.querySelector(".NotesApp .NoteContainer");

let newLocal = JSON.parse(localStorage.getItem("AllNotes"));

newLocal && newLocal.forEach((note) => {
  addNewNot(note);
});
AddNote.addEventListener("click", () => addNewNot());

function addNewNot(text = "") {
  let note = document.createElement("div");
  note.className = "note";
  // inner note
  let noteHead = document.createElement("div");
  noteHead.className = "noteHead";
  // innerHead
  let iPen = document.createElement("i");
  iPen.id = "iPen";
  iPen.className = "fa-solid fa-pen-to-square";
  let iTrash = document.createElement("i");
  iTrash.id = "iTrash";
  iTrash.className = "fa-solid fa-trash-can";
  // append to noteHead
  noteHead.append(iPen, iTrash);
  // textarea
  let textArea = document.createElement("textarea");
  textArea.className = `noteBody ${text ? "hidden" : ""}`;
  // textareaCon
  let textareaCon = document.createElement("div");
  textareaCon.className = `textareaCon ${text ? "" : "hidden"}`;
  // append to note
  note.append(noteHead, textArea, textareaCon);
  // append to main div
  NoteContainer.appendChild(note);
  editing(iPen, textArea, textareaCon);
  removing(iTrash, note);
  textareaCon.innerHTML = marked(text);
  textArea.value = text;
  textArea.addEventListener("input", (e) => {
    let { value } = e.target;
    textareaCon.innerHTML = marked(value)
    updatesNotes(textArea);
  });
}
function editing(pen, textArea, textareaCon) {
  pen.addEventListener("click", (e) => {
    textArea.classList.toggle("hidden");
    textareaCon.classList.toggle("hidden");
    textArea.focus()
  });
}

function removing(iTrash, mainDiv) {
  iTrash.addEventListener("click", (e) => {
    mainDiv.remove();
    updatesNotes();
  });
}

function updatesNotes() {
  let allText = document.querySelectorAll(".noteBody");
  noteArr = [];
  allText.forEach((text) => {
    noteArr.push(text.value);
  });
  localStorage.setItem("AllNotes", JSON.stringify(noteArr));
}
// start making theAnimateCircle
let AllNum = document.querySelectorAll(".animate-circle .num");
let animatoinActive = document.querySelector(".animationActive");
let controlAnimaion = document.querySelector(".controlAnimate");
let controlBtn = document.querySelector(".controlAnimate button");
let counterAnimate = AllNum.length - 1;
function animationCount() {
  AllNum.forEach((num, indx) => {
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "Go" && indx !== counterAnimate) {
        num.classList.remove("go");
        num.classList.add("out");
      } else if (e.animationName === "out") {
        num.nextElementSibling.classList.add("go");
      } else {
        controlAnimaion.classList.add("show");
        animatoinActive.classList.add("hide");
      }
    });
  });
}
animationCount();
// when click on the contorl animation
controlBtn.addEventListener("click", (e) => {
  animationCount();
  controlAnimaion.classList.remove("show");
  animatoinActive.classList.remove("hide");
  AllNum.forEach((num) => {
    num.classList.value = "num";
    AllNum[0].classList.add("go");
  });
});
// start img carousel
let imagesHolder = document.querySelector(".img-carousel .images");
let AllImages = document.querySelectorAll(".img-carousel .images div");
let prevBtn = document.querySelector(".controlButtons #prev");
let nextBtn = document.querySelector(".controlButtons #next");
// handel variable
let imageindx = 0;
let AllImgsLength = (AllImages.length - 1) * 500;

nextBtn.addEventListener("click", (e) => {
  imageindx += 500;
  prevent();
  resetInterval();
});
prevBtn.addEventListener("click", (e) => {
  imageindx -= 500;
  prevent();
  resetInterval();
});

function prevent() {
  if (imageindx > AllImgsLength) {
    imageindx = 0;
  } else if (imageindx < 0) {
    imageindx = AllImgsLength;
  }
  imagesHolder.style.transform = `translateX(${-imageindx}px)`;
}

function run() {
  imageindx += 500;
  prevent();
}
let interval = setInterval(run, 3500);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3500);
}
// start making hoverBoard
let holderBoard = document.querySelector(".hoverBoard .holderBoard");
for (let i = 0; i < 500; i++) {
  const board = document.createElement("div");
  board.classList.add("board");
  holderBoard.appendChild(board);
}
document.querySelectorAll(".holderBoard .board").forEach((board) => {
  board.addEventListener("mouseover", (e) => {
    const color = generateRandomColors();
    board.style.background = color;
    board.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`;
  });
  board.addEventListener("mouseout", (e) => {
    board.style.background = null;
    board.style.boxShadow = ` 0 0 2px #222`;
  });
});
function generateRandomColors() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)
  );
}
// start pokeDex
let pokeContainer = document.querySelector(".pokesHolder");
// make the colors
let pokemonColors = {
  grass: "#DEFDE0",
  fire: "#FDDFDF",
  water: "#DEF3FD",
  bug: "#f8d5a3",
  normal: "#F5F5F5",
  electric: "#FCF7DE",
  ground: "#f4e7da",
  poison: "#98d7a5",
  fighting: "#E6E0D4",
  rock: "#d5d5d4",
  ghost: "#fff3f3bf",
  psychic: "#eaeda1",
  ice: "#1c9bffbf",
  dragon: "97b3e6",
  fairy: "#fceaff",
};
const mainTypes = Object.keys(pokemonColors);
const pokemon_count = 78;
async function fetchPokemons() {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokeDex(i);
  }
}
async function getPokeDex(i) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  let data = await response.json();
  createPokeCard(data, i);
}
fetchPokemons();
function createPokeCard(data, i) {
  let pokeCard = document.createElement("div");
  const name = data.name[0].toUpperCase() + data.name.slice(1);
  const poke_type = data.types[0].type.name;
  const type = mainTypes.find((el) => poke_type.indexOf(el) > -1);
  // 
  const color = pokemonColors[type];
  pokeCard.style.background = color;
  pokeCard.className = "pokeCard";
  pokeCard.innerHTML = `
    <div class= "pokemonImages" ><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"></div>
    <span>#${data.id.toString().padStart(3, 0)}</span> 
    <h2>${name}</h2>
    <span>Type:${poke_type}</span>
    `;
  pokeContainer.appendChild(pokeCard);
}
// start mobile navigation

let imageList = document.querySelectorAll(".mobileBackground img");
let navList = document.querySelectorAll(".tap-navigation ul li");
navList.forEach((li, indx) => {
  li.addEventListener("click", (e) => {
    navList.forEach((li) => {
      li.classList.remove("active");
      imageList.forEach((img) => {
        img.classList.remove("show");
      });
    });
    li.classList.add("active");
    imageList[indx].classList.add("show");
  });
});
// start password Strength
let passwordInput = document.querySelector(".passwordStrength #password");
let passwordBack = document.querySelector(".passwordHolder");
// 
passwordInput.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  let length = inputValue.length;
  
  let blurValue = 20 - length * 2;
  passwordBack.style.filter = `blur(${blurValue}px)`;
});
// start magic background
let mainBoxHolder = document.querySelector(".background-boxes .mainBox");
let mainBoxBtn = document.querySelector(".background-boxes .magic");
mainBoxBtn.addEventListener("click", () =>
  mainBoxHolder.classList.toggle("big")
);
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const div = document.createElement("div");
    div.className = "box";
    div.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
    mainBoxHolder.appendChild(div);
  }
}

// start verify account

let verifyInputs = document.querySelectorAll(".verifyAccount .enevlope input");

// verifyInputs[0].focus();
verifyInputs.forEach((input, indx) => {
  input.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      verifyInputs[indx].value = "";
      setTimeout(() => {
        input.nextElementSibling.focus();
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        input.previousElementSibling.focus();
      }, 10);
    }
  });
});

// start live users
let usersList = [];
getUsersList();
let users = document.querySelector(".liveUser .users");
let theSearch = document.querySelector(".LiveSearch input");
async function getUsersList() {
  let response = await fetch("https://randomuser.me/api/?results=500");
  
  let data = await response.json();
  createUsers(data);
}

// sart create users
function createUsers(data) {
  theSearch.addEventListener("input", (e) => theSearchValue(e.target.value));
  data.results.forEach((user, indx) => {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    usersList.push(li);
    li.innerHTML = `
  <img src = "${user.picture.medium}">
  <div class= "text">
    <h2>${user.name.first} ${user.name.last}</h2>
    <p>${user.location.country} ${user.location.city}</p>
  </div>
  `;
    ul.appendChild(li);
    users.appendChild(ul);
  });
  function theSearchValue(value) {
    usersList.map((ele) =>
      ele.innerText.toLowerCase().indexOf(value.toLowerCase()) > -1
        ? ele.classList.remove("hide")
        : ele.classList.add("hide")
    );
  }
}
// start feedbackCard
let feedSection = document.querySelector(".feedback");
let allFeelings = document.querySelectorAll(".boxContent .feel");
let sendReview = document.querySelector("#sendReview");
let value = "Satisified";
allFeelings.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    allFeelings.forEach((element) => {
      element.classList.remove("chossen");
    });
    ele.classList.add("chossen");
    value =
      e.target.nextElementSibling.innerText ||
      e.target.nextElementSibling.textContent;
  });
});
sendReview.addEventListener("click", (ele) => {
  
  ele.target.parentElement.remove();
  useValue(value);
});
function useValue(value) {
  let review = document.createElement("div");
  review.classList.add("review");
  review.innerHTML = `
    <div>🧡</div>
    <strong>Thank You!</strong>
    <div>Feedback:<span>${value}</span></div>
    <p>We'll use your feedback to improve our customer support</p>
  `;
  feedSection.appendChild(review);
}
// start custom rangeSlider

let rangeInput = document.querySelector(".customSlider #range");
rangeInput.addEventListener("input", (e) => {
  let label = e.target.nextElementSibling;
  label.innerHTML = e.target.value;
  label.style.left = +e.target.value + 0 + "%";
});
// start mobile navigation
let menuBar = document.querySelector(".netflexMobile .menu-bar");
let allBackgrounds = document.querySelectorAll(".nav .One");
let wrongButton = document.querySelector(".nav .white button");
menuBar.addEventListener("click", (e) => {
  allBackgrounds.forEach((nav) => {
    nav.classList.add("animating");
  });
});
wrongButton.addEventListener("click", (e) => {
  allBackgrounds.forEach((nav) => {
    nav.classList.remove("animating");
  });
});
// start fetch question about javascript
async function getQuestions() {
  let responce = await fetch(
    "https://www.reddit.com/r/javascript/top/.json?limit=5"
  );
  let data = await responce.json();
}
getQuestions();
// start making quiz app

// these are the questions
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
let quizContainer = document.querySelector(".quizContainer");
let mainHead = document.querySelector(".quizContainer h2");
let allInput = document.querySelectorAll(".ques");
let labelOne = document.querySelector(".quizContainer #labelOne");
let labelTwo = document.querySelector(".quizContainer #labelTwo");
let labelThree = document.querySelector(".quizContainer #labelThree");
let labelFour = document.querySelector(".quizContainer #labelFour");
let currentQues = 0;
let score = 0;
createQuestions();
function createQuestions() {
  removeChecked();
  let dataQuiz = quizData[currentQues];
  mainHead.innerHTML = dataQuiz.question;
  labelOne.innerHTML = dataQuiz.a;
  labelTwo.innerHTML = dataQuiz.b;
  labelThree.innerHTML = dataQuiz.c;
  labelFour.innerHTML = dataQuiz.d;
}
function removeChecked() {
  allInput.forEach((answer) => (answer.checked = false));
}
function ifChecked() {
  let theAnswer;
  allInput.forEach((input) => {
    if (input.checked) {
      theAnswer = input.id;
    }
  });
  return theAnswer;
}

document.querySelector(".submit").addEventListener("click", (e) => {
  theAnswer = ifChecked();
  if (theAnswer) {
    if (theAnswer === quizData[currentQues].correct) {
      score++;
    }
    currentQues++;
    if (currentQues < quizData.length) {
      createQuestions();
    } else {
      quizContainer.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
      <button class="submit" onclick ="location.reload()">reload</button>
      `;
    }
  }
});
// start testimonials box
const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
  },
];
// get items
let boxContent = document.querySelector(".boxSwitcher .boxContent");
let line = document.querySelector(".boxSwitcher .boxContent .line");
let Text = document.querySelector(".boxSwitcher .boxContent .text");
let personalInfo = document.querySelector(".boxContent .personalInfo");
let currentBox = 0;
function createTestiBox() {
  let test = testimonials[currentBox];
  Text.innerText = test.text;
  personalInfo.innerHTML = `
  <img src="${test.photo}" alt="img">
  <div class="info">
  <h3>${test.name}</h3>
  <span>${test.position}</span>
  </div>
  `;
}
createTestiBox();
line.addEventListener("animationend", (e) => {
  line.classList.toggle("repeat");
  line.classList.toggle("grow");
  currentBox++;
  if (currentBox >= testimonials.length) {
    currentBox = 0;
  }
  createTestiBox();
});
// start image feed
let imagesContainer = document.querySelector(".randomImages .imagesContainer");
let row = 5;
let randomImages = "http://source.unsplash.com/random/";
for (let i = 0; i < row * 3; i++) {
  const img = document.createElement("img");
  img.src = `${randomImages}${getRandomSize()}`;
  imagesContainer.appendChild(img);
  // let send = Math.floor(Math.random() * ) + 1000;
  let multi = `${getRandomImg()}x${getRandomImg()}`;
}
function getRandomImg() {
  return Math.floor(Math.random() * 100) + 500;
}
function getRandomSize() {
  return `${getRandomImg()}x${getRandomImg()}`;
}
// start making the todoList
let toDoContainer = document.querySelector(".toDoContainer");
let toDoContent = document.querySelector(".toDoContent");
let toDoInput = document.querySelector("#toDo");
// set variables
let ArrayOfEle = JSON.parse(localStorage.getItem("myTodo")) || [];
// get items from local
getDataFromLocal();
toDoInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    if (toDoInput.value !== "" && toDoInput.value.trim()) {
      getData(e.target.value);
      toDoInput.value = "";
    }
  }
});
function getData(value) {
  const ArrayOfElements = {
    id: Date.now(),
    title: value,
    state: false,
  };
  ArrayOfEle.push(ArrayOfElements);
  distributeData(ArrayOfEle);
  sendDataToLocal(ArrayOfEle);
}
function distributeData(Data) {
  toDoContent.innerHTML = "";
  toDoContainer.querySelectorAll(".yourTodo").innerHTML = "";
  Data.forEach((data) => {
    div = document.createElement("div");
    div.className = "yourTodo";
    div.innerText = data.title;
    div.setAttribute("id", data.id);
    toDoContent.appendChild(div);
    if (data.state) {
      div.className = " yourTodo completed";
    }
    div.addEventListener("click", (e) => {
      e.target.classList.toggle("completed");
      let specialId = e.target.getAttribute("id");
      ArrayOfEle.forEach((ele) => {
        if (specialId == ele.id) {
          ele.state == false ? (ele.state = true) : (ele.state = false);
        }
      });
      sendDataToLocal(ArrayOfEle);
    });
    // delete items
    div.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      e.target.remove();
      let specialId = e.target.getAttribute("id");
      deleteItem(specialId);
    });
  });
}

function deleteItem(specialId) {
  ArrayOfEle = ArrayOfEle.filter((ele) => ele.id != specialId);
  sendDataToLocal(ArrayOfEle);
}

function sendDataToLocal(ArrayOfEle) {
  localStorage.setItem("myTodo", JSON.stringify(ArrayOfEle));
}

function getDataFromLocal() {
  let data = localStorage.getItem("myTodo");
  if (data) {
    let resetData = JSON.parse(data);
    distributeData(resetData);
  }
}
// Start making insetes game
let theInesctSection = document.querySelector(".insectGame");
let srcImg;

let insectBtn = document.querySelector(".insectGame .startGame button");
let gameOption = document.querySelectorAll(".insectGame .gameOption ul li");
// set variables
let insectScore = 0;
let increaseTime = 0;
insectBtn.addEventListener("click", (e) => {
  e.target.parentElement.classList.add("remove");
  e.target.parentElement.parentElement
    .querySelector(".gameOption")
    .classList.add("add");
});
//
gameOption.forEach((li) => {
  li.addEventListener("click", (e) => {
    setInterval(setTime, 1000);
    theInesctSection.querySelector(".timeaScore").classList.add("in");
    li.parentElement.parentElement.classList.add("remove");
    let theImage = li.querySelector("img");
    srcImg = theImage.src;
    setTimeout(createInsects, 1000);
  });
});

function createInsects() {
  numRotate = Math.random() * 360;
  const insect = document.createElement("div");
  insect.innerHTML = `
  <img src = "${srcImg}" alt ="img" style="transform: rotate(${numRotate}deg) " />
  `;
  const { x, y } = randomLocation(insect);
  insect.style.left = `${x}px`;
  insect.style.top = `${y}px`;
  theInesctSection.querySelector(".allInsects").appendChild(insect);
  insect.addEventListener("click", createTwo);
}

function createTwo() {
  insectScore++;
  if (insectScore === 30) {
    theInesctSection.querySelector(".message").classList.add("down");
    setTimeout(() => {
      theInesctSection.querySelector(".message").classList.remove("down");
    }, 10000);
  }
  theInesctSection.querySelector(
    ".timeaScore .theScore"
  ).innerHTML = `Score: ${insectScore}`;
  this.classList.add("change");
  setTimeout(() => this.remove(), 2000);
  setTimeout(createInsects, 1000);
  setTimeout(createInsects, 1500);
}
function randomLocation(insect) {
  const elementWidth = insect.offsetWidth;
  const elementHeight = insect.offsetHeight;
  
  const maxPosX = window.innerWidth * 0.8 - elementWidth - 100;
  const maxPosY = window.innerHeight * 0.8 - elementHeight - 100;
  
  const x = Math.random() * maxPosX + 100 ;
  const y = Math.random() * maxPosY + 100;
  return { x, y };
}

function setTime() {
  increaseTime++;
  let minute = Math.floor(increaseTime / 60);
  let second = increaseTime % 60;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  theInesctSection.querySelector(
    ".timeaScore .theTime"
  ).innerHTML = `Time:${minute}:${second}`;
}
// start traffic
let AllCircle = document.querySelectorAll(".traffic .circle div");
let index = 0;
setInterval(changeLight, 2000);

function changeLight() {
  AllCircle[index].className = "circle";
  index++;
  if (index > 2) {
    index = 0;
  }
  let currentIndex = AllCircle[index];
  currentIndex.classList.add("visible");
  if (currentIndex.classList.contains("visible")) {
    currentIndex.classList.add(currentIndex.getAttribute("color"));
  } else {
    currentIndex.classList.remove(currentIndex.getAttribute("color"));
  }
}
// end