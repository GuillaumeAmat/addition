this["JST"] = this["JST"] || {};

this["JST"]["game.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="account">\n    <span>' +
((__t = (line_account )) == null ? '' : __t) +
'</span><br>\n</div>\n\n<form>\n    <p id="userResult"></p>\n    <div id="keyboard">\n        <button type="button" data-value="1" class="number">1</button>\n        <button type="button" data-value="2" class="number">2</button>\n        <button type="button" data-value="3" class="number">3</button>\n        <button type="button" data-value="4" class="number">4</button>\n        <button type="button" data-value="5" class="number">5</button>\n        <button type="button" data-value="6" class="number">6</button>\n        <button type="button" data-value="7" class="number">7</button>\n        <button type="button" data-value="8" class="number">8</button>\n        <button type="button" data-value="9" class="number">9</button>\n        <button type="button" data-value="0" class="number">0</button>\n        <button type="button" id="reset">C</button>\n        <button type="submit">GO</button>\n    </div>\n</form>\n<div id="win">\n    <span data-l10n-id="win">Gagné</span>\n    <button type="button" class="next" data-l10n-id="next">Suivant</button>\n</div>\n<div id="lose">\n    <p id="realResult"></p>\n    <span data-l10n-id="lose">Perdu</span> \n    <button type="button" class="next">Suivant</button>\n</div>\n';

}
return __p
};

this["JST"]["home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="title">\n    <h1>Je calcule</h1>\n    <img src="img/title_smile.svg" class="smile" />\n</section>\n\n\n<section class="home_menu">\n    <a class="menu_addition" href="#level/1">\n        <img src="img/menu_addition.svg" alt="Addition" />\n    </a>\n    <a class="menu_soustraction" href="#level/2">\n        <img src="img/menu_soustraction.svg" alt="Soustraction" />\n    </a>\n    <a class="menu_multiplication" href="#level/3">\n        <img src="img/menu_multiplication.svg" alt="Multiplication" />\n    </a>\n    <a class="menu_division" href="#level/4">\n        <img src="img/menu_division.svg" alt="Division" />\n    </a>\n</section>\n';

}
return __p
};

this["JST"]["level.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Choix du niveau !</h1>\n<ul>\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/1" data-l10n-id="level 1">Niveau 1</a></li>\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/2" data-l10n-id="level 2">Niveau 2</a></li>\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/3" data-l10n-id="level 3">Niveau 3</a></li>\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/4" data-l10n-id="level 4">Niveau 4</a></li>\n    <li><a href="#game/' +
((__t = (operator )) == null ? '' : __t) +
'/5" data-l10n-id="level 5">Niveau 5</a></li>\n</ul>\n';

}
return __p
};