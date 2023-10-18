function somme(a, b) {
	return a + b;
}

//let result = somme(1, 2);

//console.log(result);

// Fonction qui permet de calculer la moyenne d'un tableau de nombre
// renvoie la moyenne
// Affichage de la moyenne en dehors de la fonction

let mafonction = function (tableau_de_nombre) {
	let somme = 0;

	for (let i = 0; i < tableau_de_nombre.length; i++) {
		let nombre = tableau_de_nombre[i];
		somme += nombre;
	}

	let moyenne = somme / tableau_de_nombre.length;

	return moyenne;
};

//let notes = [10, 12, 15, 18, 20];

//let moyenne_notes = mafonction(notes);

//console.log(moyenne_notes);

mafonction = function (tableau_de_nombre) {
	// somme
	let somme = 0;
	for (let i = 0; i < tableau_de_nombre.length; i++) {
		let nombre = tableau_de_nombre[i];
		somme += nombre;
	}
	return somme;
};

//let sommes_notes = mafonction(notes);

//console.log(sommes_notes);

let prenoms = ["Elias", "Alison", "Alexandre", "Riad"];

//for (let i = 0; i < prenoms.length; i++) {
//	let prenom = prenoms[i];
//	console.log(prenom);
//}
//function afficher_un_prenom(valeur_courante) {
//	console.log(valeur_courante);
//}
//prenoms.forEach(afficher_un_prenom);
//prenoms.forEach(function (valeur_courante) {
//	valeur_courante = valeur_courante + " Clone";
//	console.log(valeur_courante);
//});

//console.log(prenoms);

let nouveau_tableau = prenoms.filter(function (prenom) {
	if (prenom.startsWith("A") == true) {
		return true;
	} else {
		return false;
	}
});

//console.log(nouveau_tableau);

// tableau de nombre ===> tableau de nombre avec seulement les nombres pairs

//let tableau_de_nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//function is_pair(nombre) {
//	if (nombre % 2 == 0) {
//		return true;
//	} else {
//		return false;
//	}
//}

//let tableau_de_nombre_pair = tableau_de_nombres.filter(is_pair);

//console.log(tableau_de_nombre_pair);

//let tableau_de_nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//let tableau_de_nombre_pair = tableau_de_nombres.filter(function (nombre) {
//	if (nombre % 2 == 0) {
//		return true;
//	} else {
//		return false;
//	}
//});

//console.log(tableau_de_nombre_pair);

//setInterval(function () {
//	console.log("Hello world");
//}, 2000);

function somme_de_tableau_de_nombre(tableau_de_nombre) {
	let somme = 0;

	for (let i = 0; i < tableau_de_nombre.length; i++) {
		let nombre = tableau_de_nombre[i];
		somme += nombre;
	}

	//tableau_de_nombre.forEach(function (nombre) {
	//	somme += nombre;
	//});

	return somme;
}

function nb_element_de_tableau_de_nombre(tableau_de_nombre) {
	return tableau_de_nombre.length;
}

function calcul_super_moyenne(tableau_de_nombre) {
	// recuperer la somme
	let somme = somme_de_tableau_de_nombre(tableau_de_nombre);
	// recuperer le nb element
	let nb_element = nb_element_de_tableau_de_nombre(tableau_de_nombre);
	// calculer la moyenne
	let moyenne = somme / nb_element;

	return moyenne;
}

//let notes = [10, 12, 15, 18, 20];

//let moyenne_notes = calcul_super_moyenne(notes);

//console.log(moyenne_notes);

let products = [
	{
		titre: "Produit 1",
		prix: 10,
		categorie: "homme",
	},
	{
		titre: "Produit 2",
		prix: 9,
		categorie: "femme",
	},
	{
		titre: "Produit 3",
		prix: 7,
		categorie: "enfant",
	},
	{
		titre: "Produit 4",
		prix: 15,
		categorie: "femme",
	},
	{
		titre: "Produit 5",
		prix: 11,
		categorie: "homme",
	},
	{
		titre: "Produit 6",
		prix: 2,
		categorie: "femme",
	},
];

let categorie_choisi = "femme";

let produits_femme = products.filter((product) => {
	if (product.categorie == categorie_choisi) {
		return true;
	} else {
		return false;
	}
});

//console.log(produits_femme);

//function comparer_prix(a, b) {
//	if (a.prix < b.prix) {
//		return -1;
//	} else if (a.prix > b.prix) {
//		return 1;
//	} else {
//		return 0;
//	}
//}

//produits_femme.sort(comparer_prix);

produits_femme.sort((a, b) => {
	if (a.prix < b.prix) {
		return -1;
	} else if (a.prix > b.prix) {
		return 1;
	} else {
		return 0;
	}
});

//console.log(produits_femme);
//function checkAge(age) {
//	if (isNaN(age)) {
//		throw "Not a number";
//	}
//	if (age < 18) {
//		throw "Under 18";
//	}
//}

//try {
//	checkAge("abc");
//} catch (error) {
//	console.error("Caught error:", error);
//}

//try {
//	checkAge(17);
//} catch (error) {
//	console.error("Caught error:", error);
//}
