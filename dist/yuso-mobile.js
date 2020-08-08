/*!
 * 
 * yuso-mobile v1.0.0
 * 
 * Copyright 2020-present, Hrpackage, Inc.
 * All rights reserved.
 *       
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["moment", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["yuso-mobile"] = factory(require("moment"), require("react"), require("react-dom"));
	else
		root["yuso-mobile"] = factory(root["Moment"], root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__("./src sync recursive ^\\.\\/[^_][\\w-]+\\/style\\/index\\.less?$");

req.keys().forEach(function (mod) {
  req(mod);
});
module.exports = __webpack_require__(/*! ./src/index */ "./src/index.js");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/exif-js/exif.js":
/*!**************************************!*\
  !*** ./node_modules/exif-js/exif.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {

    var debug = false;

    var root = this;

    var EXIF = function(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (true) {
        if ( true && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {}

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000 : "ExifVersion",             // EXIF version
        0xA000 : "FlashpixVersion",         // Flashpix format version

        // colorspace tags
        0xA001 : "ColorSpace",              // Color space information tag

        // image configuration
        0xA002 : "PixelXDimension",         // Valid width of meaningful image
        0xA003 : "PixelYDimension",         // Valid height of meaningful image
        0x9101 : "ComponentsConfiguration", // Information about channels
        0x9102 : "CompressedBitsPerPixel",  // Compressed bits per pixel

        // user information
        0x927C : "MakerNote",               // Any desired information written by the manufacturer
        0x9286 : "UserComment",             // Comments by user

        // related file
        0xA004 : "RelatedSoundFile",        // Name of related sound file

        // date and time
        0x9003 : "DateTimeOriginal",        // Date and time when the original image was generated
        0x9004 : "DateTimeDigitized",       // Date and time when the image was stored digitally
        0x9290 : "SubsecTime",              // Fractions of seconds for DateTime
        0x9291 : "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
        0x9292 : "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A : "ExposureTime",            // Exposure time (in seconds)
        0x829D : "FNumber",                 // F number
        0x8822 : "ExposureProgram",         // Exposure program
        0x8824 : "SpectralSensitivity",     // Spectral sensitivity
        0x8827 : "ISOSpeedRatings",         // ISO speed rating
        0x8828 : "OECF",                    // Optoelectric conversion factor
        0x9201 : "ShutterSpeedValue",       // Shutter speed
        0x9202 : "ApertureValue",           // Lens aperture
        0x9203 : "BrightnessValue",         // Value of brightness
        0x9204 : "ExposureBias",            // Exposure bias
        0x9205 : "MaxApertureValue",        // Smallest F number of lens
        0x9206 : "SubjectDistance",         // Distance to subject in meters
        0x9207 : "MeteringMode",            // Metering mode
        0x9208 : "LightSource",             // Kind of light source
        0x9209 : "Flash",                   // Flash status
        0x9214 : "SubjectArea",             // Location and area of main subject
        0x920A : "FocalLength",             // Focal length of the lens in mm
        0xA20B : "FlashEnergy",             // Strobe energy in BCPS
        0xA20C : "SpatialFrequencyResponse",    //
        0xA20E : "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F : "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210 : "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214 : "SubjectLocation",         // Location of subject in image
        0xA215 : "ExposureIndex",           // Exposure index selected on camera
        0xA217 : "SensingMethod",           // Image sensor type
        0xA300 : "FileSource",              // Image source (3 == DSC)
        0xA301 : "SceneType",               // Scene type (1 == directly photographed)
        0xA302 : "CFAPattern",              // Color filter array geometric pattern
        0xA401 : "CustomRendered",          // Special processing
        0xA402 : "ExposureMode",            // Exposure mode
        0xA403 : "WhiteBalance",            // 1 = auto white balance, 2 = manual
        0xA404 : "DigitalZoomRation",       // Digital zoom ratio
        0xA405 : "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406 : "SceneCaptureType",        // Type of scene
        0xA407 : "GainControl",             // Degree of overall image gain adjustment
        0xA408 : "Contrast",                // Direction of contrast processing applied by camera
        0xA409 : "Saturation",              // Direction of saturation processing applied by camera
        0xA40A : "Sharpness",               // Direction of sharpness processing applied by camera
        0xA40B : "DeviceSettingDescription",    //
        0xA40C : "SubjectDistanceRange",    // Distance to subject

        // other tags
        0xA005 : "InteroperabilityIFDPointer",
        0xA420 : "ImageUniqueID"            // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100 : "ImageWidth",
        0x0101 : "ImageHeight",
        0x8769 : "ExifIFDPointer",
        0x8825 : "GPSInfoIFDPointer",
        0xA005 : "InteroperabilityIFDPointer",
        0x0102 : "BitsPerSample",
        0x0103 : "Compression",
        0x0106 : "PhotometricInterpretation",
        0x0112 : "Orientation",
        0x0115 : "SamplesPerPixel",
        0x011C : "PlanarConfiguration",
        0x0212 : "YCbCrSubSampling",
        0x0213 : "YCbCrPositioning",
        0x011A : "XResolution",
        0x011B : "YResolution",
        0x0128 : "ResolutionUnit",
        0x0111 : "StripOffsets",
        0x0116 : "RowsPerStrip",
        0x0117 : "StripByteCounts",
        0x0201 : "JPEGInterchangeFormat",
        0x0202 : "JPEGInterchangeFormatLength",
        0x012D : "TransferFunction",
        0x013E : "WhitePoint",
        0x013F : "PrimaryChromaticities",
        0x0211 : "YCbCrCoefficients",
        0x0214 : "ReferenceBlackWhite",
        0x0132 : "DateTime",
        0x010E : "ImageDescription",
        0x010F : "Make",
        0x0110 : "Model",
        0x0131 : "Software",
        0x013B : "Artist",
        0x8298 : "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000 : "GPSVersionID",
        0x0001 : "GPSLatitudeRef",
        0x0002 : "GPSLatitude",
        0x0003 : "GPSLongitudeRef",
        0x0004 : "GPSLongitude",
        0x0005 : "GPSAltitudeRef",
        0x0006 : "GPSAltitude",
        0x0007 : "GPSTimeStamp",
        0x0008 : "GPSSatellites",
        0x0009 : "GPSStatus",
        0x000A : "GPSMeasureMode",
        0x000B : "GPSDOP",
        0x000C : "GPSSpeedRef",
        0x000D : "GPSSpeed",
        0x000E : "GPSTrackRef",
        0x000F : "GPSTrack",
        0x0010 : "GPSImgDirectionRef",
        0x0011 : "GPSImgDirection",
        0x0012 : "GPSMapDatum",
        0x0013 : "GPSDestLatitudeRef",
        0x0014 : "GPSDestLatitude",
        0x0015 : "GPSDestLongitudeRef",
        0x0016 : "GPSDestLongitude",
        0x0017 : "GPSDestBearingRef",
        0x0018 : "GPSDestBearing",
        0x0019 : "GPSDestDistanceRef",
        0x001A : "GPSDestDistance",
        0x001B : "GPSProcessingMethod",
        0x001C : "GPSAreaInformation",
        0x001D : "GPSDateStamp",
        0x001E : "GPSDifferential"
    };

     // EXIF 2.3 Spec
    var IFD1Tags = EXIF.IFD1Tags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0111: "StripOffsets",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x011C: "PlanarConfiguration",
        0x0128: "ResolutionUnit",
        0x0201: "JpegIFOffset",    // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
        0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
        0x0211: "YCbCrCoefficients",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x0214: "ReferenceBlackWhite"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram : {
            0 : "Not defined",
            1 : "Manual",
            2 : "Normal program",
            3 : "Aperture priority",
            4 : "Shutter priority",
            5 : "Creative program",
            6 : "Action program",
            7 : "Portrait mode",
            8 : "Landscape mode"
        },
        MeteringMode : {
            0 : "Unknown",
            1 : "Average",
            2 : "CenterWeightedAverage",
            3 : "Spot",
            4 : "MultiSpot",
            5 : "Pattern",
            6 : "Partial",
            255 : "Other"
        },
        LightSource : {
            0 : "Unknown",
            1 : "Daylight",
            2 : "Fluorescent",
            3 : "Tungsten (incandescent light)",
            4 : "Flash",
            9 : "Fine weather",
            10 : "Cloudy weather",
            11 : "Shade",
            12 : "Daylight fluorescent (D 5700 - 7100K)",
            13 : "Day white fluorescent (N 4600 - 5400K)",
            14 : "Cool white fluorescent (W 3900 - 4500K)",
            15 : "White fluorescent (WW 3200 - 3700K)",
            17 : "Standard light A",
            18 : "Standard light B",
            19 : "Standard light C",
            20 : "D55",
            21 : "D65",
            22 : "D75",
            23 : "D50",
            24 : "ISO studio tungsten",
            255 : "Other"
        },
        Flash : {
            0x0000 : "Flash did not fire",
            0x0001 : "Flash fired",
            0x0005 : "Strobe return light not detected",
            0x0007 : "Strobe return light detected",
            0x0009 : "Flash fired, compulsory flash mode",
            0x000D : "Flash fired, compulsory flash mode, return light not detected",
            0x000F : "Flash fired, compulsory flash mode, return light detected",
            0x0010 : "Flash did not fire, compulsory flash mode",
            0x0018 : "Flash did not fire, auto mode",
            0x0019 : "Flash fired, auto mode",
            0x001D : "Flash fired, auto mode, return light not detected",
            0x001F : "Flash fired, auto mode, return light detected",
            0x0020 : "No flash function",
            0x0041 : "Flash fired, red-eye reduction mode",
            0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
            0x0047 : "Flash fired, red-eye reduction mode, return light detected",
            0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059 : "Flash fired, auto mode, red-eye reduction mode",
            0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod : {
            1 : "Not defined",
            2 : "One-chip color area sensor",
            3 : "Two-chip color area sensor",
            4 : "Three-chip color area sensor",
            5 : "Color sequential area sensor",
            7 : "Trilinear sensor",
            8 : "Color sequential linear sensor"
        },
        SceneCaptureType : {
            0 : "Standard",
            1 : "Landscape",
            2 : "Portrait",
            3 : "Night scene"
        },
        SceneType : {
            1 : "Directly photographed"
        },
        CustomRendered : {
            0 : "Normal process",
            1 : "Custom process"
        },
        WhiteBalance : {
            0 : "Auto white balance",
            1 : "Manual white balance"
        },
        GainControl : {
            0 : "None",
            1 : "Low gain up",
            2 : "High gain up",
            3 : "Low gain down",
            4 : "High gain down"
        },
        Contrast : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        Saturation : {
            0 : "Normal",
            1 : "Low saturation",
            2 : "High saturation"
        },
        Sharpness : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        SubjectDistanceRange : {
            0 : "Unknown",
            1 : "Macro",
            2 : "Close view",
            3 : "Distant view"
        },
        FileSource : {
            3 : "DSC"
        },

        Components : {
            0 : "",
            1 : "Y",
            2 : "Cb",
            3 : "Cr",
            4 : "R",
            5 : "G",
            6 : "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }


    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function(e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            img.exifdata = data || {};
            var iptcdata = findIPTCinJPEG(binFile);
            img.iptcdata = iptcdata || {};
            if (EXIF.isXmpEnabled) {
               var xmpdata= findXMPinJPEG(binFile);
               img.xmpdata = xmpdata || {};               
            }
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) { // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);

            } else if (/^blob\:/i.test(img.src)) { // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function(e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function (blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function() {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else {
                offset += 2 + dataView.getUint16(offset+2);
            }

        }

    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;


        var isFieldSegmentStart = function(dataView, offset){
            return (
                dataView.getUint8(offset) === 0x38 &&
                dataView.getUint8(offset+1) === 0x42 &&
                dataView.getUint8(offset+2) === 0x49 &&
                dataView.getUint8(offset+3) === 0x4D &&
                dataView.getUint8(offset+4) === 0x04 &&
                dataView.getUint8(offset+5) === 0x04
            );
        };

        while (offset < length) {

            if ( isFieldSegmentStart(dataView, offset )){

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset+7);
                if(nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if(nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;

            }


            // Not the marker, continue searching
            offset++;

        }

    }
    var IptcFieldMap = {
        0x78 : 'caption',
        0x6E : 'credit',
        0x19 : 'keywords',
        0x37 : 'dateCreated',
        0x50 : 'byline',
        0x55 : 'bylineTitle',
        0x7A : 'captionWriter',
        0x69 : 'headline',
        0x74 : 'copyright',
        0x0F : 'category'
    };
    function readIPTCData(file, startOffset, sectionLength){
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while(segmentStartPos < startOffset+sectionLength) {
            if(dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos+1) === 0x02){
                segmentType = dataView.getUint8(segmentStartPos+2);
                if(segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos+3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos+5, dataSize);
                    // Check if we already stored a value with this name
                    if(data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if(data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }

            }
            segmentStartPos++;
        }
        return data;
    }



    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset, tag,
            i;

        for (i=0;i<entries;i++) {
            entryOffset = dirStart + i*12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset+2, !bigEnd),
            numValues = file.getUint32(entryOffset+4, !bigEnd),
            valueOffset = file.getUint32(entryOffset+8, !bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return getStringFromDB(file, offset, numValues-1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint16(offset + 2*n, !bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 5:    // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset+4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        numerator = file.getUint32(valueOffset + 8*n, !bigEnd);
                        denominator = file.getUint32(valueOffset+4 + 8*n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset+4, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 8*n, !bigEnd) / file.getInt32(valueOffset+4 + 8*n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    /**
    * Given an IFD (Image File Directory) start offset
    * returns an offset to next IFD or 0 if it's the last IFD.
    */
    function getNextIFDOffset(dataView, dirStart, bigEnd){
        //the first 2bytes means the number of directory entries contains in this IFD
        var entries = dataView.getUint16(dirStart, !bigEnd);

        // After last directory entry, there is a 4bytes of data,
        // it means an offset to next IFD.
        // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

        return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
    }

    function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd){
        // get the IFD1 offset
        var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart+firstIFDOffset, bigEnd);

        if (!IFD1OffsetPointer) {
            // console.log('******** IFD1Offset is empty, image thumb not found ********');
            return {};
        }
        else if (IFD1OffsetPointer > dataView.byteLength) { // this should not happen
            // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
            return {};
        }
        // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

        var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd)

        // EXIF 2.3 specification for JPEG format thumbnail

        // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
        // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
        // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
        // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
        // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

        if (thumbTags['Compression']) {
            // console.log('Thumbnail image found!');

            switch (thumbTags['Compression']) {
                case 6:
                    // console.log('Thumbnail image format is JPEG');
                    if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                    // extract the thumbnail
                        var tOffset = tiffStart + thumbTags.JpegIFOffset;
                        var tLength = thumbTags.JpegIFByteCount;
                        thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                            type: 'image/jpeg'
                        });
                    }
                break;

            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
            }
        }
        else if (thumbTags['PhotometricInterpretation'] == 2) {
            console.log("Thumbnail image format is RGB, which is not implemented.");
        }
        return thumbTags;
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (n = start; n < start+length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset+2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset+4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset+4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" :
                    case "GainControl" :
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" :
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration" :
                        exifData[tag] =
                            StringValues.Components[exifData[tag][0]] +
                            StringValues.Components[exifData[tag][1]] +
                            StringValues.Components[exifData[tag][2]] +
                            StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" :
                        gpsData[tag] = gpsData[tag][0] +
                            "." + gpsData[tag][1] +
                            "." + gpsData[tag][2] +
                            "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        // extract thumbnail
        tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

        return tags;
    }

   function findXMPinJPEG(file) {

        if (!('DOMParser' in self)) {
            // console.warn('XML parsing not supported without DOMParser');
            return;
        }
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
           if (debug) console.log("Not a valid JPEG");
           return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            dom = new DOMParser();

        while (offset < (length-4)) {
            if (getStringFromDB(dataView, offset, 4) == "http") {
                var startOffset = offset - 1;
                var sectionLength = dataView.getUint16(offset - 2) - 1;
                var xmpString = getStringFromDB(dataView, startOffset, sectionLength)
                var xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
                xmpString = xmpString.substring( xmpString.indexOf( '<x:xmpmeta' ), xmpEndIndex );

                var indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10
                //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
                //Without these namespaces, XML is thought to be invalid by parsers
                xmpString = xmpString.slice(0, indexOfXmp)
                            + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" '
                            + 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
                            + 'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" '
                            + 'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" '
                            + 'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" '
                            + 'xmlns:exif="http://ns.adobe.com/exif/1.0/" '
                            + 'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" '
                            + 'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" '
                            + 'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" '
                            + 'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" '
                            + 'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '
                            + xmpString.slice(indexOfXmp)

                var domDocument = dom.parseFromString( xmpString, 'text/xml' );
                return xml2Object(domDocument);
            } else{
             offset++;
            }
        }
    }

    function xml2json(xml) {
        var json = {};
      
        if (xml.nodeType == 1) { // element node
          if (xml.attributes.length > 0) {
            json['@attributes'] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              json['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text node
          return xml.nodeValue;
        }
      
        // deal with children
        if (xml.hasChildNodes()) {
          for(var i = 0; i < xml.childNodes.length; i++) {
            var child = xml.childNodes.item(i);
            var nodeName = child.nodeName;
            if (json[nodeName] == null) {
              json[nodeName] = xml2json(child);
            } else {
              if (json[nodeName].push == null) {
                var old = json[nodeName];
                json[nodeName] = [];
                json[nodeName].push(old);
              }
              json[nodeName].push(xml2json(child));
            }
          }
        }
        
        return json;
    }

    function xml2Object(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
              for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var attributes = item.attributes;
                for(var idx in attributes) {
                    var itemAtt = attributes[idx];
                    var dataKey = itemAtt.nodeName;
                    var dataValue = itemAtt.nodeValue;

                    if(dataKey !== undefined) {
                        obj[dataKey] = dataValue;
                    }
                }
                var nodeName = item.nodeName;

                if (typeof (obj[nodeName]) == "undefined") {
                  obj[nodeName] = xml2json(item);
                } else {
                  if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];

                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                  }
                  obj[nodeName].push(xml2json(item));
                }
              }
            } else {
              obj = xml.textContent;
            }
            return obj;
          } catch (e) {
              console.log(e.message);
          }
    }

    EXIF.enableXmp = function() {
        EXIF.isXmpEnabled = true;
    }

    EXIF.disableXmp = function() {
        EXIF.isXmpEnabled = false;
    }

    EXIF.getData = function(img, callback) {
        if (((self.Image && img instanceof self.Image)
            || (self.HTMLImageElement && img instanceof self.HTMLImageElement))
            && !img.complete)
            return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    EXIF.getTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }
    
    EXIF.getIptcTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.iptcdata[tag];
    }

    EXIF.getAllTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }
    
    EXIF.getAllIptcTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.iptcdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    EXIF.pretty = function(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    EXIF.readFromBinaryFile = function(file) {
        return findEXIFinJPEG(file);
    }

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return EXIF;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}.call(this));



/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/clone.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/clone.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEmpty.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj; // eslint-disable-line no-param-reassign
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/swipe-js-iso/swipe.js":
/*!********************************************!*\
  !*** ./node_modules/swipe-js-iso/swipe.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Swipe 2.0.0
 * Brad Birdsall
 * https://github.com/thebird/Swipe
 * Copyright 2013-2015, MIT License
 *
 */

(function(root, factory) {
  if ( true && module.exports) {
    module.exports = factory();
  } else {
    root.Swipe = factory();
  }
})(this, function() {
  'use strict';

  return function Swipe(container, options) {
    // utilities
    var noop = function() {}; // simple no operation function
    var offloadFn = function(fn) {
      setTimeout(fn || noop, 0);
    }; // offload a functions execution

    // check browser capabilities
    var browser = {
      addEventListener: !!window.addEventListener,
      touch:
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch),
      transitions: (function(temp) {
        var props = [
          'transitionProperty',
          'WebkitTransition',
          'MozTransition',
          'OTransition',
          'msTransition'
        ];
        for (var i in props)
          if (temp.style[props[i]] !== undefined) return true;
        return false;
      })(document.createElement('swipe'))
    };

    // quit if no root element
    if (!container) return;
    var element = container.children[0];
    var slides, slidePos, width, length;
    options = options || {};
    var index = parseInt(options.startSlide, 10) || 0;
    var speed = options.speed || 300;
    var widthOfSiblingSlidePreview =
      parseInt(options.widthOfSiblingSlidePreview, 10) || 0;
    var continuous = (options.continuous =
      options.continuous !== undefined ? options.continuous : true);

    function setup() {
      // cache slides
      slides = element.children;
      length = slides.length;

      // set continuous to false if only one slide
      continuous = slides.length < 2 ? false : options.continuous;

      // create an array to store current positions of each slide
      slidePos = new Array(slides.length);

      // determine width of each slide
      width =
        Math.round(
          container.getBoundingClientRect().width || container.offsetWidth
        ) -
        widthOfSiblingSlidePreview * 2;

      element.style.width = slides.length * width + 'px';

      // stack elements
      var pos = slides.length;
      while (pos--) {
        var slide = slides[pos];

        slide.style.width = width + 'px';
        slide.setAttribute('data-index', pos);

        if (browser.transitions) {
          slide.style.left = pos * -width + widthOfSiblingSlidePreview + 'px';
          move(pos, index > pos ? -width : index < pos ? width : 0, 0);
        }
      }

      // reposition elements before and after index
      if (continuous && browser.transitions) {
        move(circle(index - 1), -width, 0);
        move(circle(index + 1), width, 0);
      }

      if (!browser.transitions)
        element.style.left = index * -width + widthOfSiblingSlidePreview + 'px';

      container.style.visibility = 'visible';
    }

    function prev() {
      if (continuous) slide(index - 1);
      else if (index) slide(index - 1);
    }

    function next() {
      if (continuous) slide(index + 1);
      else if (index < slides.length - 1) slide(index + 1);
    }

    function circle(index) {
      // a simple positive modulo using slides.length
      return (slides.length + (index % slides.length)) % slides.length;
    }

    function slide(to, slideSpeed) {
      // do nothing if already on requested slide
      if (index == to) return;

      if (browser.transitions) {
        var direction = Math.abs(index - to) / (index - to); // 1: backward, -1: forward

        // get the actual position of the slide
        if (continuous) {
          var natural_direction = direction;
          direction = -slidePos[circle(to)] / width;

          // if going forward but to < index, use to = slides.length + to
          // if going backward but to > index, use to = -slides.length + to
          if (direction !== natural_direction)
            to = -direction * slides.length + to;
        }

        var diff = Math.abs(index - to) - 1;

        // move all the slides between index and to in the right direction
        while (diff--)
          move(
            circle((to > index ? to : index) - diff - 1),
            width * direction,
            0
          );

        to = circle(to);

        move(index, width * direction, slideSpeed || speed);
        move(to, 0, slideSpeed || speed);

        if (continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place
      } else {
        to = circle(to);
        animate(index * -width, to * -width, slideSpeed || speed);
        //no fallback for a circular continuous if the browser does not accept transitions
      }

      index = to;
      offloadFn(options.callback && options.callback(index, slides[index]));
    }

    function move(index, dist, speed) {
      translate(index, dist, speed);
      slidePos[index] = dist;
    }

    function translate(index, dist, speed) {
      var slide = slides[index];
      var style = slide && slide.style;

      if (!style) return;

      style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration =
        speed + 'ms';

      style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
      style.msTransform = style.MozTransform = style.OTransform =
        'translateX(' + dist + 'px)';
    }

    function animate(from, to, speed) {
      // if not an animation, just reposition
      if (!speed) {
        element.style.left = to + 'px';
        return;
      }

      var start = +new Date();

      var timer = setInterval(function() {
        var timeElap = +new Date() - start;

        if (timeElap > speed) {
          element.style.left = to + 'px';

          if (delay) begin();

          options.transitionEnd &&
            options.transitionEnd.call(event, index, slides[index]);

          clearInterval(timer);
          return;
        }

        element.style.left =
          (to - from) * (Math.floor((timeElap / speed) * 100) / 100) +
          from +
          'px';
      }, 4);
    }

    // setup auto slideshow
    var delay = options.auto || 0;
    var interval;

    function begin() {
      clearTimeout(interval);
      interval = setTimeout(next, delay);
    }

    function stop() {
      delay = 0;
      clearTimeout(interval);
    }

    // setup initial vars
    var start = {};
    var delta = {};
    var isScrolling;

    // setup event capturing
    var events = {
      handleEvent: function(event) {
        switch (event.type) {
          case 'touchstart':
            this.start(event);
            break;
          case 'touchmove':
            this.move(event);
            break;
          case 'touchend':
            offloadFn(this.end(event));
            break;
          case 'webkitTransitionEnd':
          case 'msTransitionEnd':
          case 'oTransitionEnd':
          case 'otransitionend':
          case 'transitionend':
            offloadFn(this.transitionEnd(event));
            break;
          case 'resize':
            offloadFn(setup);
            break;
        }

        if (options.stopPropagation) event.stopPropagation();
      },
      start: function(event) {
        var touches = event.touches[0];

        // measure start values
        start = {
          // get initial touch coords
          x: touches.pageX,
          y: touches.pageY,

          // store time to determine touch duration
          time: +new Date()
        };

        // used for testing first move event
        isScrolling = undefined;

        // reset delta and end measurements
        delta = {};

        // attach touchmove and touchend listeners
        element.addEventListener('touchmove', this, false);
        element.addEventListener('touchend', this, false);
      },
      move: function(event) {
        // ensure swiping with one touch and not pinching
        if (event.touches.length > 1 || (event.scale && event.scale !== 1))
          return;

        if (options.disableScroll) return;

        var touches = event.touches[0];

        // measure change in x and y
        delta = {
          x: touches.pageX - start.x,
          y: touches.pageY - start.y
        };

        // determine if scrolling test has run - one time test
        if (typeof isScrolling == 'undefined') {
          isScrolling = !!(
            isScrolling || Math.abs(delta.x) < Math.abs(delta.y)
          );
        }

        // if user is not trying to scroll vertically
        if (!isScrolling) {
          // prevent native scrolling
          event.preventDefault();

          // stop slideshow
          stop();

          // increase resistance if first or last slide
          if (continuous) {
            // we don't add resistance at the end

            translate(
              circle(index - 1),
              delta.x + slidePos[circle(index - 1)],
              0
            );
            translate(index, delta.x + slidePos[index], 0);
            translate(
              circle(index + 1),
              delta.x + slidePos[circle(index + 1)],
              0
            );
          } else {
            delta.x =
              delta.x /
              ((!index && delta.x > 0) || // if first slide and sliding left
              (index == slides.length - 1 && // or if last slide and sliding right
                delta.x < 0) // and if sliding at all
                ? Math.abs(delta.x) / width + 1 // determine resistance level
                : 1); // no resistance if false

            // translate 1:1
            translate(index - 1, delta.x + slidePos[index - 1], 0);
            translate(index, delta.x + slidePos[index], 0);
            translate(index + 1, delta.x + slidePos[index + 1], 0);
          }
          options.swiping && options.swiping(-delta.x / width);
        }
      },
      end: function(event) {
        // measure duration
        var duration = +new Date() - start.time;

        // determine if slide attempt triggers next/prev slide
        var isValidSlide =
          (Number(duration) < 250 && // if slide duration is less than 250ms
            Math.abs(delta.x) > 20) || // and if slide amt is greater than 20px
          Math.abs(delta.x) > width / 2; // or if slide amt is greater than half the width

        // determine if slide attempt is past start and end
        var isPastBounds =
          (!index && delta.x > 0) || // if first slide and slide amt is greater than 0
          (index == slides.length - 1 && delta.x < 0); // or if last slide and slide amt is less than 0

        if (continuous) isPastBounds = false;

        // determine direction of swipe (true:right, false:left)
        var direction = delta.x < 0;

        // if not scrolling vertically
        if (!isScrolling) {
          if (isValidSlide && !isPastBounds) {
            if (direction) {
              if (continuous) {
                // we need to get the next in this direction in place

                move(circle(index - 1), -width, 0);
                move(circle(index + 2), width, 0);
              } else {
                move(index - 1, -width, 0);
              }

              move(index, slidePos[index] - width, speed);
              move(
                circle(index + 1),
                slidePos[circle(index + 1)] - width,
                speed
              );
              index = circle(index + 1);
            } else {
              if (continuous) {
                // we need to get the next in this direction in place

                move(circle(index + 1), width, 0);
                move(circle(index - 2), -width, 0);
              } else {
                move(index + 1, width, 0);
              }

              move(index, slidePos[index] + width, speed);
              move(
                circle(index - 1),
                slidePos[circle(index - 1)] + width,
                speed
              );
              index = circle(index - 1);
            }

            options.callback && options.callback(index, slides[index]);
          } else {
            if (continuous) {
              move(circle(index - 1), -width, speed);
              move(index, 0, speed);
              move(circle(index + 1), width, speed);
            } else {
              move(index - 1, -width, speed);
              move(index, 0, speed);
              move(index + 1, width, speed);
            }
          }
        }

        // kill touchmove and touchend event listeners until touchstart called again
        element.removeEventListener('touchmove', events, false);
        element.removeEventListener('touchend', events, false);
        element.removeEventListener('touchforcechange', function() {}, false);
      },
      transitionEnd: function(event) {
        if (parseInt(event.target.getAttribute('data-index'), 10) == index) {
          if (delay) begin();

          options.transitionEnd &&
            options.transitionEnd.call(event, index, slides[index]);
        }
      }
    };

    // trigger setup
    setup();

    // start auto slideshow if applicable
    if (delay) begin();

    // add event listeners
    if (browser.addEventListener) {
      // set touchstart event on element
      if (browser.touch) {
        element.addEventListener('touchstart', events, false);
        element.addEventListener('touchforcechange', function() {}, false);
      }

      if (browser.transitions) {
        element.addEventListener('webkitTransitionEnd', events, false);
        element.addEventListener('msTransitionEnd', events, false);
        element.addEventListener('oTransitionEnd', events, false);
        element.addEventListener('otransitionend', events, false);
        element.addEventListener('transitionend', events, false);
      }

      // set resize event on window
      window.addEventListener('resize', events, false);
    } else {
      window.onresize = function() {
        setup();
      }; // to play nice with old IE
    }

    // expose the Swipe API
    return {
      setup: function() {
        setup();
      },
      slide: function(to, speed) {
        // cancel slideshow
        stop();

        slide(to, speed);
      },
      prev: function() {
        // cancel slideshow
        stop();

        prev();
      },
      next: function() {
        // cancel slideshow
        stop();

        next();
      },
      stop: function() {
        // cancel slideshow
        stop();
      },
      getPos: function() {
        // return current index position
        return index;
      },
      getNumSlides: function() {
        // return total number of slides
        return length;
      },
      kill: function() {
        // cancel slideshow
        stop();

        // reset element
        element.style.width = '';
        element.style.left = '';

        // reset slides
        var pos = slides.length;
        while (pos--) {
          var slide = slides[pos];
          slide.style.width = '';
          slide.style.left = '';

          if (browser.transitions) translate(pos, 0, 0);
        }

        // removed event listeners
        if (browser.addEventListener) {
          // remove current event listeners
          element.removeEventListener('touchstart', events, false);
          element.removeEventListener('webkitTransitionEnd', events, false);
          element.removeEventListener('msTransitionEnd', events, false);
          element.removeEventListener('oTransitionEnd', events, false);
          element.removeEventListener('otransitionend', events, false);
          element.removeEventListener('transitionend', events, false);
          window.removeEventListener('resize', events, false);
        } else {
          window.onresize = null;
        }
      }
    };
  };
});


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, files, main, module, scripts, repository, keywords, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"yuso-mobile\",\"version\":\"1.0.0\",\"description\":\"mobile components\",\"files\":[\"dist\",\"lib\",\"es\"],\"main\":\"lib/index.js\",\"module\":\"es/index.js\",\"scripts\":{\"lint\":\"eslint -c ./.eslintrc --fix --ext .js ./src\",\"test\":\"jest --no-cache --config .jest.js\",\"build\":\"yuso-tools run dist && cross-env BABEL_ENV=dist yuso-tools run compile\"},\"repository\":{\"type\":\"git\",\"url\":\"\"},\"keywords\":[\"component\"],\"author\":\"john.gao\",\"license\":\"ISC\",\"devDependencies\":{\"@babel/preset-env\":\"^7.9.5\",\"babel-core\":\"^6.26.0\",\"babel-eslint\":\"^10.1.0\",\"babel-jest\":\"^26.1.0\",\"babel-preset-es2015\":\"^6.24.1\",\"babel-preset-react\":\"^6.24.1\",\"babel-preset-stage-0\":\"^6.24.1\",\"case-sensitive-paths-webpack-plugin\":\"^2.3.0\",\"cross-env\":\"^7.0.2\",\"css-loader\":\"^0.28.11\",\"enzyme\":\"^3.11.0\",\"enzyme-adapter-react-16\":\"^1.15.2\",\"eslint\":\"^6.8.0\",\"eslint-config-airbnb\":\"^18.1.0\",\"eslint-plugin-babel\":\"^5.3.0\",\"eslint-plugin-import\":\"^2.20.2\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-markdown\":\"^1.0.2\",\"eslint-plugin-react\":\"^7.19.0\",\"file-loader\":\"^6.0.0\",\"gulp\":\"^4.0.2\",\"gulp-babel\":\"^8.0.0\",\"gulp-ignore\":\"^3.0.0\",\"gulp-rimraf\":\"^1.0.0\",\"gulp-strip-code\":\"^0.1.4\",\"yuso-tools\":\"^1.0.0\",\"jest\":\"^26.1.0\",\"jest-spec-reporter\":\"^1.0.14\",\"less\":\"^3.12.2\",\"less-plugin-npm-import\":\"^2.1.0\",\"mini-css-extract-plugin\":\"^0.9.0\",\"react\":\"^16.13.1\",\"react-dom\":\"^16.13.1\",\"webpack-bundle-analyzer\":\"^3.8.0\"},\"dependencies\":{\"classnames\":\"^2.2.6\",\"exif-js\":\"^2.3.0\",\"lodash\":\"^4.17.15\",\"qs\":\"^6.9.1\",\"swipe-js-iso\":\"^2.1.5\"}}");

/***/ }),

/***/ "./src sync recursive ^\\.\\/[^_][\\w-]+\\/style\\/index\\.less?$":
/*!********************************************************!*\
  !*** ./src sync ^\.\/[^_][\w-]+\/style\/index\.less?$ ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./accordion/style/index.less": "./src/accordion/style/index.less",
	"./avatar/style/index.less": "./src/avatar/style/index.less",
	"./axis/style/index.less": "./src/axis/style/index.less",
	"./button/style/index.less": "./src/button/style/index.less",
	"./calendar/style/index.less": "./src/calendar/style/index.less",
	"./checkbox/style/index.less": "./src/checkbox/style/index.less",
	"./date-picker/style/index.less": "./src/date-picker/style/index.less",
	"./flex/style/index.less": "./src/flex/style/index.less",
	"./gesture/style/index.less": "./src/gesture/style/index.less",
	"./grade/style/index.less": "./src/grade/style/index.less",
	"./grid/style/index.less": "./src/grid/style/index.less",
	"./hr-modal/style/index.less": "./src/hr-modal/style/index.less",
	"./hr-section/style/index.less": "./src/hr-section/style/index.less",
	"./icon/style/index.less": "./src/icon/style/index.less",
	"./image-picker/style/index.less": "./src/image-picker/style/index.less",
	"./image-viewer/style/index.less": "./src/image-viewer/style/index.less",
	"./input/style/index.less": "./src/input/style/index.less",
	"./list/style/index.less": "./src/list/style/index.less",
	"./loading/style/index.less": "./src/loading/style/index.less",
	"./menu/style/index.less": "./src/menu/style/index.less",
	"./message/style/index.less": "./src/message/style/index.less",
	"./picker/style/index.less": "./src/picker/style/index.less",
	"./pop-layer/style/index.less": "./src/pop-layer/style/index.less",
	"./pull-to-refresh/style/index.less": "./src/pull-to-refresh/style/index.less",
	"./scroller/style/index.less": "./src/scroller/style/index.less",
	"./select-picker/style/index.less": "./src/select-picker/style/index.less",
	"./swipe/style/index.less": "./src/swipe/style/index.less",
	"./switch-item/style/index.less": "./src/switch-item/style/index.less",
	"./switch/style/index.less": "./src/switch/style/index.less",
	"./tabs/style/index.less": "./src/tabs/style/index.less",
	"./textarea/style/index.less": "./src/textarea/style/index.less",
	"./toast/style/index.less": "./src/toast/style/index.less",
	"./upload/style/index.less": "./src/upload/style/index.less"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.\\/[^_][\\w-]+\\/style\\/index\\.less?$";

/***/ }),

/***/ "./src/_utils/animate.js":
/*!*******************************!*\
  !*** ./src/_utils/animate.js ***!
  \*******************************/
/*! exports provided: setTransform, getTransformPropValue, getPxStyle, setPxStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransform", function() { return setTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformPropValue", function() { return getTransformPropValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPxStyle", function() { return getPxStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPxStyle", function() { return setPxStyle; });
function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}
var getTransformPropValue = function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
};
var getPxStyle = function getPxStyle(value) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  var vertical = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  value = vertical ? "0px, ".concat(value).concat(unit, ", 0px") : "".concat(value).concat(unit, ", 0px, 0px");
  return "translate3d(".concat(value, ")");
};
var setPxStyle = function setPxStyle(el, value) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'px';
  var vertical = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var useLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (useLeft) {
    if (vertical) {
      el.style.top = "".concat(value).concat(unit);
    } else {
      el.style.left = "".concat(value).concat(unit);
    }
  } else {
    setTransform(el.style, getPxStyle(value, unit, vertical));
  }
};

/***/ }),

/***/ "./src/_utils/data_util.js":
/*!*********************************!*\
  !*** ./src/_utils/data_util.js ***!
  \*********************************/
/*! exports provided: isEmpty, recurrence, recurrenceValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recurrence", function() { return recurrence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recurrenceValue", function() { return recurrenceValue; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
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

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var isEmpty = function isEmpty(v) {
  if (v && _typeof(v) === 'object') {
    return Object.keys(v).length === 0;
  } else {
    return v === undefined || v === null || v === '';
  }
};
/**
* 递归
* @param {Array} data 数组
* @param {Object} opts 参数
* @param {String} childrenKey 子集的key名
* @param {String} idKey 唯一编号ID
* @param {String} parentKey 父级ID
* @param {String} valueKey 显示ID
* @param {String} labelKey 显示Label
*/

var recurrence = function recurrence() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var idKey = opts.idKey || 'code';
  var nameKey = opts.nameKey || 'name';
  var parentKey = opts.parentKey || 'parentCode';
  var childrenKey = opts.childrenKey || 'children';
  var valueKey = opts.valueKey || 'value';
  var labelKey = opts.labelKey || 'label';
  var dataList = data.map(function (item) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, valueKey, item[idKey]), _defineProperty(_ref, labelKey, item[nameKey]), _defineProperty(_ref, parentKey, item[parentKey]), _ref;
  });

  var __recurrenceList = function __recurrenceList(list) {
    return list.map(function (item) {
      var childList = dataList.filter(function (child) {
        return child[parentKey] === item[valueKey];
      });

      var array = __recurrenceList(childList);

      return array.length > 0 ? _extends({}, item, _defineProperty({
        path: []
      }, childrenKey, array)) : item;
    });
  };

  var result = dataList.filter(function (item) {
    return item[parentKey] == '-1';
  }).map(function (item) {
    return _extends({}, item, {
      path: [item[valueKey]]
    });
  });
  return __recurrenceList(result);
};
/**
 * 根据最后层级的值，递归获取所有层级的值
 * @param {Array} data 数组
 * @param {Any} value 值
 * @param {Object} opts 参数
 * @param {String} idKey 唯一编号ID
 * @param {String} parentKey 父级ID
 */

var recurrenceValue = function recurrenceValue() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var idKey = opts.idKey || 'code';
  var parentKey = opts.parentKey || 'parentCode';
  var result = [];

  var __recurrenceList = function __recurrenceList(list, val) {
    var item = list.find(function (obj) {
      return obj[idKey] === val;
    });
    result.unshift(item[idKey]);

    if (item[parentKey] !== '-1') {
      __recurrenceList(data, item[parentKey]);
    }

    return result;
  };

  return __recurrenceList(data, value);
};

/***/ }),

/***/ "./src/accordion/Panel.js":
/*!********************************!*\
  !*** ./src/accordion/Panel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Panel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PanelContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanelContent */ "./src/accordion/PanelContent.js");
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/index */ "./src/icon/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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






var Panel = /*#__PURE__*/function (_Component) {
  _inherits(Panel, _Component);

  var _super = _createSuper(Panel);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleItemClick", function () {
      var _this$props = _this.props,
          onItemClick = _this$props.onItemClick,
          panelKey = _this$props.panelKey;

      if (typeof onItemClick === 'function') {
        onItemClick(panelKey);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        _this.handleItemClick();
      }
    });

    _this.state = {
      isActive: props.isActive,
      panelHeight: ''
    };
    return _this;
  }

  _createClass(Panel, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isActive !== this.props.isActive) {
        this.setPanelHeight();
      }
    } // shouldComponentUpdate(nextProps) {
    //   return !isEqual(this.props, nextProps);
    // }

  }, {
    key: "setPanelHeight",
    value: function setPanelHeight() {
      var isActive = this.props.isActive;

      if (this.panelContentRef) {
        var panelContentRootRef = this.panelContentRef.rootRef;
        this.setState({
          panelHeight: !isActive ? '0px' : "".concat(panelContentRootRef.scrollHeight, "px")
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          id = _this$props2.id,
          style = _this$props2.style,
          prefixCls = _this$props2.prefixCls,
          title = _this$props2.title,
          children = _this$props2.children,
          isActive = _this$props2.isActive,
          showArrow = _this$props2.showArrow,
          destroyInactivePanel = _this$props2.destroyInactivePanel,
          disabled = _this$props2.disabled,
          accordion = _this$props2.accordion,
          forceRender = _this$props2.forceRender,
          expandIcon = _this$props2.expandIcon,
          extra = _this$props2.extra;
      var titleCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-title"));
      var itemCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-item"), true), _defineProperty(_classNames, "".concat(prefixCls, "-item-active"), isActive), _defineProperty(_classNames, "".concat(prefixCls, "-item-disabled"), disabled), _classNames), className);
      var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "arrow",
        type: "unfold"
      });

      if (showArrow && typeof expandIcon === 'function') {
        icon = expandIcon(this.props);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: itemCls,
        style: style,
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: titleCls,
        onClick: this.handleItemClick,
        role: accordion ? 'tab' : 'button',
        "aria-expanded": "".concat(isActive),
        onKeyPress: this.handleKeyPress
      }, showArrow && icon, title, extra && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PanelContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ref: function ref(el) {
          return _this2.panelContentRef = el;
        },
        prefixCls: prefixCls,
        isActive: isActive,
        panelHeight: this.state.panelHeight,
        destroyInactivePanel: destroyInactivePanel,
        forceRender: forceRender,
        role: accordion ? 'tabpanel' : null
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isActive !== prevState.isActive) {
        return {
          isActive: nextProps.isActive
        };
      }

      return null;
    }
  }]);

  return Panel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Panel, "defaultProps", {
  showArrow: true,
  isActive: false,
  destroyInactivePanel: false,
  onItemClick: function onItemClick() {},
  forceRender: false
});



/***/ }),

/***/ "./src/accordion/PanelContent.js":
/*!***************************************!*\
  !*** ./src/accordion/PanelContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PanelContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}





var PanelContent = /*#__PURE__*/function (_Component) {
  _inherits(PanelContent, _Component);

  var _super = _createSuper(PanelContent);

  function PanelContent() {
    _classCallCheck(this, PanelContent);

    return _super.apply(this, arguments);
  }

  _createClass(PanelContent, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var forceRender = this.props.forceRender;
      return forceRender || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          isActive = _this$props.isActive,
          children = _this$props.children,
          destroyInactivePanel = _this$props.destroyInactivePanel,
          forceRender = _this$props.forceRender,
          role = _this$props.role,
          panelHeight = _this$props.panelHeight;
      this._isActived = forceRender || this._isActived || isActive;
      var contentCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-content"), true), _defineProperty(_classnames, "".concat(prefixCls, "-content-active"), isActive), _defineProperty(_classnames, "".concat(prefixCls, "-content-inactive"), !isActive), _classnames));
      var child = !forceRender && !isActive && destroyInactivePanel ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-content-box")
      }, children);
      var style = {};

      if (panelHeight) {
        style.height = panelHeight;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(el) {
          return _this.rootRef = el;
        },
        style: style,
        className: contentCls,
        role: role
      }, child);
    }
  }]);

  return PanelContent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/accordion/index.js":
/*!********************************!*\
  !*** ./src/accordion/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Panel */ "./src/accordion/Panel.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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







function toArray(activeKey) {
  var currentActiveKey = activeKey;

  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }

  return currentActiveKey.map(function (key) {
    return String(key);
  });
}

var Accordion = /*#__PURE__*/function (_Component) {
  _inherits(Accordion, _Component);

  var _super = _createSuper(Accordion);

  function Accordion(_props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "onClickItem", function (key) {
      var accordion = _this.props.accordion;
      var activeKey = _this.state.activeKey;

      if (accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = _toConsumableArray(activeKey);
        var index = activeKey.indexOf(key);
        var isActive = index > -1;

        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }

      _this.setActiveKey(activeKey);
    });

    _defineProperty(_assertThisInitialized(_this), "getNewChild", function (child, index) {
      if (!child) return null;
      var activeKey = _this.state.activeKey;
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          accordion = _this$props.accordion,
          destroyInactivePanel = _this$props.destroyInactivePanel,
          expandIcon = _this$props.expandIcon; // If there is no key provide, use the panel order as default key

      var key = child.key || String(index);
      var _child$props = child.props,
          header = _child$props.header,
          headerClass = _child$props.headerClass,
          disabled = _child$props.disabled;
      var isActive = false;

      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      var props = {
        key: key,
        panelKey: key,
        header: header,
        headerClass: headerClass,
        isActive: isActive,
        prefixCls: prefixCls,
        destroyInactivePanel: destroyInactivePanel,
        accordion: accordion,
        children: child.props.children,
        onItemClick: disabled ? null : _this.onClickItem,
        expandIcon: expandIcon
      };

      if (typeof child.type === 'string') {
        return child;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, props);
    });

    _defineProperty(_assertThisInitialized(_this), "getItems", function () {
      var children = _this.props.children;
      var childList = Object(react_is__WEBPACK_IMPORTED_MODULE_2__["isFragment"])(children) ? children.props.children : children;
      var newChildren = react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(childList, _this.getNewChild);

      if (Object(react_is__WEBPACK_IMPORTED_MODULE_2__["isFragment"])(children)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, newChildren);
      }

      return newChildren;
    });

    _defineProperty(_assertThisInitialized(_this), "setActiveKey", function (activeKey) {
      var _this$props2 = _this.props,
          accordion = _this$props2.accordion,
          onChange = _this$props2.onChange;

      if (!('activeKey' in _this.props)) {
        _this.setState({
          activeKey: activeKey
        });
      }

      onChange(accordion ? activeKey[0] : activeKey);
    });

    var _activeKey = _props.activeKey,
        defaultActiveKey = _props.defaultActiveKey;
    var currentActiveKey = defaultActiveKey;

    if ('activeKey' in _props) {
      currentActiveKey = _activeKey;
    }

    _this.state = {
      activeKey: toArray(currentActiveKey)
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(this.props, nextProps) || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(this.state, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          className = _this$props3.className,
          style = _this$props3.style,
          accordion = _this$props3.accordion;
      var collapseClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, className, !!className), _classNames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: collapseClassName,
        style: style,
        role: accordion ? 'tablist' : null
      }, this.getItems());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var newState = {};

      if ('activeKey' in nextProps) {
        newState.activeKey = toArray(nextProps.activeKey);
      }

      return newState.activeKey ? newState : null;
    }
  }]);

  return Accordion;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Accordion, "defaultProps", {
  prefixCls: 'wme-accordion',
  onChange: function onChange() {},
  accordion: false,
  destroyInactivePanel: false
});

Accordion.Panel = _Panel__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./src/accordion/style/index.less":
/*!****************************************!*\
  !*** ./src/accordion/style/index.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/avatar/index.js":
/*!*****************************!*\
  !*** ./src/avatar/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * 头像
 * @author john.gao
 */





var Avatar = /*#__PURE__*/function (_React$Component) {
  _inherits(Avatar, _React$Component);

  var _super = _createSuper(Avatar);

  function Avatar(props) {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _super.call(this, props);
    _this.state = {
      src: props.src
    };
    return _this;
  }

  _createClass(Avatar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('src' in nextProps) {
        this.setState({
          src: nextProps.src
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          errSrc = _this$props.errSrc,
          title = _this$props.title,
          className = _this$props.className,
          size = _this$props.size;
      var wrap = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_classnames, "".concat(prefixCls, "-large"), size === 'large'), _classnames));

      var newStyle = _objectSpread({}, style);

      if (typeof size === 'number') {
        newStyle.width = size;
        newStyle.height = size;
        newStyle.fontSize = '1rem';
      }

      var avaTitle = title;

      if (avaTitle) {
        var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;

        if (patrn.exec(avaTitle)) {
          avaTitle = avaTitle.slice(-2);
        } else {
          avaTitle = avaTitle.slice(0, 2);
        }
      }

      var cls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-content"), this.state.src ? "".concat(prefixCls, "-image") : "".concat(prefixCls, "-title"));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: wrap,
        style: newStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: cls
      }, this.state.src ? '' : avaTitle, this.state.src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.src,
        onLoad: function onLoad(e) {
          var width = e.target.clientWidth;
          var height = e.target.clientHeight;

          if (width > height) {
            e.target.style.height = '100%';
          } else {
            e.target.style.width = '100%';
          }
        },
        onError: function onError(e) {
          var url = title ? '' : errSrc;

          _this2.setState({
            src: url
          });
        }
      })));
    }
  }]);

  return Avatar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Avatar, "defaultProps", {
  prefixCls: 'wme-avatar'
});

/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/avatar/style/index.less":
/*!*************************************!*\
  !*** ./src/avatar/style/index.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/axis/index.js":
/*!***************************!*\
  !*** ./src/axis/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Axis; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * 时光轴
 * @author john.gao
 */





var Axis = /*#__PURE__*/function (_React$Component) {
  _inherits(Axis, _React$Component);

  var _super = _createSuper(Axis);

  function Axis() {
    _classCallCheck(this, Axis);

    return _super.apply(this, arguments);
  }

  _createClass(Axis, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          title = _this$props.title,
          extra = _this$props.extra,
          _this$props$data = _this$props.data,
          data = _this$props$data === void 0 ? [] : _this$props$data,
          line = _this$props.line,
          _this$props$lastLine = _this$props.lastLine,
          lastLine = _this$props$lastLine === void 0 ? true : _this$props$lastLine;
      var wrap = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: wrap
      }, (title || extra) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-header"), _defineProperty({}, "".concat(prefixCls, "-header-undeline"), data.length > 0))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, title || ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-header-extra")
      }, extra)), data.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-container")
      }, data.map(function (item, idx) {
        var pointHeight = item.node ? item.node.props.style.height.replace('px', '') : 14;
        var lineHeight = "calc(100% - ".concat(pointHeight, "px)");
        var titleWrap = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-item-center-title"), _defineProperty({}, "".concat(prefixCls, "-item-center-title-right"), item.align === 'right'));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: "".concat(prefixCls, "-").concat(idx),
          className: "".concat(prefixCls, "-item")
        }, line && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-item-node")
        }, item.node ? item.node : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-item-node-point")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null)), idx === data.length - 1 ? lastLine ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-item-node-line"),
          style: {
            top: "".concat(pointHeight, "px"),
            height: lineHeight
          }
        }) : null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-item-node-line"),
          style: {
            top: "".concat(pointHeight, "px"),
            height: lineHeight
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-item-center"),
          style: {
            marginTop: "".concat((pointHeight - 21) / 2, "px")
          }
        }, item.date && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-item-center-date")
        }, item.date), item.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: titleWrap
        }, item.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-item-center-title-extra")
        }, item.extra)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-item-center-content")
        }, item.content)));
      })));
    }
  }]);

  return Axis;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Axis, "defaultProps", {
  prefixCls: 'wme-axis'
});



/***/ }),

/***/ "./src/axis/style/index.less":
/*!***********************************!*\
  !*** ./src/axis/style/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/button/index.js":
/*!*****************************!*\
  !*** ./src/button/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/index */ "./src/icon/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * 按钮
 * @author john.gao
 */






var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, props);
    _this.state = {
      actClass: ''
    };
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          style = _this$props.style,
          onClick = _this$props.onClick,
          className = _this$props.className,
          icon = _this$props.icon,
          title = _this$props.title,
          disabled = _this$props.disabled,
          actClass = _this$props.actClass,
          type = _this$props.type,
          inline = _this$props.inline,
          size = _this$props.size,
          children = _this$props.children,
          restProps = _objectWithoutProperties(_this$props, ["prefixCls", "style", "onClick", "className", "icon", "title", "disabled", "actClass", "type", "inline", "size", "children"]);

      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, this.state.actClass, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-inline"), inline), _defineProperty(_classnames, "".concat(prefixCls, "-primary"), type === 'primary'), _defineProperty(_classnames, "".concat(prefixCls, "-warning"), type === 'warning'), _defineProperty(_classnames, "".concat(prefixCls, "-ghost"), type === 'ghost'), _defineProperty(_classnames, "".concat(prefixCls, "-link"), type === 'link'), _defineProperty(_classnames, "".concat(prefixCls, "-search"), type === 'search'), _defineProperty(_classnames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _classnames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({
        style: style,
        className: wrapCls,
        onClick: disabled ? null : function (e) {
          return onClick && onClick(e);
        },
        onTouchStart: this.handleTouchStart.bind(this),
        onTouchEnd: this.handleTouchEnd.bind(this)
      }, restProps), title || children);
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart() {
      var actClass = this.props.actClass;
      if (!actClass) return;
      this.setState(function () {
        return {
          actClass: actClass
        };
      });
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      var actClass = this.props.actClass;
      if (!actClass) return;
      this.setState(function () {
        return {
          actClass: ''
        };
      });
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Button, "defaultProps", {
  prefixCls: 'wme-button',
  size: 'large',
  type: ''
});



/***/ }),

/***/ "./src/button/style/index.less":
/*!*************************************!*\
  !*** ./src/button/style/index.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calendar/index.js":
/*!*******************************!*\
  !*** ./src/calendar/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calendar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _checkbox_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checkbox/index */ "./src/checkbox/index.js");
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon/index */ "./src/icon/index.js");
/* harmony import */ var _list_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../list/index */ "./src/list/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * 日历
 * @author david.dai
 */









var Calendar = /*#__PURE__*/function (_React$Component) {
  _inherits(Calendar, _React$Component);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this, props);
    _this.state = {
      currentDate: moment__WEBPACK_IMPORTED_MODULE_2___default()()
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;
      this.valueChange(value);
    }
  }, {
    key: "valueChange",
    value: function valueChange(value) {
      var _this2 = this;

      var currentDate = value ? moment__WEBPACK_IMPORTED_MODULE_2___default()(value) : moment__WEBPACK_IMPORTED_MODULE_2___default()();
      this.setState({
        currentDate: currentDate
      }, function () {
        var days = _this2.getDaysData();

        _this2.setState({
          days: days
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.value && (!prevProps.value || moment__WEBPACK_IMPORTED_MODULE_2___default()(prevProps.value).valueOf() != moment__WEBPACK_IMPORTED_MODULE_2___default()(this.props.value).valueOf())) {
        this.valueChange(this.props.value);
      }
    }
    /**
     * 产生数组
     */

  }, {
    key: "rangeArr",
    value: function rangeArr(n) {
      return Array.apply(null, {
        length: n
      }).map(function (_, n) {
        return n;
      });
    }
    /**
     * 返回当月第一天周几
     */

  }, {
    key: "getFirstDayOfMonth",
    value: function getFirstDayOfMonth(date) {
      return date.startOf('month').day();
    }
    /**
     * 返回上月最后几天
     */

  }, {
    key: "getPrevMonthLastDays",
    value: function getPrevMonthLastDays(date, amount) {
      if (amount <= 0) return [];
      var temp = new Date(date.valueOf());
      temp.setDate(0);
      var lastDay = temp.getDate();
      return this.rangeArr(amount).map(function (_, index) {
        return lastDay - (amount - index - 1);
      });
    }
    /**
     * 返回当月日期数组
     */

  }, {
    key: "getMonthDays",
    value: function getMonthDays(date) {
      var days = date.endOf('month').date();
      return this.rangeArr(days).map(function (_, index) {
        return index + 1;
      });
    }
    /**
     * 返回星期
     */

  }, {
    key: "getWeek",
    value: function getWeek(_ref) {
      var text = _ref.text,
          type = _ref.type;
      var date = this.getFormateDate(text, type);
      return this.props.week[moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format('E') - 1];
    }
    /**
     * 生成多维数组
     */

  }, {
    key: "toNestedArr",
    value: function toNestedArr(days) {
      return this.rangeArr(days.length / 7).map(function (_, index) {
        var start = index * 7;
        return days.slice(start, start + 7);
      });
    }
    /**
     * 返回当月面板日历数据
     */

  }, {
    key: "getDaysData",
    value: function getDaysData() {
      var onlyCurrentMonth = this.props.onlyCurrentMonth;
      var currentDate = this.state.currentDate;
      currentDate = currentDate.clone(); // 获取当月第一天

      var firstDay = this.getFirstDayOfMonth(currentDate); // 根据当月第一天计算当月中上个月显示几天

      var prevMonthDays = this.getPrevMonthLastDays(currentDate, firstDay - 1).map(function (day) {
        return {
          text: !onlyCurrentMonth && day,
          type: 'prev'
        };
      }); // 获取本月多少天

      var currentMonthDays = this.getMonthDays(currentDate).map(function (day) {
        return {
          text: day,
          type: 'current'
        };
      });
      var days = [].concat(_toConsumableArray(prevMonthDays), _toConsumableArray(currentMonthDays)); //下月天数=42-上月-当月

      var nextNum = 42 - days.length;

      if (!!onlyCurrentMonth && nextNum > 6) {
        nextNum = nextNum - 7;
      }

      var nextMonthDays = this.rangeArr(nextNum).map(function (_, index) {
        return {
          text: !onlyCurrentMonth && index + 1,
          type: 'next'
        };
      }); // 连起来共多少天

      days = days.concat(nextMonthDays);
      return days;
    }
    /**
     * 返回格式化日期
     */

  }, {
    key: "getFormateDate",
    value: function getFormateDate(day, type) {
      if (!day || ['prev', 'current', 'next'].indexOf(type) === -1) {
        return;
      }

      var currentDate = this.state.currentDate;
      var prefix;

      if (type === 'prev') {
        prefix = moment__WEBPACK_IMPORTED_MODULE_2___default()(currentDate).date(0).format('YYYY-MM');
      } else if (type === 'next') {
        prefix = moment__WEBPACK_IMPORTED_MODULE_2___default()(currentDate).date(moment__WEBPACK_IMPORTED_MODULE_2___default()(currentDate).endOf('month').date() + 1).format('YYYY-MM');
      } else {
        prefix = moment__WEBPACK_IMPORTED_MODULE_2___default()(currentDate).format('YYYY-MM');
      }

      day = "00".concat(day).slice(-2);
      return "".concat(prefix, "-").concat(day);
    }
    /**
     * 点击单元格
     */

  }, {
    key: "clickCell",
    value: function clickCell(_ref2) {
      var text = _ref2.text,
          type = _ref2.type;
      var _this$props = this.props,
          onSelect = _this$props.onSelect,
          onClick = _this$props.onClick,
          _this$props$selectedV = _this$props.selectedValue,
          selectedValue = _this$props$selectedV === void 0 ? [] : _this$props$selectedV,
          mode = _this$props.mode,
          view = _this$props.view;
      var formatValue = this.getFormateDate(text, type);
      var value = moment__WEBPACK_IMPORTED_MODULE_2___default()(formatValue);
      onClick && onClick(value);
      if (mode !== 'edit') return;

      var tempSelectedValue = _toConsumableArray(selectedValue);

      var curIndex = tempSelectedValue.indexOf(formatValue);

      if (curIndex > -1) {
        tempSelectedValue.splice(curIndex, 1);
      } else {
        tempSelectedValue.push(formatValue);
      }

      onSelect && onSelect(tempSelectedValue, value);
    }
    /**
     * 返回单元格样式
     */

  }, {
    key: "getCellClass",
    value: function getCellClass(cell, isDisabled, prefixCls) {
      var _classnames;

      return classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-in-view"), cell.type === 'current'), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), isDisabled), _defineProperty(_classnames, "".concat(prefixCls, "-selected"), this.isSelected(cell)), _defineProperty(_classnames, "".concat(prefixCls, "-current"), this.isCurrentDay(cell)), _classnames));
    }
    /**
     * 是否已选中
     */

  }, {
    key: "isSelected",
    value: function isSelected(_ref3) {
      var text = _ref3.text,
          type = _ref3.type;
      var _this$props$selectedV2 = this.props.selectedValue,
          selectedValue = _this$props$selectedV2 === void 0 ? [] : _this$props$selectedV2;
      var cur = this.getFormateDate(text, type);
      return selectedValue.some(function (item) {
        return item === cur;
      });
    }
    /**
     * 是否为当前日期
     */

  }, {
    key: "isCurrentDay",
    value: function isCurrentDay(_ref4) {
      var text = _ref4.text,
          type = _ref4.type;
      var currentDate = this.state.currentDate;
      return currentDate.format('YYYY-MM-DD') === this.getFormateDate(text, type);
    }
    /**
     * 渲染单元格
     */

  }, {
    key: "renderCell",
    value: function renderCell(_ref5) {
      var text = _ref5.text,
          type = _ref5.type;
      var _this$props2 = this.props,
          dateCellRender = _this$props2.dateCellRender,
          prefixCls = _this$props2.prefixCls;
      var cell;

      if (dateCellRender) {
        cell = dateCellRender(moment__WEBPACK_IMPORTED_MODULE_2___default()(this.getFormateDate(text, type)));
      }

      return cell || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-grid-cell-inner")
      }, text);
    }
    /**
     * 渲染星期
     */

  }, {
    key: "renderWeek",
    value: function renderWeek() {
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          week = _this$props3.week;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "".concat(prefixCls, "-week")
      }, week.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          className: "".concat(prefixCls, "-week-").concat(index),
          key: "week-li-".concat(index)
        }, item);
      }));
    }
    /**
     * 渲染网格日历
     */

  }, {
    key: "renderGrid",
    value: function renderGrid() {
      var _this3 = this;

      var _this$state$days = this.state.days,
          days = _this$state$days === void 0 ? [] : _this$state$days;
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          disabledDate = _this$props4.disabledDate,
          mode = _this$props4.mode;
      if (!days.length) return null;
      var gridData = this.toNestedArr(days);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        cellSpacing: "0",
        className: "".concat(prefixCls, "-grid")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, this.renderWeek()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, gridData.map(function (rows, rowIndex) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: "row-".concat(rowIndex)
        }, rows.map(function (col, colIndex) {
          var isDisabled = false;

          if (mode === 'edit' && disabledDate) {
            isDisabled = !!disabledDate(moment__WEBPACK_IMPORTED_MODULE_2___default()(_this3.getFormateDate(col.text, col.type)));
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
            onClick: function onClick() {
              col.text && !isDisabled && _this3.clickCell(col);
            },
            key: "".concat(rowIndex, "-").concat(colIndex),
            className: _this3.getCellClass(col, isDisabled, "".concat(prefixCls, "-grid-cell"))
          }, !!col.text && _this3.renderCell(col, isDisabled));
        }));
      })));
    }
    /**
     * 切换月份
     */

  }, {
    key: "switchMonth",
    value: function switchMonth(i) {
      var onChange = this.props.onChange;
      var currentDate = this.state.currentDate;
      var value = currentDate.clone().add('month', i);
      onChange && onChange(value);
    }
    /**
     * 渲染日历头部
     */

  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this4 = this;

      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          Left = _this$props5.Left,
          Right = _this$props5.Right,
          headerRender = _this$props5.headerRender,
          onChange = _this$props5.onChange,
          view = _this$props5.view,
          mode = _this$props5.mode;
      var currentDate = this.state.currentDate;
      return headerRender ? headerRender({
        value: currentDate,
        view: view,
        mode: mode,
        onChange: onChange
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, Left, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "prev-btn",
        onClick: function onClick() {
          _this4.switchMonth(-1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "return"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "current-month"
      }, moment__WEBPACK_IMPORTED_MODULE_2___default()(currentDate).format('YYYY-MM')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "next-btn",
        onClick: function onClick() {
          _this4.switchMonth(1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "enter"
      }))), Right);
    }
    /**
     * 渲染列表日历
     */

  }, {
    key: "renderList",
    value: function renderList() {
      var _this5 = this;

      var _this$state$days2 = this.state.days,
          days = _this$state$days2 === void 0 ? [] : _this$state$days2;
      var _this$props6 = this.props,
          prefixCls = _this$props6.prefixCls,
          mode = _this$props6.mode,
          dateCellRender = _this$props6.dateCellRender,
          disabledDate = _this$props6.disabledDate;
      if (!days.length) return null;
      var listData = days.filter(function (item) {
        return item.type === 'current';
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
        direction: "column",
        className: "".concat(prefixCls, "-list")
      }, listData.map(function (cell, index) {
        var isDisabled = false;

        if (mode === 'edit' && disabledDate) {
          isDisabled = !!disabledDate(moment__WEBPACK_IMPORTED_MODULE_2___default()(_this5.getFormateDate(cell.text, cell.type)));
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_index__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
          key: cell.text,
          divider: true,
          style: {
            textAlign: 'center'
          },
          onClick: function onClick() {
            !isDisabled && _this5.clickCell(cell);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _this5.getCellClass(cell, isDisabled, "".concat(prefixCls, "-list-item"))
        }, mode === 'edit' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-list-item-check")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkbox_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
          disabled: isDisabled,
          value: _this5.isSelected(cell),
          onChange: function onChange() {
            !isDisabled && _this5.clickCell(cell);
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-list-item-day")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "day-text"
        }, cell.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "day-week"
        }, _this5.getWeek(cell))), dateCellRender && dateCellRender(moment__WEBPACK_IMPORTED_MODULE_2___default()(_this5.getFormateDate(cell.text, cell.type)))));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          prefixCls = _this$props7.prefixCls,
          className = _this$props7.className,
          zIndex = _this$props7.zIndex,
          view = _this$props7.view;
      var currentDate = this.state.currentDate;
      if (!currentDate) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls), className),
        style: {
          zIndex: zIndex
        }
      }, this.renderTitle(), view === 'grid' && this.renderGrid(), view === 'list' && this.renderList());
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Calendar, "defaultProps", {
  prefixCls: 'wme-calendar',
  zIndex: 2,
  week: ['一', '二', '三', '四', '五', '六', '日'],
  onlyCurrentMonth: true,
  //只显示当月日期
  selectedValue: [],
  //选中的日期
  view: 'grid',
  //显示方式 grid/list
  mode: 'view' //模式 view/edit

});



/***/ }),

/***/ "./src/calendar/style/index.less":
/*!***************************************!*\
  !*** ./src/calendar/style/index.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/checkbox/index.js":
/*!*******************************!*\
  !*** ./src/checkbox/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * 复选框
 * @author john.gao
 */





var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {
      value: props.value || props.defaultValue
    };
    return _this;
  }

  _createClass(Input, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var disabled = this.props.disabled;

      if (disabled) {
        return;
      }

      var value = e.target.checked;
      var onChange = this.props.onChange;

      if (!('value' in this.props)) {
        this.setState({
          value: value
        });
      }

      if (onChange) {
        onChange(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          size = _this$props.size,
          onChange = _this$props.onChange,
          style = _this$props.style,
          title = _this$props.title,
          disabled = _this$props.disabled,
          color = _this$props.color,
          restProps = _objectWithoutProperties(_this$props, ["prefixCls", "className", "size", "onChange", "style", "title", "disabled", "color"]);

      var value = this.state.value;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-checked"), value), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_classnames, "".concat(prefixCls, "-mini"), size === 'mini'), _classnames));
      var innerCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-inner"), _defineProperty({}, "".concat(prefixCls, "-inner-blue"), color === 'blue'));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: wrapCls,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: innerCls
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        type: "checkbox",
        checked: !!value
      }), title)));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Input, "defaultProps", {
  prefixCls: 'wme-checkbox',
  size: 'large'
});



/***/ }),

/***/ "./src/checkbox/style/index.less":
/*!***************************************!*\
  !*** ./src/checkbox/style/index.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/date-picker/MutilDatePicker.js":
/*!********************************************!*\
  !*** ./src/date-picker/MutilDatePicker.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MutilDatePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _picker_MultiPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../picker/MultiPicker */ "./src/picker/MultiPicker.js");
/* harmony import */ var _picker_Picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../picker/Picker */ "./src/picker/Picker.js");
/* harmony import */ var _locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locale-provider/HrContext */ "./src/locale-provider/HrContext.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * MutilDatePicker
 * @author john.gao
 */





 // 递归筛选树

function arrayRecurrenceFilter(dateList, filterFn, options) {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  var children = dateList || [];
  var result = [];
  var level = 0;
  var foundItem;

  do {
    var foundItem = children.filter(function (item) {
      return filterFn(item, level);
    })[0];

    if (!foundItem) {
      break;
    }

    result.push(foundItem);
    children = foundItem[options.childrenKeyName] || [];
    level += 1;
  } while (children.length > 0);

  return result;
}

var MutilDatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(MutilDatePicker, _React$Component);

  var _super = _createSuper(MutilDatePicker);

  function MutilDatePicker(props) {
    var _this;

    _classCallCheck(this, MutilDatePicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setCasecadeScrollValue", function (v) {
      if (v && _this.scrollDateValue) {
        var length = _this.scrollDateValue.length;

        if (length === v.length && _this.scrollDateValue[length - 1] === v[length - 1]) {
          return;
        }
      }

      _this.scrollDateValue = v;
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (v, i, cascade) {
      _this.setScrollValue(v, cascade);

      if (_this.props.onChange) {
        _this.props.onChange(v, i);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCasecadeValueChange", function (value, index) {
      var cols = _this.props.cols;
      var children = arrayRecurrenceFilter(_this.props.dateList, function (c, level) {
        return level <= index && c.value === value[level];
      });
      var mData = children[index];
      var i;

      for (i = index + 1; mData && mData.children && mData.children.length && i < cols; i++) {
        mData = mData.children[0];
        value[i] = mData.value;
      }

      value.length = i;

      if (!('value' in _this.props)) {
        var timeV = _this.scrollTimeValue ? _this.scrollTimeValue : _this.getDefaultTimeValue();

        _this.setState({
          value: [].concat(_toConsumableArray(value), _toConsumableArray(timeV))
        });
      }

      _this.onChange(value, index, true);
    });

    _this.state = {
      value: _this.getValue()
    };
    _this.scrollDateValue = null;
    _this.scrollTimeValue = null;
    return _this;
  }

  _createClass(MutilDatePicker, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          // TODO 接收新值
          value: this.getValue()
        });
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var value = this.props.value || this.props.defaultValue;

      if (!value || !value.length) {
        value = [].concat(_toConsumableArray(this.getDefaultDateValue()), _toConsumableArray(this.getDefaultTimeValue()));
      }

      return value;
    }
  }, {
    key: "getDefaultDateValue",
    value: function getDefaultDateValue() {
      var date = new Date();
      return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    }
  }, {
    key: "getDefaultTimeValue",
    value: function getDefaultTimeValue() {
      var date = new Date();
      return [date.getHours(), date.getMinutes()];
    }
  }, {
    key: "setScrollValue",
    value: function setScrollValue(v, cascade) {
      if (cascade) {
        this.scrollDateValue = v;
      } else {
        this.scrollTimeValue = v;
      }
    }
  }, {
    key: "onValueChange",
    value: function onValueChange(value, index) {
      if (!('value' in this.props)) {
        var mValue = this.props.value || this.props.defaultValue;
        var dateV = this.scrollDateValue ? this.scrollDateValue : mValue ? mValue.slice(0, 3) : this.getDefaultDateValue();
        this.setState({
          value: [].concat(_toConsumableArray(dateV), _toConsumableArray(value))
        });
      }

      this.onChange(value, index, false);
    } // 获取普通列

  }, {
    key: "getPickerCol",
    value: function getPickerCol() {
      var timeList = this.props.timeList;
      return timeList.map(function (col, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picker_Picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: index,
          style: {
            flex: 1
          }
        }, col.map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picker_Picker__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
            key: item.value,
            value: item.value
          }, item.label);
        }));
      });
    } // 获取级联列

  }, {
    key: "getCascadeCols",
    value: function getCascadeCols() {
      var _this$props = this.props,
          dateList = _this$props.dateList,
          cols = _this$props.cols;
      var value = this.state.value;
      var childrenTree = arrayRecurrenceFilter(dateList, function (c, level) {
        return c.value === value[level];
      }).map(function (c) {
        return c.children;
      });
      var needPad = cols - childrenTree.length;

      if (needPad > 0) {
        for (var i = 0; i < needPad; i++) {
          childrenTree.push([]);
        }
      }

      childrenTree.length = cols - 1;
      childrenTree.unshift(dateList);
      return childrenTree.map(function () {
        var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var level = arguments.length > 1 ? arguments[1] : undefined;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picker_Picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: level,
          style: {
            flex: 1
          }
        }, children.map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picker_Picker__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
            value: item.value,
            key: item.value
          }, item.label);
        }));
      });
    }
  }, {
    key: "onOk",
    value: function onOk(e) {
      var v;

      if (this.scrollDateValue !== null && this.scrollTimeValue !== null) {
        v = [].concat(_toConsumableArray(this.scrollDateValue), _toConsumableArray(this.scrollTimeValue));
      } else {
        v = this.state.value;
      }

      if (this.props.onOk) {
        this.props.onOk(v);
      }

      e.preventDefault();
    }
  }, {
    key: "onCancel",
    value: function onCancel(e) {
      if (this.props.onCancel) {
        this.props.onCancel();
      }

      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          title = _this$props2.title,
          okText = _this$props2.okText,
          cancelText = _this$props2.cancelText,
          timeList = _this$props2.timeList,
          cascade = _this$props2.cascade;
      var value = this.state.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_3__["Consumer"], null, function (_ref) {
        var DatePicker = _ref.DatePicker;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-action")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-action-cancel"),
          onClick: function onClick(e) {
            return _this2.onCancel(e);
          }
        }, cancelText || DatePicker.cancel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-action-title")
        }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-action-ok"),
          onClick: function onClick(e) {
            return _this2.onOk(e);
          }
        }, okText || DatePicker.ok)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picker_MultiPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
          style: {
            flexGrow: 3
          },
          cascade: true,
          selectedValue: value ? [value[0], value[1], value[2]] : [],
          onValueChange: function onValueChange(v, i) {
            return _this2.onCasecadeValueChange(v, i);
          },
          onScrollChange: function onScrollChange(v) {
            return _this2.setCasecadeScrollValue(v);
          }
        }, _this2.getCascadeCols()), timeList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picker_MultiPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
          style: {
            flexGrow: 2
          },
          selectedValue: value ? [value[3], value[4]] : [],
          onValueChange: function onValueChange(v, i) {
            return _this2.onValueChange(v, i);
          },
          onScrollChange: function onScrollChange(v) {
            return _this2.setScrollValue(v);
          }
        }, _this2.getPickerCol())));
      });
    }
  }]);

  return MutilDatePicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(MutilDatePicker, "defaultProps", {
  prefixCls: 'wme-picker',
  cols: 3,
  // 列
  cascade: false,
  // 是否级联
  title: '',
  // 标题
  disabled: false,
  // 是否禁用
  onScrollChange: function onScrollChange() {},
  onChange: function onChange(v, i) {}
});



/***/ }),

/***/ "./src/date-picker/index.js":
/*!**********************************!*\
  !*** ./src/date-picker/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _picker_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../picker/index */ "./src/picker/index.js");
/* harmony import */ var _MutilDatePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MutilDatePicker */ "./src/date-picker/MutilDatePicker.js");
/* harmony import */ var _pop_layer_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pop-layer/index */ "./src/pop-layer/index.js");
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon/index */ "./src/icon/index.js");
/* harmony import */ var _utils_data_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_utils/data_util */ "./src/_utils/data_util.js");
/* harmony import */ var _locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../locale-provider/HrContext */ "./src/locale-provider/HrContext.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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











var DatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);
    _this.yearMonthList = _this.getYearMonthList();
    _this.dateList = _this.getDateList();
    _this.timeList = _this.getTimeList();
    _this.secondList = _this.getSecondList();
    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(DatePicker, [{
    key: "getValue",
    value: function getValue(value) {
      var type = this.props.type;

      if (typeof value === 'string' && !!value) {
        var date = new Date();

        try {
          switch (type) {
            case 'yyyy/MM/dd HH:mm':
              date = new Date(this.format(new Date(value.replace(/\-/g, '/')), type));
              value = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()];
              break;

            case 'yyyy/MM/dd':
              date = new Date(this.format(new Date(value.replace(/\-/g, '/')), type));
              value = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
              break;

            case 'yyyy/MM':
              date = new Date(this.format(new Date(value.replace(/\-/g, '/')), type));
              value = [date.getFullYear(), date.getMonth() + 1];
              break;

            case 'HH:mm:ss':
              date = moment__WEBPACK_IMPORTED_MODULE_2___default()(value, type);
              if (date.isValid()) value = date.format(type);
              value = [parseInt(value.split(':')[0]), parseInt(value.split(':')[1]), parseInt(value.split(':')[2])];
              break;

            case 'HH:mm':
              date = moment__WEBPACK_IMPORTED_MODULE_2___default()(value, type);
              if (date.isValid()) value = date.format(type);
              value = [parseInt(value.split(':')[0]), parseInt(value.split(':')[1])];
              break;

            default:
              break;
          }
        } catch (e) {
          console.log(e);
        }
      }

      return value;
    }
  }, {
    key: "_getContent",
    value: function _getContent() {
      var _this2 = this;

      var _this$props = this.props,
          type = _this$props.type,
          _onOk = _this$props.onOk,
          _onCancel = _this$props.onCancel,
          pickerTitle = _this$props.pickerTitle,
          data = _this$props.data,
          fn = _this$props.fn;

      if (!this.state.visible) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_8__["Consumer"], null, function (_ref) {
        var DatePicker = _ref.DatePicker;
        document.activeElement.blur();
        fn && fn();

        var value = _this2.getValue(_this2.props.value);

        var _pickerTitle = pickerTitle || DatePicker.pickerTitle;

        var content;
        var date = new Date();
        var defaultDateV = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
        var defaultYearMonthV = [date.getFullYear(), date.getMonth() + 1];
        var defaultTimeV = [date.getHours(), date.getMinutes()];
        var defaultSecondV = [date.getHours(), date.getMinutes(), date.getSeconds()];

        switch (type) {
          case 'yyyy/MM/dd HH:mm':
            content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MutilDatePicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
              title: _pickerTitle,
              defaultValue: value || defaultDateV.concat(defaultTimeV),
              cascade: true,
              dateList: _this2.dateList,
              timeList: _this2.timeList,
              onOk: function onOk(value) {
                _this2.setState({
                  visible: false
                });

                if (_onOk) {
                  _onOk(value);
                }
              },
              onCancel: function onCancel() {
                _this2.setState({
                  visible: false
                });

                if (_onCancel) {
                  _onCancel();
                }
              }
            });
            break;

          case 'yyyy/MM/dd':
            content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picker_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
              title: _pickerTitle,
              defaultValue: value || defaultDateV,
              cascade: true,
              data: _this2.dateList,
              onOk: function onOk(value) {
                _this2.setState({
                  visible: false
                });

                if (_onOk) {
                  _onOk(value);
                }
              },
              onCancel: function onCancel() {
                _this2.setState({
                  visible: false
                });

                if (_onCancel) {
                  _onCancel();
                }
              }
            });
            break;

          case 'yyyy/MM':
            content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picker_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
              title: _pickerTitle,
              defaultValue: value || defaultYearMonthV,
              data: _this2.yearMonthList,
              onOk: function onOk(value) {
                _this2.setState({
                  visible: false
                });

                if (_onOk) {
                  _onOk(value);
                }
              },
              onCancel: function onCancel() {
                _this2.setState({
                  visible: false
                });

                if (_onCancel) {
                  _onCancel();
                }
              }
            });
            break;

          case 'HH:mm:ss':
            content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picker_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
              title: _pickerTitle,
              defaultValue: value || defaultSecondV,
              data: _this2.secondList,
              onOk: function onOk(value) {
                _this2.setState({
                  visible: false
                });

                if (_onOk) {
                  _onOk(value);
                }
              },
              onCancel: function onCancel() {
                _this2.setState({
                  visible: false
                });

                if (_onCancel) {
                  _onCancel();
                }
              }
            });
            break;

          case 'HH:mm':
            content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picker_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
              title: _pickerTitle,
              defaultValue: value || defaultTimeV,
              data: _this2.timeList,
              onOk: function onOk(value) {
                _this2.setState({
                  visible: false
                });

                if (_onOk) {
                  _onOk(value);
                }
              },
              onCancel: function onCancel(value) {
                _this2.setState({
                  visible: false
                });

                if (_onCancel) {
                  _onCancel();
                }
              }
            });
            break;

          default:
            content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picker_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
              title: _pickerTitle,
              value: value,
              data: data,
              onOk: function onOk(value) {
                _this2.setState({
                  visible: false
                });

                if (_onOk) {
                  _onOk(value);
                }
              },
              onCancel: function onCancel() {
                _this2.setState({
                  visible: false
                });

                if (_onCancel) {
                  _onCancel();
                }
              }
            });
            break;
        }

        return content;
      });
    }
  }, {
    key: "getTimeList",
    value: function getTimeList() {
      var h = 0;
      var m = 0;
      return [Array.from({
        length: 24
      }, function () {
        var value = h++;
        return {
          value: value,
          label: value < 10 ? "0".concat(value) : value
        };
      }), Array.from({
        length: 60
      }, function () {
        var value = m++;
        return {
          value: value,
          label: value < 10 ? "0".concat(value) : value
        };
      })];
    }
  }, {
    key: "getSecondList",
    value: function getSecondList() {
      var h = 0;
      var m = 0;
      var s = 0;
      return [Array.from({
        length: 24
      }, function () {
        var value = h++;
        return {
          value: value,
          label: value < 10 ? "0".concat(value) : value
        };
      }), Array.from({
        length: 60
      }, function () {
        var value = m++;
        return {
          value: value,
          label: value < 10 ? "0".concat(value) : value
        };
      }), Array.from({
        length: 60
      }, function () {
        var value = s++;
        return {
          value: value,
          label: value < 10 ? "0".concat(value) : value
        };
      })];
    }
  }, {
    key: "getYearMonthList",
    value: function getYearMonthList() {
      var yearStep = this.props.yearStep;
      var year = new Date().getFullYear();
      var array = Array(yearStep * 2 + 1).fill('');
      var yearList = array.map(function (item, i) {
        item = year - yearStep + i;
        return {
          value: item,
          label: item
        };
      });
      return [yearList, this.getMonthList()];
    }
  }, {
    key: "getDateList",
    value: function getDateList() {
      var _this3 = this;

      var yearStep = this.props.yearStep;
      var year = new Date().getFullYear();
      var array = Array(yearStep * 2 + 1).fill('');
      return array.map(function (item, i) {
        item = year - yearStep + i;
        return {
          value: item,
          label: item,
          children: _this3.getMonthAndDayList(item)
        };
      });
    }
  }, {
    key: "getMonthList",
    value: function getMonthList() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (item) {
        return {
          value: item,
          label: item
        };
      });
    }
  }, {
    key: "getMonthAndDayList",
    value: function getMonthAndDayList(year) {
      var _this4 = this;

      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (item) {
        return {
          value: item,
          label: item,
          children: _this4.getDayList(year, item)
        };
      });
    }
  }, {
    key: "getDayList",
    value: function getDayList(year, month) {
      var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        days[1]++;
      }

      var array = [];

      for (var i = 1; i <= days[parseInt(month) - 1]; i++) {
        array.push(i);
      }

      return array.map(function (item) {
        return {
          value: item,
          label: item
        };
      });
    }
    /**
     * 递归获取值数组
     * @param  {array} list   树型数组
     * @param  {number} level 层级
     * @return {Array}        数组
     */

  }, {
    key: "recurrenceFilter",
    value: function recurrenceFilter(list, level) {
      var value = this.getValue(this.props.value);
      if (!value || !value[level]) return;

      if (list) {
        var obj = list.find(function (item) {
          return item.value === value[level];
        });

        if (obj) {
          this.labels.push(obj.label);

          if (obj.children) {
            this.recurrenceFilter(obj.children, ++level);
          }
        }
      }
    }
  }, {
    key: "arrayFilter",
    value: function arrayFilter(list, value) {
      if (!list) return null;
      var labels = [];
      list.map(function (array, index) {
        var item = array.find(function (item) {
          return value && item.value === value[index];
        });
        if (item) labels.push(item.label);
      });
      return labels;
    }
  }, {
    key: "format",
    value: function format(d, _format) {
      var o = {
        'M+': d.getMonth() + 1,
        // month
        'd+': d.getDate(),
        // day
        'H+': d.getHours(),
        // hour
        'm+': d.getMinutes(),
        // minute
        's+': d.getSeconds(),
        // second
        'q+': Math.floor((d.getMonth() + 3) / 3),
        // quarter
        S: d.getMilliseconds() // millisecond

      };

      if (/(y+)/.test(_format)) {
        _format = _format.replace(RegExp.$1, "".concat(d.getFullYear()).substr(4 - RegExp.$1.length));
      }

      for (var k in o) {
        if (new RegExp("(".concat(k, ")")).test(_format)) {
          _format = _format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : "00".concat(o[k]).substr("".concat(o[k]).length));
        }
      }

      return _format;
    }
  }, {
    key: "resetValue",
    value: function resetValue() {
      var onReset = this.props.onReset;
      onReset && onReset('');
    }
    /**
     * 渲染组件后缀图标
     */

  }, {
    key: "renderSuffixIcon",
    value: function renderSuffixIcon() {
      var _classnames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly,
          arrow = _this$props2.arrow,
          onOk = _this$props2.onOk,
          onReset = _this$props2.onReset;
      var value = this.getValue(this.props.value); // 箭头方向

      var arrowCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-arrow"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-arrow-horizontal"), arrow === 'horizontal'), _defineProperty(_classnames, "".concat(prefixCls, "-arrow-vertical"), arrow === 'down' || arrow === 'up'), _defineProperty(_classnames, "".concat(prefixCls, "-arrow-vertical-up"), arrow === 'up'), _classnames));
      var needClose = !disabled && !readOnly && close && value && value.length > 0;

      if (needClose) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "".concat(prefixCls, "-close"),
          type: "delete_fill",
          onClick: function onClick(e) {
            e.stopPropagation();
            onReset && onReset('');
            onOk && onOk('');
          }
        });
      }

      return !disabled && !readOnly ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "time",
        size: "small",
        className: arrowCls
      }) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          className = _this$props3.className,
          title = _this$props3.title,
          type = _this$props3.type,
          disabled = _this$props3.disabled,
          readOnly = _this$props3.readOnly,
          placeholder = _this$props3.placeholder,
          style = _this$props3.style,
          ismust = _this$props3.ismust;
      this.labels = [];
      var showLabel = '';
      var value = this.getValue(this.props.value);

      switch (type) {
        case 'yyyy/MM':
          var yearMonthLabels = this.arrayFilter(this.yearMonthList, value);
          showLabel = yearMonthLabels && yearMonthLabels.join('-');
          break;

        case 'yyyy/MM/dd':
          this.recurrenceFilter(this.dateList, 0);
          showLabel = this.labels && this.labels.join('-');
          break;

        case 'HH:mm:ss':
          var secondLabels = this.arrayFilter(this.secondList, value);
          showLabel = secondLabels && secondLabels.join(':');
          break;

        case 'HH:mm':
          var timeLabels = this.arrayFilter(this.timeList, value);
          showLabel = timeLabels && timeLabels.join(':');
          break;

        case 'yyyy/MM/dd HH:mm':
          this.recurrenceFilter(this.dateList, 0);
          var mTimeLabels = this.arrayFilter(this.timeList, value ? [value[3], value[4]] : []);

          if (this.labels && mTimeLabels) {
            showLabel = "".concat(this.labels.join('-'), " ").concat(mTimeLabels.join(':'));
          }

          break;

        default:
          showLabel = value;
          break;
      }

      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-read-only"), readOnly));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: wrapCls,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-area"),
        onClick: function onClick() {
          if (!disabled && !readOnly) {
            _this5.setState({
              visible: true
            });
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ismust ? '*' : ''), title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, !Object(_utils_data_util__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(value) ? showLabel : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "".concat(prefixCls, "-place-holder")
      }, placeholder)), this.renderSuffixIcon()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pop_layer_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
        direction: "bottom",
        visible: this.state.visible
      }, this._getContent()));
    }
  }]);

  return DatePicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(DatePicker, "defaultProps", {
  prefixCls: 'wme-date-picker',
  arrow: 'horizontal',
  yearStep: 100 // 取前后100年的日期

});



/***/ }),

/***/ "./src/date-picker/style/index.less":
/*!******************************************!*\
  !*** ./src/date-picker/style/index.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/flex/Flex.js":
/*!**************************!*\
  !*** ./src/flex/Flex.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/**
 * Flex
 * @author john.gao
 */





var Flex = /*#__PURE__*/function (_React$Component) {
  _inherits(Flex, _React$Component);

  var _super = _createSuper(Flex);

  function Flex() {
    _classCallCheck(this, Flex);

    return _super.apply(this, arguments);
  }

  _createClass(Flex, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          direction = _this$props.direction,
          wrap = _this$props.wrap,
          justify = _this$props.justify,
          align = _this$props.align,
          alignContent = _this$props.alignContent,
          className = _this$props.className,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls,
          style = _this$props.style;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-dir-row"), direction === 'row'), _defineProperty(_classnames, "".concat(prefixCls, "-dir-row-reverse"), direction === 'row-reverse'), _defineProperty(_classnames, "".concat(prefixCls, "-dir-column"), direction === 'column'), _defineProperty(_classnames, "".concat(prefixCls, "-dir-column-reverse"), direction === 'column-reverse'), _defineProperty(_classnames, "".concat(prefixCls, "-nowrap"), wrap === 'nowrap'), _defineProperty(_classnames, "".concat(prefixCls, "-wrap"), wrap === 'wrap'), _defineProperty(_classnames, "".concat(prefixCls, "-wrap-reverse"), wrap === 'wrap-reverse'), _defineProperty(_classnames, "".concat(prefixCls, "-justify-start"), justify === 'start'), _defineProperty(_classnames, "".concat(prefixCls, "-justify-end"), justify === 'end'), _defineProperty(_classnames, "".concat(prefixCls, "-justify-center"), justify === 'center'), _defineProperty(_classnames, "".concat(prefixCls, "-justify-between"), justify === 'between'), _defineProperty(_classnames, "".concat(prefixCls, "-justify-around"), justify === 'around'), _defineProperty(_classnames, "".concat(prefixCls, "-align-start"), align === 'start'), _defineProperty(_classnames, "".concat(prefixCls, "-align-center"), align === 'center'), _defineProperty(_classnames, "".concat(prefixCls, "-align-end"), align === 'end'), _defineProperty(_classnames, "".concat(prefixCls, "-align-baseline"), align === 'baseline'), _defineProperty(_classnames, "".concat(prefixCls, "-align-stretch"), align === 'stretch'), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-start"), alignContent === 'start'), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-end"), alignContent === 'end'), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-center"), alignContent === 'center'), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-between"), alignContent === 'between'), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-around"), alignContent === 'around'), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-stretch"), alignContent === 'stretch'), _classnames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: wrapCls,
        style: style
      }, children);
    }
  }]);

  return Flex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Flex.defaultProps = {
  prefixCls: 'wme-flexbox',
  align: 'center'
};
/* harmony default export */ __webpack_exports__["default"] = (Flex);

/***/ }),

/***/ "./src/flex/FlexItem.js":
/*!******************************!*\
  !*** ./src/flex/FlexItem.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}




var FlexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(FlexItem, _React$Component);

  var _super = _createSuper(FlexItem);

  function FlexItem() {
    _classCallCheck(this, FlexItem);

    return _super.apply(this, arguments);
  }

  _createClass(FlexItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          style = _this$props.style;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-item"), className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: wrapCls,
        style: style
      }, children);
    }
  }]);

  return FlexItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

FlexItem.defaultProps = {
  prefixCls: 'wme-flexbox'
};
/* harmony default export */ __webpack_exports__["default"] = (FlexItem);

/***/ }),

/***/ "./src/flex/index.js":
/*!***************************!*\
  !*** ./src/flex/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flex */ "./src/flex/Flex.js");
/* harmony import */ var _FlexItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlexItem */ "./src/flex/FlexItem.js");


_Flex__WEBPACK_IMPORTED_MODULE_0__["default"].Item = _FlexItem__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Flex__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/flex/style/index.less":
/*!***********************************!*\
  !*** ./src/flex/style/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/gesture/index.js":
/*!******************************!*\
  !*** ./src/gesture/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gesture; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toast_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toast/index */ "./src/toast/index.js");
/* harmony import */ var _locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale-provider/HrContext */ "./src/locale-provider/HrContext.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * 手势
 * @author john.gao
 */






var Gesture = /*#__PURE__*/function (_React$Component) {
  _inherits(Gesture, _React$Component);

  var _super = _createSuper(Gesture);

  function Gesture(props) {
    var _this;

    _classCallCheck(this, Gesture);

    _this = _super.call(this, props);
    _this.space = 0; // 间隙

    _this.cvs = null; // canvas

    _this.ctx = null; // ctx

    _this.pointList = []; // 点数组

    _this.selectedList = []; // 选中的点数组

    _this.initImg = null; // 初始化图

    _this.result = ''; // 结果

    _this.touched = false; // 是否触摸

    return _this;
  }

  _createClass(Gesture, [{
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      e.stopPropagation();
      this.touched = true;
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(e, tips) {
      var _this2 = this;

      var callback = this.props.callback;
      this.touched = false;

      for (var p in this.selectedList) {
        if (this.pointInList(this.selectedList[p], this.pointList)) {
          this.result += this.pointInList(this.selectedList[p], this.pointList).toString();
        }
      }

      if (this.result.length < 4) {
        _toast_index__WEBPACK_IMPORTED_MODULE_1__["default"].show(tips);
        setTimeout(function (_) {
          _this2.clear();
        }, 500);
        return;
      }

      callback && callback(this.result, this);
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      var container = this.refs.container;

      if (this.touched) {
        var x = e.pageX || e.targetTouches[0].pageX;
        var y = e.pageY || e.targetTouches[0].pageY;
        x -= container.offsetLeft;
        y -= container.offsetTop;
        var p = this.isIn(x, y);

        if (p !== 0) {
          if (!this.pointInList(p, this.selectedList)) {
            this.selectedList.push(p);
          }
        }

        this.draw(x, y);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
      var color = this.props.color;
      this.cvs = this.refs.cvs;
      this.ctx = this.cvs.getContext('2d');
      this.ctx.width = width * 2;
      this.ctx.height = height * 2;
      this.ctx.scale(2, 2);
      this.ctx.translate(0.5, 0.5);
      this.initDraw();
    }
  }, {
    key: "initDraw",
    value: function initDraw() {
      var _this$props2 = this.props,
          color = _this$props2.color,
          width = _this$props2.width,
          height = _this$props2.height,
          lineWidth = _this$props2.lineWidth,
          space = _this$props2.space,
          roundRadii = _this$props2.roundRadii,
          pointRadii = _this$props2.pointRadii;

      var Point = function Point(x, y) {
        this.x = x;
        this.y = y;
      };

      this.ctx.strokeStyle = color;
      this.ctx.fillStyle = color;
      this.ctx.lineWidth = lineWidth; // 绘制外圆

      for (var j = 0; j < 3; j++) {
        for (var i = 0; i < 3; i++) {
          var iPath = this.space / 2 + roundRadii + i * (this.space + 2 * roundRadii);
          var jPath = this.space / 2 + roundRadii + j * (this.space + 2 * roundRadii); // 外圆

          this.ctx.beginPath();
          this.ctx.moveTo(iPath + roundRadii, jPath);
          this.ctx.arc(iPath, jPath, roundRadii, 0, 2 * Math.PI);
          this.ctx.closePath();
          this.ctx.stroke(); // 内圆

          this.ctx.beginPath();
          this.ctx.moveTo(iPath + pointRadii, jPath);
          this.ctx.arc(iPath, jPath, pointRadii, 0, 2 * Math.PI);
          this.ctx.closePath();
          this.ctx.fill(); // 存储圆点

          var circle = new Point(iPath, jPath);
          if (this.pointList.length < 9) this.pointList.push(circle);
        }
      }

      this.initImg = this.ctx.getImageData(0, 0, width * 2, height * 2);
    }
  }, {
    key: "isIn",
    value: function isIn(x, y) {
      var roundRadii = this.props.roundRadii;

      for (var p in this.pointList) {
        if (Math.pow(x - this.pointList[p].x, 2) + Math.pow(y - this.pointList[p].y, 2) < Math.pow(roundRadii, 2)) {
          return this.pointList[p];
        }
      }

      return 0;
    }
    /**
       * 绘制 - 圆
       * @param color 颜色
       */

  }, {
    key: "circleDraw",
    value: function circleDraw(color) {
      var roundRadii = this.props.roundRadii;

      if (color) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;
      }

      for (var p in this.selectedList) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.selectedList[p].x + roundRadii, this.selectedList[p].y);
        this.ctx.arc(this.selectedList[p].x, this.selectedList[p].y, roundRadii, 0, 2 * Math.PI);
        this.ctx.stroke();
      }
    }
    /**
       * 绘制 - 点
       * @param color 颜色
       */

  }, {
    key: "pointDraw",
    value: function pointDraw(color) {
      var _this$props3 = this.props,
          lineWidth = _this$props3.lineWidth,
          pointRadii = _this$props3.pointRadii;

      if (color) {
        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
      }

      for (var p in this.selectedList) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.selectedList[p].x + pointRadii, this.selectedList[p].y);
        this.ctx.arc(this.selectedList[p].x, this.selectedList[p].y, pointRadii, 0, 2 * Math.PI);
        this.ctx.fill();
      }
    }
    /**
     * 绘制 - 线
     * @param color 颜色
     */

  }, {
    key: "lineDraw",
    value: function lineDraw(color) {
      var pointRadii = this.props.pointRadii;

      if (color) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = pointRadii * 1.5;
      }

      this.ctx.beginPath();

      if (this.selectedList.length > 0) {
        for (var p in this.selectedList) {
          if (p == 0) {
            this.ctx.moveTo(this.selectedList[p].x, this.selectedList[p].y);
            continue;
          }

          this.ctx.lineTo(this.selectedList[p].x, this.selectedList[p].y);
        }
      }
    }
    /**
       * 全部重绘
       * @param color 内外圆的颜色
       * @param routeColor 路径的颜色
       */

  }, {
    key: "allDraw",
    value: function allDraw(color, routeColor) {
      if (color || routeColor) {
        this.lineDraw(routeColor);
        this.ctx.stroke();
        this.circleDraw(color);
        this.pointDraw(color);
      } else {
        this.lineDraw();
        this.circleDraw();
        this.pointDraw();
      }
    }
    /**
       * 根据手势绘制
       * @param x
       * @param y
       */

  }, {
    key: "draw",
    value: function draw(x, y) {
      var _this$props4 = this.props,
          width = _this$props4.width,
          height = _this$props4.height,
          routeColor = _this$props4.routeColor,
          successColor = _this$props4.successColor;
      this.ctx.clearRect(0, 0, width, height);
      this.ctx.putImageData(this.initImg, 0, 0);
      this.lineDraw(routeColor);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.circleDraw(successColor);
      this.pointDraw(successColor);
    }
    /**
     * 判断点是否在列表中
     * @param poi 点
     * @param list 所有的点
     * @returns {*} 下标
     */

  }, {
    key: "pointInList",
    value: function pointInList(poi, list) {
      for (var p in list) {
        if (poi.x == list[p].x && poi.y == list[p].y) {
          return ++p;
        }
      }

      return false;
    }
    /**
     * 成功
     */

  }, {
    key: "success",
    value: function success() {
      var _this$props5 = this.props,
          width = _this$props5.width,
          height = _this$props5.height,
          successColor = _this$props5.successColor,
          routeColor = _this$props5.routeColor;
      this.ctx.clearRect(0, 0, width, height);
      this.ctx.beginPath();
      this.ctx.putImageData(this.initImg, 0, 0);
      this.allDraw(successColor, routeColor);
      this.result = '';
      this.pointList = [];
      this.selectedList = [];
    }
    /**
      *失败
      */

  }, {
    key: "fail",
    value: function fail() {
      var _this$props6 = this.props,
          width = _this$props6.width,
          height = _this$props6.height,
          failColor = _this$props6.failColor,
          routeFailColor = _this$props6.routeFailColor;
      this.ctx.clearRect(0, 0, width, height);
      this.ctx.beginPath();
      this.ctx.putImageData(this.initImg, 0, 0);
      this.allDraw(failColor, routeFailColor);
      this.result = '';
      this.pointList = [];
      this.selectedList = [];
    }
    /**
     * 清除
     */

  }, {
    key: "clear",
    value: function clear() {
      var _this3 = this;

      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _this$props7 = this.props,
          width = _this$props7.width,
          height = _this$props7.height;
      this.result = '';
      this.pointList = [];
      this.selectedList = [];
      setTimeout(function (_) {
        _this3.ctx.clearRect(0, 0, width, height);

        _this3.ctx.beginPath();

        _this3.initDraw();
      }, timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props8 = this.props,
          prefixCls = _this$props8.prefixCls,
          width = _this$props8.width,
          height = _this$props8.height,
          roundRadii = _this$props8.roundRadii,
          tips = _this$props8.tips;
      this.space = parseInt((width - roundRadii * 2 * 3) / 3); // 间隙

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_2__["Consumer"], null, function (_ref) {
        var Gesture = _ref.Gesture;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: "container",
          className: prefixCls,
          style: {
            width: width,
            height: height
          },
          onTouchStart: function onTouchStart(e) {
            return _this4.handleTouchStart(e);
          },
          onTouchEnd: function onTouchEnd(e) {
            return _this4.handleTouchEnd(e, tips || Gesture.tips);
          },
          onTouchMove: function onTouchMove(e) {
            return _this4.handleTouchMove(e);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
          ref: "cvs",
          style: {
            zoom: 0.5
          },
          width: width * 2,
          height: height * 2
        }));
      });
    }
  }]);

  return Gesture;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Gesture, "defaultProps", {
  prefixCls: 'wme-gesture',
  roundRadii: 30,
  // 大圆点的半径
  pointRadii: 10,
  // 大圆点被选中时显示的圆心的半径
  width: document.body.clientWidth * 0.83,
  // 整个组件的宽度百分比
  height: document.body.clientWidth * 0.83,
  // 整个组件的高度百分比
  lineWidth: 1,
  // 线条宽度
  color: '#9f9a9a',
  // 内外圆默认颜色
  successColor: '#a8c885',
  // 内外圆成功的颜色
  failColor: '#ff7878',
  // 内外圆失败的颜色
  routeColor: '#e0e0e0',
  // 路径默认颜色
  routeFailColor: '#faaaaa' // 失败的路径颜色

});



/***/ }),

/***/ "./src/gesture/style/index.less":
/*!**************************************!*\
  !*** ./src/gesture/style/index.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/grade/index.js":
/*!****************************!*\
  !*** ./src/grade/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grade; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/index */ "./src/icon/index.js");
/* harmony import */ var _textarea_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../textarea/index */ "./src/textarea/index.js");
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/index */ "./src/button/index.js");
/* harmony import */ var _locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locale-provider/HrContext */ "./src/locale-provider/HrContext.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * 评分组件
 * @author john.gao
 * @date 2020-03-31
 */









var Grade = /*#__PURE__*/function (_React$Component) {
  _inherits(Grade, _React$Component);

  var _super = _createSuper(Grade);

  function Grade(props) {
    var _this;

    _classCallCheck(this, Grade);

    _this = _super.call(this, props);
    _this.state = {
      visible: false,
      score: 0,
      content: ''
    };
    return _this;
  }

  _createClass(Grade, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style,
          title = _this$props.title,
          palceholder = _this$props.palceholder,
          onOk = _this$props.onOk,
          onClose = _this$props.onClose,
          okText = _this$props.okText,
          cancelText = _this$props.cancelText;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className);
      var _this$state = this.state,
          score = _this$state.score,
          content = _this$state.content;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_5__["Consumer"], null, function (_ref) {
        var Grade = _ref.Grade;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: wrapCls,
          style: style
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-stars")
        }, [1, 2, 3, 4, 5].map(function (v) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
            type: "collection_fill",
            key: v,
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-star"), _defineProperty({}, "".concat(prefixCls, "-star-active"), score >= v)),
            onClick: function onClick() {
              _this2.setState({
                score: v
              });
            }
          });
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-content")
        }, score, Grade.tips), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_textarea_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
          value: content,
          rows: 5,
          placeholder: palceholder,
          onChange: function onChange(v) {
            _this2.setState({
              content: v
            });
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "primary",
          onClick: function onClick() {
            _this2.setState({
              score: 0,
              content: ''
            });

            onOk && onOk({
              score: _this2.state.score,
              content: _this2.state.content
            });
          }
        }, okText || Grade.ok), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClick: function onClick() {
            _this2.setState({
              score: 0,
              content: ''
            });

            onClose && onClose();
          }
        }, cancelText || Grade.cancel));
      });
    }
  }]);

  return Grade;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Grade, "defaultProps", {
  prefixCls: 'wme-grade',
  visible: false,
  title: '',
  value: function value() {}
});



/***/ }),

/***/ "./src/grade/style/index.less":
/*!************************************!*\
  !*** ./src/grade/style/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/grid/GridItem.js":
/*!******************************!*\
  !*** ./src/grid/GridItem.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * GridItem
 * @author john.gao
 */





var GridItem = /*#__PURE__*/function (_React$Component) {
  _inherits(GridItem, _React$Component);

  var _super = _createSuper(GridItem);

  function GridItem() {
    _classCallCheck(this, GridItem);

    return _super.apply(this, arguments);
  }

  _createClass(GridItem, [{
    key: "render",
    value: function render() {
      var _classnames; // 前缀、样式名、对齐方式、不可编辑、分割线、children、点击事件、图片


      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          align = _this$props.align,
          disabled = _this$props.disabled,
          divider = _this$props.divider,
          children = _this$props.children,
          _onClick = _this$props.onClick,
          thumb = _this$props.thumb,
          value = _this$props.value,
          restProps = _objectWithoutProperties(_this$props, ["prefixCls", "className", "align", "disabled", "divider", "children", "onClick", "thumb", "value"]); // 对齐、不可编辑


      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-item"), className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-item-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-item-left"), align === 'left'), _defineProperty(_classnames, "".concat(prefixCls, "-item-center"), align === 'center'), _defineProperty(_classnames, "".concat(prefixCls, "-item-right"), align === 'right'), _defineProperty(_classnames, "".concat(prefixCls, "-item-divider"), divider), _classnames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, restProps, {
        className: wrapCls,
        onClick: function onClick(e) {
          if (_onClick) {
            _onClick(value);
          }
        }
      }), thumb ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: thumb
      }) : null, children !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children));
    }
  }]);

  return GridItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(GridItem, "defaultProps", {
  prefixCls: 'wme-grid',
  align: 'middle'
});



/***/ }),

/***/ "./src/grid/index.js":
/*!***************************!*\
  !*** ./src/grid/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GridItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridItem */ "./src/grid/GridItem.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * Grid
 * @author john.gao
 */






var Grid = /*#__PURE__*/function (_React$Component) {
  _inherits(Grid, _React$Component);

  var _super = _createSuper(Grid);

  function Grid() {
    _classCallCheck(this, Grid);

    return _super.apply(this, arguments);
  }

  _createClass(Grid, [{
    key: "getGridItem",
    value: function getGridItem() {
      var _this$props = this.props,
          data = _this$props.data,
          disabled = _this$props.disabled,
          cols = _this$props.cols;
      return data.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GridItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          align: item.align,
          style: {
            width: "calc(100%/".concat(cols, ")"),
            height: item.height
          },
          key: index,
          value: item.value,
          onClick: item.onClick,
          disabled: disabled
        }, item.label);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          children = _this$props2.children,
          className = _this$props2.className,
          style = _this$props2.style;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className)
      }, children || this.getGridItem());
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Grid, "defaultProps", {
  prefixCls: 'wme-grid',
  cols: 4
});

Grid.Item = _GridItem__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/grid/style/index.less":
/*!***********************************!*\
  !*** ./src/grid/style/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/hr-combo-box/index.js":
/*!***********************************!*\
  !*** ./src/hr-combo-box/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HrComboBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _select_picker_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../select-picker/index */ "./src/select-picker/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * @author dav i d.dai                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
 */









var HrComboBox = /*#__PURE__*/function (_React$Component) {
  _inherits(HrComboBox, _React$Component);

  var _super = _createSuper(HrComboBox); // 构造函数


  function HrComboBox(props) {
    var _this;

    _classCallCheck(this, HrComboBox);

    _this = _super.call(this, props);
    _this.state = {
      option: {},
      value: '',
      code: props.code,
      dataset: []
    };
    return _this;
  } // 页面渲染完成


  _createClass(HrComboBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getParam();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.code !== this.props.code) {
        this.getParam();
      } else if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(prevProps.queryData, this.props.queryData)) {
        this.getDataSet();
      }
    }
    /**
     * 获取参数
     */

  }, {
    key: "getParam",
    value: function getParam() {
      var _this2 = this;

      var code = this.state.code;
      this.$axios.get("/platform/selector/info/getSelectorInfoByCode?code=".concat(code)).then(function (res) {
        // edit by john.gao 特殊处理缴费单位接口不去掉.search
        if (res.serviceUrl && res.serviceUrl.indexOf('getPayUnitForSelector') === -1) {
          res.serviceUrl = res.serviceUrl.replace('.search', '');
        }

        _this2.setState({
          option: res
        }, function () {
          _this2.getDataSet();
        });
      });
    } // 处理默认值

  }, {
    key: "getValue",
    value: function getValue(value) {
      var option = this.state.option;

      if (option) {
        if (lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default()(value)) {
          value = value.map(function (item) {
            return lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(item) ? item[option.valueField] || '' : item;
          });
        } else if (lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(value)) {
          value = "".concat(value[option.valueField]) || '';
        } else {
          value = value || (value === 0 ? "".concat(this.value) : '');
        }
      }

      return value;
    } // 获取值集

  }, {
    key: "getDataSet",
    value: function getDataSet() {
      var _this3 = this;

      var option = this.state.option;
      var _this$props = this.props,
          queryData = _this$props.queryData,
          datasetChange = _this$props.datasetChange;

      if (option.serviceUrl) {
        var param = qs__WEBPACK_IMPORTED_MODULE_4___default.a.parse(option.param) || {};
        this.$axios.post(option.serviceUrl, _objectSpread({}, queryData, {}, param)).then(function (res) {
          res = res || [];
          _this3.fullData = res;
          datasetChange && datasetChange(res);

          _this3.setState({
            dataset: [res.map(function (item) {
              return {
                value: item[option.valueField],
                label: item[option.displayField]
              };
            })]
          });
        });
      } else {
        this.setState({
          dataset: []
        });
        datasetChange && datasetChange([]);
      }
    }
    /**
     * 设置值集
     * @param {Array} list 列表
     */

  }, {
    key: "setDataSet",
    value: function setDataSet(list) {
      this.setState({
        dataset: [list]
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(val, values) {
      var onChange = this.props.onChange;

      if (lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default()(values)) {
        val = values.map(function (o) {
          return o.value;
        });
      } else if (lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(values)) {
        val = values.value;
      }

      onChange && onChange(val, this.fullData);
    } // 页面渲染

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var dataset = this.state.dataset;
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          value = _this$props2.value,
          title = _this$props2.title,
          ismust = _this$props2.ismust,
          readOnly = _this$props2.readOnly,
          placeholder = _this$props2.placeholder;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_select_picker_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: this.getValue(value),
        className: prefixCls,
        title: title,
        ismust: ismust,
        data: dataset,
        readOnly: readOnly,
        placeholder: placeholder,
        onOk: function onOk(val, values) {
          return _this4.handleChange(val, values);
        }
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};

      if (nextProps.code !== prevState.code) {
        newState.code = nextProps.code;
      }

      return newState;
    }
  }]);

  return HrComboBox;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(HrComboBox, "defaultProps", {
  prefixCls: 'hr-combo-box'
});



/***/ }),

/***/ "./src/hr-constant-code/index.js":
/*!***************************************!*\
  !*** ./src/hr-constant-code/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HrConstantCode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _select_picker_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-picker/index */ "./src/select-picker/index.js");
/* harmony import */ var _utils_data_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_utils/data_util */ "./src/_utils/data_util.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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







var HrConstantCode = /*#__PURE__*/function (_React$Component) {
  _inherits(HrConstantCode, _React$Component);

  var _super = _createSuper(HrConstantCode);

  function HrConstantCode(props) {
    var _this;

    _classCallCheck(this, HrConstantCode);

    _this = _super.call(this, props);
    _this.state = {
      visible: false,
      dataList: [],
      oriDataList: [],
      isTree: false
    };
    return _this;
  }

  _createClass(HrConstantCode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          code = _this$props.code,
          onDataChange = _this$props.onDataChange;
      this.$axios.get("/platform/code/getCodeSelectorDataDTO?typeCode=".concat(code)).then(function (res) {
        var dataList = _this2.dealDataList(res);

        _this2.setState({
          dataList: dataList,
          oriDataList: res.codeList,
          isTree: res.dataStructure === 'TREE'
        });

        if (onDataChange) {
          onDataChange(dataList);
        }
      });
    }
    /**
     * 值改变事件
     * @param {Any} val 值
     * @param {Array/Object} values 选中的值
     */

  }, {
    key: "onChange",
    value: function onChange(val, values) {
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          showSelectedType = _this$props2.showSelectedType;
      var val_key = 'value';

      if (lodash_isArray__WEBPACK_IMPORTED_MODULE_1___default()(values)) {
        val = values.map(function (item) {
          return {
            code: item[val_key],
            name: item.label
          };
        });

        if (showSelectedType === _select_picker_index__WEBPACK_IMPORTED_MODULE_3__["default"].SHOW_CHILD) {
          val = val.slice(val.length - 1);
        }
      } else if (lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default()(values)) {
        val = {
          code: values[val_key],
          name: values.label
        };
      }

      onChange && onChange(val);
    }
  }, {
    key: "getValue",
    value: function getValue(value) {
      var _this$state = this.state,
          isTree = _this$state.isTree,
          oriDataList = _this$state.oriDataList;

      if (lodash_isArray__WEBPACK_IMPORTED_MODULE_1___default()(value)) {
        value = value.map(function (item) {
          return item.code;
        });

        if (isTree) {
          if (value.length === 1) {
            value = Object(_utils_data_util__WEBPACK_IMPORTED_MODULE_4__["recurrenceValue"])(oriDataList, value[0]);
          }
        }
      } else if (lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default()(value)) {
        if (isTree) {
          if (value.code) {
            value = Object(_utils_data_util__WEBPACK_IMPORTED_MODULE_4__["recurrenceValue"])(oriDataList, value.code);
          }
        } else {
          value = value.code;
        }
      }

      return value;
    }
    /**
     * 数据处理
     * @param {Object} res 服务器返回的数据
     */

  }, {
    key: "dealDataList",
    value: function dealDataList(res) {
      if (res.dataStructure === 'TREE') {
        return Object(_utils_data_util__WEBPACK_IMPORTED_MODULE_4__["recurrence"])(res.codeList);
      } else {
        return [res.codeList.map(function (item) {
          return {
            value: item.code,
            label: item.name
          };
        })];
      }
    }
    /**
     * 获取值集
     */

  }, {
    key: "getDataList",
    value: function getDataList() {
      return this.state.dataList;
    }
    /**
     * 设置值集
     * @param {Array} list 列表
     */

  }, {
    key: "setDataList",
    value: function setDataList(list) {
      this.setState({
        dataList: [list]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          dataList = _this$state2.dataList,
          isTree = _this$state2.isTree;
      var _this$props3 = this.props,
          title = _this$props3.title,
          ismust = _this$props3.ismust,
          showSelectedType = _this$props3.showSelectedType,
          readOnly = _this$props3.readOnly,
          placeholder = _this$props3.placeholder,
          value = _this$props3.value,
          defaultValue = _this$props3.defaultValue; // TODO 如果多选需要怎样？

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_select_picker_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: this.getValue(value),
        defaultValue: this.getValue(defaultValue),
        title: title,
        ismust: ismust,
        readOnly: readOnly,
        cascade: isTree,
        data: dataList,
        placeholder: placeholder,
        showSelectedType: showSelectedType,
        onOk: function onOk(val, values) {
          return _this3.onChange(val, values);
        }
      });
    }
  }]);

  return HrConstantCode;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(HrConstantCode, "defaultProps", {
  prefixCls: 'hr-constant-code',
  showSelectedType: _select_picker_index__WEBPACK_IMPORTED_MODULE_3__["default"].SHOW_CHILD
});



/***/ }),

/***/ "./src/hr-dynamic/index.js":
/*!*********************************!*\
  !*** ./src/hr-dynamic/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HrDynamic; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/index */ "./src/input/index.js");
/* harmony import */ var _textarea_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../textarea/index */ "./src/textarea/index.js");
/* harmony import */ var _checkbox_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../checkbox/index */ "./src/checkbox/index.js");
/* harmony import */ var _date_picker_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../date-picker/index */ "./src/date-picker/index.js");
/* harmony import */ var _hr_combo_box_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hr-combo-box/index */ "./src/hr-combo-box/index.js");
/* harmony import */ var _hr_constant_code_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hr-constant-code/index */ "./src/hr-constant-code/index.js");
/* harmony import */ var _hr_set_id_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hr-set-id/index */ "./src/hr-set-id/index.js");
/* harmony import */ var _hr_image_picker_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hr-image-picker/index */ "./src/hr-image-picker/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}












var HrDynamic = /*#__PURE__*/function (_Component) {
  _inherits(HrDynamic, _Component);

  var _super = _createSuper(HrDynamic);

  function HrDynamic() {
    _classCallCheck(this, HrDynamic);

    return _super.apply(this, arguments);
  }

  _createClass(HrDynamic, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          name = _this$props.name,
          title = _this$props.title,
          ismust = _this$props.ismust,
          code = _this$props.code,
          width = _this$props.width,
          size = _this$props.size,
          rows = _this$props.rows,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly,
          close = _this$props.close,
          multiple = _this$props.multiple,
          placeholder = _this$props.placeholder,
          tableName = _this$props.tableName,
          queryData = _this$props.queryData,
          defaultValue = _this$props.defaultValue,
          _onChange = _this$props.onChange;
      var newPlaceholder = readOnly ? '' : placeholder;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hr-dynamic"
      }, name === 'TEXT' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_input_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: title,
        value: value,
        size: size,
        ismust: ismust,
        close: close,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: newPlaceholder,
        align: "right",
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'CHECKBOX' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkbox_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: value,
        title: title,
        disabled: disabled,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'TEXTAREA' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_textarea_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: title,
        value: value,
        ismust: ismust,
        size: size,
        align: "right",
        disabled: disabled,
        readOnly: readOnly,
        placeholder: newPlaceholder,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'NUMBER' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_input_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: title,
        type: "decimal",
        ismust: ismust,
        value: value,
        size: size,
        align: "right",
        disabled: disabled,
        readOnly: readOnly,
        placeholder: newPlaceholder,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'YEARMONTH' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_date_picker_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: value,
        title: title,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        type: "yyyy/MM",
        placeholder: newPlaceholder,
        onOk: function onOk(val) {
          _onChange && _onChange(val ? val.join('-') : val);
        }
      }), name === 'DATE' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_date_picker_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: value,
        title: title,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        type: "yyyy/MM/dd",
        placeholder: newPlaceholder,
        onOk: function onOk(val) {
          _onChange && _onChange(val ? val.join('-') : '');
        }
      }), name === 'TIMEPICKERHRS' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_date_picker_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: value,
        title: title,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        type: "HH:mm:ss",
        placeholder: newPlaceholder,
        onOk: function onOk(val) {
          _onChange && _onChange(val ? "".concat(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY-MM-DD'), " ").concat(val.join(':')) : val);
        }
      }), name === 'TIMEPICKERHR' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_date_picker_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: value,
        title: title,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        type: "HH:mm",
        placeholder: newPlaceholder,
        onOk: function onOk(val) {
          _onChange && _onChange(val ? "".concat(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY-MM-DD'), " ").concat(val.join(':')) : val);
        }
      }), name === 'COMBOBOX' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hr_combo_box_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: value,
        allowClear: true,
        code: code,
        title: title,
        ismust: ismust,
        placeholder: newPlaceholder,
        readOnly: readOnly,
        multiple: multiple,
        disabled: disabled,
        queryData: queryData,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'CONSTANT' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hr_constant_code_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
        code: code,
        value: value,
        title: title,
        ismust: ismust,
        readOnly: readOnly,
        queryData: queryData,
        defaultValue: defaultValue,
        placeholder: newPlaceholder,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'SETID' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hr_set_id_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: value,
        tableName: tableName,
        placeholder: newPlaceholder,
        disabled: disabled,
        readOnly: readOnly,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'SELECTOR' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HrSearchHelper, {
        title: title,
        value: value,
        code: code,
        ismust: ismust,
        close: close,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: newPlaceholder,
        queryData: queryData,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), (name === 'SINGLEFILE' || name === 'IMG') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hr_image_picker_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: title,
        value: value,
        count: 1,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: newPlaceholder,
        onChange: function onChange(val) {
          _onChange && _onChange(val && val.length ? val[0] : '');
        }
      }), (name === 'MUTIFILE' || name === 'MUTIIMG') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hr_image_picker_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: title,
        value: value,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: newPlaceholder,
        onChange: function onChange(val) {
          _onChange && _onChange(val ? val.map(function (item) {
            return "".concat(item);
          }) : []);
        }
      }));
    }
  }]);

  return HrDynamic;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/hr-image-picker/index.js":
/*!**************************************!*\
  !*** ./src/hr-image-picker/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image_picker_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-picker/index */ "./src/image-picker/index.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toast */ "./src/toast/index.js");
/* harmony import */ var _utils_data_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_utils/data_util */ "./src/_utils/data_util.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * HrImagePicker
 * @author Groot.xie
 * @date 2020.3.13
 */









var HrImagePicker = /*#__PURE__*/function (_Component) {
  _inherits(HrImagePicker, _Component);

  var _super = _createSuper(HrImagePicker);

  function HrImagePicker(props) {
    var _this;

    _classCallCheck(this, HrImagePicker);

    _this = _super.call(this, props);
    _this.actionUrl = "/file.nolog?method=upload&temp=".concat(props.temp);
    _this.donwnLoadUrl = "".concat(process.env.REACT_APP_API_BASE_URL, "/file.nolog?method=download&fileId=");
    return _this;
  }

  _createClass(HrImagePicker, [{
    key: "handleSelect",
    value: function handleSelect(files) {
      var _this2 = this;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value;
      var PromiseArr = [];
      files.forEach(function (file) {
        var formData = new FormData();
        formData.append('files[]', file);
        PromiseArr.push(_this2.$axios.post(_this2.actionUrl, formData));
      });
      Promise.all(PromiseArr).then(function (res) {
        onChange && onChange((value || []).concat(res.map(function (file) {
          return +file.fileId;
        })));
      });
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(index) {
      var _this$props2 = this.props,
          value = _this$props2.value,
          onChange = _this$props2.onChange;
      var newValue = lodash_clone__WEBPACK_IMPORTED_MODULE_1___default()(lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default()(value) ? value : [value]);
      newValue.splice(index, 1);
      onChange && onChange(newValue);
    }
  }, {
    key: "handleError",
    value: function handleError(_ref) {
      var type = _ref.type,
          fileName = _ref.fileName;

      if (type === 'typeError') {
        _toast__WEBPACK_IMPORTED_MODULE_4__["default"].show("".concat(fileName, "\u7C7B\u578B\u9519\u8BEF"));
      } else if (type === 'limitError') {
        _toast__WEBPACK_IMPORTED_MODULE_4__["default"].show("".concat(fileName, "\u8D85\u51FA\u5927\u5C0F"));
      }
    }
  }, {
    key: "getValue",
    value: function getValue(value) {
      var _this3 = this;

      var result = [];

      if (!Object(_utils_data_util__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(value)) {
        if (typeof value === 'string' || typeof value === 'number') {
          var array = value.toString().split(',');
          result = array.map(function (item) {
            return {
              src: "".concat(_this3.donwnLoadUrl).concat(item)
            };
          });
        } else {
          result = value.map(function (item) {
            return !item.src ? {
              src: "".concat(_this3.donwnLoadUrl).concat(item)
            } : item;
          });
        }
      }

      return result;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this; // temp 是否为临时文件


      var _this$props3 = this.props,
          onDelete = _this$props3.onDelete,
          _onClick = _this$props3.onClick,
          temp = _this$props3.temp,
          value = _this$props3.value,
          readOnly = _this$props3.readOnly,
          placeholder = _this$props3.placeholder,
          restProps = _objectWithoutProperties(_this$props3, ["onDelete", "onClick", "temp", "value", "readOnly", "placeholder"]);

      var filesList = this.getValue(value);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image_picker_index__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, restProps, {
        value: filesList,
        isPress: false,
        readOnly: readOnly,
        placeholder: placeholder,
        onSelect: function onSelect(files) {
          return _this4.handleSelect(files);
        },
        onDelete: function onDelete(index) {
          return _this4.handleDelete(index);
        },
        onClick: function onClick(item, index) {
          return _onClick && _onClick(item, index);
        },
        onError: function onError(err) {
          return _this4.handleError(err);
        }
      }));
    }
  }]);

  return HrImagePicker;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(HrImagePicker, "defaultProps", {
  temp: false,
  fileTypes: '*.jpg,*.jpeg,*.gif,*.png,*.bmp'
});

/* harmony default export */ __webpack_exports__["default"] = (HrImagePicker);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/hr-modal/index.js":
/*!*******************************!*\
  !*** ./src/hr-modal/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HrModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _message_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message/Message */ "./src/message/Message.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * HrModal
 * @author john.gao
 * @date 2020.2.19
 */







var HrModal = /*#__PURE__*/function (_Component) {
  _inherits(HrModal, _Component);

  var _super = _createSuper(HrModal);

  function HrModal(props) {
    var _this;

    _classCallCheck(this, HrModal);

    _this = _super.call(this, props);
    _this.rootEl = document.createElement('div');
    document.body.appendChild(_this.rootEl);
    return _this;
  }

  _createClass(HrModal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rootEl) {
        document.body.removeChild(this.rootEl);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          visible = _this$props.visible,
          title = _this$props.title,
          icon = _this$props.icon,
          action = _this$props.action,
          isMaskClose = _this$props.isMaskClose,
          children = _this$props.children,
          _onClose = _this$props.onClose;
      return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-show"), visible))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_message_Message__WEBPACK_IMPORTED_MODULE_3__["default"], {
        icon: icon,
        title: title,
        isMaskClose: isMaskClose,
        content: children,
        action: action,
        onClose: function onClose() {
          _onClose && _onClose();
        }
      })), this.rootEl);
    }
  }]);

  return HrModal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(HrModal, "defaultProps", {
  prefixCls: 'hr-modal'
});



/***/ }),

/***/ "./src/hr-modal/style/index.less":
/*!***************************************!*\
  !*** ./src/hr-modal/style/index.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/hr-section/index.js":
/*!*********************************!*\
  !*** ./src/hr-section/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HrSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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




var HrSection = /*#__PURE__*/function (_React$Component) {
  _inherits(HrSection, _React$Component);

  var _super = _createSuper(HrSection);

  function HrSection() {
    _classCallCheck(this, HrSection);

    return _super.apply(this, arguments);
  }

  _createClass(HrSection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          action = _this$props.action,
          style = _this$props.style,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, prefixCls);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style,
        className: wrapCls
      }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-toolbar")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "".concat(prefixCls, "-title")
      }, title), action), children);
    }
  }]);

  return HrSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(HrSection, "defaultProps", {
  prefixCls: 'wme-section'
});



/***/ }),

/***/ "./src/hr-section/style/index.less":
/*!*****************************************!*\
  !*** ./src/hr-section/style/index.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/hr-set-id/index.js":
/*!********************************!*\
  !*** ./src/hr-set-id/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HrSetId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _select_picker_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../select-picker/index */ "./src/select-picker/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/**
 * @author david.dai
 */





var HrSetId = /*#__PURE__*/function (_React$Component) {
  _inherits(HrSetId, _React$Component);

  var _super = _createSuper(HrSetId); // 构造函数


  function HrSetId(props) {
    var _this;

    _classCallCheck(this, HrSetId);

    _this = _super.call(this, props);
    _this.state = {
      dataset: []
    };
    return _this;
  } // 页面渲染完成


  _createClass(HrSetId, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var tableName = this.props.tableName;
      this.getDataSet(tableName);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('tableName' in nextProps) {
        if (this.props.tableName !== nextProps.tableName) {
          this.getDataSet(nextProps.tableName);
        }
      }
    } // 过滤值集

  }, {
    key: "filterDataSet",
    value: function filterDataSet(fun) {
      var dataset = this.state.dataset;

      if (dataset.length && dataset[0] && dataset[0].length) {
        var _ds = dataset[0].filter(fun);

        if (_ds.length > 0) {
          dataset = [_ds];
        } else {
          dataset = [];
        }
      } else {
        dataset = [];
      }

      this.setState({
        dataset: dataset
      });
    } // 获取值集

  }, {
    key: "getDataSet",
    value: function getDataSet(tableName) {
      var _this2 = this;

      var option = this.state.option;
      this.setState({
        dataset: []
      });

      if (tableName) {
        this.$axios.get("/platform/setid/info/getSetIdDTOByTableName?tableName=".concat(tableName)).then(function (res) {
          res = res || [];

          _this2.setState({
            dataset: [res.map(function (_ref) {
              var id = _ref.id,
                  name = _ref.name;
              return {
                value: id,
                label: name ? name.currentLocaleValue : name
              };
            }) || []]
          });
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(val) {
      var onOk = this.props.onOk;
      onOk && onOk(val);
    } // 页面渲染

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var dataset = this.state.dataset;
      var _this$props = this.props,
          title = _this$props.title,
          ismust = _this$props.ismust,
          disabled = _this$props.disabled,
          value = _this$props.value,
          placeholder = _this$props.placeholder;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_select_picker_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: value,
        title: title,
        disabled: disabled,
        ismust: ismust,
        data: dataset,
        placeholder: placeholder,
        readOnly: readOnly,
        onOk: function onOk(val) {
          return _this3.onChange(val);
        }
      });
    }
  }]);

  return HrSetId;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/icon/index.js":
/*!***************************!*\
  !*** ./src/icon/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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




var Icon = /*#__PURE__*/function (_React$Component) {
  _inherits(Icon, _React$Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          size = _this$props.size,
          _onClick = _this$props.onClick,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-").concat(size), size));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        style: style,
        className: wrapCls,
        "aria-hidden": "true",
        onClick: function onClick(e) {
          _onClick && _onClick(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        href: "#".concat(type)
      }));
    }
  }]);

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Icon, "defaultProps", {
  prefixCls: 'wme-icon'
});



/***/ }),

/***/ "./src/icon/style/index.less":
/*!***********************************!*\
  !*** ./src/icon/style/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/image-picker/index.js":
/*!***********************************!*\
  !*** ./src/image-picker/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _upload_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../upload/index */ "./src/upload/index.js");
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/index */ "./src/icon/index.js");
/* harmony import */ var _locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locale-provider/HrContext */ "./src/locale-provider/HrContext.js");
/* harmony import */ var _image_viewer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image-viewer/index */ "./src/image-viewer/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * 图片九宫格
 * @author john
 */





/* babel-plugin-inline-import './image/pic_error.png' */

var errorPng = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAAEjCAYAAAAIfVyaAAAAAXNSR0IArs4c6QAAEE1JREFUeAHtnTtzG9cVgPEiKQLhy6MUtqRJY49TqI5cpXPjktLkJ3jSeTKTpPRM/A/c+jfYKtW4SqqoVxGP02QkxUUy4UuARBIgcg7M5ZAgsLvA7rmLPffbGWpJ7O6993xnP90L3MVus2G0jMfj7uHh4eNms/mZVPFQ1g9k3ZWftvw0ZXtT1iwQcEVAzvOxBKQ/I/kZyHn+UtYvZP1sd3f3O9k+kL9LX0qVqd/vv39+fv6VtHJfGryHrKXniwJrTEAll+VAQni6trb2Za/X+6mscEoR+eTkZH80Gn0tDb2HvGWlhnI8E7iU+nW73f5ia2vradFYC4k8GAyeSA/8jci7V7QhHA+BWAmI1AfSQ3/e7Xa/XZbBUiKLwA+Gw+H3FxcXHy9bMcdBAAI3CbRarR86nc6nIrS+r15oaS20t+x8fHz8x9PT038h8aLk2B8C6QTUKXVLHUvf8/bW3D2yDJ83pIK/yvrR7WJ4BQIQKJOADLefb29v/1bWZ3nKzSWyyLtzdHT0Tynwbp5C2QcCEChOQIba/5EPwj4UmY+zSssU+XJK6UcpqJdVGNshAIHSCfTlg7CPsqaqUt8ja08sn0ojcem5oUAI5CbQUwfVxbQj5oosB25cDqfpidMIsg0C9gR66qI4uT6vqrkiywdbf5ODeE88jxyvQyAsgbuXTs6sdabI+vG32P+bmUfwIgQgUAkBcfKRujmr8lsfdunFHjqXJZ+U3do2qwBegwAEwhEQmccbGxu/mr5o5FaPrFdsIXG4xFATBBYhoG6qo9PH3BBZvvzwO67YmkbE3xBYLQLqqLp6vVU3hs/y/WH9itXu9R34HQIQWD0C0jEf7OzsvJe07KpHFomfyItInJBhDYEVJiBvlfcunZ208qpHlhf1Gxf3V7jtNA0CELhJ4JXcdUTvvNOY9MhyGeYH0lXfu7kPf0EAAqtMQJ1Vd7WNE5HlErC/SFd91TuvcuNpGwQg8DMBdVbd1b+S98j7wIEABGpJYOJuS6zuShfNrXpqmUMaHTsBdVcdbskY+zHD6thPB+KvKwF1Vx1uyVUiet9pFghAoKYE1GF9j/ywpu2n2RCAwM8EHrZkjD2Zh4IIBCBQTwLqsPbI+hgXFghAoL4EuiqyPouJBQIQqC+BtorMhSD1TSAth4ASaOo8MiJzMkCgxgTUYe2RWSAAgZoTQOSaJ5DmQ0AJIDLnAQQcEEBkB0kkBAggMucABBwQQGQHSSQECCAy5wAEHBBAZAdJJAQIIDLnAAQcEEBkB0kkBAggMucABBwQQGQHSSQECCAy5wAEHBBAZAdJJAQIIDLnAAQcEEBkB0kkBAggMucABBwQQGQHSSQECCAy5wAEHBBAZAdJJAQIIDLnAAQcEEBkB0kkBAggMucABBwQQGQHSSQECCAy5wAEHBBAZAdJJAQIIDLnAAQcEEBkB0kkBAggMucABBwQQGQHSSQECCAy5wAEHBBAZAdJJAQIIDLnAAQcEEBkB0kkBAggMucABBwQQGQHSSQECCAy5wAEHBBAZAdJJAQIIDLnAAQcEEBkB0kkBAggMucABBwQQGQHSSQECCAy5wAEHBBAZAdJJAQIIDLnAAQcEEBkB0kkBAggMucABBwQQGQHSSQECCAy5wAEHBBAZAdJJAQIIDLnAAQcEEBkB0kkBAggMucABBwQQGQHSSQECCAy5wAEHBBAZAdJJAQIIDLnAAQcEOg4iCFoCM1ms7G+vt7odDqNVqs1+bFuwNHRUWoVvV5v0p7UnVI2DofDRr/fT9mj0djY2Gicnp6m7sPG6ggg8gLsVeA7d+40VObYFo1bF2Rezcwjcs68bG5uTnrinLu73A2ZVzetvEfOkRvtifWHpTEZkegwm2W1CCByRj50GJ30RBm7RrNZeSDzaqUbkTPyoT1xjO+JM7DQM2cBCrwdkTOA66fTLLMJ0DPP5lLFq4icQV2nmFjmE0Dm+WxCbqG7yaBtLfJoNGq8ffs2oxWrvTn5DIGpqeryhMjVsZ/UPB6PGypz3RdkrjaDjBur5e+qdobZ1aUTkatj77JmZK4mrYhcDXfXtSJz+PQicnjmUdSIzGHTjMhheUdVGzKHSzcih2MdZU3IHCbtTD+F4Ty3Fp2nzrpuOWt+9uzsrKHfKZ636NVpVV6hpjLrkhXHvPbzejYBRM5mZLqHipyc6PMqyhLg/Px83qFXr1cpsjYiiTErlqsG88tCBBhaL4SLnYsQYJhdhF76sYiczoetJRNA5pKBXhaHyDZcKTWFADKnwFlyEyIvCY7DihFA5mL8po9G5Gki/B2MADKXhxqRy2NJSUsQQOYloM04hOmnGVBCvlTG1xh1CivtdkTW36kuyktl1oWpqeVJIvLy7Eo5Ur+LnHVz+KyK9Fa9Vc8TZ7UxazsyZxFK387QOp0PWwMSYJi9PGxEXp4dRxoQQObloCLyctw4ypAAMi8OF5EXZ8YRAQgg82KQEXkxXuwdkAAy54eNyPlZsWcFBJA5H3REzseJvSokgMzZ8JlHzmZkuke73W5sb2+n1nF8fJy6PWseWm9coDIUWbIetl6kbI4tTgCRizMsVELaFVmFCubgqAgwtI4q3QTrlQAie80scUVFAJGjSjfBeiWAyF4zS1xREUDkqNJNsF4JILLXzBJXVASYfqo43fp95Hfv3hVqhc4Rp908IG2bVqxz2d1ut1AbQhw8GAxCVFPLOhC54rTpHULSnhKRp3kqYpEbC+hc9traWp6q2GdFCTC0XtHE0CwILEIAkRehxb4QWFECiLyiiaFZEFiEACIvQot9IbCiBBB5RRNDsyCwCAFEXoQW+0JgRQkw/VRxYnSO1/uDzitGHEX1iFxxmlXkrC/9Zz2BoQ4POq8Ys/vqGVq7TzEBxkAAkWPIMjG6J4DI7lNMgDEQQOQYskyM7gkgsvsUE2AMBBA5hiwTo3sCTD9VnGIedF5xApxUj8gVJ5IHnVecACfVM7R2kkjCiJsAIsedf6J3QgCRnSSSMOImgMhx55/onRBAZCeJJIy4CSBy3PkneicEENlJIgkjbgLMI1ec/zwPOs/TRL2wJG3hOcxpdOq/DZErziGCVZwAJ9UztHaSSMKImwAix51/ondCAJGdJJIw4iaAyHHnn+idEEBkJ4kkjLgJIHLc+Sd6JwSYfqo4kWU86DwrBH328fr6etZubK8xAUSuOHllPOg8KwS96ITFNwGG1r7zS3SREEDkSBJNmL4JILLv/BJdJAQQOZJEE6ZvAojsO79EFwkBRI4k0YTpmwDTTzXIb9YcsD4fOev7yDUIkyYWIIDIBeCFOnRzczO1Kr2oRH9Y4iXA0Dre3BO5IwKI7CiZhBIvAUSON/dE7ogAIjtKJqHESwCR4809kTsigMiOkkko8RJg+qkGuWdqqQZJqriJiFxxAvJU/+bNmzy7sU/EBBhaR5x8QvdDAJH95JJIIiaAyBEnn9D9EEBkP7kkkogJIHLEySd0PwQQ2U8uiSRiAogccfIJ3Q8B5pErzmVZDzqvOAyqr5gAIlecAB50XnECnFTP0NpJIgkjbgKIHHf+id4JAUR2kkjCiJsAIsedf6J3QgCRnSSSMOImgMhx55/onRBA5IxEcuP3DECBNpOHdNCInM6HJzhk8Am1GZHTSSNyOh+e4JDBJ9RmbneUThqR0/k09LlKLNUTIA/pOUDkdD4TkekNMiAZb1b+iJwOGZHT+Uy2DgYD3ivn4GSxi743Vv4s6QQQOZ3PZOvFxUWj3+83dM0SjgDc87NG5JysdHint6U9Ozujd87JbNndtBdWzsqbtzX5KDYPDw/H+XZlr4SAfvWw0+k0Wq1Wg68hJlSKr1Vg7YWHwyH/WS6Ik+8jLwhMd9cTjg9flgDHIWYEGFqboaVgCIQjgMjhWFMTBMwIILIZWgqGQDgCiByONTVBwIwAIpuhpWAIhCOAyOFYUxMEzAggshlaCoZAOAKIHI41NUHAjAAim6GlYAiEI4DI4VhTEwTMCCCyGVoKhkA4AogcjjU1QcCMACKboaVgCIQjgMjhWFMTBMwIILIZWgqGQDgCiByONTVBwIwAIpuhpWAIhCOAyOFYUxMEzAggshlaCoZAOAKIHI41NUHAjAAim6GlYAiEI4DI4VhTEwTMCCCyGVoKhkA4AogcjjU1QcCMACKboaVgCIQjgMjhWFMTBMwIILIZWgqGQDgCiByONTVBwIwAIpuhpWAIhCOAyOFYUxMEzAggshlaCoZAOAKIHI41NUHAjAAim6GlYAiEI4DI4VhTEwTMCCCyGVoKhkA4AogcjjU1QcCMACKboaVgCIQjgMjhWFMTBMwIILIZWgqGQDgCiByONTVBwIwAIpuhpWAIhCOAyOFYUxMEzAggshlaCoZAOAKIHI41NUHAjAAim6GlYAiEI4DI4VhTEwTMCCCyGVoKhkA4AogcjjU1QcCMACKboaVgCIQjgMjhWFMTBMwIILIZWgqGQDgCiByONTVBwIwAIpuhpWAIhCOAyOFYUxMEzAggshlaCoZAOAKIHI41NUHAjECr2WyOzUqnYAhAwJyAOqw9MiKbo6YCCJgSmIg8Mq2CwiEAAWsCI+2RB9a1UD4EIGBKYNAaj8cvTaugcAhAwJSAOqw98gvTWigcAhCwJvCi1el0nlnXQvkQgIAdAXW4Kd1y9/j4+I2sm3ZVUTIEIGBBQKeetre3f6HzyAOR+MCiEsqEAARsCai76nByZddT2+ooHQIQMCIwcXcynO73+x8Mh8NXDK+NUFMsBAwI6LBa3h/f7/V6/570yPqLSPzaoC6KhAAEjAios+quFp8MrfX3P+g/LBCAQG0IXDl745Pqo6Oj/4nle7UJg4ZCIFICMqw+2NnZeS8J/3qP3Gi1Wr9PNrCGAARWl8C0qzd6ZG22zCn/4+Li4uPVDYGWQSBuAiLxDzJ3/OvrFG70yLpBPgX7VIbXfLXxOiV+h8CKEFA31dHp5twSudvtvmy323+e3pG/IQCB6gmom+rodEtuDa2THeSDr7+L/I+Sv1lDAALVEpAPuJ7LB1yfzGrFXJFF4g2R+ZUcdHfWgbwGAQgEJfBfkfi+yHw6q9a5IuvOIvOOyKwXivRmHcxrEIBAEAJ9kfieSHw0r7Zb75Gv76gHrq2tfSSv9a+/zu8QgEAwAn11ME1ibUlqj5w0VXvmk5OTH2Va6pfJa6whAAFzAjqc/jBLYm1Fao+cNFML2traeiDr58lrrCEAATsC6lrWcPp67blE1gOk4FMp+BOZjP6T9NDMM1+nyO8QKImAuqWOqWvi3FneYnMNracLGwwGD+Rrj99zBdg0Gf6GwPIE9Iotvdhj1jxxVqlLiZwUKkI/OT8//0b+E+GLFgkU1hBYkID0vAfygdbnIvC3Cx56tXshkZNS5IOw/dFo9LU06J5IXUqZSdmsIeCRgLiio+jXcqXWF/L5U+E79JQqndxp5H3pob8S8PvS0D2k9ngKEtOyBC7l1fvjPZUe+Eu5KcBPy5Y1fVypIl8vXCTuHh4ePpbGfyavP5T1A1l35actP/rfkVndUj4LBCohoLJKxfqjj2LSG1vqddEvZP1sd3f3O9lu8mSX/wMzLhYLqipzDAAAAABJRU5ErkJggg==";



var IMagePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(IMagePicker, _React$Component);

  var _super = _createSuper(IMagePicker);

  function IMagePicker(props) {
    var _this;

    _classCallCheck(this, IMagePicker);

    _this = _super.call(this, props);
    _this.state = {
      viewerVisible: false,
      viewerPosition: 0
    };
    return _this;
  }

  _createClass(IMagePicker, [{
    key: "destroy",
    value: function destroy() {// TODO 销毁
    }
  }, {
    key: "getValue",
    value: function getValue(value) {
      var result = [];

      if (value !== undefined && value !== '' && value !== null) {
        if (typeof value === 'string') {
          var array = value.split(',');
          result = array.map(function (item) {
            return {
              src: item
            };
          });
        } else {
          result = value.map(function (item) {
            return !item.src ? {
              src: item
            } : item;
          });
        }
      }

      return result;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          title = _this$props.title,
          uploadText = _this$props.uploadText,
          _onSelect = _this$props.onSelect,
          ismust = _this$props.ismust,
          onDelete = _this$props.onDelete,
          onClick = _this$props.onClick,
          style = _this$props.style,
          errSrc = _this$props.errSrc,
          _this$props$count = _this$props.count,
          count = _this$props$count === void 0 ? 1 : _this$props$count,
          value = _this$props.value,
          readOnly = _this$props.readOnly,
          placeholder = _this$props.placeholder,
          restProps = _objectWithoutProperties(_this$props, ["prefixCls", "title", "uploadText", "onSelect", "ismust", "onDelete", "onClick", "style", "errSrc", "count", "value", "readOnly", "placeholder"]);

      var files = this.getValue(value);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_3__["Consumer"], null, function (_ref) {
        var ImagePicker = _ref.ImagePicker;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: prefixCls,
          style: style
        }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ismust ? '*' : ''), title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, files.length !== 0 ? files.map(function (item, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: "li-".concat(index)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "".concat(prefixCls, "-outer")
          }, onDelete && !readOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "".concat(prefixCls, "-close"),
            type: "delete_fill",
            onClick: function onClick() {
              onDelete(index);
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "".concat(prefixCls, "-img-wrap")
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            ref: function ref(img) {
              return _this2.img = img;
            },
            onError: function onError() {
              return _this2.img.src = errSrc || errorPng;
            },
            onLoad: function onLoad(e) {
              var width = e.target.clientWidth;
              var height = e.target.clientHeight;

              if (width > height) {
                e.target.style.height = '100%';
              } else {
                e.target.style.width = '100%';
              }
            },
            onClick: function onClick() {
              _this2.setState({
                viewerVisible: true,
                viewerPosition: index
              });
            },
            src: typeof item.src === 'string' ? item.src : window.URL.createObjectURL(item.src)
          }))));
        }) : readOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "noData"
        }, ImagePicker.noData), files.length < count && !readOnly ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "".concat(prefixCls, "-upload")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-upload-outer")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "".concat(prefixCls, "-upload-icon"),
          type: "add",
          size: "large"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_upload_index__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, restProps, {
          refCb: function refCb(input) {
            return _this2.upload = input;
          },
          readOnly: readOnly,
          onSelect: function onSelect(files) {
            return _onSelect(files);
          }
        }))) : null), placeholder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-placeholder")
        }, placeholder), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image_viewer_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
          visible: _this2.state.viewerVisible,
          position: _this2.state.viewerPosition,
          onClose: function onClose() {
            _this2.setState({
              viewerVisible: false
            });
          }
        }, files.map(function (item, idx) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            key: idx,
            style: {
              maxHeight: "100%",
              maxWidth: "100%"
            },
            src: item.src,
            onClick: function onClick(_) {
              _this2.setState({
                viewerVisible: false
              });
            }
          });
        })));
      });
    }
  }]);

  return IMagePicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(IMagePicker, "defaultProps", {
  prefixCls: 'wme-image-picker',
  count: 9,
  onSelect: function onSelect() {}
});

/* harmony default export */ __webpack_exports__["default"] = (IMagePicker);

/***/ }),

/***/ "./src/image-picker/style/index.less":
/*!*******************************************!*\
  !*** ./src/image-picker/style/index.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/image-viewer/index.js":
/*!***********************************!*\
  !*** ./src/image-viewer/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _swipe_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../swipe/index */ "./src/swipe/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/**
 * 图片预览
 * @author mars.xu
 * edit by john.gao
 */


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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






var ImageViewer = /*#__PURE__*/function (_React$Component) {
  _inherits(ImageViewer, _React$Component);

  var _super = _createSuper(ImageViewer);

  function ImageViewer(props) {
    var _this;

    _classCallCheck(this, ImageViewer);

    _this = _super.call(this, props);
    _this.rootEl = document.createElement('div');
    document.body.appendChild(_this.rootEl);
    return _this;
  }

  _createClass(ImageViewer, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rootEl) {
        document.body.removeChild(this.rootEl);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          visible = _this$props.visible,
          onClose = _this$props.onClose,
          _this$props$position = _this$props.position,
          position = _this$props$position === void 0 ? 0 : _this$props$position,
          children = _this$props.children;
      return visible ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, className)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swipe_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
        indicator: true,
        showCloseBtn: true,
        startSlide: position,
        style: {
          container: {
            width: "100%"
          },
          wrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        },
        swipeOptions: {
          startSlide: position,
          continuous: false,
          stopPropagation: true
        },
        close: function close(_) {
          if (onClose) {
            onClose();
          }
        }
      }, children)), this.rootEl) : null;
    }
  }]);

  return ImageViewer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ImageViewer, "defaultProps", {
  prefixCls: 'image-viewer',
  position: 0 //预览图片的初始位置

});



/***/ }),

/***/ "./src/image-viewer/style/index.less":
/*!*******************************************!*\
  !*** ./src/image-viewer/style/index.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Version, Button, Input, Toast, Flex, Menu, List, Switch, SwitchItem, Message, Avatar, Upload, ImagePicker, Calendar, Gesture, TextArea, Picker, MultiPicker, WmePicker, Scroller, PullToRefresh, Grid, PopLayer, SelectPicker, DatePicker, Swipe, Loading, Text, Checkbox, Axis, Icon, HrSection, HrConstantCode, HrDynamic, HrComboBox, HrSetId, HrModal, HrImagePicker, Tabs, Accordion, Grade, ImageViewer, LocaleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version/index */ "./src/version/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return _version_index__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/index */ "./src/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_index__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input/index */ "./src/input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input_index__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _toast_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast/index */ "./src/toast/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _toast_index__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _flex_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flex/index */ "./src/flex/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return _flex_index__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _menu_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/index */ "./src/menu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _menu_index__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _list_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/index */ "./src/list/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _list_index__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _switch_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./switch/index */ "./src/switch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _switch_index__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _switch_item_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./switch-item/index */ "./src/switch-item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchItem", function() { return _switch_item_index__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _message_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message/index */ "./src/message/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _message_index__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _avatar_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./avatar/index */ "./src/avatar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return _avatar_index__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _upload_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upload/index */ "./src/upload/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return _upload_index__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _image_picker_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image-picker/index */ "./src/image-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagePicker", function() { return _image_picker_index__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _calendar_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calendar/index */ "./src/calendar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return _calendar_index__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _gesture_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gesture/index */ "./src/gesture/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gesture", function() { return _gesture_index__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _textarea_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./textarea/index */ "./src/textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return _textarea_index__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _picker_Picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./picker/Picker */ "./src/picker/Picker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _picker_Picker__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _picker_MultiPicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./picker/MultiPicker */ "./src/picker/MultiPicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiPicker", function() { return _picker_MultiPicker__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _picker_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./picker/index */ "./src/picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WmePicker", function() { return _picker_index__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _scroller_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scroller/index */ "./src/scroller/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scroller", function() { return _scroller_index__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _pull_to_refresh_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pull-to-refresh/index */ "./src/pull-to-refresh/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PullToRefresh", function() { return _pull_to_refresh_index__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _grid_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./grid/index */ "./src/grid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _grid_index__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _pop_layer_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pop-layer/index */ "./src/pop-layer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopLayer", function() { return _pop_layer_index__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _select_picker_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./select-picker/index */ "./src/select-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectPicker", function() { return _select_picker_index__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _date_picker_index__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./date-picker/index */ "./src/date-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _date_picker_index__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _swipe_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./swipe/index */ "./src/swipe/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swipe", function() { return _swipe_index__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _loading_index__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./loading/index */ "./src/loading/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _loading_index__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _text_index__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./text/index */ "./src/text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text_index__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _checkbox_index__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./checkbox/index */ "./src/checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox_index__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _axis_index__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./axis/index */ "./src/axis/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Axis", function() { return _axis_index__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./icon/index */ "./src/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _hr_section_index__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./hr-section/index */ "./src/hr-section/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HrSection", function() { return _hr_section_index__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _hr_constant_code_index__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./hr-constant-code/index */ "./src/hr-constant-code/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HrConstantCode", function() { return _hr_constant_code_index__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _hr_dynamic_index__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./hr-dynamic/index */ "./src/hr-dynamic/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HrDynamic", function() { return _hr_dynamic_index__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _hr_combo_box_index__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./hr-combo-box/index */ "./src/hr-combo-box/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HrComboBox", function() { return _hr_combo_box_index__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _hr_set_id_index__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./hr-set-id/index */ "./src/hr-set-id/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HrSetId", function() { return _hr_set_id_index__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _hr_modal_index__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./hr-modal/index */ "./src/hr-modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HrModal", function() { return _hr_modal_index__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _hr_image_picker_index__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./hr-image-picker/index */ "./src/hr-image-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HrImagePicker", function() { return _hr_image_picker_index__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _tabs_index__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./tabs/index */ "./src/tabs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _tabs_index__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _accordion_index__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./accordion/index */ "./src/accordion/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _accordion_index__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _grade_index__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./grade/index */ "./src/grade/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grade", function() { return _grade_index__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _image_viewer_index__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./image-viewer/index */ "./src/image-viewer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageViewer", function() { return _image_viewer_index__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _locale_provider_index__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./locale-provider/index */ "./src/locale-provider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocaleProvider", function() { return _locale_provider_index__WEBPACK_IMPORTED_MODULE_42__["default"]; });













































/***/ }),

/***/ "./src/input/index.js":
/*!****************************!*\
  !*** ./src/input/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/index */ "./src/icon/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * 输入框
 * @author john.gao
 */






var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {
      isEyeOpen: false // 是否显示明文

    };
    return _this;
  }

  _createClass(Input, [{
    key: "getValue",
    value: function getValue(e) {
      var value = e.target.value;
      var _this$props = this.props,
          type = _this$props.type,
          digit = _this$props.digit;

      switch (type) {
        case 'text':
          break;

        case 'phone':
          value = value.replace(/\D/g, '').substring(0, 11);
          break;

        case 'number':
          value = value.replace(/\D/g, '');
          break;

        case 'decimal':
          if (digit) {
            if (value) {
              value = Math.floor(value * 100) / 100;
            }
          }

          break;

        default:
          break;
      }

      return value;
    }
  }, {
    key: "handleInput",
    value: function handleInput(e) {
      var value = this.getValue(e); // if (this.isComposing) return;

      var onChange = this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      this.fValue = e.target.value;
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      if (e.target.value === this.fValue) return;
      var value = this.getValue(e);
      var onChange = this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    }
  }, {
    key: "onInputClear",
    value: function onInputClear() {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange('');
      }
    }
  }, {
    key: "formatThousand",
    value: function formatThousand(value) {
      if (value) {
        return value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
      }

      return value;
    }
  }, {
    key: "handleCapture",
    value: function handleCapture() {
      this.setState({
        isEyeOpen: !this.state.isEyeOpen
      });

      if (this.props.onClick) {
        this.props.onClick(this.props.type === 'password' ? 'text' : 'password');
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          value = _this$props2.value,
          className = _this$props2.className,
          icon = _this$props2.icon,
          eye = _this$props2.eye,
          type = _this$props2.type,
          size = _this$props2.size,
          search = _this$props2.search,
          onChange = _this$props2.onChange,
          onReset = _this$props2.onReset,
          readOnly = _this$props2.readOnly,
          refCb = _this$props2.refCb,
          active = _this$props2.active,
          onClick = _this$props2.onClick,
          close = _this$props2.close,
          otherProps = _objectWithoutProperties(_this$props2, ["prefixCls", "value", "className", "icon", "eye", "type", "size", "search", "onChange", "onReset", "readOnly", "refCb", "active", "onClick", "close"]);

      var style = otherProps.style,
          title = otherProps.title,
          maxLength = otherProps.maxLength,
          unit = otherProps.unit,
          align = otherProps.align,
          ismust = otherProps.ismust,
          disabled = otherProps.disabled,
          name = otherProps.name,
          placeholder = otherProps.placeholder,
          _otherProps$autoCompl = otherProps.autoComplete,
          autoComplete = _otherProps$autoCompl === void 0 ? 'new-password' : _otherProps$autoCompl;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-icon"), icon !== undefined), _defineProperty(_classnames, "".concat(prefixCls, "-search"), icon === 'search'), _defineProperty(_classnames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_classnames, "".concat(prefixCls, "-align-left"), align === 'left'), _defineProperty(_classnames, "".concat(prefixCls, "-align-center"), align === 'center'), _defineProperty(_classnames, "".concat(prefixCls, "-align-right"), align === 'right'), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-read-only"), readOnly), _classnames));
      var iconCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-icon-").concat(icon), _defineProperty({}, "".concat(prefixCls, "-icon-").concat(icon, "-active"), active));
      var inputType = 'text';

      if (type === 'phone') {
        inputType = 'tel';
      } else if (type === 'password') {
        inputType = 'password';
      } else if (type === 'decimal') {
        inputType = 'number';
      } else if (type !== 'text' && type !== 'number') {
        inputType = type;
      }

      var patternProps;

      if (type === 'number') {
        patternProps = {
          pattern: '[0-9]*'
        };
      }

      var needClose = close && value && !disabled;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: wrapCls,
        style: style
      }, !!icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: iconCls
      }), !!title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ismust ? '*' : ''), title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, patternProps, {
        name: name,
        placeholder: placeholder,
        disabled: disabled,
        maxLength: maxLength,
        onChange: function onChange(e) {
          return _this2.handleInput(e);
        },
        onFocus: function onFocus(e) {
          return _this2.handleFocus(e);
        },
        onBlur: function onBlur(e) {
          return _this2.handleBlur(e);
        },
        readOnly: readOnly,
        type: inputType,
        ref: function ref(input) {
          refCb ? refCb(input) : _this2.input = input;
        },
        autoComplete: autoComplete,
        value: value || ''
      })), !!unit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-unit")
      }, unit), needClose && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "".concat(prefixCls, "-close"),
        type: "delete_fill",
        onClick: function onClick(e) {
          onReset && onReset();

          _this2.onInputClear(e);
        }
      }), eye && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "eye",
        onClick: function onClick(e) {
          return _this2.handleCapture(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: this.state.isEyeOpen ? 'eye-close' : 'eye'
      })));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Input, "defaultProps", {
  prefixCls: 'wme-input',
  type: 'text',
  size: 'large',
  align: 'left'
});



/***/ }),

/***/ "./src/input/style/index.less":
/*!************************************!*\
  !*** ./src/input/style/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/list/ListItem.js":
/*!******************************!*\
  !*** ./src/list/ListItem.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/index.js */ "./src/icon/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * ListItem
 * @author john.gao
 */





var errSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAADYhJREFUeAHdW1tsHFcZ3rns7Hpv9tqOndjOzbWD2yaO0xslTWJXLS88IEFbyEt5QqUgVQJKn5B444m2CCqhgugLQgJUSiUe4KVVkzihCdS1E7uJ49hOHK/v9l68673PDN+/9Syz69nZmdnZuGGk2f/MOf/tfPuf/5w5M8M47uEhyzKby+VOwGQ/yl8CpbMb5QDDMH6U6aQjjro46jZRvo3zJso3Qa86nc5RlCWU78nB1NsKOroPoDwP+gxsDYI21WIT4EQhfx70Q4D1HuhiLfqqydYFIIDgzmazz4G+iA48C8pVc8RKO3RL0P0B6B8EQSCw0lb06MnYChCc9WYymZdh8FWc+/QM16FtGTrfcLlcbwOohF36bQEIwPAA5hU49lOUW+xyzooe+BCGDz8HUL9GOW9Fh1qmZoCQX05JkvQbOHVMrXi3ywBngmXZHyBPDdfii2WAAIgAcH4B+gpOy3pqcd6g7FuIpp8AsKxB/hI2Sx0DIN1Iwn8BfaxE2xf0AuCMIIl/G3TGrIumAULUPI0h9T7AaTRrbDf5Ac4mhtw3MeQ+NOMHa4YZifh5gPPP+w0c6iN8DsD3f6APL5jps2GAMKS+C8U0rFxmDHyReOG7AH/+jL68ZNQvQ0OMIgcKCRzDgBp1YDf4MNzoVuUskve71exXBWg759Cwum8jRwsEgJRFTvpatZykCxBAodnqU9D7KiFrAaJVR4kbs9sjoBVnt4pDBqAI21P5/yU4BBj6GNjuI+UmzaMiQNuLwPtinaPZM4OVAOlR5Ng3KrFrDjGA8xSmxGEIa7ZXUnY/13Mcd0brtmQHAACFR9iNgPbXs8PQn1xdXbuxsrISj8ViTbIsuSXJ0YDAz7Msk0MCTXu93lhXV5entbX1YeQJTz39gf4J5KMToCU3uDsASqfTP4Ijb9bLmVQqszQ5eX0qGo09BpC85XbgYA71TnU9wzgygUDjlQcf7Ov2eDxd6jaby6+63e6SvpcARA4jeuZAbd+ywJDdunp1/JNoNHKyHAB1J7UAUtrp3/X5fJdPnBg4yvN8TTuTik41hf4wouggaHE/qQQgRM+PIVAxYamVmSljCF0fHR1rAEiHq8npAaTIMgy7MDDQvxEMBuuRBl5DFL1etKUU8K+6kM1pg9zWncC5uflLs7MzT+hFjeIDUSMAbfOL+/d3Xezt7R1Uy9tQXsYK+zD8KGzfFqd5DK3noNxWcEKhxY9nZqafNAqOyc5x8/OhwdnZ2Zo2xDRs7gUWdGtVOIoAoRPfUSrtoGtra/+5dWuK1lF12bBXfLxzZ+4p/BGXlWs7KLB4UdFTAAgVexFSzyqVtdJ8Ph+dmPjsUJ0ip9w9dmrqZj/y50J5g9VrwgK+d5B8ASAsDOm5lW3/9NjY2Dj07THrIMswIayB5szKgd+DSWDegpymCHxnt3cwPgcIFc9oclqojEQi45ub8dMWRB3twebpzpaWkBXZVCr15MrK6ogVWS0ZRFEBE5bQAoNtM8H09ExMy2C1OjiU6+3sONK9r/MoypYeAE5NTdk2CuDvGcKGnpUPoBCs1gEj7dCTTCQSA0Z4y3n2BlsuuQWhQ+C51gNtbVfK241coy/HkP82jPBW40FfmqDvBEWPbYutUCg0BsW+asbL250cf62/+1BxWPbt33/GJQhWhgsXCi1cL9dfw/VxGmL0hoUtx/p6OGdWEW5KZ04efbgdfhSHB8rMyYceOsRz7KRZfUtLyxX3dszqImwogmwDKJVKus04gfupG4P9/U0unm8vl3NyXMtg//F9Tp4fL2/Tu85k0m167SbbCgBVvT8yqhTj32+Ut9HrvTDU399FQFSS4Vi2ETwPtPgD58Fj6J0g3O/traTPQv1hHmEUsCCoKSKKYqtmg6oSG1Ozxw4fjrQ1Np5RVVcsYkbzPHqkd3A9tnltbHYWe0bikYrMnzfYOcQCPHQa/terOOZwC66ZVCZNIBUWoAo/TeEup3C1t7NT7mhppn2gbqXNKG1tDPQ/e2LAsRKJfnprYT6fymaPy7Kj5EkL7MhOnrsGnfQWW80H9PkZrBhTcNhU7qhk2RlP3Eil043L4chtURYlB15vagr4g81eXy/DsrbYKNqW5Wx0a2tqI74ZoTqe45i2xqaDHrc7lQv4q0VZUY1eAQBlCaAtAGTLdiYXT/ybkaQn9IzWuw1Luyui3/dlO+wAoDRN8/TOny0Hw3EpWxTVooRhLa3CtUwSNrg/LLwUqdVuuk7inTv2mE0rqVGAaXDZNpQJG0qmlu6dtPohu5z9UBrXarsXdbC9KfK8pVudCv4VAFqv0Gi6GiEpYJjRLLIrh8yxtM1SMrPV6MgGRdBEjUpKxPOehnb8k2JJ5T24gE1JdDVUXYeZdGWCABozKaTLLjFMj8xx/9JlqkMjbF6Seda226ZtF0dpFhu121/R09CDf9S22bGaf5R78g0NfdX4zLYDmzEWjzimYSBhVliPX2aYfZLXMwO9dR9qZEP2em46WMb0Fq9eH6B3C9jcomleBuMHesxW2kSOe1QSnBetyJqRkQTXxTzHPW5GxiDvh8BGohxED+veNyhkik10uwdll3Ae+m2PJHLe4XKfE92CbdvF6s5B/9/omqEfjLUgHpatgtLNq+0Hlxc/YZPJXui35WUsOB+VPJ5pkeces91ZKIT+PJ7R02wcViIoAuc/qocx0kkdyft9cQfLXYJRGtKWjoIsZsicz5uoFzjkGLA4T+BQuRgxqHgHDV+lynocSNxdeb+3i5WkSWYrGQMdAFKGFnWMg8lKLDOKxN8ksezJevin1gksfq9cF4YYXQAcDnf2t1C0bYdRMaJF0ekEm81OcPlcTsyLAZZxNGF75POZiGXWsFMS43g+JvJOHsn+KMC0bd9Kyx9V3R3MXrRMKeRNdQSJyENvYsvyLRVzXYq0UY8zxApe2qhv4RmG9pGbVMY6MfbpxpfnZDmMLZRR+NWFs1vFU5ci/HpTAYcMFCOILhBFHoB0F7TiPjHxWTmwe7a2kQ5/1tnY4XXIDkvTsuyQRxZiS/EWd/AhjuHs3JwvdAnA0AtUB0C3lD4WkrRygYYkzp8p13ZQAmYxuXLhdvxu42Y2MbS6tRYPxUPDsFPyLqCeLfCKJLOaXI/Fc4mhO4n54EJyaRi7lqt6cmbbqO84i+CQfEkEUQWiB6khexnU0r9MOpQjnIkMR7MxPLn9X/7YyifOZXKZIY7lJwbaj/ndvPugwq9F0/n03NWV8Xheyh91ccI5r+AfUvFtNQmBkRZ3s6EHACq5HUUAQ59MPQFa8vSkJIJIihhwfr+ccYdGnQrI5pdSq+cjmdhpNTgkkstlC7lGRIdHlsda5xEZlVRR28jyaAuBQzxZKV/+iNwbzW6eoWiCTUsfzJFe6ivOl4nStfrYEUFKI6Lol0iKP1SujVKJkTbubobmRVka0JIJp8IhxGnJm6pup+vKQPvxHuSVQu7D0NkYW7k6nc5lSvaWWYYNNbmDJbKKDdbBXjsY6NoHukepM0qRmH+F6NHsa0WAMMToU4RzoF8xagighOcSoQTeeT5QSSaSDi9B545X/TDtr/a29t6hVeT0+q1DSMg7kjD+4eWgu7nig0F6v+igf7/LDEjQeRngDIJqRuCOIaZ0jAQg+Dyul5U6PQp+ObS1OKMHDsnLUoXbGcbhn4/NZ0LRUBaZUXPNA9CKyxItX7B26robX5iHLzuGihY/6laoj5XAIZmKAFEjBBfxJPQF0KovJaym1s4jV1RN7Ay788aVcbCTje7GxQbec7rB2XCKylRHPpQccvXHzxiej6wkVy+UyGlcoE/YBOC+Bar76p4uQKQX3y9cBDmrB1JKTF3bzCVOafixowpjurgHDp2Sk3OdC3qCD7AO7gGFmcqo66Y24lHqUV5Tyno0kU+eTuZTY5V4oIeWGGfRt6pAVgWIjGDpTbf+miBRB5aTqz4s/nTDn/TQ4WSFAkDIFws+l3/cL/iGIFvy6UGBUXYI1OYT/OOUnKmOZ52GAEKO45ZTa83bQBTUKT8KOOjTe0qdHjUEECnYBok+rS4ZbrHs5scY+916RtRtHsHbR+uZoKfF52Scx9VtWmUn6zwe9DT7ScYn+Axvq1IuDGeil9U6t32nTzENgUOyFWcxtWJ1Ga+lncJbHO+irjCb3EncnRQlybDjal31LiPypg/7D/Rs21mhfKr1yZOeH6YBImU0TWMJ8NeslG3HrFHMHXqGdqttv79j0sW6Ituz1aJZPwwPMbVihOoSDA6FM7F3ULZ9O1Vtq5Yy+RZORf8IX2mdYxocsm0pgtRO3wjPHJPF3Fu4pRhU1+92GYBcYDn5lb7mvpqe9NYMkALE9bWbZ1F+HcOvU6nbDQpgFrAqf+3BPUf+ZId92wAiZ5blZW9kPfY9rHhfQkTZ/ZRTt7/4KnEKwPy2pTX4uzamzbbnfLYCpO7B5Nr005JDJLC+gXWOoG6zrcw4cgDlfSws3+7b0/ORbXpViuoGkGJjOj7dlk2LXwdIp3EjitW28TWTokNNAchtXA8jew4Lbu7vPf4eWzfN1LaoXHeAyg1Ort3tEOXkKWzSPy47GHo/uhXAteJhUCu8wXYHPkWXmXX8rsM5WnWDyit4t/wTlmkY7ttzwNJsVO6H0ev/AvaYc51dpzsrAAAAAElFTkSuQmCC';

var ListItem = /*#__PURE__*/function (_React$Component) {
  _inherits(ListItem, _React$Component);

  var _super = _createSuper(ListItem);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _super.apply(this, arguments);
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _classnames,
          _classnames2,
          _classnames3,
          _classnames4,
          _classnames5,
          _this = this; // 前缀、样式名、对齐方式、文本对齐方式、超出长度省略号、换行、样式、多行文本、箭头、错误、不可编辑、分割线、类型>title:标题


      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          align = _this$props.align,
          textAlign = _this$props.textAlign,
          ellipsis = _this$props.ellipsis,
          wrap = _this$props.wrap,
          style = _this$props.style,
          multipleLine = _this$props.multipleLine,
          arrow = _this$props.arrow,
          error = _this$props.error,
          disabled = _this$props.disabled,
          divider = _this$props.divider,
          type = _this$props.type,
          size = _this$props.size; // children、选中、点击事件、右侧补充内容、图片、图片高亮、Icon、Icon大小、高亮底线

      var _this$props2 = this.props,
          children = _this$props2.children,
          selected = _this$props2.selected,
          _onClick = _this$props2.onClick,
          _onClickCapture = _this$props2.onClickCapture,
          extra = _this$props2.extra,
          thumb = _this$props2.thumb,
          thumbLight = _this$props2.thumbLight,
          icon = _this$props2.icon,
          iconSize = _this$props2.iconSize,
          underline = _this$props2.underline; // 对齐、错误、不可编辑

      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-item"), className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-item-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-item-error"), error), _defineProperty(_classnames, "".concat(prefixCls, "-item-top"), align === 'top'), _defineProperty(_classnames, "".concat(prefixCls, "-item-center"), align === 'center'), _defineProperty(_classnames, "".concat(prefixCls, "-item-bottom"), align === 'bottom'), _defineProperty(_classnames, "".concat(prefixCls, "-item-text-left"), textAlign === 'left'), _defineProperty(_classnames, "".concat(prefixCls, "-item-divider"), divider), _defineProperty(_classnames, "".concat(prefixCls, "-item-title"), type === 'title'), _defineProperty(_classnames, "".concat(prefixCls, "-item-view"), type === 'view'), _classnames)); // 图片

      var thumbCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-thumb"), (_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefixCls, "-thumb-large"), size === 'large'), _defineProperty(_classnames2, "".concat(prefixCls, "-thumb-small"), size === 'small'), _defineProperty(_classnames2, "".concat(prefixCls, "-thumb-normal"), size === 'normal'), _defineProperty(_classnames2, "".concat(prefixCls, "-thumb-square"), size === 'square'), _classnames2)); // iocn

      var iconCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-icon"), (_classnames3 = {}, _defineProperty(_classnames3, "".concat(prefixCls, "-icon-active"), selected), _defineProperty(_classnames3, "".concat(prefixCls, "-icon-unactive"), !selected), _classnames3)); // 多行文本、文本换行方式

      var lineCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-line"), (_classnames4 = {}, _defineProperty(_classnames4, "".concat(prefixCls, "-line-multiple"), multipleLine), _defineProperty(_classnames4, "".concat(prefixCls, "-line-ellipsis"), ellipsis), _defineProperty(_classnames4, "".concat(prefixCls, "-line-wrap"), wrap), _defineProperty(_classnames4, "".concat(prefixCls, "-line-selected"), selected), _classnames4)); // 箭头和它方向

      var arrowCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-arrow"), (_classnames5 = {}, _defineProperty(_classnames5, "".concat(prefixCls, "-arrow-horizontal"), arrow === 'horizontal'), _defineProperty(_classnames5, "".concat(prefixCls, "-arrow-vertical"), arrow === 'down' || arrow === 'up'), _defineProperty(_classnames5, "".concat(prefixCls, "-arrow-vertical-up"), arrow === 'up'), _classnames5)); // 当前选中

      var underlineCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-underline"));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style,
        className: wrapCls,
        onClick: function onClick(e) {
          return _onClick && _onClick(e);
        },
        onClickCapture: function onClickCapture(e) {
          return _onClickCapture && _onClickCapture(e);
        }
      }, thumb ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        ref: function ref(img) {
          return _this.img = img;
        },
        onError: function onError() {
          return _this.img.src = errSrc;
        },
        className: thumbCls,
        src: selected ? thumbLight : thumb
      }) : null, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: icon,
        size: iconSize,
        className: iconCls
      })) : null, children !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: lineCls
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children), extra !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra), arrow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "enter",
        size: "small",
        className: arrowCls
      }), underline && selected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: underlineCls
      })));
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ListItem, "defaultProps", {
  prefixCls: 'wme-list',
  align: 'center',
  error: false,
  multipleLine: false,
  wrap: false
});



/***/ }),

/***/ "./src/list/index.js":
/*!***************************!*\
  !*** ./src/list/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItem */ "./src/list/ListItem.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/**
 * List
 * @author john.gao
 */






var List = /*#__PURE__*/function (_React$Component) {
  _inherits(List, _React$Component);

  var _super = _createSuper(List);

  function List() {
    _classCallCheck(this, List);

    return _super.apply(this, arguments);
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children,
          direction = _this$props.direction,
          className = _this$props.className,
          style = _this$props.style,
          type = _this$props.type;
      var _this$props2 = this.props,
          renderHeader = _this$props2.renderHeader,
          renderFooter = _this$props2.renderFooter;
      var bodyCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-body"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-body-row"), direction === 'row'), _defineProperty(_classnames, "".concat(prefixCls, "-body-column"), direction === 'column'), _defineProperty(_classnames, "".concat(prefixCls, "-body-view"), type === 'view'), _classnames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className),
        style: style
      }, renderHeader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, typeof renderHeader === 'function' ? renderHeader() : renderHeader) : null, children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: bodyCls
      }, children) : null, renderFooter ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, typeof renderFooter === 'function' ? renderFooter() : renderFooter) : null);
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

List.defaultProps = {
  prefixCls: 'wme-list',
  direction: 'row'
};
List.Item = _ListItem__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/list/style/index.less":
/*!***********************************!*\
  !*** ./src/list/style/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/loading/Loading.js":
/*!********************************!*\
  !*** ./src/loading/Loading.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/index */ "./src/icon/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * Loading
 * @author john.gao
 */






var Loading = /*#__PURE__*/function (_React$Component) {
  _inherits(Loading, _React$Component);

  var _super = _createSuper(Loading);

  function Loading() {
    _classCallCheck(this, Loading);

    return _super.apply(this, arguments);
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "loading",
        size: "large"
      }));
    }
  }]);

  return Loading;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Loading, "defaultProps", {
  prefixCls: 'wme-loading'
});



/***/ }),

/***/ "./src/loading/index.js":
/*!******************************!*\
  !*** ./src/loading/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ "./src/loading/Loading.js");
/**
 * Loading
 * @author john.gao
 */



var loadingInstance;
var prefixCls = 'wme-loading';

function newInstance() {
  var div = document.createElement('div');
  document.body.appendChild(div);
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prefixCls: prefixCls
  }), div);
  return {
    destroy: function destroy() {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  show: function show() {
    this.hide();
    loadingInstance = newInstance();
  },
  hide: function hide() {
    if (loadingInstance) {
      loadingInstance.destroy();
      loadingInstance = null;
    }
  }
});

/***/ }),

/***/ "./src/loading/style/index.less":
/*!**************************************!*\
  !*** ./src/loading/style/index.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/locale-provider/HrContext.js":
/*!******************************************!*\
  !*** ./src/locale-provider/HrContext.js ***!
  \******************************************/
/*! exports provided: Consumer, Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var _React$createContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),
    Consumer = _React$createContext.Consumer,
    Provider = _React$createContext.Provider;



/***/ }),

/***/ "./src/locale-provider/en_US.js":
/*!**************************************!*\
  !*** ./src/locale-provider/en_US.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  locale: 'en_US',
  Grade: {
    ok: 'Ok',
    cancel: 'Cancel',
    tips: ' starts'
  },
  Picker: {
    ok: 'Ok',
    cancel: 'Cancel'
  },
  ImagePicker: {
    uploadText: 'Upload',
    noData: 'No Data'
  },
  DatePicker: {
    pickerTitle: 'Please select date',
    ok: 'Ok',
    cancel: 'Cancel'
  },
  Gesture: {
    tips: 'At least connect four points'
  },
  PullToRefresh: {
    downLabel: 'Pull down loading',
    releaseLabel: 'Release refresh',
    loadingLabel: 'Loading'
  },
  SelectPicker: {
    pickerTitle: 'Please select'
  }
});

/***/ }),

/***/ "./src/locale-provider/index.js":
/*!**************************************!*\
  !*** ./src/locale-provider/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocaleProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HrContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HrContext */ "./src/locale-provider/HrContext.js");
/* harmony import */ var _zh_CN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zh_CN */ "./src/locale-provider/zh_CN.js");
/* harmony import */ var _en_US__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en_US */ "./src/locale-provider/en_US.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}





var langs = {
  zh_CN: _zh_CN__WEBPACK_IMPORTED_MODULE_2__["default"],
  en_US: _en_US__WEBPACK_IMPORTED_MODULE_3__["default"]
};

var LocaleProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(LocaleProvider, _React$Component);

  var _super = _createSuper(LocaleProvider);

  function LocaleProvider() {
    _classCallCheck(this, LocaleProvider);

    return _super.apply(this, arguments);
  }

  _createClass(LocaleProvider, [{
    key: "render",
    value: function render() {
      console.log();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HrContext__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
        value: langs[this.props.locale]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children));
    }
  }]);

  return LocaleProvider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/locale-provider/zh_CN.js":
/*!**************************************!*\
  !*** ./src/locale-provider/zh_CN.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  locale: 'zh_CN',
  Grade: {
    ok: '确定',
    cancel: '取消',
    tips: '星好评'
  },
  Picker: {
    ok: '确定',
    cancel: '取消'
  },
  ImagePicker: {
    uploadText: '上传附件',
    noData: '无'
  },
  DatePicker: {
    pickerTitle: '请选择时间',
    ok: '确定',
    cancel: '取消'
  },
  PullToRefresh: {
    downLabel: '下拉刷新',
    releaseLabel: '释放刷新',
    loadingLabel: '正在加载'
  },
  SelectPicker: {
    pickerTitle: '请选择'
  }
});

/***/ }),

/***/ "./src/menu/index.js":
/*!***************************!*\
  !*** ./src/menu/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scroller_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scroller/index */ "./src/scroller/index.js");
/* harmony import */ var _flex_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flex/index */ "./src/flex/index.js");
/* harmony import */ var _list_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list/index */ "./src/list/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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







var Menu = /*#__PURE__*/function (_React$Component) {
  _inherits(Menu, _React$Component);

  var _super = _createSuper(Menu);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, props);
    _this.state = {
      firstLevelSelectValue: props.value
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        if (this.state.firstLevelSelectValue !== nextProps.value) {
          this.setState({
            firstLevelSelectValue: nextProps.value
          });
        }
      }
    }
  }, {
    key: "onClickFirstLevelItem",
    value: function onClickFirstLevelItem(dataItem) {
      var onChange = this.props.onChange;
      this.setState({
        firstLevelSelectValue: dataItem.value
      });

      if (onChange) {
        onChange([dataItem.value]);
      }
    }
  }, {
    key: "scrollToStart",
    value: function scrollToStart() {
      this.Scroller.scrollTo(0, 0);
    }
  }, {
    key: "scrollToEnd",
    value: function scrollToEnd() {
      var maxScrollX = Math.abs(this.Scroller.getMaxScrollX());
      this.Scroller.scrollTo(maxScrollX, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          _this$props$data = _this$props.data,
          data = _this$props$data === void 0 ? [] : _this$props$data,
          height = _this$props.height,
          prefixCls = _this$props.prefixCls,
          direction = _this$props.direction,
          scroller = _this$props.scroller,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 'square' : _this$props$size,
          itemStyle = _this$props.itemStyle,
          labelStyle = _this$props.labelStyle;
      var _this$state = this.state,
          firstLevelSelectValue = _this$state.firstLevelSelectValue,
          value = _this$state.value;
      var heightStyle = {
        height: height
      };
      var contentList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
        direction: direction
      }, data.map(function (dataItem, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_index__WEBPACK_IMPORTED_MODULE_4__["default"].Item, _extends({}, dataItem, {
          size: size,
          style: itemStyle,
          wrap: !!(scroller === true && direction === 'row'),
          onClick: function onClick() {
            return _this2.onClickFirstLevelItem(dataItem);
          },
          key: "listitem-1-".concat(index),
          selected: dataItem.value === firstLevelSelectValue
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: labelStyle
        }, dataItem.label));
      }));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_flex_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className),
        style: _objectSpread({}, style, {}, heightStyle),
        direction: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_flex_index__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
        style: heightStyle
      }, scroller === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_scroller_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ref: function ref(Comp) {
          return _this2.Scroller = Comp;
        },
        scrollX: direction === 'row',
        scrollY: direction === 'column'
      }, contentList) : contentList));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Menu, "defaultProps", {
  prefixCls: 'wme-menu',
  direction: 'row',
  height: '3rem',
  data: []
});



/***/ }),

/***/ "./src/menu/style/index.less":
/*!***********************************!*\
  !*** ./src/menu/style/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/message/Message.js":
/*!********************************!*\
  !*** ./src/message/Message.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/index */ "./src/button/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/**
 * Message
 * @author john.gao
 */







var Message = /*#__PURE__*/function (_React$Component) {
  _inherits(Message, _React$Component);

  var _super = _createSuper(Message);

  function Message() {
    _classCallCheck(this, Message);

    return _super.apply(this, arguments);
  }

  _createClass(Message, [{
    key: "close",
    // 关闭
    value: function close(e) {
      var _this$props = this.props,
          _this$props$isMaskClo = _this$props.isMaskClose,
          isMaskClose = _this$props$isMaskClo === void 0 ? true : _this$props$isMaskClo,
          onClose = _this$props.onClose;
      var container = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.refs.messageContainer);

      if (!this.isDescendant(container, e.target)) {
        e.stopPropagation();

        if (isMaskClose) {
          onClose();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.clearCloseTimer();

      if (this.props.duration) {
        this.closeTimer = setTimeout(function () {
          _this.props.onClose();
        }, this.props.duration * 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _classnames2,
          _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          icon = _this$props2.icon,
          title = _this$props2.title,
          content = _this$props2.content,
          action = _this$props2.action,
          onClose = _this$props2.onClose,
          className = _this$props2.className,
          direction = _this$props2.direction,
          _this$props2$isMaskCl = _this$props2.isMaskClose,
          isMaskClose = _this$props2$isMaskCl === void 0 ? true : _this$props2$isMaskCl;
      var iconWrap = classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-icon"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-icon-success"), icon === 'success'), _defineProperty(_classnames, "".concat(prefixCls, "-icon-fail"), icon === 'fail'), _classnames));
      var titleIconWrap = icon === 'success' ? "".concat(prefixCls, "-title-success") : '';
      var actionWrap = classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-action"), (_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefixCls, "-action-row"), direction === 'row'), _defineProperty(_classnames2, "".concat(prefixCls, "-action-column"), direction === 'column'), _classnames2));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, className),
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-container"),
        ref: "messageContainer"
      }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: iconWrap
      }), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: titleIconWrap
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: title
        }
      })), content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-content"),
        style: {
          maxHeight: window.screen.height * 0.7
        }
      }, content) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: actionWrap
      }, action && action.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: "button-".concat(index),
          className: "button",
          title: item.label,
          onClick: function onClick(e) {
            e.preventDefault();

            if (item.onClick) {
              item.onClick();
            }

            onClose();
          }
        });
      }))));
    }
    /**
     * 判断是否是子元素
     * @param  {Node}  parent 父元素
     * @param  {Node}  child  子元素
     * @return {Boolean}        true or false
     */

  }, {
    key: "isDescendant",
    value: function isDescendant(parent, child) {
      var node = child.parentNode;

      while (node != null) {
        if (node == parent) {
          return true;
        }

        node = node.parentNode;
      }

      return false;
    }
    /**
     * 清除定时器
     */

  }, {
    key: "clearCloseTimer",
    value: function clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    }
  }]);

  return Message;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Message.defaultProps = {
  prefixCls: 'wme-message',
  direction: 'row'
};
/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./src/message/index.js":
/*!******************************!*\
  !*** ./src/message/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ "./src/message/Message.js");
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
/**
 * Message
 * @author john.gao
 */





var messageInstance;
var prefixCls = 'wme-message';
/**
 * opts: 参数
 * @param {String}  title       标题
 * @param {String}  content     内容
 * @param {Array}   action      按钮数组[{label:'是', onClick:()=>{}]
 * @param {Number}  duration    弹窗停留时长 单位(秒)
 * @param {String}  direction   方向 row、column
 * @param {bool}    isMaskClose 点击遮罩是否可以关闭弹窗
 */

function newInstance(opts) {
  var icon = opts.icon,
      title = opts.title,
      content = opts.content,
      action = opts.action,
      restProps = _objectWithoutProperties(opts, ["icon", "title", "content", "action"]);

  var div = document.createElement('div');
  document.body.appendChild(div);
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    prefixCls: prefixCls,
    icon: icon,
    title: title,
    content: content,
    action: action
  }, restProps, {
    onClose: function onClose() {
      messageInstance && messageInstance.destroy();
      messageInstance = null;
    }
  })), div);
  return {
    destroy: function destroy() {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  alert: function alert(opts) {
    this.destroy();
    messageInstance = newInstance(opts);
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
});

/***/ }),

/***/ "./src/message/style/index.less":
/*!**************************************!*\
  !*** ./src/message/style/index.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/picker/MultiPicker.js":
/*!***********************************!*\
  !*** ./src/picker/MultiPicker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiPicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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




var MultiPicker = /*#__PURE__*/function (_React$Component) {
  _inherits(MultiPicker, _React$Component);

  var _super = _createSuper(MultiPicker);

  function MultiPicker() {
    var _this;

    _classCallCheck(this, MultiPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onValueChange", function (i, v) {
      _this.onChange(i, v, _this.props.onValueChange);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (i, v, cb) {
      var value = _this.getValue().concat();

      value[i] = v;

      if (cb) {
        cb(value, i);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onScrollChange", function (i, v) {
      _this.onChange(i, v, _this.props.onScrollChange);
    });

    return _this;
  }

  _createClass(MultiPicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style;
      var selectedValue = this.getValue();
      var colElements = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (col, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(col, {
          selectedValue: selectedValue[i],
          onValueChange: function onValueChange() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return _this2.onValueChange.apply(_this2, [i].concat(args));
          },
          onScrollChange: _this2.onScrollChange && function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return _this2.onScrollChange.apply(_this2, [i].concat(args));
          }
        });
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, prefixCls)
      }, colElements);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          selectedValue = _this$props2.selectedValue;

      if (selectedValue && selectedValue.length) {
        return selectedValue;
      }

      if (!children) {
        return [];
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(function (children, c) {
        var cc = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(c.children || c.props.children);
        return cc && cc[0] && cc[0].props.value;
      });
    }
  }]);

  return MultiPicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(MultiPicker, "defaultProps", {
  prefixCls: 'wme-multi-picker',
  onValueChange: function onValueChange() {}
});



/***/ }),

/***/ "./src/picker/Picker.js":
/*!******************************!*\
  !*** ./src/picker/Picker.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PickerItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PickerItem */ "./src/picker/PickerItem.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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





var Picker = /*#__PURE__*/function (_React$Component) {
  _inherits(Picker, _React$Component);

  var _super = _createSuper(Picker);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "rootRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "maskRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "contentRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "indicatorRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "itemHeight", void 0);

    _defineProperty(_assertThisInitialized(_this), "scrollValue", void 0);

    _defineProperty(_assertThisInitialized(_this), "scrollHanders", function () {
      var scrollY = -1;
      var lastY = 0;
      var startY = 0;
      var scrollDisabled = false;
      var isMoving = false;

      var setTransform = function setTransform(nodeStyle, value) {
        nodeStyle.transform = value;
        nodeStyle.webkitTransform = value;
      };

      var setTransition = function setTransition(nodeStyle, value) {
        nodeStyle.transition = value;
        nodeStyle.webkitTransition = value;
      };

      var scrollTo = function scrollTo(x, y) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.3;

        if (scrollY !== y) {
          scrollY = y;

          if (time && !_this.props.noAnimate) {
            setTransition(_this.contentRef.style, "cubic-bezier(0,0,0.2,1.15) ".concat(time, "s"));
          }

          setTransform(_this.contentRef.style, "translate3d(0,".concat(-y, "px,0)"));
          setTimeout(function () {
            _this.scrollingComplete();

            if (_this.contentRef) {
              setTransition(_this.contentRef.style, '');
            }
          }, +time * 1000);
        }
      };

      var Velocity = function () {
        var minInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
        var maxInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var time = 0;
        var oriY = 0;
        var _velocity = 0;
        var recorder = {
          record: function record(y) {
            var now = +new Date();
            _velocity = (y - oriY) / (now - time);

            if (now - time >= minInterval) {
              _velocity = now - time <= maxInterval ? _velocity : 0;
              oriY = y;
              time = now;
            }
          },
          getVelocity: function getVelocity(y) {
            if (y !== oriY) {
              recorder.record(y);
            }

            return _velocity;
          }
        };
        return recorder;
      }();

      var onFinish = function onFinish() {
        isMoving = false;
        var targetY = scrollY;
        var height = (_this.props.children.length - 1) * _this.itemHeight;
        var time = 0.3;
        var velocity = Velocity.getVelocity(targetY) * 4;

        if (velocity) {
          targetY = velocity * 40 + targetY;
          time = Math.abs(velocity) * 0.1;
        }

        if (targetY % _this.itemHeight !== 0) {
          targetY = Math.round(targetY / _this.itemHeight) * _this.itemHeight;
        }

        if (targetY < 0) {
          targetY = 0;
        } else if (targetY > height) {
          targetY = height;
        }

        scrollTo(0, targetY, time < 0.3 ? 0.3 : time);

        _this.onScrollChange();
      };

      var onStart = function onStart(y) {
        if (scrollDisabled) {
          return;
        }

        isMoving = true;
        startY = y;
        lastY = scrollY;
      };

      var onMove = function onMove(y) {
        if (scrollDisabled || !isMoving) {
          return;
        }

        scrollY = lastY - y + startY;
        Velocity.record(scrollY);

        _this.onScrollChange();

        setTransform(_this.contentRef.style, "translate3d(0,".concat(-scrollY, "px,0)"));
      };

      return {
        touchstart: function touchstart(evt) {
          return onStart(evt.touches[0].screenY);
        },
        mousedown: function mousedown(evt) {
          return onStart(evt.screenY);
        },
        touchmove: function touchmove(evt) {
          evt.preventDefault();
          onMove(evt.touches[0].screenY);
        },
        mousemove: function mousemove(evt) {
          evt.preventDefault();
          onMove(evt.screenY);
        },
        touchend: function touchend() {
          return onFinish();
        },
        touchcancel: function touchcancel() {
          return onFinish();
        },
        mouseup: function mouseup() {
          return onFinish();
        },
        getValue: function getValue() {
          return scrollY;
        },
        scrollTo: scrollTo,
        setDisabled: function setDisabled() {
          var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          scrollDisabled = disabled;
        }
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "scrollTo", function (top) {
      _this.scrollHanders.scrollTo(0, top);
    });

    _defineProperty(_assertThisInitialized(_this), "scrollToWithoutAnimation", function (top) {
      _this.scrollHanders.scrollTo(0, top, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "fireValueChange", function (selectedValue) {
      if (selectedValue !== _this.state.selectedValue) {
        if (!('selectedValue' in _this.props)) {
          _this.setState({
            selectedValue: selectedValue
          });
        }

        if (_this.props.onValueChange) {
          _this.props.onValueChange(selectedValue);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onScrollChange", function () {
      var top = _this.scrollHanders.getValue();

      if (top >= 0) {
        var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(_this.props.children);

        var index = _this.coumputeChildIndex(top, _this.itemHeight, children.length);

        if (_this.scrollValue !== index) {
          _this.scrollValue = index;
          var child = children[index];

          if (child && _this.props.onScrollChange) {
            _this.props.onScrollChange(child.props.value);
          } else if (console.warn) {
            console.warn('change: child not found', children, index);
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollingComplete", function () {
      var top = _this.scrollHanders.getValue();

      if (top >= 0) {
        _this.doScrollingComplete(top, _this.itemHeight, _this.fireValueChange);
      }
    });

    var selectedValueState;
    var _this$props = _this.props,
        _selectedValue = _this$props.selectedValue,
        defaultSelectedValue = _this$props.defaultSelectedValue;

    if (_selectedValue !== undefined) {
      selectedValueState = _selectedValue;
    } else if (defaultSelectedValue !== undefined) {
      selectedValueState = defaultSelectedValue;
    } else {
      var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(_this.props.children);
      selectedValueState = children && children[0] && children[0].props.value;
    }

    _this.state = {
      selectedValue: selectedValueState
    };
    return _this;
  }

  _createClass(Picker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var contentRef = this.contentRef,
          indicatorRef = this.indicatorRef,
          maskRef = this.maskRef,
          rootRef = this.rootRef;
      var rootHeight = rootRef.getBoundingClientRect().height;
      var itemHeight = this.itemHeight = indicatorRef.getBoundingClientRect().height;
      var num = Math.floor(rootHeight / itemHeight);

      if (num % 2 === 0) {
        num--;
      }

      num--;
      num /= 2;
      contentRef.style.padding = "".concat(itemHeight * num, "px 0");
      indicatorRef.style.top = "".concat(itemHeight * num, "px");
      maskRef.style.backgroundSize = "100% ".concat(itemHeight * num, "px");
      this.scrollHanders.setDisabled(this.props.disabled);
      this.select(this.state.selectedValue, this.itemHeight, this.scrollTo);
      var passiveSupported = this.passiveSupported();
      var willPreventDefault = passiveSupported ? {
        passive: false
      } : false;
      var willNotPreventDefault = passiveSupported ? {
        passive: true
      } : false;
      Object.keys(this.scrollHanders).forEach(function (key) {
        if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
          var pd = key.indexOf('move') >= 0 ? willPreventDefault : willNotPreventDefault;
          rootRef.addEventListener(key, _this2.scrollHanders[key], pd);
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      Object.keys(this.scrollHanders).forEach(function (key) {
        if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
          _this3.rootRef.removeEventListener(key, _this3.scrollHanders[key]);
        }
      });
    }
  }, {
    key: "passiveSupported",
    value: function passiveSupported() {
      var passiveSupported = false;

      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', null, options);
      } catch (err) {}

      return passiveSupported;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      if ('selectedValue' in nextProps) {
        if (this.state.selectedValue !== nextProps.selectedValue) {
          this.setState({
            selectedValue: nextProps.selectedValue
          }, function () {
            _this4.select(nextProps.selectedValue, _this4.itemHeight, nextProps.noAnimate ? _this4.scrollToWithoutAnimation : _this4.scrollTo);
          });
        }
      }

      this.scrollHanders.setDisabled(nextProps.disabled);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.selectedValue !== nextState.selectedValue || this.props.children !== nextProps.children;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.select(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if ('selectedValue' in this.props) {
        return this.props.selectedValue;
      }

      var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(this.props.children);
      return children && children[0] && children[0].props.value;
    }
  }, {
    key: "select",
    value: function select(value, itemHeight, scrollTo) {
      var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(this.props.children);

      for (var i = 0, len = children.length; i < len; i++) {
        if (children[i].props.value === value) {
          this.selectByIndex(i, itemHeight, scrollTo);
          return;
        }
      }

      this.selectByIndex(0, itemHeight, scrollTo);
    }
  }, {
    key: "selectByIndex",
    value: function selectByIndex(index, itemHeight, zscrollTo) {
      if (index < 0 || index >= react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(this.props.children) || !itemHeight) {
        return;
      }

      zscrollTo(index * itemHeight);
    }
  }, {
    key: "coumputeChildIndex",
    value: function coumputeChildIndex(top, itemHeight, childrenLength) {
      var index = top / itemHeight;
      var floor = Math.floor(index);

      if (index - floor > 0.5) {
        index = floor + 1;
      } else {
        index = floor;
      }

      return Math.min(index, childrenLength - 1);
    }
  }, {
    key: "doScrollingComplete",
    value: function doScrollingComplete(top, itemHeight, fireValueChange) {
      var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(this.props.children);
      var index = this.coumputeChildIndex(top, itemHeight, children.length);
      var child = children[index];

      if (child) {
        fireValueChange(child.props.value);
      } else if (console.warn) {
        console.warn('complete: child not found', children, index);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _pickerCls,
          _this5 = this;

      var props = this.props;
      var prefixCls = props.prefixCls,
          itemStyle = props.itemStyle,
          indicatorStyle = props.indicatorStyle,
          _props$indicatorClass = props.indicatorClassName,
          indicatorClassName = _props$indicatorClass === void 0 ? '' : _props$indicatorClass,
          children = props.children;
      var selectedValue = this.state.selectedValue;
      var itemClassName = "".concat(prefixCls, "-item");
      var selectedItemClassName = "".concat(itemClassName, " ").concat(prefixCls, "-item-selected");

      var map = function map(item) {
        var _item$props = item.props,
            _item$props$className = _item$props.className,
            className = _item$props$className === void 0 ? '' : _item$props$className,
            style = _item$props.style,
            value = _item$props.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: _objectSpread({}, itemStyle, {}, style),
          className: "".concat(selectedValue === value ? selectedItemClassName : itemClassName, " ").concat(className),
          key: value
        }, item.children || item.props.children);
      }; // compatibility for preact


      var items = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, map) : [].concat(children).map(map);
      var pickerCls = (_pickerCls = {}, _defineProperty(_pickerCls, props.className, !!props.className), _defineProperty(_pickerCls, prefixCls, true), _pickerCls);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(pickerCls),
        ref: function ref(el) {
          return _this5.rootRef = el;
        },
        style: this.props.style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-mask"),
        ref: function ref(el) {
          return _this5.maskRef = el;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-indicator ").concat(indicatorClassName),
        ref: function ref(el) {
          return _this5.indicatorRef = el;
        },
        style: indicatorStyle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-content"),
        ref: function ref(el) {
          return _this5.contentRef = el;
        }
      }, items));
    }
  }]);

  return Picker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Picker, "defaultProps", {
  prefixCls: 'wme-picker'
});

_defineProperty(Picker, "Item", _PickerItem__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Picker);

/***/ }),

/***/ "./src/picker/PickerItem.js":
/*!**********************************!*\
  !*** ./src/picker/PickerItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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




var PickerItem = /*#__PURE__*/function (_React$Component) {
  _inherits(PickerItem, _React$Component);

  var _super = _createSuper(PickerItem);

  function PickerItem() {
    _classCallCheck(this, PickerItem);

    return _super.apply(this, arguments);
  }

  _createClass(PickerItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style,
          children = _this$props.children;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-item"), className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: wrapCls,
        style: style
      }, children);
    }
  }]);

  return PickerItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(PickerItem, "defaultProps", {
  prefixCls: 'wme-picker',
  value: null
});

/* harmony default export */ __webpack_exports__["default"] = (PickerItem);

/***/ }),

/***/ "./src/picker/index.js":
/*!*****************************!*\
  !*** ./src/picker/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WmePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MultiPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiPicker */ "./src/picker/MultiPicker.js");
/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Picker */ "./src/picker/Picker.js");
/* harmony import */ var _locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locale-provider/HrContext */ "./src/locale-provider/HrContext.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * WmePicker
 * @author john.gao
 */





 // 递归筛选树

function arrayRecurrenceFilter(data, filterFn, options) {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  var children = data || [];
  var result = [];
  var level = 0;
  var foundItem;

  do {
    var foundItem = children.filter(function (item) {
      return filterFn(item, level);
    })[0];

    if (!foundItem) {
      break;
    }

    result.push(foundItem);
    children = foundItem[options.childrenKeyName] || [];
    level += 1;
  } while (children.length > 0);

  return result;
}

var WmePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(WmePicker, _React$Component);

  var _super = _createSuper(WmePicker);

  function WmePicker(props) {
    var _this;

    _classCallCheck(this, WmePicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setCasecadeScrollValue", function (v) {
      if (v && _this.scrollValue) {
        var length = _this.scrollValue.length;

        if (length === v.length && _this.scrollValue[length - 1] === v[length - 1]) {
          return;
        }
      }

      _this.setScrollValue(v);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (v, i) {
      _this.setScrollValue(v);

      if (_this.props.onChange) {
        _this.props.onChange(v, i);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCasecadeValueChange", function (value, index) {
      var _this$props = _this.props,
          cascade = _this$props.cascade,
          cols = _this$props.cols;
      var children = arrayRecurrenceFilter(_this.props.data, function (c, level) {
        return level <= index && c.value === value[level];
      });
      var data = children[index];
      var i;

      for (i = index + 1; data && data.children && data.children.length && i < cols; i++) {
        data = data.children[0];
        value[i] = data.value;
      }

      value.length = i;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      _this.onChange(value, index);
    });

    _this.state = {
      value: _this.getValue(props.data, props.defaultValue || props.value)
    };
    _this.scrollValue = null;
    return _this;
  }

  _createClass(WmePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {} // 组件接收新的props时触发，render时不触发

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: this.getValue(nextProps.data, nextProps.value)
        });
      }
    }
  }, {
    key: "getValue",
    value: function getValue(d, val) {
      var data = d || this.props.data;
      var value = val || this.props.value || this.props.defaultValue;

      if (!value || !value.length) {
        value = [];

        if (this.props.cascade) {
          for (var i = 0; i < this.props.cols; i++) {
            if (data && data.length) {
              value[i] = data[0].value;
              data = data[0].children;
            }
          }
        } else {
          for (var _i = 0; _i < data.length; _i++) {
            value[_i] = data[_i][0] && data[_i][0].value;
          }
        }
      }

      return value;
    }
  }, {
    key: "setScrollValue",
    value: function setScrollValue(v) {
      this.scrollValue = v;
    }
  }, {
    key: "onValueChange",
    value: function onValueChange(value, index) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        });
      }

      this.onChange(value, index);
    } // 获取普通列

  }, {
    key: "getPickerCol",
    value: function getPickerCol() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          disabled = _this$props2.disabled;
      return data.map(function (col, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: index,
          disabled: disabled,
          style: {
            flex: 1
          }
        }, col.map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Picker__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
            key: item.value,
            value: item.value
          }, item.label);
        }));
      });
    } // 获取级联列

  }, {
    key: "getCascadeCols",
    value: function getCascadeCols() {
      var _this$props3 = this.props,
          data = _this$props3.data,
          cols = _this$props3.cols,
          disabled = _this$props3.disabled;
      var value = this.state.value;
      var childrenTree = arrayRecurrenceFilter(data, function (c, level) {
        return c.value === value[level];
      }).map(function (c) {
        return c.children;
      });
      var needPad = cols - childrenTree.length;

      if (needPad > 0) {
        for (var i = 0; i < needPad; i++) {
          childrenTree.push([]);
        }
      }

      childrenTree.length = cols - 1;
      childrenTree.unshift(data);
      return childrenTree.map(function () {
        var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var level = arguments.length > 1 ? arguments[1] : undefined;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: level,
          style: {
            flex: 1
          },
          disabled: disabled
        }, children.map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Picker__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
            value: item.value,
            key: item.value
          }, item.label);
        }));
      });
    }
  }, {
    key: "onOk",
    value: function onOk(e) {
      var v;

      if (this.scrollValue !== null) {
        v = this.scrollValue;
      } else {
        v = this.state.value;
      }

      if (this.props.onOk) {
        this.props.onOk(v);
      }

      e.preventDefault();
    }
  }, {
    key: "onCancel",
    value: function onCancel(e) {
      if (this.props.onCancel) {
        this.props.onCancel();
      }

      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          title = _this$props4.title,
          okText = _this$props4.okText,
          cancelText = _this$props4.cancelText,
          cascade = _this$props4.cascade,
          restProps = _objectWithoutProperties(_this$props4, ["prefixCls", "title", "okText", "cancelText", "cascade"]);

      var value = this.state.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_3__["Consumer"], null, function (_ref) {
        var Picker = _ref.Picker;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-action")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-action-cancel"),
          onClick: function onClick(e) {
            return _this2.onCancel(e);
          }
        }, cancelText || Picker.cancel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-action-title")
        }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-action-ok"),
          onClick: function onClick(e) {
            return _this2.onOk(e);
          }
        }, okText || Picker.ok)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MultiPicker__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, restProps, {
          cascade: cascade,
          selectedValue: value,
          onValueChange: function onValueChange(v, i) {
            cascade ? _this2.onCasecadeValueChange(v, i) : _this2.onValueChange(v, i);
          },
          onScrollChange: function onScrollChange(v) {
            cascade ? _this2.setCasecadeScrollValue(v) : _this2.setScrollValue(v);
          }
        }), cascade ? _this2.getCascadeCols() : _this2.getPickerCol()));
      });
    }
  }]);

  return WmePicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(WmePicker, "defaultProps", {
  prefixCls: 'wme-picker',
  cols: 3,
  // 列
  cascade: false,
  // 是否级联
  title: '',
  // 标题
  disabled: false,
  // 是否禁用
  onScrollChange: function onScrollChange() {},
  onChange: function onChange(v, i) {}
});



/***/ }),

/***/ "./src/picker/style/index.less":
/*!*************************************!*\
  !*** ./src/picker/style/index.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pop-layer/index.js":
/*!********************************!*\
  !*** ./src/pop-layer/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopLayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * PopLayer
 * @author john.gao
 */






var PopLayer = /*#__PURE__*/function (_React$Component) {
  _inherits(PopLayer, _React$Component);

  var _super = _createSuper(PopLayer);

  function PopLayer(props) {
    var _this;

    _classCallCheck(this, PopLayer);

    _this = _super.call(this, props);
    _this.rootEl = document.createElement('div');
    document.body.appendChild(_this.rootEl);
    return _this;
  }

  _createClass(PopLayer, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rootEl) {
        document.body.removeChild(this.rootEl);
      }
    }
  }, {
    key: "close",
    value: function close(e) {
      e.preventDefault();
      var container = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.containerRef);

      if (e.target === container || this.isDescendant(container, e.target)) {
        return;
      }

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
    /**
     * 判断是否是子元素
     * @param  {Node}  parent 父元素
     * @param  {Node}  child  子元素
     * @return {Boolean}        true or false
     */

  }, {
    key: "isDescendant",
    value: function isDescendant(parent, child) {
      var node = child.parentNode;

      while (node != null) {
        if (node == parent) {
          return true;
        }

        node = node.parentNode;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props = this.props,
          visible = _this$props.visible,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style,
          direction = _this$props.direction;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-top"), direction === 'top'), _defineProperty(_classnames, "".concat(prefixCls, "-bottom"), direction === 'bottom'), _defineProperty(_classnames, "".concat(prefixCls, "-visible"), visible), _classnames));
      return visible ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: wrapCls,
        style: _objectSpread({}, style),
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(el) {
          return _this2.containerRef = el;
        },
        className: "".concat(prefixCls, "-container")
      }, children || null)), this.rootEl) : null;
    }
  }]);

  return PopLayer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(PopLayer, "defaultProps", {
  prefixCls: 'wme-pop-layer'
});



/***/ }),

/***/ "./src/pop-layer/style/index.less":
/*!****************************************!*\
  !*** ./src/pop-layer/style/index.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pull-to-refresh/index.js":
/*!**************************************!*\
  !*** ./src/pull-to-refresh/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PullToRefresh; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/index */ "./src/icon/index.js");
/* harmony import */ var _scroller_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scroller/index */ "./src/scroller/index.js");
/* harmony import */ var _locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../locale-provider/HrContext */ "./src/locale-provider/HrContext.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * PullToRefresh
 * @author john.gao
 */







var MAX_PULL_DISTANCE = 22.5;
var MIN_PULL_DISTANCE = 10; // function Indicator(scroller, options) {
//   this.wrapper = typeof options.el === 'string' ? document.querySelector(options.el) : options.el;
//   this.wrapperStyle = this.wrapper.style;
//   this.indicator = this.wrapper.children[0];
//   this.indicatorStyle = this.indicator.style;
//   this.scroller = scroller;
//   this.options = {
//     listenX: true,
//     listenY: true,
//     interactive: false,
//     resize: true,
//     defaultScrollbars: false,
//     shrink: false,
//     fade: false,
//     speedRatioX: 0,
//     speedRatioY: 0,
//   };
//   for (const i in options) {
//     this.options[i] = options[i];
//   }
//   this.sizeRatioX = 1;
//   this.sizeRatioY = 1;
//   this.maxPosX = 0;
//   this.maxPosY = 0;
//   if (this.options.interactive) {
//     if (!this.options.disableTouch) {
//       utils.addEvent(this.indicator, 'touchstart', this);
//       // utils.addEvent(window, 'touchend', this); edit by john.gao 事件对移动端无效
//     }
//     if (!this.options.disablePointer) {
//       utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
//       utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
//     }
//     if (!this.options.disableMouse) {
//       utils.addEvent(this.indicator, 'mousedown', this);
//       utils.addEvent(window, 'mouseup', this);
//     }
//   }
//   if (this.options.fade) {
//     this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
//     this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
//     this.wrapperStyle.opacity = '0';
//   }
// }

var PullToRefresh = /*#__PURE__*/function (_React$Component) {
  _inherits(PullToRefresh, _React$Component);

  var _super = _createSuper(PullToRefresh);

  function PullToRefresh(props) {
    var _this;

    _classCallCheck(this, PullToRefresh);

    _this = _super.call(this, props);
    _this.state = {
      pullDownLabel: ''
    };
    return _this;
  }

  _createClass(PullToRefresh, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.indicator) {
        this.indicator.destroy();
        this.indicator = null;
      }
    }
  }, {
    key: "beforeScrollComplete",
    value: function beforeScrollComplete(scrollX, scrollY, locale) {
      var _this$props = this.props,
          onPullDown = _this$props.onPullDown,
          beforeScrollComplete = _this$props.beforeScrollComplete;

      if (onPullDown) {
        this.onPullDown(scrollY, locale);
      }

      if (beforeScrollComplete) {
        beforeScrollComplete(scrollY);
      }
    }
  }, {
    key: "scrollComplete",
    value: function scrollComplete(scrollX, scrollY) {
      var _this$props2 = this.props,
          onPullUp = _this$props2.onPullUp,
          scrollComplete = _this$props2.scrollComplete;

      if (onPullUp) {
        this.onPullUp(scrollY);
      }

      if (scrollComplete) {
        scrollComplete(scrollY);
      }
    }
  }, {
    key: "onPullDown",
    value: function onPullDown(scrollY, locale) {
      if (scrollY < -MAX_PULL_DISTANCE) {
        this.setState({
          pullDownLabel: locale.loadingLabel
        });

        if (this.props.onPullDown) {
          this.props.onPullDown(this);
        }
      } else if (scrollY < -MIN_PULL_DISTANCE) {
        this.onPullDownComplete(100);
      }
    }
  }, {
    key: "onPullDownComplete",
    value: function onPullDownComplete(time) {
      var _this2 = this;

      if (!this.pullDownRef) return;
      setTimeout(function () {
        _this2.pullDownRef.style.marginTop = '-45px';
        setTimeout(function () {
          _this2.setState({
            pullDownLabel: ''
          });
        }, 300);
      }, time || 600);
    }
  }, {
    key: "onPullUp",
    value: function onPullUp(scrollY) {
      var maxScrollY = this.scroller.getMaxScrollY();

      if (scrollY - maxScrollY >= -MAX_PULL_DISTANCE) {
        if (this.props.onPullUp) {
          this.props.onPullUp(this);
        }
      }
    }
  }, {
    key: "onPullUpComplete",
    value: function onPullUpComplete() {
      var maxScrollY = this.scroller.getMaxScrollY(); // setTimeout(_ => {
      //   this.scroller.scrollTo(0, (maxScrollY > 0 ? maxScrollY : 0) - 45);
      // }, 600)
    }
  }, {
    key: "onScrollChange",
    value: function onScrollChange(scrollY, locale) {
      var scrollChange = this.props.scrollChange;
      var maxScrollY = this.scroller.getMaxScrollY();

      if (scrollY < 0) {
        var distance = Math.abs(scrollY) > MAX_PULL_DISTANCE ? MAX_PULL_DISTANCE : Math.abs(scrollY);
        this.pullDownRef.style.marginTop = "".concat(distance - MAX_PULL_DISTANCE, "px");

        if (distance === MAX_PULL_DISTANCE) {
          this.setState({
            pullDownLabel: locale.releaseLabel
          });
        }
      } else if (scrollY > maxScrollY) {
        var _distance = Math.abs(scrollY) - maxScrollY > MAX_PULL_DISTANCE ? MAX_PULL_DISTANCE : Math.abs(scrollY) - maxScrollY;

        this.pullUpRef.style.bottom = "-".concat(_distance + MAX_PULL_DISTANCE, "px");
      }

      if (scrollChange) {
        scrollChange(scrollY);
      }
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      this.scroller.scrollTo(0, 0);
    }
  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      var maxScrollY = Math.abs(this.scroller.getMaxScrollY());
      this.scroller.scrollTo(0, maxScrollY);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(x, y) {
      this.scroller.scrollTo(x, y);
    }
  }, {
    key: "getScrollY",
    value: function getScrollY() {
      return this.scroller.getScrollY();
    }
  }, {
    key: "getScrollX",
    value: function getScrollX() {
      return this.scroller.getScrollX();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.scroller.refresh();
    }
  }, {
    key: "initIndicators",
    value: function initIndicators() {
      var _this3 = this;

      var scrollbars = this.props.scrollbars;
      var indicator;

      if (scrollbars) {
        // Vertical scrollbar 纵向
        indicator = {
          el: this.scrollbarRef,
          interactive: interactive,
          defaultScrollbars: true,
          customStyle: customStyle,
          resize: this.options.resizeScrollbars,
          shrink: this.options.shrinkScrollbars,
          fade: this.options.fadeScrollbars,
          listenX: false,
          disablePointer: this.options.disablePointer,
          disableMouse: this.options.disableMouse
        };
      }

      this.indicator = new Indicator(this, indicator);

      if (this.options.fadeScrollbars) {
        this.on('scrollEnd', function () {
          // todo 隐藏滚动条
          _this3.indicator.fade();
        });
        this.on('scrollCancel', function () {
          // todo 隐藏滚动条
          _this3.fade();
        });
        this.on('scrollStart', function () {
          // todo 隐藏滚动条
          _this3.fade(1);
        });
        this.on('beforeScrollStart', function () {
          // todo 隐藏滚动条
          this.fade(1, true);
        });
      }

      this.on('refresh', function () {
        // todo 刷新
        this.refresh();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          children = _this$props3.children,
          onPullDown = _this$props3.onPullDown,
          onPullUp = _this$props3.onPullUp,
          _this$props3$style = _this$props3.style,
          style = _this$props3$style === void 0 ? {} : _this$props3$style,
          startX = _this$props3.startX,
          startY = _this$props3.startY,
          _scroll = _this$props3.scroll;
      var pullDownLabel = this.state.pullDownLabel;
      var top = style.top,
          height = style.height;

      var newStyle = _objectSpread({}, style);

      if (top && !height) {
        newStyle.height = "calc(100% - ".concat(top, ")");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_4__["Consumer"], null, function (_ref) {
        var PullToRefresh = _ref.PullToRefresh;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: newStyle,
          className: prefixCls
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_scroller_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
          ref: function ref(comp) {
            return _this4.scroller = comp;
          },
          startX: startX,
          startY: startY,
          scrollX: false,
          scrollY: true,
          scroll: function scroll(scrollX, scrollY) {
            if (_scroll) {
              _scroll(scrollX, scrollY);
            }
          },
          onScrollChange: function onScrollChange(scrollY) {
            return _this4.onScrollChange(scrollY, PullToRefresh);
          },
          beforeScrollComplete: function beforeScrollComplete(scrollX, scrollY) {
            return _this4.beforeScrollComplete(scrollX, scrollY, PullToRefresh);
          },
          scrollComplete: function scrollComplete(scrollX, scrollY) {
            return _this4.scrollComplete(scrollX, scrollY, PullToRefresh);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: function ref(el) {
            return _this4.pullDownRef = el;
          },
          style: {
            display: onPullDown ? 'flex' : 'none'
          },
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-down"))
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "loading",
          className: "loading"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          ref: function ref(el) {
            return _this4.pullDownLabelRef = el;
          },
          className: "label"
        }, pullDownLabel || PullToRefresh.downLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-wrapper")
        }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: function ref(el) {
            return _this4.pullUpRef = el;
          },
          style: {
            display: onPullUp ? 'flex' : 'none'
          },
          className: "".concat(prefixCls, "-up")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "loading",
          className: "loading"
        }))));
      });
    }
  }]);

  return PullToRefresh;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(PullToRefresh, "defaultProps", {
  prefixCls: 'wme-pull-to-refresh',
  startX: 0,
  startY: 0,
  scrollbars: true // 是否有滚动条

});



/***/ }),

/***/ "./src/pull-to-refresh/style/index.less":
/*!**********************************************!*\
  !*** ./src/pull-to-refresh/style/index.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scroller/index.js":
/*!*******************************!*\
  !*** ./src/scroller/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scroller; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * Scroller
 * @author john.gao
 */



var utils = {
  ease: {
    circular: {
      style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
      // 0.075, 0.82, 0.165, 1
      fn: function fn(k) {
        return Math.sqrt(1 - --k * k);
      }
    }
  },
  momentum: function momentum(current, start, time, lowerMargin, wrapperSize, deceleration) {
    var distance = current - start;
    var speed = Math.abs(distance) / time;
    var destination;
    var duration;
    destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
    duration = speed / deceleration;

    if (destination > lowerMargin) {
      // 超过底部
      destination = wrapperSize ? lowerMargin + wrapperSize / 2.5 * (speed / 8) : lowerMargin;
      distance = Math.abs(destination - current);
      duration = distance / speed;
    } else if (destination < 0) {
      // 超过顶部
      destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
      distance = Math.abs(current) + destination;
      duration = distance / speed;
    }

    return {
      destination: Math.round(destination),
      duration: duration
    };
  }
}; // todo scrollTo 方法如何开放出来

var Scroller = /*#__PURE__*/function (_React$Component) {
  _inherits(Scroller, _React$Component);

  var _super = _createSuper(Scroller);

  function Scroller(props) {
    var _this;

    _classCallCheck(this, Scroller);

    _this = _super.call(this, props);

    _this._init();

    return _this;
  }

  _createClass(Scroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          startX = _this$props.startX,
          startY = _this$props.startY;

      this._initEvents();

      this.scrollTo(startX, startY, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rootRef) {
        this.rootRef.removeEventListener('touchstart', this.touchStartEvent.bind(this));
        this.rootRef.removeEventListener('touchend', this.touchEndEvent.bind(this));
        this.rootRef.removeEventListener('touchcancel', this.touchCancelEvent.bind(this));
        this.rootRef.removeEventListener('touchmove', this.touchMoveEvent.bind(this));
      }
    }
  }, {
    key: "_init",
    value: function _init() {
      this.scrollX = -1; // x轴滚动距离

      this.scrollY = -1; // y轴滚动距离

      this.startX = 0;
      this.startY = 0;
      this.pointX = 0;
      this.pointY = 0;
      this.isMoving = false;
      this.directionLocked = 0; // 方向锁定

      this.hasHorizontalScroll = this.props.scrollX; // 是否支持横线滚动

      this.hasVerticalScroll = this.props.scrollY; // 是否支持纵向滚动

      this.freeScroll = this.props.freeScroll;
      this.endTime = 0;
    }
  }, {
    key: "_initEvents",
    value: function _initEvents() {
      var passiveSupported = this.passiveSupported();
      var willPreventDefault = passiveSupported ? {
        passive: false
      } : false;
      var willNotPreventDefault = passiveSupported ? {
        passive: true
      } : false;
      this.rootRef = this.contentRef.parentNode;
      this.rootRef.addEventListener('touchstart', this.touchStartEvent.bind(this), willNotPreventDefault);
      this.rootRef.addEventListener('touchend', this.touchEndEvent.bind(this), willNotPreventDefault);
      this.rootRef.addEventListener('touchcancel', this.touchCancelEvent.bind(this), willNotPreventDefault);
      this.rootRef.addEventListener('touchmove', this.touchMoveEvent.bind(this), willPreventDefault);
      this.rootRef.addEventListener('transitionend', this.transitionEndEvent.bind(this), willNotPreventDefault); // this.rootRef.addEventListener('mousemove', this.mouseMoveEvent.bind(this), willPreventDefault);
      // this.rootRef.addEventListener('mousedown', this.mouseDownEvent.bind(this), willNotPreventDefault);
    }
  }, {
    key: "touchStartEvent",
    value: function touchStartEvent(evt) {
      var touch = evt.touches[0];

      this._start(evt, touch.screenX, touch.screenY);
    }
  }, {
    key: "touchMoveEvent",
    value: function touchMoveEvent(evt) {
      var touch = evt.touches[0];

      this._move(evt, touch.screenX, touch.screenY);
    }
  }, {
    key: "touchEndEvent",
    value: function touchEndEvent(evt) {
      this._end();
    }
  }, {
    key: "touchCancelEvent",
    value: function touchCancelEvent(evt) {
      this._end();
    }
  }, {
    key: "transitionEndEvent",
    value: function transitionEndEvent(evt) {
      this._transitionEnd(evt);
    }
  }, {
    key: "passiveSupported",
    value: function passiveSupported() {
      var passiveSupported = false;

      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', null, options);
      } catch (err) {}

      return passiveSupported;
    }
  }, {
    key: "_animate",
    value: function _animate(destX, destY, time, easingFn) {
      var _this2 = this;

      var bounceTime = this.props.bounceTime;
      var startX = this.scrollX;
      var startY = this.scrollY;
      var startTime = this.getTime();
      var destTime = startTime + time;

      var step = function step() {
        var now = _this2.getTime();

        var newX;
        var newY;
        var easing;

        if (now >= destTime) {
          _this2.isAnimating = false;

          _this2._translate(destX, destY);

          if (!_this2.resetPosition(bounceTime)) {
            _this2.onScrollComplete();
          }

          return;
        }

        now = (now - startTime) / time;
        easing = easingFn(now);
        newX = (destX - startX) * easing + startX;
        newY = (destY - startY) * easing + startY;

        _this2._translate(newX, newY);

        if (_this2.isAnimating) {
          requestAnimationFrame(step);
        }
      };

      this.isAnimating = true;
      step();
    }
  }, {
    key: "_translate",
    value: function _translate(x, y) {
      var scroll = this.props.scroll;

      if (this.contentRef) {
        this.contentRef.style.transform = "translate3d(".concat(-x, "px,").concat(-y, "px, 0)");
        this.scrollX = x;
        this.scrollY = y;

        if (scroll) {
          scroll(this.scrollX, this.scrollY);
        }
      }
    }
  }, {
    key: "getMaxScrollY",
    value: function getMaxScrollY() {
      var wrapperHeight = this.rootRef.clientHeight;
      var scrollerHeight = this.contentRef ? this.contentRef.offsetHeight : 0;
      var maxScrollY = scrollerHeight - wrapperHeight;

      if (maxScrollY < 0) {
        maxScrollY = 0;
      }

      return maxScrollY;
    }
  }, {
    key: "getMaxScrollX",
    value: function getMaxScrollX() {
      var wrapperWidth = this.rootRef.clientWidth;
      var scrollerWidth = this.contentRef ? this.contentRef.offsetWidth : 0;
      var maxScrollX = scrollerWidth - wrapperWidth;

      if (maxScrollX < 0) {
        maxScrollX = 0;
      }

      return maxScrollX;
    }
    /**
     * 是否需要重置位置
     * @param  {float} time    时间
     * @return {boolean}       true：需要 false：不需要
     */

  }, {
    key: "resetPosition",
    value: function resetPosition() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var scrollX = this.scrollX;
      var scrollY = this.scrollY;
      var maxScrollX = this.getMaxScrollX();
      var maxScrollY = this.getMaxScrollY();

      if (!this.hasHorizontalScroll || this.scrollX < 0) {
        scrollX = 0;
      } else if (this.scrollX > maxScrollX) {
        scrollX = maxScrollX;
      }

      if (!this.hasVerticalScroll || this.scrollY < 0) {
        scrollY = 0;
      } else if (this.scrollY > maxScrollY) {
        scrollY = maxScrollY;
      }

      scrollY = this.scrollY <= 0 || maxScrollY < 0 ? 0 : this.scrollY > maxScrollY ? maxScrollY : this.scrollY;

      if (scrollX === this.scrollX && scrollY === this.scrollY) {
        return false;
      }

      this.scrollTo(scrollX, scrollY, time);
      return true;
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(x, y, time, easing) {
      // console.log(`scrollX:${this.scrollX}，scrollY：${this.scrollY}，y:${y}`);
      var useTransition = this.props.useTransition;
      easing = easing || utils.ease.circular;

      if (this.scrollX !== x || this.scrollY !== y) {
        if (!time || useTransition) {
          this.contentRef.style.transition = "cubic-bezier(0.1, 0.57, 0.1, 1) ".concat(time, "s");

          this._translate(x, y);
        } else {
          this._animate(x, y, time, easing.fn);
        }
      }
    }
  }, {
    key: "_start",
    value: function _start(e, x, y) {
      if (this.props.disabled) {
        return;
      }

      var useTransition = this.props.useTransition;
      this.isMoving = true;
      this.startX = this.scrollX;
      this.startY = this.scrollY;
      this.distX = 0;
      this.distY = 0;
      this.pointX = x;
      this.pointY = y;
      this.startTime = this.getTime();

      if (!useTransition && this.isAnimating) {
        this.isAnimating = false; // TODO scrollEnd
        // this._execEvent('scrollEnd');
      }
    }
  }, {
    key: "_move",
    value: function _move(e, x, y) {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          bounce = _this$props2.bounce;

      if (disabled || !this.isMoving) {
        return;
      }

      if (this.props.preventDefault) {
        e.preventDefault();
      }

      var deltaX = x - this.pointX;
      var deltaY = y - this.pointY;
      var timestamp = this.getTime();
      this.pointX = x;
      this.pointY = y;
      this.distX += deltaX;
      this.distY += deltaY;
      var absDistX = Math.abs(this.distX);
      var absDistY = Math.abs(this.distY);

      if (timestamp - this.endTime > 300 && (this.hasVerticalScroll && absDistY < 10 || this.hasHorizontalScroll && absDistX < 10)) {
        return;
      }

      deltaX = this.hasHorizontalScroll ? deltaX : 0;
      deltaY = this.hasVerticalScroll ? deltaY : 0;
      var targetX = this.scrollX - deltaX;
      var targetY = this.scrollY - deltaY; // 超出边界

      if (targetX < 0 || targetX > this.getMaxScrollX()) {
        targetX = bounce ? this.scrollX - deltaX / 3 : targetX < 0 ? 0 : this.getMaxScrollX();
      }

      if (targetY < 0 || targetY > this.getMaxScrollY()) {
        targetY = bounce ? this.scrollY - deltaY / 3 : targetY < 0 ? 0 : this.getMaxScrollY();
      }

      this._translate(targetX, targetY);

      if (timestamp - this.startTime > 300) {
        this.startTime = timestamp;
        this.startX = this.scrollX;
        this.startY = this.scrollY;
        this.onScrollChange();
      } // this.onScrollChange();

    }
  }, {
    key: "_end",
    value: function _end() {
      var _this$props3 = this.props,
          bounce = _this$props3.bounce,
          bounceTime = _this$props3.bounceTime,
          deceleration = _this$props3.deceleration,
          beforeScrollComplete = _this$props3.beforeScrollComplete,
          disabled = _this$props3.disabled;

      if (disabled) {
        return;
      }

      if (beforeScrollComplete) {
        beforeScrollComplete(this.scrollX, this.scrollY);
      }

      this.isMoving = false;
      var duration = this.getTime() - this.startTime;
      var targetX = this.scrollX;
      var targetY = this.scrollY;
      var time = 0;
      this.endTime = this.getTime();

      if (this.resetPosition(bounceTime)) {
        return;
      }

      this.scrollTo(targetX, targetY);

      if (duration < 300) {
        var wrapperWidth = bounce ? this.rootRef.clientWidth : 0;
        var wrapperHeight = bounce ? this.rootRef.clientHeight : 0;
        var momentumX = this.hasHorizontalScroll ? utils.momentum(this.scrollX, this.startX, duration, this.getMaxScrollX(), wrapperWidth, deceleration) : {
          destination: targetX,
          duration: 0
        };
        var momentumY = this.hasVerticalScroll ? utils.momentum(this.scrollY, this.startY, duration, this.getMaxScrollY(), wrapperHeight, deceleration) : {
          destination: targetY,
          duration: 0
        };
        targetX = momentumX.destination;
        targetY = momentumY.destination;
        time = Math.max(momentumX.duration, momentumY.duration);
      }

      if (targetX != this.scrollX || targetY != this.scrollY) {
        this.scrollTo(targetX, targetY, time);
      }

      this.onScrollComplete();
    }
  }, {
    key: "_transitionEnd",
    value: function _transitionEnd(e) {
      if (e.target != this.contentRef) {
        return;
      }

      if (!this.resetPosition(this.props.bounceTime)) {// TODO scrollEnd
        // this.isInTransition = false;
        // this._execEvent('scrollEnd');
      }
    }
  }, {
    key: "onScrollChange",
    value: function onScrollChange() {
      if (this.props.onScrollChange) {
        this.props.onScrollChange(this.scrollY);
      }
    }
  }, {
    key: "onScrollComplete",
    value: function onScrollComplete() {
      if (this.props.scrollComplete) {
        this.props.scrollComplete(this.scrollX, this.scrollY);
      }
    }
  }, {
    key: "getTime",
    value: function getTime() {
      return new Date().getTime();
    }
  }, {
    key: "getScrollX",
    value: function getScrollX() {
      return this.scrollX;
    }
  }, {
    key: "getScrollY",
    value: function getScrollY() {
      return this.scrollY;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this._init();

      this.scrollTo(0, 0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          children = _this$props4.children;
      var contentSyl = {};

      if (this.hasVerticalScroll && !this.freeScroll) {
        contentSyl.width = '100%';
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: prefixCls,
        style: contentSyl,
        ref: function ref(el) {
          return _this3.contentRef = el;
        }
      }, children);
    }
  }]);

  return Scroller;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Scroller, "defaultProps", {
  prefixCls: 'wme-scroller',
  startX: 0,
  startY: 0,
  bounce: true,
  // 超出边界是否反弹
  bounceTime: 600,
  // 超出边界以后回弹的动画时间
  deceleration: 0.0006,
  // 减速
  disabled: false,
  // 禁止滚动
  preventDefault: true,
  // 阻止默认行为
  directionLockThreshold: 5,
  useTransition: false,
  // 是否使用transition
  onScrollChange: function onScrollChange() {} // 滚动事件

});



/***/ }),

/***/ "./src/scroller/style/index.less":
/*!***************************************!*\
  !*** ./src/scroller/style/index.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/select-picker/index.js":
/*!************************************!*\
  !*** ./src/select-picker/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _picker_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../picker/index */ "./src/picker/index.js");
/* harmony import */ var _pop_layer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pop-layer/index */ "./src/pop-layer/index.js");
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/index */ "./src/icon/index.js");
/* harmony import */ var _utils_data_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_utils/data_util */ "./src/_utils/data_util.js");
/* harmony import */ var _locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../locale-provider/HrContext */ "./src/locale-provider/HrContext.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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









var SHOW_ALL = 'SHOW_ALL';
var SHOW_CHILD = 'SHOW_CHILD';

var SelectPicker = /*#__PURE__*/function (_React$Component) {
  _inherits(SelectPicker, _React$Component);

  var _super = _createSuper(SelectPicker);

  function SelectPicker(props) {
    var _this;

    _classCallCheck(this, SelectPicker);

    _this = _super.call(this, props);
    _this.state = {
      visible: false,
      useDefaultValue: true //是否使用默认值

    };
    return _this;
  }
  /**
   * 获取值
   * @param {Any} value 值
   */


  _createClass(SelectPicker, [{
    key: "getValue",
    value: function getValue(value) {
      var useDefaultValue = this.state.useDefaultValue;
      var defaultValue = this.props.defaultValue;

      if (value) {
        if (typeof value === 'string' || typeof value === 'number') {
          return [value];
        } else {
          return value;
        }
      } else {
        return useDefaultValue ? defaultValue : null;
      }
    }
    /**
     * 递归获取值数组
     * @param  {array} list   树型数组
     * @param {Any} val 值
     * @param  {number} level 层级
     * @return {Array}        数组
     */

  }, {
    key: "recurrenceFilter",
    value: function recurrenceFilter(list, val, level) {
      var value = this.getValue(val);
      if (!value || !value[level]) return;

      if (list && list.length > 0) {
        var data = list.find(function (item) {
          return item.value === value[level];
        });

        if (data) {
          this.selectedValues.push(data);
        }

        if (data.children) {
          this.recurrenceFilter(data.children, value, ++level);
        }
      }
    }
    /**
     * 获取选中的值
     * @param {Any} value 当前选中的值
     */

  }, {
    key: "getSelectedValues",
    value: function getSelectedValues(value) {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$data = _this$props.data,
          data = _this$props$data === void 0 ? [] : _this$props$data,
          cascade = _this$props.cascade;

      if (cascade) {
        this.selectedValues = [];
        this.recurrenceFilter(data, value, 0);
      } else {
        this.selectedValues = data.length > 1 ? [] : {};
        data.map(function (array, index) {
          var item = array.find(function (o) {
            if (lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default()(value)) {
              return value[index] === o.value;
            }

            return value === o.value;
          });

          if (item) {
            if (data.length > 1) {
              _this2.selectedValues.push(item);
            } else {
              _this2.selectedValues = item;
            }
          }
        });
      }

      return this.selectedValues;
    }
    /**
     * 获取显示名称
     * @param {Any} selectedValues 
     */

  }, {
    key: "getSelectedLabels",
    value: function getSelectedLabels(selectedValues) {
      var _this$props2 = this.props,
          sign = _this$props2.sign,
          showSelectedType = _this$props2.showSelectedType;
      var result = '';

      if (lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default()(selectedValues)) {
        switch (showSelectedType) {
          case SHOW_ALL:
            result = selectedValues.map(function (item) {
              return item.label;
            }).join(sign);
            break;

          case SHOW_CHILD:
            result = !Object(_utils_data_util__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(selectedValues) ? selectedValues[selectedValues.length - 1].label : '';
            break;

          default:
            break;
        }
      } else {
        result = selectedValues.label;
      }

      return result;
    }
    /**
     * 渲染组件后缀图标
     */

  }, {
    key: "renderSuffixIcon",
    value: function renderSuffixIcon() {
      var _classnames,
          _this3 = this;

      var useDefaultValue = this.state.useDefaultValue;
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          value = _this$props3.value,
          disabled = _this$props3.disabled,
          readOnly = _this$props3.readOnly,
          arrow = _this$props3.arrow,
          onOk = _this$props3.onOk,
          onReset = _this$props3.onReset; // 箭头方向

      var arrowCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-arrow"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-arrow-horizontal"), arrow === 'horizontal'), _defineProperty(_classnames, "".concat(prefixCls, "-arrow-vertical"), arrow === 'down' || arrow === 'up'), _defineProperty(_classnames, "".concat(prefixCls, "-arrow-vertical-up"), arrow === 'up'), _classnames));
      var defaultValue = useDefaultValue ? this.props.defaultValue : null;
      var allowClear = !disabled && !readOnly && close && !Object(_utils_data_util__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(value || defaultValue);

      if (allowClear) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "".concat(prefixCls, "-close"),
          type: "delete_fill",
          onClick: function onClick(e) {
            document.activeElement.blur();
            e.stopPropagation();
            var resetVal = Array.isArray(_this3.props.value) ? [] : '';

            _this3.setState({
              useDefaultValue: false
            });

            onReset && onReset(resetVal);
            onOk && onOk(resetVal);
          }
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: "enter",
          size: "small",
          className: arrowCls
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames2,
          _this4 = this;

      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          className = _this$props4.className,
          value = _this$props4.value,
          title = _this$props4.title,
          pickerTitle = _this$props4.pickerTitle,
          disabled = _this$props4.disabled,
          readOnly = _this$props4.readOnly,
          style = _this$props4.style,
          ismust = _this$props4.ismust,
          cascade = _this$props4.cascade,
          data = _this$props4.data,
          onChange = _this$props4.onChange,
          _onOk = _this$props4.onOk,
          _onCancel = _this$props4.onCancel,
          cols = _this$props4.cols,
          placeholder = _this$props4.placeholder;
      var useDefaultValue = this.state.useDefaultValue;
      var defaultValue = useDefaultValue ? this.props.defaultValue : null;
      var selectedValues = this.getSelectedValues(value || defaultValue);
      var labels = this.getSelectedLabels(selectedValues);
      var wrapperCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, (_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames2, "".concat(prefixCls, "-read-only"), readOnly), _classnames2));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_locale_provider_HrContext__WEBPACK_IMPORTED_MODULE_7__["Consumer"], null, function (_ref) {
        var SelectPicker = _ref.SelectPicker;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: wrapperCls,
          style: style
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-area"),
          onClick: function onClick() {
            if (!disabled && !readOnly) {
              _this4.setState({
                visible: true
              });
            }
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ismust ? '*' : ''), title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-content")
        }, !Object(_utils_data_util__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(selectedValues) ? labels : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "".concat(prefixCls, "-place-holder")
        }, placeholder)), _this4.renderSuffixIcon()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pop_layer_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
          visible: _this4.state.visible,
          direction: "bottom"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picker_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: pickerTitle || SelectPicker.pickerTitle,
          defaultValue: _this4.getValue(value),
          cascade: cascade,
          data: data,
          onChange: onChange,
          cols: cols,
          onOk: function onOk(val) {
            _this4.setState({
              visible: false,
              useDefaultValue: true
            });

            if (_onOk) {
              _onOk(val, _this4.getSelectedValues(val));
            }
          },
          onCancel: function onCancel() {
            _this4.setState({
              visible: false
            });

            if (_onCancel) {
              _onCancel();
            }
          }
        })));
      });
    }
  }]);

  return SelectPicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(SelectPicker, "defaultProps", {
  prefixCls: 'wme-select-picker',
  arrow: 'horizontal',
  showSelectedType: SHOW_ALL
});

SelectPicker.SHOW_ALL = SHOW_ALL;
SelectPicker.SHOW_CHILD = SHOW_CHILD;
/* harmony default export */ __webpack_exports__["default"] = (SelectPicker);

/***/ }),

/***/ "./src/select-picker/style/index.less":
/*!********************************************!*\
  !*** ./src/select-picker/style/index.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/swipe/index.js":
/*!****************************!*\
  !*** ./src/swipe/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Swipe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swipe_js_iso__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swipe-js-iso */ "./node_modules/swipe-js-iso/swipe.js");
/* harmony import */ var swipe_js_iso__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swipe_js_iso__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/index */ "./src/icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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






var Swipe = /*#__PURE__*/function (_React$Component) {
  _inherits(Swipe, _React$Component);

  var _super = _createSuper(Swipe);
  /**
   * indicator 是否显示指示器
   *
   * swipeOptions 参数说明
   * @param {number}  startSlide    默认选中
   * @param {number}  speed     速度
   * @param {bool}    auto      是否自动播放
   * @param {bool}    continuous    是否循环轮播
   * @param {bool}    disableScroll 是否禁用滚动
   * @param {bool}    stopPropagation 是否阻止冒泡
   * @param {func}    swiping     ？
   * @param {func}    callback    轮播切换
   * @param {func}    transitionEnd 切换结束
   *
   * style 参数说明
   * container
   * wrapper
   * child
   *
   * id
   * className
   * childCount
   */


  function Swipe(props) {
    var _this;

    _classCallCheck(this, Swipe);

    _this = _super.call(this, props);
    _this.state = {
      currentIndex: props.startSlide || 0
    };
    return _this;
  }

  _createClass(Swipe, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.swipe.kill();
      this.swipe = null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var swipeOptions = this.props.swipeOptions;

      var _callback = swipeOptions.callback,
          restPorps = _objectWithoutProperties(swipeOptions, ["callback"]);

      this.swipe = swipe_js_iso__WEBPACK_IMPORTED_MODULE_1___default()(this.container, _objectSpread({}, restPorps, {
        callback: function callback(index) {
          _this2.setState({
            currentIndex: index
          });

          if (_callback) _callback(index);
        }
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      var _this$props = this.props,
          childCount = _this$props.childCount,
          swipeOptions = _this$props.swipeOptions;

      if (prevProps.childCount !== childCount) {
        this.swipe.kill();

        var _callback2 = swipeOptions.callback,
            restPorps = _objectWithoutProperties(swipeOptions, ["callback"]);

        this.swipe = swipe_js_iso__WEBPACK_IMPORTED_MODULE_1___default()(this.container, _objectSpread({}, restPorps, {
          callback: function callback(index) {
            _this3.setState({
              currentIndex: index
            });

            if (_callback2) _callback2(index);
          }
        }));
      }
    }
  }, {
    key: "next",
    value: function next() {
      this.swipe.next();
    }
  }, {
    key: "prev",
    value: function prev() {
      this.swipe.prev();
    }
  }, {
    key: "slide",
    value: function slide() {
      var _this$swipe;

      (_this$swipe = this.swipe).slide.apply(_this$swipe, arguments);
    }
  }, {
    key: "getPos",
    value: function getPos() {
      return this.swipe.getPos();
    }
  }, {
    key: "getNumSlides",
    value: function getNumSlides() {
      return this.swipe.getNumSlides();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          defaultStyle = _this$props2.defaultStyle,
          style = _this$props2.style,
          children = _this$props2.children,
          prefixCls = _this$props2.prefixCls,
          indicator = _this$props2.indicator,
          showCloseBtn = _this$props2.showCloseBtn,
          close = _this$props2.close;
      var syl = {
        container: _objectSpread({}, style && style.container, {}, defaultStyle.container),
        wrapper: _objectSpread({}, style && style.wrapper, {}, defaultStyle.wrapper),
        child: _objectSpread({}, style && style.child, {}, defaultStyle.child),
        pagination: style && style.pagination || null
      };
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        ref: function ref(container) {
          return _this4.container = container;
        },
        className: wrapCls,
        style: syl.container
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: syl.wrapper
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
        if (!child) {
          return null;
        }

        var childStyle = child.props.style ? _objectSpread({}, syl.child, {}, child.props.style) : syl.child;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
          style: childStyle
        });
      })), showCloseBtn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick(_) {
          close && close();
        },
        className: "".concat(prefixCls, "-close")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "delete_fill"
      })), indicator && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-pagination"),
        style: syl.pagination
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
        var childCls = classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-pagination-bullet"), _defineProperty({}, "".concat(prefixCls, "-pagination-bullet-active"), _this4.state.currentIndex === index));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: childCls
        });
      })));
    }
  }]);

  return Swipe;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Swipe, "defaultProps", {
  prefixCls: 'swipe-container',
  swipeOptions: {},
  defaultStyle: {
    container: {
      overflow: 'hidden',
      visibility: 'hidden',
      position: 'relative'
    },
    wrapper: {
      overflow: 'hidden',
      position: 'relative'
    },
    child: {
      "float": 'left',
      width: '100%',
      position: 'relative',
      transitionProperty: 'transform'
    }
  },
  childCount: 0
});



/***/ }),

/***/ "./src/swipe/style/index.less":
/*!************************************!*\
  !*** ./src/swipe/style/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/switch-item/index.js":
/*!**********************************!*\
  !*** ./src/switch-item/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwitchItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _switch_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch/index */ "./src/switch/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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




var SwitchItem = /*#__PURE__*/function (_React$Component) {
  _inherits(SwitchItem, _React$Component);

  var _super = _createSuper(SwitchItem);

  function SwitchItem(props) {
    var _this;

    _classCallCheck(this, SwitchItem);

    _this = _super.call(this, props);
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(SwitchItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        if (this.state.value !== nextProps.value) {
          this.setState({
            value: nextProps.value
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          style = _this$props.style,
          title = _this$props.title,
          ismust = _this$props.ismust,
          restProps = _objectWithoutProperties(_this$props, ["prefixCls", "style", "title", "ismust"]);

      var value = this.state.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: prefixCls,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ismust ? '*' : ''), title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch_index__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        value: value
      }, restProps))));
    }
  }]);

  return SwitchItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(SwitchItem, "defaultProps", {
  prefixCls: 'wme-switch-item'
});



/***/ }),

/***/ "./src/switch-item/style/index.less":
/*!******************************************!*\
  !*** ./src/switch-item/style/index.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/switch/index.js":
/*!*****************************!*\
  !*** ./src/switch/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/**
 * 切换开关
 */





var Switch = /*#__PURE__*/function (_React$Component) {
  _inherits(Switch, _React$Component);

  var _super = _createSuper(Switch);

  function Switch() {
    _classCallCheck(this, Switch);

    return _super.apply(this, arguments);
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          value = _this$props.value,
          readOnly = _this$props.readOnly,
          disabled = _this$props.disabled,
          className = _this$props.className,
          color = _this$props.color,
          onChange = _this$props.onChange;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-checked"), value), _defineProperty(_classnames, "".concat(prefixCls, "-read-only"), readOnly), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _classnames));
      var style = this.props.style || {};

      if (color && value) {
        style.backgroundColor = color;
        style.boxShadow = "".concat(color, " 0 0 0 1rem inset");
        style.borderColor = color;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: wrapCls,
        style: style,
        onClick: function onClick() {
          onChange && onChange(!value);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "slider"
      }));
    }
  }]);

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Switch.defaultProps = {
  prefixCls: 'wme-switch',
  name: '',
  value: false,
  disabled: false,
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./src/switch/style/index.less":
/*!*************************************!*\
  !*** ./src/switch/style/index.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/tabs/DefaultTabBar.js":
/*!***********************************!*\
  !*** ./src/tabs/DefaultTabBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultTabBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_utils/animate */ "./src/_utils/animate.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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






var DefaultTabBar = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(DefaultTabBar, _React$PureComponent);

  var _super = _createSuper(DefaultTabBar);

  function DefaultTabBar(_props) {
    var _this;

    _classCallCheck(this, DefaultTabBar);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "layout", null);

    _defineProperty(_assertThisInitialized(_this), "onPan", function () {
      var lastOffset = 0;
      var finalOffset = 0;

      var getLastOffset = function getLastOffset() {
        var isVertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.isTabBarVertical();
        var offset = +"".concat(lastOffset).replace('%', '');

        if ("".concat(lastOffset).indexOf('%') >= 0) {
          offset /= 100;
          offset *= isVertical ? _this.layout.clientHeight : _this.layout.clientWidth;
        }

        return offset;
      };

      return {
        onPanStart: function onPanStart() {
          _this.setState({
            isMoving: true
          });
        },
        onPanMove: function onPanMove(status) {
          if (!status.moveStatus || !_this.layout) return;

          var isVertical = _this.isTabBarVertical();

          var offset = getLastOffset() + (isVertical ? status.moveStatus.y : status.moveStatus.x);
          var canScrollOffset = isVertical ? -_this.layout.scrollHeight + _this.layout.clientHeight : -_this.layout.scrollWidth + _this.layout.clientWidth;
          offset = Math.min(offset, 0);
          offset = Math.max(offset, canScrollOffset);
          Object(_utils_animate__WEBPACK_IMPORTED_MODULE_3__["setPxStyle"])(_this.layout, offset, 'px', isVertical);
          finalOffset = offset;

          _this.setState({
            showPrev: -offset > 0,
            showNext: offset > canScrollOffset
          });
        },
        onPanEnd: function onPanEnd() {
          var isVertical = _this.isTabBarVertical();

          lastOffset = finalOffset;

          _this.setState({
            isMoving: false,
            transform: Object(_utils_animate__WEBPACK_IMPORTED_MODULE_3__["getPxStyle"])(finalOffset, 'px', isVertical)
          });
        },
        setCurrentOffset: function setCurrentOffset(offset) {
          return lastOffset = offset;
        }
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getTransformByIndex", function (props) {
      var activeTab = props.activeTab,
          tabs = props.tabs,
          _props$page = props.page,
          page = _props$page === void 0 ? 0 : _props$page;

      var isVertical = _this.isTabBarVertical();

      var size = _this.getTabSize(page, tabs.length);

      var center = page / 2;
      var pos = Math.min(activeTab, tabs.length - center - 0.5);
      var skipSize = Math.min(-(pos - center + 0.5) * size, 0);

      _this.onPan.setCurrentOffset("".concat(skipSize, "%"));

      return {
        transform: Object(_utils_animate__WEBPACK_IMPORTED_MODULE_3__["getPxStyle"])(skipSize, '%', isVertical),
        showPrev: activeTab > center - 0.5 && tabs.length > page,
        showNext: activeTab < tabs.length - center - 0.5 && tabs.length > page
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onPress", function (index) {
      var _this$props = _this.props,
          goToTab = _this$props.goToTab,
          onTabClick = _this$props.onTabClick,
          tabs = _this$props.tabs;
      onTabClick && onTabClick(tabs[index], index);
      goToTab && goToTab(index);
    });

    _defineProperty(_assertThisInitialized(_this), "isTabBarVertical", function () {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.tabBarPosition;
      return position === 'left' || position === 'right';
    });

    _defineProperty(_assertThisInitialized(_this), "renderTab", function (t, i, size, isTabBarVertical) {
      var _this$props2 = _this.props,
          prefixCls = _this$props2.prefixCls,
          renderTab = _this$props2.renderTab,
          activeTab = _this$props2.activeTab,
          tabBarTextStyle = _this$props2.tabBarTextStyle,
          tabBarActiveTextColor = _this$props2.tabBarActiveTextColor,
          tabBarInactiveTextColor = _this$props2.tabBarInactiveTextColor;

      var textStyle = _objectSpread({}, tabBarTextStyle);

      var cls = "".concat(prefixCls, "-tab");
      var ariaSelected = false;

      if (activeTab === i) {
        cls += " ".concat(cls, "-active");
        ariaSelected = true;

        if (tabBarActiveTextColor) {
          textStyle.color = tabBarActiveTextColor;
        }
      } else if (tabBarInactiveTextColor) {
        textStyle.color = tabBarInactiveTextColor;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "t_".concat(i),
        style: _objectSpread({}, textStyle, {}, isTabBarVertical ? {
          height: "".concat(size, "%")
        } : {
          width: "".concat(size, "%")
        }),
        id: "m-tabs-".concat(i),
        role: "tab",
        "aria-selected": ariaSelected,
        className: cls,
        onClick: function onClick() {
          return _this.onPress(i);
        }
      }, renderTab ? renderTab(t) : t.title);
    });

    _defineProperty(_assertThisInitialized(_this), "setContentLayout", function (div) {
      _this.layout = div;
    });

    _defineProperty(_assertThisInitialized(_this), "getTabSize", function (page, tabLength) {
      return 100 / Math.min(page, tabLength);
    });

    _this.state = _objectSpread({
      transform: '',
      isMoving: false,
      showPrev: false,
      showNext: false
    }, _this.getTransformByIndex(_props));
    _this.rootEl = document.createElement('div');
    document.body.appendChild(_this.rootEl);
    return _this;
  }

  _createClass(DefaultTabBar, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rootEl) {
        document.body.removeChild(this.rootEl);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.activeTab !== nextProps.activeTab || this.props.tabs !== nextProps.tabs || this.props.tabs.length !== nextProps.tabs.length) {
        this.setState(_objectSpread({}, this.getTransformByIndex(nextProps)));
      }
    }
  }, {
    key: "renderTabBar",
    value: function renderTabBar() {
      var _this2 = this,
          _classnames;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          animated = _this$props3.animated,
          _this$props3$tabs = _this$props3.tabs,
          tabs = _this$props3$tabs === void 0 ? [] : _this$props3$tabs,
          _this$props3$page = _this$props3.page,
          page = _this$props3$page === void 0 ? 0 : _this$props3$page,
          _this$props3$activeTa = _this$props3.activeTab,
          activeTab = _this$props3$activeTa === void 0 ? 0 : _this$props3$activeTa,
          tabBarUnderlineStyle = _this$props3.tabBarUnderlineStyle,
          tabBarPosition = _this$props3.tabBarPosition,
          renderUnderline = _this$props3.renderUnderline,
          affix = _this$props3.affix,
          affixTop = _this$props3.affixTop;
      var _this$state = this.state,
          isMoving = _this$state.isMoving,
          transform = _this$state.transform,
          showNext = _this$state.showNext,
          showPrev = _this$state.showPrev;
      var isTabBarVertical = this.isTabBarVertical();
      var needScroll = tabs.length > page;
      var size = this.getTabSize(page, tabs.length);
      var Tabs = tabs.map(function (t, i) {
        return _this2.renderTab(t, i, size, isTabBarVertical);
      });
      var cls = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-animated"), animated && !isMoving), _defineProperty(_classnames, "".concat(prefixCls, "-affix"), affix), _classnames));
      var style = {}; // const style = {
      //   backgroundColor: tabBarBackgroundColor || '',
      // };

      if (affix) {
        style.top = affixTop + 'px';
      }

      var transformStyle = needScroll ? _objectSpread({}, Object(_utils_animate__WEBPACK_IMPORTED_MODULE_3__["getTransformPropValue"])(transform)) : {};

      var _this$onPan = this.onPan,
          setCurrentOffset = _this$onPan.setCurrentOffset,
          onPan = _objectWithoutProperties(_this$onPan, ["setCurrentOffset"]);

      var underlineProps = {
        style: _objectSpread({}, isTabBarVertical ? {
          height: "".concat(size, "%")
        } : {
          width: "".concat(size, "%")
        }, {}, isTabBarVertical ? {
          top: "".concat(size * activeTab, "%")
        } : {
          left: "".concat(size * activeTab, "%")
        }, {}, tabBarUnderlineStyle),
        className: "".concat(prefixCls, "-underline")
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(cls, " ").concat(prefixCls, "-").concat(tabBarPosition),
        style: style
      }, showPrev && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-prevpage")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        role: "tablist",
        className: "".concat(prefixCls, "-content"),
        style: transformStyle,
        ref: this.setContentLayout
      }, Tabs, renderUnderline ? renderUnderline(underlineProps) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", underlineProps)), showNext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-nextpage")
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var affix = this.props.affix;
      return affix ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(this.renderTabBar(), this.rootEl) : this.renderTabBar();
    }
  }]);

  return DefaultTabBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(DefaultTabBar, "defaultProps", {
  prefixCls: 'wme-tabs-tab-bar',
  animated: true,
  tabs: [],
  goToTab: function goToTab() {},
  activeTab: 0,
  page: 5,
  affix: false,
  affixTop: 0,
  tabBarUnderlineStyle: {},
  // tabBarBackgroundColor: '#FFF',
  tabBarActiveTextColor: '',
  tabBarInactiveTextColor: '',
  tabBarTextStyle: {}
});



/***/ }),

/***/ "./src/tabs/TabPane.js":
/*!*****************************!*\
  !*** ./src/tabs/TabPane.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabPane; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_utils/animate */ "./src/_utils/animate.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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




var TabPane = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(TabPane, _React$PureComponent);

  var _super = _createSuper(TabPane);

  function TabPane(props) {
    var _this;

    _classCallCheck(this, TabPane);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setLayout", function (div) {
      _this.layout = div;
    });

    _this.layout = null;
    _this.offsetX = 0;
    _this.offsetY = 0;
    _this.state = {
      active: props.active
    };
    return _this;
  }

  _createClass(TabPane, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.active !== prevState.active) {
        if (prevProps.active) {
          this.offsetX = 0;
          this.offsetY = 0;
        } else {
          this.offsetX = this.layout.scrollLeft;
          this.offsetY = this.layout.scrollTop;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          active = _this$props.active,
          fixX = _this$props.fixX,
          fixY = _this$props.fixY,
          restProps = _objectWithoutProperties(_this$props, ["className", "active", "fixX", "fixY"]);

      var style = _objectSpread({}, fixX && this.offsetX ? Object(_utils_animate__WEBPACK_IMPORTED_MODULE_1__["getTransformPropValue"])(Object(_utils_animate__WEBPACK_IMPORTED_MODULE_1__["getPxStyle"])(-this.offsetX, 'px', false)) : {}, {}, fixY && this.offsetY ? Object(_utils_animate__WEBPACK_IMPORTED_MODULE_1__["getTransformPropValue"])(Object(_utils_animate__WEBPACK_IMPORTED_MODULE_1__["getPxStyle"])(-this.offsetY, 'px', true)) : {});

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
        className: className
      }, restProps, {
        style: style,
        ref: this.setLayout
      }), restProps.children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.active !== prevState.active) {
        return {
          active: nextProps.active
        };
      }

      return null;
    }
  }]);

  return TabPane;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(TabPane, "defaultProps", {
  fixX: true,
  fixY: true
});



/***/ }),

/***/ "./src/tabs/Tabs.js":
/*!**************************!*\
  !*** ./src/tabs/Tabs.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WmeTabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabPane */ "./src/tabs/TabPane.js");
/* harmony import */ var _DefaultTabBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultTabBar */ "./src/tabs/DefaultTabBar.js");
/* harmony import */ var _utils_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_utils/animate */ "./src/_utils/animate.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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






var getPanDirection = function getPanDirection(direction) {
  switch (direction) {
    case 2:
    case 4:
      return 'horizontal';

    case 8:
    case 16:
      return 'vertical';

    default:
      return 'none';
  }
};

var WmeTabs = /*#__PURE__*/function (_Component) {
  _inherits(WmeTabs, _Component);

  var _super = _createSuper(WmeTabs);

  function WmeTabs(props) {
    var _this;

    _classCallCheck(this, WmeTabs);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "tabCache", {});

    _defineProperty(_assertThisInitialized(_this), "layout", null);

    _defineProperty(_assertThisInitialized(_this), "onPan", function () {
      var lastOffset = 0;
      var finalOffset = 0;
      var panDirection = null;

      var getLastOffset = function getLastOffset() {
        var isVertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.isTabVertical();
        var offset = +"".concat(lastOffset).replace('%', '');

        if ("".concat(lastOffset).indexOf('%') >= 0) {
          offset /= 100;
          offset *= isVertical ? _this.layout.clientHeight : _this.layout.clientWidth;
        }

        return offset;
      };

      return {
        onPanStart: function onPanStart(status) {
          if (!_this.props.swipeable || !_this.props.animated) return;
          panDirection = getPanDirection(status.direction);

          _this.setState({
            isMoving: true
          });
        },
        onPanMove: function onPanMove(status) {
          var _this$props = _this.props,
              swipeable = _this$props.swipeable,
              animated = _this$props.animated,
              useLeftInsteadTransform = _this$props.useLeftInsteadTransform;
          if (!status.moveStatus || !_this.layout || !swipeable || !animated) return;

          var isVertical = _this.isTabVertical();

          var offset = getLastOffset();

          if (isVertical) {
            offset += panDirection === 'horizontal' ? 0 : status.moveStatus.y;
          } else {
            offset += panDirection === 'vertical' ? 0 : status.moveStatus.x;
          }

          var canScrollOffset = isVertical ? -_this.layout.scrollHeight + _this.layout.clientHeight : -_this.layout.scrollWidth + _this.layout.clientWidth;
          offset = Math.min(offset, 0);
          offset = Math.max(offset, canScrollOffset);
          Object(_utils_animate__WEBPACK_IMPORTED_MODULE_3__["setPxStyle"])(_this.layout, offset, 'px', isVertical, useLeftInsteadTransform);
          finalOffset = offset;
        },
        onPanEnd: function onPanEnd() {
          if (!_this.props.swipeable || !_this.props.animated) return;
          lastOffset = finalOffset;

          var isVertical = _this.isTabVertical();

          var offsetIndex = _this.getOffsetIndex(finalOffset, isVertical ? _this.layout.clientHeight : _this.layout.clientWidth);

          _this.setState({
            isMoving: false
          });

          if (offsetIndex === _this.state.currentTab) {
            if (_this.props.usePaged) {
              Object(_utils_animate__WEBPACK_IMPORTED_MODULE_3__["setTransform"])(_this.layout.style, _this.getContentPosByIndex(offsetIndex, _this.isTabVertical(), _this.props.useLeftInsteadTransform));
            }
          } else {
            _this.goToTab(offsetIndex);
          }
        },
        setCurrentOffset: function setCurrentOffset(offset) {
          return lastOffset = offset;
        }
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "isTabVertical", function () {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.tabDirection;
      return direction === 'vertical';
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipe", function (status) {
      var _this$props2 = _this.props,
          tabBarPosition = _this$props2.tabBarPosition,
          swipeable = _this$props2.swipeable,
          usePaged = _this$props2.usePaged;
      if (!swipeable || !usePaged || _this.isTabVertical()) return; // DIRECTION_NONE	1
      // DIRECTION_LEFT	2
      // DIRECTION_RIGHT	4
      // DIRECTION_UP	8
      // DIRECTION_DOWN	16
      // DIRECTION_HORIZONTAL	6
      // DIRECTION_VERTICAL	24
      // DIRECTION_ALL	30

      switch (tabBarPosition) {
        case 'top':
        case 'bottom':
          switch (status.direction) {
            case 2:
              if (!_this.isTabVertical()) {
                _this.goToTab(_this.prevCurrentTab + 1);
              }

              break;

            case 8:
              if (_this.isTabVertical()) {
                _this.goToTab(_this.prevCurrentTab + 1);
              }

              break;

            case 4:
              if (!_this.isTabVertical()) {
                _this.goToTab(_this.prevCurrentTab - 1);
              }

              break;

            case 16:
              if (_this.isTabVertical()) {
                _this.goToTab(_this.prevCurrentTab - 1);
              }

              break;
          }

          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setContentLayout", function (div) {
      _this.layout = div;
    });

    _defineProperty(_assertThisInitialized(_this), "getSubElements", function () {
      var children = _this.props.children;
      var subElements = {};
      return function () {
        var defaultPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$i$-';
        var allPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '$ALL$';

        if (Array.isArray(children)) {
          children.forEach(function (child, index) {
            if (child.key) {
              subElements[child.key] = child;
            }

            subElements["".concat(defaultPrefix).concat(index)] = child;
          });
        } else if (children) {
          subElements[allPrefix] = children;
        }

        return subElements;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getSubElement", function (tab, index) {
      var subElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (defaultPrefix, allPrefix) {};
      var defaultPrefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '$i$-';
      var allPrefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '$ALL$';
      var key = tab.key || "".concat(defaultPrefix).concat(index);
      var elements = subElements(defaultPrefix, allPrefix);
      var component = elements[key] || elements[allPrefix];

      if (component instanceof Function) {
        component = component(tab, index);
      }

      return component || null;
    });

    _defineProperty(_assertThisInitialized(_this), "shouldRenderTab", function (idx) {
      var _this$props$prerender = _this.props.prerenderingSiblingsNumber,
          prerenderingSiblingsNumber = _this$props$prerender === void 0 ? 0 : _this$props$prerender;
      var _this$state$currentTa = _this.state.currentTab,
          currentTab = _this$state$currentTa === void 0 ? 0 : _this$state$currentTa;
      return currentTab - prerenderingSiblingsNumber <= idx && idx <= currentTab + prerenderingSiblingsNumber;
    });

    _this.state = {
      isMoving: false,
      currentTab: _this.getTabIndex(props),
      contentPos: _this.getContentPosByIndex(_this.getTabIndex(props), _this.isTabVertical(props.tabDirection), props.useLeftInsteadTransform)
    };
    return _this;
  }

  _createClass(WmeTabs, [{
    key: "getTabBarBaseProps",
    value: function getTabBarBaseProps() {
      var currentTab = this.state.currentTab;
      var _this$props3 = this.props,
          animated = _this$props3.animated,
          onTabClick = _this$props3.onTabClick,
          tabBarActiveTextColor = _this$props3.tabBarActiveTextColor,
          tabBarBackgroundColor = _this$props3.tabBarBackgroundColor,
          tabBarInactiveTextColor = _this$props3.tabBarInactiveTextColor,
          tabBarPosition = _this$props3.tabBarPosition,
          tabBarTextStyle = _this$props3.tabBarTextStyle,
          tabBarUnderlineStyle = _this$props3.tabBarUnderlineStyle,
          tabs = _this$props3.tabs,
          affix = _this$props3.affix,
          affixTop = _this$props3.affixTop;
      return {
        activeTab: currentTab,
        animated: !!animated,
        goToTab: this.tabClickGoToTab.bind(this),
        onTabClick: onTabClick,
        tabBarActiveTextColor: tabBarActiveTextColor,
        tabBarBackgroundColor: tabBarBackgroundColor,
        tabBarInactiveTextColor: tabBarInactiveTextColor,
        tabBarPosition: tabBarPosition,
        tabBarTextStyle: tabBarTextStyle,
        tabBarUnderlineStyle: tabBarUnderlineStyle,
        tabs: tabs,
        affix: affix,
        affixTop: affixTop,
        instanceId: this.instanceId
      };
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex(props) {
      var page = props.page,
          initialPage = props.initialPage,
          tabs = props.tabs;
      var param = (page !== undefined ? page : initialPage) || 0;
      var index = 0;

      if (typeof param === 'string') {
        tabs.forEach(function (t, i) {
          if (t.key === param) {
            index = i;
          }
        });
      } else {
        index = param || 0;
      }

      return index < 0 ? 0 : index;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.page !== prevState.page) {
        this.goToTab(this.getTabIndex(this.props), true, {}, this.props);
      }
    }
  }, {
    key: "goToTab",
    value: function goToTab(index) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var usePaged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.usePaged;
      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.props;
      var tabDirection = props.tabDirection,
          useLeftInsteadTransform = props.useLeftInsteadTransform;
      var newState = {};

      if (usePaged) {
        newState = {
          contentPos: this.getContentPosByIndex(index, this.isTabVertical(tabDirection), useLeftInsteadTransform)
        };
      }

      if (!force && this.nextCurrentTab === index) {
        return false;
      }

      this.nextCurrentTab = index;
      var tabs = props.tabs,
          onChange = props.onChange;

      if (index >= 0 && index < tabs.length) {
        if (!force) {
          if (onChange) {
            onChange(tabs[index], index);
          }

          if (props.page !== undefined) {
            return false;
          }
        }

        this.setState(_objectSpread({
          currentTab: index
        }, newState));
      }

      return true;
    }
  }, {
    key: "tabClickGoToTab",
    value: function tabClickGoToTab(index) {
      this.goToTab(index, false, true);
    }
  }, {
    key: "getContentPosByIndex",
    value: function getContentPosByIndex(index, isVertical) {
      var useLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var value = "".concat(-index * 100, "%");
      this.onPan.setCurrentOffset(value);

      if (useLeft) {
        return "".concat(value);
      }

      var translate = isVertical ? "0px, ".concat(value) : "".concat(value, ", 0px"); // fix: content overlay TabBar on iOS 10. ( 0px -> 1px )

      return "translate3d(".concat(translate, ", 1px)");
    }
  }, {
    key: "renderTabBar",
    value: function renderTabBar(tabBarProps, DefaultTabBar) {
      var renderTabBar = this.props.renderTabBar;

      if (renderTabBar === false) {
        return null;
      }

      if (renderTabBar) {
        // return React.cloneElement(this.props.renderTabBar(props), props);
        return renderTabBar(tabBarProps);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultTabBar, tabBarProps);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var getSubElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSubElements();
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          tabs = _this$props4.tabs,
          animated = _this$props4.animated,
          destroyInactiveTab = _this$props4.destroyInactiveTab,
          useLeftInsteadTransform = _this$props4.useLeftInsteadTransform;
      var _this$state = this.state,
          currentTab = _this$state.currentTab,
          isMoving = _this$state.isMoving,
          contentPos = _this$state.contentPos;
      var isTabVertical = this.isTabVertical();
      var contentCls = "".concat(prefixCls, "-content-wrap");

      if (animated && !isMoving) {
        contentCls += " ".concat(contentCls, "-animated");
      }

      var contentStyle = animated ? useLeftInsteadTransform ? _objectSpread({
        position: 'relative'
      }, this.isTabVertical() ? {
        top: contentPos
      } : {
        left: contentPos
      }) : Object(_utils_animate__WEBPACK_IMPORTED_MODULE_3__["getTransformPropValue"])(contentPos) : _objectSpread({
        position: 'relative'
      }, this.isTabVertical() ? {
        top: "".concat(-currentTab * 100, "%")
      } : {
        left: "".concat(-currentTab * 100, "%")
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: contentCls,
        style: contentStyle,
        key: "tabWrap",
        ref: this.setContentLayout
      }, tabs.map(function (tab, index) {
        var cls = "".concat(prefixCls, "-pane-wrap");

        if (_this2.state.currentTab === index) {
          cls += " ".concat(cls, "-active");
        } else {
          cls += " ".concat(cls, "-inactive");
        }

        var key = tab.key || "tab_".concat(index); // update tab cache

        if (_this2.shouldRenderTab(index)) {
          _this2.tabCache[index] = _this2.getSubElement(tab, index, getSubElements);
        } else if (destroyInactiveTab) {
          _this2.tabCache[index] = undefined;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabPane__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: key,
          className: cls,
          active: currentTab === index,
          role: "tabpanel",
          "aria-hidden": currentTab !== index,
          fixX: isTabVertical,
          fixY: !isTabVertical
        }, _this2.tabCache[index]);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          tabBarPosition = _this$props5.tabBarPosition,
          tabDirection = _this$props5.tabDirection,
          useOnPan = _this$props5.useOnPan,
          noRenderContent = _this$props5.noRenderContent;
      var isTabVertical = this.isTabVertical(tabDirection);

      var tabBarProps = _objectSpread({}, this.getTabBarBaseProps());

      var onPan = !isTabVertical && useOnPan ? this.onPan : {};
      var content = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "tabBar",
        className: "".concat(prefixCls, "-tab-bar-wrap")
      }, this.renderTabBar(tabBarProps, _DefaultTabBar__WEBPACK_IMPORTED_MODULE_2__["default"])), !noRenderContent && this.renderContent()];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, " ").concat(prefixCls, "-").concat(tabDirection, " ").concat(prefixCls, "-").concat(tabBarPosition)
      }, tabBarPosition === 'top' || tabBarPosition === 'left' ? content : content.reverse());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.page !== prevState.page) {
        return {
          page: nextProps.page
        };
      }

      return null;
    }
  }]);

  return WmeTabs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(WmeTabs, "DefaultTabBar", _DefaultTabBar__WEBPACK_IMPORTED_MODULE_2__["default"]);

_defineProperty(WmeTabs, "defaultProps", {
  tabBarPosition: 'top',
  initialPage: 0,
  swipeable: true,
  animated: true,
  prerenderingSiblingsNumber: 1,
  tabs: [],
  destroyInactiveTab: false,
  usePaged: true,
  tabDirection: 'horizontal',
  distanceToChangeTab: 0.3,
  prefixCls: 'wme-tabs',
  useOnPan: true
});



/***/ }),

/***/ "./src/tabs/index.js":
/*!***************************!*\
  !*** ./src/tabs/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs */ "./src/tabs/Tabs.js");
/* harmony import */ var _DefaultTabBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultTabBar */ "./src/tabs/DefaultTabBar.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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




/**
 * Tabs标签页
 * @author john.gao
 * @date 2020-03-20
 */

var Tabs = /*#__PURE__*/function (_Component) {
  _inherits(Tabs, _Component);

  var _super = _createSuper(Tabs);

  function Tabs() {
    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderTabBar", function (props) {
      var renderTab = _this.props.renderTab;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DefaultTabBar__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
        renderTab: renderTab
      }));
    });

    return _this;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          restProps = _objectWithoutProperties(_this$props, ["className"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        className: className,
        renderTabBar: this.renderTabBar
      }, restProps));
    }
  }]);

  return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/tabs/style/index.less":
/*!***********************************!*\
  !*** ./src/tabs/style/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/text/index.js":
/*!***************************!*\
  !*** ./src/text/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/index */ "./src/view/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}




var Text = /*#__PURE__*/function (_React$Component) {
  _inherits(Text, _React$Component);

  var _super = _createSuper(Text);

  function Text() {
    _classCallCheck(this, Text);

    return _super.apply(this, arguments);
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          content = _this$props.content,
          style = _this$props.style,
          resetPorops = _objectWithoutProperties(_this$props, ["color", "content", "style"]);

      var textStyle = _objectSpread({}, style);

      if (color) {
        textStyle.color = color;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view_index__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        style: textStyle
      }, resetPorops), content);
    }
  }]);

  return Text;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Text.defaultProps = {
  Component: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./src/textarea/index.js":
/*!*******************************!*\
  !*** ./src/textarea/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * Textarea
 * @author john.gao
 */




 // 正则

var regexCharacters = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g; // 计算字符长度

function countCharacters() {
  var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var text = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(v) ? '' : v;
  return text.replace(regexCharacters, '_').length;
}

var TextArea = /*#__PURE__*/function (_React$Component) {
  _inherits(TextArea, _React$Component);

  var _super = _createSuper(TextArea); // 防止blur后focus或者focus后blur（反跳）
  // 重新布局可见区域


  function TextArea(props) {
    var _this;

    _classCallCheck(this, TextArea);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "textareaRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "debounceTimeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "scrollIntoViewTimeout", void 0);

    _this.state = {
      focus: false
    };
    return _this;
  }

  _createClass(TextArea, [{
    key: "destroy",
    value: function destroy() {// TODO 收键盘
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var autoHeight = this.props.autoHeight;

      if (autoHeight) {
        this.reAlignHeight();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var autoHeight = this.props.autoHeight;
      var focus = this.state.focus;

      if (autoHeight && focus) {
        this.reAlignHeight();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }

      if (this.scrollIntoViewTimeout) {
        clearTimeout(this.scrollIntoViewTimeout);
        this.scrollIntoViewTimeout = null;
      }
    }
  }, {
    key: "reAlignHeight",
    value: function reAlignHeight() {
      var textareaDom = this.textareaRef;
      textareaDom.style.height = ''; // 字数减少时能自动减小高度

      textareaDom.style.height = "".concat(textareaDom.scrollHeight, "px");
    }
  }, {
    key: "focus",
    value: function focus() {
      this.textareaRef.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.textareaRef.blur();
    }
  }, {
    key: "handleInput",
    value: function handleInput(e) {
      var value = e.target.value;
      var onChange = this.props.onChange;

      if (onChange) {
        onChange(value);
      } // 设置 defaultValue 时，用户输入不会触发 componentDidUpdate ，此处手工调用


      this.componentDidUpdate();
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var _this2 = this;

      var _this$props = this.props,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange;
      this.debounceTimeout = setTimeout(function () {
        if (document.activeElement !== _this2.textareaRef) {
          _this2.setState({
            focus: false
          });
        }
      }, 100);
      this.setState({
        focus: false
      });
      var value = e.target.value;

      if (onBlur) {
        onBlur(value);
      }

      if (value === this.fValue) return;

      if (onChange) {
        onChange(value, e.target.name);
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }

      this.setState({
        focus: true
      });
      var value = e.target.value;
      this.fValue = value;

      if (this.props.onFocus) {
        this.props.onFocus(value);
      }

      if (document.activeElement.tagName.toLowerCase() === 'textarea') {
        this.scrollIntoViewTimeout = setTimeout(function () {
          try {
            document.activeElement.scrollIntoViewIfNeeded();
          } catch (ex) {
            console.log(ex);
          }
        }, 100);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this3 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          _this$props2$value = _this$props2.value,
          value = _this$props2$value === void 0 ? '' : _this$props2$value,
          className = _this$props2.className,
          style = _this$props2.style,
          length = _this$props2.length,
          autoHeight = _this$props2.autoHeight,
          title = _this$props2.title,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly,
          ismust = _this$props2.ismust,
          restProps = _objectWithoutProperties(_this$props2, ["prefixCls", "value", "className", "style", "length", "autoHeight", "title", "disabled", "readOnly", "ismust"]);

      var focus = this.state.focus;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-focus"), focus), _defineProperty(_classnames, "".concat(prefixCls, "-read-only"), readOnly), _classnames));
      var characterLength = countCharacters(value);
      var lengthCtrlProps = {};

      if (length > 0) {
        lengthCtrlProps.maxLength = length - characterLength + (value ? value.length : 0);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: wrapCls,
        style: style
      }, !!title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ismust ? '*' : ''), title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({
        ref: function ref(el) {
          return _this3.textareaRef = el;
        }
      }, lengthCtrlProps, restProps, {
        value: value || '',
        onChange: function onChange(e) {
          return _this3.handleInput(e);
        },
        onBlur: function onBlur(e) {
          return _this3.onBlur(e);
        },
        onFocus: function onFocus(e) {
          return _this3.onFocus(e);
        },
        readOnly: readOnly,
        disabled: disabled
      })), length > 0 && this.props.rows > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "".concat(prefixCls, "-length")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value ? characterLength : 0), "/", length));
    }
  }]);

  return TextArea;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(TextArea, "defaultProps", {
  prefixCls: 'wme-textarea',
  autoHeight: false,
  disabled: false,
  rows: 2,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
});



/***/ }),

/***/ "./src/textarea/style/index.less":
/*!***************************************!*\
  !*** ./src/textarea/style/index.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/toast/Toast.js":
/*!****************************!*\
  !*** ./src/toast/Toast.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/**
 * Toast
 * @author john.gao
 */





var Toast = /*#__PURE__*/function (_React$Component) {
  _inherits(Toast, _React$Component);

  var _super = _createSuper(Toast);

  function Toast() {
    _classCallCheck(this, Toast);

    return _super.apply(this, arguments);
  }

  _createClass(Toast, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, content)));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var duration = this.props.duration;
      this.clearCloseTimer();

      if (duration) {
        this.closeTimer = setTimeout(function () {
          _this.close();
        }, duration * 1000);
      }
    }
    /**
     * 清除定时器
     */

  }, {
    key: "clearCloseTimer",
    value: function clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    }
    /**
     * 关闭
     */

  }, {
    key: "close",
    value: function close() {
      var onClose = this.props.onClose;
      this.clearCloseTimer();
      onClose();
    }
  }]);

  return Toast;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Toast.defaultProps = {
  prefixCls: 'wme-toast',
  duration: 2.5
};
/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ "./src/toast/index.js":
/*!****************************!*\
  !*** ./src/toast/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toast */ "./src/toast/Toast.js");
/**
 * Toast
 * @author john.gao
 */



var toastInstance;
var prefixCls = 'wme-toast';

function newInstance(content, duration, _onClose) {
  var div = document.createElement('div');
  document.body.appendChild(div);
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toast__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prefixCls: prefixCls,
    content: content,
    duration: duration,
    onClose: function onClose() {
      if (_onClose) {
        _onClose();
      }

      toastInstance.destroy();
      toastInstance = null;
    }
  }), div);
  return {
    destroy: function destroy() {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  show: function show(content, duration, onClose) {
    this.destroy();
    toastInstance = newInstance(content, duration, onClose);
  },
  destroy: function destroy() {
    if (toastInstance) {
      toastInstance.destroy();
      toastInstance = null;
    }
  }
});

/***/ }),

/***/ "./src/toast/style/index.less":
/*!************************************!*\
  !*** ./src/toast/style/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/upload/index.js":
/*!*****************************!*\
  !*** ./src/upload/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var exif_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exif-js */ "./node_modules/exif-js/exif.js");
/* harmony import */ var exif_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exif_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
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
/**
 * 文件上传
 * @author john.gao
 */






var Upload = /*#__PURE__*/function (_React$Component) {
  _inherits(Upload, _React$Component);

  var _super = _createSuper(Upload);

  function Upload(props) {
    var _this;

    _classCallCheck(this, Upload);

    _this = _super.call(this, props);
    _this.imgDataList = []; // 压缩后的图片数据源

    return _this;
  }

  _createClass(Upload, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          multiple = _this$props.multiple,
          fileTypes = _this$props.fileTypes,
          refCb = _this$props.refCb,
          isPress = _this$props.isPress,
          readOnly = _this$props.readOnly,
          otherProps = _objectWithoutProperties(_this$props, ["prefixCls", "className", "multiple", "fileTypes", "refCb", "isPress", "readOnly"]);

      var pressSize = otherProps.pressSize,
          pressMaxWidth = otherProps.pressMaxWidth,
          pressMaxHeight = otherProps.pressMaxHeight,
          pressQuality = otherProps.pressQuality,
          fileSizeLimit = otherProps.fileSizeLimit,
          restProps = _objectWithoutProperties(otherProps, ["pressSize", "pressMaxWidth", "pressMaxHeight", "pressQuality", "fileSizeLimit"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, restProps, {
        type: "file",
        multiple: multiple,
        disabled: readOnly,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, className),
        onChange: function onChange(e) {
          _this2.handleChange(e);
        },
        accept: this.getFileTypes(),
        ref: refCb ? function (input) {
          return refCb(input);
        } : null
      }));
    } // 将输入的文件类型字符串转化为数组,原格式为*.jpg,*.png

  }, {
    key: "getFileTypes",
    value: function getFileTypes() {
      var fileTypes = this.props.fileTypes;
      var result = [];
      var array = fileTypes.split(',');
      return array.map(function (item) {
        return item.split('.').pop().toLowerCase();
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _this$props2 = this.props,
          onSelect = _this$props2.onSelect,
          isPress = _this$props2.isPress;
      var files = this.getFiles(e);

      if (files !== null && onSelect) {
        isPress ? this.compress(files, onSelect) : onSelect(files);
      }

      e.target.value = '';
    }
  }, {
    key: "getFiles",
    value: function getFiles(e) {
      var onError = this.props.onError;
      var files = this.filter(e.target.files);

      if (Array.isArray(files)) {
        return files;
      }

      onError && onError(files);
      return null;
    }
  }, {
    key: "filter",
    value: function filter(files) {
      var _this$props3 = this.props,
          fileTypes = _this$props3.fileTypes,
          fileSizeLimit = _this$props3.fileSizeLimit;
      var types = this.getFileTypes(fileTypes);
      if (types.length === 0) return [];
      var arr = [];

      for (var i = 0; i < files.length; i++) {
        var item = files[i];

        if (parseInt(this.formatFileSize(item.size, true)) <= fileSizeLimit) {
          var ext = item.name.split('.').pop().toLowerCase();

          if (types.indexOf('*') !== -1 || types.indexOf(ext) !== -1) {
            arr.push(item);
          } else {
            return {
              type: 'typeError',
              fileName: item.name
            };
          }
        } else {
          return {
            type: 'limitError',
            fileName: item.name
          };
        }
      }

      return arr;
    }
    /**
     * 将文件的单位由bytes转换为KB或MB，若第二个参数指定为true，则永远转换为KB
     * @param size
     * @param withKB
     * @return {*}
     */

  }, {
    key: "formatFileSize",
    value: function formatFileSize(size, withKB) {
      if (size > 1024 * 1024 && !withKB) {
        size = "".concat((Math.round(size * 100 / (1024 * 1024)) / 100).toString(), "MB");
      } else {
        size = "".concat((Math.round(size * 100 / 1024) / 100).toString(), "KB");
      }

      return size;
    }
    /**
     * 图片压缩
     * @param fileList file列表
     * @param {function} callback 回调函数
     */

  }, {
    key: "compress",
    value: function compress(fileList, callback) {
      if (!fileList || !fileList.length || !this.canvasSupport()) return null;

      var newFileList = _extends([], fileList);

      this.imgDataList = [];
      this.readerFiles(newFileList, callback);
    }
    /**
     * 读取图片
     * @param fileList
     */

  }, {
    key: "readerFiles",
    value: function readerFiles(fileList, callback) {
      var _this3 = this;

      var pressSize = this.props.pressSize;
      var file = fileList.pop();

      if (!file) {
        callback && callback(this.imgDataList);
        return;
      }

      exif_js__WEBPACK_IMPORTED_MODULE_1___default.a.getData(file, function () {
        var orientation = exif_js__WEBPACK_IMPORTED_MODULE_1___default.a.getTag(_this3, 'Orientation');
        orientation = orientation || 1;
        var newPressSize = 1024 * pressSize;
        var reader = new FileReader();

        reader.onload = function (e) {
          var result = e.target.result;
          if (!result) return;

          if (file.size <= newPressSize) {
            _this3.imgDataList.push(result);

            _this3.readerFiles(fileList, callback);
          } else {
            var img = new Image();
            img.src = result;

            img.onload = function (e) {
              var degree = 0;
              var width;
              var height;
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext('2d');

              var ratio = _this3.getPressRatio(_this3);

              var imgWidth = e.target.naturalWidth;
              var imgHeight = e.target.naturalHeight;
              var drawWidth = imgWidth * ratio;
              var drawHeight = imgHeight * ratio;
              canvas.width = width = drawWidth;
              canvas.height = height = drawHeight;

              switch (orientation) {
                case 3:
                  // 横屏
                  degree = 180;
                  drawWidth = -imgWidth * ratio;
                  drawHeight = -imgHeight * ratio;
                  break;

                case 6:
                  // 竖屏 home键在下
                  degree = 90;
                  canvas.width = height;
                  canvas.height = width;
                  drawWidth = width;
                  drawHeight = -height;
                  break;

                case 8:
                  // 竖屏 home键在上
                  canvas.width = height;
                  canvas.height = width;
                  degree = 270;
                  drawWidth = -width;
                  drawHeight = height;
                  break;

                default:
                  break;
              }

              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.rotate(degree * Math.PI / 180);
              ctx.drawImage(e.target, 0, 0, drawWidth, drawHeight);
              var newImgData = canvas.toDataURL(file.type, 0.8);

              _this3.imgDataList.push(newImgData);

              reader = null;

              _this3.readerFiles(fileList, callback);
            };
          }
        };

        reader.readAsDataURL(file);
      });
    } // 是否支持canvas

  }, {
    key: "canvasSupport",
    value: function canvasSupport() {
      return !!document.createElement('canvas').getContext;
    }
  }, {
    key: "getPressRatio",
    value: function getPressRatio(img) {
      var _this$props4 = this.props,
          pressMaxWidth = _this$props4.pressMaxWidth,
          pressMaxHeight = _this$props4.pressMaxHeight;
      var ratio = 1;
      var maxWidth = pressMaxWidth;
      var maxHeight = pressMaxHeight;
      var imgWidth = img.naturalWidth;
      var imgHeight = img.naturalHeight;

      if (imgWidth > maxWidth * 2 || imgHeight > maxHeight * 2) {
        if (imgWidth > maxWidth * 2) {
          ratio = imgWidth / maxWidth > 4 ? 1 / parseInt(imgWidth / (maxWidth * 2)) : 0.5;
        } else if (imgHeight > maxHeight * 2) {
          ratio = imgHeight / maxHeight > 4 ? 1 / parseInt(imgHeight / (maxHeight * 2)) : 0.5;
        }
      }

      return ratio;
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Upload, "defaultProps", {
  prefixCls: 'wme-upload',
  fileTypes: '*.*',
  // 允许上传的文件类型，格式'*.jpg,*.doc'
  isPress: true,
  // 是否压缩
  multiple: false,
  // 是否允许选择多个文件
  pressSize: 200,
  // 超过200kB需要进行压缩
  pressMaxWidth: window.screen.width,
  // 压缩的最大宽度
  pressMaxHeight: window.screen.height,
  // 压缩的最大高度
  pressQuality: 1,
  // 压缩质量
  fileSizeLimit: 10240,
  // 允许上传的文件大小，单位KB
  onSelect: function onSelect() {// 文件选中
  },
  onError: function onError() {// limitError :文件超出大小 fileTypeError : 文件类型错误
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ }),

/***/ "./src/upload/style/index.less":
/*!*************************************!*\
  !*** ./src/upload/style/index.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/version/index.js":
/*!******************************!*\
  !*** ./src/version/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
/**
 * 版本号
 * @author john.gao
 */

/* harmony default export */ __webpack_exports__["default"] = (_package_json__WEBPACK_IMPORTED_MODULE_0__["version"]);

/***/ }),

/***/ "./src/view/index.js":
/*!***************************!*\
  !*** ./src/view/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}



var View = /*#__PURE__*/function (_React$Component) {
  _inherits(View, _React$Component);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          restProps = _objectWithoutProperties(_this$props, ["Component"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, restProps);
    }
  }]);

  return View;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

View.defaultProps = {
  Component: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ 0:
/*!*********************!*\
  !*** multi ./index ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index */"./index.js");


/***/ }),

/***/ "moment":
/*!******************************************************************************************!*\
  !*** external {"root":"Moment","commonjs2":"moment","commonjs":"moment","amd":"moment"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=yuso-mobile.js.map