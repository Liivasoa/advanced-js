/******** Debut sans closure *********/
function getMax(tab) {
  return Math.max(...tab);
}

function getMin(tab) {
  return Math.min(...tab);
}

function order(tab) {
  return tab.sort();
}

function somme(tab) {
  return tab.reduce((a, b) => a + b);
}

// Pour appeller ces fonctions, on est obligé de mettre à chaque fois le tableau en arguments alors qu'il ne change jamais
const tab = [7, 8, 5, 2, 11, 1, 4];
console.log(getMax(tab));
console.log(getMin(tab));
console.log(order(tab));
console.log(somme(tab));

/******** Fin sans closure *********/

/******** Debut avec closure *********/
function arrayOperation(tab) {
  return {
    getMax: function () {
      return Math.max(...tab);
    },
    getMin: function () {
      return Math.min(...tab);
    },
    order: function () {
      return tab.sort();
    },
    somme: function () {
      return tab.reduce((a, b) => a + b);
    },
  };
}

// L'appel
arrayOp = arrayOperation([7, 8, 5, 2, 11, 1, 4]);
console.log(arrayOp.getMax());
console.log(arrayOp.getMin());
console.log(arrayOp.order());
console.log(arrayOp.tab);
console.log(arrayOp.somme());
