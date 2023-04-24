let colors = ["rouge","vert","bleu","jaune","violet","orange"]
let click = -1

function start() {
    let series = ["rouge","bleu",'vert']
    let current = []
    let contain = document.getElementById('contain')
    let button = document.getElementById('start')
    let score = document.getElementById("score")
    let time = document.getElementById("time")
    time.style.display = "block"
    score.style.display = 'block'
    button.style.display = 'none'
    for (let color = 0; color < colors.length; color++) {
        let btn = document.createElement("button")
        btn.setAttribute("id",colors[color])
        btn.setAttribute("class","color")
        btn.textContent = colors[color]
        contain.append(btn)
    }
// -----------------------------------------------------------------------
    let cur = document.getElementById('cur')
// -----------------------------------------------------------------------
    let r = document.getElementById('rouge')
    let v = document.getElementById('vert')
    let b = document.getElementById('bleu')
    let j = document.getElementById('jaune')
    let vio = document.getElementById('violet')
    let o = document.getElementById('orange')
    r.addEventListener("click",() => app(r,current,series))
    v.addEventListener("click",() => app(v,current,series))
    b.addEventListener("click",() => app(b,current,series))
    j.addEventListener("click",() => app(j,current,series))
    vio.addEventListener("click",() => app(vio,current,series))
    o.addEventListener("click",() => app(o,current,series))
// ----------------------------------------------------------------------
    cur.addEventListener("click", () => console.log(current))
// ----------------------------------------------------------------------
}

function app(ncol,current,series) {
    click ++
    for (let index = 0; index < series.length; index++) {
        if ( series[click] == ncol.textContent) {
            console.log("win");
            current.push(ncol.textContent)
        }else {
            console.log("lose");
            click = -1
            current = []
        }
        
    }
    
    console.log(current,click);
    
}


    









