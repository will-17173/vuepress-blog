# 三星手机的 Select 点击后不消失的解决

三星手机的 Select 控件比其它手机多了一行`上一步`，`下一步`, `完成`按钮，当切换选项时，change 事件发出，但是并不会消失，只能点完成或者空白处关闭，非常讨厌。  
没找到特别完美的解决方案，只能暂时用重新渲染的方法解决了。

```
<select v-model="value" @change="onChange" v-if="showSelect">
  <option value="1>
  1
  </option>
  <option value="2>
  2
  </option>
</select>

<script>
  new Vue({
    data(){
      return {
        showSelect: true,
        value: 1
      }
    },
    methods: {
      onChange(e){
        this.value = e.target.value
        this.showSelect = false
        this.$next(() => {
          this.showSelect = true
        })
      }
    }
  })
</script>
```
