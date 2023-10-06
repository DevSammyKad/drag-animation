Draggable.create(".send", {
  type: "x",
  bounds: ".controler",
  onDrag: checkOverlap,
});

function checkOverlap() {
  var send = document.querySelector(".send");
  var recive = document.querySelector(".recive");
  var sendRect = send.getBoundingClientRect();
  var reciveRect = recive.getBoundingClientRect();

  var normalVideo = document.querySelector(".normal-video");
  var lightVideo = document.querySelector(".light-video");

  if (sendRect.right > reciveRect.left && sendRect.left < reciveRect.right) {
    document.querySelector(".normal-video");
    normalVideo.style.opacity = "0";
    lightVideo.style.opacity = "1";
  } else {
    document.querySelector(".light-video");
    normalVideo.style.opacity = "1";
    lightVideo.style.opacity = "0";
  }
}
