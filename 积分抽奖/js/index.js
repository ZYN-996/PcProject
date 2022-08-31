/* 
1: 定义抽奖次数渲染
  1-1 获取DOM元素
  1-2 定义剩余的抽奖次数
2: 点击抽奖按钮,实现滚动抽奖效果(复杂度高)
  2-1 获取点击按钮 ,绑定点击事件
  2-2 为每一个list选项添加类名,实现高亮状态
  2-3 定义当前高亮的列表项索引值
  2-4 使用定时器实现滚动效果
  2-5 使用随机数定义停止条件
3: 弹窗处理 
  3-1 打开弹窗.显示中奖信息(处理未中奖时的弹窗提示内容)
  3-2 打开弹窗的同时,减少剩余的抽奖次数
  3-3 关闭按钮的事件绑定
  3-4 再来一次按钮事件绑定 
4:  定义runGame函数
5: timer定时器bug修复
 */
(function () {
  function randomNumber() {
    return Math.floor(Math.random() * 2000 + 1000);
  }
  //获取元素
  var number = 5;
  var prize_number = document.querySelector(".prize-number");
  var startButton = document.querySelector(".handler-container-btn");
  var prize_lists = document.querySelectorAll(".prize-list");
  var dialog_container = document.querySelector(".dialog-container");
  var closeded = document.querySelector(".close");
  var content = document.querySelector(".content");
  var onceMore = document.querySelector(".button");
  var index = -1;
  var newIndex = null;
  var timerIn;

  function onClickStartDraw() {
    runGame();
  }
  //弹出抽奖信息
  function openMessage() {
    // console.log(newIndex);
    prize_number.innerHTML = number;
    dialog_container.style.display = "block";
    if (newIndex === 4) {
      content.innerHTML = "很遗憾，再来一次吧";
    } else {
      content.innerHTML = prize_lists[newIndex].innerHTML;
    }
    if (number === 0) {
      onceMore.innerHTML = "确定";
    }
  }

  //运行
  var runGame = function () {
    if (number === 0 || timerIn) {
      return;
    }
    --number;
    var times = randomNumber();
    // var times = 400;

    //添加一个定时器
    timerIn = setInterval(function () {
      times -= 50;
      if (times < 100) {
        clearInterval(timerIn);
        //弹出抽奖信息
        timerIn = null;
        openMessage();
        return;
      }
      newIndex = ++index % prize_lists.length;

      prize_lists.forEach(function (item) {
        item.classList.remove("active");
      });
      prize_lists[newIndex].classList.add("active");
    }, 50);
  };
  //程序入口
  function init() {
    prize_number.innerHTML = number;
    initEvent();
  }

  //注册事件入口
  function initEvent() {
    //开始抽奖点击事件
    startButton.addEventListener("click", onClickStartDraw);
    //关闭按钮事件
    closeded.onclick = function () {
      dialog_container.style.display = "none";
    };
    //再来一次点击事件
    onceMore.onclick = function () {
      dialog_container.style.display = "none";

      runGame();
    };
  }
  init();
})();
