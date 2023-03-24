function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};


sleep(2000)
    .then(function(){
        console.log(1);
        return sleep(2000);
    })
    .then(function(){
        console.log(2);
        return sleep(2000);
    })
    .then(function(){
        console.log(3);
        return sleep(2000);
    })
    .then(function(){
        console.log(4);
    });