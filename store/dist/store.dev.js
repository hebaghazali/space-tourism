"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapper = exports.makeStore = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _nextReduxWrapper = require("next-redux-wrapper");

var _destinationSlice = _interopRequireDefault(require("./destinationSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var combineReducer = (0, _toolkit.combineReducers)({
  destination: _destinationSlice["default"]
});

var makeStore = function makeStore() {
  return (0, _toolkit.configureStore)({
    reducer: combineReducer
  });
};

exports.makeStore = makeStore;
var wrapper = (0, _nextReduxWrapper.createWrapper)(makeStore);
exports.wrapper = wrapper;