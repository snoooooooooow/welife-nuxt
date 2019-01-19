<template>
  <section>
    <div class="container">
      <div class="main-container">
        <header class="index-header padl10 padr10 padt15 padb15">
          <nav class="nav">
            <ul class="left">
              <li class="active"><a class="ftz13">原创文章</a></li>
              <li><a class="ftz13">ERROR(BUG)</a></li>
              <li><a class="ftz13">收藏文章</a></li>
            </ul>
          </nav>
        </header>
      </div>
      <div class="card-container">
        <index-card />
      </div>
    </div>
  </section>
</template>

<script>
import IndexCard from '~/components/cardspanel/IndexCard.vue'
export default {
  layout: 'index',
  components: {
    IndexCard
  }
}
</script>

<style lang="scss">
@import '../assets/css/variables.scss';

section {
  padding-top: 40px;
  background-color: $container-bg;
}

.container {
  min-height: calc(100vh - 60px);
  display: flex;
  flex-flow: row;
  text-align: center;
  background-color: $container-bg;

  .main-container {
    background-color: #fff;
    .index-header {
      border-bottom: 1px solid #f4f4f4;
      nav {
        display: flex;
        justify-content: space-between;
        ul {
          display: flex;
          justify-content: space-between;
          line-height: 1;
        }
        ul.left {
          li {
            padding: 0 15px;
            border-right: 1px solid #eaeaea;
            font-size: 0;
            cursor: pointer;
            a {
              color: #909090;
            }
          }
          li:last-child {
            border-right: none;
          }
          li:hover {
            a {
              color: $primary-color;
            }
          }
          li.active {
            a {
              color: $primary-color;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 820px) {
  div.container {
    width: 980px;
    margin: 0 auto;

    .main-container {
      flex: 1;
      margin-right: 20px;
    }

    .card-container {
      width: 240px;
    }
  }
}
@media screen and (min-width: 820px) and (max-width: 980px) {
  div.container {
    width: 100%;
    margin: 0 auto;

    .main-container {
      flex: 1;
      margin-right: 20px;
    }

    .card-container {
      width: 240px;
    }
  }
}
@media screen and (max-width: 820px) {
  div.container {
    width: 100%;
    margin: 0 auto;

    .main-container {
      flex: 1;
      margin-right: 20px;
      margin-left: 20px;
    }

    .card-container {
      display: none;
    }
  }
}
</style>
