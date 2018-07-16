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
$ la src/app/
-rw-r--r-- 1 koge koge  425  7月 16 16:32 app.component.css
-rw-r--r-- 1 koge koge   18  7月 16 16:32 app.component.html
-rw-r--r-- 1 koge koge 1005  7月 16 16:25 app.component.spec.ts
-rw-r--r-- 1 koge koge  218  7月 16 16:31 app.component.ts
-rw-r--r-- 1 koge koge  396  7月 16 16:34 app.module.ts
drwxr-xr-x 2 koge koge 4.0K  7月 16 16:34 heroes
$
$ la src/app/heroes/
-rw-r--r-- 1 koge koge    0  7月 16 16:34 heroes.component.css
-rw-r--r-- 1 koge koge   25  7月 16 16:34 heroes.component.html
-rw-r--r-- 1 koge koge  628  7月 16 16:34 heroes.component.spec.ts
-rw-r--r-- 1 koge koge  269  7月 16 16:34 heroes.component.ts
</pre>
