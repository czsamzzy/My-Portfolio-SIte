
$(function() {
  var $container = $(".gallery-group");

  $container.imagesLoaded(function() {
    $container.grid({
      itemSelector: ".test-popup-link"
    });
  });

  // Define App Namespace
  var popup = {
    // Initializer
    init: function() {
      popup.popupImage();
    },
    popupImage: function() {
      //Image Popup
      $(".gallery-group").magnificPopup({
        delegate: "a",
        type: "image",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
          enabled: true
        }
      });
    }
  };
  popup.init($);
});

$(".project-area .grid").isotope({
  // options
  itemSelector: ".element-item",
  layoutMode: "fitRows"
});

// init Isotope
var $grid = $(".project-area .grid").isotope({
  // options
});
// filter items on button click
$(".button-group").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

var btnContainer = document.getElementByClassName("button-group");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn-gallery");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//================================================
