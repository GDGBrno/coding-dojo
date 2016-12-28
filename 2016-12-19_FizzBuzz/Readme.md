# 19. 12. 2016 - Fizz Buzz

První coding dojo jsme chtěli udělat úplně bez přípravy a nechat téma uplně na účastnících. Rodolfo Carvalho, který pořádá [doja v RedHatu](https://github.com/dojo-brno/dojo-brno) navrhl řešit problém [Fizz Buzz](https://en.wikipedia.org/wiki/Fizz_buzz)

Problém jsme implementovali v Javascriptu, pro psaní testů jsme použili Jasmine. 

## Popis problému

Nejprve jsme implementovali funkci, varcející číslo, případně Fizz / Buzz / Fizz Buzz podle [pravidel](https://en.wikipedia.org/wiki/Fizz_buzz).

 - pokud je číslo dělitelné 3 = Fizz
 - pokud je číslo dělitelné 5 = Buzz
 - pokud je číslo dělitelné 3 i 5 = FizzBuzz
 - v ostatních případěch se jedná o pořadové číslo
 
```
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz
```

Během vývoje se kód refaktoroval a poté se přidali další podmínky
 - pokud číslo obsahuje trojku, je Fizz.
 - pokud součet čísel je sudý jedná se o FizzBuzz
 - předchozí platí, pouze pokud nevyhovuje jiným podmínkám
 
## Výsledek
 
Funkce fizzBuzz (_fizz-buzz.js_) je psána ve stejném souboru jako testy, a ještě snesla trochu refaktoringu, ale v zásadě jsme se někam dostali.

### Instalace závislostí

Potřebujete NodeJS a NPM. Pro instalaci závislostí spusťte:

```
npm install
```

Pro spuštění testů: 

```
npm test
```