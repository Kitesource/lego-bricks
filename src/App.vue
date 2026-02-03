
<template>
  <final-page :components="testData.components" :page="testData.page"></final-page>
</template>

<script lang="ts">
/* eslint-disable vue/no-unused-components */
import { defineComponent } from 'vue'
import LText from './components/LText/LText.vue'
import LImage from './components/LImage/LImage.vue'
import LShape from './components/LShape/LShape.vue'
import FinalPage from './components/FinalPage/FinalPage.vue'
export default defineComponent({
  name: 'App',
  components: {
    LText,
    LImage,
    LShape,
    FinalPage
  },
  setup () {
    const testData = {
      page: { setting: {}, props: { width: '375px', height: '622px', backgroundImage: 'url("https://saas-trade-prod-1251981983.cos.ap-beijing.myqcloud.com/comm/resource/ad57b03d-d433-4bcc-a4db-7179537115dbbg.png")'}},
      // 页面上面一个个组件的属性
      components: [
        {id: '123', name: 'l-text', props: { text: 'hello', top: '20', left: '20px'}},
        {id: '234', name: 'l-image', props: { src: 'https://saas-trade-prod-1251981983.cos.ap-beijing.myqcloud.com/comm/resource/b3363ad6-2413-4797-879e-44443ea5ba2cimg.png', width: 100, height: 100, top: '30px', left: '100px'}},
        {id: '235', name: 'l-shape', props: { backgroundColor: 'red', top: '200px', left: '20px', width: '100px', height: '100px'}},
        // 这是一个链接
        {id: '345', name: 'l-text', props: { backgroundColor: "#1890ff", color: "#ffffff", text: "按钮内容",  width: "100px", actionType: "to", url: "http://www.baidu.com", top: '400px', left: '150px',
        }}
      ]
    }
    return {
      testData
    }
  }
})
</script>

<style>

</style>