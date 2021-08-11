module.exports = { 
  extends: ['@commitlint/config-conventional'], 
  rules: {
    'type-enum':[
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档
        'style', // 样式
        'refactor', // 重构
        'test', // 测试
        'revert', // 回滚
        'chore' // 构建过程或辅助工具的变动
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}