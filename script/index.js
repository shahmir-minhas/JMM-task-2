window.onclick = function(event) {

  console.log(event.target);
  if (!event.target.matches('.abc')) {

      var openDropdown = document.getElementById("myDropdown");
        openDropdown.style.display = "none";
  }
}
function myFunction() {
  document.getElementById("myDropdown").style.display = "block";
  console.log("block");
}


var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.getElementById("login-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-model")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
