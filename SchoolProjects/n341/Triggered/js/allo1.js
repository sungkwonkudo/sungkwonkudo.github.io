/*
TITLE: allo1.js
AUTHOR: Sungkwon Kudo
PURPOSE: JQuery for Triggered exercise
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
26 Oct 2015: Date created. 
*/

$ (document).ready(function(){

$('#rr').on({
    mouseenter: function(){
        $(this).html("<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Because you touched me, I'm an 'a' tag now.</a>");
    },
    
    mouseleave: function(){
        $(this).html("<p>Don't touch me, I'm still just a 'p' tag ._. Make the window smaller, it's too open here.</p>")
    }
})

$(window).resize(function(){
    /*Code referenced from 
    http://stackoverflow.com/questions/2989950/auto-resize-text-font-size-when-resizing-window*/
    var fontsize = 16;
    var height = $(window).height();
    var percent = height/600 // 768 is the standard height where body font size is correct
    var size = Math.floor(fontsize*percent)-1;
    $('body').css("font-size", size);
})

}); // end (document).ready()