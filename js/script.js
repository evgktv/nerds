/*--------FEEDBACK--------*/

var feedback = document.querySelector(".button-feedback");
var popup = document.querySelector(".popup-feedback");
var close = popup.querySelector(".close-popup");
var overlay = document.querySelector(".overlay");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var form = popup.querySelector("form");

feedback.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-feedback-show");
    popup.classList.add("popup-feedback-animation");
    overlay.classList.add("overlay-show");
    login.focus();
});

form.addEventListener("submit", function(event) {
    if (!login.value || !email.value || !text.value) {
       event.preventDefault();
        popup.classList.remove("popup-feedback-animation");
        popup.classList.add("popup-error");
        setTimeout(function() {
                popup.classList.remove("popup-error");
                }, 500);
        }
});

close.addEventListener("click", function(event) {
    event.preventDefault ();
    popup.classList.remove("popup-feedback-show");
    popup.classList.remove("popup-feedback-animation");
    overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("popup-feedback-show")) {
          event.preventDefault ();
          popup.classList.remove("popup-feedback-show");
          popup.classList.remove("popup-feedback-animation");
          overlay.classList.remove("overlay-show");
        }
    }
});

/*--------MAP---------*/

var map1 = document.querySelector(".map");

function initialize () {
    var centerMap = new google.maps.LatLng(59.939870, 30.318591);
    var optionMap = {
        zoom: 16,
        center: centerMap,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mymap = new google.maps.Map(map1, optionMap);
    var image = {
         url: "img/map-logo.png",
         anchor: new google.maps.Point(51, 190)
    };

    var markPos = new google.maps.LatLng(59.938840, 30.323056);
    var marker = new google.maps.Marker({
        position: markPos,
        icon: image,
        map: mymap
      });
    }
    google.maps.event.addDomListener(window, "load", initialize);
    map1.classList.add("map-google");