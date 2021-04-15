# w-distributions
Distributions for Uniform, Normal, Binomial and Studentt, fork from distributions.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-distributions.svg?style=flat)](https://npmjs.org/package/w-distributions) 
[![Build Status](https://travis-ci.org/yuda-lyu/w-distributions.svg?branch=master)](https://travis-ci.org/yuda-lyu/w-distributions) 
[![license](https://img.shields.io/npm/l/w-distributions.svg?style=flat)](https://npmjs.org/package/w-distributions) 
[![gzip file size](http://img.badgesize.io/yuda-lyu/w-distributions/master/dist/w-distributions.umd.js.svg?compression=gzip)](https://github.com/yuda-lyu/w-distributions)
[![npm download](https://img.shields.io/npm/dt/w-distributions.svg)](https://npmjs.org/package/w-distributions) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-distributions.svg)](https://www.jsdelivr.com/package/npm/w-distributions)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-distributions/global.html).

## Example
To view some examples for more understanding, visit examples:

> **distributions:** [web](https://yuda-lyu.github.io/w-distributions/examples/web.html) [[source code](https://github.com/yuda-lyu/w-distributions/blob/master/docs/examples/web.html)]

## Installation
### Using npm(ES6 module):
> **Note:** w-distributions is mainly dependent on `cephes`.
```alias
npm i w-distributions
```

#### Example:
```alias
import wd from 'w-distributions.mjs'

async function test() {
    let r

    let normal = await wd.Normal(1,2) //mean=1,std deviation=2

    r = normal.pdf(1)
    console.log(r)
    // => 0.19947114020071632

    r = normal.cdf(1)
    console.log(r)
    // => 0.5

    r = normal.inv(1)
    console.log(r)
    // => Infiniy

    r = normal.mean()
    console.log(r)
    // => 1

    r = normal.median()
    console.log(r)
    // => 1

    r = normal.variance()
    console.log(r)
    // => 4

    let studentt = await wd.Studentt(34) //degrees of freedom=34

    r = studentt.inv(0.95) //one or two sided test p-values=0.95
    console.log(r)
    // => 1.6909242551868549

    studentt = await wd.Studentt(4) //degrees of freedom=4

    r = studentt.inv(0.05) //one or two sided test p-values=0.05
    console.log(r)
    // => -2.1318467863266504

}
test()
    .catch((err) => {
        console.log(err)
    })
```

### In a browser(UMD module):
> **Note:** w-distributions is not dependent on any package, has included `cephes`.

> **Note:** It does not support IE11, because `cephes` using WebAssembly in the browser.

[Necessary] Add script for w-distributions.
```alias
<script src="https://cdn.jsdelivr.net/npm/w-distributions@1.0.0/dist/w-distributions.umd.js"></script>
```

#### Example:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-distributions/blob/master/web.html)]
```alias
<script>

    let wd = window['w-distributions']
    // console.log('wd',wd)

    async function test() {
        let r

        let normal = await wd.Normal(1, 2) //mean=1,std deviation=2

        r = normal.pdf(1)
        console.log(r)
        // => 0.19947114020071632

        r = normal.cdf(1)
        console.log(r)
        // => 0.5

        r = normal.inv(1)
        console.log(r)
        // => Infiniy

        r = normal.mean()
        console.log(r)
        // => 1

        r = normal.median()
        console.log(r)
        // => 1

        r = normal.variance()
        console.log(r)
        // => 4

        let studentt = await wd.Studentt(34) //degrees of freedom=34

        r = studentt.inv(0.95) //one or two sided test p-values=0.95
        console.log(r)
        // => 1.6909242551868549

        studentt = await wd.Studentt(4) //degrees of freedom=4

        r = studentt.inv(0.05) //one or two sided test p-values=0.05
        console.log(r)
        // => -2.1318467863266504

    }
    test()
        .catch((err) => {
            console.log(err)
        })

</script>
```