<<<<<<< HEAD
$(function(){
    var btn = $('#btn');
    var result = $('#result');
    
    btn.click(function(){
        var path = 'data.php';
        var data = {
            name: 'Vasiy',
            surname: 'Pupkin'
        };
        function myCallBack(data){
            result.html(data.nameServer + ' ' + data.surnameServer);
        };
        
        $.getJSON(path, data, myCallBack); 
    });
=======
$(function(){
    var btn = $('#btn');
    var result = $('#result');
    
    btn.click(function(){
        var path = 'data.php';
        var data = {
            name: 'Vasiy',
            surname: 'Pupkin'
        };
        function myCallBack(data){
            result.html(data.nameServer + ' ' + data.surnameServer);
        };
        
        $.getJSON(path, data, myCallBack); 
    });
>>>>>>> 97bff1b82a2f6506a747f2f5e80ab10ce79655d1
});