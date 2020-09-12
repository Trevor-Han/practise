const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

function readText (pathname) {
    var bin = fs.readFileSync(pathname);

    if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
        bin = bin.slice(3)
    }

    return bin.toString('utf-8')
}

// 创建express实例
const app = express();
// 设置跨域访问
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, accept, origin, content-type')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next()
});
// 将请求体变成熟悉的键值对样子
// app.use(bodyParser.uselencoded({extended: false}));
// app.user(bodyParser.json());

// 开始写接口
// 例：接口为/client/任意参数, 就爱那个数据插入database的clients.json中
app.route('/banner/:id')
    .put((req, res) => {
        let options = req.body;
        let id = req.params[0];
        let allClient = readText('banner.json');
        let t = JSON.parse(allClient);
        for (let i in t) {
            if (JSON.parse(t[i]).id === id) {
                t[i] = JSON.stringify(options);
                fs.writeFileSync('banner.json', JSON.stringify(t));
                let response = {
                    msg: 'success',
                    clients: t[i],
                };
                res.status(200);
                res.send(response);
                return;
            }
        }
        res.status(500);
        res.send({msg: 'failed'});
    });

// 开启服务器
const server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});
