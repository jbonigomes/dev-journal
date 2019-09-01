---
title: Publish package to NPX
date: 2019-09-01
path: /publish-package-to-npx
---

I find myself creating presentation slides every now and again. Everytime I
do so, I somewhat reinvent the wheel in an attempt to streamline my work. I
tried Jekyll, Impress.js, Angular, Prezi, Powerpoint ... the list goes on.

After using `create-react-app` a few times, it struck me, why not have an NPX
package that creates a slide deck template letting me concentrate on writting
the content of my presentation with all of Reacts' (and family) super powers.

Anyway, this is only an example of a use case for an NPX package (hope this
inspired you) lets get to the nitty gritty of how to build one.

Creating an NPX package is no different then creating a standard NPM package,
the only thing you really need to know is that you must add a `bin` command to
the root of your `package.json` file. So it looks a little like this:

    {
      "name": "@jbonigomes/some-package",
      "version": "5.5.5",
      "bin": {
        "some-package": "./some-file.js"
      },
      // ... rest of package.json
    }

Note that the name of the package is the same as the name of the bin command,
this command will then be available via NPX, in my case, I am namespacing it
under my NPM username `@jbonigomes`, but you don't have to.

In the case of my example (that creates a React presentation), I wanted the bin
script to `git clone` my package, then `npm install` all of it's dependencies.
Remember this runs in a `node.js` environment, so all those goodies are
available out of the box, in my case `spawnSync` from `child_process` was
exactly what I needed:

    #! /usr/bin/env node

    'use strict';

    const appName = process.argv[2];
    const { spawnSync } = require('child_process');
    const url = 'git@github.com:jbonigomes/create-react-slides.git';

    spawnSync('git', ['clone', url, `${process.cwd()}/${appName}`]);
    spawnSync('npm', ['install', '--prefix', `${process.cwd()}/${appName}`]);

    console.log('Your app has been successfully installed');
    console.log(`$ cd ${appName}`);
    console.log('$ npm start');

If you want to try that package, you can run:

    $ npx @jbonigomes/create-react-slides some-presentation

Note that `some-presentation` will be fed as `process.argv[2]` into the script
above.

Also, note the usage of `#! /usr/bin/env node` when I first deployed my package,
I didn't realise that without it, the whole piece wouldn't work.

Before I wrap up, you can find the source code for the package here:

[https://github.com/jbonigomes/create-react-slides](create-react-slides)

I will be updating it as more handy `components` are created.
