const makeBigger = () => {
   // alert('make bigger!');
   var h1 = document.querySelector("h1");
   var h1_font_size = window.getComputedStyle(h1, null).getPropertyValue('font-size');
   var h1_size = parseFloat(h1_font_size);
   document.querySelector("h1").style.fontSize = h1_size + 4 + "px";

   var text = document.querySelector(".content");
   var text_font_size = window.getComputedStyle(text, null).getPropertyValue('font-size');
   var text_size = parseFloat(text_font_size);
   document.querySelector(".content").style.fontSize = text_size + 4 + "px";
};

const makeSmaller = () => {
   // alert('make smaller!');
   var h1 = document.querySelector("h1");
   var h1_font_size = window.getComputedStyle(h1, null).getPropertyValue('font-size');
   var h1_size = parseFloat(h1_font_size);
   document.querySelector("h1").style.fontSize = h1_size - 4 + "px";

   var text = document.querySelector(".content");
   var text_font_size = window.getComputedStyle(text, null).getPropertyValue('font-size');
   var text_size = parseFloat(text_font_size);
   document.querySelector(".content").style.fontSize = text_size - 4 + "px";
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
