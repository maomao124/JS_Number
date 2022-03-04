/**
 * Project name(项目名称)：JS_Number
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/4
 * Time(创建时间)： 18:51
 * Version(版本): 1.0
 * Description(描述)： 无
 */

var a = new Number("123");
var b = Number("456");
var c = 789;
var d = new Number("abc");
document.write(typeof a + "<br>");      // 输出：object
document.write(typeof b + "<br>");      // 输出：number
document.write(typeof c + "<br>");      // 输出：number
document.write(d + "<br>");             // 输出：NaN