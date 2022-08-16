<template>
  <div class="header">
    <!-- logo区域 -->
    <div class="logo">
      <h1><a title="稀土掘金" href="#">稀土掘金</a></h1>
    </div>
    <!-- 导航栏区域 -->
    <nav class="nav">
      <ul class="nav-item">
        <li><a href="#">首页</a></li>
        <li><a href="#">沸点</a></li>
        <li><a href="#"> 课程 </a></li>
        <li><a href="#">直播</a></li>
        <li><a href="#">资讯</a></li>
        <li><a href="#">活动</a></li>

        <nav class="commity"><a href="#">开放社区</a></nav>
        <nav><a href="#">商城</a></nav>
        <nav><a href="#">APP</a></nav>
        <nav><a href="#">插件</a></nav>

        <!-- search搜索模块 -->
        <div class="search">
          <input type="search" name="" id="" placeholder="探索稀土掘金" />
          <div class="search-bottom"><img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg" alt="搜索"></div>
        </div>
      </ul>
    </nav>
    <nav class="right-nav">
      <div class="add-group">
        <button class="add-btn">创作者中心</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #515767;
}
li {
  list-style: none;
}
button {
    /* 鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}
button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    /* 默认有灰色边框我们需要手动去掉 */
    border: 0; 
    outline: none;
}
.header {
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 60px;
  max-width: 1440px;
  background-color: pink;
  border-bottom: 1px solid #f1f1f1;
}
.header .logo a {
  display: block;
  margin-left: 24px;
  margin-right: 12px;
  width: 107px;
  height: 22px;
  font-size: 0;
  background: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg)
    no-repeat;
  background-size: 100%;
}
.header .nav .nav-item {
  display: flex;
  align-items: center;
}
.header .nav .nav-item li {
  display: block;
  display: flex;
  height: 60px;
  line-height: 60px;
  margin: 0 12px;
  font-size: 14px;
}
.header .nav .nav-item li:hover {
  color: #515767;
  border-bottom: 2px solid #1e80ff;
}
.header .nav .nav-item nav {
  display: block;
  display: flex;
  height: 60px;
  line-height: 60px;
  margin: 0 12px;
  font-size: 14px;
}
.header .nav .nav-item .commity a::after {
  content: "";
  display: inline-block;
  position: relative;
  background-size: 8.5px 5px;
  height: 5px;
  width: 8.5px;
  background-color: #fff;
  top: -3px;
  background-image: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e700f44c0c9ddafb97f655043d1c135a.svg);
}
.header .nav .nav-item .commity a:hover::after {
  content: "";
  display: inline-block;
  position: relative;
  background-size: 8.5px 5px;
  height: 5px;
  width: 8.5px;
  background-color: #fff;
  top: -3px;
  background-image: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/dad01615c8290b337ce7fa9e332038ad.svg);
}
.header .nav .nav-item .commity a:hover {
  color: #1e80ff;
}
.header .nav .nav-item .search{
  display: flex;
  align-items: center;
  width: 180px;
  height: 34px;
  margin-right: 15px;
  border: 1px solid #8a919f;
}
.header .nav .nav-item .search input{
  width: calc(100% - 44px);
  height: 31px;
  padding: 7.2px 0  7.2px 12px;
  font-size: 13px;
  background-color: transparent;
  color: #8a919f;
}
.header .nav .nav-item .search div {
    position: relative;
    left: -2px;
    width: 44px;
    height: 30px;
    background: #f2f3f5;
    border-radius: 2px;
}
.header .nav .nav-item .search div img{
    display: inline-block;
    width: 15.958px;
    padding: 0 1px 0 0;
    cursor: pointer;
    margin: 7px 15px;
}
.header .right-nav .add-group {
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 5px;
    height: 36px;
    cursor: pointer;
    width: 115px;
    height: 3rem;
    background-color: #fff;
}
.header .right-nav .add-group .add-btn {
    padding: 0 12px;
    font-size: 15px;
    color: #fff;
    border-top-left-radius:2px ;
    border-bottom-left-radius:2px ;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    white-space: nowrap;
}
</style>>
