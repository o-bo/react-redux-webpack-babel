webpackHotUpdate(0,{

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _button = __webpack_require__(161);\n\nvar _button2 = _interopRequireDefault(_button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LogoutButton = { label: label };\n\nvar App = (function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Hello, World!'\n        ),\n        _react2.default.createElement(_button2.default, {\n          label: 'Logout',\n          raised: true,\n          accent: true,\n          onClick: function onClick(e) {\n            $(\"#close-session-link\").trigger(\"click\");\n          } })\n      );\n    }\n  }]);\n\n  return App;\n})(_react.Component);\n\nexports.default = App;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvd2VicGFjay9BcHAuanN4PzQxMWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSxZQUFZLEdBQUksRUFBRSxLQUFLLEVBQUwsS0FBSyxFQUFHOztJQUVYLEdBQUc7WUFBSCxHQUFHOztXQUFILEdBQUc7MEJBQUgsR0FBRzs7a0VBQUgsR0FBRzs7O2VBQUgsR0FBRzs7NkJBRWI7QUFDUCxhQUNFOzs7UUFDRTs7OztTQUFzQjtRQUV0QjtBQUNFLGVBQUssRUFBQyxRQUFRO0FBQ2QsZ0JBQU07QUFDTixnQkFBTTtBQUNOLGlCQUFPLEVBQUcsaUJBQUMsQ0FBQyxFQUFLO0FBQ2YsYUFBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1dBQzFDLEdBQUU7T0FDRixDQUNOO0tBQ0g7OztTQWhCa0IsR0FBRztVQUxULFNBQVM7O2tCQUtILEdBQUciLCJmaWxlIjoiMTYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2J1dHRvbic7XG5cbmNvbnN0IExvZ291dEJ1dHRvbiA9ICh7IGxhYmVsIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+SGVsbG8sIFdvcmxkITwvaDE+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiTG9nb3V0XCJcbiAgICAgICAgICByYWlzZWRcbiAgICAgICAgICBhY2NlbnRcbiAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHtcbiAgICAgICAgICAgICQoXCIjY2xvc2Utc2Vzc2lvbi1saW5rXCIpLnRyaWdnZXIoXCJjbGlja1wiKTtcbiAgICAgICAgICB9fS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL3dlYnBhY2svQXBwLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})