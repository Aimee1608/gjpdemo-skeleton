<template>
  <div class="block">
    <span class="demonstration">起始日期时刻为 12:00:00</span>
    <el-date-picker
      v-model="value6"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00']">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      value6: '',
      value7: ''
    }
  }
}
</script>
