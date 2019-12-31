const evilButton = document.getElementById('evil-button')
const OFFSET = 50
var teller = 0
const tekst = ['STOPP DA','HARASSMENT','IKKEEEE!', 'IKKE KLIKK MEG', '']


$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#evil-button').fadeOut();
     }
    else
     {
      $('#evil-button').fadeIn();
     }
 });

evilButton.addEventListener('click', () => {
    alert('HEHEHE NEI')
    window.location.href = '../index.html';
})


document.addEventListener('mousemove', (e) => {


    const x = e.pageX
    const y = e.pageY
    const buttonBox = evilButton.getBoundingClientRect()

    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)

    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const verticalOffset = buttonBox.height / 2 + OFFSET

    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset &&
    Math.abs(verticalDistanceFrom) <= verticalOffset) {
        setButtonPosition(
            buttonBox.x + horizontalOffset / horizontalDistanceFrom * 5,
            buttonBox.y + verticalOffset / verticalDistanceFrom * 5
        )
    }
})

document.addEventListener('scroll', (e) => {
    const x = e.pageX
    const y = e.pageY
    const buttonBox = evilButton.getBoundingClientRect()

    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)

    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const verticalOffset = buttonBox.height / 2 + OFFSET

    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset &&
    Math.abs(verticalDistanceFrom) <= verticalOffset) {
        setButtonPosition(
            buttonBox.x + horizontalOffset / horizontalDistanceFrom * 5,
            buttonBox.y + verticalOffset / verticalDistanceFrom * 5
        )
    }
})

function setButtonPosition(left, top) {
    teller++;
    if (teller % 50 == 0) {
        evilButton.innerHTML = tekst[Math.floor(Math.random() * tekst.length)];
    }

    const windowBox = document.getElementById('body_knappen').getBoundingClientRect()
    const buttonBox = evilButton.getBoundingClientRect()

    if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
        left = windowBox.right - buttonBox.width - OFFSET
    }
    if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.left + OFFSET
    }
    if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.bottom - buttonBox.height - OFFSET
    }
    if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
        top = windowBox.top + OFFSET
    }

    evilButton.style.left = `${left}px`
    evilButton.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}
