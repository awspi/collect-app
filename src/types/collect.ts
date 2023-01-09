
export interface Collect{
  id:number
  title:string,
  description:string,
  create_time:string,
  end_time:string,
  upload_type:'pic'|'file',
  visibility:boolean,
  creator:string,
  current:0|1|2, //0发布 1进行中 2结束
  finish_num:number,
  class:string[],
}
