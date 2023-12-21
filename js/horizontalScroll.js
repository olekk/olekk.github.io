let view = document.getElementById("view")

let start = document.getElementById('start')
let prev = document.getElementById('prev')
let next = document.getElementById('next')

let horScroll = 0
let currentTile = 0

let scrollToTile = (tile) => {
    window.scrollTo(0, tile*((document.body.scrollHeight - window.innerHeight) / (view.childElementCount - 1)))
}

prev.onclick = () => scrollToTile(currentTile - 1)
next.onclick = () => scrollToTile(currentTile + 1)
start.onclick = () => scrollToTile(currentTile + 1)

let scroll = () => {
    
    horScroll = window.scrollY / (document.body.scrollHeight - window.innerHeight) * (view.scrollWidth - window.innerWidth)

    view.style.transform = "translate(-" + horScroll + "px, 0)"

    currentTile = Math.floor(horScroll / (view.scrollWidth - window.innerWidth) * view.childElementCount)
    if(currentTile > 0) {
        prev.hidden = next.hidden = false
        if (currentTile === view.childElementCount-1) {
            next.hidden = true
        }
    } else {
        prev.hidden = next.hidden = true
    }
/*
    let distance=horScroll-currentTile*100

    console.log(currentTile+" "+ distance+" "+prevDistance)
    
    if(distance>prevDistance && distance>80) window.scrollTo(0, scrollVal+0.2*(elHeight/(view.childElementCount-1)));
    if(distance<prevDistance && distance<20) window.scrollTo(0, scrollVal-0.2*(elHeight/(view.childElementCount-1)));
    

    prevDistance=distance;
    */
    // for(let i=0; i<view.childElementCount; i++) {
    //     distance = i*view.clientWidth-horScroll;
    //     if(Math.abs(distance)<150) {    
    //         if(Math.abs(distance)<Math.abs(prevDistance)) {
    //             //zblizanie
    //             horScroll+=distance;
    //             window.scrollTo(0, horScroll/(view.clientWidth*(view.childElementCount-1))*elHeight);
    //             prevDistance = distance;
    //         } else {
    //             //oddalanie
    //         }
    //         // console.log(distance);
    //     }
    // }

}

window.addEventListener('scroll', scroll)

scroll()
