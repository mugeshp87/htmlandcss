function web() {
  var worker = new Worker("Count.js");
  worker.onmessage = function (event) {
    alert("Number of iteration is :" + event.data + " Iterations");
  };
}
function normal() {
  alert("hi what's up");
}
