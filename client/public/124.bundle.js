"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[124],{4486:function(__unused_webpack_module,exports,__webpack_require__){eval('\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nexports["default"] = void 0;\nvar _react = _interopRequireWildcard(__webpack_require__(7294));\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction Clock() {\n  var _useState = (0, _react.useState)(new Date()),\n    _useState2 = _slicedToArray(_useState, 2),\n    time = _useState2[0],\n    setTime = _useState2[1];\n  (0, _react.useEffect)(function () {\n    var intervalId = setInterval(function () {\n      setTime(new Date());\n    }, 1000);\n    return function () {\n      return clearInterval(intervalId);\n    };\n  }, []);\n  return /*#__PURE__*/_react.default.createElement("div", null, time.toLocaleTimeString());\n}\nvar _default = Clock;\nexports["default"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQ4Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUFtRCxTQUFBQyx5QkFBQUMsV0FBQSxlQUFBQyxPQUFBLGtDQUFBQyxpQkFBQSxPQUFBRCxPQUFBLFFBQUFFLGdCQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLFdBQUEsV0FBQUEsV0FBQSxHQUFBRyxnQkFBQSxHQUFBRCxpQkFBQSxLQUFBRixXQUFBO0FBQUEsU0FBQUgsd0JBQUFPLEdBQUEsRUFBQUosV0FBQSxTQUFBQSxXQUFBLElBQUFJLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLFdBQUFELEdBQUEsUUFBQUEsR0FBQSxhQUFBRSxPQUFBLENBQUFGLEdBQUEseUJBQUFBLEdBQUEsNEJBQUFHLE9BQUEsRUFBQUgsR0FBQSxVQUFBSSxLQUFBLEdBQUFULHdCQUFBLENBQUFDLFdBQUEsT0FBQVEsS0FBQSxJQUFBQSxLQUFBLENBQUFDLEdBQUEsQ0FBQUwsR0FBQSxZQUFBSSxLQUFBLENBQUFFLEdBQUEsQ0FBQU4sR0FBQSxTQUFBTyxNQUFBLFdBQUFDLHFCQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLEdBQUEsSUFBQVosR0FBQSxRQUFBWSxHQUFBLGtCQUFBSCxNQUFBLENBQUFJLFNBQUEsQ0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFmLEdBQUEsRUFBQVksR0FBQSxTQUFBSSxJQUFBLEdBQUFSLHFCQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQVgsR0FBQSxFQUFBWSxHQUFBLGNBQUFJLElBQUEsS0FBQUEsSUFBQSxDQUFBVixHQUFBLElBQUFVLElBQUEsQ0FBQUMsR0FBQSxLQUFBUixNQUFBLENBQUFDLGNBQUEsQ0FBQUgsTUFBQSxFQUFBSyxHQUFBLEVBQUFJLElBQUEsWUFBQVQsTUFBQSxDQUFBSyxHQUFBLElBQUFaLEdBQUEsQ0FBQVksR0FBQSxTQUFBTCxNQUFBLENBQUFKLE9BQUEsR0FBQUgsR0FBQSxNQUFBSSxLQUFBLElBQUFBLEtBQUEsQ0FBQWEsR0FBQSxDQUFBakIsR0FBQSxFQUFBTyxNQUFBLFlBQUFBLE1BQUE7QUFBQSxTQUFBVyxlQUFBQyxHQUFBLEVBQUFDLENBQUEsV0FBQUMsZUFBQSxDQUFBRixHQUFBLEtBQUFHLHFCQUFBLENBQUFILEdBQUEsRUFBQUMsQ0FBQSxLQUFBRywyQkFBQSxDQUFBSixHQUFBLEVBQUFDLENBQUEsS0FBQUksZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBQyxTQUFBO0FBQUEsU0FBQUYsNEJBQUFHLENBQUEsRUFBQUMsTUFBQSxTQUFBRCxDQUFBLHFCQUFBQSxDQUFBLHNCQUFBRSxpQkFBQSxDQUFBRixDQUFBLEVBQUFDLE1BQUEsT0FBQUUsQ0FBQSxHQUFBcEIsTUFBQSxDQUFBSSxTQUFBLENBQUFpQixRQUFBLENBQUFmLElBQUEsQ0FBQVcsQ0FBQSxFQUFBSyxLQUFBLGFBQUFGLENBQUEsaUJBQUFILENBQUEsQ0FBQU0sV0FBQSxFQUFBSCxDQUFBLEdBQUFILENBQUEsQ0FBQU0sV0FBQSxDQUFBQyxJQUFBLE1BQUFKLENBQUEsY0FBQUEsQ0FBQSxtQkFBQUssS0FBQSxDQUFBQyxJQUFBLENBQUFULENBQUEsT0FBQUcsQ0FBQSwrREFBQU8sSUFBQSxDQUFBUCxDQUFBLFVBQUFELGlCQUFBLENBQUFGLENBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFDLGtCQUFBVCxHQUFBLEVBQUFrQixHQUFBLFFBQUFBLEdBQUEsWUFBQUEsR0FBQSxHQUFBbEIsR0FBQSxDQUFBbUIsTUFBQSxFQUFBRCxHQUFBLEdBQUFsQixHQUFBLENBQUFtQixNQUFBLFdBQUFsQixDQUFBLE1BQUFtQixJQUFBLE9BQUFMLEtBQUEsQ0FBQUcsR0FBQSxHQUFBakIsQ0FBQSxHQUFBaUIsR0FBQSxFQUFBakIsQ0FBQSxJQUFBbUIsSUFBQSxDQUFBbkIsQ0FBQSxJQUFBRCxHQUFBLENBQUFDLENBQUEsVUFBQW1CLElBQUE7QUFBQSxTQUFBakIsc0JBQUFILEdBQUEsRUFBQUMsQ0FBQSxRQUFBb0IsRUFBQSxXQUFBckIsR0FBQSxnQ0FBQXNCLE1BQUEsSUFBQXRCLEdBQUEsQ0FBQXNCLE1BQUEsQ0FBQUMsUUFBQSxLQUFBdkIsR0FBQSw0QkFBQXFCLEVBQUEsUUFBQUcsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxJQUFBLE9BQUFDLEVBQUEsT0FBQUMsRUFBQSxpQkFBQUosRUFBQSxJQUFBTCxFQUFBLEdBQUFBLEVBQUEsQ0FBQXpCLElBQUEsQ0FBQUksR0FBQSxHQUFBK0IsSUFBQSxRQUFBOUIsQ0FBQSxRQUFBWCxNQUFBLENBQUErQixFQUFBLE1BQUFBLEVBQUEsVUFBQVEsRUFBQSx1QkFBQUEsRUFBQSxJQUFBTCxFQUFBLEdBQUFFLEVBQUEsQ0FBQTlCLElBQUEsQ0FBQXlCLEVBQUEsR0FBQVcsSUFBQSxNQUFBSixJQUFBLENBQUFLLElBQUEsQ0FBQVQsRUFBQSxDQUFBVSxLQUFBLEdBQUFOLElBQUEsQ0FBQVQsTUFBQSxLQUFBbEIsQ0FBQSxHQUFBNEIsRUFBQSxpQkFBQU0sR0FBQSxJQUFBTCxFQUFBLE9BQUFMLEVBQUEsR0FBQVUsR0FBQSx5QkFBQU4sRUFBQSxZQUFBUixFQUFBLENBQUFlLE1BQUEsS0FBQVQsRUFBQSxHQUFBTixFQUFBLENBQUFlLE1BQUEsSUFBQTlDLE1BQUEsQ0FBQXFDLEVBQUEsTUFBQUEsRUFBQSwyQkFBQUcsRUFBQSxRQUFBTCxFQUFBLGFBQUFHLElBQUE7QUFBQSxTQUFBMUIsZ0JBQUFGLEdBQUEsUUFBQWUsS0FBQSxDQUFBc0IsT0FBQSxDQUFBckMsR0FBQSxVQUFBQSxHQUFBO0FBRW5ELFNBQVNzQyxLQUFLQSxDQUFBLEVBQUc7RUFDZixJQUFBQyxTQUFBLEdBQXdCLElBQUFDLGVBQVEsRUFBQyxJQUFJQyxJQUFJLEVBQUUsQ0FBQztJQUFBQyxVQUFBLEdBQUEzQyxjQUFBLENBQUF3QyxTQUFBO0lBQXJDSSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBRXBCLElBQUFHLGdCQUFTLEVBQUMsWUFBTTtJQUNkLElBQU1DLFVBQVUsR0FBR0MsV0FBVyxDQUFDLFlBQU07TUFDbkNILE9BQU8sQ0FBQyxJQUFJSCxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDLEVBQUUsSUFBSSxDQUFDO0lBRVIsT0FBTztNQUFBLE9BQU1PLGFBQWEsQ0FBQ0YsVUFBVSxDQUFDO0lBQUE7RUFDeEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUFPekUsTUFBQSxDQUFBVyxPQUFBLENBQUFpRSxhQUFBLGNBQU1OLElBQUksQ0FBQ08sa0JBQWtCLEVBQUUsQ0FBTztBQUMvQztBQUFDLElBQUFDLFFBQUEsR0FFY2IsS0FBSztBQUFBYyxrQkFBQSxHQUFBRCxRQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViX2FwcC8uL3NyYy9jb21wb25lbnRzL0Nsb2NrLmpzeD84YjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIENsb2NrKCkge1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lKG5ldyBEYXRlKCkpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdj57dGltZS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsb2NrOyJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJub2RlSW50ZXJvcCIsIldlYWtNYXAiLCJjYWNoZUJhYmVsSW50ZXJvcCIsImNhY2hlTm9kZUludGVyb3AiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImRlZmF1bHQiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiaSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJUeXBlRXJyb3IiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJsZW5ndGgiLCJhcnIyIiwiX2kiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9zIiwiX2UiLCJfeCIsIl9yIiwiX2FyciIsIl9uIiwiX2QiLCJuZXh0IiwiZG9uZSIsInB1c2giLCJ2YWx1ZSIsImVyciIsInJldHVybiIsImlzQXJyYXkiLCJDbG9jayIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTIiLCJ0aW1lIiwic2V0VGltZSIsInVzZUVmZmVjdCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjcmVhdGVFbGVtZW50IiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4486\n')},8334:function(__unused_webpack_module,exports,__webpack_require__){eval('\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nexports["default"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(7294));\nvar _reactRouterDom = __webpack_require__(9818);\nvar _material = __webpack_require__(8410);\nvar _system = __webpack_require__(8579);\nvar _Clock = _interopRequireDefault(__webpack_require__(4486));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\nvar ActiveButton = (0, _system.styled)(_material.Button)({\n  backgroundColor: "#fff",\n  color: "#000",\n  "&:hover": {\n    backgroundColor: "#fff",\n    color: "#000"\n  },\n  "&:active": {\n    backgroundColor: "#fff",\n    color: "#000"\n  }\n});\nfunction Navbar() {\n  var location = (0, _reactRouterDom.useLocation)();\n  return /*#__PURE__*/_react.default.createElement(_material.AppBar, {\n    position: "static"\n  }, /*#__PURE__*/_react.default.createElement(_material.Toolbar, null, /*#__PURE__*/_react.default.createElement(_material.Button, {\n    component: _reactRouterDom.NavLink,\n    to: "/",\n    color: "inherit",\n    sx: {\n      borderRadius: 2\n    }\n  }, location.pathname === "/" ? /*#__PURE__*/_react.default.createElement(ActiveButton, null, "Home") : "Home"), /*#__PURE__*/_react.default.createElement(_material.Button, {\n    component: _reactRouterDom.NavLink,\n    to: "/news",\n    color: "inherit",\n    sx: {\n      borderRadius: 2\n    }\n  }, location.pathname === "/news" ? /*#__PURE__*/_react.default.createElement(ActiveButton, null, "News") : "News"), /*#__PURE__*/_react.default.createElement(_material.Button, {\n    component: _reactRouterDom.NavLink,\n    to: "/teams",\n    color: "inherit",\n    sx: {\n      borderRadius: 2\n    }\n  }, location.pathname === "/teams" ? /*#__PURE__*/_react.default.createElement(ActiveButton, null, "Teams") : "Teams"), /*#__PURE__*/_react.default.createElement(_material.Button, {\n    component: _reactRouterDom.NavLink,\n    to: "/players",\n    color: "inherit",\n    sx: {\n      borderRadius: 2\n    }\n  }, location.pathname === "/players" ? /*#__PURE__*/_react.default.createElement(ActiveButton, null, "Players") : "Players"), /*#__PURE__*/_react.default.createElement("div", {\n    style: {\n      marginLeft: "auto"\n    }\n  }, /*#__PURE__*/_react.default.createElement(_Clock.default, null))));\n}\nvar _default = Navbar;\nexports["default"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFDUixZQUFZLFFBQUMsU0FBTyxDQUFlLEdBRXBDLFNBQ0QsQ0FDTSxlQUVUVixNQUFBLENBQUFTLE9BQUEsQ0FBQVMsYUFBQTtJQUFLVSxLQUFLLEVBQUU7TUFBRUMsVUFBVSxFQUFFO0lBQU87RUFBRSxnQkFDakM3QixNQUFBLENBQUFTLE9BQUEsQ0FBQVMsYUFBQSxDQUFDWixNQUFBLENBQUFHLE9BQUssT0FBRyxDQUNMLENBQ0UsQ0FDSDtBQUViO0FBQUMsSUFBQXFCLFFBQUEsR0FFY2YsTUFBTTtBQUFBZ0Isa0JBQUEsR0FBQUQsUUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9hcHAvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanN4PzY3ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluaywgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQXBwQmFyLCBUb29sYmFyLCBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgQ2xvY2sgZnJvbSBcIi4vQ2xvY2tcIjtcblxuY29uc3QgQWN0aXZlQnV0dG9uID0gc3R5bGVkKEJ1dHRvbikoe1xuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICBjb2xvcjogXCIjMDAwXCIsXG5cbiAgXCImOmhvdmVyXCI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgfSxcblxuICBcIiY6YWN0aXZlXCI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgIDxUb29sYmFyPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29tcG9uZW50PXtOYXZMaW5rfVxuICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICBzeD17eyBib3JkZXJSYWRpdXM6IDIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIgPyAoXG4gICAgICAgICAgICA8QWN0aXZlQnV0dG9uPkhvbWU8L0FjdGl2ZUJ1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJIb21lXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbXBvbmVudD17TmF2TGlua31cbiAgICAgICAgICB0bz1cIi9uZXdzXCJcbiAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgIHN4PXt7IGJvcmRlclJhZGl1czogMiB9fVxuICAgICAgICA+XG4gICAgICAgICAge2xvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9uZXdzXCIgPyAoXG4gICAgICAgICAgICA8QWN0aXZlQnV0dG9uPk5ld3M8L0FjdGl2ZUJ1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJOZXdzXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbXBvbmVudD17TmF2TGlua31cbiAgICAgICAgICB0bz1cIi90ZWFtc1wiXG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICBzeD17eyBib3JkZXJSYWRpdXM6IDIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvdGVhbXNcIiA/IChcbiAgICAgICAgICAgIDxBY3RpdmVCdXR0b24+VGVhbXM8L0FjdGl2ZUJ1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJUZWFtc1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjb21wb25lbnQ9e05hdkxpbmt9XG4gICAgICAgICAgdG89XCIvcGxheWVyc1wiXG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICBzeD17eyBib3JkZXJSYWRpdXM6IDIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvcGxheWVyc1wiID8gKFxuICAgICAgICAgICAgPEFjdGl2ZUJ1dHRvbj5QbGF5ZXJzPC9BY3RpdmVCdXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFwiUGxheWVyc1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIHsvKiBTaG93IHRoZSBjdXJyZW50IHRpbWUgYW5kIGRhdGUgb24gdGhlIHJpZ2h0IGFuZCBtYWtlIGl0IHVwZGF0ZSBieSBzZWNvbmQgICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH19PlxuICAgICAgICAgIDxDbG9jayAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVG9vbGJhcj5cbiAgICA8L0FwcEJhcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JlYWN0Um91dGVyRG9tIiwiX21hdGVyaWFsIiwiX3N5c3RlbSIsIl9DbG9jayIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiQWN0aXZlQnV0dG9uIiwic3R5bGVkIiwiQnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJOYXZiYXIiLCJsb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwiY3JlYXRlRWxlbWVudCIsIkFwcEJhciIsInBvc2l0aW9uIiwiVG9vbGJhciIsImNvbXBvbmVudCIsIk5hdkxpbmsiLCJ0byIsInN4IiwiYm9yZGVyUmFkaXVzIiwicGF0aG5hbWUiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8334\n')},5694:function(__unused_webpack_module,exports,__webpack_require__){eval('\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nexports["default"] = void 0;\nvar React = _interopRequireWildcard(__webpack_require__(7294));\nvar _nprogress = __webpack_require__(2757);\nvar _usePage2 = __webpack_require__(8475);\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nvar Page = function Page(_ref) {\n  var children = _ref.children;\n  var _usePage = (0, _usePage2.usePage)(),\n    onLoad = _usePage.onLoad;\n  var render = React.useMemo(function () {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, children);\n  }, [children]);\n  React.useEffect(function () {\n    onLoad(render);\n  }, [onLoad, render]);\n  React.useEffect(function () {\n    (0, _nprogress.endLoading)();\n    return function () {\n      return (0, _nprogress.startLoading)();\n    };\n  }, []);\n  return render;\n};\nvar _default = Page;\nexports["default"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTY5NC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsS0FBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFVBQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBRSxTQUFBLEdBQUFGLG1CQUFBO0FBQW9DLFNBQUFHLHlCQUFBQyxXQUFBLGVBQUFDLE9BQUEsa0NBQUFDLGlCQUFBLE9BQUFELE9BQUEsUUFBQUUsZ0JBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsV0FBQSxXQUFBQSxXQUFBLEdBQUFHLGdCQUFBLEdBQUFELGlCQUFBLEtBQUFGLFdBQUE7QUFBQSxTQUFBTCx3QkFBQVMsR0FBQSxFQUFBSixXQUFBLFNBQUFBLFdBQUEsSUFBQUksR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsV0FBQUQsR0FBQSxRQUFBQSxHQUFBLGFBQUFFLE9BQUEsQ0FBQUYsR0FBQSx5QkFBQUEsR0FBQSw0QkFBQUcsT0FBQSxFQUFBSCxHQUFBLFVBQUFJLEtBQUEsR0FBQVQsd0JBQUEsQ0FBQUMsV0FBQSxPQUFBUSxLQUFBLElBQUFBLEtBQUEsQ0FBQUMsR0FBQSxDQUFBTCxHQUFBLFlBQUFJLEtBQUEsQ0FBQUUsR0FBQSxDQUFBTixHQUFBLFNBQUFPLE1BQUEsV0FBQUMscUJBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsR0FBQSxJQUFBWixHQUFBLFFBQUFZLEdBQUEsa0JBQUFILE1BQUEsQ0FBQUksU0FBQSxDQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWYsR0FBQSxFQUFBWSxHQUFBLFNBQUFJLElBQUEsR0FBQVIscUJBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBWCxHQUFBLEVBQUFZLEdBQUEsY0FBQUksSUFBQSxLQUFBQSxJQUFBLENBQUFWLEdBQUEsSUFBQVUsSUFBQSxDQUFBQyxHQUFBLEtBQUFSLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSCxNQUFBLEVBQUFLLEdBQUEsRUFBQUksSUFBQSxZQUFBVCxNQUFBLENBQUFLLEdBQUEsSUFBQVosR0FBQSxDQUFBWSxHQUFBLFNBQUFMLE1BQUEsQ0FBQUosT0FBQSxHQUFBSCxHQUFBLE1BQUFJLEtBQUEsSUFBQUEsS0FBQSxDQUFBYSxHQUFBLENBQUFqQixHQUFBLEVBQUFPLE1BQUEsWUFBQUEsTUFBQTtBQUlwQyxJQUFNVyxJQUF5QixHQUFHLFNBQTVCQSxJQUF5QkEsQ0FBQUMsSUFBQSxFQUFxQjtFQUFBLElBQWZDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0VBQzNDLElBQUFDLFFBQUEsR0FBbUIsSUFBQUMsaUJBQU8sR0FBRTtJQUFwQkMsTUFBTSxHQUFBRixRQUFBLENBQU5FLE1BQU07RUFFZCxJQUFNQyxNQUFNLEdBQUdsQyxLQUFLLENBQUNtQyxPQUFPLENBQUMsWUFBTTtJQUNqQyxvQkFBT25DLEtBQUEsQ0FBQW9DLGFBQUEsQ0FBQXBDLEtBQUEsQ0FBQXFDLFFBQUEsUUFBR1AsUUFBUSxDQUFJO0VBQ3hCLENBQUMsRUFBRSxDQUFDQSxRQUFRLENBQUMsQ0FBQztFQUVkOUIsS0FBSyxDQUFDc0MsU0FBUyxDQUFDLFlBQU07SUFDcEJMLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFBRSxDQUFDRCxNQUFNLEVBQUVDLE1BQU0sQ0FBQyxDQUFDO0VBRXBCbEMsS0FBSyxDQUFDc0MsU0FBUyxDQUFDLFlBQU07SUFDcEIsSUFBQUMscUJBQVUsR0FBRTtJQUNaLE9BQU87TUFBQSxPQUFNLElBQUFDLHVCQUFZLEdBQUU7SUFBQTtFQUM3QixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sT0FBT04sTUFBTTtBQUNmLENBQUM7QUFBQyxJQUFBTyxRQUFBLEdBRWFiLElBQUk7QUFBQWMsa0JBQUEsR0FBQUQsUUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9hcHAvLi9zcmMvY29tcG9uZW50cy9QYWdlLnRzeD8zNmExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGVuZExvYWRpbmcsIHN0YXJ0TG9hZGluZyB9IGZyb20gJy4uL3NlcnZpY2VzL25wcm9ncmVzcyc7XG5pbXBvcnQgeyB1c2VQYWdlIH0gZnJvbSAnLi91c2VQYWdlJztcblxuaW50ZXJmYWNlIFBhZ2VQcm9wcyB7fVxuXG5jb25zdCBQYWdlOiBSZWFjdC5GQzxQYWdlUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IG9uTG9hZCB9ID0gdXNlUGFnZSgpO1xuXG4gIGNvbnN0IHJlbmRlciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG4gIH0sIFtjaGlsZHJlbl0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25Mb2FkKHJlbmRlcik7XG4gIH0sIFtvbkxvYWQsIHJlbmRlcl0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZW5kTG9hZGluZygpO1xuICAgIHJldHVybiAoKSA9PiBzdGFydExvYWRpbmcoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiByZW5kZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX25wcm9ncmVzcyIsIl91c2VQYWdlMiIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiZGVmYXVsdCIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwiUGFnZSIsIl9yZWYiLCJjaGlsZHJlbiIsIl91c2VQYWdlIiwidXNlUGFnZSIsIm9uTG9hZCIsInJlbmRlciIsInVzZU1lbW8iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJlbmRMb2FkaW5nIiwic3RhcnRMb2FkaW5nIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5694\n')},8475:function(__unused_webpack_module,exports,__webpack_require__){eval('\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nexports.usePage = void 0;\nvar React = _interopRequireWildcard(__webpack_require__(7294));\nvar _FallbackProvider = __webpack_require__(2430);\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nvar usePage = function usePage() {\n  var _React$useContext = React.useContext(_FallbackProvider.FallbackContext),\n    updateFallback = _React$useContext.updateFallback;\n  var onLoad = React.useCallback(function (component) {\n    if (component === undefined) component = null;\n    updateFallback(component);\n  }, [updateFallback]);\n  return {\n    onLoad: onLoad\n  };\n};\nexports.usePage = usePage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQ3NS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsS0FBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLGlCQUFBLEdBQUFELG1CQUFBO0FBQW1FLFNBQUFFLHlCQUFBQyxXQUFBLGVBQUFDLE9BQUEsa0NBQUFDLGlCQUFBLE9BQUFELE9BQUEsUUFBQUUsZ0JBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsV0FBQSxXQUFBQSxXQUFBLEdBQUFHLGdCQUFBLEdBQUFELGlCQUFBLEtBQUFGLFdBQUE7QUFBQSxTQUFBSix3QkFBQVEsR0FBQSxFQUFBSixXQUFBLFNBQUFBLFdBQUEsSUFBQUksR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsV0FBQUQsR0FBQSxRQUFBQSxHQUFBLGFBQUFFLE9BQUEsQ0FBQUYsR0FBQSx5QkFBQUEsR0FBQSw0QkFBQUcsT0FBQSxFQUFBSCxHQUFBLFVBQUFJLEtBQUEsR0FBQVQsd0JBQUEsQ0FBQUMsV0FBQSxPQUFBUSxLQUFBLElBQUFBLEtBQUEsQ0FBQUMsR0FBQSxDQUFBTCxHQUFBLFlBQUFJLEtBQUEsQ0FBQUUsR0FBQSxDQUFBTixHQUFBLFNBQUFPLE1BQUEsV0FBQUMscUJBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsR0FBQSxJQUFBWixHQUFBLFFBQUFZLEdBQUEsa0JBQUFILE1BQUEsQ0FBQUksU0FBQSxDQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWYsR0FBQSxFQUFBWSxHQUFBLFNBQUFJLElBQUEsR0FBQVIscUJBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBWCxHQUFBLEVBQUFZLEdBQUEsY0FBQUksSUFBQSxLQUFBQSxJQUFBLENBQUFWLEdBQUEsSUFBQVUsSUFBQSxDQUFBQyxHQUFBLEtBQUFSLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSCxNQUFBLEVBQUFLLEdBQUEsRUFBQUksSUFBQSxZQUFBVCxNQUFBLENBQUFLLEdBQUEsSUFBQVosR0FBQSxDQUFBWSxHQUFBLFNBQUFMLE1BQUEsQ0FBQUosT0FBQSxHQUFBSCxHQUFBLE1BQUFJLEtBQUEsSUFBQUEsS0FBQSxDQUFBYSxHQUFBLENBQUFqQixHQUFBLEVBQUFPLE1BQUEsWUFBQUEsTUFBQTtBQUU1RCxJQUFNVyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQzNCLElBQUFDLGlCQUFBLEdBQTJCNUIsS0FBSyxDQUFDNkIsVUFBVSxDQUFDQyxpQ0FBZSxDQUFDO0lBQXBEQyxjQUFjLEdBQUFILGlCQUFBLENBQWRHLGNBQWM7RUFFdEIsSUFBTUMsTUFBTSxHQUFHaEMsS0FBSyxDQUFDaUMsV0FBVyxDQUM5QixVQUFDQyxTQUFtQyxFQUFLO0lBQ3ZDLElBQUlBLFNBQVMsS0FBS0MsU0FBUyxFQUFFRCxTQUFTLEdBQUcsSUFBSTtJQUM3Q0gsY0FBYyxDQUFDRyxTQUFTLENBQUM7RUFDM0IsQ0FBQyxFQUNELENBQUNILGNBQWMsQ0FBQyxDQUNqQjtFQUVELE9BQU87SUFBRUMsTUFBTSxFQUFOQTtFQUFPLENBQUM7QUFDbkIsQ0FBQztBQUFDSSxlQUFBLEdBQUFULE9BQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfYXBwLy4vc3JjL2NvbXBvbmVudHMvdXNlUGFnZS50c3g/MzAzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYWxsYmFja0NvbnRleHQsIEZhbGxiYWNrVHlwZSB9IGZyb20gJy4vRmFsbGJhY2tQcm92aWRlcic7XG5cbmV4cG9ydCBjb25zdCB1c2VQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHVwZGF0ZUZhbGxiYWNrIH0gPSBSZWFjdC51c2VDb250ZXh0KEZhbGxiYWNrQ29udGV4dCk7XG5cbiAgY29uc3Qgb25Mb2FkID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGNvbXBvbmVudDogRmFsbGJhY2tUeXBlIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICBpZiAoY29tcG9uZW50ID09PSB1bmRlZmluZWQpIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICB1cGRhdGVGYWxsYmFjayhjb21wb25lbnQpO1xuICAgIH0sXG4gICAgW3VwZGF0ZUZhbGxiYWNrXVxuICApO1xuXG4gIHJldHVybiB7IG9uTG9hZCB9O1xufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfRmFsbGJhY2tQcm92aWRlciIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiZGVmYXVsdCIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwidXNlUGFnZSIsIl9SZWFjdCR1c2VDb250ZXh0IiwidXNlQ29udGV4dCIsIkZhbGxiYWNrQ29udGV4dCIsInVwZGF0ZUZhbGxiYWNrIiwib25Mb2FkIiwidXNlQ2FsbGJhY2siLCJjb21wb25lbnQiLCJ1bmRlZmluZWQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8475\n')},1124:function(__unused_webpack_module,exports,__webpack_require__){eval('\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nexports["default"] = exports.Home = void 0;\nvar _propTypes = _interopRequireDefault(__webpack_require__(5697));\nvar _react = _interopRequireDefault(__webpack_require__(7294));\nvar _reactRedux = __webpack_require__(6706);\nvar _ModalProvider = __webpack_require__(7408);\nvar _NavBar = _interopRequireDefault(__webpack_require__(8334));\nvar _Page = _interopRequireDefault(__webpack_require__(5694));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\nvar Home = function Home(props) {\n  return /*#__PURE__*/_react.default.createElement(_Page.default, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_NavBar.default, null), /*#__PURE__*/_react.default.createElement("h1", null, "Home")));\n};\nexports.Home = Home;\nHome.propTypes = {};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {};\n};\nvar mapDispatchToProps = {};\nvar _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\nexports["default"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEyNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxVQUFBLEdBQUFDLHNCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBRixzQkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFFLFdBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxjQUFBLEdBQUFILG1CQUFBO0FBQ0EsSUFBQUksT0FBQSxHQUFBTCxzQkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFLLEtBQUEsR0FBQU4sc0JBQUEsQ0FBQUMsbUJBQUE7QUFBeUMsU0FBQUQsdUJBQUFPLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxLQUFBRSxPQUFBLEVBQUFGLEdBQUE7QUFFbEMsSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUlDLEtBQUssRUFBSztFQUM3QixvQkFDRVQsTUFBQSxDQUFBTyxPQUFBLENBQUFHLGFBQUEsQ0FBQ04sS0FBQSxDQUFBRyxPQUFJLHFCQUNIUCxNQUFBLENBQUFPLE9BQUEsQ0FBQUcsYUFBQSwyQkFDRVYsTUFBQSxDQUFBTyxPQUFBLENBQUFHLGFBQUEsQ0FBQ1AsT0FBQSxDQUFBSSxPQUFNLE9BQUUsZUFDVFAsTUFBQSxDQUFBTyxPQUFBLENBQUFHLGFBQUEsYUFBSSxNQUFJLENBQUssQ0FDVCxDQUNEO0FBRVgsQ0FBQztBQUFDQyxZQUFBLEdBQUFILElBQUE7QUFFRkEsSUFBSSxDQUFDSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBRW5CLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSztFQUFBLE9BQU0sQ0FBQyxDQUFDO0FBQUEsQ0FBQztBQUV2QyxJQUFNQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFBQyxJQUFBQyxRQUFBLEdBRWYsSUFBQUMsbUJBQU8sRUFBQ0osZUFBZSxFQUFFRSxrQkFBa0IsQ0FBQyxDQUFDUCxJQUFJLENBQUM7QUFBQUcsa0JBQUEsR0FBQUssUUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9hcHAvLi9zcmMvcGFnZXMvSG9tZS9pbmRleC5qc3g/ZjVjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Nb2RhbFByb3ZpZGVyXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFnZVwiO1xuXG5leHBvcnQgY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdkJhci8+XG4gICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbkhvbWUucHJvcFR5cGVzID0ge307XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHt9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWUpO1xuIl0sIm5hbWVzIjpbIl9wcm9wVHlwZXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdCIsIl9yZWFjdFJlZHV4IiwiX01vZGFsUHJvdmlkZXIiLCJfTmF2QmFyIiwiX1BhZ2UiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIkhvbWUiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJleHBvcnRzIiwicHJvcFR5cGVzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJfZGVmYXVsdCIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1124\n')},2757:function(__unused_webpack_module,exports,__webpack_require__){eval('\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nexports.startLoading = exports.endLoading = void 0;\nvar _nprogress = _interopRequireDefault(__webpack_require__(4865));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n_nprogress.default.configure({\n  showSpinner: false\n});\nvar startLoading = function startLoading() {\n  _nprogress.default.start();\n};\nexports.startLoading = startLoading;\nvar endLoading = function endLoading() {\n  _nprogress.default.done();\n};\nexports.endLoading = endLoading;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc1Ny5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxVQUFBLEdBQUFDLHNCQUFBLENBQUFDLG1CQUFBO0FBQWtDLFNBQUFELHVCQUFBRSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsS0FBQUUsT0FBQSxFQUFBRixHQUFBO0FBRWxDRyxrQkFBUyxDQUFDQyxTQUFTLENBQUM7RUFDbEJDLFdBQVcsRUFBRTtBQUNmLENBQUMsQ0FBQztBQUVLLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7RUFDaENILGtCQUFTLENBQUNJLEtBQUssRUFBRTtBQUNuQixDQUFDO0FBQUNDLG9CQUFBLEdBQUFGLFlBQUE7QUFFSyxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQzlCTixrQkFBUyxDQUFDTyxJQUFJLEVBQUU7QUFDbEIsQ0FBQztBQUFDRixrQkFBQSxHQUFBQyxVQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViX2FwcC8uL3NyYy9zZXJ2aWNlcy9ucHJvZ3Jlc3MudHM/YWZhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgblByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XG5cbm5Qcm9ncmVzcy5jb25maWd1cmUoe1xuICBzaG93U3Bpbm5lcjogZmFsc2UsXG59KTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+IHtcbiAgblByb2dyZXNzLnN0YXJ0KCk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5kTG9hZGluZyA9ICgpID0+IHtcbiAgblByb2dyZXNzLmRvbmUoKTtcbn07Il0sIm5hbWVzIjpbIl9ucHJvZ3Jlc3MiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiblByb2dyZXNzIiwiY29uZmlndXJlIiwic2hvd1NwaW5uZXIiLCJzdGFydExvYWRpbmciLCJzdGFydCIsImV4cG9ydHMiLCJlbmRMb2FkaW5nIiwiZG9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2757\n')}}]);