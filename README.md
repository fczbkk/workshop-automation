# Automatizace s Grunt, Bower a Yeoman

Podklady pre účastníkov školenia:
http://www.vzhurudolu.cz/kurzy/grunt-gulp

## Inštalácia prostredia

* **Windows**
  * Niektoré moduly vyžadujú systémové knižnice a cesty, ktoré defaultne vo Windows nie sú. Odporúčam [nainštalovať **Visual Studio Express**](http://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx), ktoré tie veci nainštaluje a nastaví automaticky. Samotné Visual Studio nebudeme potrebovať ani používať.
  * Štandardný terminál vo Windows je na nič. Odporúčam [**ConEmu**](https://code.google.com/p/conemu-maximus5/).
  * [Stiahni a nainštaluj **Git**](http://git-scm.com/downloads). Pri inštalácii v kroku "Adjusting your PATH environment" vybrať voľbu "Run Git from the Windows Command Prompt". Viď screenshot: ![](http://dev.opencascade.org/doc/overview/html/OCCT_GitGuide_V2_image002.png)

* **Mac**
  * Odporúčam nainštalovať [terminál **iTerm 2**](http://iterm2.com/).
  * **Git** by už mal byť v systéme nainštalovaný ako súčasť Xcode. Ak si ho ešte nikdy nepoužil, je možné, že pred jeho prvým použitím budeš musieť potvrdiť "Terms and conditions". Jednoducho spusť Xcode a potvrď prípadné dialógy, ktoré to zobrazí. Potom v konzole napíš `git`. Ak to bude hlásiť neznámy príkaz, tak [stiahni a nainštaluj **Git** manuálne](http://git-scm.com/downloads).
* [Stiahni a nainštaluj **Node.js**](http://nodejs.org/). Budeš ho potrebovať na úplne všetko.
* Nakoniec si globálne nainštaluj moduly **Grunt, Gulp, Yeoman a Bower**. V konzole postupne napíš tieto príkazy.
  * **Mac** pri inštalácii globálnych modulov vyžaduje admin práva. Takže pred každý príkaz treba napísať `sudo`.

```shell
# globalna instalacia Grunt CLI
npm install -g grunt-cli

# globalna instalacia Gulp
npm install -g gulp

# globalna instalacia Yeoman
npm install -g yo

# globalna instalacia Bower
npm install -g bower
```


## Bower

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

### Práca s generátormi

```shell
# Instalacia generatoru (generatory treba instalovat globalne)
npm install -g generator-webapp

# Vypis zoznam nainstalovanych generatorov
yo -h
```

### Príklad použitia

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

### Použitie v existujúcom projekte

```shell
# Nainstaluj vsetky zavislosti projektu
npm install

# Vypis vsetkych dostupnych taskov
gulp --task
gulp -T

# Spustenie defaultneho Gulp tasku
gulp

# Spustenie konkretneho Gulp tasku (napr. watch)
gulp watch
```
