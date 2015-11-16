function randomImage() {
  var i = 0;

  setInterval(function() {
    i++;
    var find = document.querySelector("#bigBlue");
    console.log(i);

    if (i === 1) {
      find.classList.add("redIng");
    } else if (i === 2) {
      find.classList.remove("redIng");
      find.classList.add("oraIng");
    } else {
      find.classList.remove("oraIng");
      i = 0;
    }
  }, 5500);
}

randomImage();


