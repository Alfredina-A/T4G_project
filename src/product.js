// // alert("hi");

// function stylep1c() {
//     // alert(`Black and white semi-formal dress`);
//     // p1c.style.display ="none";
//     let imgp1c = document.querySelector(".imgp1c");
//     imgp1c.innerHTML = `<p class="black">Black and 
//     white semi-formal dresses</p>`

// }
// function returnstylep1c(){
//     imgp1c.innerHTML = `<img id="p1c" src="../images/black and white midi dress.jpeg" alt="">`

// }

// let imgp1c = document.querySelector(".imgp1c");
// imgp1c.addEventListener("mouseenter", stylep1c);
// imgp1c.addEventListener("click", returnstylep1c);

// Function to replace the div content with just a paragraph
function stylep1c() {
    let imgp1c = document.querySelector(".imgp1c");
    imgp1c.innerHTML = `<div class="black"><p>Black and white semi-formal dresses</p></div>`;

}

// Function to restore the original content of the div
function returnstylep1c() {
    let imgp1c = document.querySelector(".imgp1c");
    imgp1c.innerHTML = `
        <img id="p1c" src="../images/black and white midi dress.jpeg" alt="">
        <p>Black casual wear</p>`;
}

// Select the div and add event listeners
let imgp1c = document.querySelector(".imgp1c");
imgp1c.addEventListener("mouseenter", stylep1c);
imgp1c.addEventListener("mouseleave", returnstylep1c);

// Function to replace the div content with just a paragraph
function stylep2c() {
    let imgp2c = document.querySelector(".imgp2c");
    imgp2c.innerHTML = `<p class="black">Print casual dress</p>`;
}

// Function to restore the original content of the div
function returnstylep2c() {
    let imgp2c = document.querySelector(".imgp2c");
    imgp2c.innerHTML = `
        <img id="p2c" src="../images/bottom line.jpeg" alt="">
      `;
}

// Select the div and add event listeners
let imgp2c = document.querySelector(".imgp2c");
imgp2c.addEventListener("mouseenter", stylep2c);
imgp2c.addEventListener("mouseleave", returnstylep2c);


// Function to replace the div content with just a paragraph
function stylep3c() {
    let imgp3c = document.querySelector(".imgp3c");
    imgp3c.innerHTML = `<p class="black">Pink spaghetti  casual dress</p>`;
}

// Function to restore the original content of the div
function returnstylep3c() {
    let imgp3c = document.querySelector(".imgp3c");
    imgp3c.innerHTML = `
        <img id="p3c" src="../images/girl dress.jpeg" alt="">
      `;
}

// Select the div and add event listeners
let imgp3c = document.querySelector(".imgp3c");
imgp3c.addEventListener("mouseenter", stylep3c);
imgp3c.addEventListener("mouseleave", returnstylep3c);


// Function to replace the div content with just a paragraph
function stylep4c() {
    let imgp4c = document.querySelector(".imgp4c");
    imgp4c.innerHTML = `<p class="black">black evening gown</p>`;
}

// Function to restore the original content of the div
function returnstylep4c() {
    let imgp4c = document.querySelector(".imgp4c");
    imgp4c.innerHTML = `
        <img id="p4c" src="../images/OIP.jpeg" alt="">`;
}

// Select the div and add event listeners
let imgp4c = document.querySelector(".imgp4c");
imgp4c.addEventListener("mouseenter", stylep4c);
imgp4c.addEventListener("mouseleave", returnstylep4c);


function stylehide() {
    // hide-all.innerHTML = "view less";
    
}
// Open button functionality
let openButton = document.querySelector(".open");
let hideSection = document.querySelector("section.all.hide-all"); // This is the section to show/hide
let closeButton = document.querySelector(".close");

// Function to show the hidden images and switch buttons
function openImage() {
    hideSection.style.display = "block"; // Show the section with 'new' images
    closeButton.style.display = "block"; // Show 'View Less' button
    openButton.style.display = "none"; // Hide 'More' button
}

// Function to hide the images and switch buttons back
function closeImage() {
    hideSection.style.display = "none"; // Hide the section with 'new' images
    closeButton.style.display = "none"; // Hide 'View Less' button
    openButton.style.display = "block"; // Show 'More' button again
}

// Add event listeners to the buttons
openButton.addEventListener("click", openImage);
closeButton.addEventListener("click", closeImage);
