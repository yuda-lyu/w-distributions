import fs from 'fs'
import getPks from 'w-package-tools/src/getPks.mjs'


let fdSrc = './'
let fdTar = './docs/examples/'


function main() {
    //把example裡面cdn更換, 再複製到docs的example內, 作為日後發佈為靜態網站

    //pks
    let pks = getPks()

    //cdn
    let cdn = `<script src="https://cdn.jsdelivr.net/npm/w-distributions@${pks.version}/dist/w-distributions.umd.js"></script>`

    //mkdirSync
    if (!fs.existsSync(fdTar)) {
        fs.mkdirSync(fdTar)
    }

    //v
    let v = 'web.html'

    //fn
    let fn = fdSrc + v

    //c
    let c = fs.readFileSync(fn, 'utf8')

    //replace
    let r = `<script src="dist/w-distributions.umd.js"></script>`
    c = c.replace(r, cdn)

    //write
    //console.log(c)
    fs.writeFileSync(fdTar + v, c, 'utf8')


}
main()
