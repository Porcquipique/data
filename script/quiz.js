/* Initialisation Question  */
let Q1s = document.getElementsByName("Q1");
let Q2s = document.getElementsByName("Q2");

/* Alerte */
function check() {
  let value = "";
  let value2 = "";
  for (const Q1 of Q1s) {
    if (Q1.checked) {
      value = Q1.value;
      break;
    }
  }
  if (value === "") {
    alert("Remplir une des réponses de la question 1");
  } else {
    for (const Q2 of Q2s) {
      if (Q2.checked) {
        value2 = Q2.value;
        break;
      }
    }
    if (value2 === "") {
      alert("Remplir une des réponses à la question 2");
    } else {
      testQ(value, value2);
    }
  }
}

function testQ(value, value2) {
  const result = document.querySelector("span");
  console.log(result);
  let i = 0;
  if (value == 3) {
    i += 1;
  }
  if (value2 == 2) {
    i += 1;
  }
  result.textContent = "Note = " + i;
}