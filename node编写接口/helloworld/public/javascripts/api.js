;(function () {
    axios.defaults.baseURL = 'http://localhost:3000';
    axios.defaults.timeout = 3000;

    class NJHttp {
        static get(url="", data={}){
            return new Promise(function (resolve, reject) {
                axios.get(url, {
                    params: data
                })
                    .then(function (response) {
                        resolve(response.data);
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            });
        }
        static post(url="", data={}){
            return new Promise(function (resolve, reject) {
                axios.post(url, {
                    params: data
                })
                    .then(function (response) {
                        resolve(response.data);
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            });
        }
    }
    class HomeApis {
        static getHomeBanner(){
            return NJHttp.get("/json/banner.json",{});
        }
    }

    window.NJHttp = NJHttp;
    window.HomeApis = HomeApis;
})();
