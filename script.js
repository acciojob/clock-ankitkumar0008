//your JS code here. If required.
//your JS code here. If required.
let p = document.createElement('p')
p.setAttribute('id',"timer")

setInterval(()=>{
	let date = new Date()
	p.textContent =`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.toLocaleTimeString("en-US")}`
	document.body.appendChild(p)
},1000)