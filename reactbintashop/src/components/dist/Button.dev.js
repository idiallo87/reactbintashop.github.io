"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ntext-transform: capitalize;\nfont-size: 1.4rem;\nbackground: transparent;\ncolor: #D500F9;\nborder:0.1rem solid #212121;\nborder-radius: 25px;\ncursor:pointer;\nmargin: 0.2rem 0.5rem 0.2rem 0;\ntransition: all 0.5s ease-in-out;\n&:hover{\n    background: linear-gradient(to right, #9E9E9E, #212121);\n    color: #FFF;\n    border: none;\n    transform: scale(1.1, 1.1);\n    transition: transform 500ms ease-in-out;\n&:focus{\n    outline:none;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonContainer = _styledComponents["default"].button(_templateObject());

exports.ButtonContainer = ButtonContainer;