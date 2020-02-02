let form = document.querySelector('.price-form');
let store = document.querySelector('.visited-store');
let filled_store = document.querySelector('.error-catcher');
let file_collector = document.querySelector('.file-form');

let stores = ["trader joe's", "trader joes", "smart and final prices", "y and y market"];

document.querySelector('.toggle').addEventListener('click', function(event) {
	if (stores.includes(store.value.toLowerCase())){
		toggle();
	}
    else{
    	form.style.display = "none";
    	file_collector.style.display = "none";
		filled_store.innerText = "You must enter a valid store name";
    }
});

document.querySelector('.scanner').addEventListener('click', function(event) {
	if (stores.includes(store.value.toLowerCase())){
		bring_up_scanner();
	}
    else{
    	form.style.display = "none";
    	file_collector.style.display = "none";
		filled_store.innerText = "You must enter a valid store name";
    }
});

function toggle() {
	filled_store.innerText = "";
	file_collector.style.display = "none";
  	if (form.style.display === "block") {
    	form.style.display = "none";
  	} else {
    	form.style.display = "block";
  	}
}

function bring_up_scanner() {
	filled_store.innerText = "";
	form.style.display = "none";
  	if (file_collector.style.display === "block") {
    	file_collector.style.display = "none";
  	} else {
    	file_collector.style.display = "block";
  	}
}

