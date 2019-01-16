<template>
  <div class="header">
    <div class="menu-container">
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
  .menu-container {
    margin: 0 auto;
    height: 100%;
    ul {
      li {
        float: left;
        list-style: none;
        a {
          padding: 30px 15px;
          line-height: 60px;
        }
        a.active {
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
