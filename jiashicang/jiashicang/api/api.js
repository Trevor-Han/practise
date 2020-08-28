// function btn(){
//     axios.get('https://www.zlygu.com/api/getPvUvData',{
//     // params:{
//     //     id:5
//     // }
// }).then( res =>{
//     console.log("数据是:", res);
//     console.log(params);
// })
// }

let server =axios.create({
    baseURL: "https://www.zlygu.com/api",//请求api
    timeout:"3000", // 超时处理
    withCredentials:false, //是否跨域 // 修改跨域
});
server.interceptors.request.use(
    function(config){
        // 在请求发出之前进行一些操作,比如请求头携带内容
        //config.header["Content-Type"] = "application/json, text/plain";
        return config;
    },
    function(error){
        return error;
    }
);
server.interceptors.response.use(
    function(res){
        //比如token 过期
        if( res.data.statusCode ==  401){
        alert("暂无权限, 请重新登录!");
        window.location,href ="/login";
        return false;
        }
        return res;
    },
    function( error ){
        switch(error && error.response && error.response,status){
            case 400:
                error.message ="请求错误";
                break;
            case 401:
                error.message = "未授权,请登录";
                break;
            case 403:
                error.message =  " 拒绝访问";
                break;
            case 404:
                error.message = " 未找到访问地址";
                break;
            case 408:
                error.message = "请求超时";
                break;
            case 500:
                error.message = "服务器内部错误";
                break;
            case 501:
                error.message  = "服务未实现";
                break;
            case 502:
                error.message =  "网关错误";
                break;
            case 503:
                error.message ="服务不可用";
                break;    
            case 504:
                error.message ="网关超时";
                break;
            case 504:
                error.message ="HTTP版本不受支持";
                break;
               default:
        }
        return error;
    }
    
)