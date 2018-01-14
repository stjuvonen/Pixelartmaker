var colorPicker = $('input#colorPicker'); // Select color input
var n = $('input#input_height');// Select height input
var m = $('input#input_width');// Select width input
var table = $('#pixel_canvas');

//adds rows and cells to table and creates event listeners
function makeGrid(n, m){
    var canvas ="";
    for (var row = 1; row <= n; ++row){
     table.append('<tr class="row"></tr>');
    }
    for (var cell = 1; cell <= m; ++cell){
	    $('.row').append('<td class="cell"></td>');
        $('.cell')
          .mousedown(function() {
            $( this ).css( 'background', colorPicker.val());
          });
    }
    return canvas;
}
 // When size is submitted by the user, call makeGrid() function
$('#sizePicker').submit( function () {
  table.find('*').remove();
  makeGrid(n.val(), m.val());
  event.preventDefault();
});

//Toggle grid
$('.toggle').on('click', function(){
  table.find('*').toggleClass('noBorder');
});

function drag () {
    let mouseIsDown = true;
    $('.cell')
        .on('mousemove', function() {
            if (mouseIsDown) {
                $(this).css('background', colorPicker.val());
            }
        })
        .on('mousedown', function() {
            event.preventDefault();
            mouseIsDown = true;
        })
        .on('mouseup', function() {
            mouseIsDown = false;
        });
    table.on('mouseleave', function() {
        mouseIsDown = false;
    });
}

table.on('mousedown', '.cell', drag);
