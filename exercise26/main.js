"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likes_1 = require("./likes");
var likes = new likes_1.Likes(25);
console.log('##### Initial values');
likes.checkLikes();
likes.checkStatus();
// start tests
console.log('\n##### Starting tests');
console.log('\n#1 : clicking on like');
likes.clickLike();
likes.checkLikes();
likes.checkStatus();
console.log('\n#2 : clicking on like again');
likes.clickLike();
likes.checkLikes();
likes.checkStatus();
console.log('\n##### Ending tests');
