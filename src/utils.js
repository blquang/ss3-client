// union two object
export const unionObject = (target, source) => {
    return Object.keys(target).reduce((obj, key) => {
       if(source.hasOwnProperty(key)){
           obj[key] = source[key];
       }
       else{
            obj[key] = target[key];
       }
        return obj;
    }, {});
}