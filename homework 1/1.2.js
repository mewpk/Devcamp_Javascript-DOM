const content = document.getElementById("content")
const inp = document.getElementById("inp")

const someone = ()=>{

    const num  = inp.value
    let ans = num.toString().replace(",","").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    // var parts = num.toString().replace(",","").split(".");

    // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // let ans = parts.join(".");

    content.innerText = ans
    inp.value = ans
}

inp.addEventListener('keyup',someone)


