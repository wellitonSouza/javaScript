let num = [5,8,9,3];

console.log(`Nosso vetor é o ${num}`);
console.log(`Quantidade de elementos: ${num.length}`);
num[4]=6;
console.log(`Nosso vetor é o ${num}`);
num.push(7);
console.log(`Nosso vetor é o ${num}`);
console.log(`Quantidade de elementos: ${num.length}`);
console.log(`Sort= ${num.sort()}`);
console.log('ForEach');
num.forEach(element => {
   console.log(element) ;
});

console.log(`For in`);
for(let pos in num){
    console.log(num[pos]);
}

console.log(`Map`);
num.map(value =>{
    console.log(value);
});
/** Realizar busca */
console.log(`Busca o index com o valor procurado 7 = ${num.indexOf(7)}`);
console.log(`Caso não encontre ele retorna -1! exe busca 10 ${num.indexOf(10)}`);