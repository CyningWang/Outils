/**
 * @desc 向页面加载完毕时执行的函数队列中添加新函数
 * @param {Function} func
 */
function addLoadEvent(func){
    var onload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            onload();
            func();
        };
    }
}
