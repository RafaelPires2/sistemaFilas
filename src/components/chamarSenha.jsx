export const persons = [
   
    { senha: '001', name: 'Rafael Pires da Silva', sala: '10' },
    { senha: '002', name: 'Luiz da Silva Santos', sala: '15' },
    { senha: '003', name: 'Gabriel Josias', sala: '17' },
    { senha: '004', name: 'Ana da Silva', sala: '7' },
    { senha: '005', name: 'Juliana dos Santos Braga', sala: '3' }
    
]

let senhaAtual = -1

export function chamarSenha(){

  let newSenha = senhaAtual + 1
   if(newSenha < person.length){
    senhaAtual = newSenha 
}

console.log(persons[senhaAtual])
}