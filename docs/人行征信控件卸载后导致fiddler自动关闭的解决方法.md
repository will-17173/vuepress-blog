# 人行征信控件卸载后导致 fiddler 自动关闭的解决方法

## 方法 1, 似乎无效

在`C:\Windows\Prefetch`下面，打到`PBCC`开头的文件

```
PBCCRCPASSGUARDEDGE.EXE-455218F7.pf
PBCCRCPASSGUARDXINPUTSERVICE.-2C35B64D.pf
```

删除，重启

## 方法 2

1. IE, 设置，Internet 选项，高级，重置
2. 之后打开 Windows 系统的设置，网络和 Internet，代理， 关闭
3. 在关闭之后，按 Win+R 输入 regedit，然后按 Win+F 搜索 microdone.cn，看是否依旧存在

---

效果：似乎还会弹提示，但是已经不会自动改回去了
