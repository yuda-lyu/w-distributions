import assert from 'assert'
import wd from '../src/WDistributions.mjs'


describe(`WDistributions`, async function() {

    async function test() {
        let r

        //normal範例一起共用
        let normal = await wd.Normal(1, 2)

        let t1 = 0.19947114020071632
        it(`should return ${t1} when run wd.Normal(1,2);normal.pdf(1)`, async function() {
            r = normal.pdf(1)
            assert.strict.deepStrictEqual(t1, r)
        })

        let t2 = 0.5
        it(`should return ${t2} when run wd.Normal(1,2);normal.cdf(1)`, async function() {
            r = normal.cdf(1)
            assert.strict.deepStrictEqual(t2, r)
        })

        let t3 = Infinity
        it(`should return ${t3} when run wd.Normal(1,2);normal.inv(1)`, async function() {
            r = normal.inv(1)
            assert.strict.deepStrictEqual(t3, r)
        })

        let t4 = 1
        it(`should return ${t4} when run wd.Normal(1,2);normal.mean()`, async function() {
            r = normal.mean()
            assert.strict.deepStrictEqual(t4, r)
        })

        let t5 = 1
        it(`should return ${t5} when run wd.Normal(1,2);normal.median()`, async function() {
            r = normal.median()
            assert.strict.deepStrictEqual(t5, r)
        })

        let t6 = 4
        it(`should return ${t6} when run wd.Normal(1,2);normal.variance()`, async function() {
            r = normal.variance()
            assert.strict.deepStrictEqual(t6, r)
        })

        let t7 = 1.6909242551868549
        it(`should return ${t7} when run wd.Studentt(34);studentt.inv(0.95)`, async function() {
            let studentt = await wd.Studentt(34)
            r = studentt.inv(0.95)
            assert.strict.deepStrictEqual(t7, r)
        })

        let t8 = -2.1318467863266504
        it(`should return ${t8} when run wd.Studentt(4);studentt.inv(0.05)`, async function() {
            let studentt = await wd.Studentt(4)
            r = studentt.inv(0.05)
            assert.strict.deepStrictEqual(t8, r)
        })

    }
    await test()

})
