// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// tab carocel js
var splides = document.querySelectorAll(".cirtus_meet_tabs_22");
if (splides.length) {
  for (var i = 0; i < splides.length; i++) {
    var splideElement = splides[i];
    var splideDefaultOptions = {
      rewind: true,
      type: "slide",
      autoplay: false,
      rewindSpeed: 500,
      speed: 500,
      pauseOnHover: true,
      perPage: 6,
      perMove: 2,
      width: "100%",
      breakpoints: {
        375: {
          perPage: 1,
        },
        576: {
          perPage: 2,
        },
        991: {
          perPage: 3,
        },
        992: {
          perPage: 3,
        },
        1024: {
          perPage: 6,
        },
        1200: {
          perPage: 6,
        },
      },
    };

    new Splide(splideElement, splideDefaultOptions).mount();
  }
}
/* ************************************************************************************** */

// product tab js
//for tab switcher
filterBestDog("citrusd_drydog");

function filterBestDog(c) {
  var x, i;
  x = document.getElementsByClassName("citrusfilterMeetDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClassBestDog(x[i], "citrusTabshow");
    if (x[i].className.indexOf(c) > -1) AddClassDogBest(x[i], "citrusTabshow");
  }
}

function AddClassDogBest(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClassBestDog(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var dogBtnContainer = document.getElementById("citrusMeetTabId");
var dogBestbtns = dogBtnContainer.getElementsByClassName(
  "citrus_meet_tab_item"
);
for (var i = 0; i < dogBestbtns.length; i++) {
  dogBestbtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName(
      "citrus_meet_tab_item_active"
    );
    current[0].className = current[0].className.replace(
      " citrus_meet_tab_item_active",
      ""
    );
    this.className += " citrus_meet_tab_item_active";
  });
}
//for Dog best seller tab switcher

//slider script

new Splide(".splide", {
  type: "loop",
  interval: 5000,
  autoplay: true,
}).mount();
