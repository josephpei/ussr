<template>
  <AppView name="options" class="bg-white">
    <Tabs class="flex-1 w-100" :value="view.tab" @on-click="name => updateView({ tab: name })">
      <TabPane label="通用设置" name="common">
        <OptionCommon></OptionCommon>
      </TabPane>
      <TabPane label="SSR设置" name="ssr">
        <OptionSsr></OptionSsr>
      </TabPane>
      <TabPane label="订阅" name="subscribe">
        <OptionSubscribe></OptionSubscribe>
      </TabPane>
      <TabPane label="快捷键" name="shortcuts">
        <OptionShortcut></OptionShortcut>
      </TabPane>
    </Tabs>
    <div class="w-100 flex flex-jc-end px-2 py-1 border-1px-t">
      <Button class="w-6r mr-2" @click="$emit('back')">返回</Button>
      <Button class="w-6r" type="primary" @click="done">完成</Button>
    </div>
  </AppView>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { hideWindow } from '../ipc'
import OptionCommon from './option/Common'
import OptionSsr from './option/SSR'
import OptionSubscribe from './option/Subscribe'
import OptionShortcut from './option/Shortcut'

export default {
  name: 'Options',
  computed: {
    ...mapState(['view'])
  },
  components: {
    OptionCommon, OptionSsr, OptionSubscribe, OptionShortcut
  },
  methods: {
    ...mapMutations(['resetState', 'updateView']),
    done () {
      this.resetState()
      hideWindow()
    },
  },
}
</script>

<style lang="stylus">
@import '../assets/styles/variable'
.view-options
  .create-input
    width 8.75rem
  .options-container
    height calc(100vh - 102px)
  .url-input
    width 12rem
  .ivu-table
    .ivu-checkbox-wrapper
      margin-right 0
  .input-error
    .ivu-input
      border-color $color-error
      &:focus
        box-shadow 0 0 0 2px rgba($color-error, .2)
</style>
