const N_ROWS = 10;
const N_COLUMNS = 10;

$(document).ready(function (){

    
    for (var i = 0; i < N_ROWS; i++) {

        $("#mytab").append("<tr></tr>");

        
        for (var y = 0; y < N_COLUMNS; y++) {
            $("#mytab").append("<td class='cels'></td>");
            //$("#mytab").append("&nbsp;");
        }
        

    }

});