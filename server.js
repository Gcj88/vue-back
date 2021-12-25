let http = require('http');
let users = [
    {id : 22,name : 'gaocangjian11'},
    {id : 22,name : 'gaocangjian22'},
    {id : 22,name : 'gaocangjian33'}
]
let server = http.createServer(function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    if(req.url === '/api/users'){
        res.end(JSON.stringify(users));
    }else{
        res.end('Not found!');
    }
});
server.listen(3000,()=>{
    console.log('后端API接口已启动在 3000端口！');
});