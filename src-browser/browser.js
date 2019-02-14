//(c)2017, MIT Style License <browser-update.org/LICENSE.txt>
//it is recommended to directly link to this file because we update the detection code
'use strict';
var $buo_show = function() {
  var op = window._buorgres;
  var bb = $bu_getBrowser();
  var burl = op.burl;
  if (!op.url) op.url = burl;
  op.url_permanent_hide = op.url_permanent_hide || burl;
  function busprintf() {
    var args = arguments;
    var data = args[0];
    for (var k = 1; k < args.length; ++k) data = data.replace(/%s/, args[k]);
    return data;
  }
  var t = {},
    ta;
  t.en = {
    msg: 'Your web browser ({brow_name}) is out of date.',
    msgmore:
      'Update your browser for more security, speed and the best experience on this site.',
    bupdate: 'Update browser',
    bignore: 'Ignore',
    remind: 'You will be reminded in {days} days.',
    bnever: 'Never show again'
  };
  t.ar = {
    msg: 'متصفح الإنترنت الخاص بك ({brow_name}) غير مُحدّث.',
    msgmore:
      'قم بتحديث المتصفح الخاص بك لمزيد من الأمان والسرعة ولأفضل تجربة على هذا الموقع.',
    bupdate: 'تحديث المتصفح',
    bignore: 'تجاهل',
    remind: 'سيتم تذكيرك في غضون {days} أيام.',
    bnever: 'لا تظهر مرة أخرى'
  };
  t.fr = {
    msg: "Votre navigateur Web ({brow_name}) n'est pas à jour.",
    msgmore:
      'Mettez à jour votre navigateur pour plus de sécurité et de rapidité et la meilleure expérience sur ce site.',
    bupdate: 'Mettre à jour le navigateur',
    bignore: 'Ignorer',
    remind: 'Vous serez rappelé dans {days} jours.',
    bnever: 'Ne plus afficher'
  };
  var custom_text = op['text_' + op.llfull] || op['text_' + op.ll] || op.text;
  t = ta = custom_text || t[op.llfull] || t[op.ll] || t.en;
  if (ta.msg)
    t =
      '<b class="buorg-mainmsg">' +
      t.msg +
      '</b> <span class="buorg-moremsg">' +
      t.msgmore +
      '</span> <span class="buorg-buttons"><a{up_but}>' +
      t.bupdate +
      '</a> <a{ignore_but}>' +
      t.bignore +
      '</a></span>';
  var tar = '';
  if (op.newwindow) tar = ' target="_blank" rel="noopener"';
  var div = (op.div = document.createElement('div'));
  div.id = div.className = 'buorg';
  var style =
    '<style>.buorg-icon {width: 22px; height: 16px; vertical-align: middle; position: relative; top: -0.05em; display: inline-block;  }</style>';
  var style2 =
    '<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:center;  color:#000; background-color: #fff8ea; font: 18px Calibri,Helvetica,sans-serif; box-shadow: 0 0 5px rgba(0,0,0,0.2);animation: buorgfly 1s ease-out 0s;}' +
    '.buorg-pad { padding: 9px;  line-height: 1.7em; }' +
    '.buorg-buttons { display: block; text-align: center; }' +
    '#buorgig,#buorgul,#buorgpermanent { color: #fff; text-decoration: none; cursor:pointer; box-shadow: 0 0 2px rgba(0,0,0,0.4); padding: 1px 10px; border-radius: 4px; font-weight: normal; background: #5ab400;    white-space: nowrap;    margin: 0 2px; display: inline-block;}' +
    '#buorgig { background-color: #edbc68;}' +
    '@media only screen and (max-width: 700px){.buorg div { padding:5px 12px 5px 9px; line-height: 1.3em;}}' +
    '@keyframes buorgfly {from {opacity:0;transform:translateY(-50px)} to {opacity:1;transform:translateY(0px)}}' +
    '.buorg-fadeout {transition: visibility 0s 8.5s, opacity 8s ease-out .5s;}</style>';
  if (ta.msg && (op.ll == 'ar' || op.ll == 'he' || op.ll == 'fa'))
    style2 += '<style>.buorg {direction:RTL; unicode-bidi:embed;}</style>';
  if (!ta.msg && t.indexOf && t.indexOf('%s') !== -1) {
    t = busprintf(t, bb.t, ' id="buorgul" href="' + op.url + '"' + tar);
    style +=
      '<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:left; cursor:pointer; color:#000; font: 13px Arial,sans-serif;color:#000;}' +
      '.buorg div { padding:5px 36px 5px 40px; }' +
      '.buorg>div>a,.buorg>div>a:visited{color:#E25600; text-decoration: underline;}' +
      '#buorgclose{position:absolute;right:6px;top:0px;height:20px;width:12px;font:18px bold;padding:0;}' +
      '#buorga{display:block;}' +
      '@media only screen and (max-width: 700px){.buorg div { padding:5px 15px 5px 9px; }}</style>';
    div.innerHTML =
      '<div>' +
      t +
      '<div id="buorgclose"><a id="buorga">&times;</a></div></div>' +
      style;
    op.addmargin = true;
  } else {
    if (op.style === 'bottom')
      style2 +=
        '<style>.buorg {bottom:0; top:auto; border-top:1px solid #A29330; } @keyframes buorgfly {from {opacity:0;transform:translateY(50px)} to {opacity:1;transform:translateY(0px)}}</style>';
    else if (op.style === 'corner')
      style2 +=
        '<style> .buorg { text-align: left; width:300px; top:50px; right:50px; left:auto; border:1px solid #A29330; } .buorg-buttons, .buorg-mainmsg, .buorg-moremsg { display: block; } .buorg-buttons a {margin: 4px 2px;} .buorg-icon {display: none;}</style>';
    else op.addmargin = true;
    t = t
      .replace('{brow_name}', bb.t)
      .replace('{up_but}', ' id="buorgul" href="' + op.url + '"' + tar)
      .replace('{ignore_but}', ' id="buorgig"');
    div.innerHTML =
      '<div class="buorg-pad"><span class="buorg-icon"> </span>' +
      t +
      '</div>' +
      style +
      style2;
  }
  op.text = t;
  if (op.container) {
    op.container.appendChild(div);
    op.addmargin = false;
  } else document.body.insertBefore(div, document.body.firstChild);
  var updatebutton = document.getElementById('buorgul');
  if (updatebutton)
    updatebutton.onclick = function(e) {
      div.onclick = null;
      op.onclick(op);
      if (op.noclose) return;
      op.setCookie(op.reminderClosed);
      if (!op.noclose) {
        div.style.display = 'none';
        if (op.addmargin) hm.style.marginTop = op.bodymt;
      }
    };
  if (!custom_text) {
    div.style.cursor = 'pointer';
    div.onclick = function() {
      if (op.newwindow) window.open(op.url, '_blank');
      else window.location.href = op.url;
      op.setCookie(op.reminderClosed);
      op.onclick(op);
    };
  }
  if (op.addmargin && op.shift_page_down !== false) {
    var hm = document.getElementsByTagName('html')[0] || document.body;
    op.bodymt = hm.style.marginTop;
    hm.style.marginTop = div.clientHeight + 'px';
  }
  var ignorebutton =
    document.getElementById('buorga') || document.getElementById('buorgig');
  if (ignorebutton) {
    ignorebutton.onclick = function(e) {
      div.onclick = null;
      op.onclose(op);
      if (op.addmargin && op.shift_page_down !== false)
        hm.style.marginTop = op.bodymt;
      op.setCookie(op.reminderClosed);
      if (!op.no_permanent_hide && ta.bnever && ta.remind) {
        op.div.innerHTML =
          '<div class="buorg-pad"><span class="buorg-moremsg">' +
          (op.reminderClosed > 24
            ? ta.remind.replace('{days}', Math.round(op.reminderClosed / 24))
            : '') +
          '</span> <span class="buorg-buttons"><a id="buorgpermanent" href="' +
          op.url_permanent_hide +
          '"' +
          tar +
          '>' +
          ta.bnever +
          '</a></span></div>' +
          style +
          style2;
        div.className = 'buorg buorg-fadeout';
        document.getElementById('buorgpermanent').onclick = function(e) {
          op.setCookie(24 * 365);
          op.div.style.display = 'none';
        };
        op.div.style.opacity = 0;
        op.div.style.visibility = 'hidden';
        return false;
      }
      op.div.style.display = 'none';
      return false;
    };
    if (op.noclose || op.reminderClosed == 0)
      ignorebutton.parentNode.removeChild(ignorebutton);
  }
  op.onshow(op);
};
var $bu_ = new function() {
  var s = this;
  this.vsakt = {
    e: 18,
    i: 15,
    f: 65,
    o: 58,
    o_a: 48.2,
    s: '12.0.1',
    c: 72,
    y: '18.11',
    v: 2.3,
    uc: '12.10',
    samsung: 8.2,
    ios: 12.1
  };
  this.vsinsecure_below = {
    i: 11,
    e: 16,
    c: 64,
    f: 59,
    y: '18.11',
    s: '11.1.1',
    ios: '9.3.5',
    v: '2.0',
    uc: '12.6',
    samsung: '6.4',
    o_a: 44,
    o: 55
  };
  this.vsdefault = {
    e: -3,
    i: 11,
    f: -3,
    o: -3,
    o_a: -3,
    s: -1,
    c: -3,
    a: 535,
    y: 18.1,
    v: 2.1,
    uc: 12.8,
    samsung: 7.0,
    ios: 9
  };
  this.names = {
    i: 'Internet Explorer',
    e: 'Edge',
    f: 'Firefox',
    o: 'Opera',
    o_a: 'Opera',
    s: 'Safari',
    c: 'Chrome',
    a: 'Android Browser',
    y: 'Yandex Browser',
    v: 'Vivaldi',
    uc: 'UC Browser',
    samsung: 'Samsung Internet',
    x: 'Other',
    ios: 'iOS',
    silk: 'Silk'
  };
  this.get_browser = function(ua) {
    var n,
      ua = (ua || navigator.userAgent).replace('_', '.'),
      r = {
        n: 'x',
        v: 0,
        t: 'other browser',
        age_years: undefined,
        no_device_update: false,
        available: s.vsakt
      };
    function ignore(reason, pattern) {
      if (new RegExp(pattern, 'i').test(ua)) return reason;
      return false;
    }
    r.other =
      ignore(
        'bot',
        'bot|spider|archiver|transcoder|crawl|checker|monitoring|prerender|screenshot|python-|php|uptime|validator|fetcher|facebook|slurp|google|yahoo|node|mail.ru|github|cloudflare|addthis|thumb|proxy|feed|fetch|favicon|link|http|scrape|seo|page|search console|AOLBuild|Teoma|Expeditor'
      ) ||
      ignore('TV', 'SMART-TV|SmartTV') ||
      ignore(
        'niche browser',
        'Dorado|LBBROWSER|Focus|waterfox|Firefox/56.2|Firefox/56.3|Whale|MIDP|k-meleon|sparrow|wii|Chromium|Puffin|Opera Mini|maxthon|maxton|dolfin|dolphin|seamonkey|opera mini|netfront|moblin|maemo|arora|kazehakase|epiphany|konqueror|rekonq|symbian|webos|PaleMoon|QupZilla|Otter|Midori|qutebrowser'
      ) ||
      ignore(
        'mobile without upgrade path or landing page',
        'cros|kindle|tizen|silk|blackberry|bb10|RIM|PlayBook|meego|nokia|ucweb|ZuneWP7|537.85.10'
      );
    r.mobile = /iphone|ipod|ipad|android|mobile|phone|ios|iemobile/i.test(ua);
    var pats = [
      ['CriOS.VV', 'c', 'ios'],
      ['FxiOS.VV', 'f', 'ios'],
      ['Trident.*rv:VV', 'i', 'i'],
      ['Trident.VV', 'io', 'i'],
      ['UCBrowser.VV', 'uc', 'c'],
      ['MSIE.VV', 'i', 'i'],
      ['Edge.VV', 'e', 'e'],
      ['Vivaldi.VV', 'v', 'c'],
      ['Android.*OPR.VV', 'o_a', 'c'],
      ['OPR.VV', 'o', 'c'],
      ['YaBrowser.VV', 'y', 'c'],
      ['SamsungBrowser.VV', 'samsung', 'c'],
      ['Silk.VV', 'silk', 'c'],
      ['Chrome.VV', 'c', 'c'],
      ['Firefox.VV', 'f', 'f'],
      [' OS.VV.*Safari', 'ios', 'ios'],
      ['Version.VV.*Safari', 's', 's'],
      ['Safari.VV', 'so', 's'],
      ['Opera.*Version.VV', 'o'],
      ['Opera.VV', 'o']
    ];
    var VV = '(\\d+\\.?\\d+\\.?\\d*\\.?\\d*)';
    for (var i = 0; i < pats.length; i++)
      if (ua.match(new RegExp(pats[i][0].replace('VV', VV), 'i'))) {
        r.n = pats[i][1];
        r.engine = pats[i][2];
        break;
      }
    r.fullv = RegExp.$1;
    r.v = parseFloat(r.fullv);
    if (
      /windows.nt.5.0|windows.nt.4.0|windows.95|windows.98|os x 10.2|os x 10.3|os x 10.4|os x 10.5/i.test(
        ua
      )
    ) {
      r.no_device_update = true;
      r.available = {};
    }
    if (/iphone|ipod|ipad|ios/i.test(ua)) {
      ua.match(new RegExp('OS.' + VV, 'i'));
      r.n = 'ios';
      r.fullv = RegExp.$1;
      r.v = parseFloat(r.fullv);
      r.engine = 'ios';
      r.available = {
        ios: s.available_ios(ua, v)
      };
      if (r.available.ios < 11) r.no_device_update = true;
    }
    if (/windows.nt.5.1|windows.nt.5.2|windows.nt.6.0/i.test(ua))
      r.available = {
        c: 49.9,
        f: 52.9
      };
    if (/os x 10.6/i.test(ua)) {
      r.available = {
        s: '5.1.10',
        c: 49.9,
        f: 48
      };
      r.no_device_update = true;
    }
    if (/os x 10.7|os x 10.8/i.test(ua)) {
      r.available = {
        s: '6.2.8',
        c: 49.9,
        f: 48
      };
      r.no_device_update = true;
    }
    if (/os x 10.9/i.test(ua)) r.available.s = '9.1.3';
    if (/os x 10.10/i.test(ua)) r.available.s = '10.1.2';
    if (ua.indexOf('Android') > -1 && r.n === 's') {
      var v = parseInt((/WebKit\/([0-9]+)/i.exec(ua) || 0)[1], 10) || 2000;
      if (v <= 534) {
        r.n = 'a';
        r.fullv = r.v = v;
        r.is_insecure = true;
      }
    }
    if (r.n === 'so') {
      r.v = r.fullv = 4.0;
      r.n = 's';
    }
    if (r.n === 'io') {
      r.n = 'i';
      if (r.v > 6) r.v = 11;
      else if (r.v > 5) r.v = 10;
      else if (r.v > 4) r.v = 9;
      else if (r.v > 3.1) r.v = 8;
      else if (r.v > 3) r.v = 7;
      else r.v = 9;
      r.fullv = r.v;
    }
    r.t = s.names[r.n] + ' ' + r.v;
    r.is_supported = r.is_latest = !s.vsakt[r.n]
      ? undefined
      : s.less(r.fullv, s.vsakt[r.n]) <= 0;
    r.vmaj = Math.round(r.v);
    r.is_insecure =
      r.is_insecure || !s.vsinsecure_below[r.n]
        ? undefined
        : s.less(r.fullv, s.vsinsecure_below[r.n]) === 1;
    if (
      (r.n === 'f' && (r.vmaj === 52 || r.vmaj === 60)) ||
      (r.n === 'i' && r.vmaj === 11)
    ) {
      r.is_supported = true;
      r.is_insecure = false;
      if (r.n === 'f') r.esr = true;
    }
    if (
      (r.n === 'c' || r.n === 'f' || r.n === 'o') &&
      s.less(r.fullv, parseFloat(s.vsakt[r.n]) - 1) <= 0
    )
      r.is_supported = true;
    if (r.n === 'ios' && r.v > 10.3) r.is_supported = true;
    if (r.n === 'a' || r.n === 'x') r.t = s.names[r.n];
    if (r.n === 'e') {
      r.t = s.names[r.n] + ' ' + r.vmaj;
      r.is_supported = s.less(r.fullv, '15.15063') != 1;
    }
    var releases_per_year = {
      f: 7,
      c: 8,
      o: 8,
      i: 1,
      e: 1,
      s: 1
    };
    if (releases_per_year[r.n])
      r.age_years =
        Math.round(((s.vsakt[r.n] - r.v) / releases_per_year[r.n]) * 10) / 10 ||
        0;
    var engines = {
      e: 'Edge.VV',
      c: 'Chrome.VV',
      f: 'Firefox.VV',
      s: 'Version.VV',
      i: 'MSIE.VV',
      ios: ' OS.VV'
    };
    if (r.engine) {
      ua.match(new RegExp(engines[r.engine].replace('VV', VV), 'i'));
      r.engine_version = parseFloat(RegExp.$1);
    }
    return r;
  };
  this.semver = function(vstr) {
    if (vstr instanceof Array) return vstr;
    var x = (vstr + '.0.0.0').split('.');
    return [
      parseInt(x[0]) || 0,
      parseInt(x[1]) || 0,
      parseInt(x[2]) || 0,
      parseInt(x[3]) || 0
    ];
  };
  this.less = function(v1, v2) {
    v1 = s.semver(v1);
    v2 = s.semver(v2);
    for (var i = 0; ; i++) {
      if (i >= v1.length) return i >= v2.length ? 0 : 1;
      if (i >= v2.length) return -1;
      var diff = v2[i] - v1[i];
      if (diff) return diff > 0 ? 1 : -1;
    }
  };
  this.available_ios = function(ua, v) {
    var h = Math.max(window.screen.height, window.screen.width),
      pr = window.devicePixelRatio;
    if (/ipad/i.test(ua)) {
      if (h == 1024 && pr == 2) return 10;
      if (h == 1112) return 15;
      if (h == 1366) return 15;
      if (h == 1024 && v < 6) return 5;
      return 9;
    }
    if (pr == 1) return 6;
    if (h == 812) return 11 + 4;
    if (h == 736 || h == 667) return 8 + 5;
    if (h == 568) return 10;
    if (h == 480) return 7;
    return 6;
  };
}();
window.$bu_getBrowser = $bu_.get_browser;
var $buo = function(op, test) {
  var n = window.navigator,
    b;
  op = window._buorgres = op || {};
  var ll =
    op.l ||
    (n.languages ? n.languages[0] : null) ||
    n.language ||
    n.browserLanguage ||
    n.userLanguage ||
    document.documentElement.getAttribute('lang') ||
    'en';
  op.llfull = ll
    .replace('_', '-')
    .toLowerCase()
    .substr(0, 5);
  op.ll = op.llfull.substr(0, 2);
  op.domain =
    op.domain !== undefined
      ? op.domain
      : (/file:/.test(location.href) ? 'https:' : '') + '//browser-update.org';
  op.apiver = op.api || op.c || -1;
  op.jsv = '3.2.9';
  var required_min =
    (op.apiver < 2018 && {
      i: 10,
      f: 11,
      o: 21,
      s: 8,
      c: 30
    }) ||
    {};
  var vs = op.notify || op.vs || {};
  vs.e = vs.e || vs.i;
  vs.i = vs.i || vs.e;
  var required = op.required || {};
  required.e = required.e || required.i;
  required.i = required.i || required.e;
  for (b in $bu_.vsdefault) {
    if (vs[b])
      if ($bu_.less(vs[b], 0) >= 0)
        required[b] = parseFloat($bu_.vsakt[b]) + parseFloat(vs[b]) + 0.01;
      else required[b] = parseFloat(vs[b]) + 0.01;
    if (!required[b]) required[b] = $bu_.vsdefault[b];
    if ($bu_.less(required[b], 0) >= 0)
      required[b] = parseFloat($bu_.vsakt[b]) + required[b];
    if (required_min[b] && $bu_.less(required[b], required_min[b]) === 1)
      required[b] = required_min[b];
  }
  required.ios = required.ios || required.s;
  op.required = required;
  op.reminder = op.reminder < 0.1 ? 0 : op.reminder || 24 * 7;
  op.reminderClosed = op.reminderClosed < 1 ? 0 : op.reminderClosed || 24 * 7;
  op.onshow = op.onshow || function(o) {};
  op.onclick = op.onclick || function(o) {};
  op.onclose = op.onclose || function(o) {};
  op.pageurl = op.pageurl || location.hostname || 'x';
  op.newwindow = op.newwindow !== false;
  op.test = test || op.test || location.hash === '#test-bu' || false;

  op.test = test || op.test || location.hash === '#test-bu';
  op.reasons = [];
  op.hide_reasons = [];
  function check_show(op) {
    var bb = $bu_.get_browser(op.override_ua);
    op.is_below_required =
      required[bb.n] && $bu_.less(bb.fullv, required[bb.n]) === 1;
    if (bb.other !== false)
      op.hide_reasons.push('is other browser:' + bb.other);
    if (bb.esr && !op.notify_esr)
      op.hide_reasons.push('Extended support (ESR)');
    if (bb.mobile && op.mobile === false)
      op.hide_reasons.push('do not notify mobile');
    if (bb.no_device_update) op.hide_reasons.push('no device update');
    if (op.is_below_required) op.reasons.push('below required');
    if ((op.insecure || op.unsecure) && bb.is_insecure)
      op.reasons.push('insecure');
    if (op.unsupported && !bb.is_supported)
      op.reasons.push('no vendor support');
    if (op.hide_reasons.length > 0) return false;
    if (op.reasons.length > 0) return true;
    return false;
  }
  op.notified = check_show(op);
  op.already_shown = document.cookie.indexOf('browserupdateorg=pause') > -1;
  if (!op.test && (!op.notified || op.already_shown)) return;
  op.setCookie = function(hours) {
    document.cookie =
      'browserupdateorg=pause; expires=' +
      new Date(new Date().getTime() + 3600000 * hours).toGMTString() +
      '; path=/';
  };
  //   if (op.reminder > 0) op.setCookie(op.reminder);
  if (op.nomessage) {
    op.onshow(op);
    return;
  }
  // var e = document.createElement('script');
  // e.src = './update.show.min.js';
  // document.body.appendChild(e);

  $buo_show();
};
$buo(window.$buoop);
