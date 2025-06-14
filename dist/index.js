"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var index_exports = {};
__export(index_exports, {
    CustomButton: function() {
        return CustomButton_default;
    },
    CustomDropdown: function() {
        return CustomDropdown_default;
    },
    CustomError: function() {
        return CustomError_default;
    },
    CustomInput: function() {
        return CustomInput_default;
    },
    CustomModal: function() {
        return CustomModal_default;
    },
    CustomMultiDropdown: function() {
        return CustomMultiDropdown_default;
    },
    CustomSelect: function() {
        return CustomSelect_default;
    },
    CustomSubtitle: function() {
        return CustomSubtitle;
    },
    CustomSwitch: function() {
        return CustomSwitch_default;
    },
    CustomText: function() {
        return CustomText;
    },
    CustomTextItalics: function() {
        return CustomTextItalics;
    },
    CustomTextNeutral: function() {
        return CustomTextNeutral;
    },
    CustomTitle: function() {
        return CustomTitle;
    },
    CustomTitleMedium: function() {
        return CustomTitleMedium;
    },
    CustomUrbanistSubtitle: function() {
        return CustomUrbanistSubtitle;
    },
    CustomUrbanistText: function() {
        return CustomUrbanistText;
    },
    CustomUrbanistTitle: function() {
        return CustomUrbanistTitle;
    },
    EmptyList: function() {
        return EmptyList_default;
    },
    ModalContent: function() {
        return ModalContent_default;
    }
});
module.exports = __toCommonJS(index_exports);
// src/components/CustomButton/CustomButton.tsx
var import_react = __toESM(require("react"));
var import_react_native2 = require("react-native");
// src/constant/Colors.ts
var import_react_native = require("react-native");
var COLORS = {
    black: "#000000",
    white: "#FFFFFF",
    primary50: "#EBE7F6",
    lemon: "#D1F800",
    green: "#19B500",
    primary100: "#C2B3E2",
    primary200: "#A2AFD3",
    primary500: "#34519F",
    primary600: "#354764",
    primary900: "#162243",
    primary800: "#15294B",
    neutral700: "#243757",
    neutral800: "#15294B",
    neutral900: "#323E4A",
    neutral400: "#505F79",
    neutral500: "#42526D",
    neutral600: "#354764",
    neutral200: "#6B788E",
    neutral300: "#5D6B82",
    neutral100: "#7A8699",
    neutral30: "#EBEDF0",
    neutral40: "#DFE2E6",
    neutral50: "#C2C7D0",
    neutral80: "#98A1B0",
    neutral90: "#8993A4",
    warning: "#FFC043",
    success: "#21A453",
    sec400: "#70D2F1",
    sec100: "#C8EEFA",
    sec50: "#EDF9FD",
    grey: "#EFEFEF",
    grey400: "#858D9D",
    grey200: "#B9BEC7",
    error: "#FF0000",
    error200: "#D44333"
};
var customStyles = import_react_native.StyleSheet.create({
    content: {
        paddingHorizontal: 24,
        marginTop: 51
    },
    contentTwo: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    formContainer: {
        marginTop: 27
    },
    footer: {
        marginTop: 150,
        alignItems: "center"
    },
    footerText: {
        fontSize: 14,
        fontFamily: "UrbanistMedium",
        color: COLORS.neutral200,
        lineHeight: 21,
        textAlign: "center"
    },
    footerLink: {
        fontSize: 14,
        fontFamily: "UrbanistBold",
        color: COLORS.primary500
    },
    group: {
        flexDirection: "row",
        alignItems: "center"
    },
    groupSpaceBetween: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        color: COLORS.neutral400,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "UrbanistSemiBold"
    },
    title14: {
        color: COLORS.neutral400,
        fontSize: 14,
        lineHeight: 16,
        fontFamily: "UrbanistSemiBold"
    }
});
// src/components/CustomButton/CustomButton.tsx
var CustomButton = (0, import_react.forwardRef)(function(param, ref) {
    var title = param.title, onPress = param.onPress, disabled = param.disabled, backgroundColor = param.backgroundColor, textColor = param.textColor, marginBottom = param.marginBottom, marginTop = param.marginTop, marginHorizontal = param.marginHorizontal, marginVertical = param.marginVertical, marginLeft = param.marginLeft, marginRight = param.marginRight, borderColor = param.borderColor, isTextMedium = param.isTextMedium, icon = param.icon, alignSelf = param.alignSelf, isHalfWidth = param.isHalfWidth, paddingHorizontal = param.paddingHorizontal, fontSize = param.fontSize, paddingVertical = param.paddingVertical, isLoading = param.isLoading, isSmallButton = param.isSmallButton, estimated = param.estimated;
    return isSmallButton ? /* @__PURE__ */ import_react.default.createElement(import_react_native2.TouchableOpacity, {
        ref: ref,
        onPress: onPress,
        disabled: isLoading,
        style: [
            styles.container,
            {
                backgroundColor: isLoading ? COLORS.primary100 : backgroundColor,
                marginBottom: marginBottom,
                marginTop: marginTop,
                marginHorizontal: marginHorizontal,
                marginVertical: marginVertical,
                marginLeft: marginLeft,
                marginRight: marginRight,
                borderColor: borderColor,
                width: "100%",
                borderWidth: borderColor ? 1 : 0,
                paddingVertical: 10
            }
        ]
    }, icon, /* @__PURE__ */ import_react.default.createElement(import_react_native2.Text, {
        style: [
            styles.title,
            {
                color: textColor,
                fontSize: fontSize ? fontSize : 18,
                fontFamily: isTextMedium ? "Urbanist" : "UrbanistBold"
            }
        ]
    }, title), isLoading && /* @__PURE__ */ import_react.default.createElement(import_react_native2.ActivityIndicator, {
        size: "small",
        color: COLORS.black
    })) : /* @__PURE__ */ import_react.default.createElement(import_react_native2.TouchableOpacity, {
        ref: ref,
        onPress: onPress,
        disabled: isLoading,
        style: [
            styles.container,
            {
                backgroundColor: isLoading ? COLORS.primary100 : backgroundColor,
                marginBottom: marginBottom,
                marginTop: marginTop,
                marginHorizontal: marginHorizontal,
                marginVertical: marginVertical,
                marginLeft: marginLeft,
                marginRight: marginRight,
                borderColor: borderColor,
                alignSelf: alignSelf ? "flex-end" : "auto",
                borderWidth: borderColor ? 1 : 0,
                paddingVertical: paddingVertical ? paddingVertical : 18.5,
                paddingHorizontal: paddingHorizontal ? paddingHorizontal : 12
            }
        ]
    }, icon, /* @__PURE__ */ import_react.default.createElement(import_react_native2.Text, {
        style: [
            styles.title,
            {
                color: textColor,
                fontSize: fontSize ? fontSize : 18,
                fontFamily: isTextMedium ? "Urbanist" : "UrbanistBold"
            }
        ]
    }, title), estimated && /* @__PURE__ */ import_react.default.createElement(import_react_native2.Text, {
        style: [
            styles.title,
            {
                color: textColor,
                fontSize: 14,
                fontFamily: "Urbanist"
            }
        ]
    }, "(", estimated, ")"), isLoading && /* @__PURE__ */ import_react.default.createElement(import_react_native2.ActivityIndicator, {
        size: "small",
        color: COLORS.black
    }));
});
var styles = import_react_native2.StyleSheet.create({
    container: {
        borderRadius: 94,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 8
    },
    title: {
        textAlign: "center"
    }
});
var CustomButton_default = CustomButton;
// src/components/CustomText/CustomText.tsx
var import_react2 = __toESM(require("react"));
var import_react_native3 = require("react-native");
function CustomTextNeutral(props) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react_native3.Text, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style
        ]
    }));
}
function CustomTitle(props) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react_native3.Text, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style,
            {
                fontSize: 24,
                fontFamily: "UrbanistBold",
                color: COLORS.neutral700,
                lineHeight: 28,
                marginBottom: 8
            }
        ]
    }));
}
function CustomTitleMedium(props) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react_native3.Text, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style,
            {
                fontSize: 18,
                fontFamily: "UrbanistBold",
                color: COLORS.neutral800,
                lineHeight: 24
            }
        ]
    }));
}
function CustomUrbanistTitle(props) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react_native3.Text, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style,
            {
                fontSize: 24,
                fontFamily: "UrbanistBold",
                color: COLORS.neutral700,
                lineHeight: 28,
                marginBottom: 8
            }
        ]
    }));
}
function CustomSubtitle(props) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react_native3.Text, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style,
            {
                fontSize: 14,
                fontFamily: "UrbanistMedium",
                color: COLORS.neutral400,
                lineHeight: 20
            }
        ]
    }));
}
function CustomUrbanistSubtitle(props) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react_native3.Text, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style,
            {
                fontSize: 16,
                fontFamily: "UrbanistMedium",
                color: COLORS.neutral400,
                lineHeight: 24
            }
        ]
    }));
}
function CustomText(props) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react_native3.Text, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style,
            {
                fontFamily: "UrbanistMedium"
            }
        ]
    }));
}
function CustomTextItalics(props) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react_native3.Text, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style,
            {
                fontFamily: "UrbanistItalic"
            }
        ]
    }));
}
function CustomUrbanistText(props) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react_native3.Text, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style,
            {
                fontFamily: "UrbanistMedium"
            }
        ]
    }));
}
// src/components/CustomDropdown/CustomDropdown.tsx
var import_react_native4 = require("react-native");
var import_react3 = __toESM(require("react"));
// src/assets/svg/ChevronDownLarge.tsx
var React3 = __toESM(require("react"));
var import_react_native_svg = __toESM(require("react-native-svg"));
var SvgComponent = function(props) {
    return /* @__PURE__ */ React3.createElement(import_react_native_svg.default, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
    }, props), /* @__PURE__ */ React3.createElement(import_react_native_svg.Path, {
        fill: "#14162C",
        d: "M4.22 8.47a.75.75 0 0 1 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06Z"
    }));
};
var ChevronDownLarge_default = SvgComponent;
// src/components/CustomDropdown/CustomDropdown.tsx
var CustomDropdown = function(param) {
    var title = param.title, value = param.value, _param_marginBottom = param.marginBottom, marginBottom = _param_marginBottom === void 0 ? 0 : _param_marginBottom, onPress = param.onPress;
    return /* @__PURE__ */ import_react3.default.createElement(import_react_native4.TouchableOpacity, {
        style: [
            styles2.inputContainer,
            {
                marginBottom: marginBottom
            }
        ],
        onPress: onPress
    }, /* @__PURE__ */ import_react3.default.createElement(import_react_native4.View, null, /* @__PURE__ */ import_react3.default.createElement(CustomTextNeutral, {
        style: styles2.inputLabel
    }, title), /* @__PURE__ */ import_react3.default.createElement(CustomTextNeutral, {
        style: styles2.input
    }, value)), /* @__PURE__ */ import_react3.default.createElement(ChevronDownLarge_default, null));
};
var CustomDropdown_default = CustomDropdown;
var styles2 = import_react_native4.StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: COLORS.neutral40,
        borderRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 9,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    inputLabel: {
        fontSize: 14,
        fontFamily: "UrbanistMedium",
        color: COLORS.neutral200,
        lineHeight: 21
    },
    input: {
        textTransform: "capitalize",
        fontSize: 16,
        fontFamily: "UrbanistMedium",
        color: COLORS.neutral700,
        lineHeight: 21,
        marginTop: 2
    }
});
// src/components/CustomError/CustomError.tsx
var import_react_native5 = require("react-native");
var import_react4 = __toESM(require("react"));
var CustomError = function(param) {
    var error = param.error, textAlign = param.textAlign, _param_marginTop = param.marginTop, marginTop = _param_marginTop === void 0 ? 5 : _param_marginTop, _param_marginBottom = param.marginBottom, marginBottom = _param_marginBottom === void 0 ? 0 : _param_marginBottom;
    if (!error || Array.isArray(error) && error.length === 0) return null;
    return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, Array.isArray(error) ? error.map(function(err, index) {
        return /* @__PURE__ */ import_react4.default.createElement(CustomUrbanistText, {
            key: index,
            style: [
                styles3.error,
                {
                    marginTop: marginTop,
                    marginBottom: marginBottom
                }
            ]
        }, err);
    }) : /* @__PURE__ */ import_react4.default.createElement(CustomUrbanistText, {
        style: [
            styles3.error,
            {
                marginTop: marginTop,
                marginBottom: marginBottom,
                textAlign: textAlign
            }
        ]
    }, error));
};
var CustomError_default = CustomError;
var styles3 = import_react_native5.StyleSheet.create({
    error: {
        marginTop: 5,
        fontSize: 12,
        fontFamily: "UrbanistMedium",
        color: COLORS.error,
        maxWidth: 200
    }
});
// src/components/CustomInput/CustomInput.tsx
var import_react5 = __toESM(require("react"));
var import_react_native6 = require("react-native");
// src/assets/svg/EyeOpen.tsx
var React6 = __toESM(require("react"));
var import_react_native_svg2 = __toESM(require("react-native-svg"));
var SvgComponent2 = function(props) {
    return /* @__PURE__ */ React6.createElement(import_react_native_svg2.default, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 16,
        fill: "none"
    }, props), /* @__PURE__ */ React6.createElement(import_react_native_svg2.Path, {
        stroke: "#14162C",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M.833 8S4.166 1.333 10 1.333C15.833 1.333 19.166 8 19.166 8S15.833 14.667 10 14.667C4.166 14.667.833 8 .833 8Z"
    }), /* @__PURE__ */ React6.createElement(import_react_native_svg2.Path, {
        stroke: "#14162C",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M10 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    }));
};
var EyeOpen_default = SvgComponent2;
// src/assets/svg/EyeClose.tsx
var React7 = __toESM(require("react"));
var import_react_native_svg3 = __toESM(require("react-native-svg"));
var SvgComponent3 = function(props) {
    return /* @__PURE__ */ React7.createElement(import_react_native_svg3.default, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 25,
        height: 24,
        fill: "none"
    }, props), /* @__PURE__ */ React7.createElement(import_react_native_svg3.Path, {
        fill: "#14162C",
        d: "M12.5 9.005a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0-5.005c4.614 0 8.596 3.15 9.701 7.564a.75.75 0 1 1-1.455.365 8.504 8.504 0 0 0-16.493.004.75.75 0 0 1-1.455-.363A10.003 10.003 0 0 1 12.5 5.5Z"
    }));
};
var EyeClose_default = SvgComponent3;
// src/components/CustomInput/CustomInput.tsx
var CustomInput = function(_param) {
    var label = _param.label, value = _param.value, onChangeText = _param.onChangeText, onBlur = _param.onBlur, placeholder = _param.placeholder, error = _param.error, icon = _param.icon, onIconPress = _param.onIconPress, secureTextEntry = _param.secureTextEntry, _param_multiline = _param.multiline, multiline = _param_multiline === void 0 ? false : _param_multiline, _param_numberOfLines = _param.numberOfLines, numberOfLines = _param_numberOfLines === void 0 ? 1 : _param_numberOfLines, _param_marginBottom = _param.marginBottom, marginBottom = _param_marginBottom === void 0 ? 24 : _param_marginBottom, _param_disabled = _param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled, rest = _object_without_properties(_param, [
        "label",
        "value",
        "onChangeText",
        "onBlur",
        "placeholder",
        "error",
        "icon",
        "onIconPress",
        "secureTextEntry",
        "multiline",
        "numberOfLines",
        "marginBottom",
        "disabled"
    ]);
    var _ref = _sliced_to_array((0, import_react5.useState)(secureTextEntry || false), 2), isVisible = _ref[0], setIsVisible = _ref[1];
    var handleShowPassword = function() {
        return setIsVisible(!isVisible);
    };
    return /* @__PURE__ */ import_react5.default.createElement(import_react_native6.View, {
        style: {
            marginBottom: marginBottom
        }
    }, /* @__PURE__ */ import_react5.default.createElement(import_react_native6.View, {
        style: [
            styles4.inputContainer,
            {
                borderColor: error ? COLORS.error : COLORS.neutral40,
                backgroundColor: disabled ? COLORS.neutral40 : COLORS.white
            }
        ]
    }, !multiline && /* @__PURE__ */ import_react5.default.createElement(import_react_native6.Text, {
        style: styles4.inputLabel
    }, label), /* @__PURE__ */ import_react5.default.createElement(import_react_native6.View, {
        style: [
            styles4.inputWithIcon,
            multiline && styles4.multilineInputContainer
        ]
    }, /* @__PURE__ */ import_react5.default.createElement(import_react_native6.TextInput, _object_spread({
        style: [
            styles4.input,
            multiline && styles4.multilineInput
        ],
        value: value,
        onChangeText: onChangeText,
        onBlur: onBlur,
        placeholder: placeholder,
        secureTextEntry: !multiline && isVisible,
        placeholderTextColor: COLORS.neutral200,
        autoCapitalize: "none",
        autoCorrect: false,
        multiline: multiline,
        numberOfLines: numberOfLines,
        textAlignVertical: multiline ? "top" : "center",
        editable: !disabled,
        selectTextOnFocus: !disabled
    }, rest)), secureTextEntry && !multiline && /* @__PURE__ */ import_react5.default.createElement(import_react_native6.TouchableOpacity, {
        style: styles4.iconContainer,
        onPress: handleShowPassword,
        disabled: disabled
    }, !isVisible ? /* @__PURE__ */ import_react5.default.createElement(EyeOpen_default, null) : /* @__PURE__ */ import_react5.default.createElement(EyeClose_default, null)), icon && /* @__PURE__ */ import_react5.default.createElement(import_react_native6.TouchableOpacity, {
        style: styles4.iconContainer,
        onPress: onIconPress,
        activeOpacity: 0.7,
        disabled: disabled
    }, icon))), /* @__PURE__ */ import_react5.default.createElement(CustomError_default, {
        error: error || ""
    }));
};
var CustomInput_default = CustomInput;
var styles4 = import_react_native6.StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: COLORS.neutral40,
        borderRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 9,
        backgroundColor: COLORS.white
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontFamily: "UrbanistMedium",
        color: COLORS.neutral700,
        lineHeight: 21,
        marginTop: 2
    },
    multilineInput: {
        lineHeight: 24,
        height: "auto",
        minHeight: 100
    },
    inputWithIcon: {
        flexDirection: "row",
        alignItems: "center"
    },
    multilineInputContainer: {
        alignItems: "flex-start"
    },
    iconContainer: {
        marginLeft: 10,
        marginTop: -20
    },
    inputLabel: {
        fontSize: 14,
        fontFamily: "UrbanistMedium",
        color: COLORS.neutral200,
        lineHeight: 21
    }
});
// src/components/CustomModal/CustomModal.tsx
var import_react6 = __toESM(require("react"));
var import_react_native7 = require("react-native");
var import_expo_blur = require("expo-blur");
var CustomModal = function(param) {
    var inner = param.inner, onClose = param.onClose, visible = param.visible, snapPoint = param.snapPoint, innerTop = param.innerTop, searchIcon = param.searchIcon, _param_disabledBg = param.disabledBg, disabledBg = _param_disabledBg === void 0 ? false : _param_disabledBg;
    var heightStyle = {
        height: snapPoint ? typeof snapPoint === "string" ? snapPoint : "".concat(snapPoint, "%") : "43%"
    };
    return /* @__PURE__ */ import_react6.default.createElement(import_react_native7.Modal, {
        transparent: true,
        animationType: "fade",
        visible: visible,
        onRequestClose: onClose
    }, /* @__PURE__ */ import_react6.default.createElement(import_react_native7.TouchableWithoutFeedback, {
        onPress: onClose
    }, /* @__PURE__ */ import_react6.default.createElement(import_react_native7.View, {
        style: [
            styles5.backdrop,
            {
                backgroundColor: !disabledBg ? "rgba(18, 18, 18, 0.88)" : "transparent"
            }
        ]
    }, !disabledBg && /* @__PURE__ */ import_react6.default.createElement(import_expo_blur.BlurView, {
        intensity: 10,
        style: import_react_native7.StyleSheet.absoluteFill
    }), /* @__PURE__ */ import_react6.default.createElement(import_react_native7.View, {
        style: [
            styles5.modalView
        ]
    }, innerTop), searchIcon, /* @__PURE__ */ import_react6.default.createElement(import_react_native7.TouchableWithoutFeedback, null, /* @__PURE__ */ import_react6.default.createElement(import_react_native7.View, {
        style: [
            styles5.modalView,
            heightStyle
        ]
    }, inner)))));
};
var CustomModal_default = CustomModal;
var styles5 = import_react_native7.StyleSheet.create({
    backdrop: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    modalView: {
        width: import_react_native7.Dimensions.get("screen").width
    }
});
// src/components/CustomMultiDropdown/CustomMultiDropdown.tsx
var import_react_native8 = require("react-native");
var import_react7 = __toESM(require("react"));
// src/assets/svg/Close.tsx
var React10 = __toESM(require("react"));
var import_react_native_svg4 = __toESM(require("react-native-svg"));
var SvgComponent4 = function(props) {
    return /* @__PURE__ */ React10.createElement(import_react_native_svg4.default, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 23,
        height: 23,
        fill: "none"
    }, props), /* @__PURE__ */ React10.createElement(import_react_native_svg4.Path, {
        fill: "#091E42",
        d: "M6.953 7.19a.5.5 0 0 1 .656-.046l.051.045 3.418 3.417 3.42-3.419a.5.5 0 0 1 .751.656l-.044.051-3.42 3.42 3.419 3.415a.5.5 0 0 1-.656.753l-.051-.045-3.418-3.417-3.418 3.418a.5.5 0 0 1-.752-.656l.045-.052 3.417-3.417-3.418-3.417a.5.5 0 0 1 0-.707Z"
    }));
};
var Close_default = SvgComponent4;
// src/components/CustomMultiDropdown/CustomMultiDropdown.tsx
var CustomMultiDropdown = function(param) {
    var title = param.title, value = param.value, onPress = param.onPress, removeVehicle = param.removeVehicle;
    return /* @__PURE__ */ import_react7.default.createElement(import_react_native8.TouchableOpacity, {
        style: styles6.inputContainer,
        onPress: onPress
    }, /* @__PURE__ */ import_react7.default.createElement(import_react_native8.View, null, /* @__PURE__ */ import_react7.default.createElement(import_react_native8.View, {
        style: customStyles.groupSpaceBetween
    }, /* @__PURE__ */ import_react7.default.createElement(CustomTextNeutral, {
        style: styles6.inputLabel
    }, title), /* @__PURE__ */ import_react7.default.createElement(ChevronDownLarge_default, null)), /* @__PURE__ */ import_react7.default.createElement(import_react_native8.View, {
        style: {
            flexWrap: "wrap",
            marginTop: 8
        }
    }, Array.isArray(value) ? value.map(function(item, i) {
        return /* @__PURE__ */ import_react7.default.createElement(import_react_native8.View, {
            key: i,
            style: [
                customStyles.group,
                styles6.item
            ]
        }, /* @__PURE__ */ import_react7.default.createElement(CustomTextNeutral, {
            style: styles6.input
        }, item.make, " ", item.model, " ", item.year), /* @__PURE__ */ import_react7.default.createElement(import_react_native8.TouchableOpacity, {
            onPress: function() {
                return removeVehicle(item.id);
            }
        }, /* @__PURE__ */ import_react7.default.createElement(Close_default, null)));
    }) : /* @__PURE__ */ import_react7.default.createElement(CustomTextNeutral, {
        style: styles6.input
    }, value))));
};
var CustomMultiDropdown_default = CustomMultiDropdown;
var styles6 = import_react_native8.StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: COLORS.neutral40,
        borderRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 9,
        backgroundColor: COLORS.white
    },
    inputLabel: {
        fontSize: 14,
        fontFamily: "UrbanistMedium",
        color: COLORS.neutral200,
        lineHeight: 21
    },
    input: {
        // flex: 1,
        fontSize: 16,
        fontFamily: "UrbanistMedium",
        color: COLORS.neutral700,
        lineHeight: 21,
        textTransform: "capitalize"
    },
    item: {
        borderWidth: 1,
        borderRadius: 24,
        borderColor: COLORS.neutral40,
        marginBottom: 8,
        paddingHorizontal: 9,
        paddingVertical: 3
    }
});
// src/components/CustomSwitch/CustomSwitch.tsx
var import_react8 = __toESM(require("react"));
var import_react_native9 = require("react-native");
var import_vector_icons = require("@expo/vector-icons");
var CustomSwitchButton = function(param) {
    var isEnabled = param.isEnabled, toggleSwitch = param.toggleSwitch;
    return /* @__PURE__ */ import_react8.default.createElement(import_react_native9.View, {
        style: styles7.container
    }, /* @__PURE__ */ import_react8.default.createElement(import_react_native9.TouchableOpacity, {
        style: [
            styles7.switchContainer,
            isEnabled && styles7.switchOn
        ],
        onPress: toggleSwitch
    }, !isEnabled && /* @__PURE__ */ import_react8.default.createElement(import_react_native9.View, {
        style: styles7.switchOffCircle
    }), /* @__PURE__ */ import_react8.default.createElement(import_react_native9.Text, {
        style: styles7.text
    }, "Default"), isEnabled && /* @__PURE__ */ import_react8.default.createElement(import_vector_icons.MaterialIcons, {
        name: "check",
        size: 16,
        color: COLORS.lemon,
        style: styles7.icon
    })));
};
var styles7 = import_react_native9.StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 3,
        borderRadius: 20,
        backgroundColor: "#EBEEF5"
    },
    switchOn: {
        backgroundColor: COLORS.lemon
    },
    switchOffCircle: {
        height: 16.6,
        width: 16.6,
        backgroundColor: "#EBEEF5",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: COLORS.primary200
    },
    text: {
        color: "#1C2963",
        fontSize: 10,
        lineHeight: 15,
        marginRight: 5,
        fontFamily: "Urbanist",
        textAlign: "center",
        marginLeft: 4
    },
    icon: {
        backgroundColor: COLORS.primary500,
        borderRadius: 50,
        padding: 2
    }
});
var CustomSwitch_default = CustomSwitchButton;
// src/components/CustomSelect/CustomSelect.tsx
var import_react_native10 = require("react-native");
var import_react9 = __toESM(require("react"));
// src/helper/helper.ts
function truncateTextLast4(text, size) {
    if (typeof text !== "string" || text.length <= size) {
        return text;
    }
    var firstTwo = text.slice(0, size);
    return "...".concat(firstTwo);
}
// src/assets/svg/MasterCardSmall.tsx
var React13 = __toESM(require("react"));
var import_react_native_svg5 = __toESM(require("react-native-svg"));
var SvgComponent5 = function(props) {
    return /* @__PURE__ */ React13.createElement(import_react_native_svg5.default, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 18,
        height: 12,
        fill: "none"
    }, props), /* @__PURE__ */ React13.createElement(import_react_native_svg5.Path, {
        fill: "#FF5F00",
        d: "M11.502 1.677H6.686v8.643h4.816V1.677Z"
    }), /* @__PURE__ */ React13.createElement(import_react_native_svg5.Path, {
        fill: "#EB001B",
        d: "M6.992 5.999c0-1.68.78-3.283 2.095-4.322a5.49 5.49 0 0 0-7.721.932 5.474 5.474 0 0 0 .932 7.711 5.495 5.495 0 0 0 6.804 0A5.497 5.497 0 0 1 6.992 6Z"
    }), /* @__PURE__ */ React13.createElement(import_react_native_svg5.Path, {
        fill: "#F79E1B",
        d: "M18 5.999a5.497 5.497 0 0 1-5.504 5.497 5.452 5.452 0 0 1-3.394-1.176 5.502 5.502 0 0 0 .917-7.727 5.782 5.782 0 0 0-.917-.916c2.385-1.878 5.855-1.466 7.72.932A5.437 5.437 0 0 1 18 5.999ZM17.48 9.404v-.183h.077v-.03h-.184v.03h.077v.183h.03Zm.352 0V9.19h-.061l-.061.153-.062-.153h-.06v.214h.045v-.168l.061.138h.046l.061-.138v.168h.031Z"
    }));
};
var MasterCardSmall_default = SvgComponent5;
// src/components/CustomSelect/CustomSelect.tsx
var CustomSelect = function(param) {
    var title = param.title, data = param.data, setSelect = param.setSelect, onClose = param.onClose, _param_marginTop = param.marginTop, marginTop = _param_marginTop === void 0 ? 100 : _param_marginTop, cardNumber = param.cardNumber, setSelectModelData = param.setSelectModelData, setSelectVehicle = param.setSelectVehicle;
    var renderItem = function(param) {
        var item = param.item;
        return /* @__PURE__ */ import_react9.default.createElement(import_react_native10.TouchableOpacity, {
            onPress: function() {
                if (setSelect) setSelect(item.make || item.value || item);
                if (setSelectModelData) setSelectModelData(item.models);
                if (setSelectVehicle) setSelectVehicle(item);
                onClose();
            },
            style: customStyles.groupSpaceBetween
        }, /* @__PURE__ */ import_react9.default.createElement(CustomTextNeutral, {
            style: styles8.text
        }, setSelectVehicle ? item.make + " " + item.model + " " + item.year : item.make || item.value || item), cardNumber && item.value === "Card" && /* @__PURE__ */ import_react9.default.createElement(import_react_native10.View, {
            style: [
                customStyles.group,
                {
                    gap: 7
                }
            ]
        }, /* @__PURE__ */ import_react9.default.createElement(MasterCardSmall_default, null), /* @__PURE__ */ import_react9.default.createElement(CustomTextNeutral, {
            style: styles8.card
        }, truncateTextLast4("2348031234567", 4))));
    };
    return /* @__PURE__ */ import_react9.default.createElement(import_react_native10.View, {
        style: [
            styles8.container,
            {
                marginTop: marginTop,
                maxHeight: 400
            }
        ]
    }, title && /* @__PURE__ */ import_react9.default.createElement(CustomUrbanistTitle, {
        style: styles8.title
    }, title), /* @__PURE__ */ import_react9.default.createElement(import_react_native10.FlatList, {
        data: data,
        renderItem: renderItem,
        keyExtractor: function(item, index) {
            return index.toString();
        },
        contentContainerStyle: {
            marginTop: title ? 24 : 0
        }
    }));
};
var CustomSelect_default = CustomSelect;
var styles8 = import_react_native10.StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        padding: 24,
        marginHorizontal: 20,
        borderRadius: 24
    },
    title: {
        textAlign: "center"
    },
    text: {
        color: COLORS.neutral700,
        fontFamily: "UrbanistSemiBold",
        fontSize: 14,
        lineHeight: 16,
        marginVertical: 12,
        textTransform: "capitalize"
    },
    card: {
        color: COLORS.neutral700,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: "Urbanist"
    }
});
// src/components/ModalContent/ModalContent.tsx
var import_react_native11 = require("react-native");
var import_react10 = __toESM(require("react"));
var ModalContent = function(param) {
    var onPress = param.onPress, title = param.title, subtitle = param.subtitle, icon = param.icon, buttonTitle = param.buttonTitle, secondButton = param.secondButton, secondButtonTitle = param.secondButtonTitle, _param_subTitleMarginBottom = param.subTitleMarginBottom, subTitleMarginBottom = _param_subTitleMarginBottom === void 0 ? 0 : _param_subTitleMarginBottom, _param_subTitleWidth = param.subTitleWidth, subTitleWidth = _param_subTitleWidth === void 0 ? 250 : _param_subTitleWidth, _param_marginHorizontal = param.marginHorizontal, marginHorizontal = _param_marginHorizontal === void 0 ? 20 : _param_marginHorizontal, secondButtonOnPress = param.secondButtonOnPress, isRowButton = param.isRowButton, loading = param.loading;
    return /* @__PURE__ */ import_react10.default.createElement(import_react_native11.View, {
        style: [
            styles9.container,
            {
                marginHorizontal: marginHorizontal
            }
        ]
    }, icon && /* @__PURE__ */ import_react10.default.createElement(import_react_native11.View, {
        style: styles9.image
    }, icon), title && /* @__PURE__ */ import_react10.default.createElement(CustomTitle, {
        style: {
            textAlign: "center",
            maxWidth: 287
        }
    }, title), subtitle && /* @__PURE__ */ import_react10.default.createElement(CustomSubtitle, {
        style: {
            textAlign: "center",
            maxWidth: subTitleWidth,
            marginBottom: subTitleMarginBottom
        }
    }, subtitle), isRowButton ? /* @__PURE__ */ import_react10.default.createElement(import_react_native11.View, {
        style: styles9.isRowButton
    }, secondButton && /* @__PURE__ */ import_react10.default.createElement(import_react_native11.View, {
        style: styles9.rowButton
    }, /* @__PURE__ */ import_react10.default.createElement(CustomButton_default, {
        title: secondButtonTitle || "Cancel",
        backgroundColor: COLORS.neutral30,
        textColor: COLORS.black,
        onPress: secondButtonOnPress,
        isTextMedium: true,
        isHalfWidth: true
    })), /* @__PURE__ */ import_react10.default.createElement(import_react_native11.View, {
        style: styles9.rowButton
    }, /* @__PURE__ */ import_react10.default.createElement(CustomButton_default, {
        title: buttonTitle || "Continue",
        backgroundColor: COLORS.error200,
        textColor: COLORS.white,
        onPress: onPress,
        isTextMedium: true,
        isHalfWidth: true,
        isLoading: loading,
        disabled: loading
    }))) : /* @__PURE__ */ import_react10.default.createElement(import_react_native11.View, {
        style: styles9.fullWidthCustomButton
    }, /* @__PURE__ */ import_react10.default.createElement(CustomButton_default, {
        title: buttonTitle || "Continue",
        backgroundColor: COLORS.primary500,
        textColor: COLORS.white,
        onPress: onPress,
        isTextMedium: true,
        isLoading: loading,
        disabled: loading
    }), secondButton && /* @__PURE__ */ import_react10.default.createElement(CustomButton_default, {
        title: secondButtonTitle || "Cancel",
        backgroundColor: COLORS.white,
        marginTop: 10,
        textColor: COLORS.black,
        onPress: secondButtonOnPress
    })));
};
var ModalContent_default = ModalContent;
var styles9 = import_react_native11.StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        paddingVertical: 40,
        borderRadius: 24,
        alignItems: "center"
    },
    fullWidthCustomButton: {
        width: "100%",
        marginTop: 20
    },
    image: {
        marginBottom: 32
    },
    isRowButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginTop: 20
    },
    rowButton: {
        flex: 1,
        marginHorizontal: 5
    }
});
// src/components/EmptyList/EmptyList.tsx
var import_react_native12 = require("react-native");
var import_react11 = __toESM(require("react"));
var EmptyList = function(param) {
    var title = param.title, description = param.description, icon = param.icon, _param_marginTop = param.marginTop, marginTop = _param_marginTop === void 0 ? -150 : _param_marginTop;
    return /* @__PURE__ */ import_react11.default.createElement(import_react_native12.View, {
        style: [
            styles10.container,
            {
                marginTop: marginTop
            }
        ]
    }, icon && icon, /* @__PURE__ */ import_react11.default.createElement(CustomTitleMedium, null, title), /* @__PURE__ */ import_react11.default.createElement(CustomUrbanistSubtitle, null, description));
};
var EmptyList_default = EmptyList;
var styles10 = import_react_native12.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    CustomButton: CustomButton,
    CustomDropdown: CustomDropdown,
    CustomError: CustomError,
    CustomInput: CustomInput,
    CustomModal: CustomModal,
    CustomMultiDropdown: CustomMultiDropdown,
    CustomSelect: CustomSelect,
    CustomSubtitle: CustomSubtitle,
    CustomSwitch: CustomSwitch,
    CustomText: CustomText,
    CustomTextItalics: CustomTextItalics,
    CustomTextNeutral: CustomTextNeutral,
    CustomTitle: CustomTitle,
    CustomTitleMedium: CustomTitleMedium,
    CustomUrbanistSubtitle: CustomUrbanistSubtitle,
    CustomUrbanistText: CustomUrbanistText,
    CustomUrbanistTitle: CustomUrbanistTitle,
    EmptyList: EmptyList,
    ModalContent: ModalContent
});
//# sourceMappingURL=index.js.map