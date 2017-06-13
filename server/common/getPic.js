/**
 * Created by huangjin on 2017/6/11.
 */
var captchapng = require('captchapng');
var fs = require('fs');
//挂载导出处理函数
exports.getVcode = function(){
    var vcode = parseInt(Math.random()*9000+1000)
    var p = new captchapng(80,30,vcode); // width,height,numeric captcha
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
    var img = p.getBase64();
    var imgbase64 = new Buffer(img,'base64');
    console.log(imgbase64)

    //下面注释的代码不能要
    /*res.writeHead(200, {
     'Content-Type': 'image/png'
     });
     res.end(imgbase64);*/

    //返回十六进制文件流和验证码
    return {
        buf:imgbase64,
        vcode
    }
}
/*var vcode = parseInt(Math.random()*9000+1000)
var p = new captchapng(80,30,vcode); // width,height,numeric captcha
p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
var img = p.getBase64();
var imgbase64 = new Buffer(img,'base64');
console.log(imgbase64)
fs.writeFile('./temp.png',imgbase64,(err)=>{
    if(err) throw err;
    console.log('写入完毕')
})*/
