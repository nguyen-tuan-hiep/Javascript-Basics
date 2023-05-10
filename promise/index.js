var promise = new Promise(
    // Executor
    function (resolve, reject) {
        // Logic
        // Succeed: resolve()
        // Fail: reject()
        resolve([1,2,3]);
        reject('Co loi xay ra!')
    }
);

promise
    .then(function (data) {
        // Success
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