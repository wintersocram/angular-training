"use strict"

export class Likes {
    private _status: boolean = false;
    constructor(private _likes: number) {
        this._status = false;
    }


    /* status methods */

    private toggleStatus() {
        if(this._likes <= 0) {
            this._status = false;
            return;
        }
        this._status = !this._status;
    }
    private get status() {
        return this._status ? 'ON' : 'OFF';
    }
    checkStatus() {
        console.log(`LIKE status: ${this.status}`);
    }


    /* likes methods */

    private toggleLike() {
        this._status ? this._likes-- : this._likes++;
        if(this._likes <= 0)
            this._likes = 0;
    }
    checkLikes() {
        console.log(`The current number of likes is ${this._likes}`);
    }


    /* user action */

    clickLike() {
        this.toggleLike();
        this.toggleStatus();
    }
}