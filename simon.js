let colors = ["rouge","vert","bleu","jaune","violet","orange"]
let click = 0
let sc = 0

let series = []
let current = []



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function start() {
    let score = document.getElementById("score")
    score.textContent = `Score : ${sc}`
    let contain = document.getElementById('contain')
    let button = document.getElementById('start')
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
    

    let cur = document.getElementById('cur')
    // -----------------------------------------------------------------------
    let r = document.getElementById('rouge')
    let v = document.getElementById('vert')
    let b = document.getElementById('bleu')
    let j = document.getElementById('jaune')
    let vio = document.getElementById('violet')
    let o = document.getElementById('orange')

    r.addEventListener("click",() => app(r))
    v.addEventListener("click",() => app(v))
    b.addEventListener("click",() => app(b))
    j.addEventListener("click",() => app(j))
    vio.addEventListener("click",() => app(vio))
    o.addEventListener("click",() => app(o))
    // ----------------------------------------------------------------------
    cur.addEventListener("click", () => console.log(current))
    // ----------------------------------------------------------------------
    addColor()
        
}

function app(ncol) {
    
    current.push(ncol.textContent)
    if ( series.length == current.length) {
        console.log("Win");
        addColor()
    }else {
        verif(current,series)

    }
    
    console.log("current :",current,click, "series :",series);
    
    
}

function addColor() {
    let score = document.getElementById("score")
    score.textContent = `Score : ${sc}`
    sc++
    series.push(colors[getRandomInt(colors.length)])
    setTimeout(() => {  shine(series) }, 500);
    current = []
}

function shine(series) {
  
        let r = document.getElementById('rouge')
        let v = document.getElementById('vert')
        let b = document.getElementById('bleu')
        let j = document.getElementById('jaune')
        let vio = document.getElementById('violet')
        let o = document.getElementById('orange')
        for (let index = 0; index < series.length; index++) {
            if (series[index] == r.textContent) {
                r.style.backgroundColor = 'red'
                setTimeout(() => {  r.style.backgroundColor = ''; }, 1000);
            }

        }

        for (let index = 0; index < series.length; index++) {
            if (series[index] == v.textContent) {
                v.style.backgroundColor = 'green'
                setTimeout(() => {  v.style.backgroundColor = ''; }, 1000);
            }

        }

        for (let index = 0; index < series.length; index++) {
            if (series[index] == b.textContent) {
                b.style.backgroundColor = 'blue'
                setTimeout(() => {  b.style.backgroundColor = ''; }, 1000);
            }
        }

        for (let index = 0; index < series.length; index++) {
            if (series[index] == j.textContent) {
                j.style.backgroundColor = 'yellow'
                setTimeout(() => {  j.style.backgroundColor = ''; }, 1000);
            }

        }

        for (let index = 0; index < series.length; index++) {
            if (series[index] == vio.textContent) {
                vio.style.backgroundColor = 'purple'
                setTimeout(() => {  vio.style.backgroundColor = ''; }, 1000);
            }

        }

        for (let index = 0; index < series.length; index++) {
            if (series[index] == o.textContent) {
                o.style.backgroundColor = 'orange'
                setTimeout(() => {  o.style.backgroundColor = ''; }, 1000);
            }
        }


}



        
function verif(current,series) {
    for (let index = 0; index < series.length; index++) {
        for ( let id2 = 0 ; id2 < current.length;id2++) {
            if ( series[id2] == current[id2] ) {
                continue
            }
        }
        // if ( series[click] == ncol.textContent) {
        //     click++
        //     console.log("win");
        //     current.push(ncol.textContent)
        // }else {
        //     console.log("lose");
        //     click = 0
        //     current = []
        //     console.log(series);
        //     series = []
        //     score.textContent = "Score :"
        // }
        
    }
}


    









