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

let produits_sans_erreur = clean_products_from_error(produits);
//let produits_homme = filter_products_homme(produits_sans_erreur);
//let produits_femme = filter_products_femme(produits_sans_erreur);
//let produits_enfant = filter_products_enfant(produits_sans_erreur);
let produits_homme = filter_products_by_category(produits_sans_erreur, "homme");
let produits_femme = filter_products_by_category(produits_sans_erreur, "femme");
let produits_enfant = filter_products_by_category(
	produits_sans_erreur,
	"enfant"
);

//function get_categories(products) {
//	let result = [];
//	products.forEach((product) => {
//		if (!result.includes(product.categorie)) {
//			result.push(product.categorie);
//		}
//	});
//	return result;
//}
//let categories = get_categories(produits_sans_erreur);

//let filtered_categories = {};

//categories.forEach((categorie) => {
//	filtered_categories[categorie] = filter_products_by_category(
//		produits_sans_erreur,
//		categorie
//	);
//});

function filter_products_by_category(products, category) {
	let result = products.filter((product) => {
		return product.categorie == category;
	});

	return result;
}

//function filter_products_homme(products) {
//	return filter_products_by_category(products, "homme");
//}

console.log(produits_homme);
console.log(produits_femme);
console.log(produits_enfant);

//console.log(categories.homme);

console.log(filtered_categories["homme"]);

//console.log("--------------------");

//for (let categorie in filtered_categories) {
//	console.log(`--------${categorie}-------`);
//	console.log(filtered_categories[categorie]);
//}

let products_promo = produits_sans_erreur.filter((product) => {
	return product.prix < product.ancien_prix;
});

let products_with_img = produits_sans_erreur.filter((product) => {
	return product.img_url != "";
});

let products_with_desc = produits_sans_erreur.filter((product) => {
	return product.description != "";
});
