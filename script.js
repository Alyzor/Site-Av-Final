var cbox = document.getElementById('menuToggle');
var container = document.getElementById('gCont');
var burg = document.querySelector('.burger');
container.addEventListener("click", function(){
  if (burg.classList.contains('burger-down')){
    burg.classList.remove("burger-down");
    burg.classList.add("burger-top");
    cbox.checked = false;
  }
})
cbox.addEventListener("change", function () {
  if (this.checked) {
    burg.classList.remove("burger-top");
    burg.classList.add("burger-down");
  } else {
    burg.classList.remove("burger-down");
    burg.classList.add("burger-top");
  }
});