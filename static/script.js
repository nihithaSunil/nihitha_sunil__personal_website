if (window.location.href.includes("index.html")) {
    greetingFunc();
  }
let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2; 
    console.log(x3); 
  }

SumNPrint(x, y); 
SumNPrint(A, B);

if (C.length > z) {
    console.log(C); 
  } else if (C.length < z) {
    console.log(z);
  } else {
    console.log("good job!");
  }

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array) {
    array.forEach((item) => {
      if (item === "Banana") {
        alert("Banana found!");
      }
    });
  }



findTheBanana(L1);
findTheBanana(L2);


function greetingFunc() {
    let d = new Date(); // Create a Date object
    let h = d.getHours(); // Get the current hour (0-23)
    let greetingMessage = "";
  
    if (h < 12) {
      greetingMessage = "Good morning";
    } else if (h >= 12 && h < 18) {
      greetingMessage = "Good afternoon";
    } else if (h >= 18 && h < 20) {
      greetingMessage = "Good evening";
    } else {
      greetingMessage = "Good night!";
    }

    greetingMessage += ", I am Nihitha Sunil";
  
    // Update the inner HTML of the <h2> element
    let greetingElement = document.getElementById("greeting");
    if (greetingElement) {
      greetingElement.innerHTML = greetingMessage;
    }
  }

