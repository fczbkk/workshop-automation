# Globalna instalacia Boweru
npm install -g bower

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
