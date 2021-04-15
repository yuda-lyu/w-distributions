import Uniform from './uniform.mjs'
import Normal from './normal.mjs'
import Binomial from './binomial.mjs'
import Studentt from './studentt.mjs'


/**
 * 計算Uniform、Normal、Binomial、Studentt分佈參數
 *
 * 因原版distributions使用cephes時未用compiled方式來支援瀏覽器, 且cephes內有使用node的Buffer, 需配合node polyfill編譯才能給前端瀏覽器使用
 *
 * Fork: {@link https://github.com/AndreasMadsen/distributions distributions}
 *
 * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/distri.test.js Github}
 *
 * @returns {Object} 回傳各分佈初始化函數
 * @example
 *
 * //import wd from './src/WDistributions.mjs'
 * //import wd from './dist/w-distributions.umd.js'
 * //import wd from 'w-distributions'
 *
 * async function test() {
 *     let r
 *
 *     let normal = await wd.Normal(1,2) //mean=1,std deviation=2
 *
 *     r = normal.pdf(1)
 *     console.log(r)
 *     // => 0.19947114020071632
 *
 *     r = normal.cdf(1)
 *     console.log(r)
 *     // => 0.5
 *
 *     r = normal.inv(1)
 *     console.log(r)
 *     // => Infiniy
 *
 *     r = normal.mean()
 *     console.log(r)
 *     // => 1
 *
 *     r = normal.median()
 *     console.log(r)
 *     // => 1
 *
 *     r = normal.variance()
 *     console.log(r)
 *     // => 4
 *
 *     //compare with: https://stattrek.com/online-calculator/t-distribution.aspx
 *
 *     let studentt = await wd.Studentt(34) //degrees of freedom=34
 *
 *     r = studentt.inv(0.95) //one or two sided test p-values=0.95
 *     console.log(r)
 *     // => 1.6909242551868549
 *
 *     studentt = await wd.Studentt(4) //degrees of freedom=4
 *
 *     r = studentt.inv(0.05) //one or two sided test p-values=0.05
 *     console.log(r)
 *     // => -2.1318467863266504
 *
 * }
 * test()
 *     .catch((err) => {
 *         console.log(err)
 *     })
 *
 */
function WDistributions() {
    return {
        Uniform,
        Normal,
        Binomial,
        Studentt,
    }
}


export default WDistributions()
