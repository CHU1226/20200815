$(document).ready(function(){
    $('.event-join').hide();
    $('.event-join:first').show();
    $('.event-box').click(function(){
        $('.event-join').hide();
        var evntActive = $(this).attr('href');
        $(evntActive).show();
        $('.event-join').addClass('anijump');
        return false
    });

    $('.tab').hide();
    $('.tab:first').show();
    $('.pd-btn,.pd-show img').click(function(){
        $('.tab').hide();
        var tabAvtive = $(this).attr('href');
        $(tabAvtive).show();
    });

    $('.event-join').click(function(){
        $('#join').fadeIn();
        $('#reg').fadeOut();
        $('#log').fadeOut();
        $('#product-list').fadeOut();
    });
    $('.login').click(function(){
        $('#log').fadeIn();
        $('#reg').fadeOut();
        $('#join').fadeOut();
        $('#product-list').fadeOut();
        return false
    });
    $('.reg').click(function(){
        $('#reg').fadeIn();
        $('#log').fadeOut();
        $('#join').fadeOut();
        $('#product-list').fadeOut();
        return false
    });
    $('.log-chk,.social').click(function(){
        alert('目前尚無網路請稍後再試');
    });
    $('.close2').click(function(){
        $('#product-list,.log-form').fadeOut();
    });
    $('#shopcart').click(function(){
        $('#product-list').fadeIn();
        $('#reg').fadeOut();
        $('#log').fadeOut();
        $('#join').fadeOut();
    });
    $('.add').click(function(){
		alert('成功加入購物車');
	});
    $('#checkout').click(function(){
		alert('請先登入會員');
	});
    $('.contact-btn').click(function(){
		alert('表單已送出');
    });
    $('#read').click(function(){
		alert("訂閱成功")
	});
})
var pdShow = document.querySelector(".pd-show");
var blocks = Array.from(document.querySelectorAll(".block"));
var isMouseOn = false;
var leftPositions = blocks.map((block, i) => i * 250);

pdShow.onmouseover = e => isMouseOn = true;
pdShow.onmouseout = e => isMouseOn = false;

setInterval(function () {
    leftPositions.forEach((leftPosition, i) => blocks[i].style.left = leftPosition + "px");

    if (!isMouseOn) {
        leftPositions = leftPositions.map(leftPosition => {
            leftPosition--;

            if (leftPosition == -250) {
                leftPosition = (blocks.length - 1) * 250;
            }

            return leftPosition;
        });
    }
}, 10);