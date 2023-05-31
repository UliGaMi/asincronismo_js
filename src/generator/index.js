function* gen(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;

}

const g = gen();
console.log(g.next().value);// Retorna: 1
console.log(g.next().value);// Retorna: 2
console.log(g.next().value);// Retorna: 3
console.log(g.next().value);// Retorna: 4
console.log(g.next().value);// Retorna: undefined

function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['oscar', 'ulises', 'anna']);
console.log(it.next());// Devuelve: { value: 'oscar', done: false }
console.log(it.next());// Devuelve: { value: 'ulises', done: false }
console.log(it.next());// Devuelve: { value: 'anna', done: false }
console.log(it.next());// Devuelve: { value: undefined, done: true }
console.log(it.next());// Devuelve: { value: undefined, done: true }