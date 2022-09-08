const list = document.querySelector("#list")
const input = document.querySelector("#input")
let plist = list.querySelectorAll("p")
window.onclick = () => {
    input.focus()
}


const items = [
    {
        name: "cat",
        result: ["Dog", "Rat", "Bat"]
    },
    {
        name: "helo",
        result: ["Hello", "Help", "Hell"]
    },
    {
        name: "heldp",
        result: ["Help", "Held", "Hello"]
    }
]


input.addEventListener("keydown", (e) => {
    const item = items.find(elem => elem.name.toLowerCase().trim() === e.target.value.toLowerCase().trim())
    if (item && e.keyCode != 8 ) {
        if (e.keyCode == 32) {
            for (let i = 0; i < plist.length; i++) {
                plist[i].innerHTML = item.result[i] 
            }
            list.classList.remove("isHidden")
        }
    } else {
        list.classList.add("isHidden")
    }

    const pselected = [...plist].find(elem => elem.classList.contains('selected'))
    if (!pselected) {
        plist[0].classList.add('selected')
    }

    if (e.keyCode == 40) {
        //let plist = list.querySelectorAll("p")
        let i = 0
        for (let elem of [...plist]) {
            if (elem.classList.contains('selected')) {
                elem.classList.remove('selected')
                if (i === plist.length - 1) {
                    plist[0].classList.add('selected')
                    return i++
                } else {
                    plist[i + 1].classList.add('selected')
                    return i++
                }
            }
            i++
        }
    }

    if (e.keyCode == 38) {
        //let plist = list.querySelectorAll("p")
        for (let i = 0; i < plist.length; i++) {
            if (plist[i].classList.contains('selected')) {
                plist[i].classList.remove('selected')
                if (i === 0) {
                    return plist[plist.length - 1].classList.add('selected')
                }
                return plist[i - 1].classList.add('selected')
            }
        }
    }

    if (e.keyCode == 13) {
        const pselected = [...plist].find(elem => elem.classList.contains('selected'))
        if (pselected) {
            input.value = pselected.innerHTML
        }
        list.classList.add("isHidden")

    }
})

for (let elem of plist) {
    elem.addEventListener('click', (e) => {
        input.value = e.target.innerHTML
        for (let item of plist) {
            item.classList.remove('selected')
        }
        e.target.classList.add('selected')
        list.classList.add('isHidden')
    })
}


