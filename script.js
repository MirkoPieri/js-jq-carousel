// Ricreare il carousel (o slideshow se preferite) visto a lezione.
// Quindi frecce  nex prev + pallini.


$( document ).ready(function() {

$(".next").click(nextimg)

  function nextimg() {
    var imgcount = $(".image img.active");
    imgcount.removeClass("active");
    if (imgcount.hasClass("last")) {
      $(".first").addClass("active");
    } else {
      $(imgcount).next("img").addClass("active");
    }
  }

  $(".prev").click(previmg)

    function previmg() {
      var imgcount = $(".image img.active");
      imgcount.removeClass("active");
      if (imgcount.hasClass("first")) {
        $(".last").addClass("active");
      } else {
        $(imgcount).prev("img").addClass("active");
      }
    }








});
