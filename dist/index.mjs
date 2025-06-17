// src/components/CustomButton/CustomButton.tsx
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import React, { forwardRef } from "react";
import { ActivityIndicator, StyleSheet as StyleSheet2, Text, TouchableOpacity } from "react-native";
// src/constant/Colors.ts
import { StyleSheet } from "react-native";
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
var customStyles = StyleSheet.create({
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
var statusColor = function(title) {
    return (title === null || title === void 0 ? void 0 : title.toString()) === "eco" ? "#EEE6FD" : (title === null || title === void 0 ? void 0 : title.toString()) === "luxury" ? "#E0FCE2" : "#FAEAF4";
};
var statusBorderColor = function(title) {
    return (title === null || title === void 0 ? void 0 : title.toString()) === "eco" ? "#E5D9FC" : (title === null || title === void 0 ? void 0 : title.toString()) === "luxury" ? "#BEF9C2" : "#F7DEEE";
};
// src/components/CustomButton/CustomButton.tsx
var CustomButton = forwardRef(function(param, ref) {
    var title = param.title, onPress = param.onPress, disabled = param.disabled, backgroundColor = param.backgroundColor, textColor = param.textColor, marginBottom = param.marginBottom, marginTop = param.marginTop, marginHorizontal = param.marginHorizontal, marginVertical = param.marginVertical, marginLeft = param.marginLeft, marginRight = param.marginRight, borderColor = param.borderColor, isTextMedium = param.isTextMedium, icon = param.icon, alignSelf = param.alignSelf, isHalfWidth = param.isHalfWidth, paddingHorizontal = param.paddingHorizontal, fontSize = param.fontSize, paddingVertical = param.paddingVertical, isLoading = param.isLoading, isSmallButton = param.isSmallButton, estimated = param.estimated;
    return isSmallButton ? /* @__PURE__ */ React.createElement(TouchableOpacity, {
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
    }, icon, /* @__PURE__ */ React.createElement(Text, {
        style: [
            styles.title,
            {
                color: textColor,
                fontSize: fontSize ? fontSize : 18,
                fontFamily: isTextMedium ? "Urbanist" : "UrbanistBold"
            }
        ]
    }, title), isLoading && /* @__PURE__ */ React.createElement(ActivityIndicator, {
        size: "small",
        color: COLORS.black
    })) : /* @__PURE__ */ React.createElement(TouchableOpacity, {
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
    }, icon, /* @__PURE__ */ React.createElement(Text, {
        style: [
            styles.title,
            {
                color: textColor,
                fontSize: fontSize ? fontSize : 18,
                fontFamily: isTextMedium ? "Urbanist" : "UrbanistBold"
            }
        ]
    }, title), estimated && /* @__PURE__ */ React.createElement(Text, {
        style: [
            styles.title,
            {
                color: textColor,
                fontSize: 14,
                fontFamily: "Urbanist"
            }
        ]
    }, "(", estimated, ")"), isLoading && /* @__PURE__ */ React.createElement(ActivityIndicator, {
        size: "small",
        color: COLORS.black
    }));
});
var styles = StyleSheet2.create({
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
import React2 from "react";
import { Text as Text2 } from "react-native";
function CustomTextNeutral(props) {
    return /* @__PURE__ */ React2.createElement(Text2, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style
        ]
    }));
}
function CustomTitle(props) {
    return /* @__PURE__ */ React2.createElement(Text2, _object_spread_props(_object_spread({}, props), {
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
    return /* @__PURE__ */ React2.createElement(Text2, _object_spread_props(_object_spread({}, props), {
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
    return /* @__PURE__ */ React2.createElement(Text2, _object_spread_props(_object_spread({}, props), {
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
    return /* @__PURE__ */ React2.createElement(Text2, _object_spread_props(_object_spread({}, props), {
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
    return /* @__PURE__ */ React2.createElement(Text2, _object_spread_props(_object_spread({}, props), {
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
    return /* @__PURE__ */ React2.createElement(Text2, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style,
            {
                fontFamily: "UrbanistMedium"
            }
        ]
    }));
}
function CustomTextItalics(props) {
    return /* @__PURE__ */ React2.createElement(Text2, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style,
            {
                fontFamily: "UrbanistItalic"
            }
        ]
    }));
}
function CustomUrbanistText(props) {
    return /* @__PURE__ */ React2.createElement(Text2, _object_spread_props(_object_spread({}, props), {
        style: [
            props.style,
            {
                fontFamily: "UrbanistMedium"
            }
        ]
    }));
}
// src/components/CustomDropdown/CustomDropdown.tsx
import { StyleSheet as StyleSheet3, TouchableOpacity as TouchableOpacity2, View } from "react-native";
import React4 from "react";
// src/assets/svg/ChevronDownLarge.tsx
import * as React3 from "react";
import Svg, { Path } from "react-native-svg";
var SvgComponent = function(props) {
    return /* @__PURE__ */ React3.createElement(Svg, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
    }, props), /* @__PURE__ */ React3.createElement(Path, {
        fill: "#14162C",
        d: "M4.22 8.47a.75.75 0 0 1 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06Z"
    }));
};
var ChevronDownLarge_default = SvgComponent;
// src/components/CustomDropdown/CustomDropdown.tsx
var CustomDropdown = function(param) {
    var title = param.title, value = param.value, _param_marginBottom = param.marginBottom, marginBottom = _param_marginBottom === void 0 ? 0 : _param_marginBottom, onPress = param.onPress;
    return /* @__PURE__ */ React4.createElement(TouchableOpacity2, {
        style: [
            styles2.inputContainer,
            {
                marginBottom: marginBottom
            }
        ],
        onPress: onPress
    }, /* @__PURE__ */ React4.createElement(View, null, /* @__PURE__ */ React4.createElement(CustomTextNeutral, {
        style: styles2.inputLabel
    }, title), /* @__PURE__ */ React4.createElement(CustomTextNeutral, {
        style: styles2.input
    }, value)), /* @__PURE__ */ React4.createElement(ChevronDownLarge_default, null));
};
var CustomDropdown_default = CustomDropdown;
var styles2 = StyleSheet3.create({
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
import { StyleSheet as StyleSheet4 } from "react-native";
import React5 from "react";
var CustomError = function(param) {
    var error = param.error, textAlign = param.textAlign, _param_marginTop = param.marginTop, marginTop = _param_marginTop === void 0 ? 5 : _param_marginTop, _param_marginBottom = param.marginBottom, marginBottom = _param_marginBottom === void 0 ? 0 : _param_marginBottom;
    if (!error || Array.isArray(error) && error.length === 0) return null;
    return /* @__PURE__ */ React5.createElement(React5.Fragment, null, Array.isArray(error) ? error.map(function(err, index) {
        return /* @__PURE__ */ React5.createElement(CustomUrbanistText, {
            key: index,
            style: [
                styles3.error,
                {
                    marginTop: marginTop,
                    marginBottom: marginBottom
                }
            ]
        }, err);
    }) : /* @__PURE__ */ React5.createElement(CustomUrbanistText, {
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
var styles3 = StyleSheet4.create({
    error: {
        marginTop: 5,
        fontSize: 12,
        fontFamily: "UrbanistMedium",
        color: COLORS.error,
        maxWidth: 200
    }
});
// src/components/CustomInput/CustomInput.tsx
import React8, { useState } from "react";
import { StyleSheet as StyleSheet5, Text as Text4, TextInput, View as View2, TouchableOpacity as TouchableOpacity3 } from "react-native";
// src/assets/svg/EyeOpen.tsx
import * as React6 from "react";
import Svg2, { Path as Path2 } from "react-native-svg";
var SvgComponent2 = function(props) {
    return /* @__PURE__ */ React6.createElement(Svg2, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 16,
        fill: "none"
    }, props), /* @__PURE__ */ React6.createElement(Path2, {
        stroke: "#14162C",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M.833 8S4.166 1.333 10 1.333C15.833 1.333 19.166 8 19.166 8S15.833 14.667 10 14.667C4.166 14.667.833 8 .833 8Z"
    }), /* @__PURE__ */ React6.createElement(Path2, {
        stroke: "#14162C",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M10 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    }));
};
var EyeOpen_default = SvgComponent2;
// src/assets/svg/EyeClose.tsx
import * as React7 from "react";
import Svg3, { Path as Path3 } from "react-native-svg";
var SvgComponent3 = function(props) {
    return /* @__PURE__ */ React7.createElement(Svg3, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 25,
        height: 24,
        fill: "none"
    }, props), /* @__PURE__ */ React7.createElement(Path3, {
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
    var _useState = _sliced_to_array(useState(secureTextEntry || false), 2), isVisible = _useState[0], setIsVisible = _useState[1];
    var handleShowPassword = function() {
        return setIsVisible(!isVisible);
    };
    return /* @__PURE__ */ React8.createElement(View2, {
        style: {
            marginBottom: marginBottom
        }
    }, /* @__PURE__ */ React8.createElement(View2, {
        style: [
            styles4.inputContainer,
            {
                borderColor: error ? COLORS.error : COLORS.neutral40,
                backgroundColor: disabled ? COLORS.neutral40 : COLORS.white
            }
        ]
    }, !multiline && /* @__PURE__ */ React8.createElement(Text4, {
        style: styles4.inputLabel
    }, label), /* @__PURE__ */ React8.createElement(View2, {
        style: [
            styles4.inputWithIcon,
            multiline && styles4.multilineInputContainer
        ]
    }, /* @__PURE__ */ React8.createElement(TextInput, _object_spread({
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
    }, rest)), secureTextEntry && !multiline && /* @__PURE__ */ React8.createElement(TouchableOpacity3, {
        style: styles4.iconContainer,
        onPress: handleShowPassword,
        disabled: disabled
    }, !isVisible ? /* @__PURE__ */ React8.createElement(EyeOpen_default, null) : /* @__PURE__ */ React8.createElement(EyeClose_default, null)), icon && /* @__PURE__ */ React8.createElement(TouchableOpacity3, {
        style: styles4.iconContainer,
        onPress: onIconPress,
        activeOpacity: 0.7,
        disabled: disabled
    }, icon))), /* @__PURE__ */ React8.createElement(CustomError_default, {
        error: error || ""
    }));
};
var CustomInput_default = CustomInput;
var styles4 = StyleSheet5.create({
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
import React9 from "react";
import { Modal, TouchableWithoutFeedback, View as View3, StyleSheet as StyleSheet6, Dimensions } from "react-native";
import { BlurView } from "expo-blur";
var CustomModal = function(param) {
    var inner = param.inner, onClose = param.onClose, visible = param.visible, snapPoint = param.snapPoint, innerTop = param.innerTop, searchIcon = param.searchIcon, _param_disabledBg = param.disabledBg, disabledBg = _param_disabledBg === void 0 ? false : _param_disabledBg;
    var heightStyle = {
        height: snapPoint ? typeof snapPoint === "string" ? snapPoint : "".concat(snapPoint, "%") : "43%"
    };
    return /* @__PURE__ */ React9.createElement(Modal, {
        transparent: true,
        animationType: "fade",
        visible: visible,
        onRequestClose: onClose
    }, /* @__PURE__ */ React9.createElement(TouchableWithoutFeedback, {
        onPress: onClose
    }, /* @__PURE__ */ React9.createElement(View3, {
        style: [
            styles5.backdrop,
            {
                backgroundColor: !disabledBg ? "rgba(18, 18, 18, 0.88)" : "transparent"
            }
        ]
    }, !disabledBg && /* @__PURE__ */ React9.createElement(BlurView, {
        intensity: 10,
        style: StyleSheet6.absoluteFill
    }), /* @__PURE__ */ React9.createElement(View3, {
        style: [
            styles5.modalView
        ]
    }, innerTop), searchIcon, /* @__PURE__ */ React9.createElement(TouchableWithoutFeedback, null, /* @__PURE__ */ React9.createElement(View3, {
        style: [
            styles5.modalView,
            heightStyle
        ]
    }, inner)))));
};
var CustomModal_default = CustomModal;
var styles5 = StyleSheet6.create({
    backdrop: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    modalView: {
        width: Dimensions.get("screen").width
    }
});
// src/components/CustomMultiDropdown/CustomMultiDropdown.tsx
import { StyleSheet as StyleSheet7, TouchableOpacity as TouchableOpacity4, View as View4 } from "react-native";
import React11 from "react";
// src/assets/svg/Close.tsx
import * as React10 from "react";
import Svg4, { Path as Path4 } from "react-native-svg";
var SvgComponent4 = function(props) {
    return /* @__PURE__ */ React10.createElement(Svg4, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 23,
        height: 23,
        fill: "none"
    }, props), /* @__PURE__ */ React10.createElement(Path4, {
        fill: "#091E42",
        d: "M6.953 7.19a.5.5 0 0 1 .656-.046l.051.045 3.418 3.417 3.42-3.419a.5.5 0 0 1 .751.656l-.044.051-3.42 3.42 3.419 3.415a.5.5 0 0 1-.656.753l-.051-.045-3.418-3.417-3.418 3.418a.5.5 0 0 1-.752-.656l.045-.052 3.417-3.417-3.418-3.417a.5.5 0 0 1 0-.707Z"
    }));
};
var Close_default = SvgComponent4;
// src/components/CustomMultiDropdown/CustomMultiDropdown.tsx
var CustomMultiDropdown = function(param) {
    var title = param.title, value = param.value, onPress = param.onPress, removeVehicle = param.removeVehicle;
    return /* @__PURE__ */ React11.createElement(TouchableOpacity4, {
        style: styles6.inputContainer,
        onPress: onPress
    }, /* @__PURE__ */ React11.createElement(View4, null, /* @__PURE__ */ React11.createElement(View4, {
        style: customStyles.groupSpaceBetween
    }, /* @__PURE__ */ React11.createElement(CustomTextNeutral, {
        style: styles6.inputLabel
    }, title), /* @__PURE__ */ React11.createElement(ChevronDownLarge_default, null)), /* @__PURE__ */ React11.createElement(View4, {
        style: {
            flexWrap: "wrap",
            marginTop: 8
        }
    }, Array.isArray(value) ? value.map(function(item, i) {
        return /* @__PURE__ */ React11.createElement(View4, {
            key: i,
            style: [
                customStyles.group,
                styles6.item
            ]
        }, /* @__PURE__ */ React11.createElement(CustomTextNeutral, {
            style: styles6.input
        }, item.make, " ", item.model, " ", item.year), /* @__PURE__ */ React11.createElement(TouchableOpacity4, {
            onPress: function() {
                return removeVehicle(item.id);
            }
        }, /* @__PURE__ */ React11.createElement(Close_default, null)));
    }) : /* @__PURE__ */ React11.createElement(CustomTextNeutral, {
        style: styles6.input
    }, value))));
};
var CustomMultiDropdown_default = CustomMultiDropdown;
var styles6 = StyleSheet7.create({
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
import React12 from "react";
import { View as View5, Text as Text5, TouchableOpacity as TouchableOpacity5, StyleSheet as StyleSheet8 } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
var CustomSwitchButton = function(param) {
    var isEnabled = param.isEnabled, toggleSwitch = param.toggleSwitch;
    return /* @__PURE__ */ React12.createElement(View5, {
        style: styles7.container
    }, /* @__PURE__ */ React12.createElement(TouchableOpacity5, {
        style: [
            styles7.switchContainer,
            isEnabled && styles7.switchOn
        ],
        onPress: toggleSwitch
    }, !isEnabled && /* @__PURE__ */ React12.createElement(View5, {
        style: styles7.switchOffCircle
    }), /* @__PURE__ */ React12.createElement(Text5, {
        style: styles7.text
    }, "Default"), isEnabled && /* @__PURE__ */ React12.createElement(MaterialIcons, {
        name: "check",
        size: 16,
        color: COLORS.lemon,
        style: styles7.icon
    })));
};
var styles7 = StyleSheet8.create({
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
import { StyleSheet as StyleSheet9, TouchableOpacity as TouchableOpacity6, View as View6, FlatList } from "react-native";
import React14 from "react";
// src/helper/helper.ts
import * as SecureStore from "expo-secure-store";
import * as Device from "expo-device";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import Toast from "react-native-toast-message";
import RNSimpleCrypto from "react-native-simple-crypto";
function truncateText(text) {
    if (typeof text !== "string" || text.length <= 4) {
        return text;
    }
    var firstTwo = text.slice(0, 2);
    var lastTwo = text.slice(-2);
    return "".concat(firstTwo, "***").concat(lastTwo);
}
function truncateTextWithEmail(text) {
    if (typeof text !== "string" || text.length <= 4) {
        return text;
    }
    var firstTwo = text.slice(0, 2);
    var lastEight = text.slice(-8);
    return "".concat(firstTwo, "***").concat(lastEight);
}
var generateKeyPair = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function() {
        var keys, privateKey, publicKey;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        RNSimpleCrypto.RSA.generateKeys(2048)
                    ];
                case 1:
                    keys = _state.sent();
                    privateKey = keys.private, publicKey = keys.public;
                    return [
                        4,
                        SecureStore.setItemAsync("biometricPrivateKey", privateKey)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        SecureStore.setItemAsync("biometricPublicKey", publicKey)
                    ];
                case 3:
                    _state.sent();
                    return [
                        2,
                        {
                            privateKey: privateKey,
                            publicKey: publicKey
                        }
                    ];
            }
        });
    });
    return function generateKeyPair() {
        return _ref.apply(this, arguments);
    };
}();
var storeEmail = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(email) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        SecureStore.setItemAsync("email", email)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function storeEmail(email) {
        return _ref.apply(this, arguments);
    };
}();
var getStoredEmail = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function() {
        var email;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        SecureStore.getItemAsync("email")
                    ];
                case 1:
                    email = _state.sent();
                    return [
                        2,
                        {
                            email: email
                        }
                    ];
            }
        });
    });
    return function getStoredEmail() {
        return _ref.apply(this, arguments);
    };
}();
var signBiometricToken = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(token) {
        var privateKey, publicKey, signature;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        SecureStore.getItemAsync("biometricPrivateKey")
                    ];
                case 1:
                    privateKey = _state.sent();
                    return [
                        4,
                        SecureStore.getItemAsync("biometricPublicKey")
                    ];
                case 2:
                    publicKey = _state.sent();
                    if (!privateKey || !publicKey) {
                        throw new Error("Biometric keypair not found");
                    }
                    return [
                        4,
                        RNSimpleCrypto.RSA.sign(token, privateKey, "SHA256")
                    ];
                case 3:
                    signature = _state.sent();
                    return [
                        2,
                        {
                            publicKey: publicKey,
                            signature: signature
                        }
                    ];
            }
        });
    });
    return function signBiometricToken(token) {
        return _ref.apply(this, arguments);
    };
}();
function truncateTextSubtitle(text, size) {
    if (typeof text !== "string" || (text === null || text === void 0 ? void 0 : text.length) <= size) {
        return text;
    }
    var firstTwo = text.slice(0, size);
    return "".concat(firstTwo, "...");
}
function truncateTextLast4(text, size) {
    if (typeof text !== "string" || text.length <= size) {
        return text;
    }
    var firstTwo = text.slice(0, size);
    return "...".concat(firstTwo);
}
var validationSchema = Yup.object().shape({
    oldPassword: Yup.string().min(8, "Password must be at least 8 characters long").matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()._])/, "Password must contain at least one uppercase letter, one number, and one special character").required("Password is required"),
    newPassword: Yup.string().min(8, "Password must be at least 8 characters long").matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()._])/, "Password must contain at least one uppercase letter, one number, and one special character").required("Password is required"),
    confirmPassword: Yup.string().required("Confirm password is required").test("passwords-match", "Passwords must match", function(value) {
        return this.parent.newPassword === value;
    })
});
var resetValidationSchema = Yup.object().shape({
    newPassword: Yup.string().min(8, "Password must be at least 8 characters long").matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()._])/, "Password must contain at least one uppercase letter, one number, and one special character").required("Password is required"),
    confirmPassword: Yup.string().required("Confirm password is required").test("passwords-match", "Passwords must match", function(value) {
        return this.parent.newPassword === value;
    })
});
var cardValidationSchema = Yup.object().shape({
    card_name: Yup.string().matches(/^[a-zA-Z\s]*$/, "Card name can only contain letters and spaces").required("Card name is required"),
    card_number: Yup.string().test("is-16-digits", "Card number must be exactly 16 digits", function(value) {
        var cleanValue = value === null || value === void 0 ? void 0 : value.replace(/\s+/g, "");
        return cleanValue && cleanValue.length === 16;
    }).required("Card number is required"),
    expiry_date: Yup.string().matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must be in the format MM/YY").test("expiry_date", "Card has expired", function(value) {
        if (!value) return false;
        var _value_split_map = _sliced_to_array(value.split("/").map(Number), 2), month = _value_split_map[0], year = _value_split_map[1];
        var now = /* @__PURE__ */ new Date();
        var currentYear = parseInt(now.getFullYear().toString().slice(-2));
        var currentMonth = now.getMonth() + 1;
        return year > currentYear || year === currentYear && month >= currentMonth;
    }).max(5, "Expiry date must be in MM/YY format").required("Expiry date is required"),
    cvv: Yup.string().matches(/^\d{3}$/, "CVV must be exactly 3 digits").required("CVV is required")
});
var profileValidationSchema = Yup.object().shape({
    phone: Yup.string().matches(/^(0\d{10}|234\d{10})$/, 'Phone number must start with "0" or "234" and be 11 or 13 digits long').required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required")
});
var ticketValidationSchema = Yup.object().shape({
    subject: Yup.string().required("Subject is required"),
    department: Yup.string().required("Department is required")
});
var loginValidationSchema = Yup.object().shape({
    phone: Yup.string().matches(/^0\d{10}$/, 'Phone number must start with "0" and be 11 digits long').required("Phone number is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters long").matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()._])/, "Password must contain at least one uppercase letter, one number, and one special character").required("Password is required")
});
var phoneValidationSchema = Yup.object().shape({
    phone: Yup.string().matches(/^0\d{10}$/, 'Phone number must start with "0" and be 11 digits long').required("Phone number is required")
});
function formatPhoneNumber(phoneNumber) {
    if (phoneNumber.startsWith("234")) {
        return phoneNumber;
    }
    return "234" + phoneNumber.slice(1);
}
function getYearsArray() {
    var startYear = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 2024, endYear = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1990;
    return Array.from({
        length: startYear - endYear + 1
    }, function(_, i) {
        return startYear - i;
    });
}
var getOrCreateDeviceId = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function() {
        var deviceId, _Device_osInternalBuildId, _ref;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        SecureStore.getItemAsync("deviceId")
                    ];
                case 1:
                    deviceId = _state.sent();
                    if (!!deviceId) return [
                        3,
                        3
                    ];
                    deviceId = (_ref = (_Device_osInternalBuildId = Device.osInternalBuildId) !== null && _Device_osInternalBuildId !== void 0 ? _Device_osInternalBuildId : Device.deviceName) !== null && _ref !== void 0 ? _ref : "unknown_device";
                    return [
                        4,
                        SecureStore.setItemAsync("deviceId", deviceId)
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    return [
                        2,
                        deviceId
                    ];
            }
        });
    });
    return function getOrCreateDeviceId() {
        return _ref.apply(this, arguments);
    };
}();
var generateSignature = function() {
    return uuidv4();
};
var blurhash = "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
var getVehicleIds = function(vehicles) {
    return vehicles.map(function(vehicle) {
        return vehicle === null || vehicle === void 0 ? void 0 : vehicle.id;
    });
};
var formatFileSize = function(bytes) {
    if (bytes === 0) return "0 Bytes";
    var k = 1024;
    var sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return "".concat(parseFloat((bytes / Math.pow(k, i)).toFixed(2)), " ").concat(sizes[i]);
};
var formatFileType = function(fileType) {
    if (!fileType) return "Unknown";
    var type = "";
    if (fileType.startsWith("http")) {
        var urlParts = fileType.split("?")[0].split("/");
        var fileName = urlParts[urlParts.length - 1];
        var extMatch = fileName.match(/\.([a-zA-Z0-9]+)$/);
        type = extMatch ? extMatch[1].toUpperCase() : "Unknown";
    } else {
        var _fileType_split_pop;
        type = ((_fileType_split_pop = fileType.split("/").pop()) === null || _fileType_split_pop === void 0 ? void 0 : _fileType_split_pop.toUpperCase()) || "Unknown";
    }
    switch(type){
        case "JPEG":
        case "JPG":
            return "JPG";
        case "PNG":
            return "PNG";
        case "PDF":
            return "PDF";
        case "HEIC":
            return "HEIC";
        default:
            return type;
    }
};
var getComponent = function(addressComponents, type) {
    var _addressComponents_find;
    return ((_addressComponents_find = addressComponents.find(function(comp) {
        return comp.types.includes(type);
    })) === null || _addressComponents_find === void 0 ? void 0 : _addressComponents_find.long_name) || "";
};
var transformWashDetails = function(washDetails) {
    return washDetails.map(function(item) {
        var _item_vehicle;
        return {
            vehicleId: ((_item_vehicle = item.vehicle) === null || _item_vehicle === void 0 ? void 0 : _item_vehicle.id) || "",
            addonIds: (item.addons || []).map(function(addon) {
                return addon.id;
            })
        };
    });
};
var transformWashAddOns = function(washDetails) {
    return washDetails.map(function(item) {
        return {
            vehicles: item.vehicle || "",
            addOns: (item.addons || []).map(function(addon) {
                return addon;
            })
        };
    });
};
var getAddonAndVehicleIds = function(washDetails) {
    var vehicleIds = [];
    var addonIds = [];
    washDetails.forEach(function(detail) {
        var _detail_vehicle;
        if ((_detail_vehicle = detail.vehicle) === null || _detail_vehicle === void 0 ? void 0 : _detail_vehicle.id) {
            vehicleIds.push(detail.vehicle.id);
        }
        if (Array.isArray(detail.addons)) {
            detail.addons.forEach(function(addon) {
                if (addon === null || addon === void 0 ? void 0 : addon.id) {
                    addonIds.push(addon.id);
                }
            });
        }
    });
    return [
        vehicleIds,
        addonIds
    ];
};
var showToastNotification = function(param) {
    var type = param.type, title = param.title, message = param.message;
    Toast.show({
        type: type,
        text1: title,
        text2: message
    });
};
var formatToISOString = function(scheduledDate, scheduledTime) {
    try {
        var date = new Date(scheduledDate);
        if (isNaN(date.getTime())) throw new Error("Invalid date format");
        var year = date.getFullYear();
        var month = String(date.getMonth() + 1).padStart(2, "0");
        var day = String(date.getDate()).padStart(2, "0");
        var formattedDate = "".concat(year, "-").concat(month, "-").concat(day);
        var timeParts = scheduledTime.match(/(\d+):(\d+)\s?(AM|PM)/i);
        if (!timeParts) throw new Error("Invalid time format");
        var _timeParts = _sliced_to_array(timeParts, 4), _ = _timeParts[0], hour = _timeParts[1], minute = _timeParts[2], period = _timeParts[3];
        var hourNum = parseInt(hour, 10);
        if (period.toUpperCase() === "PM" && hourNum !== 12) hourNum += 12;
        if (period.toUpperCase() === "AM" && hourNum === 12) hourNum = 0;
        var formattedTime = "".concat(String(hourNum).padStart(2, "0"), ":").concat(minute, ":00");
        var combined = "".concat(formattedDate, "T").concat(formattedTime);
        var isoString = new Date(combined).toISOString();
        return isoString;
    } catch (err) {
        console.error("Error formatting datetime:", err);
        return "";
    }
};
var filterOrders = function(orders) {
    return orders === null || orders === void 0 ? void 0 : orders.filter(function(order) {
        return (order === null || order === void 0 ? void 0 : order.isScheduled) === false || !(order === null || order === void 0 ? void 0 : order.isScheduled);
    });
};
var getTimeDifference = function(scheduleTime) {
    var now = /* @__PURE__ */ new Date();
    var schedule = new Date(scheduleTime);
    var diff = schedule.getTime() - now.getTime();
    if (diff <= 0) return "0m";
    var minutes = Math.floor(diff / (1e3 * 60)) % 60;
    var hours = Math.floor(diff / (1e3 * 60 * 60)) % 24;
    var days = Math.floor(diff / (1e3 * 60 * 60 * 24));
    var parts = [];
    if (days > 0) parts.push("".concat(days, "d"));
    if (hours > 0) parts.push("".concat(hours, "h"));
    if (minutes > 0) parts.push("".concat(minutes, "m"));
    return parts.join(" ");
};
function formatDateTime(isoString) {
    var dateObj = new Date(isoString);
    var date = dateObj.toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
    var time = dateObj.toLocaleTimeString(void 0, {
        hour: "2-digit",
        minute: "2-digit"
    });
    return {
        date: date,
        time: time
    };
}
// src/assets/svg/MasterCardSmall.tsx
import * as React13 from "react";
import Svg5, { Path as Path5 } from "react-native-svg";
var SvgComponent5 = function(props) {
    return /* @__PURE__ */ React13.createElement(Svg5, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 18,
        height: 12,
        fill: "none"
    }, props), /* @__PURE__ */ React13.createElement(Path5, {
        fill: "#FF5F00",
        d: "M11.502 1.677H6.686v8.643h4.816V1.677Z"
    }), /* @__PURE__ */ React13.createElement(Path5, {
        fill: "#EB001B",
        d: "M6.992 5.999c0-1.68.78-3.283 2.095-4.322a5.49 5.49 0 0 0-7.721.932 5.474 5.474 0 0 0 .932 7.711 5.495 5.495 0 0 0 6.804 0A5.497 5.497 0 0 1 6.992 6Z"
    }), /* @__PURE__ */ React13.createElement(Path5, {
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
        return /* @__PURE__ */ React14.createElement(TouchableOpacity6, {
            onPress: function() {
                if (setSelect) setSelect(item.make || item.value || item);
                if (setSelectModelData) setSelectModelData(item.models);
                if (setSelectVehicle) setSelectVehicle(item);
                onClose();
            },
            style: customStyles.groupSpaceBetween
        }, /* @__PURE__ */ React14.createElement(CustomTextNeutral, {
            style: styles8.text
        }, setSelectVehicle ? item.make + " " + item.model + " " + item.year : item.make || item.value || item), cardNumber && item.value === "Card" && /* @__PURE__ */ React14.createElement(View6, {
            style: [
                customStyles.group,
                {
                    gap: 7
                }
            ]
        }, /* @__PURE__ */ React14.createElement(MasterCardSmall_default, null), /* @__PURE__ */ React14.createElement(CustomTextNeutral, {
            style: styles8.card
        }, truncateTextLast4("2348031234567", 4))));
    };
    return /* @__PURE__ */ React14.createElement(View6, {
        style: [
            styles8.container,
            {
                marginTop: marginTop,
                maxHeight: 400
            }
        ]
    }, title && /* @__PURE__ */ React14.createElement(CustomUrbanistTitle, {
        style: styles8.title
    }, title), /* @__PURE__ */ React14.createElement(FlatList, {
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
var styles8 = StyleSheet9.create({
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
import { StyleSheet as StyleSheet10, View as View7 } from "react-native";
import React15 from "react";
var ModalContent = function(param) {
    var onPress = param.onPress, title = param.title, subtitle = param.subtitle, icon = param.icon, buttonTitle = param.buttonTitle, secondButton = param.secondButton, secondButtonTitle = param.secondButtonTitle, _param_subTitleMarginBottom = param.subTitleMarginBottom, subTitleMarginBottom = _param_subTitleMarginBottom === void 0 ? 0 : _param_subTitleMarginBottom, _param_subTitleWidth = param.subTitleWidth, subTitleWidth = _param_subTitleWidth === void 0 ? 250 : _param_subTitleWidth, _param_marginHorizontal = param.marginHorizontal, marginHorizontal = _param_marginHorizontal === void 0 ? 20 : _param_marginHorizontal, secondButtonOnPress = param.secondButtonOnPress, isRowButton = param.isRowButton, loading = param.loading;
    return /* @__PURE__ */ React15.createElement(View7, {
        style: [
            styles9.container,
            {
                marginHorizontal: marginHorizontal
            }
        ]
    }, icon && /* @__PURE__ */ React15.createElement(View7, {
        style: styles9.image
    }, icon), title && /* @__PURE__ */ React15.createElement(CustomTitle, {
        style: {
            textAlign: "center",
            maxWidth: 287
        }
    }, title), subtitle && /* @__PURE__ */ React15.createElement(CustomSubtitle, {
        style: {
            textAlign: "center",
            maxWidth: subTitleWidth,
            marginBottom: subTitleMarginBottom
        }
    }, subtitle), isRowButton ? /* @__PURE__ */ React15.createElement(View7, {
        style: styles9.isRowButton
    }, secondButton && /* @__PURE__ */ React15.createElement(View7, {
        style: styles9.rowButton
    }, /* @__PURE__ */ React15.createElement(CustomButton_default, {
        title: secondButtonTitle || "Cancel",
        backgroundColor: COLORS.neutral30,
        textColor: COLORS.black,
        onPress: secondButtonOnPress,
        isTextMedium: true,
        isHalfWidth: true
    })), /* @__PURE__ */ React15.createElement(View7, {
        style: styles9.rowButton
    }, /* @__PURE__ */ React15.createElement(CustomButton_default, {
        title: buttonTitle || "Continue",
        backgroundColor: COLORS.error200,
        textColor: COLORS.white,
        onPress: onPress,
        isTextMedium: true,
        isHalfWidth: true,
        isLoading: loading,
        disabled: loading
    }))) : /* @__PURE__ */ React15.createElement(View7, {
        style: styles9.fullWidthCustomButton
    }, /* @__PURE__ */ React15.createElement(CustomButton_default, {
        title: buttonTitle || "Continue",
        backgroundColor: COLORS.primary500,
        textColor: COLORS.white,
        onPress: onPress,
        isTextMedium: true,
        isLoading: loading,
        disabled: loading
    }), secondButton && /* @__PURE__ */ React15.createElement(CustomButton_default, {
        title: secondButtonTitle || "Cancel",
        backgroundColor: COLORS.white,
        marginTop: 10,
        textColor: COLORS.black,
        onPress: secondButtonOnPress
    })));
};
var ModalContent_default = ModalContent;
var styles9 = StyleSheet10.create({
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
import { StyleSheet as StyleSheet11, View as View8 } from "react-native";
import React16 from "react";
var EmptyList = function(param) {
    var title = param.title, description = param.description, icon = param.icon, _param_marginTop = param.marginTop, marginTop = _param_marginTop === void 0 ? -150 : _param_marginTop;
    return /* @__PURE__ */ React16.createElement(View8, {
        style: [
            styles10.container,
            {
                marginTop: marginTop
            }
        ]
    }, icon && icon, /* @__PURE__ */ React16.createElement(CustomTitleMedium, null, title), /* @__PURE__ */ React16.createElement(CustomUrbanistSubtitle, null, description));
};
var EmptyList_default = EmptyList;
var styles10 = StyleSheet11.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
// src/types/others.ts
var EResult = /* @__PURE__ */ function(EResult2) {
    EResult2["CANCELLED"] = "CANCELLED";
    EResult2["DISABLED"] = "DISABLED";
    EResult2["ERROR"] = "ERROR";
    EResult2["SUCCESS"] = "SUCCESS";
    return EResult2;
}(EResult || {});
var ETab = /* @__PURE__ */ function(ETab2) {
    ETab2[ETab2["TAB_ONE"] = 1] = "TAB_ONE";
    ETab2[ETab2["TAB_TWO"] = 2] = "TAB_TWO";
    ETab2[ETab2["TAB_THREE"] = 3] = "TAB_THREE";
    return ETab2;
}(ETab || {});
var modalEnum = /* @__PURE__ */ function(modalEnum2) {
    modalEnum2["SEARCHING"] = "searching";
    modalEnum2["CANCEL"] = "cancel";
    modalEnum2["ARRIVAL"] = "arrival";
    modalEnum2["ACCEPT_FINAL_OFFER"] = "acceptFinalOrder";
    modalEnum2["RETRY"] = "retry";
    modalEnum2["ARRIVING"] = "arriving";
    modalEnum2["PAYMENT"] = "payment";
    modalEnum2["FAILED_PAYMENT"] = "failed_payment";
    return modalEnum2;
}(modalEnum || {});
// src/services/authServices/types.ts
var otpChannel = /* @__PURE__ */ function(otpChannel2) {
    otpChannel2["SMS"] = "sms";
    otpChannel2["EMAIL"] = "email";
    return otpChannel2;
}(otpChannel || {});
var apiContext = /* @__PURE__ */ function(apiContext2) {
    apiContext2["reset"] = "reset-password";
    apiContext2["signIn"] = "signin";
    apiContext2["signUp"] = "signup";
    apiContext2["updatePassword"] = "update-password";
    return apiContext2;
}(apiContext || {});
// src/hooks/useModal/useModal.tsx
import { useState as useState2, useCallback } from "react";
var useModal = function() {
    var _useState2 = _sliced_to_array(useState2(false), 2), visible = _useState2[0], setVisible = _useState2[1];
    var onOpen = useCallback(function() {
        setVisible(true);
    }, []);
    var onClose = useCallback(function() {
        setVisible(false);
    }, []);
    return {
        visible: visible,
        onOpen: onOpen,
        onClose: onClose
    };
};
// src/hooks/useShareLink/useShareLink.tsx
import { useCallback as useCallback2 } from "react";
import { Share } from "react-native";
var useShareLink = function() {
    var shareLink = useCallback2(/*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(content, options) {
            var result, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            Share.share(content, options)
                        ];
                    case 1:
                        result = _state.sent();
                        if (result.action === Share.sharedAction) {
                            if (result.activityType) {
                                console.log("Shared with activity type: ".concat(result.activityType));
                            } else {
                                console.log("Link shared successfully");
                            }
                        } else if (result.action === Share.dismissedAction) {
                            console.log("Share dismissed");
                        }
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        console.error("Error while sharing link:", error);
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function(content, options) {
            return _ref.apply(this, arguments);
        };
    }(), []);
    return {
        shareLink: shareLink
    };
};
// src/hooks/useTimer/useTimer.tsx
import { useState as useState3, useEffect } from "react";
var useTimer = function(initialSeconds) {
    var _useState3 = _sliced_to_array(useState3(initialSeconds), 2), seconds = _useState3[0], setSeconds = _useState3[1];
    var _useState31 = _sliced_to_array(useState3(false), 2), isFinished = _useState31[0], setIsFinished = _useState31[1];
    useEffect(function() {
        var timer = null;
        if (seconds > 0) {
            timer = setTimeout(function() {
                return setSeconds(seconds - 1);
            }, 1e3);
        } else {
            setIsFinished(true);
        }
        return function() {
            if (timer) clearTimeout(timer);
        };
    }, [
        seconds
    ]);
    var formatTime = function() {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;
        return "".concat(minutes, ":").concat(remainingSeconds < 10 ? "0".concat(remainingSeconds) : remainingSeconds);
    };
    return {
        seconds: seconds,
        isFinished: isFinished,
        formattedTime: formatTime()
    };
};
// src/hooks/useCountDown/useCountDown.ts
import { useEffect as useEffect2, useRef, useState as useState4 } from "react";
var useCountdown = function(minutes) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, onStart = _ref.onStart, onComplete = _ref.onComplete;
    var _useState4 = _sliced_to_array(useState4(minutes > 0 ? minutes * 60 : 0), 2), timeLeft = _useState4[0], setTimeLeft = _useState4[1];
    var intervalRef = useRef(null);
    var hasStarted = useRef(false);
    var hasCompleted = useRef(false);
    useEffect2(function() {
        if (minutes > 0) {
            setTimeLeft(minutes * 60);
            hasStarted.current = false;
            hasCompleted.current = false;
        }
    }, [
        minutes
    ]);
    useEffect2(function() {
        if (timeLeft > 0 && !hasStarted.current) {
            hasStarted.current = true;
            onStart === null || onStart === void 0 ? void 0 : onStart();
        }
        if (timeLeft <= 0) {
            if (!hasCompleted.current) {
                hasCompleted.current = true;
                onComplete === null || onComplete === void 0 ? void 0 : onComplete();
            }
            return;
        }
        intervalRef.current = setInterval(function() {
            setTimeLeft(function(prev) {
                if (prev <= 1) {
                    clearInterval(intervalRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1e3);
        return function() {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [
        timeLeft,
        onStart,
        onComplete
    ]);
    var formatTime = function(totalSeconds) {
        var hours = Math.floor(totalSeconds / 3600);
        var minutes2 = Math.floor(totalSeconds % 3600 / 60);
        var seconds = totalSeconds % 60;
        var pad = function(n) {
            return String(n).padStart(2, "0");
        };
        return "".concat(pad(hours), ":").concat(pad(minutes2), ":").concat(pad(seconds));
    };
    return formatTime(timeLeft);
};
// src/config/endpoints.ts
var V1 = "v1";
var AUTH = "".concat(V1, "/auth/customers");
var PROFILE = "".concat(V1, "/profile");
var NOTIFICATIONS = "".concat(V1, "/notifications");
var CHAT = "".concat(V1, "/chats");
var TICKETS = "".concat(CHAT, "/tickets");
var WASHES = "".concat(V1, "/washes");
var ORDERS = "".concat(V1, "/orders");
var ENDPOINT = {
    SIGN_IN: "".concat(AUTH, "/init/local"),
    SIGN_IN_WITH_GOOGLE: "".concat(AUTH, "/init/google"),
    SIGN_IN_WITH_BIOMETRICS: "".concat(AUTH, "/init/biometric"),
    RESET_PASSWORD: "".concat(AUTH, "/reset-password"),
    REQUEST_OTP: "".concat(AUTH, "/otp"),
    VERIFY_OTP: "".concat(AUTH, "/otp/verify"),
    VEHICLE: "".concat(PROFILE, "/vehicle"),
    GET_VEHICLES: "".concat(PROFILE, "/vehicles"),
    GET_VEHICLES_CONFIG: "".concat(PROFILE, "/vehicles/config"),
    ADDRESS: "".concat(PROFILE, "/address"),
    PROFILE: "".concat(PROFILE),
    NOTIFICATIONS: "".concat(NOTIFICATIONS),
    UPLOAD_PROFILE_IMAGE: "".concat(PROFILE, "/upload/image"),
    UPDATE_PASSWORD: "".concat(PROFILE, "/update-password"),
    ACTIVATE_BIOMETRICS: "".concat(PROFILE, "/biometric/activate"),
    GET_COUNTRIES: "".concat(PROFILE, "/countries"),
    FAQS: "".concat(PROFILE, "/faqs"),
    INITIATE_CONVERSATION: "".concat(CHAT, "/conversation"),
    INITIATE_SUPPORT_CONVERSATION: "".concat(CHAT, "/support"),
    SEND_MESSAGE: "".concat(CHAT, "/message"),
    GET_CONVERSATIONS: "".concat(CHAT, "/conversations"),
    CLOSE_CONVERSATIONS: "".concat(CHAT, "/conversation/close"),
    UPLOAD_IMAGE: "".concat(CHAT, "/upload/image"),
    GET_MESSAGES: "".concat(CHAT, "/messages"),
    GET_REFERRALS: "".concat(PROFILE, "/referrals"),
    GET_REFERRALS_CONFIG: "".concat(PROFILE, "/referrals/configs"),
    REDEEM_REFERRAL: "".concat(PROFILE, "/referrals/redeem"),
    PROMO_CARD: "".concat(WASHES, "/promo-cards"),
    CATEGORIES: "".concat(WASHES, "/categories"),
    ORDER: "".concat(ORDERS, "/washer/find"),
    CANCEL_ORDER: "".concat(ORDERS, "/cancel"),
    COMPLETE_ORDER: "".concat(ORDERS, "/complete"),
    CONFIRM_ORDER: "".concat(ORDERS, "/confirm"),
    RATE_USER: "".concat(ORDERS, "/rate-user"),
    WASHER_ARRIVED: "".concat(ORDERS, "/washer-arrived"),
    RETRY_WASH: "".concat(ORDERS, "/washer/retry"),
    COUPON: "".concat(ORDERS, "/validate-coupon"),
    GET_WASHES: "".concat(WASHES, "/customer"),
    GET_WASH: "".concat(WASHES),
    CREATE_TICKET: "".concat(TICKETS, "/create"),
    GET_TICKETS: "".concat(TICKETS, "/customer"),
    GET_TICKET_CONVERSATIONS: "".concat(TICKETS, "/conversations"),
    SEND_TICKET_MESSAGE: "".concat(CHAT, "/message/support")
};
// src/config/baseApi.ts
import axios from "axios";
var API_URL = "https://gateway-ms-production.up.railway.app";
var SOCKET_URL = "https://chats-ms-production.up.railway.app";
var api = axios.create({
    baseURL: "".concat(API_URL),
    headers: {
        "Content-type": "application/json"
    }
});
var baseApi_default = api;
// src/config/useStorageState.ts
import { useEffect as useEffect3, useCallback as useCallback3, useReducer } from "react";
import * as SecureStore2 from "expo-secure-store";
import { Platform } from "react-native";
function useAsyncState() {
    var initialValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [
        true,
        null
    ];
    return useReducer(function(state) {
        var action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return [
            false,
            action
        ];
    }, initialValue);
}
function setStorageItemAsync(key, value) {
    return _setStorageItemAsync.apply(this, arguments);
}
function _setStorageItemAsync() {
    _setStorageItemAsync = _async_to_generator(function(key, value) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!(Platform.OS === "web")) return [
                        3,
                        1
                    ];
                    try {
                        if (value === null) {
                            localStorage.removeItem(key);
                        } else {
                            localStorage.setItem(key, value);
                        }
                    } catch (e) {
                        console.error("Local storage is unavailable:", e);
                    }
                    return [
                        3,
                        5
                    ];
                case 1:
                    if (!(value == null)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        SecureStore2.deleteItemAsync(key)
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        5
                    ];
                case 3:
                    return [
                        4,
                        SecureStore2.setItemAsync(key, value)
                    ];
                case 4:
                    _state.sent();
                    _state.label = 5;
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return _setStorageItemAsync.apply(this, arguments);
}
function useStorageState(key) {
    var _useAsyncState = _sliced_to_array(useAsyncState(), 2), state = _useAsyncState[0], setState = _useAsyncState[1];
    useEffect3(function() {
        if (Platform.OS === "web") {
            try {
                if (typeof localStorage !== "undefined") {
                    setState(localStorage.getItem(key));
                }
            } catch (e) {
                console.error("Local storage is unavailable:", e);
            }
        } else {
            SecureStore2.getItemAsync(key).then(function(value) {
                setState(value);
            });
        }
    }, [
        key
    ]);
    var setValue = useCallback3(function(value) {
        setState(value);
        setStorageItemAsync(key, value);
    }, [
        key
    ]);
    return [
        state,
        setValue
    ];
}
// src/context/socket.tsx
import React17, { createContext, useContext, useEffect as useEffect4, useState as useState5 } from "react";
// src/config/socket.ts
import { io } from "socket.io-client";
var socket = null;
var initializeSocket = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            if (!socket) {
                socket = io(API_URL, {
                    transports: [
                        "websocket"
                    ]
                });
                socket.on("connect", function() {
                    console.log("Socket connected!");
                });
                socket.on("reconnect_attempt", function(attempt) {
                    console.log("Trying to reconnect (#".concat(attempt, ")"));
                });
                socket.on("reconnect_failed", function() {
                    console.log("Failed to reconnect");
                });
                socket.on("connect_error", function(err) {
                    console.log("connect_error due to ".concat(err.message));
                });
                socket.on("disconnect", function() {
                    console.log("Socket disconnected!");
                });
            }
            return [
                2,
                socket
            ];
        });
    });
    return function initializeSocket() {
        return _ref.apply(this, arguments);
    };
}();
var disconnectSocket = function() {
    if (socket) {
        socket.disconnect();
        socket = null;
    }
};
// src/context/socket.tsx
var SocketContext = createContext({
    socket: null
});
var SocketProvider = function(param) {
    var children = param.children;
    var _useState5 = _sliced_to_array(useState5(null), 2), socket2 = _useState5[0], setSocket = _useState5[1];
    useEffect4(function() {
        var setupSocket = /*#__PURE__*/ function() {
            var _ref = _async_to_generator(function() {
                var initializedSocket, error;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            return [
                                4,
                                initializeSocket()
                            ];
                        case 1:
                            initializedSocket = _state.sent();
                            setSocket(initializedSocket);
                            return [
                                3,
                                3
                            ];
                        case 2:
                            error = _state.sent();
                            console.error("Error initializing socket:", error);
                            return [
                                3,
                                3
                            ];
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            });
            return function setupSocket() {
                return _ref.apply(this, arguments);
            };
        }();
        setupSocket();
        return function() {
            disconnectSocket();
        };
    }, []);
    return /* @__PURE__ */ React17.createElement(SocketContext.Provider, {
        value: {
            socket: socket2
        }
    }, children);
};
// src/services/authServices/authServices.ts
var AuthService = /*#__PURE__*/ function() {
    "use strict";
    function AuthService() {
        _class_call_check(this, AuthService);
    }
    _create_class(AuthService, [
        {
            key: "SIGN_IN",
            value: function SIGN_IN(data) {
                return baseApi_default.post("".concat(ENDPOINT.SIGN_IN), data);
            }
        },
        {
            key: "SIGN_IN_WITH_GOOGLE",
            value: function SIGN_IN_WITH_GOOGLE() {
                return baseApi_default.post("".concat(ENDPOINT.SIGN_IN_WITH_GOOGLE));
            }
        },
        {
            key: "SIGN_IN_WITH_BIOMETRICS",
            value: function SIGN_IN_WITH_BIOMETRICS(data) {
                return baseApi_default.post("".concat(ENDPOINT.SIGN_IN_WITH_BIOMETRICS), data);
            }
        },
        {
            key: "RESET_PASSWORD",
            value: function RESET_PASSWORD(data) {
                return baseApi_default.post("".concat(ENDPOINT.RESET_PASSWORD), data);
            }
        },
        {
            key: "REQUEST_OTP",
            value: function REQUEST_OTP(data) {
                return baseApi_default.post("".concat(ENDPOINT.REQUEST_OTP), data);
            }
        },
        {
            key: "VERIFY_OTP",
            value: function VERIFY_OTP(data) {
                return baseApi_default.post("".concat(ENDPOINT.VERIFY_OTP), data);
            }
        }
    ]);
    return AuthService;
}();
var AuthServices = new AuthService();
// src/services/washServices/washServices.ts
var WashService = /*#__PURE__*/ function() {
    "use strict";
    function WashService() {
        _class_call_check(this, WashService);
    }
    _create_class(WashService, [
        {
            key: "PROMO_CARDS",
            value: function PROMO_CARDS() {
                return baseApi_default.get("".concat(ENDPOINT.PROMO_CARD));
            }
        },
        {
            key: "GET_CATEGORIES",
            value: function GET_CATEGORIES() {
                return baseApi_default.get("".concat(ENDPOINT.CATEGORIES));
            }
        },
        {
            key: "CREATE_WASH",
            value: function CREATE_WASH(data) {
                var requestData = _object_spread_props(_object_spread({}, data), {
                    schedule: data.schedule || void 0,
                    coupon: data.coupon || void 0
                });
                Object.keys(requestData).forEach(function(key) {
                    return (requestData[key] === void 0 || requestData[key] === "") && delete requestData[key];
                });
                return baseApi_default.post("".concat(ENDPOINT.ORDER), requestData);
            }
        },
        {
            key: "GET_WASHES",
            value: function GET_WASHES(data) {
                var params = new URLSearchParams();
                if (data === null || data === void 0 ? void 0 : data.perPage) params.append("perPage", data.perPage.toString());
                if (data === null || data === void 0 ? void 0 : data.page) params.append("page", data.page.toString());
                if (data === null || data === void 0 ? void 0 : data.status) params.append("status", data.status.toString());
                return baseApi_default.get("".concat(ENDPOINT.GET_WASHES, "/?").concat(params.toString()));
            }
        },
        {
            key: "GET_WASH",
            value: function GET_WASH(data) {
                return baseApi_default.get("".concat(ENDPOINT.GET_WASH, "/").concat(data.orderId));
            }
        },
        {
            key: "CANCEL_ORDER",
            value: function CANCEL_ORDER(data) {
                return baseApi_default.post("".concat(ENDPOINT.CANCEL_ORDER), data);
            }
        },
        {
            key: "COMPLETE_ORDER",
            value: function COMPLETE_ORDER(data) {
                return baseApi_default.post("".concat(ENDPOINT.COMPLETE_ORDER), data);
            }
        },
        {
            key: "CONFIRM_ORDER",
            value: function CONFIRM_ORDER(data) {
                return baseApi_default.post("".concat(ENDPOINT.CONFIRM_ORDER), data);
            }
        },
        {
            key: "RATE_USER",
            value: function RATE_USER(data) {
                return baseApi_default.post("".concat(ENDPOINT.RATE_USER), data);
            }
        },
        {
            key: "WASHER_ARRIVED",
            value: function WASHER_ARRIVED(data) {
                return baseApi_default.post("".concat(ENDPOINT.WASHER_ARRIVED), data);
            }
        },
        {
            key: "RETRY_WASHER",
            value: function RETRY_WASHER(data) {
                return baseApi_default.post("".concat(ENDPOINT.RETRY_WASH), data);
            }
        },
        {
            key: "COUPON",
            value: function COUPON(data) {
                return baseApi_default.post("".concat(ENDPOINT.COUPON), data);
            }
        }
    ]);
    return WashService;
}();
var WashServices = new WashService();
// src/services/profileServices/profileServices.ts
var ProfileService = /*#__PURE__*/ function() {
    "use strict";
    function ProfileService() {
        _class_call_check(this, ProfileService);
    }
    _create_class(ProfileService, [
        {
            key: "ADD_VEHICLE",
            value: function ADD_VEHICLE(data) {
                return baseApi_default.post("".concat(ENDPOINT.VEHICLE), data);
            }
        },
        {
            key: "UPDATE_VEHICLE",
            value: function UPDATE_VEHICLE(data) {
                return baseApi_default.patch("".concat(ENDPOINT.VEHICLE), data);
            }
        },
        {
            key: "DELETE_VEHICLE",
            value: function DELETE_VEHICLE(id) {
                return baseApi_default.delete("".concat(ENDPOINT.VEHICLE, "/").concat(id));
            }
        },
        {
            key: "VEHICLES",
            value: function VEHICLES() {
                return baseApi_default.get("".concat(ENDPOINT.GET_VEHICLES));
            }
        },
        {
            key: "VEHICLES_CONFIG",
            value: function VEHICLES_CONFIG() {
                return baseApi_default.get("".concat(ENDPOINT.GET_VEHICLES_CONFIG));
            }
        },
        {
            key: "ADD_ADDRESS",
            value: function ADD_ADDRESS(data) {
                return baseApi_default.post("".concat(ENDPOINT.ADDRESS), data);
            }
        },
        {
            key: "UPDATE_ADDRESS",
            value: function UPDATE_ADDRESS(data) {
                return baseApi_default.patch("".concat(ENDPOINT.ADDRESS), data);
            }
        },
        {
            key: "DELETE_ADDRESS",
            value: function DELETE_ADDRESS(id) {
                return baseApi_default.delete("".concat(ENDPOINT.ADDRESS, "/").concat(id));
            }
        },
        {
            key: "ADDRESSES",
            value: function ADDRESSES() {
                return baseApi_default.get("".concat(ENDPOINT.ADDRESS));
            }
        },
        {
            key: "UPDATE_PROFILE",
            value: function UPDATE_PROFILE(data) {
                return baseApi_default.post("".concat(ENDPOINT.PROFILE), data);
            }
        },
        {
            key: "PROFILE",
            value: function PROFILE() {
                return baseApi_default.get("".concat(ENDPOINT.PROFILE));
            }
        },
        {
            key: "DELETE_PROFILE",
            value: function DELETE_PROFILE() {
                return baseApi_default.delete("".concat(ENDPOINT.PROFILE));
            }
        },
        {
            key: "UPDATE_PASSWORD",
            value: function UPDATE_PASSWORD(data) {
                return baseApi_default.post("".concat(ENDPOINT.UPDATE_PASSWORD), data);
            }
        },
        {
            key: "UPLOAD_PROFILE_IMAGE",
            value: function UPLOAD_PROFILE_IMAGE(formData) {
                var headers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return baseApi_default.post("".concat(ENDPOINT.UPLOAD_PROFILE_IMAGE), formData, {
                    headers: headers
                });
            }
        },
        {
            key: "ACTIVATE_BIOMETRICS",
            value: function ACTIVATE_BIOMETRICS(data) {
                var cleanedData = Object.fromEntries(Object.entries(data).filter(function(param) {
                    var _param = _sliced_to_array(param, 2), _ = _param[0], value = _param[1];
                    return value !== null && value !== void 0;
                }));
                return baseApi_default.post("".concat(ENDPOINT.ACTIVATE_BIOMETRICS), cleanedData);
            }
        },
        {
            key: "COUNTRIES",
            value: function COUNTRIES() {
                return baseApi_default.get("".concat(ENDPOINT.GET_COUNTRIES));
            }
        },
        {
            key: "FAQS",
            value: function FAQS() {
                return baseApi_default.get("".concat(ENDPOINT.FAQS));
            }
        },
        {
            key: "GET_REFERRALS",
            value: function GET_REFERRALS(data) {
                return baseApi_default.get("".concat(ENDPOINT.GET_REFERRALS, "?perPage=").concat(data.perPage, "&page=").concat(data.page));
            }
        },
        {
            key: "GET_REFERRALS_CONFIG",
            value: function GET_REFERRALS_CONFIG() {
                return baseApi_default.get("".concat(ENDPOINT.GET_REFERRALS_CONFIG));
            }
        },
        {
            key: "REDEEM_REFERRAL",
            value: function REDEEM_REFERRAL() {
                return baseApi_default.post("".concat(ENDPOINT.REDEEM_REFERRAL));
            }
        },
        {
            key: "NOTIFICATIONS",
            value: function NOTIFICATIONS() {
                return baseApi_default.get("".concat(ENDPOINT.NOTIFICATIONS));
            }
        }
    ]);
    return ProfileService;
}();
var ProfileServices = new ProfileService();
// src/services/chatServices/chatServices.ts
var ChatService = /*#__PURE__*/ function() {
    "use strict";
    function ChatService() {
        _class_call_check(this, ChatService);
    }
    _create_class(ChatService, [
        {
            key: "INITIATE_CONVERSATION",
            value: function INITIATE_CONVERSATION(data) {
                return baseApi_default.post("".concat(ENDPOINT.INITIATE_CONVERSATION), data);
            }
        },
        {
            key: "INITIATE_SUPPORT_CONVERSATION",
            value: function INITIATE_SUPPORT_CONVERSATION() {
                return baseApi_default.post("".concat(ENDPOINT.INITIATE_SUPPORT_CONVERSATION));
            }
        },
        {
            key: "SEND_MESSAGE",
            value: function SEND_MESSAGE(data) {
                return baseApi_default.post("".concat(ENDPOINT.SEND_MESSAGE), data);
            }
        },
        {
            key: "GET_CONVERSATIONS",
            value: function GET_CONVERSATIONS(userId) {
                return baseApi_default.get("".concat(ENDPOINT.GET_CONVERSATIONS, "/").concat(userId));
            }
        },
        {
            key: "GET_MESSAGES",
            value: function GET_MESSAGES(conversationId) {
                return baseApi_default.get("".concat(ENDPOINT.GET_MESSAGES, "/").concat(conversationId));
            }
        },
        {
            key: "CLOSE_CONVERSATIONS",
            value: function CLOSE_CONVERSATIONS(data) {
                return baseApi_default.post("".concat(ENDPOINT.CLOSE_CONVERSATIONS), data);
            }
        },
        {
            key: "UPLOAD_IMAGE",
            value: function UPLOAD_IMAGE(formData) {
                var headers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return baseApi_default.post("".concat(ENDPOINT.UPLOAD_IMAGE), formData, {
                    headers: headers
                });
            }
        },
        {
            key: "CREATE_TICKET",
            value: function CREATE_TICKET(data) {
                return baseApi_default.post("".concat(ENDPOINT.CREATE_TICKET), data);
            }
        },
        {
            key: "GET_TICKETS",
            value: function GET_TICKETS(data) {
                var _data_perPage, _data_page;
                var params = new URLSearchParams({
                    perPage: data === null || data === void 0 ? void 0 : (_data_perPage = data.perPage) === null || _data_perPage === void 0 ? void 0 : _data_perPage.toString(),
                    page: data === null || data === void 0 ? void 0 : (_data_page = data.page) === null || _data_page === void 0 ? void 0 : _data_page.toString()
                });
                return baseApi_default.get("".concat(ENDPOINT.GET_TICKETS, "/?").concat(params.toString()));
            }
        },
        {
            key: "GET_TICKET_CONVERSATIONS",
            value: function GET_TICKET_CONVERSATIONS(ticketId) {
                return baseApi_default.get("".concat(ENDPOINT.GET_TICKET_CONVERSATIONS, "/").concat(ticketId));
            }
        },
        {
            key: "SEND_TICKET_MESSAGE",
            value: function SEND_TICKET_MESSAGE(data) {
                return baseApi_default.post("".concat(ENDPOINT.SEND_TICKET_MESSAGE), data);
            }
        }
    ]);
    return ChatService;
}();
var ChatServices = new ChatService();
export { API_URL, AuthServices, COLORS, ChatServices, CustomButton_default as CustomButton, CustomDropdown_default as CustomDropdown, CustomError_default as CustomError, CustomInput_default as CustomInput, CustomModal_default as CustomModal, CustomMultiDropdown_default as CustomMultiDropdown, CustomSelect_default as CustomSelect, CustomSubtitle, CustomSwitch_default as CustomSwitch, CustomText, CustomTextItalics, CustomTextNeutral, CustomTitle, CustomTitleMedium, CustomUrbanistSubtitle, CustomUrbanistText, CustomUrbanistTitle, ENDPOINT, EResult, ETab, EmptyList_default as EmptyList, ModalContent_default as ModalContent, ProfileServices, SOCKET_URL, SocketProvider, WashServices, baseApi_default as api, apiContext, blurhash, cardValidationSchema, customStyles, filterOrders, formatDateTime, formatFileSize, formatFileType, formatPhoneNumber, formatToISOString, generateKeyPair, generateSignature, getAddonAndVehicleIds, getComponent, getOrCreateDeviceId, getStoredEmail, getTimeDifference, getVehicleIds, getYearsArray, loginValidationSchema, modalEnum, otpChannel, phoneValidationSchema, profileValidationSchema, resetValidationSchema, setStorageItemAsync, showToastNotification, signBiometricToken, statusBorderColor, statusColor, storeEmail, ticketValidationSchema, transformWashAddOns, transformWashDetails, truncateText, truncateTextLast4, truncateTextSubtitle, truncateTextWithEmail, useCountdown, useModal, useShareLink, useStorageState, useTimer, validationSchema };
//# sourceMappingURL=index.mjs.map