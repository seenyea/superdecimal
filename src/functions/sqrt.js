export const sqrt = (num, decimal) => {
    let right = BigInt(num);
    index = BigInt(index);
    right = right.toString();
    var t = BigInt(decimal + 1) * index;
    while(t--){
        right += '0';
    }
    right = BigInt(right);
    let s = right;
    let left = 0n;
    let half = (right + left) / index;
    delta = half ** index - s;
    t = 0n;
    let n = 0;
    while(delta - t){
        n++
        if(delta > 0n){
            right = half;
        }else if(delta < 0n){
            left = half;
        }else{
            return half;
        }
        t = delta;
        half = (right + left) / index;
        delta = half ** index - s;
    }
    let result = half.toString();
    let lens = result.length - 1;
    const last = result[lens] * 1;
    result = result.substr(0, lens);
    result = BigInt(result);
    if(last >= 5){
        result = result + 1n;
    }
    return {half, decimal, n, result};
}

const tenSqrt = "24494897427831780981972840747058913919659474806566701284326925672509603774573150265398594331046402348";
export const sqrtImprove = (num, decimal) => {
    let right = BigInt(num);
    index = BigInt(index);
    right = right.toString();
    var t = BigInt(decimal + 1) * index;
    while(t--){
        right += '0';
    }
    right = BigInt(right);
    var l = right.toString();
    let s = right.length;
    let left = BigInt(tenSqrt.substr(0, decimal + 1)) ** BigInt(l - 1);
    right = BigInt(tenSqrt.substr(0, decimal + 1)) ** BigInt(l + 1);
    let half = (right + left) / index;
    delta = half ** index - s;
    t = 0n;
    let n = 0;
    while(delta - t){
        n++
        if(delta > 0n){
            right = half;
        }else if(delta < 0n){
            left = half;
        }else{
            return half;
        }
        t = delta;
        half = (right + left) / index;
        delta = half ** index - s;
    }
    let result = half.toString();
    let lens = result.length - 1;
    const last = result[lens] * 1;
    result = result.substr(0, lens);
    result = BigInt(result);
    if(last >= 5){
        result = result + 1n;
    }
    return {half, decimal, n, result};
}