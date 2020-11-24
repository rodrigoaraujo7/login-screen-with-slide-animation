function slide1() {
    const img = document.querySelector('#image')
    img.src = './components/images/image1.png'

    setTimeout("slideIn()", 0)
    setTimeout("slideOut()", 2500)

    setTimeout("slide2()", 3000)
}

function slide2() {
    const img = document.querySelector('#image')
    img.src = './components/images/image2.png'

    setTimeout("slideIn()", 0)
    setTimeout("slideOut()", 2500)

    setTimeout("slide3()", 3000)
}

function slide3() {
    const img = document.querySelector('#image')
    img.src = './components/images/image3.png'

    setTimeout("slideIn()", 0)
    setTimeout("slideOut()", 2500)

    setTimeout("slide1()", 3000)
}

function slideIn() {
    document.getElementById('image').classList.add("animate-in")

    setTimeout(() => {
        document.getElementById('image').classList.remove("animate-in")
    }, 550)
}

function slideOut() {
    document.getElementById('image').classList.add("animate-out")

    setTimeout(() => {
        document.getElementById('image').classList.remove("animate-out")
    }, 550)
}