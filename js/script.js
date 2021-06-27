function ageInDays(){
    var birthyear= prompt("what year were you born... Good friend");
    var ageInDayss= (2018 - birthyear)*365;
    var h1= document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('container-2').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();

}

