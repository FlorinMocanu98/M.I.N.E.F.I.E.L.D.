const N_ROWS = 10;
const N_COLUMNS = 10;
const N_BOMBS = 12;

/*  */
$(document).ready(function (){





    Start();

    $(".cells").on('click', function () {


        $(this).addClass("non_covered");

        id = $(this).attr('id');
        x = id.substr(0, id.indexOf("_"));
        //alert(x);
        y = id.substring(id.indexOf("_") + 1);
        //alert(y);
        //if ($("#" + x + "_" + y).hasClass('bomb'))
           // alert('partita persa');
    });


    


        // Handle timer
        var startTimestamp = moment().startOf("day");
        setInterval(function() {
            startTimestamp.add(1, 'second');
            $("#HH").text(startTimestamp.format('HH') + "  ");
            $("#MM").text(startTimestamp.format('mm') + " ");
            $("#SS").text(startTimestamp.format('ss'));
        }, 1000);
    
    
   

});
// Start game
function Start () {

    create_tab();
    set_bomb();
    $("td").addClass("cells").removeClass("bomb");
}

// Creation of the table with width*height chosen by default
function create_tab() {

    for (var i = 0; i < N_ROWS; i++) {

        $("#mytab").append("<tr></tr>");

        for (var y = 0; y < N_COLUMNS; y++) {
            $("#mytab").append("<td nowrap id = '"+i+"_"+y+"' class='cells'></td>");
        }
    }
}

// Add bomb class to 10 cells random
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

// Function to handle array with coordinates
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

