var answersList = ["As I \nsee it, \nyes", "It is \ncertain", "It is \ndecidedly \nso", "Most \nlikely", "Outlook \ngood", "Signs \npoint \nto yes", "Without \na \ndoubt", "Yes", "Yes \n- definitely", "You may \nrely \non it", "Reply \nhazy, \ntry \nagain", "Ask \nagain \nlater", "Better \nnot tell \nyou now", "Concentrate \nand ask \nagain", "Don't \ncount \non it", "My reply \nis no", "My sources \nsay no", "Outlook \nnot \nso good", "Very \ndoubtful"];
var answer;

function preload() {}

function setup() {

    createCanvas(windowWidth, windowHeight)
    background("white");

    setShakeThreshold(60);

    fill("black");
    ellipse(width / 2, height / 2, width / 10 * 6);

    fill("white");
    ellipse(width / 2, height / 2, width / 10 * 3.5);

    fill("black");
    textSize(80);
    textAlign(CENTER);
    text("8", width / 2, height / 10 * 5.5);


    fill("black");
    textSize(30);
    textAlign(CENTER);
    text("WELCOME TO THE \nDIGITAL MAGIC 8 BALL", width / 2, height / 10 * 1);

    fill("black");
    textSize(20);
    textAlign(CENTER);
    text("Ask a yes/no question and \n SHAKE your smartphone \nto see the result. \n(You can shake multiple times)", width / 2, height / 10 * 8);

}

function draw() {}

function deviceShaken() {

    createCanvas(windowWidth, windowHeight)
    background("white");
    fill("black");
    stroke("black")
    ellipse(width / 2, height / 2, width / 10 * 12);

    fill("#00022e");
    strokeWeight(2);
    stroke("grey");
    ellipse(width / 2, height / 2, width / 10 * 5); //this represents the colored water inside the real magic 8 balls

    fill("blue");
    stroke("blue");
    triangle(width / 3, height / 10 * 4, width / 3 * 2, height / 10 * 4, width / 2, height / 10 * 6.5) //this represents the 20-faced die inside real magic 8 balls

    fill("white");
    stroke("blue");
    textSize(15);
    textAlign(CENTER);
    text(answer, width / 2, height / 10 * 4.6);
    answer = answersList[Math.floor(random(19))]; //math.floor is used to round numbers (by defect)

}

function touchMoved() {
    return false;
}

function touchEnded() {
    DeviceOrientationEvent.requestPermission()
}
