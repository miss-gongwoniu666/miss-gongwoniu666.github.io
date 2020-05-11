
## Mac命令
### 安装 n 包管理node升级
npm i -g n --force

### 更新对应版本命令
sudo n 13.4.0

### Git切换源
github克隆项目的时候，如果非公司环境网络，下载失败，可以选择下面命令行，从ssh切换到http
```
git remote set-url origin <要修改的url>
```


### Mac 命令行
#### Mac打开tar.gz文件命令行
```
  tar -xzvf xxx.tar.gz
```
#### 删除某个文件
```
  rm -rf <文件名字>
```
#### 编辑文件
```
 vim .git/config
```

### 退出编辑
```
1、esc
2、；
3、wq
```

### github配置ssh密钥

#### 1.检查电脑是否有 SSH key
```
cd ~/.ssh
```
#### 2. 创建一个 SSH key
```
ssh-keygen -t rsa -C "email"
```
### 3. 添加ssh到github
github打开setting设置，添加ssh即可
```
需要复制id_rsa.pub内容到github
可以使用命令编辑功能 vim id_rsa.pub 
复制完毕退出编辑即可（功能见上）
```

### 
