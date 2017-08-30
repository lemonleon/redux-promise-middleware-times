function addZero(num){
    if(isNaN(Number(num))) return num;

    if(num < 10)
        return '0' + num;
    return num;
}

function formatTime(time) {
    var oDate = new Date();
    oDate.setTime(time);

    var s = oDate.getSeconds(),
        m = oDate.getMinutes(),
        h = oDate.getHours();

    return `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
}

export default formatTime;