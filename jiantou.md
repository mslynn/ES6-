## es6箭头函数教学

``` js
     let func = function(value) {
         return value;
     };

     let fuc = value => value

     //上面2种写法一样  => 相当于 function(){}
```

``` js
 let func = (value, num) => {
     return value * num
 };
 let func = (value, num) => value * num;

 //如果需要穿入多个参数
```

``` js
   let func = (value, num) => ({
       total: value * num
   })
   //如果需要直接返回一个对象
```

### 与变量解构结合

``` js
 let func = ({
     value,
     num
 }) => ({
     total: value * num
 })
 //使用
 let result = func({
     value: 10,
     num: 10
 })
 console.log(result); // {total: 100}
```
