chrome snippets备份

### 如何导出snippet:
### how to export snippets:

1. 打开任意一个dev tools
1. open dev tools

2. 点击右上角选项, 选择分离窗口
2. click button at right top corner, and then select 'open in separate window' to detach dev tools

3. 对这个dev tools窗口再执行打开dev tools的操作
3. on separated dev tools window, hit 'ctrl + i + cmd' to open another dev tools window

4. 在第二个dev tools中执行: `InspectorFrontendHost.getPreferences(function(prefs) {console.log(prefs.scriptSnippets);});`
4. execate `InspectorFrontendHost.getPreferences(function(prefs) {console.log(prefs.scriptSnippets);});` on secondary (last opened) dev tools