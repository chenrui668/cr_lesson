// 防抖
export function debounce(func, wait) {
    var result, timeout;
    return function () {
        // this
        // 参数
        var context = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            result = func.apply(this, args)
        }, wait)
        return result;
    }
}
// 可用于装饰的  防抖
export function decDebounce(wait) {
    return function(taget, key, descriptor) {
        var callBack = descriptor.value;
        var fn = debounce(callBack, wait);
        descriptor.value = fn;
    }   
}

export function decArrowDebounce(wait) {
    return function(taget, key, descriptor) {
        // 拿到原来的
        var callBack = descriptor.initializer && descriptor.initializer();
        var fn = debounce(callBack, wait);
        // value 属性 -> 方法
        // get 方法 -> 属性
        // desriptor.value
        // 改变原来的  或者 返回一个新的
        return {
            configurable: true,
            get: function() {
                return fn;
            }
        }
    }
}
// hoc 高阶组件 装饰整个组件
// class
export function desDisplayName(displayname) {
    return function(target) {
        target.displayName = displayname;
    }
}