let palavra = prompt("Digite a palavra."); 
let dica1 = prompt("Digite a primeira dica.");
let dica2 = prompt("Digite a segunda dica.");
let input = document.querySelector('input');
let chances= 6;
let vida = false;

const constroiJogo = (palavra) => {
  let  palavra2 = palavra.slice("");
  for (index in palavra2){
    let letra = document.createElement('span');
    letra.classList.add('letra');
    letra.classList.add('raid');
    letra.innerHTML = palavra2[index];
    let jogo = document.querySelector('.jogo').appendChild(letra);
    console.log(letra)
    
    
    
  }}
  
  constroiJogo(palavra);
  
  function verificar (){
    document.querySelector('input').value
    let letra = document.querySelector('input').value;
    let palavra2 =[];
    
    palavra = palavra.slice("");
    console.log(palavra);
    for(let i = 0; i < palavra.length; i++) {
      if (letra == palavra[i] ){
        alert('Possui essa letra!'); 
        console.log (palavra);
        
        vida = cry;


  
      }
      
      else {
        if (chances==0){
          alert("não tem mais chances!");
          break;
        }
        alert ("Nao possui essa letra");
        
      }
      
    }
    if (!vida){
      chances--;
      vida = false;


    }
      }


  
  