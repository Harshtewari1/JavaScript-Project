


var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")
var modeBtn = document.querySelector(".mode-btn")


var btn = 0
modeBtn.addEventListener("click", function () {
    if (btn == 0) {

       modeBtn.innerHTML = "Light Mode";
       main.style.backgroundColor = "black"
       main.style.color = "white"
    btn++
   }else{
        modeBtn.innerHTML = "Dark Mode";
        main.style.backgroundColor = "#bcd6f0"
        main.style.color = "black"
    btn--
   }
})

main.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";

})


const images = [
    {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Beach"
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1664361480872-6416aab14696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fHww",
        alt: "Mountains"
    },
    {
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww",
        alt: "Desert"
    },
    {
        url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Forest"
    },
    {
        url: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "City"
    }
];



let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    const imageElement = document.querySelector('.hero-right-img');
    imageElement.src = images[currentIndex].url;
    imageElement.alt = images[currentIndex].alt;
}, 3000);





