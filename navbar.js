function toggleNavbar() {
    var topnav = document.querySelector("#topnav");
    var icon = document.querySelector(".icon a");
    if (topnav.className === "topnav") {
      topnav.className += " responsive";
      icon.innerHTML = "X";
    } else {
      topnav.className = "topnav";
      icon.innerHTML = "&#9776;";
    }
}