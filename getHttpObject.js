/**
 * @desc 获取浏览器支持的XMLHttpRequest对象
 * @return 返回一个新的XMLHttpRequest对象 || false
 */
function getHttpObject(){
    if(typeof XMLHttpRequest == 'undefined'){
        XMLHttpRequest = function(){
            // IE浏览器
            // Msxml各版本
            var version = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP"];

            for(var i = 0, len = version.length; i < len; i++){
                try{
                    return new ActiveXObject(version[i]);
                }catch(e){
                    // 不做任何处理
                }
            }

            // 不支持ajax的浏览器
            return false;
        }
    }

    // 支持XMLHttpRequest对象的主流浏览器
    return new XMLHttpRequest();
}
