/**
 * Created by Administrator on 2016/11/16.
 */
// Create an object of javascript

// var obj = {
//
//     "name":"cunshanggang",
//     "gender":"male",
//     "age":"23"
// };

// var obj = {
//
//     'name':'cunshanggang',
//     'gender':'male',
//     'age':'23'
// };


var obj = {
    $:function (id) {
        'use strict';
        if (typeof(id) == 'string') {
            return document.getElementById(id).value;
            // alert(document.getElementById(id));
        }
    },

    csg:function (id) {
        alert(id);
        return document.getElementById(id).className = "myDiv";
    }
};

// alert(obj.name);
// alert("aaaaaa");
// var id = document.getElementById("myP").value;
// alert(obj.$(id));
// alert(obj.$('myP'));
// console.log(obj.$("myP"));
// alert(obj.$("myP"));
// console.log("obj");
// obj.aa();
// document.getElementById("aa").className = "myDiv";
obj.csg('csg');