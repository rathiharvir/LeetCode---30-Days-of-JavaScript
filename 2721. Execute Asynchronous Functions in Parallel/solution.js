/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
       const results = [];
       let completed = 0;

       if (!functions.length) {
           resolve(results);
       }

       functions.forEach((asyncFunc, index) => {
           asyncFunc()
               .then(result => {
                   results[index] = result;
                   completed++;
                   if (completed === functions.length) {
                       resolve(results);
                   }
               })
               .catch(reject);
       });
   });
};

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/