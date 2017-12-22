/**
 * @desc 图片文件自动下载
 * @param {String} 文件名
 * @param {String} base64Img
 */
function downloadImg(filename, base64Img){
    var aLink = document.createElement('a');
    aLink.download = filename;
    var blob = base64Img2Blob(base64Img);
    aLink.href = window.URL.createObjectURL(blob);
    document.body.appendChild(aLink); // FF浏览器下需要插入到DOM树中，才可以执行click()
    aLink.click(); // 脚本触发自动下载
}
