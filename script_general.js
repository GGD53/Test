(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"backgroundColorRatios":[0],"children":["this.MainViewer"],"propagateClick":false,"id":"rootPlayer","backgroundColor":["#FFFFFF"],"data":{"defaultLocale":"fr","locales":{"fr":"locale/fr.txt","en-US":"locale/en-US.txt"},"textToSpeechConfig":{"volume":1,"pitch":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false},"history":{},"name":"Player7750","displayTooltipInTouchScreens":true},"scrollBarColor":"#000000","start":"this.init()","scrollBarMargin":2,"minHeight":0,"minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"class":"Player","width":"100%","gap":10,"hash": "566a9f8bfff21b93e728731b31e682eec1d905b5f2189f5af63958fc51291d48", "definitions": [{"class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_265D12B5_0245_ACC0_4166_CFBC82B5FCFB_camera","initialPosition":{"yaw":178.28,"pitch":-8.01,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_9ABAE5FE_8AE9_349E_41C4_5EBD0ADB1CAB"},{"class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_2A5D5595_0245_54C0_4174_A610FB55C5B0_camera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_2A0B603C_0245_6BC0_4124_9A4A94111150"},{"vrPointerSelectionColor":"#FF6600","toolTipFontFamily":"Arial","playbackBarHeadShadowOpacity":0.7,"progressBarBorderRadius":2,"progressBackgroundColorRatios":[0],"progressBarBorderSize":0,"subtitlesTextShadowOpacity":1,"vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"playbackBarBackgroundOpacity":1,"progressBorderRadius":2,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","subtitlesTop":0,"playbackBarProgressBorderColor":"#000000","progressLeft":"33%","toolTipBackgroundColor":"#F6F6F6","toolTipFontColor":"#606060","toolTipPaddingRight":6,"toolTipBorderColor":"#767676","playbackBarHeadBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","playbackBarLeft":0,"toolTipPaddingLeft":6,"playbackBarHeadHeight":15,"subtitlesFontSize":"3vmin","playbackBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","progressRight":"33%","subtitlesBottom":50,"progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","firstTransitionDuration":0,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadow":true,"surfaceReticleColor":"#FFFFFF","propagateClick":false,"toolTipPaddingBottom":4,"toolTipPaddingTop":4,"id":"MainViewer","progressBarBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderSize":0,"playbackBarBottom":5,"minHeight":50,"minWidth":100,"subtitlesFontFamily":"Arial","subtitlesTextShadowHorizontalLength":1,"progressBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColor":["#3399FF"],"toolTipShadowColor":"#333138","class":"ViewerArea","subtitlesGap":0,"playbackBarHeight":10,"progressBackgroundColor":["#000000"],"width":"100%","surfaceReticleSelectionColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","progressBottom":10,"playbackBarProgressBorderSize":0,"toolTipTextShadowColor":"#000000","playbackBarHeadWidth":6,"height":"100%","vrPointerColor":"#FFFFFF","progressHeight":2,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","progressBorderSize":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"]},{"frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":7,"class":"TiledImageResourceLevel","height":3584,"width":21504,"tags":"ondemand","url":"media/panorama_2A5D5595_0245_54C0_4174_A610FB55C5B0_0/{face}/0/{row}_{column}.jpg","colCount":42},{"rowCount":4,"class":"TiledImageResourceLevel","height":2048,"width":12288,"tags":"ondemand","url":"media/panorama_2A5D5595_0245_54C0_4174_A610FB55C5B0_0/{face}/1/{row}_{column}.jpg","colCount":24},{"rowCount":2,"class":"TiledImageResourceLevel","height":1024,"width":6144,"tags":"ondemand","url":"media/panorama_2A5D5595_0245_54C0_4174_A610FB55C5B0_0/{face}/2/{row}_{column}.jpg","colCount":12},{"rowCount":1,"class":"TiledImageResourceLevel","height":512,"width":3072,"tags":["ondemand","preload"],"url":"media/panorama_2A5D5595_0245_54C0_4174_A610FB55C5B0_0/{face}/3/{row}_{column}.jpg","colCount":6}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_2A5D5595_0245_54C0_4174_A610FB55C5B0_t.jpg"}],"overlays":["this.overlay_38D0BBD5_024E_DC40_417E_DD2A05D2C1FE"],"class":"Panorama","data":{"label":"AdobeStock_236507964"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_38D0BBD5_024E_DC40_417E_DD2A05D2C1FE"},"class":"AdjacentPanorama","select":"this.overlay_38D0BBD5_024E_DC40_417E_DD2A05D2C1FE.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-113.2,"backwardYaw":-55.95,"distance":7.36,"panorama":"this.panorama_265D12B5_0245_ACC0_4166_CFBC82B5FCFB"}],"id":"panorama_2A5D5595_0245_54C0_4174_A610FB55C5B0","hfov":360,"hfovMax":130,"label":trans('panorama_2A5D5595_0245_54C0_4174_A610FB55C5B0.label'),"thumbnailUrl":"media/panorama_2A5D5595_0245_54C0_4174_A610FB55C5B0_t.jpg","vfov":180},{"hfovMin":"120%","frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":5,"class":"TiledImageResourceLevel","height":2560,"width":15360,"tags":"ondemand","url":"media/panorama_28238AE8_0245_BC40_416F_D0A60EEBED78_0/{face}/0/{row}_{column}.jpg","colCount":30},{"rowCount":3,"class":"TiledImageResourceLevel","height":1536,"width":9216,"tags":"ondemand","url":"media/panorama_28238AE8_0245_BC40_416F_D0A60EEBED78_0/{face}/1/{row}_{column}.jpg","colCount":18},{"rowCount":2,"class":"TiledImageResourceLevel","height":1024,"width":6144,"tags":"ondemand","url":"media/panorama_28238AE8_0245_BC40_416F_D0A60EEBED78_0/{face}/2/{row}_{column}.jpg","colCount":12},{"rowCount":1,"class":"TiledImageResourceLevel","height":512,"width":3072,"tags":["ondemand","preload"],"url":"media/panorama_28238AE8_0245_BC40_416F_D0A60EEBED78_0/{face}/3/{row}_{column}.jpg","colCount":6}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_28238AE8_0245_BC40_416F_D0A60EEBED78_t.jpg"}],"overlays":["this.overlay_3BDB7957_024D_5C40_412B_6D9B46555380"],"adjacentPanoramas":[{"data":{"overlayID":"overlay_3BDB7957_024D_5C40_412B_6D9B46555380"},"class":"AdjacentPanorama","select":"this.overlay_3BDB7957_024D_5C40_412B_6D9B46555380.get('areas').forEach(function(a){ a.trigger('click') })","yaw":179.81,"backwardYaw":35.48,"distance":9.04,"panorama":"this.panorama_265D12B5_0245_ACC0_4166_CFBC82B5FCFB"}],"class":"Panorama","data":{"label":"AdobeStock_499713508"},"id":"panorama_28238AE8_0245_BC40_416F_D0A60EEBED78","hfov":360,"hfovMax":130,"label":trans('panorama_28238AE8_0245_BC40_416F_D0A60EEBED78.label'),"thumbnailUrl":"media/panorama_28238AE8_0245_BC40_416F_D0A60EEBED78_t.jpg","vfov":180},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","camera":"this.panorama_265D12B5_0245_ACC0_4166_CFBC82B5FCFB_camera","media":"this.panorama_265D12B5_0245_ACC0_4166_CFBC82B5FCFB","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","camera":"this.panorama_28238AE8_0245_BC40_416F_D0A60EEBED78_camera","media":"this.panorama_28238AE8_0245_BC40_416F_D0A60EEBED78","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_2A5D5595_0245_54C0_4174_A610FB55C5B0_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","media":"this.panorama_2A5D5595_0245_54C0_4174_A610FB55C5B0","player":"this.MainViewerPanoramaPlayer"}]},{"hfovMin":"150%","frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":3,"class":"TiledImageResourceLevel","height":1536,"width":9216,"tags":"ondemand","url":"media/panorama_265D12B5_0245_ACC0_4166_CFBC82B5FCFB_0/{face}/0/{row}_{column}.jpg","colCount":18},{"rowCount":2,"class":"TiledImageResourceLevel","height":1024,"width":6144,"tags":"ondemand","url":"media/panorama_265D12B5_0245_ACC0_4166_CFBC82B5FCFB_0/{face}/1/{row}_{column}.jpg","colCount":12},{"rowCount":1,"class":"TiledImageResourceLevel","height":512,"width":3072,"tags":["ondemand","preload"],"url":"media/panorama_265D12B5_0245_ACC0_4166_CFBC82B5FCFB_0/{face}/2/{row}_{column}.jpg","colCount":6}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_265D12B5_0245_ACC0_4166_CFBC82B5FCFB_t.jpg"}],"overlays":["this.overlay_3B303950_024D_5C40_4180_12B5BDDB1EE1","this.overlay_38D8FBD4_024E_DC40_416B_B2E35AB04C02"],"adjacentPanoramas":[{"data":{"overlayID":"overlay_3B303950_024D_5C40_4180_12B5BDDB1EE1"},"class":"AdjacentPanorama","select":"this.overlay_3B303950_024D_5C40_4180_12B5BDDB1EE1.get('areas').forEach(function(a){ a.trigger('click') })","yaw":35.48,"backwardYaw":179.81,"distance":2.64,"panorama":"this.panorama_28238AE8_0245_BC40_416F_D0A60EEBED78"},{"data":{"overlayID":"overlay_38D8FBD4_024E_DC40_416B_B2E35AB04C02"},"class":"AdjacentPanorama","select":"this.overlay_38D8FBD4_024E_DC40_416B_B2E35AB04C02.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-55.95,"backwardYaw":-113.2,"distance":3.2,"panorama":"this.panorama_2A5D5595_0245_54C0_4174_A610FB55C5B0"}],"class":"Panorama","data":{"label":"AdobeStock_275252418"},"id":"panorama_265D12B5_0245_ACC0_4166_CFBC82B5FCFB","hfov":360,"hfovMax":130,"label":trans('panorama_265D12B5_0245_ACC0_4166_CFBC82B5FCFB.label'),"thumbnailUrl":"media/panorama_265D12B5_0245_ACC0_4166_CFBC82B5FCFB_t.jpg","vfov":180},{"mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","touchControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"displayPlaybackBar":true},{"class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_28238AE8_0245_BC40_416F_D0A60EEBED78_camera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_2A04603B_0245_6BC0_4180_C19756342FC2"},{"id":"sequence_9ABAE5FE_8AE9_349E_41C4_5EBD0ADB1CAB","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}]},{"id":"sequence_2A0B603C_0245_6BC0_4124_9A4A94111150","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}]},{"data":{"hasPanoramaAction":true,"label":"Aller à Adobestock_275252418"},"items":[{"yaw":-113.2,"image":"this.AnimatedImageResource_4B38AC11_0245_7BC0_417C_67FBA1078A60","hfov":26.63,"scaleMode":"fit_inside","data":{"label":"Aller \u00e0 Adobestock_275252418"},"vfov":10.48,"class":"HotspotPanoramaOverlayImage","pitch":-13,"distance":100}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_39CCCEA7_024F_B4C0_4179_AB9BBC9C3F35"],"useHandCursor":true,"id":"overlay_38D0BBD5_024E_DC40_417E_DD2A05D2C1FE","class":"HotspotPanoramaOverlay","enabledInCardboard":true},{"data":{"hasPanoramaAction":true,"label":"Aller à Adobestock_275252418"},"items":[{"yaw":179.81,"image":"this.AnimatedImageResource_4B39EC10_0245_7BC0_4161_280EC0D2F630","hfov":31.87,"scaleMode":"fit_inside","data":{"label":"Aller \u00e0 Adobestock_275252418"},"vfov":17.08,"class":"HotspotPanoramaOverlayImage","pitch":-10.64,"distance":100}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_391F5F9E_024F_54C0_417C_A12B8C685A35"],"useHandCursor":true,"id":"overlay_3BDB7957_024D_5C40_412B_6D9B46555380","class":"HotspotPanoramaOverlay","enabledInCardboard":true},{"data":{"hasPanoramaAction":true,"label":"Aller à Adobestock_499713508"},"items":[{"yaw":35.48,"image":"this.AnimatedImageResource_4B3FEC10_0245_7BC0_4172_121501FA4CCA","hfov":25.9,"scaleMode":"fit_inside","data":{"label":"Aller \u00e0 Adobestock_499713508"},"vfov":18.22,"class":"HotspotPanoramaOverlayImage","roll":-12.51,"pitch":-32.8,"distance":100}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_3853B96F_024D_5C40_4143_93875881CBD1"],"useHandCursor":true,"id":"overlay_3B303950_024D_5C40_4180_12B5BDDB1EE1","class":"HotspotPanoramaOverlay","enabledInCardboard":true},{"data":{"hasPanoramaAction":true,"label":"Aller à Adobestock_236507964"},"items":[{"yaw":-55.95,"image":"this.AnimatedImageResource_4B3EAC10_0245_7BC0_4168_8A62B72E9394","hfov":26.38,"scaleMode":"fit_inside","data":{"label":"Aller \u00e0 Adobestock_236507964"},"vfov":17.01,"class":"HotspotPanoramaOverlayImage","pitch":-27.99,"distance":100}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_38E67BD9_024E_DC40_417E_7B1858AB9FE0"],"useHandCursor":true,"id":"overlay_38D8FBD4_024E_DC40_416B_B2E35AB04C02","class":"HotspotPanoramaOverlay","enabledInCardboard":true},{"id":"sequence_2A04603B_0245_6BC0_4180_C19756342FC2","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}]},{"levels":[{"class":"ImageResourceLevel","height":80,"width":5550,"url":"media/res_444980C9_024A_AC40_416F_D1F77E8F6B40_0.png"}],"frameCount":30,"colCount":30,"frameDuration":41,"id":"AnimatedImageResource_4B38AC11_0245_7BC0_417C_67FBA1078A60","class":"AnimatedImageResource","rowCount":1,"finalFrame":"first"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","id":"HotspotPanoramaOverlayArea_39CCCEA7_024F_B4C0_4179_AB9BBC9C3F35","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"class":"ImageResourceLevel","height":80,"width":5550,"url":"media/res_444980C9_024A_AC40_416F_D1F77E8F6B40_0.png"}],"frameCount":30,"colCount":30,"frameDuration":41,"id":"AnimatedImageResource_4B39EC10_0245_7BC0_4161_280EC0D2F630","class":"AnimatedImageResource","rowCount":1,"finalFrame":"first"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","id":"HotspotPanoramaOverlayArea_391F5F9E_024F_54C0_417C_A12B8C685A35","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"class":"ImageResourceLevel","height":80,"width":5550,"url":"media/res_444980C9_024A_AC40_416F_D1F77E8F6B40_0.png"}],"frameCount":30,"colCount":30,"frameDuration":41,"id":"AnimatedImageResource_4B3FEC10_0245_7BC0_4172_121501FA4CCA","class":"AnimatedImageResource","rowCount":1,"finalFrame":"first"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","id":"HotspotPanoramaOverlayArea_3853B96F_024D_5C40_4143_93875881CBD1","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"class":"ImageResourceLevel","height":80,"width":5550,"url":"media/res_444980C9_024A_AC40_416F_D1F77E8F6B40_0.png"}],"frameCount":30,"colCount":30,"frameDuration":41,"id":"AnimatedImageResource_4B3EAC10_0245_7BC0_4168_8A62B72E9394","class":"AnimatedImageResource","rowCount":1,"finalFrame":"first"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","id":"HotspotPanoramaOverlayArea_38E67BD9_024E_DC40_417E_7B1858AB9FE0","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true}],"scripts":{"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"openLink":TDV.Tour.Script.openLink,"showWindow":TDV.Tour.Script.showWindow,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setValue":TDV.Tour.Script.setValue,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPixels":TDV.Tour.Script.getPixels,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowScore":TDV.Tour.Script.quizShowScore,"getKey":TDV.Tour.Script.getKey,"disableVR":TDV.Tour.Script.disableVR,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"toggleVR":TDV.Tour.Script.toggleVR,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizStart":TDV.Tour.Script.quizStart,"cloneBindings":TDV.Tour.Script.cloneBindings,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"enableVR":TDV.Tour.Script.enableVR,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"init":TDV.Tour.Script.init,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"downloadFile":TDV.Tour.Script.downloadFile,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizFinish":TDV.Tour.Script.quizFinish,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeJS":TDV.Tour.Script.executeJS,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"createTween":TDV.Tour.Script.createTween,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getOverlays":TDV.Tour.Script.getOverlays,"initQuiz":TDV.Tour.Script.initQuiz,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"isPanorama":TDV.Tour.Script.isPanorama,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"clone":TDV.Tour.Script.clone,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"registerKey":TDV.Tour.Script.registerKey,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"shareSocial":TDV.Tour.Script.shareSocial,"playAudioList":TDV.Tour.Script.playAudioList,"existsKey":TDV.Tour.Script.existsKey,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"textToSpeech":TDV.Tour.Script.textToSpeech,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"mixObject":TDV.Tour.Script.mixObject,"unregisterKey":TDV.Tour.Script.unregisterKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"historyGoBack":TDV.Tour.Script.historyGoBack,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"translate":TDV.Tour.Script.translate,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setLocale":TDV.Tour.Script.setLocale},"layout":"absolute","height":"100%","watermark":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.2, Thu Dec 26 2024