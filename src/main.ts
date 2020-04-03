import {MY_CONST} from "./my-class";
const nodeEval = require ('node-eval');

async function work() {
    console.log('const=', MY_CONST);

    console.log('const eval=', nodeEval(`40+2`));

    console.log('dynamic eval: MY_CONST=', nodeEval(`
    const imp = require('./my-class');
    module.exports = imp.MY_CONST
    `, './main.js'));

    console.log('dynamic eval: MyCalss.val=', nodeEval(`
    const imp = require('./my-class');
    module.exports = new imp.MyClass().val;
    `, './main.js'));

    /** NOT working
     */

    // direct eval
    // console.log('direct eval=', eval(`MY_CONST`));

    // indirect eval
    // console.log('indirect eval=', (1, eval)(`MY_CONST`));

}

work()
.catch(e => console.error(e));
