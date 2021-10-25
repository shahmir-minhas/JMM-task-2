window.onclick = function(event) {

  if (!event.target.matches('.abc')) {

    var openDropdown = document.getElementById("myDropdown");
    openDropdown.style.display = "none";
  }

  if (event.target == modal) {
    modal.style.display = "none";
  }

  if (!event.target.matches('.search') && !event.target.matches('.unsplash-input')) {
    document.getElementById("search").style.display = "none";
  }
}

function myFunction() {
  document.getElementById("myDropdown").style.display = "block";
}

function showSearch() {
  document.getElementById("search").style.display = "block";
}


var modal = document.getElementById("loginModal");
var btn = document.getElementById("login-btn");
var span = document.getElementsByClassName("close-model")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
