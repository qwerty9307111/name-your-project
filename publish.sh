#!/usr/bin/env sh

cd dist

git init
git add -A
git commit -m "push"

git push -f https://github.com/qwerty9307111/nameyourproject.git master

cd -