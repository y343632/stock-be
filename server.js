const express =require('express');
//利用express 這個框架建立一個web app
const app =express();

//3001的數字隨便填 不要跟mysql的port一樣就好
app.get('/'),(req,res)=>{
res.send('HELLo,Express');
};

app.listen(3001, ()=>{
    console.log('Server running at port 3001')
});