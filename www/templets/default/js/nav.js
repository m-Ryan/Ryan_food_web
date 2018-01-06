$('document').ready(function () {
   $('#rs-nav .rs-btn').click(function(e){
       if($('#rs-nav .rs-nav-menu').css('display') !='none'){
            $('#rs-nav .rs-nav-menu').slideUp()
            $('#rs-nav .rs-btn i').removeClass('icon-close').addClass('icon-bars');            
       }else{
            $('#rs-nav .rs-nav-menu').slideDown();
            $('#rs-nav .rs-btn i').removeClass('icon-bars').addClass('icon-close');
       }
   })
})