module.exports = [
  { text: '首页', link: '/' },
  { text: '基本使用', link: '/' ,
    items: [
      {
        text: '提示词工程',
        link: '/promptEngineer/',
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
        text: 'Agent&工作流',
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
    ]
  },
  {
    text: 'projectArch',
    link: '/项目化搭建/',
  },
  {
    text: 'ProjectDesc',
    link: '/ProjectDesc/',
  },
  {
    text: '知识复盘',
    link: '/reviewKnnowledge/',
  },
  {
    text: 'HelloAgent',
    link: '/HelloAgent/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  },
];