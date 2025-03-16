$(document).ready(function(){
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 50) {
            $('.gototop').fadeIn();
        } else {
            $('.gototop').fadeOut();
        }
    });
});	

function Gototop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}