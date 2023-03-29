#!/bin/sh

# 一開始所在的分支
start_branch=$(git branch --show-current)

# 如果分支不在 develop 或 master，merge develop
if [ "$start_branch" != "develop" ] || [ "$start_branch" != "master" ]; then
  git merge develop
fi

git checkout develop
git pull

# 如果一開始分支不在 develop 或 master，merge 一開始所在的 merge
if [ "$start_branch" != "develop" ] || [ "$start_branch" != "master" ]; then
  git merge $start_branch
fi

git checkout master
git pull
git merge develop

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

# checkout 到一開始的分支，push 最近 commit 紀錄
if [ "$start_branch" != "develop" ] || [ "$start_branch" != "master" ]; then
  git checkout $start_branch
  git merge develop
  git push
fi

