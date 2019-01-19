<template>
  <div class="index-card">
    <div class="author-desc">
      <img src="../../assets/images/logo.png">
      <div class="desc-nav">
        <p class="desc ftz15 padl15">捡到一颗白矮星</p>
        <p class="desc ftz12 padl15 mrt4">听完这首歌,世界这么大,我想去看看，一起？</p>
      </div>
    </div>
    <div class="author-desc mrt10">
      <img src="../../assets/images/square-mini.png">
      <div class="desc-nav">
        <p class="desc ftz15 padl15">听完这首歌</p>
        <p class="desc ftz12 padl15 mrt4">如有相关反馈,扫描二维码加我微信,非诚勿扰!!!</p>
      </div>
    </div>
    <div class="author-desc mrt10">
      <img src="../../assets/images/square-mini.png">
      <div class="desc-nav">
        <p class="desc ftz15 padl15">请喝杯咖啡</p>
        <p class="desc ftz12 padl15 mrt4">码字不易,且行且珍惜,请喝杯咖啡赞赏一下!!!</p>
      </div>
    </div>
    <div class="article-card mrt10">
      <div class="desc-nav">
        <p class="desc ftz12">&nbsp;&nbsp;&nbsp;&nbsp;“春天的原野里，你一个人正走着，对面走来一只可爱的小熊，浑身的毛活像天鹅绒，眼睛圆鼓鼓的。它这么对你说道：‘你好，小姐，和我一块儿打滚玩好么？’接着，你就和小熊抱在一起，顺着长满三叶草的山坡咕噜咕噜滚下去，整整玩了一大天。你说棒不棒？““太棒了。”“我就这么喜欢你。”</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';
.index-card {
  .author-square {
    img {
      width: 100%;
      height: 200px;
    }
  }
  .author-desc {
    padding: 10px;
    display: flex;
    flex-flow: row;
    text-align: center;
    background-color: #fff;
    img {
      display: inline-block;
      width: 60px;
      height: 60px;
    }
    .desc-nav {
      flex: 1;
      p {
        text-align: left;
      }
      p:first-child {
        font-weight: 500;
        color: #555858;
      }
      p:last-child {
        color: #84827d;
        height: 36px;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 16px;
      }
    }
  }
  .article-card {
    padding: 10px;
    display: flex;
    flex-flow: row;
    text-align: center;
    background-color: #fff;
    .desc-nav {
      flex: 1;
      p {
        text-align: left;
      }
      p:last-child {
        color: #84827d;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 16px;
      }
    }
  }
}
</style>
