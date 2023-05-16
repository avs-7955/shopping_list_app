import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js"
import {
	getDatabase,
	ref,
	push,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js"

// https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js
const appSettings = {
	databaseURL:
		"https://realtime-database-eee9e-default-rtdb.asia-southeast1.firebasedatabase.app/",
}

// connect js to Firebase
const app = initializeApp(appSettings)
const database = getDatabase(app)
// creating location in database to save our data
const shoppingListInDB = ref(database, "shopping_list")

// add item when clicked on the button
const item_text = document.getElementById("input_field")
const add_btn = document.getElementById("add_btn")
const shopping_list = document.getElementById("shopping_list")

add_btn.addEventListener("click", function () {
	let input_item = item_text.value
	clearItemText()
	push(shoppingListInDB, input_item)
	appendItemToShoppingList(input_item)
	console.log(input_item)
})

function clearItemText() {
	item_text.value = "" // to clear input field after submit
}

function appendItemToShoppingList(item) {
	shopping_list.innerHTML += `<li> ${item} </li>`
}
