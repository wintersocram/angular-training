"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, false);
console.log("_likesCount: " + component._likesCount + ", _isSelected: " + component._isSelected);
component._likesCount = 3;
component._isSelected = true;
console.log("_likesCount: " + component._likesCount + ", _isSelected: " + component._isSelected);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
console.log("_likesCount: " + component._likesCount + ", _isSelected: " + component._isSelected);
