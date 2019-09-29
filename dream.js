function addElements() {
  const body = document.getElementsByTagName("BODY");
  const section = document.createElement("SECTION");
  const h1 = document.createElement("H1");
  const div = document.createElement("DIV");
  const titleText = document.createTextNode("Acme Grid Make");

  document.title = titleText.nodeValue;

  const input1 = '<input id="$w" type="text" value="" name= "w">';
  const input2 = '<input id="$h" type="text" value="" name= "h">';
  const submit = '<button id="$fetch_data">Make Grid</button>';

  // build html structure
  body[0].appendChild(section).className += "section_Holder"; // appends section and adds class to the section element
  section.appendChild(h1).innerText = titleText.nodeValue;
  section.appendChild(div).className += "form_holder";

  for (let i = 0; i < 1; i++) {
    div.innerHTML += input1;
    div.innerHTML += input2;
    div.innerHTML += submit;
  }

  const gridDiv = document.querySelector("div.form_holder");
  const elParent = gridDiv.parentNode;
  const gridSection = document.createElement("DIV");
  elParent.insertBefore(gridSection, gridDiv.nextSibling);
}
addElements();

function fetchValue() {
  let w = document.getElementById("$w");
  let h = document.getElementById("$h");

  let button = document.getElementById("$fetch_data");
  // console.log(button)
  button.addEventListener("click", function() {
    let boxes = document.querySelector("div.form_holder + div");

    if (Number(w.value) && Number(h.value)) {
      document.getElementById("$fetch_data").disabled = true;
      document.getElementById("$w").disabled = true;
      document.getElementById("$h").disabled = true;
      let wNumber = Number(w.value);
      let hNumber = Number(h.value);
      let count = 0;
      console.log("we are numbers: " + wNumber + ", " + hNumber);
      for (let i = 1; i <= wNumber; i++) {
        boxes.innerHTML += `<div id="${i}" class="parent"></div>`;
        for (let ii = 1; ii <= wNumber; ii++) {
          let insideBox = document.getElementById(`${i}`);
          insideBox.innerHTML += `<div data-id="${ii}" class="boxLink"></div>`;
        }
      }
      getPosition();
    } else {
      alert("only numbers!!");
    }
  });
}

fetchValue();

function getPosition() {
  let arrayOfboxes = document.getElementsByClassName("boxLink");
  [...arrayOfboxes].forEach(el => {
    el.addEventListener("click", function(e) {
      e.stopPropagation;
      if (e.target.classList.contains("blue")) {
        e.target.classList.remove("blue");
        e.target.innerHTML = ``;
      } else {
        // console.dir(e.target.classList)
        e.target.classList.add("blue");
        let r = e.target.attributes[0].value;
        //  console.log(r);
        let c = e.target.parentElement.attributes[0].value;
        const result = `${c} | ${r}`;
        e.target.innerHTML = result;
        console.log(result);
      }
    });
  });
}
