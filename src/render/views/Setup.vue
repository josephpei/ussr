<template>
  <AppView name="setup" class="px-2">
    <div class="flex flex-column flex-ai-center w-100">
      <div class="flex flex-ai-center w-100">
        <div class="flex-1 flex flex-ai-center flex-jc-end">
          <Checkbox v-model="sysSSR" @on-change="useSysSSR">使用内置ssr-local</Checkbox>
        </div>
        <span class="mx-2">OR</span>
        <div class="flex-1 flex flex-ai-center">
          <Form ref="form" class="flex-1" :model="form" :rules="rules" inline>
            <FormItem prop="ssrPath" style="margin-bottom:0">
              <Button type="primary" class="w-6r" @click="selectPath">手动选择</Button>
              <Input v-model="form.ssrPath" readonly placeholder="所选目录下需有ssr-local文件" style="width:180px" />
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  </AppView>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { openDialog } from '../ipc'
import { isSSRPathAvaliable } from '../../shared/utils'

export default {
  data () {
    return {
      sysSSR: false,
      form: {
        ssrPath: '',
      },
      rules: {
        ssrPath: [
          { required: true, message: '请选择shadowsocks目录' },
          {
            validator: (rule, value, callback) => {
              if (isSSRPathAvaliable(value)) {
                callback()
              } else {
                callback('该目录不正确，请重新选择')
              }
            },
          },
        ],
      },
    }
  },
  computed: {
    ...mapState(['meta']),
  },
  methods: {
    ...mapMutations(['updateConfig']),
    useSysSSR (v) {
      if (v) {
        this.setup('builtin')
      }
    },
    // 选择目录
    selectPath () {
      this.manualDownload = false
      const ret = openDialog({
        properties: ['openDirectory'],
      })
      if (ret.filePaths && ret.filePaths.length) {
        this.form.ssrPath = ret.filePaths[0]
        this.$refs.form.validate(valid => {
          if (valid) {
            this.setup()
          }
        })
      }
    },
    // 完成初始化
    setup (ssrPath) {
      this.updateConfig([{ ssrPath: ssrPath || this.form.ssrPath }, true])
      this.$emit('finished')
    },
  },
  created () {
    if (this.autoDownload) {
      this.autoStart()
    }
  },
}
</script>
<style lang="stylus">
@import '../assets/styles/variable'

.view-setup
  .ivu-spin-dot
    width 48px
    height @width
</style>
