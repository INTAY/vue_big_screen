export function panelDatas(panelCounts) {
    let res = [];
    
    for (let i = 0; i < panelCounts.length; i++) {
        res.push({
            name: panelCounts[i].name,
            type: "gauge",
            center: panelCounts[i].pos,
            radius: "37%",
            splitNumber: panelCounts[i].splitNum || 10,
            startAngle: 225,
            endAngle: -45,
            min: panelCounts[i].range[0],
            max: panelCounts[i].range[1],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    color: [
                        [0.2, "#c9441a"],
                        [0.8, "#4eaaff"],
                        [1, "#10eb14"]
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#03b7c9',
                    width: 1
                },
                length: 6,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 10,
                lineStyle: {
                    color: [
                        [0.2, "#c9441a"],
                        [0.8, "#4eaaff"],
                        [1, "#10eb14"]
                    ]
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    width: 10,
                }
            },
            pointer: {
                show: true,
                length: "70%"
            },
            detail: {
                show: true,
                offsetCenter: [0, "110%"],
                textStyle: {
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#fff"
                },
                formatter: [
                    "{value} " + (panelCounts[i].unit || ""),
                    "{name|" + panelCounts[i].name + "}"
                ].join("\n"),
                rich: {
                    name: {
                        fontSize: 20,
                        lineHeight: 70,
                        color: "#fff"
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#af6afd',
                    shadowBlur: 15, // 图形阴影的模糊大小。
                    shadowColor: "#fff" // 阴影颜色。支持的格式同color。
                }
            },
            data: [{
                value: panelCounts[i].value
            }],
        })
    }
    return res;
}