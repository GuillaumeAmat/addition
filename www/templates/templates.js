this["JST"] = this["JST"] || {};

this["JST"]["game.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="account">\r\n    <span>' +
((__t = (line_account )) == null ? '' : __t) +
'</span><br>\r\n</div>\r\n\r\n<form>\r\n    <p id="userResult"></p>\r\n    <div id="keyboard">\r\n        <button type="button" data-value="1" class="number">1</button>\r\n        <button type="button" data-value="2" class="number">2</button>\r\n        <button type="button" data-value="3" class="number">3</button>\r\n        <button type="button" data-value="4" class="number">4</button>\r\n        <button type="button" data-value="5" class="number">5</button>\r\n        <button type="button" data-value="6" class="number">6</button>\r\n        <button type="button" data-value="7" class="number">7</button>\r\n        <button type="button" data-value="8" class="number">8</button>\r\n        <button type="button" data-value="9" class="number">9</button>\r\n        <button type="button" data-value="0" class="number">0</button>\r\n        <button type="button" id="reset">C</button>\r\n        <button type="submit">GO</button>\r\n    </div>\r\n</form>\r\n<div id="win">\r\n    <span data-l10n-id="win">Gagné</span>\r\n    <button type="button" class="next" data-l10n-id="next">Suivant</button>\r\n</div>\r\n<div id="lose">\r\n    <p id="realResult"></p>\r\n    <span data-l10n-id="lose">Perdu</span> \r\n    <button type="button" class="next">Suivant</button>\r\n</div>\r\n';

}
return __p
};

this["JST"]["home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Je calcule</h1>\r\n<p><a href="#level/1">addition</a></p>\r\n<p><a href="#level/2">soustraction</a></p>\r\n<p><a href="#level/3">multiplication</a></p>\r\n<p><a href="#level/4">division</a></p>\r\n';

}
return __p
};

this["JST"]["level.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Choix du niveau !</h1>\r\n<ul>\r\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/1" data-l10n-id="level 1">Niveau 1</a></li>\r\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/2" data-l10n-id="level 2">Niveau 2</a></li>\r\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/3" data-l10n-id="level 3">Niveau 3</a></li>\r\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/4" data-l10n-id="level 4">Niveau 4</a></li>\r\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/5" data-l10n-id="level 5">Niveau 5</a></li>\r\n</ul>\r\n';

}
return __p
};