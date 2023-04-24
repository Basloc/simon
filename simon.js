let colors = ["red","green","blue","yellow","purple","orange"]
let click = 0
let sc = 0
let tm = 0
let currentScore = 0
let ladder = [0,0,0,0,0]

let series = []
let current = []




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function start() {
    let score = document.getElementById("score")
    let lad = document.getElementById('ladder')
    score.textContent = `Score : ${sc}`
    let contain = document.getElementById('contain')
    let button = document.getElementById('start')
    let time = document.getElementById("time")
    time.textContent = `Time : ${tm}`
    time.style.display = "block"
    score.style.display = 'block'
    button.style.display = 'none'
    lad.textContent = `ladder : ${ladder}`
    for (let color = 0; color < colors.length; color++) {
        let btn = document.createElement("button")
        btn.setAttribute("id",colors[color])
        btn.setAttribute("class","color")
        btn.textContent = colors[color]
        contain.append(btn)
    }
    setInterval(() => {
        let time = document.getElementById("time")
        time.textContent = `Time : ${tm}`
        tm++
    }, 1000);


    let r = document.getElementById('red')
    let v = document.getElementById('green')
    let b = document.getElementById('blue')
    let j = document.getElementById('yellow')
    let vio = document.getElementById('purple')
    let o = document.getElementById('orange')

    r.addEventListener("click",() => app(r))
    v.addEventListener("click",() => app(v))
    b.addEventListener("click",() => app(b))
    j.addEventListener("click",() => app(j))
    vio.addEventListener("click",() => app(vio))
    o.addEventListener("click",() => app(o))

    addColor()
        
}

function app(ncol) {
    
    current.push(ncol.textContent)
    if ( series.length == current.length && verif(current,series)) {
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
    currentScore = sc
    series.push(colors[getRandomInt(colors.length)])
    setTimeout(() => {  shine(series) }, 500);
    current = []
}

function shine(series) {
  
    let r = document.getElementById('red')
    let v = document.getElementById('green')
    let b = document.getElementById('blue')
    let j = document.getElementById('yellow')
    let vio = document.getElementById('purple')
    let o = document.getElementById('orange')
    
    let toShine = [r,v,b,j,vio,o]

    for (let index = 0; index < series.length; index++) {
       
        for ( let id = 0; id < toShine.length; id++) {
                if (series[index] == toShine[id].textContent) {
                    
                    toShine[id].style.backgroundColor = toShine[id].textContent
                    setTimeout(() => {  toShine[id].style.backgroundColor = ''; }, 1000);
                }
                
            }
    }
}
        


        
function verif(current,series) {
    for (let index = 0; index < series.length; index++) {
        for ( let id2 = 0 ; id2 < current.length;id2++) {
            if ( series[id2] == current[id2] ) {
                continue
            }else {
                lose()
                return false
            }
        }   
    }
    return true
}


function lose() {
    location.reload()
}
