/**
 * Project name(项目名称)：JS_Number
 * File name(文件名): test4
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/4
 * Time(创建时间)： 18:57
 * Version(版本): 1.0
 * Description(描述)： 无
 */

// 方法	                描述
// Number.parseFloat()	将字符串转换成浮点数，和全局方法 parseFloat() 作用相同
// Number.parseInt()	将字符串转换成整型数字，和全局方法 parseInt() 作用相同
// Number.isFinite()	判断 Number 对象是否为有穷数
// Number.isInteger()	判断 Number 对象是否为整数
// Number.isNaN()	判断 Number 对象是否为 NaN 类型
// Number.isSafeInteger()	判断 Number 对象是否为安全整数，即范围为 -(2⁵³ - 1)到 2⁵³ - 1 之间的整数
// Number.toString()	把 Number 对象转换为字符串，使用指定的基数
// Number.toLocaleString()	把 Number 对象转换为字符串，使用本地数字格式顺序
// Number.toFixed()	把 Number 对象转换为字符串，结果的小数点后有指定位数的数字
// Number.toExponential()	把 Number 对象的值转换为指数计数法
// Number.toPrecision()	把 Number 对象格式化为指定的长度
// Number.valueOf()	返回一个 Number 对象的基本数字值

document.write(Number.isFinite(123));
document.write("<br>");
document.write(Number.isInteger(123));
document.write("<br>");
document.write(Number.isInteger(123.5));
