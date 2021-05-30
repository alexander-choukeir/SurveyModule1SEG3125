	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Bread",
		lactoseIntolerant: true,
		nutFree: true,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "Mozzarella cheese",
		lactoseIntolerant: false,
		nutFree: true,
		organic: true,
		price: 5.99
	},
	{
		name: "Ground beef",
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		price: 12.99
	},
	{
		name: "Chocolate hazelnut spread",
		lactoseIntolerant: false,
		nutFree: false,
		organic: true,
		price: 5.99
	},
	{
		name: "Chocolate milk",
		lactoseIntolerant: false,
		nutFree: true,
		organic: false,
		price: 6.00
	},
	{
		name: "Eggs",
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		price: 6.00
	},
	{
		name: "Salami",
		lactoseIntolerant: true,
		nutFree: true,
		organic: false,
		price: 4.00
	},
	{
		name: "Yogurt",
		lactoseIntolerant: false,
		nutFree: true,
		organic: true,
		price: 3.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactoseIntolerant") && (prods[i].lactoseIntolerant == true)){
			product_names.push({
				name: prods[i].name,
				price: prods[i].price,
			});
		}
		else if ((restriction == "nutFree") && (prods[i].nutFree == true)){
			product_names.push({
				name: prods[i].name,
				price: prods[i].price,
			});
		}
		else if ((restriction == "organic") && (prods[i].organic == true)){
			product_names.push({
				name: prods[i].name,
				price: prods[i].price,
			});
		}
		else if (restriction == "None"){
			product_names.push({
				name: prods[i].name,
				price: prods[i].price,
			});
		}

		// Sort the array by price so that the items show in price order

		product_names.sort(function(a, b){
			return a.price - b.price
		});
	}
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
