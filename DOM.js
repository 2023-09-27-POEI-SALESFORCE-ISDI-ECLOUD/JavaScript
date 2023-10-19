let first_paragraph = document.getElementById("monprempara");
let first_paragraph_query = document.querySelectorAll("#monprempara");

let bleus = document.getElementsByClassName("bleu");
let bleus_query = document.querySelectorAll(".bleu");

//console.log(first_paragraph);
//console.log(first_paragraph_query);

//console.log(bleus);

bleus_query.forEach((bleu) => {
	bleu.setAttribute("class", "rouge");
});

let liens = document.querySelectorAll("a");
liens.forEach((lien) => {
	let monhref = lien.getAttribute("href");
	monhref = `https://${monhref}/coucou`;
	//monhref = "https://" + monhref + "/coucou";
	lien.setAttribute("href", monhref);
	lien.removeAttribute("href", monhref);
});

let parent = document.querySelector("#madeuxdiv");

let enfant = document.createElement("div");
enfant.setAttribute("id", "petitenfant");

parent.appendChild(enfant);

let monpremierdiv = document.querySelector("h1 + div");
let autrediv = monpremierdiv.querySelector("div");
//monpremierdiv.removeChild(autrediv);

autrediv.classList.remove("bleu");
autrediv.classList.contains("bleu");
autrediv.classList.toggle("bleu");
autrediv.classList.add("rouge");

let button = document.querySelector("#btn");

button.addEventListener("click", (event) => {
	//alert("coucou");
	document.querySelector("body").classList.toggle("rouge");
});
