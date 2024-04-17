interface edgeState {
  incre: boolean,//下一步是否需要增加曲度
  curv: number,//当前曲度
}

interface edgeHashKey {
  key: string,
  dirc: number//当前方向是否和规定正向相同
}

interface OriginLinks{
  source:string,
  target:string
}

// 获取方向
function getEdgeHashKey(inV: string, outV: string): edgeHashKey {
    let res: edgeHashKey =
    {
      key: "",
      dirc: 1,
    }
  
    let VertexArray = [inV, outV].sort();
    res.key = VertexArray.toString();
    if (inV == VertexArray[0]) {
      res.dirc = -1;
    }
  
    return res;
}

let totallinksData = [];
let showLinkList = [];
let hashMap = new Map<string, edgeState>();

for (var k = 0; k < totallinksData.length; k++) {
  let e = totallinksData[k];
  // 获取是否为正方向
  let hashKey = this.getEdgeHashKey(e.outV, e.inV);
  let setCur: number;
  // 获取是否已有该link的节点state map
  let oldState =  hashMap.get(hashKey.key);
  // 如果已存在
  if (oldState!=undefined) {
    if (oldState.incre) {
      let cur = oldState.curv + this.curDelta;
      oldState.curv = cur;
      oldState.incre = !oldState.incre;
      setCur = cur * hashKey.dirc;
    } else {
      setCur = oldState.curv * hashKey.dirc * -1;
      oldState.incre = !oldState.incre;
    }
    showLinkList.push({
      source: e.outV,
      target: e.inV,
      value: e.label,
      id: e.id,
      lineStyle: {
        normal: {
          curveness: setCur,
        }
      }
    });
  } else {
      // 如果不存在，则新建
    showLinkList.push({
      source: e.outV,
      target: e.inV,
      value: e.label,
      id: e.id,
      lineStyle: {
        normal: {
          curveness: 0,
        }
      }
    });
    // 初始化 状态 默认曲度为0，下一步需要增长
    let state: edgeState = {
      incre: true,
      curv: 0
    }
    // 加入state map
    hashMap.set(hashKey.key, state);
  }
}