// --------------- FOR HOME PAGE ---------------
// Zoom in the organizational chart image
function ZoomOrgChartImage() {
  $(".org-chart-container").zoom({
    url: $(this).attr('src'),
    callback: function(){
      ($(this).attr('src')) ? $(this).addClass("zoomin-image") : $(this).removeClass("zoomin-image");
    }
  });
}

function checkResolution() {
  // Resolution width >= 576px
  if ($(window).innerWidth() > 575) {
    $(".img-background").attr('src', "/assets/images/nix-daily-background2.png");
    $(".org-chart-header").removeClass("h2");
  }
  // Resolution width < 576px
  else if ($(window).innerWidth() <= 575) {
      $(".img-background").attr('src', "/assets/images/nix-daily-background2-mobile.png");
      $(".org-chart-header").addClass("h2");
  }

  // Resolution width >= 767px
  if ($(window).innerWidth() > 767) {
    $('.org-chart-container').trigger('zoom.destroy');
  }
  // Resolution width < 767px
  else if ($(window).innerWidth() <= 767) {
      ZoomOrgChartImage();
  }
}

$(window).resize(function() {
  checkResolution();
});

$(document).ready(function() {
  checkResolution();
  $('[data-toggle="tooltip"]').tooltip();  
});

