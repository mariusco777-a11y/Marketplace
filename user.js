const urlParams = new URLSearchParams(window.location.search);
const id =urlParams.get('id');

let profile = document.getElementById('profile')
let url = 'https://my-json-server.typicode.com/mariusco777-a11y/Marketplace'
let userRequest = new XMLHttpRequest();

userRequest.open('GET', `${url}/users/${id}`);
userRequest.responseType = 'json';
userRequest.onload = function(){
	let user = userRequest.response;
	profile.innerHTML = `
		<h1>${user.name}</h1>
		<h2>${user.surname}</h2>
		<img src="${user.photo_url}" class="profile-img"
		<p>Balance: <b>${user.balance}</b></p>
		`
}
userRequest.send();