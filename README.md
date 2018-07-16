# tutorial-angular

## + env
<pre>
$ cat /etc/os-release 
NAME="Ubuntu"
VERSION="17.10 (Artful Aardvark)"
</pre>
<pre>
$ node -v
v8.11.3
</pre>
<pre>
$ npm -v
5.6.0
</pre>
<pre>
$ tsc -v
Version 2.9.2
</pre>
<pre>
$ ng -v
Angular CLI: 6.0.8
Node: 8.11.3
OS: linux x64
Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.6.8
@angular-devkit/core         0.6.8
@angular-devkit/schematics   0.6.8
@schematics/angular          0.6.8
@schematics/update           0.6.8
rxjs                         6.2.2
typescript                   2.7.2
</pre>

## + ref

https://angular.jp/tutorial

## + setup
<pre>
$ ng new angular-tour-of-heroes
$ cd angular-tour-of-heroes/
$ ng serve --open
</pre>
<pre>
  --open (-o)
    Opens the url in default browser.
</pre>

## + add component
<pre>
$ ng generate component heroes
CREATE src/app/heroes/heroes.component.css (0 bytes)
CREATE src/app/heroes/heroes.component.html (25 bytes)
CREATE src/app/heroes/heroes.component.spec.ts (628 bytes)
CREATE src/app/heroes/heroes.component.ts (269 bytes)
UPDATE src/app/app.module.ts (396 bytes)
$
$ ng generate component hero-detail
CREATE src/app/hero-detail/hero-detail.component.css (0 bytes)
CREATE src/app/hero-detail/hero-detail.component.html (30 bytes)
CREATE src/app/hero-detail/hero-detail.component.spec.ts (657 bytes)
CREATE src/app/hero-detail/hero-detail.component.ts (288 bytes)
UPDATE src/app/app.module.ts (559 bytes)
$
$ ng generate component messages
CREATE src/app/messages/messages.component.css (0 bytes)
CREATE src/app/messages/messages.component.html (27 bytes)
CREATE src/app/messages/messages.component.spec.ts (642 bytes)
CREATE src/app/messages/messages.component.ts (277 bytes)
UPDATE src/app/app.module.ts (649 bytes)
</pre>

## + add service
<pre>
$ ng generate service hero
CREATE src/app/hero.service.spec.ts (362 bytes)
CREATE src/app/hero.service.ts (133 bytes)
$
$ ng generate service message
CREATE src/app/message.service.spec.ts (380 bytes)
CREATE src/app/message.service.ts (136 bytes)
</pre>
