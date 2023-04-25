import Loader from './loader';

class AppLoader extends Loader {
    
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '97643816ca8048238857657dcd7820e7', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
