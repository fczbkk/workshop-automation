# Automatizace s Grunt, Bower a Yeoman

Podklady pre účastníkov školenia:
http://www.vzhurudolu.cz/kurzy/grunt-bower-yeoman/69

## Inštalácia prostredia

[Stiahni a nainštaluj Node.js](http://nodejs.org/). Budeš ho potrebovať an úplne všetko.

### Windows

* Niektoré moduly vyžadujú systémové knižnice a cesty, ktoré defaultne vo Windows nie sú. Odporúčam [nainštalovať Visual Studio Express](http://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx), ktoré tie veci nainštaluje a nastaví automaticky.
* Štandardný terminál vo Windows je na nič. Odporúčam [ConEmu](https://code.google.com/p/conemu-maximus5/).

## Bower

### Inštalácia

```shell
# Globalna instalacia Boweru
npm install -g bower
```

### Použitie

```shell
# Stiahne najaktualnejsiu verziu jQuery a ulozi ju do bower_components/jquery
bower install jquery

# Nainstaluje Bootstrap, ktory ma zavislost na jQuery.
bower install bootstrap

# Vytvor bower.json a pridaj do neho jQuery
bower init
bower install jquery --save

# Nainstaluj vsetky komponenty pre tento projekt
bower install

# Zobraz vsetky nainstalovane komponenty a ich verzie
bower list

# Zaktualizuj vsetky komponenty pre tento projekt
bower update
```

## Yeoman

### Inštalácia

```shell
# Globalna instalacia Yeomana
npm install -g yo

# Instalacia generatoru (generatory treba instalovat globalne)
npm install -g generator-webapp

# Vypis zoznam nainstalovanych generatorov
yo -h
```

### Použitie

```shell
# Vytvori scaffold noveho projektu
yo webapp

# Spusti automatizaciu projektu, vratane lokalneho serveru pre Livereload
grunt serve
```

### Vývoj vlastného generátoru

```shell
# Spustit v adresari, kde su zdrojaky generatoru. Vytvori alias pre tento
# adresar ako globalny NPM modul.
npm link

# Vytvori scaffold projektu (hlavny generator)
yo example

# Pouzitie subgeneratoru
yo example:page
```

## Grunt

### Inštalácia

```shell
# Globalna instalacia Grunt CLI.
# Potrebujes to, aby si mohol pouzivat Grunt z prikazoveho riadku.
npm install -g grunt-cli
```

### Použitie v existujúcom projekte

```shell
# Nainstaluj vsetky zavislosti projektu
npm install

# Spustenie defaultneho Grunt tasku
grunt

# Spustenie konkretneho Grunt tasku (napr. watch)
# Ak je dany task multitask, spusti to postupne vsetky jeho subtasky.
grunt watch

# Spustenie konkretneho subtasku
grunt watch:less
```

### Vytvorenie projektu

```shell
# Inicializuj NPM projekt, vytvor package.json
npm init

# Pridaj lokalny Grunt (alebo ine moduly) do projektu
npm install grunt --save-dev
```

## Gulp

### Inštalácia

```shell
npm install -g gulp
```

### Použitie v existujúcom projekte

```shell
# Nainstaluj vsetky zavislosti projektu
npm install

# Vypis vsetkych dostupnych taskov
gulp --task
gulp -T

# Spustenie defaultneho Grunt tasku
gulp

# Spustenie konkretneho Gulp tasku (napr. watch)
grunt watch
```
