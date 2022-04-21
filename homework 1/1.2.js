const content = document.getElementById("content")
const inp = document.getElementById("inp")

const someone = ()=>{

    const num  = inp.value
    const pad = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
    let ans = num.toString().replace(",","").replace( pad, ",");


    content.innerText = ans
    inp.value = ans
}

inp.addEventListener('keyup',someone)


