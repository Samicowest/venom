// this is the data section it comprises of data which are moved from one place to another due to its functions and uses 
// the data are relative to one another in other to avoid random unnecessary movement of data in price and percentage values 


let data = {
    venom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1],
    btc:   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2],
    usdt:  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3],
    dai:   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    eth:   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4],
}


let timer =[1, 2, 3, 4]

let yes = true 

// this data comprises of all the price of the datas at intial which will be update later by function
let collection = {
    venom: { name: 'VENOM',  makers: 350,  txns:  324, price: 3247465,  m5: 0.1, h1: 0.0015, h6: 0.003, h24: 0.02},
    btc: { name: 'BTC',  makers: 350,  txns:  324, price: 3236354, m5: -0.001, h1: 0.002, h6: 0.0025, h24: 0.14},
    usdt: { name: 'USDT',  makers: 350,  txns:  324, price: 3228363, m5: -0.012, h1: 0.012, h6: 0.0013, h24: 0.2 },
    eth: { name: 'ETH',  makers: 350,  txns:  324, price: 3224436, m5: 0.02, h1: 0.0001, h6: 0.017, h24: 0.003 },
    dai: { name: 'DAI',  makers: 350,  txns:  324, price: 3222552, m5: 0.01, h1: 0.002, h6: 0.015, h24: 0.0012},

 }


//  this data are for pairs of data which is generated from cthe collection data 
 let collection_ratio = {
    venom_btc : { m5: 0.1, h1: 0.0015, h6: 0.003, h24: 0.02, img: "img/bitcoin.png", price: 384788, txns: 15300, volume: 3500000, maker: 14200, liquidity: 3200000, fdv: 198290, name: 'BTC'},
    venom_usdt : { m5: -0.001, h1: 0.002, h6: 0.0025, h24: 0.14, img: "img/tether.png", price: 384748, txns: 15300, volume: 3500000, maker: 14200, liquidity: 3200000, fdv: 198290, name: 'USDT'},
    venom_eth : { m5: -0.012, h1: 0.012, h6: 0.0013, h24: 0.2, img: "img/etherium.png", price: 320878, txns: 15300, volume: 3500000, maker: 14200, liquidity: 3200000, fdv: 198290, name: 'ETH'},
    venom_dai : { m5: 0.02, h1: 0.0001, h6: 0.017, h24: 0.003, img: "img/dai.png", price: 384278, txns: 15300, volume: 3500000, maker: 14200, liquidity: 3200000, fdv: 198290, name: 'DAI' }
 }

 
//  let graph_data = {
//     venom_btc: {h1: [], h6: [], h24: []},
//     venom_usdt: {h1: [], h6: [], h24: []},
//     venom_eth: {h1: [], h6: [], h24: []},
//     venom_dai: {h1: [], h6: [], h24: []},
//  }


 
//  let label_s = {
//     h1: [],
//     h6: [],
//     h24: []
//  }


// function graph_timing(y){
//     let label_data = Object.keys(label_s)
//     let collect_data = Object.keys(collection_ratio)
//     let collect_d = Object.keys(collection_ratio[collect_data[0]])
//     let graph_datas  =Object.keys(graph_data) 
//     let graph_datas2 = Object.keys(graph_data[graph_datas[0]]);
    
//     let collect_main, collect_main2, collect_graph, collect_graph2, label;

//     for(let i = 0; i < 4; i++){
        
//         collect_main = collection_ratio[collect_data[i]];
//         collect_main2 = collect_main[collect_d[5]];
        
        
        
//         collect_graph = graph_data[graph_datas[i]]
//         collect_graph2 = collect_graph[graph_datas2[y]]
//         collect_graph2.push(formatNumber2(collect_main2))
     
//         console.log(graph_data);
        
        
        
//     }
//     label_name = label_s[label_data[y]]
//     label_name.push(formatNumber2(collect_main2));

// }

// graph_timing(2, 3);



// function graph_h1(){
//     // clear_graph();
//     graph_timing(0)

//     setTimeout(graph_h1, 10000)
// }

// graph_h1();
// // graph_h6();
// // graph_h24();


// function graph_h6(){

//     // clear_graph();
//     graph_timing(1)

//     setTimeout(graph_h6, 15000)
// }

// function graph_h24(){
//     graph_timing(2)

//     setTimeout(graph_h24, 20000)
// }


// function displayChart(){

// }

// this function is used to generate data by taking in data which is generated with time from #data# at line 5. 
// it is used to compare the  
 function comparePercentage(){
    let data_1 =Object.keys(data)
    let col_1 = Object.keys(collection)
    let col_2 = Object.keys(collection[col_1[0]])
    let initial = collection[col_1[0]]
    let col_ratio1 = Object.keys(collection_ratio)
    let col_ratio2 = Object.keys(collection_ratio[col_ratio1[0]])
    let r = 4;
    let m = 0;
    for(i = 1; i < col_1.length; i++){
        let collect_1 = collection[col_1[i]]
        let col_ratio_col = collection_ratio[[col_ratio1[m]]]
        
        for(j = 0; j < 4; j++){

            let collect_2 = collect_1[col_2[r]]
            let initialize = initial[col_2[r]]
           
            let z = initialize - collect_2
            
            col_ratio_col[col_ratio2[j]] = z;
            r++;
        }
        r = 4;
        m++;
    }
    m = 0;


 }

 
// a function for generating percentages 
 function generatePercentage(data_1, len_1, col_1, col_2, timer){
    let z= 4;
    for(let x = 0; x < timer.length; x++){
        let timer2 = timer[x]
        let len1 = len_1 - timer2;
        let sin = data_1.slice(len1)
        let calc1 = sin.reduce(function(total, value){
            return total + value;
        })


        col_1[col_2[z]] = calc1;
       

        z++;
    }
    
}



 function comparePercentageGeneration(){
    let data_1 = Object.keys(data);
    let data_2 = Object.keys(collection[data_1[0]])
    let initial = collection[data_1[0]]
    let col_ratio = Object.keys(collection_ratio)
    let col_ratio2 = Object.keys(collection_ratio[col_ratio[0]])
    
    
    let z = 4;
    let c = 1;
    let r = 0; 

        for(let i = 1; i < data_1.length; i++){
            let collect= collection[data_1[i]]
            let y;
            for(let j = 0; j < 4; j++){
                let initialize = initial[data_2[z]]
               let collect2 = collection_ratio[col_ratio[r]]
                y = initialize - collect[data_2[z]];
                collect2[col_ratio2[c]] = y;
                
               
            z++;
            c++
            r++
        
        }
        z = 4;
        c = 1;
        r = 0;
       
    }
 }

    


// this function is used to generate the price by updating the price at the #collection object

 function generatePriceList(){
    let obj = Object.keys(collection);
    let data_2 = Object.keys(collection[obj[0]])
    for(let i=0; i < obj.length; i++){
        let collect_1= collection[obj[i]]
        let x = data[obj[i]][data[obj[i]].length - 1]
        if(x >= 0){
            collect_1[data_2[3]] = collect_1[data_2[3]]  - (collect_1[data_2[3]] * x)
        }else{
            collect_1[data_2[3]] = collect_1[data_2[3]]  - (collect_1[data_2[3]] * (-1 * x))
            
        }
 }
 }



// generate many as the name implies is used to update the rest of the data in the 
// datas generated here are calculated before being updated to the #collection_ratio object

 function generateMany(){
    let obj = Object.keys(collection_ratio);
    let data_2 = Object.keys(collection_ratio[obj[0]])

    for(let i=0; i < obj.length; i++){
        let collect_1 = collection_ratio[obj[i]];
        let x = collect_1[data_2[0]];
        if(x >= 0){
            collect_1[data_2[5]] = collect_1[data_2[5]]  + (collect_1[data_2[5]] * x)
            collect_1[data_2[6]] = collect_1[data_2[6]]  + (collect_1[data_2[6]] * x)
            collect_1[data_2[7]] = collect_1[data_2[7]]  + (collect_1[data_2[7]] * x)
            collect_1[data_2[8]] = collect_1[data_2[8]]  + (collect_1[data_2[8]] * x)
            collect_1[data_2[9]] = collect_1[data_2[9]]  + (collect_1[data_2[9]] * x)
            collect_1[data_2[10]] = collect_1[data_2[10]] + (collect_1[data_2[10]] * x)
        }else{
            collect_1[data_2[5]] = collect_1[data_2[5]]  - (collect_1[data_2[5]] * (-1 * x))
            collect_1[data_2[6]] = collect_1[data_2[6]]  - (collect_1[data_2[6]] * (-1 * x))
            collect_1[data_2[7]] = collect_1[data_2[7]]  - (collect_1[data_2[7]] * (-1 * x))
            collect_1[data_2[8]] = collect_1[data_2[8]]  - (collect_1[data_2[8]] * (-1 * x))
            collect_1[data_2[9]] = collect_1[data_2[9]]  - (collect_1[data_2[9]] * (-1 * x))
            collect_1[data_2[10]] = collect_1[data_2[10]]  - (collect_1[data_2[10]] * (-1 * x))
            
        }

 }
 }



    function loopingData(){

        let data_obj1 = Object.keys(data);
        let col_obj1 = Object.keys(collection)
        let col_obj3 = Object.keys(collection[col_obj1[0]])
        // let collect = collection[obj2[0]]
    
        // // 
        // let x = 0;
        // for (let i = 0; i < obj2.length; i++){
        x = 0
        z = 4
        col1 = timer[x]
        for(let i = 0; i < data_obj1.length; i++){
            let collect = collection[col_obj1[i]]
            let len = data[data_obj1[i]].length;
            let dats = data[data_obj1[i]]
        
        generatePercentage(dats, len, collect, col_obj3, timer);
    
  
                x++
                
            }
            
        }    



function dataGeneration(){
    
    let select = [0.01, 0.02, 0, 0.03, 0.01, 0, 0,  -0.01, -0.02, 0,  -0.03, -0.01, 0.01 ]
    
    let obj = Object.keys(data);
    for(i = 0; i < obj.length; i++){
    let random_number = Math.floor(Math.random() * select.length)
    let choose = select[random_number]
    data[obj[i]].push(choose);
   
    

    }


    
    // setTimeout(dataGeneration, 5000)
}


function replay(){
    dataGeneration()
        loopingData()
            generatePriceList()
            generateMany();
            comparePercentage();
            clearFunction();
            displayTemplate();
            colorPainting();
            colorPainting1();
        
            // generateGraphData();
            setTimeout(replay, 5000);
    }


replay()

function clearFunction(){
    document.querySelector('.general-body-container').innerHTML = '';
}


// for the first table in the homepage the data are generated dynamically so its passed 
// through here in the javascript to make it dynamic, datas are given to the html and passed 

function displayTemplate(){
    let col_obj = Object.keys(collection)
 let col_obj2 = Object.keys(collection[col_obj[0]])
 let row_obj = Object.keys(collection_ratio)
 let row_obj2 = Object.keys(collection_ratio[row_obj[0]])



let name = ['BTC', 'USDT', 'ETH', 'DAI']

let q = 0
for(let i = 0; i < row_obj.length; i++){
    
    let obj1 = collection[col_obj[i]]
    let obj2 = collection_ratio[row_obj[i]]
    let obj2_img = obj2[row_obj2[4]]
    let obj3 = collection[col_obj[i]]
    let html, newHtml

html = `<tr class="clip"><td  class="fixed"><span class="buton">#%id%</span>
<span class="circle"><img src="img/venom1.jpg" alt=""></span>
<span class="circle"><img src=%image% alt=""></span>
<span class="base">VENOM</span>/<span class="pair">%pair%</span>
</td><td>%price%</td><td>%txns%</td><td>%volume%</td><td>%makers%</td>
<td class="paint">%m5%</td><td class="paint">%h1%</td><td class="paint">%h6%</td>
<td class="paint">%h24%</td><td>%liquidity%</td><td>%fdv%</td>
</tr>`

newHtml = html.replace('%id%', (i+1));
newHtml = newHtml.replace('%image%', obj2_img );
newHtml = newHtml.replace('%price%',formatNumber(obj2[row_obj2[5]]));
newHtml = newHtml.replace('%txns%', formatNumber(obj2[row_obj2[6]]));
newHtml = newHtml.replace('%venom%', obj3[col_obj2[0]]);
newHtml = newHtml.replace('%pair%', name[i]);
newHtml = newHtml.replace('%volume%', formatNumber(obj2[row_obj2[7]]));
newHtml = newHtml.replace('%makers%',formatNumber(obj2[row_obj2[8]]));
newHtml = newHtml.replace('%liquidity%', formatNumber(obj2[row_obj2[9]]));
newHtml = newHtml.replace('%fdv%', formatNumber(obj2[row_obj2[10]]));
newHtml = newHtml.replace('%m5%', obj2[row_obj2[0]].toFixed(2));
newHtml = newHtml.replace('%h1%',obj2[row_obj2[1]].toFixed(2));
newHtml = newHtml.replace('%h6%', obj2[row_obj2[2]].toFixed(2));
newHtml = newHtml.replace('%h24%', obj2[row_obj2[3]].toFixed(2));

document.querySelector(".general-body-container").insertAdjacentHTML('beforeend', newHtml);

const elements = document.querySelectorAll('.clip');

// to iterate over group of class ad adding an event listener to them
// after generrating the html files, cause without adding those event click back on them 
// it wont function properly 
elements.forEach((element, index) => {
  element.addEventListener('click', function() {
    console.log('Button clicked!');
    displayTemplate1(index)
    openNav();
  });
});


}



}


// to change the color due to the postive and negative sign it carries
// hereby cutting out part of the string to get the first index
// and painting it due to the first index output 

function colorPainting(){
    let x = document.querySelectorAll('.paint');;
    let fieldsArr = Array.prototype.slice.call(x);
    fieldsArr.forEach(function(value){
        let y = value.textContent 
        let z = y.substr(0,1)
        if(z === '-'){
            value.style.color = 'red';
        }else{
            value.style.color = 'green';
        }
    })
}

function colorPainting1(){
    let x = document.querySelectorAll('.paint1');;
    let fieldsArr = Array.prototype.slice.call(x);
    fieldsArr.forEach(function(value){
        let y = value.textContent 
        let z = y.substr(0,1)
        if(z === '-'){
            value.style.color = 'red';
        }else{
            value.style.color = 'green';
        }
    })
}


//next project 

// this is the random generated transaction process where the data are gotten from 
// and is transferred to somewhere else and also display the latest data at the top
// this function holds both the data and the html files 

function transactionProcessing(){
    let transaction = {
        buy: [{usd: 3.78, weth: 0.002024, usdc: 3.78, price: '$1,863.49', maker: "B2Af5b", txn: "379cl3"}, 
        {usd: 3.18, weth: 0.0024, usdc: 3578, price: '$1,863.49', maker: "B2gf5b", txn: "129cl3"}, 
        {usd: 3.28, weth: 0.01024, usdc: 2.78, price: '$163.49', maker: "B3Af4b", txn: "383cl3"}, 
        {usd: 3.38, weth: 0.004, usdc: 3.78, price: '$143.49', maker: "c3Af5b", txn: "379c93"}, 
        {usd: 2.78, weth: 0.014, usdc: 3.78, price: '$12.49', maker: "4uAf5b", txn: "319e43"}, 
        {usd: 4.78, weth: 0.0025, usdc: 3.78, price: '$15.49', maker: "g2Af5b", txn: "229cl3"}, 
        {usd: 5.78, weth: 0.24, usdc: 3.78, price: '$140.49', maker: "f2Af3b", txn: "119cl3"}, 
        {usd: 3.67, weth: 0.024, usdc: 3.78, price: '$63.49', maker: "c78f5b", txn: "309cl3"}, 
        {usd: 3.00, weth: 0.0024, usdc: 3.78, price: '$3.49', maker: "g5Af5b", txn: "979cl3"}],
    
        sell: [{usd: 3.78, weth: 0.002024, usdc: 3.78, price: '$1,863.49', maker: "B2Af5b", txn: "379cl3"}, 
        {usd: 3.18, weth: 0.0024, usdc: 3578, price: '$1,863.49', maker: "B2gf5b", txn: "129cl3"}, 
        {usd: 3.28, weth: 0.01024, usdc: 2.78, price: '$163.49', maker: "B3Af4b", txn: "383cl3"}, 
        {usd: 3.38, weth: 0.004, usdc: 3.78, price: '$143.49', maker: "c3Af5b", txn: "379c93"}, 
        {usd: 2.78, weth: 0.014, usdc: 3.78, price: '$12.49', maker: "4uAf5b", txn: "319e43"}, 
        {usd: 4.78, weth: 0.0025, usdc: 3.78, price: '$15.49', maker: "g2Af5b", txn: "229cl3"}, 
        {usd: 5.78, weth: 0.24, usdc: 3.78, price: '$140.49', maker: "f2Af3b", txn: "119cl3"}, 
        {usd: 3.67, weth: 0.024, usdc: 3.78, price: '$63.49', maker: "c78f5b", txn: "309cl3"}, 
        {usd: 3.70, weth: 0.002024, usdc: 3.78, price: '$1,863.49', maker: "B2Af5b", txn: "379cl3"}, 
            ]
    }
    
    
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let d = new Date()
    let time = d.getHours()+' : ' + d.getMinutes() + ' : ' + d.getSeconds();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let month_date = month + ' ' + date + ', '  + time;
    //random number
    let rand_for = Math.floor(Math.random() * 4)
    let col = ['buy', 'sell']
    for(let i = 0; i < rand_for; i++){
        //what is goin on here
        let rand = Math.floor(Math.random() * 2)
    let rand2 = Math.floor(Math.random() * 9)
    
  
    
    
    //transaction keys 
    let trans_all = Object.keys(transaction)
    let trans_choose = transaction[trans_all[rand]]
    let trans_choose2 = trans_choose[rand2]
    // let data_trans1 = Object.keys(trans_choose2[0])
    // console.log(trans_choose2)
   
    
    const {usd,  weth, usdc, price, maker, txn} = trans_choose2;
    let html, newHtml 
    if(col[rand] === 'buy'){
        html = `<tr class="buy">
        <td  class="fixed">%date%</td>
        <td>Buy</td>
        <td>%usd%</td>
        <td>%weth%</td>
        <td>%usdc%</td>
        <td>%price%</td>
        <td>%maker%</td>
        <td>%txn%</td>
        
      </tr>`
    }else if(col[rand] === 'sell'){
        html = `<tr class="sell">
        <td  class="fixed color1">%date%</td>

        <td>Sell</td>
        <td>%usd%</td>
        <td>%weth%</td>
        <td>%usdc%</td>
        <td>%price%</td>
        <td>%maker%</td>
        <td>%txn%</td>
        
      </tr>`
    }
    
    newHtml = html.replace('%usd%', usd);
    newHtml = newHtml.replace('%weth%', weth);
    newHtml = newHtml.replace('%usdc%', usdc);
    newHtml = newHtml.replace('%price%', price);
    newHtml = newHtml.replace('%maker%', maker);
    newHtml = newHtml.replace('%txn%', txn);
    newHtml = newHtml.replace('%date%', month_date);
    
    
    document.querySelector('.table_body').insertAdjacentHTML('afterbegin', newHtml);
    document.querySelector('.table_body1').insertAdjacentHTML('afterbegin', newHtml);
    
    
    }

    setTimeout(transactionProcessing, 2000);
    
}


// the number formatting here is to to shorting the length of the data 
// by using M for millions and K for thousand

function formatNumber(num) {
    var numSplit, int;
    /*
        + or - before number
        exactly 2 decimal points
        comma separating the thousands

        2310.4567 -> + 2,310.46
        2000 -> + 2,000.00
        */

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');

    int = numSplit[0];
    if (int.length > 6){ 
        int = int.substr(0, int.length - 6) + '.' + int.substr(int.length - 6, 1) + 'M'; //input 23510, output 23,510
    }else if(int.length > 3){
        int = int.substr(0, int.length - 3) + '.' + int.substr(int.length - 3, 1) + 'K'; //input 23510, output 23,510
    }

    return int;

};


// this number formatting is used to remove the decimal place
// only returning the whole number

function formatNumber2(num) {
    var numSplit, int;
    /*
        + or - before number
        exactly 2 decimal points
        comma separating the thousands

        2310.4567 -> + 2,310.46
        2000 -> + 2,000.00
        */

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');

    int = numSplit[0];

    return int;

};





transactionProcessing()


// this is use to display the dynamic template after click on the pair at the right hand side 
// this is generated to give us details of what is going on in the pair of coins


function displayTemplate1(num){
    // document.querySelector('#overlay').classList.add('active');

 let row_obj = Object.keys(collection_ratio)
let collect_1 = collection_ratio[row_obj[num]]

    let {m5, h1, h6, h24, price, txns, volume, maker, liquidity, fdv, name  } = collect_1;




html = `<div class="minor_container">
<div class="small_nav"><span class="testing">VENOM</span><span onclick="closeNav()"><i class="fa-solid fa-xmark"></i></span>
</div><div class="small_header">VENOM / %pair%</div>
<div class="small_content"><div class="flex_it"> <div class="flex1"><span class="small">PRICE USD</span><span class="big">%price%</span>
</div><div class="flex1"><span class="small">PRICE </span><span class="big">%price2%</span>
</div></div><div class="flex_it"><div class="flex2"><span class="small">LIQUIDITY</span><span class="big">%liquidity%</span></div>
<div class="flex2"><span class="small">FDV</span><span class="big">%fdv%</span></div>
<div class="flex2"><span class="small">MKT CAP</span><span class="big">40.8M</span>
</div></div><div class="flex_it">
<div class="flex3"><span class="small">M5</span><span class="big paint1">%m5%</span>
</div><div class="flex3"><span class="small">H1</span><span class="big paint1">%h1%</span>
</div><div class="flex3"><span class="small">H6</span><span class="big paint1">%h6%</span>
</div><div class="flex3"><span class="small">H24</span><span class="bi paint1">%h24%</span>
</div></div> <div class="group_cont">
<div class="group_cont1 gp_flex"><div class="flex_low"><span class="small">TXNS</span>
<span class="big">%txns%</span></div><div class="flex_low"><span class="small">VOLUME</span><span
class="big">%volume%</span></div> <div class="flex_low"><span class="small">MAKERS</span><span class="big">%makers%</span></div>
</div>
<div class="group_cont2 flex_low">
<div class="buy_sell">
<div class="flex_it buy-col" style="padding: 0;"><span class="small">BUYS</span><span class="small">SELLS</span></div>
<div class="flex_it buy-col" style="padding: 0;"><span class="big">$20M</span><span class="big">$10M</span></div>
<div class="progressive"><span class="pro1"></span><span class="pro2"></span></div>
</div>
<div class="buy_sell">
<div class="flex_it buy-col" style="padding: 0;"><span class="small">BUY VOL</span><span class="small">SELLS VOL</span></div>
<div class="flex_it buy-col" style="padding: 0;"><span class="big">$20M</span><span class="big">$10M</span></div>
<div class="progressive"><span class="pro1"></span><span class="pro2"></span></div>
</div>
<div class="buy_sell">
<div class="flex_it buy-col" style="padding: 0;"><span class="small">BUYERS</span><span class="small">SELLERS</span></div>
<div class="flex_it buy-col" style="padding: 0;"><span class="big">$20M</span><span class="big">$10M</span></div>
<div class="progressive"><span class="pro1"></span><span class="pro2"></span></div>
</div>
    
</div>

</div> </div></div> <div class="trade_btn">Trade on VenomSwap</div>`



// newHtml = html.replace('%image%', obj2_img );
newHtml = html.replace('%price%',formatNumber(price));
newHtml = newHtml.replace('%price2%',formatNumber(price));
newHtml = newHtml.replace('%txns%', formatNumber(txns));
newHtml = newHtml.replace('%pair%', name);
newHtml = newHtml.replace('%volume%', formatNumber(volume));
newHtml = newHtml.replace('%makers%',formatNumber(maker));
newHtml = newHtml.replace('%liquidity%', formatNumber(liquidity));
newHtml = newHtml.replace('%fdv%', formatNumber(fdv));
newHtml = newHtml.replace('%m5%', m5.toFixed(2));
newHtml = newHtml.replace('%h1%',h1.toFixed(2));
newHtml = newHtml.replace('%h6%', h6.toFixed(2));
newHtml = newHtml.replace('%h24%', h24.toFixed(2));

document.querySelector(".minor").innerHTML = "";

document.querySelector(".minor").insertAdjacentHTML('beforeend', newHtml);


    setTimeout(displayTemplate1, 5000)


}


// close the overlay where the details of the pair is stored
function closeNav(){
    clearTimeout(displayTemplate1(0));
    document.querySelector('#overlay').classList.remove('active');

}

// open the overlay where the details of the pair is stored

function openNav(){
    document.querySelector('#overlay').classList.add('active');

}


// to toggle navbar by the right 
function toggleNav(){
    console.log('you have just clicked me')
    document.getElementById('side_bar').classList.toggle('active');
    document.getElementById('home_container').classList.toggle('active');
}


// use to control the navbar at the right hand side 
function handleScreenSizeChange() {
    if (window.matchMedia('(max-width: 600px)').matches) {
        document.getElementById('side_bar').classList.remove('active');
        document.getElementById('home_container').classList.remove('active');
        document.getElementById('side_bar').classList.add('active');
        document.getElementById('home_container').classList.add('active');
    } else{

    }
  }

  // Add event listener to detect changes in screen size
  window.addEventListener('resize', handleScreenSizeChange);

  // Initial check of screen size on page load
  handleScreenSizeChange();