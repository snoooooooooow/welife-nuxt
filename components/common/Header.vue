<template>
  <div class="header">
    <div class="menu-container">
      <img
        class="logo"
        src="../../assets/images/logo.png">
      <ul>
        <li>
          <a>博客</a>
        </li>
        <li>
          <a>美文</a>
        </li>
        <li>
          <a class="active">笔记</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  created() {
    console.log(this.$route, 'xx')
  },
  methods: {
    back() {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
@import '../../assets/css/variables.scss';
div.header {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #f1f1f1;
  .menu-container {
    margin: 0 auto;
    height: 100%;
    padding-left: 70px;
    position: relative;
    img.logo {
      position: absolute;
      top: 10px;
      left: 20px;
    }
    ul {
      li {
        float: left;
        list-style: none;
        a {
          padding: 21px 15px;
          line-height: 60px;
          color: #7a7f84;
        }
        a:hover {
          color: #405248;
        }
        a.active {
          color: $primary-color;
        }
        a.active:hover {
          color: $primary-color;
        }
      }
    }
  }
}
@media screen and (min-width: 980px) {
  div.header {
    .menu-container {
      width: 980px;
    }
  }
}
</style>
