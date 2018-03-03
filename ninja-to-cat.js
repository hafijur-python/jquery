$(document).ready(function() {
        
    $('img').click(function(){
        var varNinja= $(this).attr('data-alt-src');
        var varCat= $(this).attr('src'); 
       $(this).attr("src",varNinja);
       $(this).attr("data-alt-src",varCat);      
    }); 
});