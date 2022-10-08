//数组对象排序 顺序
export function compare(a, b) {
    return a.value - b.value
}

//对象数组 倒叙
export function compareFlashback(a, b) {
    return b.chagEq - a.chagEq
}