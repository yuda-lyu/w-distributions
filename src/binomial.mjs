import cephes from 'cephes'

async function wBinomialDistribution(properbility, size) {

    //support browser
    await cephes.compiled

    function BinomialDistribution(properbility, size) {
        if (!(this instanceof BinomialDistribution)) {
            return new BinomialDistribution(properbility, size)
        }

        if (typeof properbility !== 'number') {
            throw TypeError('properbility must be a number')
        }
        if (typeof size !== 'number') {
            throw TypeError('size must be a number')
        }

        if (size <= 0.0) {
            throw TypeError('size must be positive')
        }
        if (properbility < 0.0 || properbility > 1) {
            throw TypeError('properbility must be between 0 and 1')
        }

        this._properbility = properbility
        this._size = size
    }

    BinomialDistribution.prototype.pdf = function (x) {
        let n = this._size
        let p = this._properbility

        // choose(n, x)
        let binomialCoefficent = cephes.gamma(n + 1) / (
            cephes.gamma(x + 1) * cephes.gamma(n - x + 1)
        )

        return binomialCoefficent * Math.pow(p, x) * Math.pow(1 - p, n - x)
    }

    BinomialDistribution.prototype.cdf = function (x) {
        return cephes.bdtr(x, this._size, this._properbility)
    }

    BinomialDistribution.prototype.inv = function (p) {
        throw new Error('Inverse CDF of binomial distribution is not implemented')
    }

    BinomialDistribution.prototype.median = function () {
        return Math.round(this._properbility * this._size)
    }

    BinomialDistribution.prototype.mean = function () {
        return this._properbility * this._size
    }

    BinomialDistribution.prototype.variance = function () {
        return this._properbility * this._size * (1 - this._properbility)
    }

    return BinomialDistribution(properbility, size)
}

export default wBinomialDistribution
