let produkter = JSON.parse(localStorage.getItem("produkter")) || [];

function spara() {
  localStorage.setItem("produkter", JSON.stringify(produkter));
}

function uppdateraLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  produkter.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = `${p.namn} - ${p.pris} kr`;
    li.onclick = () => { produkter.splice(i, 1); spara(); uppdateraLista(); };
    lista.appendChild(li);
  });
}

function läggTill() {
  const namn = document.getElementById("namn").value;
  const pris = document.getElementById("pris").value;
const kategori = document.getElementById("kategori").value;
  if (namn && pris) {
    produkter.push({ namn, pris, kategori });
    spara();
    uppdateraLista();
  }
}

uppdateraLista();
li.textContent = `${p.namn} - ${p.pris} kr (${p.kategori})`;