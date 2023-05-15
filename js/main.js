$(function () {

    //var --> const, let
    const option = {
        anchors: ['01', '02', '03', '04', '05'], /* 주소에 번호를 붙이다 */

        onLeave: function (index, nextIndex, direction) {
            console.log(index, nextIndex, direction)
            $('h1 span').text(nextIndex); /* $('해당 위치')에.text를(이 안에 있는걸로)출력한다.*/
            $('nav li').eq(nextIndex - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(nextIndex - 1).addClass('on').siblings().removeClass('on');
        },
    }
    $('.main_full').fullpage(option);
    $('.section').eq(0).addClass('on');

})