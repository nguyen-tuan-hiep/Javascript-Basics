var promise = Promise.resolve('Success!');
promise
    .then(function(result){
        console.log('Result: ', result);
    })
    .catch(function(err){
        console.log('Error: ', err);
    });


var promise1 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1]);
        }, 1000);
    }
)

var promise2 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2,3]);
        }, 3000);
    }
)

// promise2 = Promise.reject('Co loi');

Promise.all([promise1, promise2])
    .then(function([result1, result2]){
    // .then(function(result){
    //     var result1 = result[0];
    //     var result2 = result[1];
        console.log('Result: ', result1.concat(result2));
    })
    .catch(function(err){
        console.log('Error: ', err);
    })
