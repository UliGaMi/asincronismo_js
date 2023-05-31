function suma(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1,num2);
}

console.log(calc(1,2,suma));

setTimeout(function (){
    console.log('Hola JavaScript')
}, 2000);

function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Ulises'); //Los argumentos del callback que queramos utilizar los ponemos al final de los argumentos de la función setTimeout que recibe el callback.
