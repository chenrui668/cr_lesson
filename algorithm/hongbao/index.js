// let ran_num = Math.random();
// 函数表达式
const hongbao = (total,num) =>{
    const arr = [];//待分配金额的数组
    // 定义计算量
    let restAmount = total,
    restNum=num;
    for (let i = 0; i < num-1;i++){
        //前n-1随机发
        // restAmount/restNum)*2*Math.random()
        // 10人   100元
        // 100/10*2  (0,20) 平均10元
        let amount =parseFloat(Math.random()*((restAmount/restNum)*2-0)).toFixed(2);
        restAmount-=amount;
        restNum--;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));
    return arr;
}
console.log(hongbao(20,47));
