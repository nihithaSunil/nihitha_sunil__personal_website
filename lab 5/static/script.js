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



// findTheBanana(L1);
// findTheBanana(L2);


function greetingFunc() {
    let d = new Date(); 
    let h = d.getHours(); 
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
  
    let greetingElement = document.getElementById("greeting");
    if (greetingElement) {
      greetingElement.innerHTML = greetingMessage;
    }
  }

  window.addEventListener("load", greetingFunc);

  function addYear() {
    const year = new Date().getFullYear();
    document.getElementById("copyYear").textContent += year; 
    console.log("hello")
}

function showList() {
  const list = document.getElementById("hiddenList");
  list.style.display = "block";

  const button = document.getElementById("showButton");
  button.style.display = "none";
}
$("#readMore").click(function() {
  $("#shortIntro").hide(); 
  $("#longIntro").show(); 
  $("#readMore").hide(); 
  $("#readLess").show(); 
  });

$("#readLess").click(function() {
  $("#longIntro").hide(); 
  $("#shortIntro").show(); 
  $("#readLess").hide(); 
  $("#readMore").show(); 
});


function validateForm(event) {
    event.preventDefault();

    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var commentField = document.getElementById("comment");
    
    if (!nameField.checkValidity()) {
        alert("Please fill out your name.");
        nameField.focus();
        return false;
    }
    
    if (!emailField.checkValidity()) {
        alert("Please enter a valid email address.");
        emailField.focus();
        return false;
    }
    
    if (!commentField.checkValidity()) {
        alert("Please fill out your message.");
        commentField.focus();
        return false;
    }
    alert("Form submitted successfully!");
    
 
    return true;
  }