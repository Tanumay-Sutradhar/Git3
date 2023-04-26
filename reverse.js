let obj={
  arr:["hii","bye","shy","kay"],
  reverse:function(){
    let ouput=[]
    for(let i=0;i<this.arr.length;i++){
      let reverse=""
      for(let j=this.arr[i]-1;j>=0;j--){
        reverse+=this.arr[i][j]
        output.push(reverse)
      }
    }
  }
  console.log(output)
}

obj.reverse()