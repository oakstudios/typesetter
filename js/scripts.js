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

});