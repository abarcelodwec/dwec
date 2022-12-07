const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'EugeA', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

const ovejasFiltradas = [];



function contarOvejas(ovejas){

  for (let i = 0; i < ovejas.length; i++) {
    
    if(!((ovejas[i].color==='rojo') && ((ovejas[i].name.toUpperCase().includes("A")) && ((ovejas[i].name.toUpperCase().includes("N")))))){
      
      ovejasFiltradas.push(ovejas[i]);
      
      
    };
    
  }

  return ovejasFiltradas;
}







console.log(contarOvejas(ovejas));
