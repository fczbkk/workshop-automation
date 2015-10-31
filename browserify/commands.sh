npm install -g browserify
browserify ./src/index.js -o ./build/bundle.js
browserify ./src/index.js -o ./build/bundle.js --debug
browserify -t coffeeify --extension=".coffee" ./src/index.js -o ./build/bundle.js

npm install -g watchify
watchify ./src/index.js -o ./build/bundle.js

npm install -g beefy
beefy ./src/index.js --live --open
