let products = document.getElementById("products");
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/mariusco777-a11y/Marketplace';

xhr.open('GET', url +'/products');
xhr.responseType = 'json';
xhr.onload = function(){
	let products1 = xhr.response
	products.innerHTML = null;
	products1.forEach(p =>{
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.classList.add('product');
		pElem.innerHTML = `
			<h2 class="product-name">${p.name}</h2>
			<img  class="product-photo" src ="${p.photo_url}">
			<p class="product-price"><b>Price: </b>${p.price}</p>
			<p class="product-description"><b>Description: </b>${p.description}</p>
			<a href="userProfile.html?id=${p.author_id}">Author Profile</a>
			<button class="btn">Buy</button>
			`;
			products.append(pElem);
	});
}
xhr.send();