install:
	npm install
start:
	npx babel-node src/bin/index.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
start-even:
	npx babel-node src/bin/games/brain-even.js
start-calc:
	npx babel-node src/bin/games/brain-calc.js