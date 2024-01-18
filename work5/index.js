let platno = document.getElementById("platno");
let kontext = platno.getContext("2d");
let stredKruhuX = 100;
let stredKruhuY = 100;

document.addEventListener("mousemove", (event) => {
    let rect = platno.getBoundingClientRect();
    stredKruhuX = event.clientX - rect.x;
    stredKruhuY = event.clientY - rect.y;
});


function nakresli() {
    kontext.clearRect(0, 0, platno.width, platno.height);
    kontext.beginPath();
    kontext.arc(stredKruhuX, stredKruhuY, 50, 0, 2*Math.PI);  
    kontext.fill(); 
    kontext.fillRect(50, 50, 100, 100);
    kontext.fillStyle = "green"
    requestAnimationFrame(nakresli);
}
nakresli();


