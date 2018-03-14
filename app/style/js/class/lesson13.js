/**
 * Promise
 */

{
    let ajax = function (callback) { 
        console.log('执行');
        setTimeout(function () {
            callback&&callback.call();
        },1000)
     }
     ajax(function(){
         console.log('打印');
     })
}

{
    let ajax = function () { 
        console.log('执行21');
        return new Promise(function (resolve,reject) { 
            setTimeout(function(){
                resolve()
            },1000)
         })
     }
     ajax().then(function(){
         console.log('timeout2');
     })

}

{
    let ajax = function () { 
        console.log('执行3');
        return new Promise(function (resolve,reject) { 
            setTimeout(function(){
                resolve()
            },1000)
        })
    }

    ajax().then(function () {
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },2000)
        })
    }).then(function(){
        console.log('time3');
    });

}


{
    function loadImg(src) {
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src=src;
            img.onload = function () {
                resolve(img);
            }
            img.onerror = function (err) {
                reject(err);
            }
        })
    }

    function showImage(imgs){
        imgs.forEach(img => {
            document.body.appendChild(img);
        });
    }

    Promise.all([
        loadImg('https://pic.36krcnd.com/201803/12095036/74gk52i54ack5qap!heading'),
        loadImg('https://pic.36krcnd.com/201803/12110636/jtlq2j24z2x5lklj!heading'),
        loadImg('https://pic.36krcnd.com/201803/13110640/0flpownyx0ocpew0!heading')
    ]).then(showImage)
}


{
    function loadImg(src) {
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            }
            img.onerror = function (err) {
                reject(err);
            }
        })
    }

    function showImage(img){
        let p = document.createElement("p");
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([
        loadImg('https://pic.36krcnd.com/201803/12095036/74gk52i54ack5qap!heading'),
        loadImg('https://pic.36krcnd.com/201803/12110636/jtlq2j24z2x5lklj!heading'),
        loadImg('https://pic.36krcnd.com/201803/13110640/0flpownyx0ocpew0!heading')
    ]).then(showImage);
}











