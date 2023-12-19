"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./config/nodemailer.js":
/*!******************************!*\
  !*** ./config/nodemailer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mailOptions: () => (/* binding */ mailOptions),\n/* harmony export */   transporter: () => (/* binding */ transporter)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nconst email = process.env.EMAIL;\nconst pass = process.env.EMAIL_PASS;\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    service: \"gmail\",\n    auth: {\n        user: email,\n        pass\n    }\n});\nconst mailOptions = {\n    from: email,\n    to: email\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvbm9kZW1haWxlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9DO0FBRXBDLE1BQU1DLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSztBQUMvQixNQUFNQyxPQUFPSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7QUFFNUIsTUFBTUMsY0FBY1AsaUVBQTBCLENBQUM7SUFDbERTLFNBQVM7SUFDVEMsTUFBTTtRQUNGQyxNQUFNVjtRQUNOSTtJQUNKO0FBQ0osR0FBRztBQUVJLE1BQU1PLGNBQWM7SUFDdkJDLE1BQU1aO0lBQ05hLElBQUliO0FBQ1IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnNpdGUvLi9jb25maWcvbm9kZW1haWxlci5qcz81MzI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gXCJub2RlbWFpbGVyXCI7XG5cbmNvbnN0IGVtYWlsID0gcHJvY2Vzcy5lbnYuRU1BSUw7XG5jb25zdCBwYXNzID0gcHJvY2Vzcy5lbnYuRU1BSUxfUEFTUztcblxuZXhwb3J0IGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIHNlcnZpY2U6ICdnbWFpbCcsXG4gICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBlbWFpbCxcbiAgICAgICAgcGFzcyxcbiAgICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgIGZyb206IGVtYWlsLFxuICAgIHRvOiBlbWFpbCxcbn0iXSwibmFtZXMiOlsibm9kZW1haWxlciIsImVtYWlsIiwicHJvY2VzcyIsImVudiIsIkVNQUlMIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/nodemailer.js\n");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_nodemailer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/nodemailer.js */ \"(api)/./config/nodemailer.js\");\n\nconst handler = async (req, res)=>{\n    console.log(req.body);\n    if (req.method === \"POST\") {\n        const data = req.body;\n        if (!data.name || !data.email || !data.message) {\n            return res.status(400).json({\n                message: \"Bad request\"\n            });\n        }\n        try {\n            await _config_nodemailer_js__WEBPACK_IMPORTED_MODULE_0__.transporter.sendMail({\n                ..._config_nodemailer_js__WEBPACK_IMPORTED_MODULE_0__.mailOptions,\n                subject: data.subject,\n                text: \"This is a test string\",\n                html: \"<h1>Test Title</h1><p>Some body text</p>,\"\n            });\n            return res.status(200).json({\n                success: true\n            });\n        } catch (error) {\n            console.log(error);\n            res.status(400).json({\n                message: error.message\n            });\n        }\n    }\n    res.status(400).json({\n        message: \"Bad request\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzRTtBQUV0RSxNQUFNRSxVQUFVLE9BQU9DLEtBQUtDO0lBQ3hCQyxRQUFRQyxHQUFHLENBQUNILElBQUlJLElBQUk7SUFFcEIsSUFBR0osSUFBSUssTUFBTSxLQUFLLFFBQVE7UUFDdEIsTUFBTUMsT0FBT04sSUFBSUksSUFBSTtRQUNyQixJQUFJLENBQUNFLEtBQUtDLElBQUksSUFBSSxDQUFDRCxLQUFLRSxLQUFLLElBQUksQ0FBQ0YsS0FBS0csT0FBTyxFQUFFO1lBQzVDLE9BQU9SLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVGLFNBQVM7WUFBYztRQUN6RDtRQUVBLElBQUk7WUFDQSxNQUFNWCw4REFBV0EsQ0FBQ2MsUUFBUSxDQUFDO2dCQUN2QixHQUFHZiw4REFBVztnQkFDZGdCLFNBQVNQLEtBQUtPLE9BQU87Z0JBQ3JCQyxNQUFNO2dCQUNOQyxNQUFNO1lBQ1Y7WUFFQSxPQUFPZCxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFSyxTQUFTO1lBQUs7UUFDaEQsRUFBRSxPQUFPQyxPQUFPO1lBQ1pmLFFBQVFDLEdBQUcsQ0FBQ2M7WUFDWmhCLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVGLFNBQVNRLE1BQU1SLE9BQU87WUFBQztRQUNsRDtJQUNKO0lBQ0FSLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUYsU0FBUztJQUFjO0FBQ2xEO0FBRUEsaUVBQWVWLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWlsT3B0aW9ucywgdHJhbnNwb3J0ZXIgfSBmcm9tIFwiLi4vLi4vY29uZmlnL25vZGVtYWlsZXIuanNcIjtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcblxuICAgIGlmKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICAgICAgaWYgKCFkYXRhLm5hbWUgfHwgIWRhdGEuZW1haWwgfHwgIWRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJCYWQgcmVxdWVzdFwiIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAgICAgICAgICAgICAuLi5tYWlsT3B0aW9ucyxcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBkYXRhLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgdGV4dDogXCJUaGlzIGlzIGEgdGVzdCBzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBodG1sOiBcIjxoMT5UZXN0IFRpdGxlPC9oMT48cD5Tb21lIGJvZHkgdGV4dDwvcD4sXCJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIkJhZCByZXF1ZXN0XCIgfSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIm1haWxPcHRpb25zIiwidHJhbnNwb3J0ZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJtZXRob2QiLCJkYXRhIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsInN0YXR1cyIsImpzb24iLCJzZW5kTWFpbCIsInN1YmplY3QiLCJ0ZXh0IiwiaHRtbCIsInN1Y2Nlc3MiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();