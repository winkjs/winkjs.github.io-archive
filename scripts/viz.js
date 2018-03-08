document.addEventListener("DOMContentLoaded", function(event) {
  var nOfCols = 15, nOfRows = 10;

  var $table = $( '<table>' );
  var $bubbles = [];

  for ( var i = 0; i < nOfRows; i++ ) {
    var $row = $( '<tr>' );
    $bubbles[i] = [];
    for ( var j = 0; j < nOfCols; j++ ) {
      var $cell = $( '<td>' );
      var $bubble = $( '<div>' )
        .addClass( 'bubble' )
        .addClass( 'off' )
        .text( ' ' );
      $bubbles[i][j] = $bubble;
      $cell.append( $bubble );
      $row.append( $cell );

      if ( Math.random() < 0.05 ) $bubble.attr( 'class','bubble on' );
    }
    $table.append( $row );
  }

  function loop() {
    window.setTimeout ( function () {
      function alterBubble () {
        var i = Math.floor( Math.random() * nOfRows );
        var j = Math.floor( Math.random() * nOfCols );
        var $bubble = $bubbles[i][j];

        if ( $bubble.hasClass( 'off' ) ) {
          $bubble
            .addClass( 'on' )
            .removeClass( 'off' );
        } else if ( $bubble.hasClass( 'on' ) ) {
          $bubble
            .addClass( 'wink' )
            .removeClass( 'on' );
        } else if ( $bubble.hasClass( 'wink' ) ) {
          $bubble
            .removeClass( 'wink' )
            .addClass( 'off' );
        }
      }

      var iterations = Math.floor(Math.random() * 5);

      for ( var i = 0; i < iterations; i++ ) {
        alterBubble();
      }

      loop();
    }, 200)
  }

  loop();

  $( '#viz' ).append( $table );
});
