"use strict";
exports.__esModule = true;
exports.Calendar = void 0;
var Calendar = /** @class */ (function () {
    function Calendar() {
        this.people = new Array();
    }
    /**
     * printCalendar
     */
    Calendar.prototype.printCalendar = function () {
        console.log(this.people);
    };
    return Calendar;
}());
exports.Calendar = Calendar;
