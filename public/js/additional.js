$(document).ready(function() {
    $('.item').on('click', function() {
        $('.item').removeClass('active');
        $(this).addClass('active');
    })
});
