/*---------------Les bébés contiennent 75% d'eau à la naissance. Une banane à 74% d'eau...........---------------*/

/* Initialisation Question  */
let Q1s = document.getElementsByName("Q1");
let Q2s = document.getElementsByName("Q2");
let Q3s = document.getElementsByName("Q3");
let Q4s = document.getElementsByName("Q4");
let Q5s = document.getElementsByName("Q5");

/* Alerte */
function check() {
  let value = "";
  let value2 = "";
  let value3 = "";
  let value4 = "";
  let value5 = "";
  for (Q1 of Q1s) {
    if (Q1.checked) {
      value = Q1.value;
      break;
    }
  }
  if (value === "") {
    alert("Remplir une des réponses de la question 1");
  } else {
    for (Q2 of Q2s) {
      if (Q2.checked) {
        value2 = Q2.value;
        break;
      }
    }
    if (value2 === "") {
      alert("Remplir une des réponses à la question 2");
    } else {
      for (Q3 of Q3s) {
        if (Q3.checked) {
          value3 = Q3.value;
          break;
        }
      }
      if (value3 === "") {
        alert("Remplir une des réponses à la question 3");
      } else {
        for (Q4 of Q4s) {
          if (Q4.checked) {
            value4 = Q4.value;
            break;
          }
        }
        if (value4 === "") {
          alert("Remplir une des réponses à la question 4");
        } else {
          for (Q5 of Q5s) {
            if (Q5.checked) {
              value5 = Q5.value;
              break;
            }
          }
          if (value5 === "") {
            alert("Remplir une des réponses à la question 5");
          } else {
            testQ(value, value2, value3, value4, value5);
          }

        }
      }
    }
  }
}

function testQ(value, value2, value3, value4, value5) {
  const result = document.querySelector("input+p");
  console.log(result);
  let i = 0;
  if (value == 3) {
    i += 1;
  }
  if (value2 == 2) {
    i += 1;
  }
  if (value3 == 1) {
    i += 1;
  }
  if (value4 == 2) {
    i += 1;
  }
  if (value5 == 3) {
    i += 1;
  }
  if (i > 4) {
    result.textContent = "AU TOP ! Votre note est de " + i;
  } else if (i > 3) {
    result.textContent = "Tres bien !  Votre note est de " + i;
  } else if (i > 2) {
    result.textContent = "Bien !  Votre note est de " + i;
  } else if (i > 1) {
    result.textContent = "Peut mieux faire ! Votre note est de  " + i;
  } else {
    result.textContent = "A revoir ! Votre note est de " + i;
  }
}