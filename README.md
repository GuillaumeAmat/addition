# Je calcule

Application mobile et web d'entraînement au calcul pour les enfants

## Environnement de développement

### Installation

    npm install
    cd app; bower install
    cd ..; grunt

### Avant de développer

    grunt; grunt watch

### Compilation

#### Application web

    grunt build

Le résultat de la compilation se trouve dans le dossier `www`.

#### Application empaquetée

    cordova prepare

Le résultat se trouve dans le dossier `platforms`.

## Génération des icônes

Chaque plateforme (Firefox OS, Android, iOS, etc.) ont des besoins spécifiques en taille d'icône.
Un script les génère toutes à partir du fichier `src/icon.svg` (Inkscape est requis).

    bash src/generate_icons.sh

Les icônes générés sont placés dans le dossier `res`.
