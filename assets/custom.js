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
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel").mount();
});
let counter = 1;
setInterval(function () {
  // document.getElementById("image-carousel" + counter).checked = true;
  // counter++;
  // if (counter > 3) {
  //   counter = 1;
  // }
  new Splide(".splide").mount().play();
}, 50000000000000000);
splide.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  data.list.classList.add("splide__pagination--custom");

  // `items` contains all dot items
  data.items.forEach(function (item) {
    item.button.textContent = String(item.page + 1);
  });
});

splide.mount();
// //slider script
// let counter = 1;
// setInterval(function () {
//   counter++;
//   document.getElementById("radio" + counter).checked = true;
//   if (counter == 3) {
//     counter = 0;
//   }
// }, 5000);
