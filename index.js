const item_text = document.getElementById("input_field")
const add_btn = document.getElementById("add_btn")

add_btn.addEventListener("click", function () {
	let input_item = item_text.value
	console.log(input_item)
})
