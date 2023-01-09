
export interface Task{
  title:string,
  creator:string,
  current:0|1|2,
  end_time:string,
  status:'finish'|'error'|'process'|'wait',
}
