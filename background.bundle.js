/*! For license information please see background.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={7418:e=>{var t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var l,r,s=n(e),c=1;c<arguments.length;c++){for(var d in l=Object(arguments[c]))o.call(l,d)&&(s[d]=l[d]);if(t){r=t(l);for(var y=0;y<r.length;y++)a.call(l,r[y])&&(s[r[y]]=l[r[y]])}}return s}},2408:(e,t,o)=>{var a=o(7418),n="function"==typeof Symbol&&Symbol.for;n&&Symbol.for("react.element"),n&&Symbol.for("react.portal"),n&&Symbol.for("react.fragment"),n&&Symbol.for("react.strict_mode"),n&&Symbol.for("react.profiler"),n&&Symbol.for("react.provider"),n&&Symbol.for("react.context"),n&&Symbol.for("react.forward_ref"),n&&Symbol.for("react.suspense"),n&&Symbol.for("react.memo"),n&&Symbol.for("react.lazy"),"function"==typeof Symbol&&Symbol.iterator;function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r={};function s(e,t,o){this.props=e,this.context=t,this.refs=r,this.updater=o||l}function c(){}function d(e,t,o){this.props=e,this.context=t,this.refs=r,this.updater=o||l}s.prototype.isReactComponent={},s.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(i(85));this.updater.enqueueSetState(this,e,t,"setState")},s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},c.prototype=s.prototype;var y=d.prototype=new c;y.constructor=d,a(y,s.prototype),y.isPureReactComponent=!0;Object.prototype.hasOwnProperty},7294:(e,t,o)=>{o(2408)}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,o),i.exports}(()=>{function e(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class t{constructor(){e(this,"elements",new Map),e(this,"on",((e,t,o,a)=>{!function(e,t,o,a){if(!e)throw new Error("Missing arguments: htmlElement");if(!t)throw new Error("Missing arguments: eventType");if(!o)throw new Error("Missing arguments: fn")}(e,t,o);const n=this.elements.get(e);if(!n)return this._addNewElement(e,t,o,a);this._updateElement(n,e,t,o,a)})),e(this,"clear",(()=>{for(const[e,{listeners:t}]of this.elements.entries())t.forEach((({type:t,options:o})=>e.removeEventListener(t,this._handleEvent,o))),this.elements.delete(e)})),e(this,"_addEventListener",((e,t,o)=>{e.addEventListener(t,this._handleEvent,o)})),e(this,"_addNewElement",((e,t,o,a)=>{this.elements.set(e,{actions:{[t]:[o]},listeners:[{type:t,options:a}]}),this._addEventListener(e,t,a)})),e(this,"_handleEvent",(e=>{const t=this.elements.get(e.currentTarget).actions[e.type];t&&t.forEach((t=>t(e)))})),e(this,"_updateElement",((e,t,o,a,n)=>{e.listeners.some((({type:e})=>e===o))||(this._addEventListener(t,o,n),e.listeners.push({type:o,options:n})),e.actions[o]?e.actions[o].push(a):e.actions[o]=[a],this.elements.set(t,e)}))}}function a(e,t){return"key"===t?e.key.match(/Control|Shift|Alt|Meta/)?e.key.toLowerCase():`${n(e,!1)}${e.key.toLowerCase()}`:"code"===t?e.code.match(/Control|Shift|Alt|Meta/)?e.code:`${n(e,!0)}${e.code}`:e.key.match(/Control|Shift|Alt|Meta/)?e[t]:`${n(e,!1)}${e[t]}`}function n(e,t){return["ctrl","shift","alt","meta"].filter((t=>e[`${t}Key`])).map((e=>t?e[0].toUpperCase()+e.slice(1):e)).reduce(((e,t)=>`${e}${t}+`),"")}async function i(e){if(e||(e=document.querySelector("#shorts-player video[data-twfyt-active-video]")||document.querySelector("#movie_player video[data-twfyt-active-video]")),e)try{e!==document.pictureInPictureElement?await e.requestPictureInPicture():await document.exitPictureInPicture()}catch(e){console.log("enterPIP error:",e)}}!function({keyboardEvtOptions:e,...o}={}){const n={keyboardEvtOptions:{includeKeyCode:!0,stopPropagation:!0,...e},useCapture:!0,...o},i=new t;i.add=e=>{i.on(document,"keydown",((e={},t={})=>o=>{if(!(t={acceptRepeat:!0,excludeTargets:!1,excludeInputTargets:!0,includeKeyCode:!1,keyType:"key",log:!1,onAction:void 0,preventDefault:!0,stopPropagation:!1,stopImmediatePropagation:!1,targets:[],...t}).acceptRepeat&&o.repeat)return;const{activeElement:n}=document;if(t.excludeInputTargets&&(n.nodeName.match(/(INPUT|TEXTAREA)/)||n.hasAttribute("contenteditable")))return;if(t.targets.length){const e=t.targets.some((e=>e instanceof HTMLElement?e.isEqualNode(n):"."===e[0]?[...n.classList].includes(e.slice(1)):"#"===e[0]?n.id===e.slice(1):n.nodeName===e));if(!e&&!t.excludeTargets||e&&t.excludeTargets)return}const i=a(o,t.keyType),l=t.includeKeyCode&&`${o.keyCode}:${a(o,"key")}`;t.log&&console.log({event:o,key:i,keyWithKeyCode:l});const{parsedActionMap:r,parsedActionMapWithKeyCodes:s}=function(e){const t={},o={};return Object.entries(e).forEach((([e,a])=>{const n=e.split(" || ");n.forEach((e=>t[e]=a)),n.forEach((e=>o[function(e){if("string"!=typeof e)return e;if(!e.match(/^\d+:/))return e;const t=e.match(/^\d+/);return`${e.match(/ctrl\+/)||""}${e.match(/shift\+/)||""}${e.match(/alt\+/)||""}${e.match(/meta\+/)||""}`+t}(e)]=a))})),{parsedActionMap:t,parsedActionMapWithKeyCodes:o}}(e),c=r[l]||r[i]||s[a(o,"keyCode")];return c&&(function(e,t,o,a){"function"==typeof t&&(o.preventDefault&&e.preventDefault(),o.stopPropagation&&e.stopPropagation(),o.stopImmediatePropagation&&e.stopImmediatePropagation(),o.log&&console.log("keyboard-evt-action:",t),t(e))}(o,c,t),t.onAction&&t.onAction()),{event:o,key:i,keyWithKeyCode:l}})(e,n.keyboardEvtOptions),n.useCapture)}}();const l={actionIndicatorActionSeek:!1,actionIndicatorActionSeekBasedOnPlaybackRate:!1,actionIndicatorIconHidden:!1,autoclickAdSkipButton:!1,adsAutoSkip:!1,adsAutoSkipDelay:5,adsSetVolumeMuted:!1,audioAutoGain:!1,audioAutoGainBoostThreshold:-3,audioAutoGainMode:"boost",audioBoostGain:0,audioCompressor:!1,audioCompressorKnee:20,audioCompressorRatio:12,audioCompressorThreshold:-50,audioHPF:!1,audioHPFFrequency:200,audioMonoMix:!1,audioMonoMixSource:"left+right",audioPan:0,backToTop:!1,backToTopPosition:"center",channelPageBanner:!1,channelTrailerAutoplay:!0,channelTrailerHidden:!1,chaptersAutoShowList:!1,chatVisibility:!1,cinemaMode:!1,cinemaModeHiddenMasthead:!0,cinemaModeHiddenScrollbar:!0,cleanPlayer:!1,cleanPlayerAdOverlay:!0,cleanPlayerCE:!1,cleanPlayerChannelWattermark:!1,cleanPlayerCinematics:!1,cleanPlayerEmbeddedPauseOverlay:!1,cleanPlayerEndScreen:!1,cleanPlayerPaidContentOverlay:!0,cleanPlayerProgressBarHeatmap:!1,cleanPlayerSuggestedAction:!0,cleanPlayerTop:!1,cleanPlayerVideoAnnotations:!0,cleanPlayerScrollForDetails:!1,cleanPlayerLoadingSpinner:!1,cleanPlayerLargePlayButton:!1,cleanSite:!1,cleanSiteAds:!0,cleanSiteAnnoyances:!0,cleanSiteNotificationToast:!1,cleanSiteDrawerFooter:!1,cleanSiteHeaderVoiceSearchButton:!1,cleanSiteHeaderLogoYoodle:!1,cleanSiteHomeHeaderChips:!1,cleanSiteSidebarDonationShelf:!1,cleanSiteWatchClarifyBox:!1,cleanSiteWatchCommentInput:!1,cleanSiteWatchInfoMenu:!1,cleanSiteWatchSubscribe:!1,cleanSiteWatchDescription:!1,cleanSiteThumbnailHoverOverlays:!1,cleanSiteWatchLaterAndQueueLabels:!1,cleanSiteWatchRelatedVideosChips:!1,cleanSiteWatchChaptersSyncToVideoTime:!1,cleanSiteWatchTitleHashtag:!1,commentsInputFocusAndPaste:!1,commentsInputTimeCorrection:0,commentsInSidebar:!1,commentsInSidebarPermanent:!1,commentsInSidebarDisableMainComments:!1,contentFilters:!1,cleanSiteHomeSections:!1,contentFiltersShortsHomePage:!1,contentFiltersShortsSubscriptionsPage:!1,contentFiltersShortsRelatedVideos:!1,contentFiltersShortsSearch:!1,contentFiltersUpcomingHomePage:!1,contentFiltersUpcomingSubscriptionsPage:!1,contentFiltersLiveHomePage:!1,contentFiltersLiveSubscriptionsPage:!1,contentFiltersLiveRelatedVideos:!1,contentFiltersMixHomePage:!1,contentFiltersMixRelatedVideos:!1,contentFiltersFeaturedSectionsSearch:!1,contentFiltersWatchedVideosHomePage:!1,contentFiltersWatchedVideosSubscriptionsPage:!1,contentFiltersWatchedVideosChannelPage:!1,contentFiltersWatchedVideosSearchPage:!1,contentFiltersWatchedVideosRelatedVideos:!1,copyVideoURLDomain:"short",copyVideoURLExcludePlaylist:!1,copyVideoURLTime:"s",customCSS:!0,customCSSCode:"",customJS:!0,customJSCode:"",commentsSectionHidden:!1,commentsSortBy:!1,convertChannelNameToURL:!1,cvfIncludeSubtitles:!1,cvfQuality:.92,cvfType:"JPEG",downloadButton:!1,downloadButtonBackgroundMode:"site",downloadButtonKey1Url:"",downloadButtonKey2Url:"",downloadButtonKey3Url:"",embedModeWindow:"current",extensionShortcutsSeekByValue:5,extensionShortcutsAdjustPlaybackRateByValue:.25,extensionShortcutsAdjustVolumeByValue:5,extensionOptionsPageLayout:"vertical",fullVideoTitle:!1,fullVideoTitleChannelsPages:!0,fullVideoTitleOtherPages:!0,fullVideoTitleWatchPage:!0,gotoChapterStart:"mousedown1",initialAutoPlay:!1,initialChannelPageTab:!1,initialFullscreen:!1,initialPlaybackRate:!1,initialPlaybackRatePerGenre:!1,initialPlaybackRateLevel:1,initialTheatreMode:!1,initialTheme:!1,initialSubtitles:!1,initialVolume:!1,initialVolumeLevel:50,inlinePlayback:!1,instantFullscreen:!1,instantFullscreenDelay:150,instantFullscreenSmooth:!1,instantTogglePlay:!1,initialLoop:!1,maxMouseControlArea:!1,mmbToggleFullscreen:!1,mouseControlActive:!1,mouseControlDisableDoubleClick:!1,mouseControlElement:"player",mouseControlInactiveWheelWhilePaused:!1,mouseControlModKey:"shift",mouseControlMiniplayer:!1,mouseControlShorts:!0,pausePreviousActiveVideo:!1,playbackRateRangeMin:.1,playbackRateRangeMax:16,playlistAutoplayNext:!0,playlistDuration:!1,playerViewChangeDelayInBackground:0,playerBackgroundColor:!1,playerInitialStateBackground:!1,playerInitialStateForeground:!1,playerVolumeBarAlwaysVisible:!1,preventAutoPause:!1,removeCustomMainScrollbar:!1,replayOnPreviousChapter:!1,richGridView:!1,richGridViewItemsPerRow:6,richGridViewDecreasedContainerWidth:!0,richGridViewDecreasedFontSize:!0,richGridViewHiddenAvatars:!0,scrollbarThin:!1,searchBoxStyles:!1,searchPlaylistPage:!1,searchResultsOpenInNewTab:!1,searchResultsNavigation:!1,shortsAutoplayNext:!1,shortsConvertTitleToUrl:!1,shortsLoop:!1,shortsOpenInNormalPlayer:!1,shortsPlayerOverlay:!1,sidebarOverlaid:!1,sidebarOverlaidWidth:"",sidebarOverlaidScrollbarWidth:16,sidebarOverlaidSingleScrollbar:!1,sidebarPanelsMaxHeight:!1,sidebarRelatedHidden:!1,sidebarSectionFixed:!1,sidebarSectionHidden:!1,skipVideoBlockGlobal:!1,skipVideoBlockGlobalData:{enabled:!0,start:""},skipVideoBlockIndividual:!1,skipVideoBlockIndividualData:[],stickyPlayer:!1,stickyPlayerHeight:270,stickyPlayerInactiveWhilePaused:!1,stickyPlayerInactiveAtEnd:!1,stickyPlayerOffsetX:0,stickyPlayerOffsetY:0,stickyPlayerActivateOnlyOnDemand:!1,stickyPlayerPosition:"default",stickyPlayerThreshold:.5,stickyPlayerType:"wide",subtitlesDisabled:!1,subtitlesPosition:!1,subtitlesPositioningEnabled:!0,subtitlesOffsetY:2,themeType:"system",thumbnailViewFullSize:!1,thumbnailViewFullSizeByMouse:"ctrl+mousedown0",transcriptAutoShow:!1,transparentButtonsAndDescription:!1,upNextVideo:!1,videoDescription:!1,videoDescriptionInSidebar:!1,videoDescriptionExactDate:!1,videoDescriptionExactViewCount:!1,videoDimmer:!1,videoDimmerBrightness:1,videoDimmerContrast:100,videoDownloadLinkMode:"copy",videoDownloadLinkQuery:"yt-dlp https://youtu.be/%s",videoPlaybackInfo:!1,videoPlaybackInfoBasedOnPlaybackRate:!1,videoPlaybackInfoStyleFontSize:1,videoPlaybackInfoStyleOpacity:1,videoPlaybackInfoStylePosition:"top-left",videoPlaybackInfoCurrentChapter:!1,videoPlaybackInfoPlaybackRate:!1,videoPlaybackInfoCurrentTime:!0,videoPlaybackInfoRemainingTime:!1,videoPlaybackInfoVolume:!1,volumeRangeMin:0,volumeRangeMax:100,volumeUnmuteOnChange:!1,watchedVideosDim:!1,watchedVideosDimImage:!0,watchedVideosDimThumbnail:!1,watchedVideosDimItem:!1,watchedVideosDimOpacity:50,watchedVideosDimGrayscale:100,ytElementAuxActions:!1,ytElementAuxActionsDelay:100,ytpAutohideDelay:3e3,ytpBezelTextDurationShort:750,ytpBezelTextDurationActionSeek:750,ytpBezelTextPosition:!1,ytpBezelTextPositionOffset:10,ytpControlsHidden:!1,ytpControlsHiddenPlaying:!0,ytpControlsHiddenPaused:!0,ytpControlsHiddenShowOnHover:!1,ytpControlsMode:"default",ytpControlsModeAvailableForCycle:["default","mini","combined","persistent-mini","persistent-default"],ytpControlsMiniRefreshRate:1e3,ytpPreferredQuality:!1,ytpPreferredQualityUpgradeOrDowngrade:"upgrade",ytpPreferredQualityRevert:!1,ytpPreferredQualityBackground:!1,ytpPreferredQualityEmbedded:!1,ytpPreferredQualityFullscreen:!1,ytpPreferredQualityTheater:!1,ytpProgressBarOpacity:.5,ytpProgressBarAtBottom:!1,ytpTimeBasedOnPlaybackRate:!1,ytpTimeDisplayCustom:!1,ytpTimeDisplayCustomTemplate:"%current_time / %duration (%pr_remaining_time)",ytpMuteButtonShowVolume:!1,zenMode:!1,zenModeStylesBlur:4,zenModeStylesGrayscale:0,zenModeStylesOpacity:16,hotkeys:{adjustAudioPanLeft:null,adjustAudioPanRight:null,focusCommentInputOrAddTimestamp:null,backToComment:null,captureVideoFrame:null,captureVideoFramePNG:null,captureVideoFrameToClipboard:null,cycleCommentsSortBy:null,cycleMouseControlActive:null,cycleSubtitlesPosition:null,cycleYtpControlsMode:null,embedMode:null,enterPictureInPicture:null,focusSearchBox:null,getVideoDownloadLink:null,increaseSubtitlesOffsetY:null,decreaseSubtitlesOffsetY:null,toggleAudioAutoGain:null,toggleAudioCompressor:null,toggleAudioHPF:null,toggleAudioMonoMix:null,toggleCinemaMode:null,toggleContentFilters:null,toggleCleanPlayer:null,toggleCleanSite:null,toggleCommentsVisibility:null,toggleSidebarVisibility:null,toggleSkipVideoBlockGlobal:null,toggleSkipVideoBlockIndividual:null,toggleSubtitlesDisabled:null,toggleVideoDimmer:null,toggleVideoPlaybackInfo:null,toggleYtpControlsHidden:null},keyboardControlKeys:[{action:"seekBy",payload:"1c",key:null},{action:"seekBy",payload:"-1c",key:null},{action:"seekBy",payload:1,key:null},{action:"seekBy",payload:-1,key:null},{action:"adjustVolumeBy",payload:1,key:null},{action:"adjustVolumeBy",payload:-1,key:null},{action:"adjustPlaybackRateBy",payload:.1,key:null},{action:"adjustPlaybackRateBy",payload:-.1,key:null}],interactionZonesMouseButton:1,interactionZonesMouseButtonPresets:[{name:"Default",type:"mouseButton",gridColumns:3,gridRows:1,gridColumnsRatios:[3,6,3],gridRowsRatios:[12],actionMap:[{key:"mousedown0+g020B",action:"setPlaybackRate",payload:1},{key:"mousedown2+g020B",action:"captureVideoFrame"},{key:"mousedown0+g9B0B",action:"toggleMute"},{key:"mousedown2+g9B0B",action:"save"}]},{name:"3x1 Grid",type:"mouseButton",gridColumns:3,gridRows:1,gridColumnsRatios:[3,6,3],gridRowsRatios:[12],actionMap:[{key:"mousedown0+g020B",action:"setPlaybackRate",payload:1},{key:"mousedown2+g020B",action:"captureVideoFrame"},{key:"mousedown0+g9B0B",action:"toggleMute"},{key:"mousedown2+g9B0B",action:"save"}]},{name:"3x3 Grid",type:"mouseButton",gridColumns:3,gridRows:3,gridColumnsRatios:[3,6,3],gridRowsRatios:[4,4,4],actionMap:[{action:"toggleMute",key:"mousedown0+g9B03"},{action:"toggleCommentsInSidebar",key:"mousedown2+g9B03"},{action:"toggleMute",key:"mousedown0+g9B47"},{action:"togglePlayerSettings",key:"mousedown2+g9B47"},{action:"toggleMute",key:"mousedown0+g9B8B"},{action:"save",key:"mousedown2+g9B8B"},{action:"setPlaybackRate",key:"mousedown0+g0203",payload:1},{action:"enterPictureInPicture",key:"mousedown2+g0203"},{action:"setPlaybackRate",key:"mousedown0+g0247",payload:1},{action:"toggleAppDrawer",key:"mousedown2+g0247"},{action:"setPlaybackRate",key:"mousedown0+g028B",payload:1},{action:"captureVideoFrame",key:"mousedown2+g028B"}]}],interactionZonesMouseWheel:1,interactionZonesMouseWheelPresets:[{name:"Default",type:"mouseWheel",gridColumns:3,gridRows:3,gridColumnsRatios:[3,6,3],gridRowsRatios:[4,4,4],actionMap:[{key:"wheelup+g0203",action:"adjustPlaybackRateBy",payload:.5},{key:"wheeldown+g0203",action:"adjustPlaybackRateBy",payload:-.5},{key:"wheelup+g0247",action:"adjustPlaybackRateBy",payload:.25},{key:"wheeldown+g0247",action:"adjustPlaybackRateBy",payload:-.25},{key:"wheelup+g028B",action:"adjustPlaybackRateBy",payload:.1},{key:"wheeldown+g028B",action:"adjustPlaybackRateBy",payload:-.1},{key:"wheelup+g3803",action:"seekBy",payload:"5%"},{key:"wheeldown+g3803",action:"seekBy",payload:"-5%"},{key:"wheelup2+g3803",action:"nextVideo"},{key:"wheeldown2+g3803",action:"previousVideo"},{key:"wheelup+g3847",action:"seekBy",payload:5},{key:"wheeldown+g3847",action:"seekBy",payload:-5},{key:"wheelup2+g3847",action:"seekBy",payload:"1c"},{key:"wheeldown2+g3847",action:"seekBy",payload:"-1c"},{key:"wheelup+g388B",action:"seekBy",payload:1},{key:"wheeldown+g388B",action:"seekBy",payload:-1},{key:"wheelup2+g388B",action:"seekBy",payload:"1f"},{key:"wheeldown2+g388B",action:"seekBy",payload:"-1f"},{key:"wheelup+g9B03",action:"adjustVolumeBy",payload:10},{key:"wheeldown+g9B03",action:"adjustVolumeBy",payload:-10},{key:"wheelup+g9B47",action:"adjustVolumeBy",payload:5},{key:"wheeldown+g9B47",action:"adjustVolumeBy",payload:-5},{key:"wheelup+g9B8B",action:"adjustVolumeBy",payload:1},{key:"wheeldown+g9B8B",action:"adjustVolumeBy",payload:-1}]},{name:"3x3 Grid",type:"mouseWheel",gridColumns:3,gridRows:3,gridColumnsRatios:[3,6,3],gridRowsRatios:[4,4,4],actionMap:[{key:"wheelup+g0203",action:"adjustPlaybackRateBy",payload:.5},{key:"wheeldown+g0203",action:"adjustPlaybackRateBy",payload:-.5},{key:"wheelup+g0247",action:"adjustPlaybackRateBy",payload:.25},{key:"wheeldown+g0247",action:"adjustPlaybackRateBy",payload:-.25},{key:"wheelup+g028B",action:"adjustPlaybackRateBy",payload:.1},{key:"wheeldown+g028B",action:"adjustPlaybackRateBy",payload:-.1},{key:"wheelup+g3803",action:"seekBy",payload:"5%"},{key:"wheeldown+g3803",action:"seekBy",payload:"-5%"},{key:"wheelup2+g3803",action:"nextVideo"},{key:"wheeldown2+g3803",action:"previousVideo"},{key:"wheelup+g3847",action:"seekBy",payload:5},{key:"wheeldown+g3847",action:"seekBy",payload:-5},{key:"wheelup2+g3847",action:"seekBy",payload:"1c"},{key:"wheeldown2+g3847",action:"seekBy",payload:"-1c"},{key:"wheelup+g388B",action:"seekBy",payload:1},{key:"wheeldown+g388B",action:"seekBy",payload:-1},{key:"wheelup2+g388B",action:"seekBy",payload:"1f"},{key:"wheeldown2+g388B",action:"seekBy",payload:"-1f"},{key:"wheelup+g9B03",action:"adjustVolumeBy",payload:10},{key:"wheeldown+g9B03",action:"adjustVolumeBy",payload:-10},{key:"wheelup+g9B47",action:"adjustVolumeBy",payload:5},{key:"wheeldown+g9B47",action:"adjustVolumeBy",payload:-5},{key:"wheelup+g9B8B",action:"adjustVolumeBy",payload:1},{key:"wheeldown+g9B8B",action:"adjustVolumeBy",payload:-1}]},{name:"3x3 Grid (RMB + Wheel)",type:"mouseWheel",gridColumns:3,gridRows:3,gridColumnsRatios:[3,6,3],gridRowsRatios:[4,4,4],actionMap:[{key:"wheelup2+g0203",action:"adjustPlaybackRateBy",payload:.5},{key:"wheeldown2+g0203",action:"adjustPlaybackRateBy",payload:-.5},{key:"wheelup2+g0247",action:"adjustPlaybackRateBy",payload:.25},{key:"wheeldown2+g0247",action:"adjustPlaybackRateBy",payload:-.25},{key:"wheelup2+g028B",action:"adjustPlaybackRateBy",payload:.1},{key:"wheeldown2+g028B",action:"adjustPlaybackRateBy",payload:-.1},{key:"wheelup2+g3803",action:"seekBy",payload:"5%"},{key:"wheeldown2+g3803",action:"seekBy",payload:"-5%"},{key:"ctrl+wheelup+g3803",action:"nextVideo"},{key:"ctrl+wheeldown+g3803",action:"previousVideo"},{key:"wheelup2+g3847",action:"seekBy",payload:5},{key:"wheeldown2+g3847",action:"seekBy",payload:-5},{key:"ctrl+wheelup+g3847",action:"seekBy",payload:"1c"},{key:"ctrl+wheeldown+g3847",action:"seekBy",payload:"-1c"},{key:"wheelup2+g388B",action:"seekBy",payload:1},{key:"wheeldown2+g388B",action:"seekBy",payload:-1},{key:"ctrl+wheelup+g388B",action:"seekBy",payload:"1f"},{key:"ctrl+wheeldown+g388B",action:"seekBy",payload:"-1f"},{key:"wheelup2+g9B03",action:"adjustVolumeBy",payload:10},{key:"wheeldown2+g9B03",action:"adjustVolumeBy",payload:-10},{key:"wheelup2+g9B47",action:"adjustVolumeBy",payload:5},{key:"wheeldown2+g9B47",action:"adjustVolumeBy",payload:-5},{key:"wheelup2+g9B8B",action:"adjustVolumeBy",payload:1},{key:"wheeldown2+g9B8B",action:"adjustVolumeBy",payload:-1}]}],individualSettings:[]},r={},s={altFullscreenTrigger:"mmbToggleFullscreen",instantPause:"instantTogglePlay",ytpAutoHideDelay:"ytpAutohideDelay",ytpBottomHidden:"ytpControlsHidden",ytpBottomStyle:e=>({newKey:"ytpControlsMode",newValue:"minimalistic"===e?"persistent-mini":e}),wheelControl:null};function c(e={},t={}){const o={},a=[];return Object.entries(t).forEach((([t,n])=>{if(Object.prototype.hasOwnProperty.call(e,t)){if(null===n)return a.push(t);if("string"==typeof n)return o[n]=e[t],a.push(t);if("function"==typeof n){const{newKey:i,newValue:l}=n(e[t]);return o[i]=l,a.push(t)}}})),{migratedStorage:o,deprecatedKeys:a}}const d=async function(e=null,t={}){const o={type:"local",validateStorage:!e,...t};return new Promise(((t,a)=>{chrome.storage[o.type].get(e,(e=>{if(chrome.runtime.lastError)return a(chrome.runtime.lastError);if(!o.validateStorage)return t(e);const n=Object.keys(e);if(Object.keys(l).every((e=>n.includes(e))))return t(e);const{migratedStorage:i,deprecatedKeys:r}=c(e,s),d={...l,...e,hotkeys:{...l.hotkeys,...null==e?void 0:e.hotkeys},...i};chrome.storage.local.set(d,(()=>r.length&&chrome.storage.local.remove(r))),t(d)}))}))},y=async function(e,t={},o){const a={type:"local",...t};return new Promise(((t,n)=>{chrome.storage[a.type].set(e,(()=>{if(chrome.runtime.lastError)return n(chrome.runtime.lastError);t(o&&o())}))}))};chrome.storage.onChanged;o(7294),chrome.runtime.onInstalled.addListener((e=>{const{reason:t}=e;switch(t){case"install":return void chrome.storage.local.set({...l,...r});case"update":return void chrome.storage.local.get(null,(e=>{const{migratedStorage:t,deprecatedKeys:o}=c(e,s);chrome.storage.local.set({...l,...e,hotkeys:{...l.hotkeys,...e.hotkeys},...t},(()=>o.length&&chrome.storage.local.remove(o)))}))}})),chrome.commands.onCommand.addListener((async e=>{if("aaaOpenOptionsPage"===e)return chrome.runtime.openOptionsPage();if(e.match(/(enterPictureInPicture|enterPictureInPictureDocument)/))return chrome.tabs.query({},(t=>{t.forEach((t=>{chrome.scripting.executeScript({target:{tabId:t.id},..."enterPictureInPicture"===e?{func:i}:{files:["document-pip.bundle.js"]}}).catch((()=>{}))}))}));const t=await d("activeVideo").catch((()=>{})),o=null==t?void 0:t.activeVideo;o&&chrome.tabs.sendMessage(o.tabId,{type:"extensionShortcut",action:e},{frameId:o.frameId}).catch((()=>{}))})),chrome.runtime.onMessage.addListener((async({action:e,payload:t,type:o},a,n)=>{if(n(!0),"createTab"===e)return chrome.tabs.create({...t,index:a.tab.index+1});var i;if("loadCustomJS"===e&&(null===(i=chrome.scripting)||void 0===i||i.executeScript({target:{tabId:a.tab.id,allFrames:!1},func:e=>{const t=document.createElement("script");t.textContent=e,document.head.append(t),t.remove()},args:[t],world:"MAIN",injectImmediately:!0})),"activeVideo"!==o||"set"!==e)return;const l=await d(["activeVideo","pausePreviousActiveVideo"]).catch((()=>{})),r=null==l?void 0:l.activeVideo,s=null==l?void 0:l.pausePreviousActiveVideo,c={frameId:a.frameId,tabId:a.tab.id,windowId:a.tab.windowId};!r||r.windowId===c.windowId&&r.tabId===c.tabId&&r.frameId===c.frameId||(s&&chrome.tabs.sendMessage(r.tabId,{type:"extensionShortcut",action:"pauseVideo"},{frameId:r.frameId}).catch((()=>{})),chrome.tabs.sendMessage(r.tabId,{type:"extensionShortcut",action:"removeActiveVideo"},{frameId:r.frameId}).catch((()=>{}))),y({activeVideo:c})}))})()})();