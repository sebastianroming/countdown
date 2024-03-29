Countdown = function() {

    var that = {};
    var timeOfEvent = '2018-06-01 17:00:00';
    var countdownElement = 'countdown';

    that.start = function(timeOfEvent, countdownElement) {

        that.timeOfEvent = timeOfEvent || '2018-06-01 17:00:00';
        that.countdownElement = countdownElement || 'countdown';

        var _countdownDate = new Date(that.timeOfEvent).getTime();
        var _interval = setInterval(function() {

            var _now = new Date().getTime();
            var _timeUntilEvent = _countdownDate - _now;

            var _daysToEvent    = Math.floor(_timeUntilEvent / (1000 * 60 * 60 *24));
            var _hrsToEvent     = Math.floor((_timeUntilEvent % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
            var _minsToEvent    = Math.floor((_timeUntilEvent % (1000 * 60 * 60)) / (1000 * 60));
            var _secsToEvent    = Math.floor((_timeUntilEvent % (1000 * 60)) / 1000);
            var _daysText       = (_daysToEvent == 1) ? 'Tag' : 'Tage';
            var _hrsText        = (_hrsToEvent == 1) ? 'Stunde' : 'Stunden';
            var _minsText       = (_minsToEvent == 1) ? 'Minute' : 'Minuten';
            var _secsText       = (_secsToEvent == 1) ? 'Sekunde' : 'Sekunden';

            var _hrsOutput = (_hrsToEvent.toString().length == 1) ? '0' + _hrsToEvent : _hrsToEvent;
            var _minsOutput = (_minsToEvent.toString().length == 1) ? '0' + _minsToEvent : _minsToEvent;
            var _secsOutput = (_secsToEvent.toString().length == 1) ? '0' + _secsToEvent : _secsToEvent;

            document.getElementById(that.countdownElement).innerHTML = _daysToEvent + ' ' + _daysText + '<br />' + _hrsOutput + ':' + _minsOutput + ':' + _secsOutput;

        }, 1000);

    }

    return that;

}();