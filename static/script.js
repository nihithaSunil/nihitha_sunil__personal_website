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

// function showList() {
//   const list = document.getElementById("hiddenList");
//   list.style.display = "block";

//   const button = document.getElementById("showButton");
//   button.style.display = "none";
// }
// $("#readMore").click(function() {
//   $("#shortIntro").hide(); 
//   $("#longIntro").show(); 
//   $("#readMore").hide(); 
//   $("#readLess").show(); 
//   });

// $("#readLess").click(function() {
//   $("#longIntro").hide(); 
//   $("#shortIntro").show(); 
//   $("#readLess").hide(); 
//   $("#readMore").show(); 
// });


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

  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => {
        document.getElementById("adviceText").innerText = data.slip.advice;
      })
      .catch(error => {
        document.getElementById("adviceText").innerText = "Oops! Something went wrong.";
      });
  }

  console.log(window.location);

  // if (let index = 0; index < array.length; index++){
  //   const element = array[index]
  // }
  listItems = document.getElementsByTagName('li');
  links = [document.getElementsByTagName('a')];
  console.log(listItems);
  console.log(links);

  links.forEach(
    function (){
      console.log(links);
    }
  )

  links.forEach(element => {
    element.addclasslist
  })
  
  // array.forEach(element => {

  // })

// function toggleNav() {
//   const navbar = document.getElementById("navbar");
//   if (navbar.className === "topnav") {
//     navbar.className += " responsive";
//   } else {
//     navbar.className = "topnav";
//   }
// }

// window.addEventListener("DOMContentLoaded", () => {
//   const currentPath = window.location.pathname.split("/").pop();
//   const links = document.querySelectorAll("nav a.nav-links");

//   links.forEach(link => {
//     if (link.getAttribute("href").includes(currentPath)) {
//       link.classList.add("active");
//     }
//   });
// });
  
const AllLinks = document.querySelectorAll('nav a');
AllLinks.forEach(
MyLink => {
if (MyLink.href.includes(window.location.pathname)) {
MyLink.classList.add("active");
}
}
)

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
}
  