webpackHotUpdate(0,{

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _button = __webpack_require__(161);\n\nvar _button2 = _interopRequireDefault(_button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LogoutButton = function LogoutButton(_ref) {\n  var label = _ref.label;\n\n  return _react2.default.createElement(_button2.default, {\n    label: 'Logout',\n    raised: true,\n    accent: true,\n    onClick: function onClick(e) {\n      $(\"#close-session-link\").trigger(\"click\");\n    } });\n};\n\nvar App = (function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Hello, World!'\n        )\n      );\n    }\n  }]);\n\n  return App;\n})(_react.Component);\n\nexports.default = App;\n;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvd2VicGFjay9BcHAuanN4PzQxMWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSxZQUFZLEdBQUcsU0FBZixZQUFZLE9BQWtCO01BQVosS0FBSyxRQUFMLEtBQUs7O0FBQ3JCLFNBQU87QUFDTCxTQUFLLEVBQUMsUUFBUTtBQUNkLFVBQU07QUFDTixVQUFNO0FBQ04sV0FBTyxFQUFHLGlCQUFDLENBQUMsRUFBSztBQUNmLE9BQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQyxHQUFFO0NBQ2IsQ0FBQzs7SUFFbUIsR0FBRztZQUFILEdBQUc7O1dBQUgsR0FBRzswQkFBSCxHQUFHOztrRUFBSCxHQUFHOzs7ZUFBSCxHQUFHOzs2QkFFYjtBQUNQLGFBQ0U7OztRQUNFOzs7O1NBQXNCO09BRWxCLENBQ047S0FDSDs7O1NBVGtCLEdBQUc7VUFiVCxTQUFTOztrQkFhSCxHQUFHO0FBVXZCIiwiZmlsZSI6IjE2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC10b29sYm94L2xpYi9idXR0b24nO1xuXG5jb25zdCBMb2dvdXRCdXR0b24gPSAoeyBsYWJlbCB9KSA9PiB7XG4gICAgICAgIHJldHVybiA8QnV0dG9uXG4gICAgICAgICAgbGFiZWw9XCJMb2dvdXRcIlxuICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgIGFjY2VudFxuICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4ge1xuICAgICAgICAgICAgJChcIiNjbG9zZS1zZXNzaW9uLWxpbmtcIikudHJpZ2dlcihcImNsaWNrXCIpO1xuICAgICAgICAgIH19Lz5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+SGVsbG8sIFdvcmxkITwvaDE+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL3dlYnBhY2svQXBwLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})