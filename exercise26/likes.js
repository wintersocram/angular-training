"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Likes = /** @class */ (function () {
    function Likes(_likes) {
        this._likes = _likes;
        this._status = false;
        this._status = false;
    }
    /* status methods */
    Likes.prototype.toggleStatus = function () {
        if (this._likes <= 0) {
            this._status = false;
            return;
        }
        this._status = !this._status;
    };
    Object.defineProperty(Likes.prototype, "status", {
        get: function () {
            return this._status ? 'ON' : 'OFF';
        },
        enumerable: true,
        configurable: true
    });
    Likes.prototype.checkStatus = function () {
        console.log("LIKE status: " + this.status);
    };
    /* likes methods */
    Likes.prototype.toggleLike = function () {
        this._status ? this._likes-- : this._likes++;
        if (this._likes <= 0)
            this._likes = 0;
    };
    Likes.prototype.checkLikes = function () {
        console.log("The current number of likes is " + this._likes);
    };
    /* user action */
    Likes.prototype.clickLike = function () {
        this.toggleLike();
        this.toggleStatus();
    };
    return Likes;
}());
exports.Likes = Likes;
