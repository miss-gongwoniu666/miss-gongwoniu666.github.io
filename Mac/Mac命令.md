
## 命令汇总
### 安装命令工具
```
1、安装包管理node升级： npm i -g n --force
2、更新对应版本命令： sudo n 13.4.0
```
### 安装zsh仓库防火墙问题解决方案
例如安装oh my zsh的时候
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
本地安装某个工具的时候可能会安装失败，提示超时或者访问限制，可尝试改写本地hosts：
```
1、百度搜索：ip查找 -> IP/IPv6查询,服务器地址查询 - 站长工具
2、输入如上域名 raw.githubusercontent.com 找到映射的ip地址 151.xx.xx.xx
3，改写本地hosts  151.xx.xx.xx. raw.githubusercontent.com
4，再重复上述命令可正常安装，安装完毕，电脑命令行即配置完毕
```


### Git命令行
```
1、切换源从ssh-http：git remote set-url origin <要修改的url>
2、npm publish
3、npm login 登录npm包资源管理器

```


### Mac 命令行
``` 
1、打开tar.gz文件命令： tar -xzvf xxx.tar.gz
2、编辑命令： vim .git/config
3、删除某个文件： rm -rf <文件名字>
4、编辑文件： vim .git/config
5、查看文件内容： cat 文件名
6、进入跟目录地址： cd ~/文件
7、清空命令行：command k
8、查看hosts文件：长按左键finder，前往文件夹，输入/etc/
9、清空命令行 command k
```

#### 退出编辑
```
1、esc
2、；
3、wq
```

### github配置ssh密钥
```
1、检查电脑是否有SSH key：cd ~/.ssh
2、没有SSH，查看是否配置过github账户：git config --list
3、ls查看.ssh目录是否有id_rsa，id_rsa.png known_hosts
4、配置github账号: 
  git config --global user.name <‘github用户名’>
  git config --global user.email <‘eamil’>
5、生成密钥：ssh-keygen -t rsa -C <"email"> 
6、查看生成的公有密钥：配置在github账号：cat id_rsa.pub
```

### 安
