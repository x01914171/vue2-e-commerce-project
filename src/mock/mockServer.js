
import Mock from 'mockjs';  
// 引入json
//wenpack默认对外暴露：图片、json等不需要对外暴露直接引用
import banner from './banner.json';
import floor from './floor.json';

//数据
//Mock.mock(模拟地址,模拟数据);
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200,data:floor});