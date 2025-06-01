const items = []

function addItem(){
  const itemName = document.querySelector("#item").value

  const item = {
    name: itemName,
    checked: false
  }

  items.push(item)

  document.querySelector("#item").value = ""

  console.log(items)
}
