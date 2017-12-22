/**
 * @desc 数据格式转换 base64 → blob
 * @param {String} 图片base64编码
 * @return 转码后的blob格式
 */
function base64Img2Blob(base64Img){
    // 切割
    var parts = base64Img.split(';base64,');
    var contentType = parts[0].split(':')[1]; // 图片文件格式 image/jpeg .etc
    var raw = window.atob(parts[1]); // 图片内容
    var rawLength = raw.length;

    // 转码
    var arr = new Uint8Array(rawLength);

    for(var i = 0; i < rawLength; i++){
        arr[i] = raw.charCodeAt(i);
    }

    return new Blob([arr.buffer], {type: contentType});
}
