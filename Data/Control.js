const N_ROWS = 10;
const N_COLUMNS = 10;
const N_BOMBS = 12;

/*  */
$(document).ready(function (){

    create_tab();
    set_bomb();





    $(".cels").on('click', function () {

        $(this).removeClass("cels").addClass("non_covered");
        id = $(this).attr('id');
        x = id.substr(0, id.indexOf("_"));
        //alert(x);
        y = id.substring(id.indexOf("_") + 1);
        //alert(y);
        //if ($("#" + x + "_" + y).hasClass('bomb'))
           // alert('partita persa');
    });


});


function create_tab() {

    for (var i = 0; i < N_ROWS; i++) {

        $("#mytab").append("<tr></tr>");

        for (var y = 0; y < N_COLUMNS; y++) {
            $("#mytab").append("<td id = '"+i+"_"+y+"' class='cels'></td>");
        }
    }
}
function set_bomb() {
    for (var i = 0; i < N_BOMBS; i++) {
        x = Math.floor((Math.random() * N_ROWS) );
        y = Math.floor((Math.random() * N_COLUMNS));
        if ($("#" + x + "_" + y).hasClass('bomb'))
            i--;
        else {
            $("#" + x + "_" + y).addClass("bomb");
            
        }
    }
}
function shuffle(array) {

    var currentIndex = array.length, temporaryValue, randomIndex;


    while (0 !== currentIndex) {


        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;


        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var myTimer = setInterval(function () {




}, 1000);