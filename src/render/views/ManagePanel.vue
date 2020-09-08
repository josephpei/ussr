<template>
  <AppView name="panel" class="bg-primary px-2 py-2" row>
    <SsrNodes></SsrNodes>
    <SsrFrom class="flex-1 mx-1"></SsrFrom>
    <SsrGroup v-show="editingGroup.show && editingGroup.title" class="flex-1 ml-1"></SsrGroup>
    <SsrQrcode v-show="!editingGroup.show"></SsrQrcode>
    <div v-show="editingGroup.show && !editingGroup.title" class="flex-1"></div>
  </AppView>
</template>

<script>
import { mapState } from 'vuex'
import SsrNodes from './panel/SsrNodes'
import SsrFrom from './panel/SsrForm'
import SsrGroup from './panel/SsrGroup'
import SsrQrcode from './panel/SsrQrcode'

export default {
  name: 'ManagePanel',
  components: { SsrNodes, SsrFrom, SsrGroup, SsrQrcode },
  computed: {
    ...mapState(['editingGroup']),
  },
}
</script>

<style lang="stylus">
@import '../assets/base.styl'
</style>
