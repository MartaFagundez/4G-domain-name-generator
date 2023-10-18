const pronoun = ["el", "nuestro", "tu", "un"];
const adj = ["gran", "super", "famoso", "unico", "brillante", "nuevo"];
const noun = ["mapache", "bus", "profe", "genio", "caballero"];
const extensions = [".com", ".net", ".site"];

generateAllCombinations(pronoun, adj, noun, extensions);

function generateAllCombinations(arr1, arr2, arr3, arr4) {
  const res = [];
  for (const i of arr1) {
    for (const j of arr2) {
      for (const k of arr3) {
        for (const l of arr4) {
          res.push(`${i}${j}${k}${l}`);
        }
      }
    }
  }

  console.log(
    `Estas son las ${res.length} combinaciones posibles para tu dominio: `
  );
  for (const item of res) {
    console.log(item);
  }
}
