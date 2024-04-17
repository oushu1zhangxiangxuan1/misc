let test_data = [
    ["a", "b"],
    ["b", "a"],
    ["a", "b"],
    ["a", "b"],
    ["b", "a"],
    ["b", "a"],
    ["a", "b"],
    ["b", "a"],
    ["a", "b"],
    ["b", "a"],
    ["a", "b"],
    ["b", "a"],
    ["b", "a"],
    ["a", "b"],
    ["b", "a"],
    ["b", "a"],
];

console.log(SetCur(test_data));

function SetCur(links:any[]):any[]{
    if(links.length == 0){
        return [];
    }
    let res = [];
    let Cur = 0;
    let curLink = {};
    let l = links.pop();
    let base = links.pop();
    let incre = true;
    curLink["data"] = base;
    curLink["cur"] = Cur;
    res.push(curLink);
    while(links){
        let curLink = {};
        l = links.pop();
        curLink["data"] = l;
        let order = GetInverse(base, l);
        if (incre){
            Cur = Cur + 1;
        }
        if(order){
            curLink["cur"] = Cur;
        }else{
            curLink["cur"] = -Cur;
        }
        res.push(curLink);
        incre = !incre;
    }
    return res
}

function GetInverse(base, link){
    if(base[0]==link[0]){
        return true
    }
    return false
}