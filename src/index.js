const names = ['Carlos', 'Roberto', 'Roberto', 'Max', 'Carlos', undefined, null]

const uniqueNames = names.filter( ( elem, index, arr) => arr.indexOf( elem ) === index)

console.log( uniqueNames )