//a)
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
const copyPokemon1 = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Água'
}

//b)
pokemon1.ataques = []


//c)
const objAtaque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}
pokemon1.ataques.push(objAtaque)


//d)
copyPokemon1.ataques = objAtaque


//e)
pokemon1.ataques.push([{
    nome: 'Folha Navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100
}])


//f)
copyPokemon1.ataques = {
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água',
    precisao: 100
}

console.log(pokemon1)
console.log(copyPokemon1)