/**
 * TP CLOSURE
 * Comme en POO:
 *    -
 *
 */

/********* Debut sans closures *************/

/**
 * Retourne la somme des n premiers nombres entiers
 * @param {*} n
 * @returns
 */
function sommeNpremiersNombres(n) {
  return Array.from(Array(n + 1).keys()).reduce((prev, next) => prev + next);
}

/**
 * Retourne le factoriel du nombre envoyé en param
 * @param {*} n
 * @returns
 */
function factoriel(n) {
  const numbers = Array.from(Array(n + 1).keys());
  numbers.shift();
  return numbers.reduce((prev, next) => prev * next);
}

// l'appel
console.log(sommeNpremiersNombres(5));
console.log(factoriel(5));

/********* Fin sans closures *************/

/********* Debut avec closures *************/

function operationSurUnNombre(n) {
  return {
    sommeNpremiersNombresDansClosure: function () {
      return Array.from(Array(n + 1).keys()).reduce(
        (prev, next) => prev + next
      );
    },
    factorielDansCLosure: function () {
      const numbers = Array.from(Array(n + 1).keys());
      numbers.shift();
      return numbers.reduce((prev, next) => prev * next);
    },
  };
}

// L'appel
const operationSur5 = operationSurUnNombre(5);
console.log(operationSur5.sommeNpremiersNombresDansClosure());
console.log(operationSur5.factorielDansCLosure());

/********* Fin avec closures *************/
