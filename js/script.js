function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
}

list.addEventListener('onClick', classList.add = 'checked');
