<template>
  <div class="collection">
    <div class="section" v-for="cate in category">
      <h3>{{cate}}</h3>
      <div
        class="itemwrap"
        v-for="(item,index) in collectionItem"
        :key="index"
        v-if="item.Category == cate"
      >
        <div id class="listItem">
          <div
            class="image"
            style="background-size:cover;"
            :style="{background: 'url('+getImg(item.Img)+')center top'}"
          ></div>
          <h3>{{item.Title}}</h3>
          <p>
            使用技術:
            <br />
            <span>{{item.SkillTag.join(", ")}}</span>
          </p>
          <p>
            練習技能:
            <br />
            <span>{{item.PracticeTag}}</span>
          </p>
          <div>
            <a target="_blank" :href="item.Demo">DEMO</a>
            <a target="_blank" :href="item.Design">Design</a>
            <a target="_blank" :href="item.Github">Github</a>
          </div>
        </div>
        <div class="contentbg"></div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../../static/CollectionList.json";

export default {
  data() {
    return {
      collectionItem: [],
      category: ["F2E", "III", "Others"]
    };
  },
  methods: {
    getCollections() {
      this.collectionItem = json;
    },
    getImg(img) {
      return require(`../assets/${img}`);
    }
  },
  created() {
    this.getCollections();
  }
};
</script>