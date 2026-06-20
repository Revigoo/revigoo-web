// Floating Bike & Scooter

const scooter = document.querySelector(".scooter");
const bike = document.querySelector(".bike");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

   scooter.style.transform =
`translate(${x/4}px, ${y/8}px)`;

bike.style.transform =
`translate(${-x/4}px, ${-y/8}px)`;
});


// Floating Particles

for(let i=0;i<40;i++){

    const particle=document.createElement("div");

    particle.classList.add("particle");

    particle.style.left=Math.random()*100+"vw";
    particle.style.top=Math.random()*100+"vh";

    particle.style.animationDuration=
    (Math.random()*8+6)+"s";

    document.body.appendChild(particle);

}


// Ring Pulse Effect

setInterval(()=>{

    document.querySelectorAll(
    ".platform-blue,.platform-orange"
    ).forEach(ring=>{

        ring.classList.add("pulse");

        setTimeout(()=>{
            ring.classList.remove("pulse");
        },1000);

    });

},2500);