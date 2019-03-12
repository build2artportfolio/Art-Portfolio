// Event Listeners Section
// Mouseover Event Listener
// Changes ATag color to blue when moused-over.
const aTag = document.querySelectorAll('a');

for(let i = 0; i < aTag.length; i++){
    aTag[i].addEventListener('mouseover', function(){
        aTag[i].style.color = "blue";
    });
};

//Event 
let navPro = document.querySelector('nav');

navPro.addEventListener('click', function(){
    alert("Redirecting");
});

// DblClick Event Listener
// Image Nullifier, removes images on dbl click. 
// ****Might adjust to just get rid of "posts divs".****
const imgNone = document.querySelectorAll('img');

for(let i = 0; i < imgNone.length; i++){
    imgNone[i].addEventListener('dblclick', function(){
        imgNone[i].style.display = "none";
    });
};

// Scroll Event Listener
// creates a div in the form of a box, containing an ^, as you scroll.
// Clicking on Div will bump you back to the top.
let scrollY = 0; 
scrollY = window.scrollY;
    
let div = document.createElement('div');
document.body.append(div);
div.id = "boxie";
div.style.padding = "15px";
div.style.color = "black";
div.style.textAlign = "center";
div.style.background = "rgb(239, 250, 253)"
div.innerHTML = "Up";
div.style.borderRadius = '10px';
div.style.position = "fixed";
div.style.right = "100px";
div.style.bottom = " 100px";
div.style.border = "1px solid black";


window.addEventListener('scroll', function(e){
    scrollY = window.scrollY;
    if(scrollY > 100){
        document.getElementById('boxie').style.display = "block";

    } else if (scrollY < 100) {
        document.getElementById('boxie').style.display = "none";
    }
});

div.addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Other JavaScript Elements Here