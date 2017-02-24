<<<<<<< HEAD
$(function(){
    var btn = $('#btn');
    var result = $('#result');
    
    btn.click(function(){
        result.load('data.php', {id:18}, function(){
            console.log('success');
        });  
    });
=======
$(function(){
    var btn = $('#btn');
    var result = $('#result');
    
    btn.click(function(){
        result.load('data.php', {id:18}, function(){
            console.log('success');
        });  
    });
>>>>>>> 97bff1b82a2f6506a747f2f5e80ab10ce79655d1
})