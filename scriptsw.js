if('serviceWorker' in navigator) {
    window.addEventListener('load', function(){
        navigator.serviceWorker.register('sw.js')
        .then(function(registration){
            //Service Worker registration
            console.log('Service worker succesfull register', registration);
        }, function(err){
            //Service Worker has an error 
            console.log('Error on the registration of the Service Worker');
        });
    });
}