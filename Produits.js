let produit = {
	img_url:
		"https://fastly.picsum.photos/id/208/200/300.jpg?hmac=MnC8s7YHdlG81eGO_ZmX1VbjLAYw-jIYEe74kkfvuwc",
	categorie: "femme",
	prix: 100.0,
	ancien_prix: 200.0,
	titre: "Birkin",
	description: "Un jolie sac un peu surcote",
};

let produits = [
	{
		img_url:
			"https://fastly.picsum.photos/id/208/200/300.jpg?hmac=MnC8s7YHdlG81eGO_ZmX1VbjLAYw-jIYEe74kkfvuwc",

		categorie: "femme",
		prix: 100.0,
		ancien_prix: 200.0,
		titre: "Birkin",
		description: "Un jolie sac un peu surcote",
	},
	{
		img_url: "",
		categorie: "homme",
		prix: 90,
		ancien_prix: 100,
		titre: "Jordan",
		description: "Une paire de chaussure de sport",
	},
	{
		img_url: "google.com",
		categorie: "enfant",
		prix: 80,
		ancien_prix: 100,
		titre: "Air Max",
		description: "Une paire de chaussure de sport",
	},
	{
		img_url: "google.com",
		categorie: "homme",
		prix: 70,
		ancien_prix: 100,
		titre: "Air Max",
		description: "Une paire de chaussure de sport",
	},
	{
		img_url: "google.com",
		categorie: "homme",
		prix: -12,
		ancien_prix: 100,
		titre: "Erreur",
		description: "Une paire de chaussure de sport",
	},
	{
		img_url: "google.com",
		categorie: "homme",
		prix: "wjfg;w",
		ancien_prix: 100,
		titre: "Erreur",
		description: "Une paire de chaussure de sport",
	},
	{
		img_url: "google.com",
		categorie: "",
		prix: 12,
		ancien_prix: 100,
		titre: "Erreur",
		description: "Une paire de chaussure de sport",
	},
	{
		img_url: "google.com",
		categorie: 90,
		prix: 12,
		ancien_prix: 100,
		titre: "Erreur",
		description: "Une paire de chaussure de sport",
	},
	{
		img_url: "google.com",
		categorie: 90,
		prix: 12,
		ancien_prix: 100,
		titre: "",
		description: "Erreur",
	},
];

let produits_sans_erreur = clean_products_from_error(produits);

console.log(produits_sans_erreur);

function clean_products_from_error(array_of_product) {
	let result;
	// clean from categorie error
	result = array_of_product.filter((product) => {
		if (product.categorie == "" || typeof product.categorie != "string") {
			return false;
		} else {
			return true;
		}
	});
	// clean from prix error
	result = result.filter((product) => {
		if (typeof product.prix != "number" || product.prix <= 0) {
			return false;
		} else {
			return true;
		}
	});
	// clean from titre error

	result = result.filter((product) => {
		if (typeof product.titre != "string" || product.titre == "") {
			return false;
		} else {
			return true;
		}
	});

	return result;
}

//function clean_products_from_error(array_of_product) {
//	function is_categorie_error(product) {
//		const condition_erreur = [
//			product.categorie == "",
//			typeof product.categorie != "string",
//		];

//		return condition_erreur.includes(true);
//	}

//	function is_prix_error(product) {
//		const condition_erreur = [
//			typeof product.prix != "number",
//			product.prix <= 0,
//		];

//		return condition_erreur.includes(true);
//	}

//	function is_titre_error(product) {
//		const condition_erreur = [
//			typeof product.titre != "string",
//			product.titre == "",
//		];

//		return condition_erreur.includes(true);
//	}
//	function is_old_price_error(product) {
//		const condition_erreur = [
//			typeof product.ancien_prix != "number",
//			product.ancien_prix <= 0,
//			product.ancien_prix < product.prix,
//		];

//		return condition_erreur.includes(true);
//	}

//	let result;
//	// clean from categorie error
//	result = array_of_product.filter((product) => {
//		const condition_erreur = [
//			is_old_price_error(product),
//			is_categorie_error(product),
//			is_prix_error(product),
//			is_titre_error(product),
//		];

//		return !condition_erreur.includes(true);
//	});

//	return result;
//}
