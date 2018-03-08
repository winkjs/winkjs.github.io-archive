document.addEventListener("DOMContentLoaded", function(event) {
  $( '#packages-menu' ).on( 'click', function () {
    $( '#packages-list').toggle();
    $( this ).toggleClass( 'selected' );
  } );
} );
