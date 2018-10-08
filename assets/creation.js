//panning on mousemove in section
var elements = document.querySelectorAll("article.creation figure");
for (var i = 0; i < elements.length; i++) {

  elements[i].addEventListener("mousemove", function(e) {
    sW = this.offsetWidth;
    sH = this.offsetHeight;

    x = (200 * e.offsetX / sW) //- 100;
    x-= x*.05 + 50
    y = (150 * e.offsetY / sH) //- 150;
    y-= y*.05 + 25

    cursor = `${x}% ${y}%`;
    // console.log(cursor);
    this.querySelector('img').style.objectPosition = cursor;
  });

  elements[i].addEventListener("mouseleave", function(e) {
    this.querySelector('img').style.objectPosition = "50% 50%";

  });
}
