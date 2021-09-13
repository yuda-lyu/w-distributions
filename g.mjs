import wd from './src/WDistributions.mjs'


//因有使用WebAssembly故無法於IE11運行, 這邊就直接用async函數
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

    //compare with: https://stattrek.com/online-calculator/t-distribution.aspx

    let studentt34 = await wd.Studentt(34) //degrees of freedom=34

    r = studentt34.inv(0.95) //one or two sided test p-values=0.95
    console.log(r)
    // => 1.6909242551868549

    let studentt4 = await wd.Studentt(4) //degrees of freedom=4

    r = studentt4.inv(0.05) //one or two sided test p-values=0.05
    console.log(r)
    // => -2.1318467863266504

    //在自由度 10 的 t 分布中，請找出 t0.05,10數值，該點在 t 分布右尾機率 p = 0.05
    let studentt10 = await wd.Studentt(10) //degrees of freedom=10
    r = studentt10.inv(1 - 0.05)
    console.log(r)
    // => 1.8124611228116756 //Excel T.INV: t(0.05,10) = 1.8125

    //左尾機率 p = 0.05
    r = studentt10.inv(0.05)
    console.log(r)
    // => -1.8124611228116756 //Excel T.INV: -t(0.05,10) = -1.8125

    //[區間估計(Interval estimation)] http://eschool.kuas.edu.tw/tsungo/Publish/08%20Interval%20estimation.pdf

    //[範例8.18(pp.19)]測量其體積分別為 620、655、670、635、665、648、641 和 642 ml，請估算每杯珍珠奶茶平均容量的 95 %信賴區間
    //樣本平均值𝑥̅= 647.00 ml，樣本標準(偏)差 S = 16.27 ml。自由度 v = n–1 = 8–1 = 7，信賴水準 1–α = 0.95，顯著水準 α = 0.05
    //𝑡(𝛼/2),𝑛−1 = 𝑡0.025,(8−1=7) = t0.025,7 = 2.3646
    //下限: 647 – 2.3646 × 16.27 / sqrt(8) = 647 – 13.6 = 633.4 ml
    //上限: 647 + 2.3646 × 16.27 / sqrt(8) = 647 + 13.6 = 660.6 ml
    let studentt7 = await wd.Studentt(7)
    r = studentt7.inv(1 - 0.025)
    console.log(r)
    // => 2.364624251592785

    //[範例8.22(pp.36)] http://eschool.kuas.edu.tw/tsungo/Publish/08%20Interval%20estimation.pdf
    //售澳洲生蠔數量屬於(趨近於)常態分布，上個月 31 天營業日每日販售澳洲生蠔平均值𝑥̅= 150 個，標準(偏)差 S = 20 個，試求在 95 %的信賴水準下，每日至少要準備多少澳洲生蠔？
    //使用 t 分布精準算法：自由度 v = n – 1 = 31 – 1 = 30，顯著水準 α = 0.05，tα,ν = t0.05,30 = 1.6973(使用 Excel 軟體 T.INV 函數查詢獲得)。每日至少要準備的澳洲生蠔數量，將所有可能犯錯的機率全放在右側，屬於右單尾區間估計
    //𝑥̅ + tα,v * S / sqrt(n) = 150 + 1.6973 × 20 / sqrt(31) = 150 + 6.1 = 156.1
    let studentt30 = await wd.Studentt(30) //degrees of freedom=30
    r = studentt30.inv(1 - 0.05)
    console.log(r)
    // => 1.6972608865939578

    //在單尾區間估計時，母體標準(偏)差 σ (或變異數σ2)未知，利用樣本標準(偏)差 S = sqrt( sum( (xi-𝑥̅)**2 ) / (n-1) ) 取代母體標準(偏)差 σ
    //左尾: 𝑥̅ - tα,v * S / sqrt(n) ≤ μ
    //右尾: 𝑥̅ + tα,v * S / sqrt(n) ≥ μ
    //n: 樣本數
    //𝑥̅: 樣本平均值
    //S: 樣本標準(偏)差, S = sqrt( sum( (xi-𝑥̅)**2 ) / (n-1) )
    //v: 自由度(自由度等於樣本數-1), v = n - 1
    //tα,v = studentt(n-1).inv(1-α)

}
test()
    .catch((err) => {
        console.log(err)
    })

//node --experimental-modules --es-module-specifier-resolution=node g.mjs
