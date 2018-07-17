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
$
$ ng generate component dashboard
CREATE src/app/dashboard/dashboard.component.css (0 bytes)
CREATE src/app/dashboard/dashboard.component.html (28 bytes)
CREATE src/app/dashboard/dashboard.component.spec.ts (649 bytes)
CREATE src/app/dashboard/dashboard.component.ts (281 bytes)
UPDATE src/app/app.module.ts (823 bytes)
$
$ ng generate component hero-search
CREATE src/app/hero-search/hero-search.component.css (0 bytes)
CREATE src/app/hero-search/hero-search.component.html (30 bytes)
CREATE src/app/hero-search/hero-search.component.spec.ts (657 bytes)
CREATE src/app/hero-search/hero-search.component.ts (288 bytes)
UPDATE src/app/app.module.ts (1251 bytes)
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
$
$ ng generate service in-memory-data
CREATE src/app/in-memory-data.service.spec.ts (412 bytes)
CREATE src/app/in-memory-data.service.ts (141 bytes)
</pre>

## + add routing module
<pre>
$ ng generate module app-routing --flat --module=app
CREATE src/app/app-routing.module.spec.ts (308 bytes)
CREATE src/app/app-routing.module.ts (194 bytes)
UPDATE src/app/app.module.ts (729 bytes)
</pre>

## + add in-memory web api
<pre>
$ npm install angular-in-memory-web-api --save
</pre>

# basic-guide

## add directive
<pre>
$ ng generate directive myspy
CREATE src/app/myspy.directive.spec.ts (220 bytes)
CREATE src/app/myspy.directive.ts (139 bytes)
UPDATE src/app/app.module.ts (386 bytes)
</pre>
