const express =require('express');
const res = require('express/lib/response');
//利用express 這個框架建立一個web app
const app =express();

//3001的數字隨便填 不要跟mysql的port一樣就好
app.get(3001),()=>{
res.send('HELLo,Express 2');
});

app.listen(3001, ()=>{
    console.log('Server running at port 3001')
});