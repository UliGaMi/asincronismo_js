const promise = new Promise(function(resolve,reject){
    resolve('hey!');
});

const cows = 11;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve('We have enought cows');
    } else{
        reject('There is no enought cows');
    }
});

countCows.then((result) => {
    return result + '!';
})
.then(result2 => console.log(result2))
.catch((error)=> console.log(error))
.finally(()=>console.log('Finally'));
//El primer then toma como argumento el resolve de la promesa
//puedo concatenar .then las veces que quiera, un then siguiente toma como argumento la respuesta del then anterior
//Una promesa debe contener código asíncrono dentro
