module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'Transformer',
    link: '/Transformer/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  },
  {
    text: '提示词工程',
    link: '/promptEngineer/',
    items: [
      // { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      // { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      // { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      // { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: '提示词工程',
    link: '/technology/',
  },
  {
    text: 'RAG',
    link: '/RAG/',
  },
  {
    text: 'LangChain',
    link: '/LangChain/',
  },
  {
    text: 'Agent',
    link: '/Agent/',
  },
  {
    text: '微调',
    link: '/Fine-tuning/',
  },
  {
    text: '多模态',
    link: '/Multimodal/',
  },
  {
    text: '私有化部署',
    link: '/PrivateDeploy/',
  },
];