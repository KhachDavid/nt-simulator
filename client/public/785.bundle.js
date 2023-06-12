"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[785],{6785:function(__unused_webpack_module,exports,__webpack_require__){eval('\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nexports["default"] = exports.TeamView = void 0;\nvar _material = __webpack_require__(8410);\nvar _react = _interopRequireWildcard(__webpack_require__(7294));\nvar _reactRedux = __webpack_require__(6706);\nvar _NavBar = _interopRequireDefault(__webpack_require__(8334));\nvar _Page = _interopRequireDefault(__webpack_require__(5694));\nvar _reactRouterDom = __webpack_require__(9818);\nvar _selectors = __webpack_require__(6657);\nvar _nation = __webpack_require__(6381);\nvar _EnhancedTable = _interopRequireDefault(__webpack_require__(2265));\nvar _Pagination = _interopRequireDefault(__webpack_require__(580));\nvar _util = __webpack_require__(1054);\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nvar COLUMN_TO_EXCLUDE = ["uid", "page"];\nvar TeamView = function TeamView(props) {\n  // get team name from url\n  var location = (0, _reactRouterDom.useLocation)();\n  var state = location.state;\n  var team = state.team;\n  var dispatch = (0, _reactRedux.useDispatch)();\n\n  // on unmount, reset the current page to 1\n  (0, _react.useEffect)(function () {\n    return function () {\n      dispatch((0, _nation.resetPlayers)());\n    };\n  }, [dispatch, team.Country]);\n\n  // get players from team\n  // run dispatch(fetchPaginatedResultsRequest(team.name)); in the background\n  // when the user clicks on the pagination buttons\n  var handlePageClick = function handlePageClick(page) {\n    dispatch((0, _nation.fetchPaginatedResultsRequest)(team.Country, page));\n  };\n\n  // GET COLUMNS FROM PLAYERS\n  var columns = props.players.length > 0 ? Object.keys(props.players[0]).map(function (key) {\n    return {\n      id: key,\n      label: key,\n      minWidth: 170,\n      align: "left",\n      format: function format(value) {\n        return value.toLocaleString("en-US");\n      }\n    };\n  }) : [];\n\n  // remove columns that we don\'t want to show\n  columns.forEach(function (column, index) {\n    if (COLUMN_TO_EXCLUDE.includes(column.id)) {\n      columns.splice(index, 1);\n    }\n  });\n\n  // show all the players that have the page equaling the current page\n  var players = props.players.filter(function (player) {\n    // convert player.page to a number\n    // because it is a string when it is fetched from the api\n    var player_page = Number(player.page);\n    return player_page === props.currentPage;\n  });\n  return /*#__PURE__*/_react.default.createElement(_Page.default, null, /*#__PURE__*/_react.default.createElement(_NavBar.default, null), /*#__PURE__*/_react.default.createElement(_material.Breadcrumbs, {\n    "aria-label": "breadcrumb"\n  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n    to: "/"\n  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n    to: "/teams"\n  }, "Teams")), /*#__PURE__*/_react.default.createElement("h1", null, team.Country + " " + (0, _util.getCountryFlag)(team.Country)), /*#__PURE__*/_react.default.createElement(_EnhancedTable.default, {\n    rows: players,\n    columns: columns,\n    preSort: true\n  }), /*#__PURE__*/_react.default.createElement("div", {\n    style: {\n      position: "sticky",\n      bottom: 0,\n      display: "flex",\n      justifyContent: "center",\n      gap: "16px",\n      py: "16px",\n      backgroundColor: "#FFF"\n    }\n  }, /*#__PURE__*/_react.default.createElement(_Pagination.default, {\n    page: props.currentPage,\n    totalPages: props.numPages,\n    onChangePage: handlePageClick,\n    rowsPerPage: 10\n  })));\n};\nexports.TeamView = TeamView;\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    players: (0, _selectors.getPlayersFromNation)(state),\n    isLoading: (0, _selectors.getPlayersIsLoading)(state),\n    hasNext: (0, _selectors.getHasNext)(state),\n    numPages: (0, _selectors.getNumPages)(state),\n    currentPage: (0, _selectors.getCurrentPage)(state)\n  };\n};\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(TeamView);\nexports["default"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU07TUFDVkMsZUFBZSxFQUFFO0lBQ25CO0VBQUUsZ0JBRUZ0RixNQUFBLENBQUFjLE9BQUEsQ0FBQTBELGFBQUEsQ0FBQzlELFdBQUEsQ0FBQUksT0FBVTtJQUNUa0MsSUFBSSxFQUFFWCxLQUFLLENBQUNrQyxXQUFZO0lBQ3hCZ0IsVUFBVSxFQUFFbEQsS0FBSyxDQUFDbUQsUUFBUztJQUMzQkMsWUFBWSxFQUFFMUMsZUFBZ0I7SUFDOUIyQyxXQUFXLEVBQUU7RUFBRyxFQUNoQixDQUNFLENBQ0Q7QUFFWCxDQUFDO0FBQUNDLGdCQUFBLEdBQUF2RCxRQUFBO0FBRUYsSUFBTXdELGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSXBELEtBQUs7RUFBQSxPQUFNO0lBQ2xDVyxPQUFPLEVBQUUsSUFBQTBDLCtCQUFvQixFQUFDckQsS0FBSyxDQUFDO0lBQ3BDc0QsU0FBUyxFQUFFLElBQUFDLDhCQUFtQixFQUFDdkQsS0FBSyxDQUFDO0lBQ3JDd0QsT0FBTyxFQUFFLElBQUFDLHFCQUFVLEVBQUN6RCxLQUFLLENBQUM7SUFDMUJnRCxRQUFRLEVBQUUsSUFBQVUsc0JBQVcsRUFBQzFELEtBQUssQ0FBQztJQUM1QitCLFdBQVcsRUFBRSxJQUFBNEIseUJBQWMsRUFBQzNELEtBQUs7RUFDbkMsQ0FBQztBQUFBLENBQUM7QUFBQyxJQUFBNEQsUUFBQSxHQUVZLElBQUFDLG1CQUFPLEVBQUNULGVBQWUsQ0FBQyxDQUFDeEQsUUFBUSxDQUFDO0FBQUF1RCxrQkFBQSxHQUFBUyxRQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViX2FwcC8uL3NyYy9wYWdlcy9UZWFtVmlldy9pbmRleC5qc3g/NDg2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcmVhZGNydW1icyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBnZXRQbGF5ZXJzRnJvbU5hdGlvbiB9IGZyb20gXCIuLi8uLi9zdG9yZS9zYWdhcy9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7XG4gIGdldFBsYXllcnNJc0xvYWRpbmcsXG4gIGdldEhhc05leHQsXG4gIGdldE51bVBhZ2VzLFxuICBnZXRDdXJyZW50UGFnZSxcbn0gZnJvbSBcIi4uLy4uL3N0b3JlL3NhZ2FzL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoUGFnaW5hdGVkUmVzdWx0c1JlcXVlc3QsIHJlc2V0UGxheWVycyB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL25hdGlvbi5hY3Rpb25cIjtcbmltcG9ydCBFbmhhbmNlZFRhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VuaGFuY2VkVGFibGVcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhZ2luYXRpb25cIjtcbmltcG9ydCB7IGdldENvdW50cnlGbGFnIH0gZnJvbSBcIi4uL1RlYW1zL3V0aWxcIjtcblxuY29uc3QgQ09MVU1OX1RPX0VYQ0xVREUgPSBbXCJ1aWRcIiwgXCJwYWdlXCJdO1xuXG5leHBvcnQgY29uc3QgVGVhbVZpZXcgPSAocHJvcHMpID0+IHtcbiAgLy8gZ2V0IHRlYW0gbmFtZSBmcm9tIHVybFxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG4gIGNvbnN0IHsgdGVhbSB9ID0gc3RhdGU7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAvLyBvbiB1bm1vdW50LCByZXNldCB0aGUgY3VycmVudCBwYWdlIHRvIDFcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2gocmVzZXRQbGF5ZXJzKCkpO1xuICAgIH07XG4gIH0sIFtkaXNwYXRjaCwgdGVhbS5Db3VudHJ5XSk7XG5cbiAgLy8gZ2V0IHBsYXllcnMgZnJvbSB0ZWFtXG4gIC8vIHJ1biBkaXNwYXRjaChmZXRjaFBhZ2luYXRlZFJlc3VsdHNSZXF1ZXN0KHRlYW0ubmFtZSkpOyBpbiB0aGUgYmFja2dyb3VuZFxuICAvLyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcGFnaW5hdGlvbiBidXR0b25zXG4gIGNvbnN0IGhhbmRsZVBhZ2VDbGljayA9IChwYWdlKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hQYWdpbmF0ZWRSZXN1bHRzUmVxdWVzdCh0ZWFtLkNvdW50cnksIHBhZ2UpKTtcbiAgfTtcblxuICAvLyBHRVQgQ09MVU1OUyBGUk9NIFBMQVlFUlNcbiAgY29uc3QgY29sdW1ucyA9XG4gICAgcHJvcHMucGxheWVycy5sZW5ndGggPiAwXG4gICAgICA/IE9iamVjdC5rZXlzKHByb3BzLnBsYXllcnNbMF0pLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICBsYWJlbDoga2V5LFxuICAgICAgICAgICAgbWluV2lkdGg6IDE3MCxcbiAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgIGZvcm1hdDogKHZhbHVlKSA9PiB2YWx1ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICA6IFtdO1xuXG4gIC8vIHJlbW92ZSBjb2x1bW5zIHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBzaG93XG4gIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgIGlmIChDT0xVTU5fVE9fRVhDTFVERS5pbmNsdWRlcyhjb2x1bW4uaWQpKSB7XG4gICAgICBjb2x1bW5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBzaG93IGFsbCB0aGUgcGxheWVycyB0aGF0IGhhdmUgdGhlIHBhZ2UgZXF1YWxpbmcgdGhlIGN1cnJlbnQgcGFnZVxuICBjb25zdCBwbGF5ZXJzID0gcHJvcHMucGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4ge1xuICAgIC8vIGNvbnZlcnQgcGxheWVyLnBhZ2UgdG8gYSBudW1iZXJcbiAgICAvLyBiZWNhdXNlIGl0IGlzIGEgc3RyaW5nIHdoZW4gaXQgaXMgZmV0Y2hlZCBmcm9tIHRoZSBhcGlcbiAgICBsZXQgcGxheWVyX3BhZ2UgPSBOdW1iZXIocGxheWVyLnBhZ2UpO1xuICAgIHJldHVybiBwbGF5ZXJfcGFnZSA9PT0gcHJvcHMuY3VycmVudFBhZ2U7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICB7LyogQWRkIGJyZWFkIGNydW1iICovfVxuICAgICAgPEJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL3RlYW1zXCI+VGVhbXM8L0xpbms+XG4gICAgICA8L0JyZWFkY3J1bWJzPlxuXG4gICAgICA8aDE+e3RlYW0uQ291bnRyeSArIFwiIFwiICsgZ2V0Q291bnRyeUZsYWcodGVhbS5Db3VudHJ5KX08L2gxPlxuICAgICAgey8qIFNob3cgcGxheWVycyAqL31cbiAgICAgIDxFbmhhbmNlZFRhYmxlIHJvd3M9e3BsYXllcnN9IGNvbHVtbnM9e2NvbHVtbnN9IHByZVNvcnQ9e3RydWV9IC8+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJzdGlja3lcIixcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgZ2FwOiBcIjE2cHhcIixcbiAgICAgICAgICBweTogXCIxNnB4XCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICBwYWdlPXtwcm9wcy5jdXJyZW50UGFnZX1cbiAgICAgICAgICB0b3RhbFBhZ2VzPXtwcm9wcy5udW1QYWdlc31cbiAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZVBhZ2VDbGlja31cbiAgICAgICAgICByb3dzUGVyUGFnZT17MTB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHBsYXllcnM6IGdldFBsYXllcnNGcm9tTmF0aW9uKHN0YXRlKSxcbiAgaXNMb2FkaW5nOiBnZXRQbGF5ZXJzSXNMb2FkaW5nKHN0YXRlKSxcbiAgaGFzTmV4dDogZ2V0SGFzTmV4dChzdGF0ZSksXG4gIG51bVBhZ2VzOiBnZXROdW1QYWdlcyhzdGF0ZSksXG4gIGN1cnJlbnRQYWdlOiBnZXRDdXJyZW50UGFnZShzdGF0ZSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFRlYW1WaWV3KTtcbiJdLCJuYW1lcyI6WyJfbWF0ZXJpYWwiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfcmVhY3RSZWR1eCIsIl9OYXZCYXIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX1BhZ2UiLCJfcmVhY3RSb3V0ZXJEb20iLCJfc2VsZWN0b3JzIiwiX25hdGlvbiIsIl9FbmhhbmNlZFRhYmxlIiwiX1BhZ2luYXRpb24iLCJfdXRpbCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwibm9kZUludGVyb3AiLCJXZWFrTWFwIiwiY2FjaGVCYWJlbEludGVyb3AiLCJjYWNoZU5vZGVJbnRlcm9wIiwiX3R5cGVvZiIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwiQ09MVU1OX1RPX0VYQ0xVREUiLCJUZWFtVmlldyIsInByb3BzIiwibG9jYXRpb24iLCJ1c2VMb2NhdGlvbiIsInN0YXRlIiwidGVhbSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJyZXNldFBsYXllcnMiLCJDb3VudHJ5IiwiaGFuZGxlUGFnZUNsaWNrIiwicGFnZSIsImZldGNoUGFnaW5hdGVkUmVzdWx0c1JlcXVlc3QiLCJjb2x1bW5zIiwicGxheWVycyIsImxlbmd0aCIsImtleXMiLCJtYXAiLCJpZCIsImxhYmVsIiwibWluV2lkdGgiLCJhbGlnbiIsImZvcm1hdCIsInZhbHVlIiwidG9Mb2NhbGVTdHJpbmciLCJmb3JFYWNoIiwiY29sdW1uIiwiaW5kZXgiLCJpbmNsdWRlcyIsInNwbGljZSIsImZpbHRlciIsInBsYXllciIsInBsYXllcl9wYWdlIiwiTnVtYmVyIiwiY3VycmVudFBhZ2UiLCJjcmVhdGVFbGVtZW50IiwiQnJlYWRjcnVtYnMiLCJMaW5rIiwidG8iLCJnZXRDb3VudHJ5RmxhZyIsInJvd3MiLCJwcmVTb3J0Iiwic3R5bGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImdhcCIsInB5IiwiYmFja2dyb3VuZENvbG9yIiwidG90YWxQYWdlcyIsIm51bVBhZ2VzIiwib25DaGFuZ2VQYWdlIiwicm93c1BlclBhZ2UiLCJleHBvcnRzIiwibWFwU3RhdGVUb1Byb3BzIiwiZ2V0UGxheWVyc0Zyb21OYXRpb24iLCJpc0xvYWRpbmciLCJnZXRQbGF5ZXJzSXNMb2FkaW5nIiwiaGFzTmV4dCIsImdldEhhc05leHQiLCJnZXROdW1QYWdlcyIsImdldEN1cnJlbnRQYWdlIiwiX2RlZmF1bHQiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6785\n')}}]);