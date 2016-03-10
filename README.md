Citadel
============

Bigcommerce SCSS Framework

Built based on the Bigcommerce [SASS Style Guide](https://github.com/bigcommerce/sass-style-guide).

# Get started
First mke sure you have Bower and Grunt installed globally on your machine:
```
npm install -g grunt-cli && npm install -g bower
```

Check out the code and run:

```
bundle install && npm install && bower install
```

## Development
To have continuous code linting while you work and have the Sass files update
in your working copy of the BCApp Pattern-Lab, first you should `bower link`
[more details here](http://bower.io/docs/api/#link)
the citadel into the Pattern-Lab:

```bash
~/citadel $ bower link
```

```bash
~/bcapp-pattern-lab $ bower link citadel
```

Now with your symlinked package, just:

```
grunt run
```

Or you could just run `grunt build` to not watch the `.scss` files.

## Linting
To adhere to the Bigcommerce [SASS Style Guide](https://github.com/bigcommerce/sass-style-guide)
we have included the use of scss-lint to help you along as a grunt task.

```
grunt scsslint
```

## Releasing
Run `grunt release` to build, tag and release a new version of the Library.

# License

Copyright (c) 2015-2016, Bigcommerce Inc.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. All advertising materials mentioning features or use of this software
   must display the following acknowledgement:
   This product includes software developed by Bigcommerce Inc.
4. Neither the name of Bigcommerce Inc. nor the
   names of its contributors may be used to endorse or promote products
   derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY BIGCOMMERCE INC ''AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL BIGCOMMERCE INC BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Citadel bundles part of the foundation package, version 5.5.3.
