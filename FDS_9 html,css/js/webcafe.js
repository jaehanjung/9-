$(document).ready(function() {
  var container = $(".container");
  var grid = $(".btn-grid");
  var video = $(".news-video");

  // 자동재생할때 볼륨을 0으로
  video.get(0).volume = 0.0;
  // 마우스를 비디오에 대면 실행
  video.on("mouseover focusin", function() {
    // video[0].play();
    this.volume = 1.0;
  });
  // 마우스를 비디오에서 띄면 멈춤
  video.on("mouseout focusout", function() {
    video[0].pause();
    // this.volume = 0;
  });

  grid.click(function() {
    container.toggleClass("is-act");
  });
});

// let container = document.querySelector('.container');
// let grid = document.querySelector('.btn-grid');

// grid.addEventListener('click', function(){
//   container.classList.toggle('is-act')
// });

// 제이쿼리
//

// var video = document.querySelector('.news-video');

// video.addEventListener('mouseover', function(){
//  console.log('avc')
// })
