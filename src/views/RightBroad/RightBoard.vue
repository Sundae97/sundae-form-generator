<template>
  <div style="padding: 8px;">
    <component :is="getConfigPanelTagName(selectedItem.tag)" v-if="selectedItem != null" :options="selectedItem.options" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getConfigPanelTagName } from '@/utils/common'

export default {
  name: 'RightBoard',
  components: {
  },
  computed: {
    ...mapState(['selectedItem'])
  },
  methods: {
    getConfigPanelTagName
  }
}
</script>

<style scoped>

</style>
