window.onload =  function() {
    var ul = $$('ul.main-header-navbar-nav')[0];
    var li = document.createElement("li");
    var img = document.createElement("img");
    img.src = "/modules/chicken/images/chicken_head.png";
    img.style.cursor = "pointer";
    li.appendChild(img);
    li.onclick = function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', '/modules/chicken/sounds/chicken1.wav');
        audioElement.play();
    };
    ul.insertBefore(li, ul.firstChild);
};

