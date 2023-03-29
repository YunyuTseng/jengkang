#!/bin/sh

git checkout master
git pull

# 更新版本號
npm --no-git-tag-version version patch

# 安裝依賴包
npm i

# 編譯靜態程式碼
npm run generate

git add .
git commit -m "deploy"

node deploy.js

git push
git checkout develop
git merge master
git push
