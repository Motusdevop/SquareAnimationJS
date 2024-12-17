
let canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let scale = window.innerWidth / (600 * 2.5)

console.log(scale)

const count_pixels = canvas.height * canvas.width / 5

const deltaY = -50

let ctx = canvas.getContext('2d');

let start_btn = document.querySelector('.start_btn');
let square_color = '#5ac7f2'
let back_color = '#303030'

start_btn.addEventListener('click', () => {
	start_btn.style.opacity = 0;
    console.log('hello');
    drawPoints(ctx, count_pixels, 1);

    setTimeout(() => start_btn.remove(), 500)
})

function drawPoint(ctx, x, y, r, color) {
    ctx.beginPath()
	ctx.arc(x, y, r, 0, Math.PI * 2)
	ctx.fillStyle = color
	ctx.fill()
    ctx.closePath()
}

window.addEventListener('resize', () => {
	location.reload()
})

function check_square_point(x, y) {

    let center_x = window.innerWidth / 2
    let center_y = window.innerHeight / 2

    a_size = scale * 600
    x_start = center_x - a_size / 2
    x_end = center_x + a_size / 2

    y_start = center_y - a_size / 2
    y_end = center_y + a_size / 2

    return x >= x_start && x <= x_end && y >= y_start && y <= y_end;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

function drawPoints(ctx, n, delay) {
	console.log(n)

	let x = getRandomInt(0, window.innerWidth)
	let y = getRandomInt(0, window.innerHeight)
	let r = getRandomInt(5, 7)
	let color = null

	if (
		check_square_point(x, y)
	) {
		color = square_color
	} else {
		color = back_color
		r = getRandomInt(2, 4)
	}

	drawPoint(ctx, x, y, r, color)

	if (n <= 0) {
		return
	} else {
		setTimeout(drawPoints, delay, ctx, n - 1, delay)
	}
}