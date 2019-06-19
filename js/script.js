var area = $('.arrow');
var arrow = $('#arrowObj');
var bow = $('#bow');
var bubble_0 = $('.bubble');
var bubble_1 = $('.bubble1');
var bubble_2 = $('.bubble2');
var board1 = $('.board1');
var hit = 0;
var currentBubbleX = 0;
var currentBubble1X = 0;
var currentBubble2X = 0;
var currentArrowX = 0;
var ma = $('.movingArrow');;
var xAxis = 0;
var yAxis = 0;
var tries = 0;
var dum = $('.dum');
var hit = 0;
var tries = $('.try');
var c = 1;
var selector;

requestAnimationFrame(fun);

$(document).ready(function() {
    setInterval(createBrid, 2000);
    area.bind('mousemove',bowArrowMove);
    area.click(function(event) {
        c = 0;
        area.unbind("mousemove"); 
        arrow.animate({ "left": "1050px" }, 2000, function(){
            arrow.css({ "left": xAxis, "top": yAxis });
            area.bind('mousemove',bowArrowMove(event));
        });
    });    
});

function checkHit(){

    board1.html(hit);
    tries.html(c);
    // Your Code goes here
    // Both Bird and Arrow are moving objects
    if((collision(ma,bubble_0)) === true){
        bubble_0.css('display', 'none');
        hit += 1;

    }
        if((collision(ma,bubble_1)) === true){
        bubble_1.css('display', 'none');
        hit += 1;
    }

    if((collision(ma,bubble_2)) === true){
        bubble_2.css('display', 'none');
        hit += 1;
    }

}


function fun(){
    checkHit();
    requestAnimationFrame(fun);
}

function collision(obj1, obj2) {
                var x1 = obj1.offset().left;
                var y1 = obj1.offset().top;
                var h1 = obj1.outerHeight(true);
                var w1 = obj1.outerWidth(true);
                var b1 = y1 + h1;
                var r1 = x1 + w1;
                var x2 = obj2.offset().left;
                var y2 = obj2.offset().top;
                var h2 = obj2.outerHeight(true);
                var w2 = obj2.outerWidth(true);
                var b2 = y2 + h2;
                var r2 = x2 + w2;
    
            if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) 
                return false;
            return true;
        }


function bowArrowMove(event){
    xAxis = event.pageX - 40;
    yAxis = event.pageY;
    bow.css({ "left": xAxis, "top": yAxis });
    arrow.css({ "left": xAxis, "top": yAxis });
}

function createBrid() {
    selector = [bubble_0, bubble_1, bubble_2];
    for (var i = 0; i < 3; i++) {
        var p = [400, 600, 800];
        selector[i].css({
            "left": p[i] + "px",
            "top": p[i] - 200 + "px"
        });

        selector[i].animate({
            "top": "50px"
        }, p[i] * 5);

        selector[i].animate({ "top": p[i] - 200 + "px" }, p[i] * 10);
    }
    
}