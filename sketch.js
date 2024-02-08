let startButton;
let nextButton;
let soundButton;
let switchImageButton;
let isStarted = false;
let isNextPressed = false;
let img;
let img2;
let sound;
let sound2;

function preload() {
  img = loadImage('Children.jpg');
  img2 = loadImage('corfu.jpg');
  sound = loadSound('oceann.mp3');
  sound2 = loadSound('laughing.mp3');
}

function setup() {
  createCanvas(850, 550);

  startButton = createButton('ΕΙΣΟΔΟΣ');
  startButton.position(width / 2 - startButton.width / 1, height / 2);
  startButton.style('width', '150px');
  startButton.style('height', '80px');
  startButton.style('font-size', '30px');
  startButton.mousePressed(() => {
    isStarted = true;
    startButton.style('display', 'none'); 
    nextButton.style('display', 'inline');
    soundButton.style('display', 'inline');
    switchImageButton.style('display', 'inline');
  });

  nextButton = createButton('ΠΛΗΡΟΦΟΡΙΕΣ ΕΡΓΟΥ');
  nextButton.position(width / 7 - nextButton.width / 2, height - 500);
  nextButton.mousePressed(showNextLayer);
  nextButton.style('display', 'none');
  
  soundButton = createButton('ΗΧΟΣ');
  soundButton.position(width - 120, height - 40);
  soundButton.style('width', '85px');
  soundButton.style('height', '25px');
  soundButton.style('font-size', '13px');
  soundButton.mousePressed(playSound);
  soundButton.style('display', 'none');

  switchImageButton = createButton('ΑΛΛΑΓΗ ΕΡΓΟΥ');
  switchImageButton.position(width / 2+50, height - 40);
  switchImageButton.style('width', '150px');
  switchImageButton.style('height', '25px');
  switchImageButton.style('font-size', '13px');
  switchImageButton.mousePressed(switchImage);
  switchImageButton.style('display', 'none'); 
}
function showNextLayer() {
  isNextPressed = !isNextPressed;
}
function draw() {
  if (isStarted) {
    image(img, 0, 0, width, height); 
    if (isNextPressed) {
      fill(150);
      noStroke();
      rectMode(CENTER);
      let boxWidth = 600;  
      let boxHeight = 200;  
      rect(width / 2, height / 1.78, boxWidth, boxHeight);

      fill(255);
      textSize(18);
      textAlign(CENTER, CENTER);

      if (img === img2) {
        text("*Το έργο με τίτλο “Η Κέρκυρα με το φρούριο ” είναι", width / 2, height / 2);
        text("δημιούργημα του Πίτζε Φραντσέσκο. ", width / 2, height / 1.8)
        text("*Το έργο είναι φτιαγμένο με λάδι σε μουσαμά", width / 2, height / 1.6)
        text("και έχει μέγεθος 47 x 67 εκ.   ", width / 2, height / 1.5);
      } else {
        text("*Το έργο με τίτλο “Παιδιά στην Αυλή” είναι", width / 2, height / 2);
        text("δημιούργημα του Πάνου Αραβαντινού. ", width / 2, height / 1.8)
        text("*Το έργο είναι φτιαγμένο με λάδι σε καμβά", width / 2, height / 1.6)
        text("και έχει μέγεθος 26 x 28,5 εκ.   ", width / 2, height / 1.5);
      }
    }
  } else {
    background(0);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("“Παιδιά στην Αυλή”,“Κέρκυρα με το Φρούριο” ", width / 2, height / 2 - 30);
    text("“Καλώς ήρθατε! Πατήστε το κουμπί 'ΕΙΣΟΔΟΣ' για να ξεκινήσετε την προβολή των έργων”", width / 2, height / 4);
  }
}
function playSound() {
  if (img === img2) {
    if (sound.isPlaying()) {
      sound.stop();
    } else {
      sound.play();
    }
  } else {
    if (sound2.isPlaying()) {
      sound2.stop();
    } else {
      sound2.play();
    }
  }
}

function switchImage() {
  if (img === img2) {
    img = loadImage('Children.jpg');
  } else {
    img = img2;
  }
}
