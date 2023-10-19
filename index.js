////////// Création d'une variable
////////let etiquette = "valeur";

////////// changer la valeur de la variable

////////etiquette = "nouvelle valeur";

////////// AFFICHAGE
////////console.log(etiquette);

////////// Stocker son prenom dans une variable
////////let prenom = "Rayan";
////////// afficher son prenom dans la console
////////console.log(prenom);

////////// Creer une variable age
////////let age;
////////// Stocker 18
////////age = 18;
////////// Stocker le vrai age
////////age = 23;
////////// Afficher l'age dans la console
////////console.log(age);

////////// Creer une constante prenom

////////const prenom2 = "Rayan";

//////////Essayer de changer la valeur de la constante
//////////prenom2 = "Rayan2";

////////// Afficher la constante prenom dans la console
////////console.log(prenom2);

//////let nom = "Boussaid";
//////let prenom = "Mohamed";
//////let age = 25;

//////let ageplustard = age - 2;

//////age = 30;
////////let nomprenom = nom + " " + prenom + " " + age;

////////console.log(nomprenom);

//////console.log(ageplustard);

//////console.log(ageplustard / 2);

//////let div_entiere = Math.floor(ageplustard / 2);
//////console.log(div_entiere);
//////console.log(ageplustard % 2);

//////let nomtest = "Elias";
//////let message = "Hello, ${nomtest}!";

//////console.log(message);
//////let age = 20;
//////console.log(age == 18);
//////console.log(age); // Big Nono

//////let age = 25;
//////if (age >= 50) {
//////	console.log("Majeur");
//////} else {
//////	console.log("Mineur");
//////}

////let age = 23;
////if (age >= 18) {
////	console.log("Majeur");
////} else if (age < 18) {
////	console.log("Mineur");
////} else {
////	console.log("Senior");
////}

////// Majeur < Mineur < Senior

////// Regarder si Senior
////if (age >= 50) {
////	console.log("Senior");
////}
////// Regarder si Majeur
////else if (age >= 18) {
////	if (age <= 25) {
////		console.log("Junior");
////	} else {
////		console.log("Majeur");
////	}
////}
////// Regarder sinon Mineur
////else {
////	console.log("Mineur");
////}

////if (age >= 18 && age <= 25) {
////	console.log("Salut toi");
////}

////if (age == 20 || age == 30) {
////	console.log("Tu es sur une dizaine");
////}

//// Donner les derniers chiffres age
//// age % 10 ===> 3
//// Senior Majeur Mineur
//// on le sait deja

////let age = 15;
////let dernierdigit = age % 10;
////let categorie = "Mineur";

////if (age >= 50) {
////	categorie = "Senior";
////} else if (age >= 18) {
////	categorie = "Majeur";
////}

////console.log(
////	`Vous etes ${categorie} et le dernier chiffre est : ${dernierdigit}`
////);

//// Creer un escalier
///*
//Commencer par un #
//puis on en rajoute 1 par ligne
//effectuer cette operation N fois
//*/

////let nbdeligne = 0;
////const N = 10;
////let ligne_a_ecrire = "#";
////// Tant que nb ligne < N
////// Alors
//////     Ecrire ligne_a_ecrire
//////     Rajouter # a ligne_a_ecrire
////while (nbdeligne < N) {
////	console.log(ligne_a_ecrire);
////	//nbdeligne = nbdeligne + 1;
////	nbdeligne++;
////	// ligne_a_ecrire = ligne_a_ecrire + " #"
////	ligne_a_ecrire += " #";
////}

////const N = 10;
////let ligne_a_ecrire = "#";
////// Tant que nb ligne < N
////// Alors
//////     Ecrire ligne_a_ecrire
//////     Rajouter # a ligne_a_ecrire
////console.log("FOR");
////for (let nb_de_ligne = 0; nb_de_ligne < N; nb_de_ligne++) {
////	console.log(ligne_a_ecrire);
////	ligne_a_ecrire = ligne_a_ecrire + " #";
////}
////console.log("End FOR");

////let nbdeligne = 0;
////const N = 10;
////let ligne_a_ecrire = "#";
////// Tant que nb ligne < N
////// Alors
//////     tant que nb # < nbligne a ecrire
//////          Alors
//////                Ecrire #
//////     Rajouter # a ligne_a_ecrire
////while (nbdeligne < N) {
////	console.log(ligne_a_ecrire);
////	//nbdeligne = nbdeligne + 1;
////	nbdeligne++;
////	// ligne_a_ecrire = ligne_a_ecrire + " #"
////	ligne_a_ecrire += " #";
////}

//// tant que nbligne < N
//// Alors
////              ligne vide =>
////					remplis avec z * (nbligne + 1) #
////				ecrire la ligne
////
//// 		incrementer nbligne

//const N = 10;
//const Z = 4;
//let nbligne = 0;

//while (nbligne < N) {
//	let ligne_a_afficher = "";
//	let nbdehastag = 0;

//	while (nbdehastag < Z * (nbligne + 1)) {
//		if (nbdehastag % Z == 0) {
//			ligne_a_afficher += " ";
//		}
//		ligne_a_afficher += "#";
//		nbdehastag++;
//	}

//	console.log(ligne_a_afficher);
//	nbligne++;
//}

//// au lieu d'ecrire la logique a plat on veux boucler
//console.log("#####");
//console.log("#####");
//console.log("#####");
//console.log("#####");
//console.log("#####");

//for (let nbdeligne = 0; nbdeligne < 5; nbdeligne++) {
//	console.log("#####");
//}
