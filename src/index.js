import '@babel/polyfill';
import app  from './server/index.js';

app.listen(3000, ()=>{
    console.log('server in port 3000')    
});
