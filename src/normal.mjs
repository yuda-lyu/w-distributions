import cephes from 'cephes'

async function wNormalDistribution(mean, sd) {

    //support browser
    await cephes.compiled

    function NormalDistribution(mean, sd) {
        if (!(this instanceof NormalDistribution)) {
            return new NormalDistribution(mean, sd)
        }

        if (typeof mean !== 'number' && mean !== undefined) {
            throw TypeError('mean must be a number')
        }
        if (typeof sd !== 'number' && sd !== undefined) {
            throw TypeError('sd must be a number')
        }

        if (sd !== undefined && sd <= 0.0) {
            throw TypeError('sd must be positive')
        }

        this._mean = mean || 0
        this._sd = sd || 1
        this._var = this._sd * this._sd
    }

    // -0.5 * log(2 Pi)
    let HALF_TWO_PI_LOG = -0.9189385332046727 //原本為-0.91893853320467274180, 但超長, 執行時無法有此精確度

    NormalDistribution.prototype.pdf = function (x) {
        return Math.exp(HALF_TWO_PI_LOG - Math.log(this._sd) - Math.pow(x - this._mean, 2) / (2 * this._var))
    }

    NormalDistribution.prototype.cdf = function (x) {
        return cephes.ndtr((x - this._mean) / this._sd)
    }

    NormalDistribution.prototype.inv = function (p) {
        if (p <= 0) return -Infinity
        if (p >= 1) return Infinity
        return this._sd * cephes.ndtri(p) + this._mean
    }

    NormalDistribution.prototype.median = function () {
        return this._mean
    }

    NormalDistribution.prototype.mean = function () {
        return this._mean
    }

    NormalDistribution.prototype.variance = function () {
        return this._var
    }

    return NormalDistribution(mean, sd)
}

export default wNormalDistribution
