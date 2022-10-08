import Echarts from 'echarts'  

export function lineDatas(opData, legend, areaColor,lineColor,lineWidth) {
    let res = []
    for (let i = 0; i < opData.length; i++) {
        res.push({
            name: legend[i],
            type: "line",
            symbol: "none",
            itemStyle: {
                normal: {
                    color: lineColor[i], //改变折线点的颜色
                    lineStyle: {
                        color: lineColor[i], //改变折线颜色
                        width: lineWidth[i], //折线宽度
                    }
                }
            },
            areaStyle: {
                normal: {
                    color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, areaColor[i]),
                }
            },
            data:opData[i]
        })
    }
    return res
}