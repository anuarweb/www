<<<<<<< HEAD
$(function(){
    var btn = $('#btn');
    
    btn.click(function(){
        var path = 'server.js';
        function myCallBack(data){
            console.log('loaded script');
        };
        
        $.getScript(path, myCallBack); 
    });
=======
$(function(){
    var btn = $('#btn');
    
    btn.click(function(){
        var path = 'server.js';
        function myCallBack(data){
            console.log('loaded script');
        };
        
        $.getScript(path, myCallBack); 
    });
>>>>>>> 97bff1b82a2f6506a747f2f5e80ab10ce79655d1
});