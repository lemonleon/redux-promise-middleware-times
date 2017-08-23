# redux-promise-middleware-times

Record the time consumed by each asynchronous action, asynchronous solutions that rely on [redux-promise-middleware](https://www.npmjs.com/package/redux-promise-middleware).

### Usage
```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logTimes from 'redux-promise-middleware-times';


const store = createStore(thunk, promiseMiddleware(), logTimes());
```
