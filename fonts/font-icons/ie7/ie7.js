/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'font-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-apps': '&#xe900;',
		'icon-bag': '&#xe901;',
		'icon-battery': '&#xe902;',
		'icon-calendar': '&#xe903;',
		'icon-camera': '&#xe904;',
		'icon-cancel': '&#xe905;',
		'icon-change-scheduled-rec': '&#xe906;',
		'icon-channel-lock-open': '&#xe907;',
		'icon-channel-lock': '&#xe908;',
		'icon-close': '&#xe909;',
		'icon-conf-series-recording': '&#xe90a;',
		'icon-devices': '&#xe90b;',
		'icon-document': '&#xe90c;',
		'icon-dolby-sound': '&#xe90d;',
		'icon-folder': '&#xe90e;',
		'icon-gift': '&#xe90f;',
		'icon-heart': '&#xe910;',
		'icon-help': '&#xe911;',
		'icon-home': '&#xe912;',
		'icon-icon-sim-recording-low-space': '&#xe913;',
		'icon-info': '&#xe914;',
		'icon-location': '&#xe915;',
		'icon-mail': '&#xe916;',
		'icon-menu': '&#xe917;',
		'icon-message': '&#xe918;',
		'icon-music': '&#xe919;',
		'icon-no-disc-space': '&#xe91a;',
		'icon-no-space-scheduled': '&#xe91b;',
		'icon-no-space-series': '&#xe91c;',
		'icon-ok': '&#xe91d;',
		'icon-parental-control': '&#xe91e;',
		'icon-phone': '&#xe91f;',
		'icon-profile': '&#xe920;',
		'icon-radio-recording': '&#xe921;',
		'icon-recording-conflict': '&#xe922;',
		'icon-recording-failed': '&#xe923;',
		'icon-recording-locked': '&#xe924;',
		'icon-recording': '&#xe925;',
		'icon-reload': '&#xe926;',
		'icon-restart': '&#xe927;',
		'icon-scheduled-rec': '&#xe928;',
		'icon-search': '&#xe929;',
		'icon-series-recording': '&#xe92a;',
		'icon-settings': '&#xe92b;',
		'icon-sim-recording': '&#xe92c;',
		'icon-sim': '&#xe92d;',
		'icon-sms': '&#xe92e;',
		'icon-subtitles': '&#xe92f;',
		'icon-surround-sound': '&#xe930;',
		'icon-text-tv-available': '&#xe931;',
		'icon-ticket': '&#xe932;',
		'icon-tracks-available': '&#xe933;',
		'icon-user': '&#xe934;',
		'icon-view': '&#xe935;',
		'icon-wallet': '&#xe936;',
		'icon-warning': '&#xe937;',
		'icon-watch': '&#xe938;',
		'icon-weekly-archive': '&#xe939;',
		'icon-wifi': '&#xe93a;',
		'icon-world': '&#xe93b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
