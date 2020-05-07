// 1-10的中文数字转换成阿拉伯数字
export function getMathNum(data){
    let num = data.slice(0,1)			
    let mathNum = 0
    switch(num){
        case '一':
            mathNum = 1
            break;
        case '二':
            mathNum = 2
            break;
        case '三':
            mathNum = 3
            break;
        case '四':
            mathNum = 4
            break;
        case '五':
            mathNum = 5
            break;
        case '六':
            mathNum = 6
            break;
        case '七':
            mathNum = 7
            break;
        case '八':
            mathNum = 8
            break;
        case '九':
            mathNum = 9
            break;
        default:
            mathNum = num
            break;
    }			
    return mathNum+data.slice(1)
}