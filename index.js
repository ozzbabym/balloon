var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var score = document.getElementById('score')
var miss = document.getElementById('miss')
var timer = document.getElementById('timer')



var countScore = 0 //очки начальные 
score.innerHTML = countScore //вывожу очки на экран лопнувших шаров

var missBall = 0 //очки пропущенные 
miss.innerHTML = missBall //вывожу на экран пропущенные шары

var time = 60 //время старта
timer.innerHTML = time //время на экране




//время по убыванию
setInterval(() => {
    time--
    timer.innerHTML = time
    if (time === 0) {
        time = 1
    }
}, 1000)









var igla = new Image(); //картинка иглы
var balloon = new Image(); //картинка шара 1
var balloon2 = new Image(); //картинка шара 2

igla.src = 'igla.png' //картинка откуда
balloon.src = 'balloon.png' //картинка откуда
balloon2.src = 'balloon2.png' //картинка откуда




var iglaX = 0 //начальное положение иглы по Х
var iglaY = 0 //начальное положение иглы по Y


var balloonWidth = 50 //начальная ширина шара 1
var balloonHeight = 100 //начальная высота шара 1
var balloonX = 50 //координаты шара по X
var balloonY = 500 // координаты шара по Y

var balloonWidth2 = 50 //начальная ширина шара 2
var balloonHeight2 = 100 //начальная высота шара 2
var balloonX2 = 150 //координаты шара по X
var balloonY2 = 500 //координаты шара по Y




//управеление на клавиатуре
document.onkeydown = function (e) {

    switch (e.key) {
        case 'a':
            iglaX -= 10
            break;
        case 'd':
            iglaX += 10
            break;
        case 'ArrowRight':
            iglaX += 10
            break;
        case 'ArrowLeft':
            iglaX -= 10
            break;

        default:
            break
    }

}
//управление иглы по нажатию на экран
document.addEventListener('click', e => {

    iglaX = e.layerX - 25
})

var balloonMoveY = true //движение шара 1 
var balloonMoveY2 = true //движение шара 2
var balloonSpeed = 2 //скорость шара 1
var balloonSpeed2 = 2 //скорость шара 2





//отрисовываем игру
function draw() {


    ctx.fillStyle = 'lightblue' //фон игры
    ctx.fillRect(0, 0, 350, 600) //заливка канваса для перерисовки 


    ctx.drawImage(igla, iglaX, iglaY, 50, 100); //рисуем иглу
    ctx.drawImage(balloon, balloonX, balloonY, balloonWidth, balloonHeight) //рисуем шара 1
    ctx.drawImage(balloon2, balloonX2, balloonY2, balloonWidth2, balloonHeight2) //рисуем шар 2

    if (balloonMoveY === true) {
        balloonY -= balloonSpeed //скорость шара 1
    }
    if (balloonMoveY2 === true) {
        balloonY2 -= balloonSpeed2 //скорость шара 2
    }


    if (iglaX < -20) {
        iglaX = -20 //игла не может выйти за рамки игры влево
    }
    if (iglaX > 320) {
        iglaX = 320 //игла не может выйти за рамки игры вправо
    }


    //ball1
    if (time > 1) { //в конце игры 
        if (balloonX > (iglaX - 25) && balloonX < (iglaX + 25) && balloonY < iglaY + 90 && balloonY > iglaY + 50) { //соприкосновение иглы с шаром 1
            countScore += 1 //добавляем результат лопнувшего шара 1
            score.innerHTML = countScore //выводим счет

            balloonY = 500 //отрисовываем новый шар за пределом канваса
            balloonX = Math.ceil(Math.random() * (310 - 0 + 1)) + 0 //рандомное появление шара 1

            balloonSpeed = Math.ceil(Math.random() * (3 - 0 + 1)) + 0 //рандомная скорость
            balloonWidth = Math.ceil(Math.random() * (70 - 30 + 1)) + 30 //рандомная ширина шара
            balloonHeight = balloonWidth * 2 //умножаем ширину на 2
        }

        if (balloonY < -100) { //пропущенные шары 1
            missBall += 1
            miss.innerHTML = missBall

            balloonY = 500 //отрисовываем новый шар за пределом канваса
            balloonX = Math.ceil(Math.random() * (310 - 0 + 1)) + 0 //рандомное появление шара 1
            balloonSpeed = Math.ceil(Math.random() * (3 - 0 + 1)) + 0 //рандомная скорость
            balloonWidth = Math.ceil(Math.random() * (70 - 30 + 1)) + 30 //рандомная ширина шара
            balloonHeight = balloonWidth * 2 //умножаем ширину на 2
        }
    }

    //ball2
    if (time > 1) { //в конце игры 
        if (balloonX2 > (iglaX - 25) && balloonX2 < (iglaX + 25) && balloonY2 < iglaY + 90 && balloonY > iglaY + 50) { //соприкосновение иглы с шаром 2
            countScore += 1 //добавляем результат лопнувшего шара 2
            score.innerHTML = countScore //выводим счет

            balloonY2 = 500 //отрисовываем новый шар за пределом канваса
            balloonX2 = Math.ceil(Math.random() * (310 - 0 + 1)) + 0 //рандомное появление шара 2
            balloonSpeed2 = Math.ceil(Math.random() * (3 - 0 + 1)) + 0 //рандомная скорость
            balloonWidth2 = Math.ceil(Math.random() * (70 - 30 + 1)) + 30 //рандомная ширина шара
            balloonHeight2 = balloonWidth2 * 2 //умножаем ширину на 2

        }

        if (balloonY2 < -100) {//пропущенные шары 2
            missBall += 1
            miss.innerHTML = missBall

            balloonY2 = 500 //отрисовываем новый шар за пределом канваса
            balloonX2 = Math.ceil(Math.random() * (310 - 0 + 1)) + 0 //рандомное появление шара 2
            balloonSpeed2 = Math.ceil(Math.random() * (3 - 0 + 1)) + 0 //рандомная скорость
            balloonWidth2 = Math.ceil(Math.random() * (70 - 30 + 1)) + 30 //рандомная ширина шара
            balloonHeight2 = balloonWidth2 * 2 //умножаем ширину на 2
        }
    }

    if (time === 1) { //если время закончилось


        ctx.beginPath();
        ctx.fillStyle = "#00F";
        ctx.strokeStyle = "#F00";
        ctx.font = "20pt Arial";
        ctx.fillText("Score: " + countScore, 100, 200); //выводим на экран очки лопнувших шаров

        ctx.beginPath();
        ctx.fillStyle = "#00F";
        ctx.strokeStyle = "#F00";
        ctx.font = "20pt Arial";
        ctx.fillText("Miss Ball: " + missBall, 60, 250); //выводим на экран очки пропущенных шаров



    }


    requestAnimationFrame(draw); // Вызов функции постоянно
}



draw();







