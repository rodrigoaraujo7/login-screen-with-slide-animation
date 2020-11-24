function slide1() {
    const img = document.querySelector('#image')
    img.src = './components/images/image1.png'
    setTimeout("slide2()", 2500)
}

function slide2() {
    const img = document.querySelector('#image')
    img.src = './components/images/image2.png'
    setTimeout("slide3()", 2500)
}

function slide3() {
    const img = document.querySelector('#image')
    img.src = './components/images/image3.png'
    setTimeout("slide1()", 2500)
}