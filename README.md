# zod-object-bug

When importing a Zod validation from another package Zod doesn't work and validation passes.

- There are two packages in the `packages/` directory
- packageA contains a validation: [zEmail](./packages/packageA/src/emailValidation.ts)
- packageB contains a model that uses zEmail: [models.ts](./packages/packageB/src/models.ts)
- test fails when it's imported, but passes when it's locally defined: [index.test.ts](./packages/packageB/index.test.ts)
- The same version of Zod is installed in both [packageA](./packages/packageA/package.json) and [packageB](./packages/packageB/package.json)

## To run locally

```shell
npm install
npm run test
```

## What does work

What does work is if Zod is installed only once at a root package.json level