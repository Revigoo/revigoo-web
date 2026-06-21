// ===================================
// REVIGOO PREMIUM ANIMATIONS
// ===================================

// Elements

const scooter = document.querySelector(".scooter");
const bike = document.querySelector(".bike");



const beamLeft = document.querySelector(".beam-left");
const beamRight = document.querySelector(".beam-right");


// ===================================
// MOUSE PARALLAX EFFECT
// ===================================

document.addEventListener("mousemove", (e) => {

    const x =
    (window.innerWidth / 2 - e.clientX) / 40;

    const y =
    (window.innerHeight / 2 - e.clientY) / 40;


    // Scooter movement

    scooter.style.transform =
    `translate(${x/4}px, ${y/8}px)`;


    // Bike movement

    bike.style.transform =
    `translate(${-x/4}px, ${-y/8}px)`;


    


    // Light Beam Movement

    beamLeft.style.transform =
    `translate(${x}px, ${y}px)`;

    beamRight.style.transform =
    `translate(${-x}px, ${-y}px)`;

});


// ===================================
// RING PULSE EFFECT
// ===================================

setInterval(() => {

    document.querySelectorAll(
    ".platform-blue,.platform-orange"
    ).forEach(ring => {

        ring.classList.add("pulse");

        setTimeout(() => {
            ring.classList.remove("pulse");
        }, 1000);

    });

}, 2500);


// ===================================
// FLOATING VEHICLES
// ===================================

let floatOffset = 0;

setInterval(() => {

    floatOffset += 0.05;

    const floatY =
    Math.sin(floatOffset) * 8;

    scooter.style.marginTop =
    floatY + "px";

    bike.style.marginTop =
    (-floatY) + "px";

}, 30);

window.addEventListener("load", () => {

    const blobs = document.querySelectorAll(".blob");

    blobs.forEach(blob => {
        animateBlob(blob);
    });

    function animateBlob(blob){

    const x =
    Math.random() * window.innerWidth * 2 -
    window.innerWidth;

    const y =
    Math.random() * window.innerHeight * 2 -
    window.innerHeight;

    const scale =
    0.8 + Math.random() * 1.2;

    blob.style.transition =
    `${8 + Math.random()*5}s ease-in-out`;

    blob.style.transform =
    `translate(${x}px, ${y}px)
     scale(${scale})`;

    setTimeout(() => {
        animateBlob(blob);
    }, 1000);

}

});
window.addEventListener("load", () => {

    const blobs = document.querySelectorAll(".blob");

    console.log("Blobs found:", blobs.length);

});
