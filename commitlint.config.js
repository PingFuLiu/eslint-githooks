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
        'chore' // 其他
      ]
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}