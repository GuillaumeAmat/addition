this["JST"] = this["JST"] || {};

this["JST"]["game.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="account">\n    <span>' +
((__t = (line_account )) == null ? '' : __t) +
'</span><br>\n</div>\n\n<form>\n    <input type="text" id="resultatUser" val="" placeholder="total" />\n    <div id="keyboard">\n        <button type="button" data-value="1" class="number">1</button>\n        <button type="button" data-value="2" class="number">2</button>\n        <button type="button" data-value="3" class="number">3</button>\n        <button type="button" data-value="4" class="number">4</button>\n        <button type="button" data-value="5" class="number">5</button>\n        <button type="button" data-value="6" class="number">6</button>\n        <button type="button" data-value="7" class="number">7</button>\n        <button type="button" data-value="8" class="number">8</button>\n        <button type="button" data-value="9" class="number">9</button>\n        <button type="button" id="delete">C</button>\n        <button type="submit">GO</button>\n    </div>\n</form>\n<div id="win">\n    Gagné\n    <button type="button" class="next">suivant</button>\n</div>\n<div id="loose">\n    Perdu\n    <button type="button" class="next">suivant</button>\n</div>\n';

}
return __p
};

this["JST"]["home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Je calcule</h1>\n<p><a href="#level/1">addition</a></p>\n<p><a href="#level/2">soustraction</a></p>\n<p><a href="#level/3">multiplication</a></p>\n<p><a href="#level/4">division</a></p>\n';

}
return __p
};

this["JST"]["level.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Choix du niveau !</h1>\n<ul>\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/1">Niveau 1</a></li>\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/2">Niveau 2</a></li>\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/3">Niveau 3</a></li>\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/4">Niveau 4</a></li>\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/5">Niveau 5</a></li>\n</ul>\n';

}
return __p
};