class CPromise {

    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'

    constructor(fn) {
        this.status = CPromise.PENDING
        this.thenQue = []
        this.catchQue = []
        fn(this.resolveFn.bind(this), this.rejectFn.bind(this))
    }

    resolveFn(arg) {
        if (this.status !== CPromise.PENDING) return
        this.status = CPromise.RESOLVE
        window.addEventListener('message', () => {
            let thenFn = null
            while (thenFn = this.thenQue.shift()) {
                thenFn(arg)
            }
        })
        window.postMessage('message')
    }

    rejectFn(arg) {
        if (this.status !== CPromise.PENDING) return
        this.status = CPromise.REJECT
        window.addEventListener('message', () => {
            let catchFn = null
            while (catchFn = this.catchQue.shift()) {
                catchFn(arg)
            }
        })
        window.postMessage('message')
    }

    then(thenFn, catchFn = function () { }) {
        return new CPromise((resolve, reject) => {
            this.thenQue.push(arg => {
                const thenRes = thenFn(arg)
                if (thenRes instanceof CPromise) thenRes.then(resolve, reject)
                else resolve(undefined)
            })
            this.catchQue.push(arg => {
                const catchRes = catchFn(arg)
                if (catchRes instanceof CPromise) catchRes.then(resolve, reject)
                else resolve(undefined)
            })
        })
    }
    catch(catchFn) {
        return this.then(function () { }, catchFn)
    }
    finally(finallyFn) {
        this.then(finallyFn, finallyFn)
    }

    static resolve(arg) {
        return new CPromise(r => {
            r(arg)
        })
    }

    static reject(arg) {
        return new CPromise((r, rej) => {
            rej(arg)
        })
    }

}


new CPromise((resolve, reject) => {
    resolve('cdj')
})
    .then(res => {
        console.log(res)
        return new CPromise((resolve, reject) => {
            resolve(res)
        })
    })
    .finally(() => {
        console.log('结束！')
    })