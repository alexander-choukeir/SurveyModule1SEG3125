	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		healthy: true,
		weightLoss: true,
		price: 1.99
	},
	{
		name: "Bread",
		lactoseIntolerant: true,
		nutFree: true,
		organic: false,
		healthy: true,
		weightLoss: false,
		price: 2.35
	},
	{
		name: "Salmon",
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		healthy: true,
		weightLoss: true,
		price: 10.00
	},
	{
		name: "Mozzarella cheese",
		lactoseIntolerant: false,
		nutFree: true,
		organic: true,
		healthy: false,
		weightLoss: false,
		price: 5.99
	},
	{
		name: "Lean ground beef",
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		healthy: true,
		weightLoss: true,
		price: 12.99
	},
	{
		name: "Chocolate hazelnut spread",
		lactoseIntolerant: false,
		nutFree: false,
		organic: true,
		healthy: false,
		weightLoss: false,
		price: 5.99
	},
	{
		name: "Chocolate milk",
		lactoseIntolerant: false,
		nutFree: true,
		organic: false,
		healthy: false,
		weightLoss: false,
		price: 6.00
	},
	{
		name: "Eggs",
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		healthy: true,
		weightLoss: true,
		price: 6.00
	},
	{
		name: "Salami",
		lactoseIntolerant: true,
		nutFree: true,
		organic: false,
		healthy: false,
		weightLoss: false,
		price: 4.00
	},
	{
		name: "Yogurt",
		lactoseIntolerant: false,
		nutFree: true,
		organic: true,
		healthy: true,
		weightLoss: false,
		price: 3.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
			product_names.push(prods[i]);
		}

			
	let lactoseFree = document.getElementById("lactoseIntolerant");
	
	let Nut = document.getElementById("nutFree");

	let isOrganic = document.getElementById("organic");

	let isHealthy = document.getElementById("healthy");

	let goodForWeightLoss = document.getElementById("weightLoss");


	if(lactoseFree.checked) {
		product_names = product_names.filter(product_names => product_names.lactoseIntolerant);

	}

	if(Nut.checked) {
		product_names = product_names.filter(product_names => product_names.nutFree);

	}

	if(isOrganic.checked) {
		product_names = product_names.filter(product_names => product_names.organic);

	}

	if(isHealthy.checked) {
		product_names = product_names.filter(product_names => product_names.healthy);

	}

	if(goodForWeightLoss.checked) {
		product_names = product_names.filter(product_names => product_names.weightLoss);

	}

			
	// Sort the array by price so that the items show in price order

	product_names.sort(function(a, b){
		return a.price - b.price
	});
	

	
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
