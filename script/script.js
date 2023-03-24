jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown(),
        $(".bgmenu").stop().slideDown()
    }).mouseout(function(){
        $(".sub").stop().slideUp(),
        $(".bgmenu").stop().slideUp()
    })
})
// jQuery(document).ready(function(){
//     $(".main").mouseover(function(){
//         $(this).find(".sub").stop().slideDown()
//     }).mouseout(function(){
//         $(this).find(".sub").stop().slideUp()
//     })
// })