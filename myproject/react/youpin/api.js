
var list = 1

//   console.log(list[0].Img800)
let goodslist = []
for (let i = 0; i < list.length; i++) {
    let img1 = list[i].Img800;
    let name1 = list[i].attr_ext.custom_name || list[i].name;
    let summary1 = list[i].attr_ext.custom_summary || list[i].summary;
    let isLowPrice1 = !!(list[i].lables !== null && list[i].lables.length !== 0);
    let colorNum1 = list[i].color_num;
    let price1 = parseFloat(list[i].price_min / 100);
    let item = {
        img: img1,
        name: name1,
        summary: summary1,
        isLowPrice: isLowPrice1,
        colorNum: colorNum1,
        price: price1
    }
    goodslist.push(item);
}
console.log(JSON.stringify(goodslist))