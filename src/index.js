import formatTime from './formatTime';

function actionTime(json) {
    var now = Date.now(),
        actionPendingTime = {}, //startTime
        actionFulfilledTime = {},   //endTime
        include = [];

    return (store) => (next) => (action) => {
        now = Date.now();
        if(/_PENDING$/.test(action.type)){
            actionPendingTime[action.type.replace(/_PENDING$/, '')] = now;
        }
        if(/_FULFILLED/.test(action.type)){
            actionFulfilledTime[action.type.replace(/_FULFILLED/, '')] = now;
        }

        next(action);

        for(var [k, v] of Object.entries(actionFulfilledTime)){
            if(actionPendingTime[k] && !include.includes(k)){
                console.group(`%c action-times %c ${k}`, 'color: #9E9E9E', 'color: #000');
                console.log(`%c startTime:     %c ${formatTime(actionPendingTime[k])}`, 'color: #03A9F4; font-weight:bold;', 'color: #000');
                console.log(`%c endTime:       %c ${formatTime(actionFulfilledTime[k])}`, 'color: #4CAF50; font-weight:bold;', 'color: #000');
                console.log(`%c elapseTime:    %c ${actionFulfilledTime[k] - actionPendingTime[k]}ms`, 'color: #F44336; font-weight:bold;', 'color: #000');
                console.groupEnd();
                include.push(k);
                break;
            }
        }
    }
}

export default actionTime;