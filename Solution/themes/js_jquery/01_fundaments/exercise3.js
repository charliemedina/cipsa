function validate() {
    var x = document.getElementById("days").value; 
    x.open = false;
    if(x == "saturday" || x == "sunday") {
        var x = document.getElementById("myDialog1");
        x.open = true;
    }
    else {
        var x = document.getElementById("myDialog2");
        x.open = true;
    }
    setTimeout(function(){
        window.location.reload(1);
     }, 1000);
}