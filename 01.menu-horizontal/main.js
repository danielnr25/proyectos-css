const bMore = document.getElementById('bMore');
const links = document.getElementById('links');

bMore.addEventListener("click" , (e) =>{
   links.classList.toggle("collapsed");
});