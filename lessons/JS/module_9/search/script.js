<<<<<<< HEAD
var search = document.getElementById('search');
var result = document.getElementById('result');
var register = document.getElementById('register');
var xhr = new XMLHttpRequest();
var results = [];

search.oninput = function(){
    result.innerHTML = '';
    var value = this.value;
    xhr.open("GET", "/lab/phones.json", true);
    xhr.send();

    xhr.onreadystatechange = function(){

        if(xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.responseText);
            getSearch(data, value);
        }

    };

};

var getSearch = function(data, value){
    data = data || [{}];
    value = value || '';
    results = [];
    var matches = new RegExp(value, 'ig');

    for(var i = 0; i < data.length; i++){
        var result = data[i].name.match(matches);
        if(result){
            results.push(data[i]);
            window.result.appendChild(renderLists(data[i]));
        }
    }
    console.log(results);
};

var renderLists = function(lists){
    var ul = document.createElement('ul');

    for(var key in lists){
        var li = document.createElement('li');
        li.innerText = key + ': ' + lists[key];
        ul.appendChild(li);
    }

    return ul;
};

register.onchange = function(){
    result.innerHTML = '';
    var resultRegister = [];
    if(this.checked){
        var reg = new RegExp(search.value, 'g');
        for(var i = 0; i < results.length; i++){
            var res = results[i].name.match(reg);
            if(res){
                resultRegister.push(results[i]);
                result.appendChild(renderLists(results[i]));
            }
        }
    }else{
        for(var i = 0; i < results.length; i++){
            result.appendChild(renderLists(results[i]));
        }
    }
=======
var search = document.getElementById('search');
var result = document.getElementById('result');
var register = document.getElementById('register');
var xhr = new XMLHttpRequest();
var results = [];

search.oninput = function(){
    result.innerHTML = '';
    var value = this.value;
    xhr.open("GET", "/lab/phones.json", true);
    xhr.send();

    xhr.onreadystatechange = function(){

        if(xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.responseText);
            getSearch(data, value);
        }

    };

};

var getSearch = function(data, value){
    data = data || [{}];
    value = value || '';
    results = [];
    var matches = new RegExp(value, 'ig');

    for(var i = 0; i < data.length; i++){
        var result = data[i].name.match(matches);
        if(result){
            results.push(data[i]);
            window.result.appendChild(renderLists(data[i]));
        }
    }
    console.log(results);
};

var renderLists = function(lists){
    var ul = document.createElement('ul');

    for(var key in lists){
        var li = document.createElement('li');
        li.innerText = key + ': ' + lists[key];
        ul.appendChild(li);
    }

    return ul;
};

register.onchange = function(){
    result.innerHTML = '';
    var resultRegister = [];
    if(this.checked){
        var reg = new RegExp(search.value, 'g');
        for(var i = 0; i < results.length; i++){
            var res = results[i].name.match(reg);
            if(res){
                resultRegister.push(results[i]);
                result.appendChild(renderLists(results[i]));
            }
        }
    }else{
        for(var i = 0; i < results.length; i++){
            result.appendChild(renderLists(results[i]));
        }
    }
>>>>>>> 97bff1b82a2f6506a747f2f5e80ab10ce79655d1
};