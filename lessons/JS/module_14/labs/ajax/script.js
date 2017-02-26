<<<<<<< HEAD
$(document).ready(function(){

    var text = $('#text');
    var result = $('#result');
    var register = $('#register');
    var notRegister = $('#notRegister');
    var search = [];
    var storage = [];
    var value = '';

    text.keyup(function(){
        value = $(this).val();

        $.ajax({
            url: '/labs/ajax/phones.json',
            dataType: 'json',
            success: function(data){
                searchFound(data, value);
            },
            error: function(err){
                console.log(err);
            }
        })
    });

    var searchFound = function(data, value, register){
        data = data || [{}];
        value = value || '';
        //register = register || false;

        var pattern;

        if(register){
            pattern = new RegExp(value, 'g');
        }
        else if(register == false){
            pattern = new RegExp(value, 'ig');
        }

        if(register == undefined){
            pattern = new RegExp(value, 'ig');
        }

        for(var i = 0; i < data.length; i++){
            if(pattern.exec(data[i].name)){
                search.push(data[i]);
            }
        }
        renderLists(search);

        if(register == undefined){
            storage = search;
            search = [];
        }
    };

    var renderLists = function(dataSearch){
        console.log(dataSearch);
        if(!dataSearch.length){
            result.text('Not found');
            return false;
        }

        result.empty();
        for(var i = 0; i < dataSearch.length; i++){
            var ul = $('<ul>');
            for(var key in dataSearch[i]){
                var li = $('<li>').text(dataSearch[i][key]);
                ul.append(li);
            }
            result.append(ul);
        }
    };

    register.change(function(){
        searchFound(storage, value, true);
    });

    notRegister.change(function(){
        searchFound(storage, value, false);
    });

=======
$(document).ready(function(){

    var text = $('#text');
    var result = $('#result');
    var register = $('#register');
    var notRegister = $('#notRegister');
    var search = [];
    var storage = [];
    var value = '';

    text.keyup(function(){
        value = $(this).val();

        $.ajax({
            url: '/labs/ajax/phones.json',
            dataType: 'json',
            success: function(data){
                searchFound(data, value);
            },
            error: function(err){
                console.log(err);
            }
        })
    });

    var searchFound = function(data, value, register){
        data = data || [{}];
        value = value || '';
        //register = register || false;

        var pattern;

        if(register){
            pattern = new RegExp(value, 'g');
        }
        else if(register == false){
            pattern = new RegExp(value, 'ig');
        }

        if(register == undefined){
            pattern = new RegExp(value, 'ig');
        }

        for(var i = 0; i < data.length; i++){
            if(pattern.exec(data[i].name)){
                search.push(data[i]);
            }
        }
        renderLists(search);

        if(register == undefined){
            storage = search;
            search = [];
        }
    };

    var renderLists = function(dataSearch){
        console.log(dataSearch);
        if(!dataSearch.length){
            result.text('Not found');
            return false;
        }

        result.empty();
        for(var i = 0; i < dataSearch.length; i++){
            var ul = $('<ul>');
            for(var key in dataSearch[i]){
                var li = $('<li>').text(dataSearch[i][key]);
                ul.append(li);
            }
            result.append(ul);
        }
    };

    register.change(function(){
        searchFound(storage, value, true);
    });

    notRegister.change(function(){
        searchFound(storage, value, false);
    });

>>>>>>> 97bff1b82a2f6506a747f2f5e80ab10ce79655d1
});