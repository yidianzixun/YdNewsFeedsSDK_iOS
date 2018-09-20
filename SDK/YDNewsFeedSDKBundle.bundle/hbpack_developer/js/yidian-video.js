(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define("YidianVideo", [], factory);
  else if(typeof exports === 'object')
    exports["YidianVideo"] = factory();
  else
    root["YidianVideo"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId]) {
/******/      return installedModules[moduleId].exports;
/******/    }
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.l = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, {
/******/        configurable: false,
/******/        enumerable: true,
/******/        get: getter
/******/      });
/******/    }
/******/  };
/******/
/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };
/******/
/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(13);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var utils = {
  getFormatTime: function getFormatTime(second) {
    var hour = parseInt(second / (60 * 60));
    var minute = parseInt(second / 60 % 60);
    var second = parseInt(second % 60);
    return (hour > 0 ? (hour < 10 ? "0" + hour : hour) + ":" : "") + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second);
  },
  getElementPageX: function getElementPageX(elem) {
    var pageX = elem.offsetLeft;
    var parent = elem.offsetParent;
    while (parent) {
      pageX += parent.offsetLeft;
      parent = parent.offsetParent;
    }
    return pageX;
  },
  getSupportsPassive: function getSupportsPassive() {
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassive = true;
        }
      });
      window.addEventListener("testPassive", null, opts);
      window.removeEventListener("testPassive", null, opts);
    } catch (e) {}
    return supportsPassive;
  },
  isSupportMute: function isSupportMute() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
      var ver_match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      var ver_arr = [parseInt(ver_match[1], 10), parseInt(ver_match[2], 10), parseInt(ver_match[3] || 0, 10)];
      if (ver_arr[0] < 10) {
        return false;
      }
    }
    return true;
  }
};
exports.default = utils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

var _player = __webpack_require__(5);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default YidianVideo;
module.exports = _player2.default;
// import YidianVideo from 'js/modules/videoplayer';

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultOptions = __webpack_require__(6);

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

var _videoCtrls = __webpack_require__(7);

var _videoCtrls2 = _interopRequireDefault(_videoCtrls);

var _progressCtrl = __webpack_require__(10);

var _progressCtrl2 = _interopRequireDefault(_progressCtrl);

var _wifiCtrl = __webpack_require__(11);

var _wifiCtrl2 = _interopRequireDefault(_wifiCtrl);

var _player = __webpack_require__(12);

var _player2 = _interopRequireDefault(_player);

var _defaultPoster = __webpack_require__(20);

var _defaultPoster2 = _interopRequireDefault(_defaultPoster);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var supportMute = _utils2.default.isSupportMute();

var Player = function () {
  function Player(options) {
    _classCallCheck(this, Player);

    this.options = _extends({}, _defaultOptions2.default, options);
    if (this.options.muteCtrl) {
      this.options.muteCtrl = supportMute;
    }
    this.container = this.options.container || document.createElement('div');
    this.container.classList.add('yidian-video');
    if (this.options.fullscreen && this.options.autoToggleFullscreen && window.innerHeight < window.innerWidth) {
      this.container.classList.add('yidian-video-fullscreen');
    }
    this.container.innerHTML = (0, _player2.default)(this.options);
    this.init();
  }

  _createClass(Player, [{
    key: 'init',
    value: function init() {
      this.canPlay = true;
      this.firstPlay = true;
      this.video = this.container.querySelector('video');
      this.videoCtrls = new _videoCtrls2.default(this);
      this.options.progressCtrl && (this.progressCtrl = new _progressCtrl2.default(this));
      this.wifiCtrl = new _wifiCtrl2.default(this);
      this.bindVideoEvent();
      this.bindResizeEvent();
      this.options.onBack && this.bindBackEvent();
      this.options.autoplay && this.play();
    }
  }, {
    key: 'bindVideoEvent',
    value: function bindVideoEvent() {
      var _this = this;

      // 获取播放时长
      this.video.addEventListener('durationchange', function () {
        _this.videoCtrls.updateDuration(_this.video.duration);
        _this.progressCtrl && (_this.progressCtrl.disable = !_this.allowGesture());
      });
      // 视频播放位置已更改时
      this.video.addEventListener('timeupdate', function () {
        if (!_this.videoCtrls.seekCtrl.isSeeking) {
          _this.videoCtrls.updateCurrentTime();
          _this.videoCtrls.updatePlayProgress(_this.video.currentTime / _this.video.duration * 100);
        }
      });
      // 视频播放
      this.video.addEventListener('play', function () {
        if (_this.firstPlay) {
          _this.firstPlay = false;
          _this.videoCtrls.ctrlBarElem.classList.remove('hide');
          _this.options.onFirstPlay && _this.options.onFirstPlay();
        }
        _this.videoCtrls.togglePlayBtn(false);
      });
      // 视频暂停
      this.video.addEventListener('pause', function () {
        _this.videoCtrls.togglePlayBtn(true);
      });
      // 视频正在下载
      this.video.addEventListener('progress', function () {
        var loadedPercent = (_this.video.buffered.length ? _this.video.buffered.end(_this.video.buffered.length - 1) / _this.video.duration : 0) * 100;
        _this.videoCtrls.updateLoadProgress(loadedPercent);
      });
      // 视频缓冲
      this.video.addEventListener('waiting', function () {
        _this.videoCtrls.show();
        _this.videoCtrls.togglePlayCtrl(_this.videoCtrls.loadingElem);
      });
      // 视频缓冲就绪
      this.video.addEventListener('playing', function () {
        _this.videoCtrls.show(true);
        _this.videoCtrls.togglePlayCtrl(_this.videoCtrls.playToggleElem);
      });
      // 视频播放结束
      this.video.addEventListener('ended', function () {
        _this.progressCtrl && _this.progressCtrl.hideProgressCtrl();
        _this.videoCtrls.show();
        if (_this.options.nextVideo) {
          _this.videoCtrls.togglePlayCtrl(_this.videoCtrls.playNextElem);
        } else {
          _this.videoCtrls.togglePlayCtrl(_this.videoCtrls.replayElem);
        }
      });
      // 视频出错
      this.video.addEventListener('error', function () {
        _this.progressCtrl && (_this.progressCtrl.disable = true);
        _this.wifiCtrl.hide(true);
        _this.videoCtrls.showToast(_this.options.errorText);
      });
    }
  }, {
    key: 'bindResizeEvent',
    value: function bindResizeEvent() {
      var _this2 = this;

      window.addEventListener('resize', function (event) {
        // 全屏切换 特殊处理
        if (_this2.options.fullscreen && _this2.options.autoToggleFullscreen) {
          if (window.innerHeight < window.innerWidth) {
            _this2.container.classList.add('yidian-video-fullscreen');
          } else {
            _this2.container.classList.remove('yidian-video-fullscreen');
          }
        }
        _this2.progressCtrl && (_this2.progressCtrl.disable = !_this2.allowGesture() || !_this2.video.duration);
        setTimeout(function () {
          _this2.videoCtrls.seekCtrl.thumbWidth = _this2.videoCtrls.seekCtrl.thumbElem.clientWidth;
          _this2.videoCtrls.seekCtrl.seekBarWidth = _this2.videoCtrls.seekCtrl.seekBarElem.clientWidth;
          _this2.videoCtrls.seekCtrl.updateSeekThumb();
        }, 100);
      });
    }
  }, {
    key: 'bindBackEvent',
    value: function bindBackEvent() {
      var _this3 = this;

      var backBtnElem = this.container.querySelector('.back-btn');
      backBtnElem.addEventListener('touchend', function (event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        _this3.options.onBack();
      });
    }
  }, {
    key: 'showPlayToggle',
    value: function showPlayToggle() {
      if (this.videoCtrls.loadingElem.classList.contains('hide') && this.videoCtrls.toastElem.classList.contains('hide') && this.videoCtrls.playToggleElem.classList.contains('hide') && !this.video.ended) {
        this.videoCtrls.togglePlayCtrl(this.videoCtrls.playToggleElem);
      }
    }
  }, {
    key: 'setVideoCurrentTime',
    value: function setVideoCurrentTime(progress) {
      progress = Math.max(progress, 0);
      progress = Math.min(progress, 100);
      this.video.currentTime = progress / 100 * this.video.duration;
    }
  }, {
    key: 'play',
    value: function play() {
      this.video.play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.video.pause();
    }
  }, {
    key: 'webviewPause',
    value: function webviewPause() {
      this.pause();
      this.canPlay && this.videoCtrls.show();
      !this.videoCtrls.playNextElem.classList.contains('hide') && this.videoCtrls.togglePlayCtrl(this.videoCtrls.replayElem);
    }
  }, {
    key: 'webviewResume',
    value: function webviewResume() {
      this.videoCtrls.replayElem.classList.contains('hide') && this.canPlay && this.play();
    }
  }, {
    key: 'updateNextVideo',
    value: function updateNextVideo(video) {
      this.options.nextVideo = video;
      this.videoCtrls.updatePlayNext(video);
    }
  }, {
    key: 'switchVideo',
    value: function switchVideo(video) {
      this.video.poster = _defaultPoster2.default;
      this.videoCtrls.playNext(video);
    }
  }, {
    key: 'reloadVideo',
    value: function reloadVideo() {
      this.video.load();
      this.play();
    }
  }, {
    key: 'toggleWifi',
    value: function toggleWifi(wifi) {
      if (wifi) {
        this.wifiCtrl.hide();
      } else {
        this.wifiCtrl.show();
      }
    }
  }, {
    key: 'allowGesture',
    value: function allowGesture() {
      // 当前是否允许手势操作
      return !this.options.disableInlineProgressCtrl || this.container.classList.contains('yidian-video-fullscreen');
    }
  }, {
    key: 'isFullscreen',
    value: function isFullscreen() {
      return this.videoCtrls.fullscreenCtrl.isFullscreen();
    }
  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen() {
      this.videoCtrls.fullscreenCtrl.toggleFullscreen();
    }
  }, {
    key: 'getCurrentLight',
    value: function getCurrentLight(percent) {
      // 获取系统当前亮度
      this.progressCtrl && this.progressCtrl.getCurrentLight(percent);
    }
  }, {
    key: 'getCurrentVolume',
    value: function getCurrentVolume(percent) {
      // 获取系统当前音量
      this.progressCtrl && this.progressCtrl.getCurrentVolume(percent);
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultOptions = {
  container: null,
  fullscreen: true,
  progressCtrl: true,
  muteCtrl: true,
  autoplay: false,
  autoToggleFullscreen: false, // 当 fullscreen 和 autoToggleFullscreen 均设置为 true, 则会根据页面宽高对比来进行全屏切换
  disableInlineProgressCtrl: false, // 半屏时是否禁止手势滑动（改为true的主要场景：1. Android4 播放器列表无法同时支持手势滑动和页面滚动 2.手势滑动与页面右滑关闭冲突时）
  video: null,
  nextVideo: null,
  cancelPlayNext: false, // 是否展示取消连播的按钮
  themeColor: '#da3838',
  errorText: '网络异常，请检查网络',
  ctrlReverse: false, // 默认播放器左侧为亮度调节，右侧为音量调节。修改为true时，则对换位置。
  hideInlineBackBtn: false, // 半屏时是否隐藏左上角返回按钮
  onBack: null,
  onShare: null,
  onPlayNext: null, // 播放结束时的连播回调 （eg:获取新的相关视频)
  onToggleFullscreen: null, // native 切换全屏
  onFirstPlay: null, // 首次播放 回调
  onManualPlayNext: null, // 手动连播 回调
  onAutoPlayNext: null, // 自动连播 回调
  onShowLight: null, // 显示亮度 回调
  onShowVolume: null, // 显示音量 回调
  onChangeLight: null, // 调节亮度 回调 调用客户端方法修改系统亮度
  onChangeVolume: null, // 调节音量 回调 调用客户端方法修改系统音量
  onSeekStart: null, // 开始拖动进度条 回调 eg:调用客户端方法禁止 native 滑动关闭
  onSeekEnd: null // 结束拖动进度条 回调 eg:调用客户端方法恢复 native 滑动关闭
};
exports.default = defaultOptions;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _seekCtrl = __webpack_require__(8);

var _seekCtrl2 = _interopRequireDefault(_seekCtrl);

var _fullscreenCtrl = __webpack_require__(9);

var _fullscreenCtrl2 = _interopRequireDefault(_fullscreenCtrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoCtrls = function () {
  function VideoCtrls(player) {
    _classCallCheck(this, VideoCtrls);

    this.player = player;
    this.init();
  }

  _createClass(VideoCtrls, [{
    key: 'init',
    value: function init() {
      this.btnSize = null;
      this.hideCtrlsTimerId = null;
      this.playNextTimerId = null;
      this.hideToastTimerId = null;
      this.videoCoverElem = this.player.container.querySelector('.video-cover');
      this.videoCtrlsElem = this.player.container.querySelector('.video-ctrls');
      this.videoTitleElem = this.videoCtrlsElem.querySelector('.video-title');
      this.ctrlBarElem = this.videoCtrlsElem.querySelector('.ctrl-bar');
      this.currentTimeElem = this.ctrlBarElem.querySelector('.current-time');
      this.loadingElem = this.videoCtrlsElem.querySelector('.loading');
      this.toastElem = this.videoCtrlsElem.querySelector('.toast');
      this.playToggleElem = this.videoCtrlsElem.querySelector('.play-toggle');
      this.replayElem = this.videoCtrlsElem.querySelector('.replay');
      this.playNextElem = this.videoCtrlsElem.querySelector('.playnext');
      this.miniProgressBarElem = this.player.container.querySelector('.mini-progress-bar');
      this.miniProgressPlayedElem = this.miniProgressBarElem.querySelector('.mini-played');
      this.miniProgressLoadedElem = this.miniProgressBarElem.querySelector('.mini-loaded');
      this.seekCtrl = new _seekCtrl2.default(this);
      this.player.options.fullscreen && (this.fullscreenCtrl = new _fullscreenCtrl2.default(this));
      this.bindEvent();
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent() {
      this.bindToggleVideoCtrlsEvent();
      this.bindTogglePlayEvent();
      this.bindReplayEvent();
      this.bindPlayNextEvent();
      this.player.options.muteCtrl && this.bindMuteEvent();
      this.player.options.cancelPlayNext && this.bindCancelPlayNextEvent();
      this.player.options.onShare && this.bindShareEvent();
    }
  }, {
    key: 'bindToggleVideoCtrlsEvent',
    value: function bindToggleVideoCtrlsEvent() {
      var _this = this;

      this.videoCoverElem.addEventListener('touchend', function (event) {
        _this.show(true);
      });
      this.videoCtrlsElem.addEventListener('touchend', function (event) {
        if (_this.player.video.error) {
          // window.location.reload();
          _this.player.reloadVideo();
        }
        if (event.target == event.currentTarget && !_this.player.video.paused) {
          // 视频暂停时不可隐藏控件
          _this.hide();
        }
      });
    }
  }, {
    key: 'bindTogglePlayEvent',
    value: function bindTogglePlayEvent() {
      var _this2 = this;

      this.playToggleElem.addEventListener('touchend', function (event) {
        if (_this2.player.video.paused) {
          _this2.player.play();
        } else {
          _this2.player.pause();
        }
        _this2.show(true);
      });
    }
  }, {
    key: 'bindReplayEvent',
    value: function bindReplayEvent() {
      var _this3 = this;

      this.replayElem.addEventListener('touchend', function () {
        _this3.togglePlayCtrl(_this3.playToggleElem);
        _this3.player.play();
      });
    }
  }, {
    key: 'bindMuteEvent',
    value: function bindMuteEvent() {
      var _this4 = this;

      var muteBtnElem = this.videoCtrlsElem.querySelector('.mute-btn');
      muteBtnElem.addEventListener('touchend', function (event) {
        _this4.show(true);
        _this4.player.video.muted = !_this4.player.video.muted;
        _this4.player.video.muted ? muteBtnElem.classList.add('muted') : muteBtnElem.classList.remove('muted');
      });
    }
  }, {
    key: 'bindPlayNextEvent',
    value: function bindPlayNextEvent() {
      var _this5 = this;

      var playNextBtnElem = this.playNextElem.querySelector('.play-btn');
      playNextBtnElem.addEventListener('touchend', function () {
        _this5.playNext(_this5.player.options.nextVideo, true, true);
      });
    }
  }, {
    key: 'bindCancelPlayNextEvent',
    value: function bindCancelPlayNextEvent() {
      var _this6 = this;

      var cancelPlayNextBtnElem = this.playNextElem.querySelector('.cancel-btn');
      cancelPlayNextBtnElem.addEventListener('touchend', function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        _this6.togglePlayCtrl(_this6.replayElem);
      });
    }
  }, {
    key: 'bindShareEvent',
    value: function bindShareEvent() {
      var shareBtnElem = this.videoCtrlsElem.querySelector('.share-btn');
      shareBtnElem.addEventListener('touchend', this.player.options.onShare);
    }
  }, {
    key: 'updateDuration',
    value: function updateDuration(duration) {
      var durationElem = this.videoCtrlsElem.querySelector('.duration');
      durationElem.innerText = _utils2.default.getFormatTime(duration);
    }
  }, {
    key: 'updateCurrentTime',
    value: function updateCurrentTime(second) {
      second = second || this.player.video.currentTime;
      this.currentTimeElem.innerText = _utils2.default.getFormatTime(second);
    }
  }, {
    key: 'updatePlayProgress',
    value: function updatePlayProgress(progress) {
      this.seekCtrl.updateSeekPlayed(progress);
      this.miniProgressPlayedElem.style.width = progress + '%';
    }
  }, {
    key: 'updateLoadProgress',
    value: function updateLoadProgress(progress) {
      this.seekCtrl.updateSeekLoaded(progress);
      this.miniProgressLoadedElem.style.width = progress + '%';
    }
  }, {
    key: 'updatePlayNext',
    value: function updatePlayNext(nextVideo) {
      var nextVideoTitle = this.playNextElem.querySelector('.title');
      nextVideoTitle.innerText = '\u5373\u5C06\u64AD\u51FA\uFF1A' + nextVideo.title;
    }
  }, {
    key: 'renderPlayNext',
    value: function renderPlayNext() {
      var playBtn = this.playNextElem.querySelector('.play-btn');
      playBtn.innerHTML = '\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + this.btnSize + ' ' + this.btnSize + '">\n        <circle class="circle-animation" r=' + (this.btnSize / 2 - 2) + ' cx=' + this.btnSize / 2 + ' cy=' + this.btnSize / 2 + ' stroke-width=2 stroke="#fff" fill="none" />\n      </svg>';
    }
  }, {
    key: 'playNext',
    value: function playNext(nextVideo, isPlayEnd, isManual) {
      this.player.options.video = nextVideo;
      // 自动连播 埋点回调
      isPlayEnd && !isManual && this.player.options.onAutoPlayNext && this.player.options.onAutoPlayNext();
      // 手动连播 埋点回调
      isPlayEnd && isManual && this.player.options.onManualPlayNext && this.player.options.onManualPlayNext();
      this.playNextTimerId && clearTimeout(this.playNextTimerId);
      this.player.video.src = nextVideo.src;
      this.player.video.poster = nextVideo.poster;
      this.videoTitleElem.innerText = nextVideo.title;
      this.updateLoadProgress(0);
      this.updatePlayProgress(0);
      this.player.video.load();
      this.player.canPlay && this.player.video.play();
      !this.player.canPlay && this.player.toggleWifi(false);
      this.player.options.nextVideo = null;
      isPlayEnd && this.player.options.onPlayNext && this.player.options.onPlayNext(nextVideo);
    }
  }, {
    key: 'togglePlayCtrl',
    value: function togglePlayCtrl(playCtrlElem) {
      var _this7 = this;

      var playCtrls = Array.prototype.slice.call(this.videoCtrlsElem.querySelectorAll('.play-ctrl'));
      playCtrls.forEach(function (item) {
        item.classList.add('hide');
      });
      playCtrlElem.classList.remove('hide');
      this.videoCtrlsElem.classList.remove('video-ctrls-dark');
      this.player.progressCtrl && (this.player.progressCtrl.disable = !this.player.video.duration || !this.player.allowGesture());
      this.playNextTimerId && clearTimeout(this.playNextTimerId);
      if (playCtrlElem == this.playNextElem || playCtrlElem == this.replayElem) {
        this.videoCtrlsElem.classList.add('video-ctrls-dark');
      }
      if (playCtrlElem == this.playNextElem) {
        this.player.progressCtrl && (this.player.progressCtrl.disable = true);
        this.playNextTimerId = setTimeout(function () {
          _this7.playNext(_this7.player.options.nextVideo, true);
        }, 5000);
        if (!this.btnSize) {
          this.btnSize = this.playNextElem.querySelector('.play-btn').clientWidth;
          this.renderPlayNext();
        }
      }
    }
  }, {
    key: 'togglePlayBtn',
    value: function togglePlayBtn(isPaused) {
      isPaused ? this.playToggleElem.classList.remove('pause') : this.playToggleElem.classList.add('pause');
    }
  }, {
    key: 'show',
    value: function show(autohide) {
      this.hideCtrlsTimerId && clearTimeout(this.hideCtrlsTimerId);
      this.videoCtrlsElem.classList.remove('hide');
      this.miniProgressBarElem.classList.add('hide');
      if (!this.seekCtrl.thumbWidth) {
        this.seekCtrl.thumbWidth = this.seekCtrl.thumbElem.clientWidth;
      }
      if (!this.seekCtrl.seekBarWidth) {
        this.seekCtrl.seekBarWidth = this.seekCtrl.seekBarElem.clientWidth;
      }
      if (autohide && !this.player.video.paused) {
        this.hideCtrlsTimerId = setTimeout(this.hide.bind(this), 3000);
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.videoCtrlsElem.classList.add('hide');
      this.miniProgressBarElem.classList.remove('hide');
    }
  }, {
    key: 'showToast',
    value: function showToast(text, autohide) {
      this.hideToastTimerId && clearTimeout(this.hideToastTimerId);
      this.show();
      this.togglePlayCtrl(this.toastElem);
      this.toastElem.innerText = text;
      autohide && setTimeout(this.hideToast.bind(this), 3000);
    }
  }, {
    key: 'hideToast',
    value: function hideToast() {
      this.show(true);
      this.toastElem.innerText = '';
      this.togglePlayCtrl(this.playToggleElem);
    }
  }]);

  return VideoCtrls;
}();

exports.default = VideoCtrls;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SeekCtrl = function () {
  function SeekCtrl(videoCtrls) {
    _classCallCheck(this, SeekCtrl);

    this.videoCtrls = videoCtrls;
    this.init();
  }

  _createClass(SeekCtrl, [{
    key: 'init',
    value: function init() {
      this.isSeeking = false;
      this.seekBarElem = this.videoCtrls.ctrlBarElem.querySelector('.seek-bar');
      this.thumbElem = this.videoCtrls.ctrlBarElem.querySelector('.slider-thumb');
      this.thumbWidth = this.thumbElem.clientWidth;
      this.seekBarWidth = this.seekBarElem.clientWidth;
      this.playedElem = this.videoCtrls.ctrlBarElem.querySelector('.slider-played');
      this.loadedElem = this.videoCtrls.ctrlBarElem.querySelector('.slider-loaded');
      this.bindEvent();
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent() {
      var _this = this;

      this.thumbElem.addEventListener('touchstart', function (event) {
        _this.videoCtrls.player.options.onSeekStart && _this.videoCtrls.player.options.onSeekStart();
        event.stopPropagation();
        event.stopImmediatePropagation();
        _this.isSeeking = true;
        _this.videoCtrls.hideCtrlsTimerId && clearTimeout(_this.videoCtrls.hideCtrlsTimerId);
      });
      this.seekBarElem.addEventListener('touchmove', function (event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        var seekBarPageX = _utils2.default.getElementPageX(_this.seekBarElem);
        var seekBarWidth = _this.seekBarElem.clientWidth;
        var playedPercent = (event.targetTouches[0].pageX - seekBarPageX) / seekBarWidth * 100;
        playedPercent = Math.max(playedPercent, 0);
        playedPercent = Math.min(playedPercent, 100);
        _this.videoCtrls.updateCurrentTime(playedPercent / 100 * _this.videoCtrls.player.video.duration);
        _this.videoCtrls.updatePlayProgress(playedPercent);
      });
      this.seekBarElem.addEventListener('touchend', function (event) {
        _this.videoCtrls.player.options.onSeekEnd && _this.videoCtrls.player.options.onSeekEnd();
        event.stopPropagation();
        event.stopImmediatePropagation();
        _this.isSeeking = false;
        _this.videoCtrls.show(true);
        var playedPercent = parseFloat(_this.playedElem.style.width) || 0;
        _this.videoCtrls.player.setVideoCurrentTime(playedPercent);
        _this.videoCtrls.player.showPlayToggle();
      });
    }
  }, {
    key: 'updateSeekThumb',
    value: function updateSeekThumb(progress) {
      progress = progress || parseFloat(this.playedElem.style.width) || 0;
      var thumbOffsetPercent = this.thumbWidth / 2 / this.seekBarWidth * 100;
      this.thumbElem.style.left = progress - thumbOffsetPercent + '%';
    }
  }, {
    key: 'updateSeekPlayed',
    value: function updateSeekPlayed(progress) {
      this.playedElem.style.width = progress + '%';
      this.updateSeekThumb(progress);
    }
  }, {
    key: 'updateSeekLoaded',
    value: function updateSeekLoaded(progress) {
      this.loadedElem.style.width = progress + '%';
    }
  }]);

  return SeekCtrl;
}();

exports.default = SeekCtrl;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FullscreenCtrl = function () {
  function FullscreenCtrl(videoCtrls) {
    _classCallCheck(this, FullscreenCtrl);

    this.videoCtrls = videoCtrls;
    this.bindEvent();
  }

  _createClass(FullscreenCtrl, [{
    key: 'bindEvent',
    value: function bindEvent() {
      var _this = this;

      var fullscreenBtnElem = this.videoCtrls.ctrlBarElem.querySelector('.fullscreen-btn');
      fullscreenBtnElem.addEventListener('touchend', function (event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        _this.toggleFullscreen();
      });
    }
  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen() {
      var onToggleFullscreen = this.videoCtrls.player.options.onToggleFullscreen;
      if (onToggleFullscreen) {
        // 使用 native 方法切换全屏
        var isFullscreen = this.isFullscreen();
        this.videoCtrls.player.container.classList.toggle('yidian-video-fullscreen');
        this.videoCtrls.player.progressCtrl && (this.videoCtrls.player.progressCtrl.disable = !this.videoCtrls.player.allowGesture() || !this.videoCtrls.player.video.duration);
        onToggleFullscreen(isFullscreen);
      } else {
        // 使用浏览器自带的全屏功能
        this.toggleBrowserFullscreen();
      }
    }
  }, {
    key: 'isFullscreen',
    value: function isFullscreen() {
      var onToggleFullscreen = this.videoCtrls.player.options.onToggleFullscreen;
      if (onToggleFullscreen) {
        return this.videoCtrls.player.container.classList.contains('yidian-video-fullscreen');
      } else {
        return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
      }
    }
  }, {
    key: 'toggleBrowserFullscreen',
    value: function toggleBrowserFullscreen() {
      if (this.isFullscreen()) {
        this.exitBrowserFullscreen();
      } else {
        this.enterBrowserFullscreen();
      }
    }
  }, {
    key: 'enterBrowserFullscreen',
    value: function enterBrowserFullscreen() {
      var video = this.videoCtrls.player.video;
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        // iOS
        video.webkitEnterFullscreen();
      }
    }
  }, {
    key: 'exitBrowserFullscreen',
    value: function exitBrowserFullscreen() {
      var exitFullscreenFn = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
      exitFullscreenFn && exitFullscreenFn.call(document);
    }
  }]);

  return FullscreenCtrl;
}();

exports.default = FullscreenCtrl;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProgressCtrl = function () {
  function ProgressCtrl(player) {
    _classCallCheck(this, ProgressCtrl);

    this.player = player;
    this.init();
  }

  _createClass(ProgressCtrl, [{
    key: 'init',
    value: function init() {
      this.disable = true;
      this.moveType = null;
      this.touchstart = true;
      this.progressTouchstartPageX = null;
      this.progressTouchstartPageY = null;
      this.progressTouchmovePageX = null;
      this.progressTouchmovePageY = null;
      this.fastCtrlStartPercent = null;
      this.fastCtrlNewPercent = null;
      this.lightCtrlStartPercent = null;
      this.lightCtrlNewPercent = null;
      this.volumeCtrlStartPercent = null;
      this.volumeCtrlNewPercent = null;
      this.progressCtrlElems = Array.prototype.slice.call(this.player.container.querySelectorAll('.progress-ctrl'));
      this.fastCtrlElem = this.player.container.querySelector('.fast-ctrl');
      this.lightCtrlElem = this.player.container.querySelector('.light-ctrl');
      this.volumeCtrlElem = this.player.container.querySelector('.volume-ctrl');
      this.bindEvent();
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent() {
      var _this = this;

      this.player.container.addEventListener('touchstart', function (event) {
        if (_this.disable) return;
        _this.moveType = null;
        _this.touchstart = true;
        _this.progressTouchstartPageX = event.targetTouches[0].pageX;
        _this.progressTouchstartPageY = event.targetTouches[0].pageY;
        _this.progressTouchmovePageX = event.targetTouches[0].pageX;
        _this.progressTouchmovePageY = event.targetTouches[0].pageY;
        _this.fastCtrlStartPercent = parseFloat(_this.player.videoCtrls.seekCtrl.playedElem.style.width) || 0;
        _this.player.options.onShowLight && _this.player.options.onShowLight();
        _this.player.options.onShowVolume && _this.player.options.onShowVolume();
      });
      this.player.container.addEventListener('touchmove', function (event) {
        if (_this.disable) return;
        event.preventDefault();
        var newPageX = event.targetTouches[0].pageX;
        var newPageY = event.targetTouches[0].pageY;
        if (_this.moveType) {
          _this.updateProgressCtrl(newPageX, newPageY);
        } else {
          if (_this.touchstart) {
            // touchmove 过程中不能切换 moveType
            _this.touchstart = false;
            _this.moveType = _this.getMoveType(newPageX - _this.progressTouchstartPageX, newPageY - _this.progressTouchstartPageY);
            if (!_this.moveType) return;
            _this.toggleProgressCtrl(_this.moveType);
            _this.updateProgressCtrl(newPageX, newPageY);
          }
        }
        _this.progressTouchmovePageX = newPageX;
        _this.progressTouchmovePageY = newPageY;
      });
      this.player.container.addEventListener('touchend', function (event) {
        if (_this.disable) return;
        _this.lightCtrlStartPercent = null;
        _this.volumeCtrlStartPercent = null;
        if (_this.moveType) {
          _this.hideProgressCtrl();
          _this.player.videoCtrls.show(true);
          _this.player.showPlayToggle();
        }
        if (_this.moveType == 'fastCtrl') {
          _this.player.videoCtrls.updateCurrentTime(_this.fastCtrlNewPercent / 100 * _this.player.video.duration);
          _this.player.videoCtrls.updatePlayProgress(_this.fastCtrlNewPercent);
          _this.player.setVideoCurrentTime(_this.fastCtrlNewPercent);
        } else if (_this.moveType == 'lightCtrl') {
          _this.lightCtrlNewPercent != null && _this.player.options.onChangeLight && _this.player.options.onChangeLight(_this.lightCtrlNewPercent);
        } else if (_this.moveType == 'volumeCtrl') {
          _this.volumeCtrlNewPercent != null && _this.player.options.onChangeVolume && _this.player.options.onChangeVolume(_this.volumeCtrlNewPercent);
        }
      });
    }
  }, {
    key: 'updateProgressCtrl',
    value: function updateProgressCtrl(newPageX, newPageY) {
      if (this.moveType == 'fastCtrl') {
        this.updateFastCtrl(this.progressTouchmovePageX, newPageX);
      } else if (this.moveType == 'lightCtrl') {
        this.updateLightCtrl(this.progressTouchmovePageY, newPageY);
      } else if (this.moveType == 'volumeCtrl') {
        this.updateVolumeCtrl(this.progressTouchmovePageY, newPageY);
      }
    }
  }, {
    key: 'updateFastCtrl',
    value: function updateFastCtrl(oldPageX, newPageX) {
      var typeElem = this.fastCtrlElem.querySelector('.progress-type');
      var pageDiff = oldPageX - newPageX;
      if (pageDiff > 0) {
        typeElem.classList.add('backward');
      } else if (pageDiff < 0) {
        typeElem.classList.remove('backward');
      }
      var fastCtrlPercentElem = this.fastCtrlElem.querySelector('.progress-percent');
      var progressTimeElem = this.fastCtrlElem.querySelector('.progress-time');
      var changedPercent = (newPageX - this.progressTouchstartPageX) / this.player.container.clientWidth * 100 * 2;
      this.fastCtrlNewPercent = this.fastCtrlStartPercent + changedPercent;
      this.fastCtrlNewPercent = Math.max(this.fastCtrlNewPercent, 0);
      this.fastCtrlNewPercent = Math.min(this.fastCtrlNewPercent, 100);
      fastCtrlPercentElem.style.width = this.fastCtrlNewPercent + '%';
      progressTimeElem.innerText = _utils2.default.getFormatTime(this.fastCtrlNewPercent / 100 * this.player.video.duration) + '/' + _utils2.default.getFormatTime(this.player.video.duration);
    }
  }, {
    key: 'updateLightCtrl',
    value: function updateLightCtrl(oldPageY, newPageY) {
      if (this.lightCtrlStartPercent == null) return;
      var lightCtrlPercentElem = this.lightCtrlElem.querySelector('.progress-percent');
      var changedPercent = -100 * 2 * (newPageY - this.progressTouchstartPageY) / this.player.container.offsetHeight; // 上滑时 newPageY 会变小
      this.lightCtrlNewPercent = this.lightCtrlStartPercent + changedPercent;
      console.log('updateLightCtrl--this.lightCtrlStartPercent---', this.lightCtrlStartPercent, '---this.lightCtrlNewPercent---', this.lightCtrlNewPercent);
      this.lightCtrlNewPercent = Math.max(this.lightCtrlNewPercent, 0);
      this.lightCtrlNewPercent = Math.min(this.lightCtrlNewPercent, 100);
      lightCtrlPercentElem.style.width = this.lightCtrlNewPercent + '%';
      this.player.options.onChangeLight && this.player.options.onChangeLight(this.lightCtrlNewPercent);
    }
  }, {
    key: 'updateVolumeCtrl',
    value: function updateVolumeCtrl(oldPageY, newPageY) {
      if (this.volumeCtrlStartPercent == null) return;
      var volumePercentElem = this.volumeCtrlElem.querySelector('.progress-percent');
      var changedPercent = -100 * 2 * (newPageY - this.progressTouchstartPageY) / this.player.container.offsetHeight; // 上滑时 newPageY 会变小
      this.volumeCtrlNewPercent = this.volumeCtrlStartPercent + changedPercent;
      console.log('updateVolumeCtrl--this.volumeCtrlStartPercent---', this.volumeCtrlStartPercent, '---this.volumeCtrlNewPercent---', this.volumeCtrlNewPercent);
      this.volumeCtrlNewPercent = Math.max(this.volumeCtrlNewPercent, 0);
      this.volumeCtrlNewPercent = Math.min(this.volumeCtrlNewPercent, 100);
      volumePercentElem.style.width = this.volumeCtrlNewPercent + '%';
      this.player.options.onChangeVolume && this.player.options.onChangeVolume(this.volumeCtrlNewPercent);
    }
  }, {
    key: 'toggleProgressCtrl',
    value: function toggleProgressCtrl(type) {
      this.hideProgressCtrl();
      this.player.videoCtrls.hide();
      this[type + 'Elem'].classList.remove('hide');
    }
  }, {
    key: 'hideProgressCtrl',
    value: function hideProgressCtrl() {
      this.progressCtrlElems.forEach(function (item) {
        item.classList.add('hide');
      });
    }
  }, {
    key: 'getMoveType',
    value: function getMoveType(moveX, moveY) {
      var firstMoveThreshold = 5; // 首次滑动 最小位移
      if (Math.max(Math.abs(moveX), Math.abs(moveY)) < firstMoveThreshold) return;
      if (Math.abs(moveX) >= Math.abs(moveY)) {
        // 横向滑动：快进快退
        return 'fastCtrl';
      } else {
        // 纵向滑动
        // 默认播放器左侧为亮度调节，播放器右侧为音量调节
        var isLightSide = !this.player.options.ctrlReverse && this.progressTouchstartPageX < this.player.container.offsetWidth / 2 || this.player.options.ctrlReverse && this.progressTouchstartPageX >= this.player.container.offsetWidth / 2;
        if (isLightSide) {
          if (this.player.options.onShowLight && this.player.options.onChangeLight) return 'lightCtrl';
        } else {
          if (this.player.options.onShowVolume && this.player.options.onChangeVolume) return 'volumeCtrl';
        }
      }
    }
  }, {
    key: 'getCurrentLight',
    value: function getCurrentLight(percent) {
      this.lightCtrlStartPercent = percent;
    }
  }, {
    key: 'getCurrentVolume',
    value: function getCurrentVolume(percent) {
      this.volumeCtrlStartPercent = percent;
    }
  }]);

  return ProgressCtrl;
}();

exports.default = ProgressCtrl;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var supportsPassive = _utils2.default.getSupportsPassive();

var WifiCtrl = function () {
  function WifiCtrl(player) {
    _classCallCheck(this, WifiCtrl);

    this.player = player;
    this.wifiCtrlElem = this.player.container.querySelector('.wifi-ctrl');
    this.bindEvent();
  }

  _createClass(WifiCtrl, [{
    key: 'bindEvent',
    value: function bindEvent() {
      var _this = this;

      var continuePlayBtnElem = this.wifiCtrlElem.querySelector('.continue-play-btn');
      ['touchstart', 'touchmove', 'touchend'].forEach(function (eventType) {
        _this.wifiCtrlElem.addEventListener(eventType, function (event) {
          event.stopPropagation();
          event.stopImmediatePropagation();
        }, supportsPassive ? { passive: true } : false);
      });
      continuePlayBtnElem.addEventListener('touchend', function () {
        _this.player.canPlay = true;
        _this.player.play();
        _this.wifiCtrlElem.classList.add('hide');
      });
    }
  }, {
    key: 'show',
    value: function show() {
      this.player.canPlay = false;
      this.player.videoCtrls.hide();
      this.player.pause();
      this.wifiCtrlElem.classList.remove('hide');
    }
  }, {
    key: 'hide',
    value: function hide(isError) {
      this.wifiCtrlElem.classList.add('hide');
      if (!isError) {
        this.player.canPlay = true;
        this.player.videoCtrls.show(true);
      }
    }
  }]);

  return WifiCtrl;
}();

exports.default = WifiCtrl;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(0);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $$blocks = arguments[1] || {}, include = function (content) {
            $$out += content;
            return $$out;
        }, video = $data.video, $escape = $imports.$escape, muteCtrl = $data.muteCtrl, onShare = $data.onShare, themeColor = $data.themeColor, progressCtrl = $data.progressCtrl, onBack = $data.onBack, hideInlineBackBtn = $data.hideInlineBackBtn;
    include(__webpack_require__(15)(video));
    $$out += '\n<div class="video-cover"></div>\n<div class="video-ctrls">\n  <div class="video-title">';
    $$out += $escape(video.title);
    $$out += '</div>\n  ';
    if (muteCtrl) {
        $$out += '\n    <div class="mute-btn"></div>\n  ';
    }
    $$out += '\n  ';
    include(__webpack_require__(16)($data));
    $$out += '\n  ';
    include(__webpack_require__(17)($data));
    $$out += '\n  ';
    if (onShare) {
        $$out += '\n    <div class="share-btn"></div>\n  ';
    }
    $$out += '\n</div>\n<div class="mini-progress-bar hide">\n  <div class="mini-played" style="background: ';
    $$out += $escape(themeColor);
    $$out += '"></div>\n  <div class="mini-loaded"></div>\n</div>\n';
    if (progressCtrl) {
        $$out += '\n  ';
        include(__webpack_require__(18)($data));
        $$out += '\n';
    }
    $$out += '\n';
    include(__webpack_require__(19)($data));
    $$out += '\n';
    if (onBack) {
        $$out += '\n  <div class="';
        $$out += $escape(hideInlineBackBtn ? 'back-btn inline-hide' : 'back-btn');
        $$out += '"></div>\n  <div class="back-btn preload"></div>\n';
    }
    return $$out;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*! art-template@runtime | https://github.com/aui/art-template */

var detectNode = __webpack_require__(14);
var runtime = Object.create(detectNode ? global : window);
var ESCAPE_REG = /["&'<>]/;

/**
 * 编码模板输出的内容
 * @param  {any}        content
 * @return {string}
 */
runtime.$escape = function (content) {
    return xmlEscape(toString(content));
};

/**
 * 迭代器，支持数组与对象
 * @param {array|Object} data
 * @param {function}     callback
 */
runtime.$each = function (data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
};

// 将目标转成字符
function toString(value) {
    if (typeof value !== 'string') {
        if (value === undefined || value === null) {
            value = '';
        } else if (typeof value === 'function') {
            value = toString(value.call(value));
        } else {
            value = JSON.stringify(value);
        }
    }

    return value;
};

// 编码 HTML 内容
function xmlEscape(content) {
    var html = '' + content;
    var regexResult = ESCAPE_REG.exec(html);
    if (!regexResult) {
        return content;
    }

    var result = '';
    var i = void 0,
        lastIndex = void 0,
        char = void 0;
    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {

        switch (html.charCodeAt(i)) {
            case 34:
                char = '&#34;';
                break;
            case 38:
                char = '&#38;';
                break;
            case 39:
                char = '&#39;';
                break;
            case 60:
                char = '&#60;';
                break;
            case 62:
                char = '&#62;';
                break;
            default:
                continue;
        }

        if (lastIndex !== i) {
            result += html.substring(lastIndex, i);
        }

        lastIndex = i + 1;
        result += char;
    }

    if (lastIndex !== i) {
        return result + html.substring(lastIndex, i);
    } else {
        return result;
    }
};

module.exports = runtime;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
  module.exports = Object.prototype.toString.call(global.process) === '[object process]';
} catch (e) {}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(0);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, preload = $data.preload, src = $data.src, poster = $data.poster;
    $$out += '<video\n  playsinline\n  webkit-playsinline\n  preload="';
    $$out += $escape(preload || 'auto');
    $$out += '"\n  ';
    if (src) {
        $$out += 'src="';
        $$out += $escape(src);
        $$out += '"';
    }
    $$out += '\n  ';
    if (poster) {
        $$out += 'poster="';
        $$out += $escape(poster);
        $$out += '"';
    }
    $$out += '\n>\n</video>';
    return $$out;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(0);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, nextVideo = $data.nextVideo, cancelPlayNext = $data.cancelPlayNext;
    $$out += '<div class="play-ctrl play-btn loading hide"></div>\n<div class="play-ctrl toast hide"></div>\n<div class="play-ctrl play-btn play-toggle"></div>\n<div class="play-ctrl play-btn replay hide"></div>\n<div class="play-ctrl playnext hide">\n  <div class="title">即将播出\uFF1A';
    $$out += $escape(nextVideo && nextVideo.title);
    $$out += '</div>\n  <div class="play-btn"></div>\n  ';
    if (cancelPlayNext) {
        $$out += '\n    <div class="cancel-btn">取消</div>\n  ';
    }
    $$out += '\n</div>';
    return $$out;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(0);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, themeColor = $data.themeColor, fullscreen = $data.fullscreen;
    $$out += '<div class="ctrl-bar hide">\n  <div class="current-time">00:00</div>\n  <div class="seek-bar">\n    <div class="slider-thumb"></div>\n    <div class="slider-played" style="background: ';
    $$out += $escape(themeColor);
    $$out += '"></div>\n    <div class="slider-loaded"></div>\n  </div>\n  <div class="duration">--:--</div>\n  ';
    if (fullscreen) {
        $$out += '\n    <div class="fullscreen-btn"></div>\n    <div class="exit-fullscreen preload"></div>\n  ';
    }
    $$out += '\n</div>';
    return $$out;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(0);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<div class="progress-ctrl fast-ctrl hide">\n  <div class="progress-infos">\n    <div class="progress-type"></div>\n    <div class="progress-time"></div>\n  </div>\n  <div class="progress-bar">\n    <div class="progress-percent"></div>\n  </div>\n</div>\n<div class="progress-ctrl light-ctrl hide">\n  <div class="progress-infos">亮度</div>\n  <div class="progress-bar">\n    <div class="progress-percent"></div>\n  </div>\n</div>\n<div class="progress-ctrl volume-ctrl hide">\n  <div class="progress-infos">音量</div>\n  <div class="progress-bar">\n    <div class="progress-percent"></div>\n  </div>\n</div>';
    return $$out;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(0);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<div class="wifi-ctrl hide">\n  <div class="no-wifi-text">正在使用移动网络\uFF0C播放将产生流量</div>\n  <div class="continue-play-btn">继续播放</div>\n</div>';
    return $$out;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var poster = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkICAgKCgkLDhcPDg0NDhwUFREXIh4jIyEeICAlKjUtJScyKCAgLj8vMjc5PDw8JC1CRkE6RjU7PDn/2wBDAQoKCg4MDhsPDxs5JiAmOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTn/wgARCADIAWQDAREAAhEBAxEB/8QAGwABAAICAwAAAAAAAAAAAAAAAAQGAQUCAwf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3RNI5PIZOIBXgAAAAAAAAAAAAAAAADYFrIBejJqSxlVN2Vs8+AAAAAAAAAAAAAAAAAAORczJ0EQkHE6StgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/8QAMBAAAQQBAwEFBQkAAAAAAAAAAgEDBAUGABESIRMVIjFhBxRBUJAzNUJSVmJjcZT/2gAIAQEAAT8A+gHjNCt/JkRwlsx3GmVdDtfI1Tbw6dwa5aaNwlh7Am/SSGqnHWbGGkk7ysifxPu7HprDYr8Vp9nJarqO5g4SioLp/FvdLw6uZbQGNmkcR9T3bLfVThA2rUo2L+t2i8ic9AFduWshxc6WuhzwnxZsWWRCDjHp8ko2IEm0YatJRxYRcubwBzUei7dP72TXcmAfqmZ/j1d1eIxoBu1d7Jly904tHG4Jq4rbJn3HuDHqaRDKI2quGy2pKeqeDP4TzyOhpIsBuK4XMGQRefw1i/dVVhcCxs2mHfenzabEa4Hz3T1Uk1eyO4IUOW7a2kKJITdGo1a2IB6GPPV2CVHtNYYcahzgkA0JdrGFB2L9uqaHj0a3zVlHZTJgD4OtNMjwbaRz8HXWZhADAMcSrefeidu/xN8OB+fyYOPJOXlv10mZVgTAebx2LwjxuxjNLtshL5mfTxLqFmtdGgtQjx2G+yQGkoz2Vx0y+KFt4dVOad0VaR4sPnIaMljOPFyGPuvmI/m9dVGZWkGU+ck+8I8pd5MeT4gd0mTwTycbiVAfkttAKMtHIXcFHy8Xx01l/C0yGasT74BwePP7PkW+n8iiyMMjUL0Dd+KZGxJR3y5Huu4/QC//xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAECAQE/AAy//8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAwEBPwAMv//Z';

exports.default = poster;

/***/ })
/******/ ]);
});