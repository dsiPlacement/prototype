function initEditor(){
  tinymce.init({
      selector: '#message',
      width: '100%',
      height: 300,
      resize: false,
      theme: 'modern',
      plugins: [
          'advlist autolink lists link image charmap print preview hr anchor pagebreak', 'searchreplace wordcount visualblocks visualchars code fullscreen', 'insertdatetime nonbreaking save table contextmenu directionality', 'emoticons template paste textcolor colorpicker textpattern '
      ],
      toolbar1: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link',
      toolbar2: 'print preview| forecolor backcolor emoticons',
      image_advtab: true,
      content_css: ['//fonts.googleapis.com/css?family=Lato:300,300i,400,400i', '//www.tinymce.com/css/codepen.min.css']
  });
}
initEditor();
$(document).ready(function() {
    $('select.dropdown').dropdown();
    // $('#showCreateNotice').on('click', function() {
    //     $('#createNotice').modal('show');
    //
    // });
});
