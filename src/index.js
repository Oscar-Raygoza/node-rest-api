import '@babel/polyfill';
import app  from './server/index.js';

async function main(){
    await app.listen(app.get('port'));
    console.log('server on port ', app.get('port'))
}


main();