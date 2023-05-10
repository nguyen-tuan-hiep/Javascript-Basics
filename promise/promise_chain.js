var promise = new Promise(
    // Executor
    function (resolve, reject) {
        // Logic
        // Succeed: resolve()
        // Fail: reject()
        resolve();
        reject('Co loi xay ra!');
    }
);

promise
    .then(function(){
        return 1;   // nếu không return thì sẽ hiện undefined
    })

    .then(function(data){
        console.log(data);
        return new Promise(function(resolve, reject){
            setTimeout(() => {
                resolve();
            }, 2000);  // phải chờ 2s mới chạy tiếp
        })
    })
    .then(function(data){
        console.log(data);
        return 3;
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function (error) {
        // Fail
        console.log(error);
    })
    .finally(function () {
        // Always
        console.log('Always');
    });