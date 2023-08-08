import { defineConfig } from 'dumi';

export default defineConfig({
  // 网站标题名
  title: 'succinct-ui',
  // 网站标题旁边图片
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // 页面上展示的logo的图片
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // 打包发布上线的 文件包名字
  outputPath: 'docs-dist',
  // 配置导航条模式 // 默认纵向，
  mode: 'site',
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: ['autoFocus', 'form', 'formAction', 'formEncType', 'title'],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: false,
    },
  },
  history: {
    type: 'hash',
  },
  // 导航
  navs: [
    {
      title: '指南',
      path: '/zhinan'
    },
    {
      title: '组件',
      path: '/components'
    },
    {
      title: '作者',
      children: [
        {
          title: '码云地址',
          path: 'https://gitee.com/guobeibei666/component-library/tree/react-succinct-ui/'
        }, {
          title: 'Github地址',
          path: 'https://github.com/guobeibei123/succinct-ui'
        }
      ]
    }
  ]
});
