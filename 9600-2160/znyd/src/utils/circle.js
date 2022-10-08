export function circleData(circData,legendData,dataStyle) {
    let res = [];
    for (let i = 0; i < circData.length; i++) {
      res.push({
        name: legendData[0],
        type: "pie",
        radius: [40 + i * 23 + i * 25, 60 + i * 23 + i * 25],
        clockWise: false, //关闭顺时针加载
        hoverAnimation: false, //鼠标经过动画是否开启
        itemStyle: dataStyle,
        data: [
          {
            value: circData[i].value,
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0.2,
                    color: "#02b8fa" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#1160db" // 100% 处的颜色
                  }
                ],
                globalCoord: true // 缺省为 false
              }
            }
          },
          {
            value: 1 - circData[i].value,
            name: legendData[1],
            itemStyle: {
              color: "#1e3c66"
            }
          }
        ]
      });
    }
    return res;
  }