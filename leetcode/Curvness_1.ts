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