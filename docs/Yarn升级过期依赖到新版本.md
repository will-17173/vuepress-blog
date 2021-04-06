# Yarn 升级过期依赖到新版本

```
yarn upgrade-interactive --latest
```

这时候有三种状态：

1. `red`: Major, 表示主版本更新，不向下兼容
2. `yellow`: Minor, 表示中间版本更新，可向下兼容
3. `green`: Patch, 表示补丁版本更新，可向下兼容

之后选择你要的版本更新
