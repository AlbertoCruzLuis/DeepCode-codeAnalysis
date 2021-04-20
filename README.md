# Demo of how use DeepCode.ai

[![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6IkFsYmVydG9DcnV6THVpcyIsInJlcG8xIjoiRGVlcENvZGUtY29kZUFuYWx5c2lzIiwiaW5jbHVkZUxpbnQiOmZhbHNlLCJhdXRob3JJZCI6MjkyNDgsImlhdCI6MTYxODkzNzE4OH0.4k2IDqI768aVQelqTLgLmEwsXFAd-GYX2_KcTsWZAbY)](https://www.deepcode.ai/app/gh/AlbertoCruzLuis/DeepCode-codeAnalysis/_/dashboard?utm_content=gh%2FAlbertoCruzLuis%2FDeepCode-codeAnalysis)

[DeepCode.ai](https://www.deepcode.ai/) is a real-time semantic code analysis - powered by AI.

## Supported languages
- Javascript
- Typescript
- Python
- Java
- PHP
- C
- C#
- C++ (Beta)

## Steps analyze code in web

- Sign in with Github in [deepcode.ai](https://www.deepcode.ai/cloud-login)

- Add the repositories to be analyzed

## Steps analyze code in vscode

- Download Extension [DeepCode](https://marketplace.visualstudio.com/items?itemName=DeepCode.deepcode)

Example: This may produce an error if listNumbers is undefined.

```js
const showPrimeFactors = (listNumbers) => {
  listNumbers.map((number) => {
    console.log(primeFactors(number));
  })
}
```

Suggestion by DeepCode

![](assets/mapSuggestion.png)

Solution: Change map by for-of

```js
const showPrimeFactors = (listNumbers) => {
  for (const number of listNumbers) {
    console.log(primeFactors(number));
  }
}
```

## Resources
- https://medium.com/deepcode-ai/deepcodes-ai-code-review-vs-other-static-analysis-tools-fda95ee51e6b

- https://www.deepcode.ai/blog/deepcode-adds-ai-based-static-code-analysis-support-for-c-and-c





