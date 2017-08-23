function addZero(num){
    if(isNaN(Number(num))) return num;

    if(num < 10)
        return '0' + num;
    return num;
}

function formatTime(time) {
    let oDate = new Date();
    oDate.setTime(time);

    let s = oDate.getSeconds(),
        m = oDate.getMinutes(),
        h = oDate.getHours();

    return `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
}

export default formatTime;