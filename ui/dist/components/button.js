"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _vsc = require("react-icons/vsc");
require("../styles.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    type = _ref.type,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'primary' : _ref$color;
  var baseStyles = 'flex justify-center duration-500 items-center rounded-lg focus:outline-none focus:shadow-outline w-full';
  var SizeVariant = {
    small: 'p-2 min-h-10 text-xs',
    medium: 'px-4 py-3 min-h-14 text-sm font-semibold',
    large: 'p-4 min-h-16 text-base font-bold'
  };
  var ColorVariant = {
    preset: 'bg-primary hover:bg-primary-600 opacity-80 ',
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
    info: 'bg-indigo-500 text-white hover:bg-indigo-600',
    outlinePrimary: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    outlineSecondary: 'border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white'
  };
  var loadingStyles = 'opacity-50 cursor-not-allowed';
  var disabledStyles = 'opacity-50 cursor-not-allowed';
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: disabled || loading ? null : onClick,
    className: "".concat(baseStyles, " ").concat(SizeVariant[size], " ").concat(className, " ").concat(loading ? loadingStyles : '', " ").concat(disabled ? disabledStyles : '', " ").concat(ColorVariant[color]),
    type: "".concat(type ? type : null),
    disabled: disabled ? disabled : loading
  }, loading ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "animate-spin"
  }, " ", /*#__PURE__*/_react["default"].createElement(_vsc.VscLoading, null), " ") : children);
};
var _default = exports["default"] = Button;