lite-gros-mots v1.0.0
========

A highly consumable list of bad (profanity) french words based on the list found in [Wiktionary.org](https://fr.wiktionary.org/w/index.php?title=Cat%C3%A9gorie:Insultes_en_fran%C3%A7ais&pageuntil=mongol+a+batteries%0Amongol+%C3%A0+batteries#mw-pages)

Inspired by [badwords-list](https://github.com/MauriceButler/badwords)

This data has been exposed as an object that contains

 - an array
 - an object
 - a regular expression

depending on what is required for your purposes.


Install
=======

    npm install french-badwords-list

Usage
=====

```
var list = require('french-badwords-list'),
	array = list.array,
	object = list.object,
	regex = list.regex;
```

Testing
=======

####Requires
- Mocha
- better-assert


```
npm test
```

**or**

```
REPORTER=spec make
```

**or**

```
mocha
```



