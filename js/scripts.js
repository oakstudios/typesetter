localStorage.clear();

$(document).ready(function() {
  // Grab the text from the JS constant file, and show it
  prepareAndShowFontLayout();

  var droptarget = document.getElementById("droptarget");

  droptarget.addEventListener('dragenter', dragEnter  , false);
  droptarget.addEventListener('dragover' , dragOver   , false);
  droptarget.addEventListener('dragleave', dragLeave  , false);
  droptarget.addEventListener('drop'     , drop       , false);

  /* Drop target event handlers */
  function dragEnter(event) {
    $("#droptarget").removeClass( "is-closed" ).addClass( "is-open" );
    $("#droptarget h1").text( "Drop it" );
  }

  function dragOver(event) {
    event.preventDefault();
    return false;
  }

  function dragLeave(event) {
    $("#droptarget").removeClass( "is-open" ).addClass( "is-closed" );
    $("#droptarget h1").text( "Drag font files here" )
  }

  function drop(event) {
    event.preventDefault();
    $("#droptarget").removeClass( "is-open" ).addClass( "is-closed" );
    $("#droptarget h1").text( "Drag font files here" )
    return false;
  }

  $("#menutoggle").click(function(event) {
    event.preventDefault();
    $("#menuwrapper").toggleClass("show-menu");
    $(this).toggleClass("show-menu");
    if ($(this).text() == 'info') {
      $(this).text("delete");
    } else {
      $(this).text("info");
    }
  });

  $(document).keydown(function(e) {
    var $activefont = $('#fonts .active'),
        $first = $('#fonts li:first'),
        $last = $('#fonts li:last');

    if ($(".textline").is(":not(:focus)")) {    

      switch(e.which) {
        case 37: // left
          if ($activefont.closest("li").prev("li").length) {
            TCNDDF.updateActiveFont($activefont.closest("li").prev()[0]);
          } else {
            TCNDDF.updateActiveFont($last[0]);
          }
        break;

        case 38: // up
          TCNDDF.updateActiveFont($first[0]);
        break;

        case 39: // right
          if ($activefont.closest("li").next("li").length) {
            TCNDDF.updateActiveFont($activefont.closest("li").next()[0]);
          } else {
            TCNDDF.updateActiveFont($first[0]);
          }
        break;

        case 40: // down
          TCNDDF.updateActiveFont($last[0]);
        break;

        default: return; // exit this handler for other keys
      }

      e.preventDefault(); // prevent the default action (scroll / move caret)
    }
  });

});