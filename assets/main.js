// Tree View
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

// Search option
function search() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("getSearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("getIndex");
  li = ul.getElementsByTagName("p");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Random shit
console.log("What are you doing here?")