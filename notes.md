## splice

Does not need to assign ```.splice()``` to a new variable.

(X)
```javascript
// this will return the removed value
let arr = [...array];
arr = arr.splice(index, 1); 
```

(X)
```javascript
// this will return the removed value
let arr = [...array].splice(index, 1); 
```

(O)
```javascript
let arr = [...array];
arr.splice(index, 1);
```

