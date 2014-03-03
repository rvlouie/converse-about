$(document).ready(function(){
    function setSize() { 
        var width = window.width
        var height = window.innerHeight
        $("#homepage").css({
        width: width + "px",
        height: height + "px"
        })
    }
    setSize()
    $(window).resize(setSize)
})