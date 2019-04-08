import Vue from 'vue'
import Skeleton from './skeleton/skeleton.vue'
import SkeletonDetail from './skeleton/skeleton-detail.vue'
import SkeletonIndex from './skeleton/skeleton-index.vue'
import SkeletonList from './skeleton/skeleton-list.vue'
export default new Vue({
  components: {
    Skeleton,
    SkeletonDetail,
    SkeletonIndex,
    SkeletonList
  },
  template: `
    <div>
      <skeleton id="skeleton1" style="display:none"/>
      <SkeletonDetail id="SkeletonDetail" style="display:none"/>
      <SkeletonIndex id="SkeletonIndex" style="display:none"/>
      <SkeletonList id="SkeletonList" style="display:none"/>
    </div>`
})
