let livro = {
	nome:"Game Of Thrones",
	cod:1574,
	categoria:"Aventura e Ação"
};
for (const propriedade in livro) {
	console.log(`${propriedade}: ${livro[propriedade]}`);
}
/* Resultado:
nome: Game Of Thrones
cod: 1574
categoria: Aventura e Ação   */