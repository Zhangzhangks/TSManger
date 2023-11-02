import { title } from "process";

export interface Igoods {
  userid: number;
  id: number;
  title: string;
  introduce: string;
}

interface IselectData {
  title: string;
  introduce: string;
  page: number; //共几页
  pagesize: number; //每页几条
  count: number; //按钮个数
}
export class initData {
  select: IselectData = {
    title: "",
    introduce: "",
    page: 1, //共几页
    pagesize: 10, //显示几页
    count: 0, //总条数
  };
  list: Igoods[] = [];
}
