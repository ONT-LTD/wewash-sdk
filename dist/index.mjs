function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
// src/assets/png/notificationLogo.png
var require_notificationLogo = __commonJS({
    "src/assets/png/notificationLogo.png": function(exports, module) {
        module.exports = "./notificationLogo-43K2XXD4.png";
    }
});
// src/components/CustomButton/CustomButton.tsx
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
    var title = param.title, onPress = param.onPress, disabled = param.disabled, backgroundColor = param.backgroundColor, textColor = param.textColor, marginBottom = param.marginBottom, marginTop = param.marginTop, marginHorizontal = param.marginHorizontal, marginVertical = param.marginVertical, marginLeft = param.marginLeft, marginRight = param.marginRight, borderColor = param.borderColor, isTextMedium = param.isTextMedium, icon = param.icon, iconRight = param.iconRight, alignSelf = param.alignSelf, isHalfWidth = param.isHalfWidth, paddingHorizontal = param.paddingHorizontal, fontSize = param.fontSize, paddingVertical = param.paddingVertical, isLoading = param.isLoading, isSmallButton = param.isSmallButton, estimated = param.estimated;
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
    }), iconRight && iconRight) : /* @__PURE__ */ React.createElement(TouchableOpacity, {
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
    }), iconRight && iconRight);
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
import moment from "moment";
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
var withdrawalValidationSchema = Yup.object().shape({
    amount: Yup.string().required("Amount is required").test("is-valid-format", "Amount must be a number", function(value) {
        if (!value) return false;
        var sanitized = value.replace(/,/g, "");
        return !isNaN(Number(sanitized));
    }).test("is-positive", "Amount must be greater than zero", function(value) {
        if (!value) return false;
        var num = parseFloat(value.replace(/,/g, ""));
        return num > 0;
    }).test("min-amount", "Minimum withdrawal is \u20A6100", function(value) {
        var num = parseFloat((value === null || value === void 0 ? void 0 : value.replace(/,/g, "")) || "");
        return num >= 100;
    }).test("max-amount", "Maximum withdrawal is \u20A61,000,000", function(value) {
        var num = parseFloat((value === null || value === void 0 ? void 0 : value.replace(/,/g, "")) || "");
        return num <= 1e6;
    }).test("decimal-places", "Amount can have up to 2 decimal places", function(value) {
        if (!value) return false;
        var sanitized = value.replace(/,/g, "");
        return /^\d+(\.\d{1,2})?$/.test(sanitized);
    })
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
var htmlContent = function(modalData, vehicles, addOns) {
    return '\n        <html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Receipt</title>\n  </head>\n  <body\n    style="\n      width: 100%;\n      height: 100vh;\n      background: #ccc;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    "\n  >\n    <style>\n      @import url("https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap");\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: "Urbanist", sans-serif;\n        font-optical-sizing: auto;\n      }\n    </style>\n    <section\n      style="\n        width: 90%;\n        max-width: 442px;\n        background: #fff;\n        padding: 20px 0px;\n        border-radius: 7px;\n      "\n    >\n      <section style="padding: 0px 20px; margin-bottom: 30px">\n        <header\n          style="\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            place-items: center;\n            padding: 10px 0;\n            margin-bottom: 15px;\n          "\n        >\n          <img\n            src="./src/assets/rainbow-logo.png"\n            alt=""\n            style="\n              max-width: 160px;\n              max-height: 40px;\n              object-fit: contain;\n              user-select: none;\n            "\n          />\n\n          <div>\n            <p\n              style="\n                color: #162243;\n                font-size: 17px;\n                display: flex;\n                flex-direction: row;\n                place-items: center;\n              "\n            >\n              <span style="font-size: 12px; color: #42526d; font-weight: 500"\n                >Transaction ID:\n              </span>\n              '.concat(modalData.id, '\n            </p>\n            <p\n              style="\n                display: block;\n                text-align: right;\n                font-size: 12px;\n                font-weight: 500;\n                line-height: 24px;\n                color: #42526d;\n              "\n            >\n              ').concat(moment(modalData.createdAt).format("ddd, MMMM Do YYYY"), '\n            </p>\n          </div>\n        </header>\n\n        <p style="font-weight: 500; font-size: 17px; color: #162243">\n          Here is your Wash receipt\n        </p>\n      </section>\n\n      <table style="width: 100%; border: none; border-collapse: collapse">\n        <thead>\n          <tr style="width: 100%; border: none; border-collapse: collapse">\n            <th\n              scope="row"\n              style="\n                font-size: 14px;\n                background: #eceffd;\n                padding: 10px 20px;\n                color: #243757;\n                text-align: left;\n              "\n            >\n              Item\n            </th>\n\n            <th\n              scope="row"\n              style="\n                font-size: 14px;\n                background: #eceffd;\n                padding: 10px 20px;\n                color: #243757;\n                text-align: left;\n              "\n            ></th>\n\n            <th\n              scope="row"\n              style="\n                font-size: 14px;\n                background: #eceffd;\n                padding: 10px 20px;\n                color: #243757;\n                text-align: left;\n              "\n            >\n              Quantity\n            </th>\n\n            <th\n              scope="row"\n              style="\n                font-size: 14px;\n                background: #eceffd;\n                padding: 10px 20px;\n                color: #243757;\n                text-align: left;\n              "\n            >\n              Rate\n            </th>\n\n            <th\n              scope="row"\n              style="\n                font-size: 14px;\n                background: #eceffd;\n                padding: 10px 20px;\n                color: #243757;\n              "\n            >\n              Amount\n            </th>\n          </tr>\n        </thead>\n\n        <tbody>\n          ').concat(vehicles.map(function(vehicle) {
        return '\n            <tr>\n              <td\n                style="\n                  padding: 10px 20px;\n                  font-weight: 400;\n                  font-size: 14px;\n                  color: #243757;\n                "\n                colspan="2"\n              >\n                 '.concat(vehicle.make + " " + vehicle.model + " " + vehicle.year, '\n              </td>\n\n              <td\n                style="\n                  padding: 10px 20px;\n                  font-weight: 400;\n                  font-size: 14px;\n                  color: #243757;\n                "\n              >\n                <div\n                  style="\n                    width: 100%;\n                    display: flex;\n                    flex-direction: row;\n                    gap: 2.5px;\n                  "\n                >\n                  <span>x</span>\n                  <span>1</span>\n                </div>\n              </td>\n\n              <td\n                style="\n                  padding: 10px 20px;\n                  font-weight: 400;\n                  font-size: 14px;\n                  color: #243757;\n                "\n              >\n                ₦\n              </td>\n\n              <td\n                style="\n                  padding: 10px 20px;\n                  font-weight: 400;\n                  font-size: 14px;\n                  color: #243757;\n                "\n              >\n                ₦\n              </td>\n            </tr>\n          ');
    }).join(""), '\n        </tbody>\n      </table>\n\n      <section style="margin: 35px 0px 0px 0px; padding: 0px 20px">\n        <div\n          style="\n            border-top: 1px solid #ddd;\n            border-bottom: 1px solid #ddd;\n            padding: 10px 0px;\n          "\n        >\n          <div\n            style="\n              display: flex;\n              flex-direction: row;\n              justify-content: space-between;\n              width: 100%;\n              padding: 5px 0px 0px 0px;\n            "\n          >\n            <span style="font-size: 16px; font-weight: 500; color: #162243">\n              Subtotal\n            </span>\n\n            <span style="font-size: 16px; font-weight: 600; color: #162243">\n              ₦\n            </span>\n          </div>\n\n          ').concat(addOns.length > 0 ? '\n            <p\n              style="\n                font-weight: 500;\n                font-size: 12px;\n                vertical-align: middle;\n                color: #34519f;\n                margin: 8px 0px 0px 0px;\n              "\n            >\n              Addons\n            </p>\n\n            <table style="width: 100%; border: none; border-collapse: collapse">\n              <thead>\n                <tr style="width: 100%; border: none; border-collapse: collapse">\n                  <th\n                    scope="row"\n                    style="font-size: 14px; padding: 0px 20px; text-align: left"\n                  ></th>\n\n                  <th\n                    scope="row"\n                    style="font-size: 14px; padding: 0px 20px; text-align: left"\n                  ></th>\n\n                  <th\n                    scope="row"\n                    style="font-size: 14px; padding: 0px 20px; text-align: left"\n                  ></th>\n\n                  <th\n                    scope="row"\n                    style="font-size: 14px; padding: 0px 20px; text-align: left"\n                  ></th>\n\n                  <th scope="row" style="font-size: 14px; padding: 0px 20px"></th>\n                </tr>\n              </thead>\n              <tbody>\n                '.concat(addOns.map(function(addon) {
        return '\n                  <tr>\n                    <td\n                      style="\n                        padding: 10px 0px;\n                        font-weight: 400;\n                        font-size: 14px;\n                        color: #243757;\n                      "\n                      colspan="4"\n                    >\n                      <div style="display: flex; flex-direction: column; gap: 2px">\n                        <span\n                          style="color: #42526d; font-size: 14px; font-weight: 500"\n                        >\n                          '.concat(addon.name, '\n                        </span>\n                        <span\n                          style="font-weight: 400; font-size: 10px; color: #5d6b82"\n                        >\n                         \n                        </span>\n                      </div>\n                    </td>\n\n                    <td\n                      style="\n                        padding: 10px 0px;\n                        font-weight: 400;\n                        font-size: 14px;\n                        color: #243757;\n                      "\n                    >\n                      <div\n                        style="\n                          width: 100%;\n                          display: flex;\n                          flex-direction: row;\n                          gap: 2.5px;\n                        "\n                      >\n                        <span>x</span>\n                        <span>1</span>\n                      </div>\n                    </td>\n\n                    <td\n                      style="\n                        padding: 10px 0px;\n                        font-weight: 400;\n                        font-size: 14px;\n                        color: #243757;\n                        text-align: right;\n                      "\n                    >\n                      ₦\n                    </td>\n                  </tr>\n                ');
    }).join(""), "\n              </tbody>\n            </table>\n          ") : "", '\n        </div>\n\n        <div\n          style="\n            padding: 15px 0px 10px 0px;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n          "\n        >\n          <span\n            style="\n              font-weight: 600;\n              font-size: 16px;\n              color: #162243;\n              vertical-align: middle;\n            "\n          >\n            Total\n          </span>\n\n          <span\n            style="\n              font-weight: 700;\n              font-size: 20px;\n              color: #243757;\n              vertical-align: middle;\n            "\n          >\n            ').concat((modalData === null || modalData === void 0 ? void 0 : modalData.netPrice) ? new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(Number(modalData === null || modalData === void 0 ? void 0 : modalData.netPrice)) : "--", "\n          </span>\n        </div>\n      </section>\n    </section>\n  </body>\n</html>\n      ");
};
function sanitizeAmount(value) {
    return parseFloat(value.replace(/,/g, ""));
}
function formatWithCommas(value) {
    var _value_replace_split = _sliced_to_array(value.replace(/,/g, "").split("."), 2), intPart = _value_replace_split[0], decimalPart = _value_replace_split[1];
    var formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return decimalPart ? "".concat(formattedInt, ".").concat(decimalPart) : formattedInt;
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
// src/components/PaymentModal/PaymentModal.tsx
import { ActivityIndicator as ActivityIndicator2, StyleSheet as StyleSheet12, TouchableOpacity as TouchableOpacity7, View as View9 } from "react-native";
import React18, { useState as useState2 } from "react";
// node_modules/expo-modules-core/src/ensureNativeModulesAreInstalled.ts
import { NativeModules, Platform } from "react-native";
// node_modules/expo-modules-core/src/web/index.ts
function registerWebGlobals() {}
// node_modules/expo-modules-core/src/ensureNativeModulesAreInstalled.ts
function ensureNativeModulesAreInstalled() {
    if (globalThis.expo) {
        return;
    }
    try {
        if (Platform.OS === "web") {
            registerWebGlobals();
        } else {
            var _NativeModules_ExpoModulesCore;
            (_NativeModules_ExpoModulesCore = NativeModules.ExpoModulesCore) === null || _NativeModules_ExpoModulesCore === void 0 ? void 0 : _NativeModules_ExpoModulesCore.installModules();
        }
    } catch (error) {
        console.error("Unable to install Expo modules: ".concat(error));
    }
}
// node_modules/expo-modules-core/src/NativeModulesProxy.ts
var NativeModulesProxy_default = {};
// node_modules/expo-modules-core/src/errors/CodedError.ts
var CodedError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(CodedError, Error1);
    function CodedError(code, message) {
        _class_call_check(this, CodedError);
        var _this;
        _this = _call_super(this, CodedError, [
            message
        ]);
        _this.code = code;
        return _this;
    }
    return CodedError;
}(_wrap_native_super(Error));
// node_modules/expo-modules-core/src/Platform.ts
import { Platform as ReactNativePlatform } from "react-native";
// node_modules/expo-modules-core/src/environment/browser.ts
var isDOMAvailable = false;
var canUseEventListeners = false;
var canUseViewport = false;
var isAsyncDebugging = false;
if (__DEV__) {
    isAsyncDebugging = !global.nativeExtensions && !global.nativeCallSyncHook && !global.RN$Bridgeless;
}
// node_modules/expo-modules-core/src/Platform.ts
if (__DEV__ && typeof process.env.EXPO_OS === "undefined") {
    console.warn("The global process.env.EXPO_OS is not defined. This should be inlined by babel-preset-expo during transformation.");
}
var nativeSelect = typeof window !== "undefined" ? ReactNativePlatform.select : // process.env.EXPO_OS is injected by `babel-preset-expo` and available in both client and `react-server` environments.
// Opt to use the env var when possible, and fallback to the React Native Platform module when it's not (arbitrary bundlers and transformers).
function select(specifics) {
    if (!process.env.EXPO_OS) return void 0;
    if (specifics.hasOwnProperty(process.env.EXPO_OS)) {
        return specifics[process.env.EXPO_OS];
    } else if (process.env.EXPO_OS !== "web" && specifics.hasOwnProperty("native")) {
        return specifics.native;
    } else if (specifics.hasOwnProperty("default")) {
        return specifics.default;
    }
    return void 0;
};
var Platform2 = {
    /**
   * Denotes the currently running platform.
   * Can be one of ios, android, web.
   */ OS: process.env.EXPO_OS || ReactNativePlatform.OS,
    /**
   * Returns the value with the matching platform.
   * Object keys can be any of ios, android, native, web, default.
   *
   * @ios ios, native, default
   * @android android, native, default
   * @web web, default
   */ select: nativeSelect,
    /**
   * Denotes if the DOM API is available in the current environment.
   * The DOM is not available in native React runtimes and Node.js.
   */ isDOMAvailable: isDOMAvailable,
    /**
   * Denotes if the current environment can attach event listeners
   * to the window. This will return false in native React
   * runtimes and Node.js.
   */ canUseEventListeners: canUseEventListeners,
    /**
   * Denotes if the current environment can inspect properties of the
   * screen on which the current window is being rendered. This will
   * return false in native React runtimes and Node.js.
   */ canUseViewport: canUseViewport,
    /**
   * If the JavaScript is being executed in a remote JavaScript environment.
   * When `true`, synchronous native invocations cannot be executed.
   */ isAsyncDebugging: isAsyncDebugging
};
var Platform_default = Platform2;
// node_modules/expo-modules-core/src/sweet/NativeErrorManager.ts
var NativeErrorManager_default = NativeModulesProxy_default.ExpoModulesCoreErrorManager;
// node_modules/expo-modules-core/src/sweet/setUpErrorManager.fx.ts
if (__DEV__ && Platform_default.OS === "android" && NativeErrorManager_default) {
    var onNewException = "ExpoModulesCoreErrorManager.onNewException";
    var onNewWarning = "ExpoModulesCoreErrorManager.onNewWarning";
    NativeErrorManager_default.addListener(onNewException, function(param) {
        var message = param.message;
        console.error(message);
    });
    NativeErrorManager_default.addListener(onNewWarning, function(param) {
        var message = param.message;
        console.warn(message);
    });
}
globalThis.ExpoModulesCore_CodedError = CodedError;
// node_modules/expo-modules-core/src/requireNativeModule.ts
function requireOptionalNativeModule(moduleName) {
    var _globalThis_expo_modules, _globalThis_expo;
    ensureNativeModulesAreInstalled();
    var _globalThis_expo_modules_moduleName, _ref;
    return (_ref = (_globalThis_expo_modules_moduleName = (_globalThis_expo = globalThis.expo) === null || _globalThis_expo === void 0 ? void 0 : (_globalThis_expo_modules = _globalThis_expo.modules) === null || _globalThis_expo_modules === void 0 ? void 0 : _globalThis_expo_modules[moduleName]) !== null && _globalThis_expo_modules_moduleName !== void 0 ? _globalThis_expo_modules_moduleName : NativeModulesProxy_default[moduleName]) !== null && _ref !== void 0 ? _ref : null;
}
// node_modules/expo-constants/build/Constants.js
import { Platform as Platform3, NativeModules as NativeModules2 } from "react-native";
// node_modules/expo-constants/build/Constants.types.js
var AppOwnership;
(function(AppOwnership2) {
    AppOwnership2["Expo"] = "expo";
})(AppOwnership || (AppOwnership = {}));
var ExecutionEnvironment;
(function(ExecutionEnvironment2) {
    ExecutionEnvironment2["Bare"] = "bare";
    ExecutionEnvironment2["Standalone"] = "standalone";
    ExecutionEnvironment2["StoreClient"] = "storeClient";
})(ExecutionEnvironment || (ExecutionEnvironment = {}));
var UserInterfaceIdiom;
(function(UserInterfaceIdiom2) {
    UserInterfaceIdiom2["Handset"] = "handset";
    UserInterfaceIdiom2["Tablet"] = "tablet";
    UserInterfaceIdiom2["Desktop"] = "desktop";
    UserInterfaceIdiom2["TV"] = "tv";
    UserInterfaceIdiom2["Unsupported"] = "unsupported";
})(UserInterfaceIdiom || (UserInterfaceIdiom = {}));
// node_modules/expo-constants/build/ExponentConstants.js
var ExponentConstants_default = requireOptionalNativeModule("ExponentConstants");
// node_modules/expo-constants/build/Constants.js
if (!ExponentConstants_default) {
    console.warn("No native ExponentConstants module found, are you sure the expo-constants's module is linked properly?");
}
var ExpoUpdates = requireOptionalNativeModule("ExpoUpdates");
var rawUpdatesManifest = null;
if (ExpoUpdates) {
    var updatesManifest;
    if (ExpoUpdates.manifest) {
        updatesManifest = ExpoUpdates.manifest;
    } else if (ExpoUpdates.manifestString) {
        updatesManifest = JSON.parse(ExpoUpdates.manifestString);
    }
    if (updatesManifest && Object.keys(updatesManifest).length > 0) {
        rawUpdatesManifest = updatesManifest;
    }
}
var rawDevLauncherManifest = null;
if (NativeModules2.EXDevLauncher) {
    var devLauncherManifest;
    if (NativeModules2.EXDevLauncher.manifestString) {
        devLauncherManifest = JSON.parse(NativeModules2.EXDevLauncher.manifestString);
    }
    if (devLauncherManifest && Object.keys(devLauncherManifest).length > 0) {
        rawDevLauncherManifest = devLauncherManifest;
    }
}
var rawAppConfig = null;
if (ExponentConstants_default && ExponentConstants_default.manifest) {
    var appConfig = ExponentConstants_default.manifest;
    if (typeof appConfig === "string") {
        rawAppConfig = JSON.parse(appConfig);
    } else {
        rawAppConfig = appConfig;
    }
}
var _ref;
var rawManifest = (_ref = rawUpdatesManifest !== null && rawUpdatesManifest !== void 0 ? rawUpdatesManifest : rawDevLauncherManifest) !== null && _ref !== void 0 ? _ref : rawAppConfig;
var _ref1 = ExponentConstants_default || {}, name = _ref1.name, appOwnership = _ref1.appOwnership, nativeConstants = _object_without_properties(_ref1, [
    "name",
    "appOwnership"
]);
var constants = _object_spread_props(_object_spread({}, nativeConstants), {
    // Ensure this is null in bare workflow
    appOwnership: appOwnership !== null && appOwnership !== void 0 ? appOwnership : null
});
Object.defineProperties(constants, {
    /**
   * Use `manifest` property by default.
   * This property is only used for internal purposes.
   * It behaves similarly to the original one, but suppresses warning upon no manifest available.
   * `expo-asset` uses it to prevent users from seeing mentioned warning.
   */ __unsafeNoWarnManifest: {
        get: function get() {
            var maybeManifest = getManifest(true);
            if (!maybeManifest || !isEmbeddedManifest(maybeManifest)) {
                return null;
            }
            return maybeManifest;
        },
        enumerable: false
    },
    __unsafeNoWarnManifest2: {
        get: function get() {
            var maybeManifest = getManifest(true);
            if (!maybeManifest || !isExpoUpdatesManifest(maybeManifest)) {
                return null;
            }
            return maybeManifest;
        },
        enumerable: false
    },
    manifest: {
        get: function get() {
            var maybeManifest = getManifest();
            if (!maybeManifest || !isEmbeddedManifest(maybeManifest)) {
                return null;
            }
            return maybeManifest;
        },
        enumerable: true
    },
    manifest2: {
        get: function get() {
            var maybeManifest = getManifest();
            if (!maybeManifest || !isExpoUpdatesManifest(maybeManifest)) {
                return null;
            }
            return maybeManifest;
        },
        enumerable: true
    },
    expoConfig: {
        get: function get() {
            var maybeManifest = getManifest(true);
            if (!maybeManifest) {
                return null;
            }
            if (ExpoUpdates && ExpoUpdates.isEmbeddedLaunch) {
                return rawAppConfig;
            }
            if (isExpoUpdatesManifest(maybeManifest)) {
                var _maybeManifest_extra;
                var _maybeManifest_extra_expoClient;
                return (_maybeManifest_extra_expoClient = (_maybeManifest_extra = maybeManifest.extra) === null || _maybeManifest_extra === void 0 ? void 0 : _maybeManifest_extra.expoClient) !== null && _maybeManifest_extra_expoClient !== void 0 ? _maybeManifest_extra_expoClient : null;
            } else if (isEmbeddedManifest(maybeManifest)) {
                return maybeManifest;
            }
            return null;
        },
        enumerable: true
    },
    expoGoConfig: {
        get: function get() {
            var maybeManifest = getManifest(true);
            if (!maybeManifest) {
                return null;
            }
            if (isExpoUpdatesManifest(maybeManifest)) {
                var _maybeManifest_extra;
                var _maybeManifest_extra_expoGo;
                return (_maybeManifest_extra_expoGo = (_maybeManifest_extra = maybeManifest.extra) === null || _maybeManifest_extra === void 0 ? void 0 : _maybeManifest_extra.expoGo) !== null && _maybeManifest_extra_expoGo !== void 0 ? _maybeManifest_extra_expoGo : null;
            } else if (isEmbeddedManifest(maybeManifest)) {
                return maybeManifest;
            }
            return null;
        },
        enumerable: true
    },
    easConfig: {
        get: function get() {
            var maybeManifest = getManifest(true);
            if (!maybeManifest) {
                return null;
            }
            if (isExpoUpdatesManifest(maybeManifest)) {
                var _maybeManifest_extra;
                var _maybeManifest_extra_eas;
                return (_maybeManifest_extra_eas = (_maybeManifest_extra = maybeManifest.extra) === null || _maybeManifest_extra === void 0 ? void 0 : _maybeManifest_extra.eas) !== null && _maybeManifest_extra_eas !== void 0 ? _maybeManifest_extra_eas : null;
            } else if (isEmbeddedManifest(maybeManifest)) {
                return maybeManifest;
            }
            return null;
        },
        enumerable: true
    },
    __rawManifest_TEST: {
        get: function get() {
            return rawManifest;
        },
        set: function set(value) {
            rawManifest = value;
        },
        enumerable: false
    }
});
function isEmbeddedManifest(manifest) {
    return !isExpoUpdatesManifest(manifest);
}
function isExpoUpdatesManifest(manifest) {
    return "metadata" in manifest;
}
function getManifest() {
    var suppressWarning = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (!rawManifest) {
        var invalidManifestType = rawManifest === null ? "null" : "undefined";
        if (nativeConstants.executionEnvironment === ExecutionEnvironment.Bare && Platform3.OS !== "web") {
            if (!suppressWarning) {
                console.warn("Constants.manifest is ".concat(invalidManifestType, " because the embedded app.config could not be read. Ensure that you have installed the expo-constants build scripts if you need to read from Constants.manifest."));
            }
        } else if (nativeConstants.executionEnvironment === ExecutionEnvironment.StoreClient || nativeConstants.executionEnvironment === ExecutionEnvironment.Standalone) {
            throw new CodedError("ERR_CONSTANTS_MANIFEST_UNAVAILABLE", "Constants.manifest is ".concat(invalidManifestType, ", must be an object."));
        }
    }
    return rawManifest;
}
var Constants_default = constants;
// src/components/PaymentModal/PaymentModal.tsx
import WebView from "react-native-webview";
// src/assets/svg/ArrowBack.tsx
import * as React17 from "react";
import Svg6, { Path as Path6 } from "react-native-svg";
var SvgComponent6 = function(props) {
    return /* @__PURE__ */ React17.createElement(Svg6, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 9,
        height: 14,
        fill: "none"
    }, props), /* @__PURE__ */ React17.createElement(Path6, {
        fill: "#fff",
        fillRule: "evenodd",
        d: "m2.845 7 5.488 5.488a.833.833 0 0 1-1.178 1.179L.488 7 7.155.333a.833.833 0 0 1 1.178 1.179L2.845 7Z",
        clipRule: "evenodd"
    }));
};
var ArrowBack_default = SvgComponent6;
// src/components/PaymentModal/PaymentModal.tsx
var PaymentModal = function(param) {
    var uri = param.uri, onClose = param.onClose;
    var _useState2 = _sliced_to_array(useState2(true), 2), loading = _useState2[0], setLoading = _useState2[1];
    return /* @__PURE__ */ React18.createElement(View9, {
        style: styles11.container
    }, loading && /* @__PURE__ */ React18.createElement(View9, {
        style: styles11.loader
    }, /* @__PURE__ */ React18.createElement(ActivityIndicator2, {
        size: "large",
        color: COLORS.black
    }), /* @__PURE__ */ React18.createElement(CustomTextNeutral, {
        style: styles11.text
    }, "Loading...")), /* @__PURE__ */ React18.createElement(TouchableOpacity7, {
        style: styles11.arrow,
        onPress: onClose
    }, /* @__PURE__ */ React18.createElement(ArrowBack_default, null)), /* @__PURE__ */ React18.createElement(WebView, {
        source: {
            uri: uri
        },
        onLoadEnd: function() {
            return setLoading(false);
        },
        onLoadStart: function() {
            return setLoading(true);
        },
        onError: function(syntheticEvent) {
            var nativeEvent = syntheticEvent.nativeEvent;
            console.debug("WebView error: ", nativeEvent);
        },
        onHttpError: function(syntheticEvent) {
            var nativeEvent = syntheticEvent.nativeEvent;
            console.debug("HTTP error: ", nativeEvent.statusCode, nativeEvent.description);
        },
        style: styles11.webview
    }));
};
var PaymentModal_default = PaymentModal;
var styles11 = StyleSheet12.create({
    container: {
        flex: 1,
        marginTop: Constants_default.statusBarHeight,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 60,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32
    },
    webview: {
        flex: 1
    },
    arrow: {
        height: 32,
        width: 32,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: COLORS.black
    },
    loader: _object_spread_props(_object_spread({}, StyleSheet12.absoluteFillObject), {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
        zIndex: 1,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32
    }),
    text: {
        color: COLORS.primary500,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "UrbanistSemiBold"
    }
});
// src/components/Header/Header.tsx
import { StyleSheet as StyleSheet13, Text as Text7, TouchableOpacity as TouchableOpacity8, View as View10 } from "react-native";
import React20 from "react";
import { useRouter } from "expo-router";
// src/assets/svg/ChevronLeft.tsx
import * as React19 from "react";
import Svg7, { Path as Path7 } from "react-native-svg";
var SvgComponent7 = function(props) {
    return /* @__PURE__ */ React19.createElement(Svg7, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 9,
        height: 14,
        fill: "none"
    }, props), /* @__PURE__ */ React19.createElement(Path7, {
        fill: "#131313",
        fillRule: "evenodd",
        d: "m2.845 7 5.488 5.488a.833.833 0 1 1-1.178 1.179L.488 7 7.155.333a.833.833 0 1 1 1.178 1.179L2.845 7Z",
        clipRule: "evenodd"
    }));
};
var ChevronLeft_default = SvgComponent7;
// src/components/Header/Header.tsx
function Header(param) {
    var title = param.title, goBackLink = param.goBackLink, isNotAuth = param.isNotAuth;
    var router2 = useRouter();
    return /* @__PURE__ */ React20.createElement(View10, {
        style: [
            styles12.container,
            {
                paddingHorizontal: isNotAuth ? 20 : 24
            }
        ]
    }, /* @__PURE__ */ React20.createElement(TouchableOpacity8, {
        style: styles12.arrow,
        onPress: function() {
            return goBackLink ? router2.push(goBackLink) : router2.back();
        }
    }, /* @__PURE__ */ React20.createElement(ChevronLeft_default, null)), /* @__PURE__ */ React20.createElement(Text7, {
        style: styles12.title
    }, title), /* @__PURE__ */ React20.createElement(View10, {
        style: styles12.spacer
    }));
}
var styles12 = StyleSheet13.create({
    container: {
        paddingTop: 60,
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    title: {
        fontSize: 14,
        fontFamily: "UrbanistMedium",
        lineHeight: 16,
        fontWeight: "500",
        textAlign: "center",
        color: COLORS.primary800,
        flex: 1
    },
    spacer: {
        width: 24
    },
    arrow: {
        height: 22,
        width: 22,
        alignItems: "center",
        justifyContent: "center"
    }
});
// src/components/Tab/Tab.tsx
import { StyleSheet as StyleSheet14, Text as Text8, TouchableOpacity as TouchableOpacity9, View as View11 } from "react-native";
import React21 from "react";
var Tab = function(param) {
    var tabList = param.tabList, setActiveTab = param.setActiveTab, activeTab = param.activeTab, ticketCount = param.ticketCount;
    var handleTab = function(value) {
        return setActiveTab(value);
    };
    return /* @__PURE__ */ React21.createElement(View11, {
        style: styles13.container
    }, tabList.map(function(tab, i) {
        return /* @__PURE__ */ React21.createElement(TouchableOpacity9, {
            style: [
                styles13.tab,
                activeTab === tab.id && styles13.tabActive
            ],
            key: i,
            onPress: function() {
                return handleTab(tab.id);
            }
        }, /* @__PURE__ */ React21.createElement(Text8, {
            style: [
                styles13.tabText,
                activeTab === tab.id && styles13.tabTextActive
            ]
        }, tab.name), tab.id === 2 && ticketCount && ticketCount > 0 ? /* @__PURE__ */ React21.createElement(View11, {
            style: styles13.badge
        }, /* @__PURE__ */ React21.createElement(CustomTextNeutral, {
            style: styles13.badgeText
        }, ticketCount)) : null);
    }));
};
var Tab_default = Tab;
var styles13 = StyleSheet14.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.primary50,
        padding: 4,
        borderRadius: 28
    },
    tab: {
        paddingVertical: 4,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: "48%",
        backgroundColor: COLORS.white
    },
    tabActive: {
        borderColor: COLORS.primary500,
        borderWidth: 1,
        backgroundColor: COLORS.primary50
    },
    tabText: {
        fontFamily: "UrbanistMedium",
        fontSize: 14,
        lineHeight: 21,
        textTransform: "capitalize",
        color: COLORS.grey400
    },
    tabTextActive: {
        fontSize: 14,
        lineHeight: 21,
        textTransform: "capitalize",
        color: COLORS.primary500
    },
    badge: {
        width: 23,
        height: 23,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        backgroundColor: "#F1F1F1"
    },
    badgeText: {
        fontSize: 13,
        fontFamily: "Urbanist",
        lineHeight: 18,
        color: COLORS.grey200
    }
});
// src/components/TicketItem/TicketItem.tsx
import { StyleSheet as StyleSheet15, TouchableOpacity as TouchableOpacity10, View as View12 } from "react-native";
import React22 from "react";
import { router } from "expo-router";
import moment2 from "moment";
var TicketItem = function(param) {
    var item = param.item;
    var statusText = {
        fontFamily: "UrbanistBold",
        color: COLORS.error200
    };
    var handlePress = function() {
        return router.push({
            pathname: "/viewTicket",
            params: {
                ticketNumber: item === null || item === void 0 ? void 0 : item.ticketNumber,
                ticketId: item === null || item === void 0 ? void 0 : item.id,
                conversationId: item === null || item === void 0 ? void 0 : item.conversationId,
                subject: item === null || item === void 0 ? void 0 : item.subject
            }
        });
    };
    return /* @__PURE__ */ React22.createElement(TouchableOpacity10, {
        style: styles14.container,
        onPress: handlePress
    }, /* @__PURE__ */ React22.createElement(View12, {
        style: customStyles.groupSpaceBetween
    }, /* @__PURE__ */ React22.createElement(CustomText, {
        style: styles14.bigText
    }, item === null || item === void 0 ? void 0 : item.ticketNumber), /* @__PURE__ */ React22.createElement(CustomText, {
        style: [
            styles14.bigText,
            statusText,
            {
                fontWeight: "700"
            }
        ]
    }, item === null || item === void 0 ? void 0 : item.status)), /* @__PURE__ */ React22.createElement(View12, {
        style: customStyles.groupSpaceBetween
    }, /* @__PURE__ */ React22.createElement(CustomText, {
        style: styles14.smallText
    }, "Ticket number"), /* @__PURE__ */ React22.createElement(CustomText, {
        style: styles14.smallText
    }, moment2(item.createdAt).format("Do MMMM YYYY | hh:mm A"))), /* @__PURE__ */ React22.createElement(View12, {
        style: customStyles.groupSpaceBetween
    }, /* @__PURE__ */ React22.createElement(CustomText, {
        style: styles14.bigText
    }, item === null || item === void 0 ? void 0 : item.department), /* @__PURE__ */ React22.createElement(CustomText, {
        style: styles14.bigText
    }, item === null || item === void 0 ? void 0 : item.subject)), /* @__PURE__ */ React22.createElement(View12, {
        style: customStyles.groupSpaceBetween
    }, /* @__PURE__ */ React22.createElement(CustomText, {
        style: styles14.smallText
    }, "Subject"), /* @__PURE__ */ React22.createElement(CustomText, {
        style: styles14.smallText
    }, item === null || item === void 0 ? void 0 : item.department)));
};
var TicketItem_default = TicketItem;
var styles14 = StyleSheet15.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 8,
        padding: 12,
        borderColor: COLORS.primary50
    },
    bigText: {
        color: COLORS.primary500,
        lineHeight: 24,
        textTransform: "capitalize",
        fontSize: 14,
        fontFamily: "Urbanist"
    },
    smallText: {
        color: COLORS.neutral90,
        fontSize: 10,
        lineHeight: 16,
        fontFamily: "Urbanist",
        textTransform: "capitalize"
    }
});
// src/components/OTPInput/OTPInput.tsx
import { Pressable, StyleSheet as StyleSheet16, TextInput as TextInput2, View as View13 } from "react-native";
import React23, { useRef as useRef2, useState as useState3, useEffect } from "react";
var OTPInput = function(param) {
    var code = param.code, setCode = param.setCode, setPinReady = param.setPinReady, maxLength = param.maxLength, onCodeFilled = param.onCodeFilled;
    var codeDigitsArray = new Array(maxLength).fill(0);
    var textInputRef = useRef2(null);
    var _useState3 = _sliced_to_array(useState3(false), 2), inputContainerIsFocused = _useState3[0], setInputContainerIsFocused = _useState3[1];
    var handleOnPress = function() {
        var _textInputRef_current;
        setInputContainerIsFocused(true);
        (_textInputRef_current = textInputRef.current) === null || _textInputRef_current === void 0 ? void 0 : _textInputRef_current.focus();
    };
    var handleOnBlur = function() {
        setInputContainerIsFocused(false);
    };
    useEffect(function() {
        setPinReady(code.length === maxLength);
        if (code.length === maxLength) {
            onCodeFilled(code);
        }
        return function() {
            return setPinReady(false);
        };
    }, [
        code
    ]);
    var toCodeDigitInput = function(_value, index) {
        var digit = code[index] || "_";
        return /* @__PURE__ */ React23.createElement(View13, {
            style: [
                styles15.OTPInput,
                inputContainerIsFocused && index === code.length && styles15.OTPInputFocused
            ],
            key: index
        }, /* @__PURE__ */ React23.createElement(CustomText, {
            style: styles15.OTPInputText
        }, digit));
    };
    return /* @__PURE__ */ React23.createElement(View13, {
        style: styles15.OTPInputSection
    }, /* @__PURE__ */ React23.createElement(Pressable, {
        style: styles15.OTPInputContainer,
        onPress: handleOnPress
    }, codeDigitsArray.map(toCodeDigitInput)), /* @__PURE__ */ React23.createElement(TextInput2, {
        value: code,
        onChangeText: function(text) {
            if (text.length <= maxLength) {
                setCode(text);
            }
        },
        maxLength: maxLength,
        onBlur: handleOnBlur,
        ref: textInputRef,
        keyboardType: "number-pad",
        returnKeyType: "done",
        textContentType: "oneTimeCode",
        style: styles15.HiddenTextInput
    }));
};
var OTPInput_default = OTPInput;
var styles15 = StyleSheet16.create({
    OTPInputSection: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30
    },
    HiddenTextInput: {
        position: "absolute",
        width: 1,
        height: 1,
        opacity: 0
    },
    OTPInputContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    OTPInput: {
        borderColor: COLORS.neutral40,
        width: 61,
        height: 61,
        borderWidth: 1,
        borderRadius: 24,
        justifyContent: "center",
        backgroundColor: COLORS.white,
        fontFamily: "UrbanistBold"
    },
    OTPInputText: {
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
        color: COLORS.black
    },
    OTPInputFocused: {
    }
});
// src/components/NotificationItem/NotificationItem.tsx
import { StyleSheet as StyleSheet17, Image, View as View14 } from "react-native";
import React24 from "react";
import moment3 from "moment";
var NotificationItem = function(param) {
    var item = param.item;
    return /* @__PURE__ */ React24.createElement(View14, {
        style: styles16.tabContainer
    }, /* @__PURE__ */ React24.createElement(Image, {
        source: require_notificationLogo()
    }), /* @__PURE__ */ React24.createElement(View14, null, /* @__PURE__ */ React24.createElement(View14, {
        style: {
            maxWidth: 300
        }
    }, /* @__PURE__ */ React24.createElement(CustomText, {
        style: styles16.description
    }, item.message)), /* @__PURE__ */ React24.createElement(CustomText, {
        style: styles16.date
    }, moment3(item.createdAt).format("hh:mm A")), /* @__PURE__ */ React24.createElement(View14, {
        style: styles16.line
    })));
};
var NotificationItem_default = NotificationItem;
var styles16 = StyleSheet17.create({
    tabContainer: {
        padding: 8,
        flexDirection: "row",
        gap: 12
    },
    description: {
        color: COLORS.neutral400,
        fontFamily: "Urbanist",
        fontSize: 16,
        lineHeight: 24
    },
    line: {
        borderWidth: 0.5,
        borderColor: COLORS.primary100
    },
    date: {
        fontFamily: "Urbanist",
        color: COLORS.neutral400,
        fontSize: 10,
        marginTop: 4,
        marginBottom: 8
    }
});
// src/components/LineIndicator/LineIndicator.tsx
import React25, { useEffect as useEffect2, useRef as useRef3 } from "react";
import { View as View15, Animated, StyleSheet as StyleSheet18 } from "react-native";
var LineLoadingIndicator = function() {
    var translateX = useRef3(new Animated.Value(-200)).current;
    useEffect2(function() {
        var animation = Animated.loop(Animated.timing(translateX, {
            toValue: 200,
            duration: 1e3,
            useNativeDriver: true
        }));
        animation.start();
        return function() {
            animation.stop();
        };
    }, [
        translateX
    ]);
    return /* @__PURE__ */ React25.createElement(View15, {
        style: styles17.container
    }, /* @__PURE__ */ React25.createElement(View15, {
        style: styles17.lineContainer
    }, /* @__PURE__ */ React25.createElement(Animated.View, {
        style: [
            styles17.animatedLine,
            {
                transform: [
                    {
                        translateX: translateX
                    }
                ]
            }
        ]
    })));
};
var styles17 = StyleSheet18.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F3F3",
        marginVertical: 20
    },
    lineContainer: {
        width: "100%",
        height: 3,
        backgroundColor: "#F3F3F3",
        overflow: "hidden",
        borderRadius: 2,
        position: "relative"
    },
    animatedLine: {
        width: "40%",
        height: "100%",
        backgroundColor: COLORS.primary500,
        borderRadius: 2,
        position: "absolute"
    }
});
var LineIndicator_default = LineLoadingIndicator;
// src/components/Accordion/Accordion.tsx
import React26, { useState as useState4 } from "react";
import { StyleSheet as StyleSheet19, Text as Text9, TouchableOpacity as TouchableOpacity11, View as View16, LayoutAnimation, Platform as Platform4, UIManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";
if (Platform4.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
var Accordion = function(param) {
    var title = param.title, children = param.children, _param_initiallyExpanded = param.initiallyExpanded, initiallyExpanded = _param_initiallyExpanded === void 0 ? false : _param_initiallyExpanded, style = param.style;
    var _useState4 = _sliced_to_array(useState4(initiallyExpanded), 2), expanded = _useState4[0], setExpanded = _useState4[1];
    var toggleAccordion = function() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };
    return /* @__PURE__ */ React26.createElement(View16, {
        style: [
            styles18.container,
            style
        ]
    }, /* @__PURE__ */ React26.createElement(TouchableOpacity11, {
        style: styles18.header,
        onPress: toggleAccordion
    }, /* @__PURE__ */ React26.createElement(Text9, {
        style: styles18.title
    }, title), /* @__PURE__ */ React26.createElement(Ionicons, {
        name: expanded ? "chevron-up" : "chevron-down",
        size: 20,
        color: COLORS.primary500
    })), expanded && /* @__PURE__ */ React26.createElement(View16, {
        style: styles18.content
    }, children));
};
var Accordion_default = Accordion;
var styles18 = StyleSheet19.create({
    container: {
        marginVertical: 8,
        borderWidth: 1,
        borderColor: COLORS.neutral40,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: COLORS.white,
        paddingVertical: 9,
        paddingHorizontal: 12
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 7
    },
    title: {
        fontSize: 14,
        fontFamily: "UrbanistSemiBold",
        lineHeight: 24,
        color: COLORS.neutral700
    },
    content: {
        paddingVertical: 4,
        backgroundColor: COLORS.white
    }
});
// src/components/ProfileCard/ProfileCard.tsx
import { ActivityIndicator as ActivityIndicator3, StyleSheet as StyleSheet20, Switch, TouchableOpacity as TouchableOpacity12, View as View17 } from "react-native";
import React28 from "react";
// src/assets/svg/ChevronRight.tsx
import * as React27 from "react";
import Svg8, { Path as Path8 } from "react-native-svg";
var SvgComponent8 = function(props) {
    return /* @__PURE__ */ React27.createElement(Svg8, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
    }, props), /* @__PURE__ */ React27.createElement(Path8, {
        stroke: "#34519F",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m9 18 6-6-6-6"
    }));
};
var ChevronRight_default = SvgComponent8;
// src/components/ProfileCard/ProfileCard.tsx
var ProfileCard = function(param) {
    var title = param.title, subTitle = param.subTitle, icon = param.icon, onPress = param.onPress, isSwitch = param.isSwitch, isEnabled = param.isEnabled, paddingVertical = param.paddingVertical, noArrow = param.noArrow, textRight = param.textRight, loading = param.loading, toggleSwitch = param.toggleSwitch;
    return /* @__PURE__ */ React28.createElement(TouchableOpacity12, {
        style: [
            styles19.container,
            {
                paddingVertical: paddingVertical || 11
            }
        ],
        onPress: onPress
    }, icon && /* @__PURE__ */ React28.createElement(View17, {
        style: styles19.iconWrapper
    }, icon), /* @__PURE__ */ React28.createElement(View17, {
        style: {
            flex: 1
        }
    }, /* @__PURE__ */ React28.createElement(CustomTextNeutral, {
        style: styles19.title
    }, title), subTitle && /* @__PURE__ */ React28.createElement(CustomTextNeutral, {
        style: styles19.subTitle
    }, truncateTextSubtitle(subTitle || "", 35))), isSwitch ? /* @__PURE__ */ React28.createElement(Switch, {
        trackColor: {
            false: COLORS.white,
            true: COLORS.primary500
        },
        thumbColor: isEnabled ? COLORS.white : "#f4f3f4",
        ios_backgroundColor: "#BDBDBD",
        onValueChange: toggleSwitch,
        value: isEnabled,
        style: {
            transform: [
                {
                    scaleX: 0.8
                },
                {
                    scaleY: 0.8
                }
            ]
        }
    }) : !noArrow ? loading ? /* @__PURE__ */ React28.createElement(ActivityIndicator3, null) : /* @__PURE__ */ React28.createElement(ChevronRight_default, null) : textRight ? /* @__PURE__ */ React28.createElement(CustomTextNeutral, {
        style: styles19.subTitle
    }, textRight) : null);
};
var ProfileCard_default = ProfileCard;
var styles19 = StyleSheet20.create({
    container: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.primary50,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 11,
        backgroundColor: COLORS.white,
        marginBottom: 4
    },
    title: {
        fontSize: 16,
        lineHeight: 24,
        color: COLORS.neutral700,
        fontFamily: "UrbanistSemiBold",
        textTransform: "capitalize"
    },
    subTitle: {
        fontSize: 14,
        lineHeight: 20,
        color: "#323E4A",
        fontFamily: "Urbanist"
    },
    iconWrapper: {
        padding: 11,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.primary50,
        marginRight: 8
    }
});
// src/components/SearchInput/SearchInput.tsx
import { StyleSheet as StyleSheet21, TextInput as TextInput3, View as View18 } from "react-native";
import React29 from "react";
var SearchInput = function(param) {
    var setText = param.setText, icon = param.icon, _param_placeholder = param.placeholder, placeholder = _param_placeholder === void 0 ? "Search" : _param_placeholder, text = param.text, _param_height = param.height, height = _param_height === void 0 ? 40 : _param_height, _param_borderRadius = param.borderRadius, borderRadius = _param_borderRadius === void 0 ? 24 : _param_borderRadius, iconRight = param.iconRight;
    return /* @__PURE__ */ React29.createElement(View18, {
        style: [
            styles20.inputContainer,
            {
                borderRadius: borderRadius
            }
        ]
    }, icon, /* @__PURE__ */ React29.createElement(TextInput3, {
        style: [
            styles20.input,
            {
                height: height
            }
        ],
        value: text,
        onChangeText: setText,
        placeholder: placeholder,
        placeholderTextColor: COLORS.black,
        keyboardType: "default",
        autoCapitalize: "none",
        autoCorrect: false
    }), iconRight);
};
var SearchInput_default = SearchInput;
var styles20 = StyleSheet21.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.primary500,
        paddingHorizontal: 16,
        backgroundColor: COLORS.white
    },
    input: {
        flex: 1,
        fontSize: 14,
        fontFamily: "Urbanist",
        color: COLORS.neutral700,
        lineHeight: 21,
        marginLeft: 6
    }
});
// src/components/ChooseFile/ChooseFile.tsx
import { StyleSheet as StyleSheet22, Text as Text10, TouchableOpacity as TouchableOpacity13, View as View19 } from "react-native";
import React31 from "react";
// src/assets/svg/Cloud.tsx
import * as React30 from "react";
import Svg9, { Path as Path9 } from "react-native-svg";
var SvgComponent9 = function(props) {
    return /* @__PURE__ */ React30.createElement(Svg9, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 25,
        height: 24,
        fill: "none"
    }, props), /* @__PURE__ */ React30.createElement(Path9, {
        fill: "#34519F",
        d: "m12.5 12.527 3.819 3.818-1.274 1.274-1.645-1.646V21h-1.8v-5.028l-1.645 1.647-1.274-1.274 3.819-3.818ZM12.5 3a6.3 6.3 0 0 1 6.258 5.575 4.95 4.95 0 0 1-.857 9.705v-1.812a3.149 3.149 0 1 0-1.001-6.22 4.5 4.5 0 1 0-8.8 0 3.15 3.15 0 1 0-1.162 6.193l.162.027v1.812a4.95 4.95 0 0 1-.859-9.705A6.3 6.3 0 0 1 12.5 3Z"
    }));
};
var Cloud_default = SvgComponent9;
// src/components/ChooseFile/ChooseFile.tsx
var ChooseFile = function(param) {
    var handleChoosePhotoWithoutUpload = param.handleChoosePhotoWithoutUpload, error = param.error;
    return /* @__PURE__ */ React31.createElement(View19, {
        style: styles21.upload
    }, /* @__PURE__ */ React31.createElement(Cloud_default, null), /* @__PURE__ */ React31.createElement(View19, {
        style: [
            customStyles.group,
            styles21.uploadBottom
        ]
    }, /* @__PURE__ */ React31.createElement(TouchableOpacity13, {
        style: styles21.file,
        onPress: function() {
            return handleChoosePhotoWithoutUpload();
        }
    }, /* @__PURE__ */ React31.createElement(Text10, {
        style: styles21.fileText
    }, "Choose a file")), /* @__PURE__ */ React31.createElement(Text10, {
        style: styles21.noFileText
    }, "No file chosen")), /* @__PURE__ */ React31.createElement(View19, null, error ? /* @__PURE__ */ React31.createElement(CustomError_default, {
        error: error
    }) : /* @__PURE__ */ React31.createElement(Text10, {
        style: styles21.text
    }, "JPEG, PNG, PDF formats, up to 500 KB")));
};
var ChooseFile_default = ChooseFile;
var styles21 = StyleSheet22.create({
    upload: {
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderStyle: "dashed",
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 16,
        borderColor: "#868C98"
    },
    uploadBottom: {
        gap: 4,
        marginTop: 7,
        marginBottom: 4,
        alignSelf: "center"
    },
    file: {
        backgroundColor: COLORS.primary500,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        gap: 8
    },
    fileText: {
        color: COLORS.white,
        fontFamily: "UrbanistMedium",
        fontSize: 14
    },
    noFileText: {
        fontFamily: "UrbanistMedium",
        fontSize: 14,
        color: COLORS.neutral400
    },
    text: {
        color: "#868C98",
        lineHeight: 16,
        fontSize: 12,
        fontFamily: "Urbanist"
    }
});
// src/components/FileUpload/FileUpload.tsx
import { ActivityIndicator as ActivityIndicator4, StyleSheet as StyleSheet23, Text as Text11, TouchableOpacity as TouchableOpacity14, View as View20 } from "react-native";
import React37 from "react";
// src/assets/svg/FileIcon.tsx
import * as React32 from "react";
import Svg10, { G, Path as Path10, Mask, Defs, ClipPath } from "react-native-svg";
var SvgComponent10 = function(props) {
    return /* @__PURE__ */ React32.createElement(Svg10, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 40,
        height: 40,
        fill: "none"
    }, props), /* @__PURE__ */ React32.createElement(G, {
        clipPath: "url(#a)"
    }, /* @__PURE__ */ React32.createElement(G, {
        filter: "url(#b)"
    }, /* @__PURE__ */ React32.createElement(Path10, {
        fill: "#fff",
        d: "M30 40H10a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h10.515a6 6 0 0 1 4.242 1.757l9.486 9.486A6 6 0 0 1 36 15.485V34a6 6 0 0 1-6 6Z"
    }), /* @__PURE__ */ React32.createElement(Path10, {
        stroke: "#CDD0D5",
        strokeWidth: 1.5,
        d: "M10 .75h10.515a5.25 5.25 0 0 1 3.523 1.358l.189.18 9.485 9.485a5.25 5.25 0 0 1 1.538 3.712V34c0 2.9-2.35 5.25-5.25 5.25H10A5.25 5.25 0 0 1 4.75 34V6C4.75 3.1 7.1.75 10 .75Z"
    })), /* @__PURE__ */ React32.createElement(Path10, {
        stroke: "#CDD0D5",
        strokeWidth: 1.5,
        d: "M23 1v8a4 4 0 0 0 4 4h8"
    }), /* @__PURE__ */ React32.createElement(G, {
        filter: "url(#c)"
    }, /* @__PURE__ */ React32.createElement(Mask, {
        id: "d",
        fill: "#fff"
    }, /* @__PURE__ */ React32.createElement(Path10, {
        d: "M0 22a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-8Z"
    })), /* @__PURE__ */ React32.createElement(Path10, {
        fill: "#DF1C41",
        d: "M0 22a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-8Z"
    }), /* @__PURE__ */ React32.createElement(Path10, {
        fill: "#000",
        fillOpacity: 0.08,
        d: "M-1 22a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3h-2Zm29 12H0h28ZM4 34a5 5 0 0 1-5-5v-7a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3v8c0 2.21 1.343 4 3 4Zm20-17a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5c1.657 0 3-1.79 3-4v-8a3 3 0 0 0-3-3v-2Z",
        mask: "url(#d)"
    }), /* @__PURE__ */ React32.createElement(Path10, {
        fill: "#fff",
        d: "M3.79 30v-8h3c.614 0 1.13.115 1.546.344.42.229.736.544.95.945.215.398.323.852.323 1.36 0 .512-.108.968-.324 1.367a2.316 2.316 0 0 1-.957.941c-.422.227-.941.34-1.558.34H4.78v-1.192h1.793c.36 0 .654-.062.883-.187.23-.125.398-.297.508-.516.112-.218.168-.47.168-.754 0-.283-.056-.533-.168-.75a1.141 1.141 0 0 0-.512-.503c-.229-.123-.525-.184-.887-.184H5.238V30H3.79Zm10.01 0h-2.712v-8h2.766c.794 0 1.476.16 2.047.48a3.212 3.212 0 0 1 1.32 1.372c.307.596.46 1.31.46 2.14 0 .834-.154 1.55-.464 2.149a3.212 3.212 0 0 1-1.332 1.379c-.578.32-1.273.48-2.086.48Zm-1.263-1.254h1.192c.557 0 1.022-.101 1.394-.305a1.95 1.95 0 0 0 .84-.918c.188-.408.281-.919.281-1.53 0-.613-.093-1.12-.28-1.524a1.918 1.918 0 0 0-.833-.91c-.364-.204-.818-.305-1.36-.305h-1.234v5.492ZM19.28 30v-8h5.125v1.215h-3.676v2.172h3.324v1.215h-3.324V30h-1.45Z"
    }))), /* @__PURE__ */ React32.createElement(Defs, null, /* @__PURE__ */ React32.createElement(ClipPath, {
        id: "a"
    }, /* @__PURE__ */ React32.createElement(Path10, {
        fill: "#fff",
        d: "M0 0h40v40H0z"
    }))));
};
var FileIcon_default = SvgComponent10;
// src/assets/svg/FileJPGIcon.tsx
import * as React33 from "react";
import Svg11, { G as G2, Path as Path11, Mask as Mask2, Defs as Defs2, ClipPath as ClipPath2 } from "react-native-svg";
var SvgComponent11 = function(props) {
    return /* @__PURE__ */ React33.createElement(Svg11, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 40,
        height: 40,
        fill: "none"
    }, props), /* @__PURE__ */ React33.createElement(G2, {
        clipPath: "url(#a)"
    }, /* @__PURE__ */ React33.createElement(G2, {
        filter: "url(#b)"
    }, /* @__PURE__ */ React33.createElement(Path11, {
        fill: "#fff",
        d: "M30 40H10a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h10.515a6 6 0 0 1 4.242 1.757l9.486 9.486A6 6 0 0 1 36 15.485V34a6 6 0 0 1-6 6Z"
    }), /* @__PURE__ */ React33.createElement(Path11, {
        stroke: "#CDD0D5",
        strokeWidth: 1.5,
        d: "M10 .75h10.515a5.25 5.25 0 0 1 3.523 1.358l.189.18 9.485 9.485a5.25 5.25 0 0 1 1.538 3.712V34c0 2.9-2.35 5.25-5.25 5.25H10A5.25 5.25 0 0 1 4.75 34V6C4.75 3.1 7.1.75 10 .75Z"
    })), /* @__PURE__ */ React33.createElement(Path11, {
        stroke: "#CDD0D5",
        strokeWidth: 1.5,
        d: "M23 1v8a4 4 0 0 0 4 4h8"
    }), /* @__PURE__ */ React33.createElement(G2, {
        filter: "url(#c)"
    }, /* @__PURE__ */ React33.createElement(Mask2, {
        id: "d",
        fill: "#fff"
    }, /* @__PURE__ */ React33.createElement(Path11, {
        d: "M0 22a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-8Z"
    })), /* @__PURE__ */ React33.createElement(Path11, {
        fill: "#375DFB",
        d: "M0 22a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-8Z"
    }), /* @__PURE__ */ React33.createElement(Path11, {
        fill: "#000",
        fillOpacity: 0.08,
        d: "M-1 22a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3h-2Zm29 12H0h28ZM4 34a5 5 0 0 1-5-5v-7a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3v8c0 2.21 1.343 4 3 4Zm20-17a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5c1.657 0 3-1.79 3-4v-8a3 3 0 0 0-3-3v-2Z",
        mask: "url(#d)"
    }), /* @__PURE__ */ React33.createElement(Path11, {
        fill: "#fff",
        d: "M6.945 22h1.438v5.625c-.003.516-.112.96-.328 1.332-.216.37-.519.655-.907.855-.385.198-.834.297-1.347.297-.469 0-.89-.083-1.266-.25a2.063 2.063 0 0 1-.887-.75c-.218-.33-.328-.742-.328-1.234h1.442c.002.216.05.402.14.559a.937.937 0 0 0 .387.359c.164.083.353.125.566.125.232 0 .429-.048.59-.145a.927.927 0 0 0 .367-.437c.086-.193.13-.43.133-.711V22Zm3.23 8v-8h3c.615 0 1.13.115 1.547.344.42.229.736.544.95.945.215.398.323.852.323 1.36 0 .512-.108.968-.324 1.367a2.316 2.316 0 0 1-.957.941c-.422.227-.941.34-1.559.34h-1.988v-1.192h1.793c.36 0 .654-.062.883-.187.23-.125.399-.297.508-.516.112-.218.168-.47.168-.754 0-.283-.056-.533-.168-.75a1.142 1.142 0 0 0-.512-.503c-.229-.123-.525-.184-.887-.184h-1.328V30h-1.449Zm12.659-5.445a2.068 2.068 0 0 0-.27-.567 1.743 1.743 0 0 0-.406-.433 1.639 1.639 0 0 0-.54-.27 2.249 2.249 0 0 0-.663-.094c-.43 0-.813.108-1.149.325-.336.216-.6.534-.793.953-.19.416-.285.924-.285 1.523 0 .604.095 1.116.285 1.535.19.42.455.739.793.957.339.216.732.325 1.18.325.406 0 .758-.079 1.055-.235.3-.156.53-.377.691-.664.162-.289.242-.627.242-1.015l.328.05H21.13v-1.133h3.247v.961c0 .685-.146 1.278-.438 1.778-.292.5-.693.885-1.203 1.156-.51.268-1.096.402-1.758.402-.737 0-1.384-.165-1.941-.496a3.433 3.433 0 0 1-1.301-1.418c-.31-.614-.465-1.343-.465-2.187 0-.646.091-1.223.273-1.73.185-.508.443-.94.774-1.294.33-.356.719-.627 1.164-.812.445-.188.93-.281 1.453-.281.443 0 .856.065 1.238.195.383.128.723.31 1.02.547.3.237.545.518.738.844.193.325.32.684.38 1.078h-1.477Z"
    }))), /* @__PURE__ */ React33.createElement(Defs2, null, /* @__PURE__ */ React33.createElement(ClipPath2, {
        id: "a"
    }, /* @__PURE__ */ React33.createElement(Path11, {
        fill: "#fff",
        d: "M0 0h40v40H0z"
    }))));
};
var FileJPGIcon_default = SvgComponent11;
// src/assets/svg/FilePNGIcon.tsx
import * as React34 from "react";
import Svg12, { G as G3, Path as Path12, Mask as Mask3, Defs as Defs3, ClipPath as ClipPath3 } from "react-native-svg";
var SvgComponent12 = function(props) {
    return /* @__PURE__ */ React34.createElement(Svg12, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 40,
        height: 40,
        fill: "none"
    }, props), /* @__PURE__ */ React34.createElement(G3, {
        clipPath: "url(#a)"
    }, /* @__PURE__ */ React34.createElement(G3, {
        filter: "url(#b)"
    }, /* @__PURE__ */ React34.createElement(Path12, {
        fill: "#fff",
        d: "M30 40H10a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h10.515a6 6 0 0 1 4.242 1.757l9.486 9.486A6 6 0 0 1 36 15.485V34a6 6 0 0 1-6 6Z"
    }), /* @__PURE__ */ React34.createElement(Path12, {
        stroke: "#CDD0D5",
        strokeWidth: 1.5,
        d: "M10 .75h10.515a5.25 5.25 0 0 1 3.523 1.358l.189.18 9.485 9.485a5.25 5.25 0 0 1 1.538 3.712V34c0 2.9-2.35 5.25-5.25 5.25H10A5.25 5.25 0 0 1 4.75 34V6C4.75 3.1 7.1.75 10 .75Z"
    })), /* @__PURE__ */ React34.createElement(Path12, {
        stroke: "#CDD0D5",
        strokeWidth: 1.5,
        d: "M23 1v8a4 4 0 0 0 4 4h8"
    }), /* @__PURE__ */ React34.createElement(G3, {
        filter: "url(#c)"
    }, /* @__PURE__ */ React34.createElement(Mask3, {
        id: "d",
        fill: "#fff"
    }, /* @__PURE__ */ React34.createElement(Path12, {
        d: "M0 22a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-8Z"
    })), /* @__PURE__ */ React34.createElement(Path12, {
        fill: "#35B9E9",
        d: "M0 22a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-8Z"
    }), /* @__PURE__ */ React34.createElement(Path12, {
        fill: "#000",
        fillOpacity: 0.08,
        d: "M-1 22a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3h-2Zm31 12H0h30ZM4 34a5 5 0 0 1-5-5v-7a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3v8c0 2.21 1.343 4 3 4Zm22-17a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5c1.657 0 3-1.79 3-4v-8a3 3 0 0 0-3-3v-2Z",
        mask: "url(#d)"
    }), /* @__PURE__ */ React34.createElement(Path12, {
        fill: "#fff",
        d: "M3.79 30v-8h3c.614 0 1.13.115 1.546.344.42.229.736.544.95.945.215.398.323.852.323 1.36 0 .512-.108.968-.324 1.367a2.316 2.316 0 0 1-.957.941c-.422.227-.941.34-1.558.34H4.78v-1.192h1.793c.36 0 .654-.062.883-.187.23-.125.398-.297.508-.516.112-.218.168-.47.168-.754 0-.283-.056-.533-.168-.75a1.141 1.141 0 0 0-.512-.503c-.229-.123-.525-.184-.887-.184H5.238V30H3.79Zm13.872-8v8h-1.289l-3.77-5.45h-.066V30h-1.449v-8h1.297l3.766 5.453h.07V22h1.441Zm7.159 2.555a2.068 2.068 0 0 0-.27-.567 1.743 1.743 0 0 0-.406-.433 1.639 1.639 0 0 0-.539-.27 2.249 2.249 0 0 0-.664-.094c-.43 0-.813.108-1.148.325-.336.216-.6.534-.794.953-.19.416-.285.924-.285 1.523 0 .604.095 1.116.285 1.535.19.42.455.739.794.957.338.216.731.325 1.18.325.405 0 .757-.079 1.054-.235.3-.156.53-.377.691-.664.162-.289.242-.627.242-1.015l.329.05h-2.172v-1.133h3.246v.961c0 .685-.146 1.278-.438 1.778-.291.5-.692.885-1.203 1.156-.51.268-1.096.402-1.758.402-.737 0-1.384-.165-1.941-.496a3.433 3.433 0 0 1-1.3-1.418c-.31-.614-.466-1.343-.466-2.187 0-.646.091-1.223.274-1.73.185-.508.442-.94.773-1.294.331-.356.719-.627 1.164-.812.446-.188.93-.281 1.453-.281.443 0 .856.065 1.239.195.383.128.722.31 1.02.547.299.237.545.518.738.844.192.325.319.684.378 1.078h-1.476Z"
    }))), /* @__PURE__ */ React34.createElement(Defs3, null, /* @__PURE__ */ React34.createElement(ClipPath3, {
        id: "a"
    }, /* @__PURE__ */ React34.createElement(Path12, {
        fill: "#fff",
        d: "M0 0h40v40H0z"
    }))));
};
var FilePNGIcon_default = SvgComponent12;
// src/assets/svg/DeleteFile.tsx
import * as React35 from "react";
import Svg13, { Path as Path13 } from "react-native-svg";
var SvgComponent13 = function(props) {
    return /* @__PURE__ */ React35.createElement(Svg13, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        fill: "none"
    }, props), /* @__PURE__ */ React35.createElement(Path13, {
        fill: "#525866",
        d: "M13.75 5.5h3.75V7H16v9.75a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75V7H2.5V5.5h3.75V3.25A.75.75 0 0 1 7 2.5h6a.75.75 0 0 1 .75.75V5.5ZM14.5 7h-9v9h9V7ZM7.75 9.25h1.5v4.5h-1.5v-4.5Zm3 0h1.5v4.5h-1.5v-4.5ZM7.75 4v1.5h4.5V4h-4.5Z"
    }));
};
var DeleteFile_default = SvgComponent13;
// src/assets/svg/Complete.tsx
import * as React36 from "react";
import Svg14, { Path as Path14 } from "react-native-svg";
var SvgComponent14 = function(props) {
    return /* @__PURE__ */ React36.createElement(Svg14, _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 13,
        fill: "none"
    }, props), /* @__PURE__ */ React36.createElement(Path14, {
        fill: "#38C793",
        d: "M6 12.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm-.598-3.6 4.242-4.243-.849-.848-3.393 3.394-1.698-1.697-.848.848L5.402 8.9Z"
    }));
};
var Complete_default = SvgComponent14;
// src/components/FileUpload/FileUpload.tsx
var FileUpload = function(param) {
    var fileSize = param.fileSize, fileType = param.fileType, fileName = param.fileName, fileLabel = param.fileLabel, removeImage = param.removeImage;
    return /* @__PURE__ */ React37.createElement(View20, {
        style: styles22.container
    }, /* @__PURE__ */ React37.createElement(View20, {
        style: [
            customStyles.group,
            {
                gap: 12
            }
        ]
    }, fileType === "PDF" ? /* @__PURE__ */ React37.createElement(FileIcon_default, null) : fileType === "PNG" ? /* @__PURE__ */ React37.createElement(FilePNGIcon_default, null) : /* @__PURE__ */ React37.createElement(FileJPGIcon_default, null), /* @__PURE__ */ React37.createElement(View20, null, /* @__PURE__ */ React37.createElement(Text11, {
        style: styles22.text
    }, fileName), /* @__PURE__ */ React37.createElement(View20, {
        style: [
            customStyles.group,
            {
                gap: 10,
                marginTop: 6
            }
        ]
    }, /* @__PURE__ */ React37.createElement(Text11, {
        style: [
            styles22.text,
            {
                color: COLORS.neutral200
            }
        ]
    }, fileSize), fileLabel === "Uploading..." ? /* @__PURE__ */ React37.createElement(ActivityIndicator4, {
        size: "small"
    }) : /* @__PURE__ */ React37.createElement(Complete_default, null), /* @__PURE__ */ React37.createElement(Text11, {
        style: [
            styles22.text,
            {
                color: COLORS.neutral200
            }
        ]
    }, fileLabel)))), /* @__PURE__ */ React37.createElement(TouchableOpacity14, {
        style: {
            alignItems: "flex-end"
        },
        onPress: removeImage
    }, /* @__PURE__ */ React37.createElement(DeleteFile_default, null)));
};
var FileUpload_default = FileUpload;
var styles22 = StyleSheet23.create({
    container: {
        backgroundColor: COLORS.white,
        padding: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E2E4E9",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 12
    },
    text: {
        fontSize: 14,
        fontFamily: "UrbanistMedium",
        color: "#0A0D14"
    }
});
// src/components/DetailInfo/DetailInfo.tsx
import { StyleSheet as StyleSheet24, View as View21 } from "react-native";
import React38 from "react";
var DetailInfo = function(param) {
    var label = param.label, value = param.value, _param_marginBottom = param.marginBottom, marginBottom = _param_marginBottom === void 0 ? 16 : _param_marginBottom;
    return /* @__PURE__ */ React38.createElement(View21, {
        style: [
            customStyles.groupSpaceBetween,
            {
                marginBottom: marginBottom
            }
        ]
    }, /* @__PURE__ */ React38.createElement(CustomTextNeutral, {
        style: styles23.label
    }, label), /* @__PURE__ */ React38.createElement(CustomTextNeutral, {
        style: styles23.text
    }, value));
};
var DetailInfo_default = DetailInfo;
var styles23 = StyleSheet24.create({
    label: {
        color: COLORS.neutral200,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: "Urbanist"
    },
    text: {
        color: COLORS.neutral700,
        fontFamily: "UrbanistMedium",
        fontSize: 16,
        lineHeight: 21
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
import { useState as useState5, useCallback } from "react";
var useModal = function() {
    var _useState5 = _sliced_to_array(useState5(false), 2), visible = _useState5[0], setVisible = _useState5[1];
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
import { useState as useState6, useEffect as useEffect3 } from "react";
var useTimer = function(initialSeconds) {
    var _useState6 = _sliced_to_array(useState6(initialSeconds), 2), seconds = _useState6[0], setSeconds = _useState6[1];
    var _useState61 = _sliced_to_array(useState6(false), 2), isFinished = _useState61[0], setIsFinished = _useState61[1];
    useEffect3(function() {
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
import { useEffect as useEffect4, useRef as useRef4, useState as useState7 } from "react";
var useCountdown = function(minutes) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, onStart = _ref.onStart, onComplete = _ref.onComplete;
    var _useState7 = _sliced_to_array(useState7(minutes > 0 ? minutes * 60 : 0), 2), timeLeft = _useState7[0], setTimeLeft = _useState7[1];
    var intervalRef = useRef4(null);
    var hasStarted = useRef4(false);
    var hasCompleted = useRef4(false);
    useEffect4(function() {
        if (minutes > 0) {
            setTimeLeft(minutes * 60);
            hasStarted.current = false;
            hasCompleted.current = false;
        }
    }, [
        minutes
    ]);
    useEffect4(function() {
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
// src/hooks/useBiometrics/useBiometrics.tsx
import * as LocalAuthentication from "expo-local-authentication";
import { useEffect as useEffect5, useState as useState8 } from "react";
var useBiometrics = function() {
    var _useState8 = _sliced_to_array(useState8(false), 2), facialRecognitionAvailable = _useState8[0], setFacialRecognitionAvailable = _useState8[1];
    var _useState81 = _sliced_to_array(useState8(false), 2), fingerprintAvailable = _useState81[0], setFingerprintAvailable = _useState81[1];
    var _useState82 = _sliced_to_array(useState8(false), 2), irisAvailable = _useState82[0], setIrisAvailable = _useState82[1];
    var _useState83 = _sliced_to_array(useState8(false), 2), loading = _useState83[0], setLoading = _useState83[1];
    var _useState84 = _sliced_to_array(useState8(), 2), result = _useState84[0], setResult = _useState84[1];
    var checkSupportedAuthentication = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var types;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            LocalAuthentication.supportedAuthenticationTypesAsync()
                        ];
                    case 1:
                        types = _state.sent();
                        if (types && types.length) {
                            setFacialRecognitionAvailable(types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION));
                            setFingerprintAvailable(types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT));
                            setIrisAvailable(types.includes(LocalAuthentication.AuthenticationType.IRIS));
                        }
                        return [
                            2
                        ];
                }
            });
        });
        return function checkSupportedAuthentication() {
            return _ref.apply(this, arguments);
        };
    }();
    var authenticateWithBiometrics = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(handleSubmit) {
            var results, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (loading) {
                            return [
                                2
                            ];
                        }
                        setLoading(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            LocalAuthentication.authenticateAsync()
                        ];
                    case 2:
                        results = _state.sent();
                        console.log("\u{1F680} ~ authenticateWithBiometrics ~ results:", results);
                        if (results.success) {
                            setResult("SUCCESS" /* SUCCESS */ );
                            handleSubmit === null || handleSubmit === void 0 ? void 0 : handleSubmit();
                        } else if (results.error === "unknown") {
                            setResult("DISABLED" /* DISABLED */ );
                        } else if (results.error === "user_cancel" || results.error === "system_cancel" || results.error === "app_cancel") {
                            setResult("CANCELLED" /* CANCELLED */ );
                        }
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        setResult("ERROR" /* ERROR */ );
                        return [
                            3,
                            4
                        ];
                    case 4:
                        setLoading(false);
                        return [
                            2
                        ];
                }
            });
        });
        return function authenticateWithBiometrics(handleSubmit) {
            return _ref.apply(this, arguments);
        };
    }();
    useEffect5(function() {
        checkSupportedAuthentication();
    }, []);
    var resultMessage;
    switch(result){
        case "CANCELLED" /* CANCELLED */ :
            resultMessage = "Authentication process has been cancelled";
            break;
        case "DISABLED" /* DISABLED */ :
            resultMessage = "Biometric authentication has been disabled";
            break;
        case "ERROR" /* ERROR */ :
            resultMessage = "There was an error in authentication";
            break;
        case "SUCCESS" /* SUCCESS */ :
            resultMessage = "Successfully authenticated";
            break;
        default:
            resultMessage = "";
            break;
    }
    return {
        facialRecognitionAvailable: facialRecognitionAvailable,
        fingerprintAvailable: fingerprintAvailable,
        irisAvailable: irisAvailable,
        authenticateWithBiometrics: authenticateWithBiometrics,
        resultMessage: resultMessage
    };
};
// src/hooks/useDateTimePicker/useDateTimePicker.ts
import { useState as useState9 } from "react";
var useDateTimePicker = function() {
    var _useState9 = _sliced_to_array(useState9(false), 2), isPickerVisible = _useState9[0], setIsPickerVisible = _useState9[1];
    var _useState91 = _sliced_to_array(useState9("date"), 2), pickerMode = _useState91[0], setPickerMode = _useState91[1];
    var _useState92 = _sliced_to_array(useState9(null), 2), selectedDateTime = _useState92[0], setSelectedDateTime = _useState92[1];
    var showPicker = function(mode) {
        setPickerMode(mode);
        setIsPickerVisible(true);
    };
    var hidePicker = function() {
        setIsPickerVisible(false);
    };
    var handleConfirm = function(pickedDate) {
        setSelectedDateTime(function(prevDateTime) {
            if (pickerMode === "date") {
                var time = prevDateTime || /* @__PURE__ */ new Date();
                return new Date(pickedDate.getFullYear(), pickedDate.getMonth(), pickedDate.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
            } else {
                var date = prevDateTime || /* @__PURE__ */ new Date();
                return new Date(date.getFullYear(), date.getMonth(), date.getDate(), pickedDate.getHours(), pickedDate.getMinutes(), pickedDate.getSeconds());
            }
        });
        hidePicker();
    };
    return {
        isPickerVisible: isPickerVisible,
        pickerMode: pickerMode,
        selectedDateTime: selectedDateTime,
        showPicker: showPicker,
        hidePicker: hidePicker,
        handleConfirm: handleConfirm
    };
};
// src/hooks/useGooglePlaces/useGooglePlaces.ts
import { useState as useState10 } from "react";
import axios from "axios";
import * as Location from "expo-location";
var useGooglePlaces = function(apiKey) {
    if (!apiKey) {
        console.error("[useGooglePlaces] Google API key is missing. Please provide a valid API key.");
    }
    var _useState10 = _sliced_to_array(useState10(""), 2), query = _useState10[0], setQuery = _useState10[1];
    var _useState101 = _sliced_to_array(useState10([]), 2), predictions = _useState101[0], setPredictions = _useState101[1];
    var _useState102 = _sliced_to_array(useState10(null), 2), placeDetails = _useState102[0], setPlaceDetails = _useState102[1];
    var _useState103 = _sliced_to_array(useState10(false), 2), isLoading = _useState103[0], setIsLoading = _useState103[1];
    var _useState104 = _sliced_to_array(useState10(null), 2), error = _useState104[0], setError = _useState104[1];
    var fetchPredictions = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(text) {
            var response, error2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setQuery(text);
                        setError(null);
                        if (!apiKey) {
                            setError("Missing API key for fetching place details");
                            return [
                                2,
                                null
                            ];
                        }
                        if (!apiKey || text.length < 3) {
                            setPredictions([]);
                            return [
                                2
                            ];
                        }
                        setIsLoading(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4,
                            axios.get("https://maps.googleapis.com/maps/api/place/autocomplete/json", {
                                params: {
                                    input: text,
                                    key: apiKey,
                                    language: "en",
                                    components: "country:ng"
                                }
                            })
                        ];
                    case 2:
                        response = _state.sent();
                        setPredictions(response.data.predictions);
                        return [
                            3,
                            5
                        ];
                    case 3:
                        error2 = _state.sent();
                        setError("Failed to fetch location predictions");
                        console.error("Error fetching predictions:", error2);
                        return [
                            3,
                            5
                        ];
                    case 4:
                        setIsLoading(false);
                        return [
                            7
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        });
        return function fetchPredictions(text) {
            return _ref.apply(this, arguments);
        };
    }();
    var fetchPlaceDetails = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(placeId) {
            var response, error2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setError(null);
                        setIsLoading(true);
                        if (!apiKey) {
                            setError("Missing API key for fetching place details");
                            return [
                                2,
                                null
                            ];
                        }
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4,
                            axios.get("https://maps.googleapis.com/maps/api/place/details/json", {
                                params: {
                                    place_id: placeId,
                                    key: apiKey,
                                    fields: "address_component,formatted_address,geometry"
                                }
                            })
                        ];
                    case 2:
                        response = _state.sent();
                        if (response.data.status === "OK") {
                            setPlaceDetails(response.data.result);
                            return [
                                2,
                                response.data.result
                            ];
                        } else {
                            throw new Error("Failed to fetch place details");
                        }
                        return [
                            3,
                            5
                        ];
                    case 3:
                        error2 = _state.sent();
                        setError("Failed to fetch place details");
                        console.error("Error fetching place details:", error2);
                        return [
                            2,
                            null
                        ];
                    case 4:
                        setIsLoading(false);
                        return [
                            7
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        });
        return function fetchPlaceDetails(placeId) {
            return _ref.apply(this, arguments);
        };
    }();
    var getCurrentLocation = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var status, location, _location_coords, latitude, longitude, response, result, error2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setError(null);
                        setIsLoading(true);
                        if (!apiKey) {
                            setError("Missing API key for reverse geocoding");
                            return [
                                2,
                                null
                            ];
                        }
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            5,
                            6,
                            7
                        ]);
                        return [
                            4,
                            Location.requestForegroundPermissionsAsync()
                        ];
                    case 2:
                        status = _state.sent().status;
                        if (status !== "granted") {
                            setError("Permission to access location was denied");
                            return [
                                2,
                                null
                            ];
                        }
                        return [
                            4,
                            Location.getCurrentPositionAsync({
                                accuracy: Location.Accuracy.High
                            })
                        ];
                    case 3:
                        location = _state.sent();
                        _location_coords = location.coords, latitude = _location_coords.latitude, longitude = _location_coords.longitude;
                        return [
                            4,
                            axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
                                params: {
                                    latlng: "".concat(latitude, ",").concat(longitude),
                                    key: apiKey
                                }
                            })
                        ];
                    case 4:
                        response = _state.sent();
                        if (response.data.status === "OK" && response.data.results.length > 0) {
                            result = response.data.results[0];
                            setPlaceDetails({
                                formatted_address: result.formatted_address,
                                geometry: {
                                    location: {
                                        lat: latitude,
                                        lng: longitude
                                    }
                                },
                                name: result.formatted_address
                            });
                            return [
                                2,
                                result
                            ];
                        }
                        return [
                            2,
                            null
                        ];
                    case 5:
                        error2 = _state.sent();
                        setError("Failed to get current location");
                        console.error("Error getting current location:", error2);
                        return [
                            2,
                            null
                        ];
                    case 6:
                        setIsLoading(false);
                        return [
                            7
                        ];
                    case 7:
                        return [
                            2
                        ];
                }
            });
        });
        return function getCurrentLocation() {
            return _ref.apply(this, arguments);
        };
    }();
    return {
        query: query,
        predictions: predictions,
        placeDetails: placeDetails,
        isLoading: isLoading,
        error: error,
        fetchPredictions: fetchPredictions,
        fetchPlaceDetails: fetchPlaceDetails,
        getCurrentLocation: getCurrentLocation
    };
};
// src/hooks/useReceiptPDF/useReceiptPDF.ts
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { useRef as useRef5 } from "react";
import { captureRef } from "react-native-view-shot";
var useReceiptPDF = function() {
    var receiptRef = useRef5(null);
    var generatePDF = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(modalData) {
            var vehicles, addOns, uri, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        vehicles = modalData === null || modalData === void 0 ? void 0 : modalData.washDetails.flatMap(function(item) {
                            return item.vehicle || [];
                        });
                        addOns = modalData === null || modalData === void 0 ? void 0 : modalData.washDetails.flatMap(function(item) {
                            return item.addons || [];
                        });
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            4,
                            ,
                            5
                        ]);
                        return [
                            4,
                            Print.printToFileAsync({
                                html: htmlContent(modalData, vehicles, addOns),
                                base64: false
                            })
                        ];
                    case 2:
                        uri = _state.sent().uri;
                        return [
                            4,
                            Sharing.shareAsync(uri, {
                                UTI: ".pdf",
                                mimeType: "application/pdf"
                            })
                        ];
                    case 3:
                        _state.sent();
                        return [
                            2,
                            true
                        ];
                    case 4:
                        error = _state.sent();
                        console.error("Error generating PDF:", error);
                        return [
                            2,
                            false
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        });
        return function generatePDF(modalData) {
            return _ref.apply(this, arguments);
        };
    }();
    var captureAndShare = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var uri, isAvailable, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            6,
                            ,
                            7
                        ]);
                        if (!receiptRef.current) return [
                            2
                        ];
                        return [
                            4,
                            captureRef(receiptRef.current, {
                                quality: 1,
                                format: "png"
                            })
                        ];
                    case 1:
                        uri = _state.sent();
                        return [
                            4,
                            Sharing.isAvailableAsync()
                        ];
                    case 2:
                        isAvailable = _state.sent();
                        if (!isAvailable) return [
                            3,
                            4
                        ];
                        return [
                            4,
                            Sharing.shareAsync(uri)
                        ];
                    case 3:
                        _state.sent();
                        return [
                            3,
                            5
                        ];
                    case 4:
                        console.warn("Sharing is not available on this device.");
                        _state.label = 5;
                    case 5:
                        return [
                            3,
                            7
                        ];
                    case 6:
                        error = _state.sent();
                        console.error("Error capturing and sharing screenshot:", error);
                        return [
                            3,
                            7
                        ];
                    case 7:
                        return [
                            2
                        ];
                }
            });
        });
        return function captureAndShare() {
            return _ref.apply(this, arguments);
        };
    }();
    return {
        receiptRef: receiptRef,
        captureAndShare: captureAndShare,
        generatePDF: generatePDF
    };
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
var KYC = "".concat(V1, "/kyc");
var WALLET = "".concat(V1, "/wallets");
var BANKS = "".concat(V1, "/users/banks");
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
    SEND_TICKET_MESSAGE: "".concat(CHAT, "/message/support"),
    INITIATE_KYC: "".concat(KYC, "/initiate"),
    KYC_SUPPORTED_ID_TYPES: "".concat(KYC, "/supported-ids"),
    WALLET: "".concat(WALLET),
    BANKS: "".concat(BANKS),
    ADD_BANKS: "".concat(BANKS)
};
// src/config/baseApi.ts
import axios2 from "axios";
var API_URL = "https://gateway-ms-production.up.railway.app";
var SOCKET_URL = "https://chats-ms-production.up.railway.app";
var api = axios2.create({
    baseURL: "".concat(API_URL),
    headers: {
        "Content-type": "application/json"
    }
});
var baseApi_default = api;
// src/config/useStorageState.ts
import { useEffect as useEffect6, useCallback as useCallback3, useReducer } from "react";
import * as SecureStore2 from "expo-secure-store";
import { Platform as Platform5 } from "react-native";
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
                    if (!(Platform5.OS === "web")) return [
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
    useEffect6(function() {
        if (Platform5.OS === "web") {
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
import React39, { createContext, useContext, useEffect as useEffect7, useState as useState11 } from "react";
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
    var _useState11 = _sliced_to_array(useState11(null), 2), socket2 = _useState11[0], setSocket = _useState11[1];
    useEffect7(function() {
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
    return /* @__PURE__ */ React39.createElement(SocketContext.Provider, {
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
        },
        {
            key: "INITIATE_KYC",
            value: function INITIATE_KYC(data) {
                return baseApi_default.post("".concat(ENDPOINT.INITIATE_KYC), data);
            }
        },
        {
            key: "KYC_SUPPORTED_ID_TYPES",
            value: function KYC_SUPPORTED_ID_TYPES() {
                return baseApi_default.get("".concat(ENDPOINT.KYC_SUPPORTED_ID_TYPES));
            }
        },
        {
            key: "BANKS",
            value: function BANKS() {
                return baseApi_default.get("".concat(ENDPOINT.BANKS));
            }
        },
        {
            key: "ADD_BANKS",
            value: function ADD_BANKS(data) {
                return baseApi_default.post("".concat(ENDPOINT.BANKS), data);
            }
        },
        {
            key: "USER_BANK",
            value: function USER_BANK() {
                return baseApi_default.get("".concat(ENDPOINT.BANKS));
            }
        },
        {
            key: "DELETE_BANK",
            value: function DELETE_BANK() {
                return baseApi_default.delete("".concat(ENDPOINT.BANKS));
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
// src/services/walletServices/walletServices.ts
var walletService = /*#__PURE__*/ function() {
    "use strict";
    function walletService() {
        _class_call_check(this, walletService);
    }
    _create_class(walletService, [
        {
            key: "WALLET",
            value: function WALLET() {
                return baseApi_default.get("".concat(ENDPOINT.WALLET));
            }
        }
    ]);
    return walletService;
}();
var walletServices = new walletService();
export { API_URL, Accordion_default as Accordion, AuthServices, COLORS, ChatServices, ChooseFile_default as ChooseFile, CustomButton_default as CustomButton, CustomDropdown_default as CustomDropdown, CustomError_default as CustomError, CustomInput_default as CustomInput, CustomModal_default as CustomModal, CustomMultiDropdown_default as CustomMultiDropdown, CustomSelect_default as CustomSelect, CustomSubtitle, CustomSwitch_default as CustomSwitch, CustomText, CustomTextItalics, CustomTextNeutral, CustomTitle, CustomTitleMedium, CustomUrbanistSubtitle, CustomUrbanistText, CustomUrbanistTitle, DetailInfo_default as DetailInfo, ENDPOINT, EResult, ETab, EmptyList_default as EmptyList, FileUpload_default as FileUpload, Header, LineIndicator_default as LineIndicator, ModalContent_default as ModalContent, NotificationItem_default as NotificationItem, OTPInput_default as OTPInput, PaymentModal_default as PaymentModal, ProfileCard_default as ProfileCard, ProfileServices, SOCKET_URL, SearchInput_default as SearchInput, SocketProvider, Tab_default as Tab, TicketItem_default as TicketItem, WashServices, baseApi_default as api, apiContext, blurhash, cardValidationSchema, customStyles, filterOrders, formatDateTime, formatFileSize, formatFileType, formatPhoneNumber, formatToISOString, formatWithCommas, generateKeyPair, generateSignature, getAddonAndVehicleIds, getComponent, getOrCreateDeviceId, getStoredEmail, getTimeDifference, getVehicleIds, getYearsArray, htmlContent, loginValidationSchema, modalEnum, otpChannel, phoneValidationSchema, profileValidationSchema, resetValidationSchema, sanitizeAmount, setStorageItemAsync, showToastNotification, signBiometricToken, statusBorderColor, statusColor, storeEmail, ticketValidationSchema, transformWashAddOns, transformWashDetails, truncateText, truncateTextLast4, truncateTextSubtitle, truncateTextWithEmail, useBiometrics, useCountdown, useDateTimePicker, useGooglePlaces, useModal, useReceiptPDF, useShareLink, useStorageState, useTimer, validationSchema, walletServices, withdrawalValidationSchema };
//# sourceMappingURL=index.mjs.map