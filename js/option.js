/**
 * Created by Administrator on 2016/11/29.
 */
// var op = ['Apple','pear','banana','pineapple'];
//     var op = [];
// op[0] = 'Apple';
// op[1] = 'pear';
// op[2] = 'banana';
// op[3] = 'pineapple';

    var op = ['Choose','Fruit','Animal'];

    var fruit = ['apple','pear','banana'];

    var animal = ['tiger','elephant','dog'];

var count = op.length;
// var os = getElementById('mySelect');
// alert(count);
var os = document.getElementById('mySelect');
var os1 = document.getElementById('myOption');
for (var i=0;i<op.length;i++) {
    var option = document.createElement('option');
    option.text = option.value = op[i];
    option.setAttribute('class','select_option');

    os.appendChild(option);

}

var val = document.getElementsByClassName('select_option').value;
var myP = document.getElementById('myP');
alert(myP.value);
alert(val);
if(op[i] == 'Fruit') {
    for (var j = 0; j < fruit.length; j++) {
        var option1 = document.createElement('option');
        option1.text = option.value = fruit[j];
        os1.appendChild(option1);
    }
}

if(op[i] == 'animal') {
    for(var k=0;k<animal.length;k++) {
        var option2 = document.createElement('option');
        option2.text = option.value = fruit[k];
        os1.appendChild(option2);
    }

}


