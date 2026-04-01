# Husanai Code 🚀

AI Coding CLI — 基于 Claude Code 反编译项目，接入 Husanai API 中转站。

## 一键安装

```bash
curl -fsSL https://raw.githubusercontent.com/siaosqqw/husanai-code/main/install.sh | bash
```

## 使用

```bash
# 设置 API Key
export HUSANAI_API_KEY=your-api-key

# 启动交互式编程
husanai-code

# 非交互模式
husanai-code -p "帮我写一个 Python HTTP 服务器"

# 管道模式
echo "解释这段代码" | husanai-code -p
```

## 环境变量

| 变量 | 说明 |
|------|------|
| `HUSANAI_API_KEY` | Husanai API Key（推荐） |
| `ANTHROPIC_API_KEY` | 也支持，兼容原版 |
| `ANTHROPIC_MODEL` | 指定模型（默认 Claude Sonnet） |

## 手动安装

```bash
# 需要 Bun >= 1.3.11
git clone https://github.com/siaosqqw/husanai-code.git
cd husanai-code
bun install
export HUSANAI_API_KEY=your-key
bun run dev
```

## 获取 API Key

访问 [husanai.com](https://husanai.com) 注册获取 API Key。

## 功能

- 🔧 交互式 AI 编程助手
- 📁 文件读写、搜索、编辑
- 🖥️ Shell 命令执行
- 🌐 网页抓取和搜索
- 🔌 MCP 插件支持
- 📝 Jupyter Notebook 编辑
- 🤖 子代理（Agent）系统

## 致谢

基于 [Claude Code Best](https://github.com/claude-code-best/claude-code) 项目。
