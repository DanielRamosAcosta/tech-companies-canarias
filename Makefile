.PHONY: lint clean format test

lint:
	deno run src/linter/lint.ts

format:
	deno fmt

test:
	deno test

README.md: src/build.ts src/companies.ts
	deno run src/build.ts > README.md
