console.log();
const now = new Date();

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function msToHMS(ms) {
    let seconds = parseInt(ms / 1000);
    const hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    const minutes = parseInt(seconds / 60);
    seconds = seconds % 60;
    return (pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2));
}

function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
}

function itsStillGoing() {
    const innerNow = new Date();
    if (innerNow.getTime() < dstart) {
        return true;
    } else return false;
}
const nstart = new Date("04/01/2025" + " 00:00:00").getTime();
const dstart = new Date("15/07/2025" + " 00:00:00").getTime();
const mlenght = dstart - nstart;

function COUNTDOWN() {
    const now_ms = Date.now();
    const until = (dstart - now_ms);
    const until_now = (dstart - nstart) - until;

    if (itsStillGoing()) {
        $('.countdown').show();
        $('.countdown_stats').show();
        $('.tempo_rimanente').html(msToHMS(until));
        $('.stats_hours').html(msToHMS(until_now));
        $('.stats_percentage').html(percentage(until_now, mlenght).toFixed(5) + "%");
        $('.tempo_scaduto').hide();
        setTimeout(COUNTDOWN, 250);
    } else {
        $('.countdown').hide();
        $('.tempo_scaduto').show();
        setTimeout(COUNTDOWN, 250);
    }
};
