#!/bin/sh
# Prepend a markdown header to API docs

# Variables
baseDir="$(pwd)"
docPath="${baseDir}/docs"
docNames=("README.md" "SWAGGER.md" "COMPLEXITY.md")
tmpDirPath="${baseDir}/.github/.tmp"
menuPath="${baseDir}/.github/assets/jsdoc2md/menu.md"

# Functions
function removeTmpDir() {
  rm -rf ${tmpDirPath}
}
function makeTmpDir() {
  mkdir ${tmpDirPath}
}
function prependHeaderToDoc() {
  tmpDocPath="${tmpDirPath}/${1}"
  cat ${menuPath} > ${tmpDocPath}
  cat "${docPath}/${1}" >> ${tmpDocPath}

}

function createTmpDocs() {
  len=${#docNames[@]}
  idx=0
  while [ ${idx} -lt ${len} ]
  do
    prependHeaderToDoc ${docNames[$idx]}
    idx=$((idx + 1))
  done
}

function copyToDocs() {
  len=${#docNames[@]}
  idx=0
  while [ ${idx} -lt ${len} ]
  do
    cp "${tmpDirPath}/${docNames[$idx]}" "${baseDir}/docs/"
    idx=$((idx + 1))
  done
}

function commitAndPush() {
  msg="docs(api): auto-generate api docs and complexity report"
  branch=$(git rev-parse --abbrev-ref HEAD)
  git add .
  git commit -m "${msg}"
  git push origin "${branch}"
  git push github "${branch}"
}

function main() {
  removeTmpDir
  makeTmpDir
  createTmpDocs
  copyToDocs
  removeTmpDir
  commitAndPush
}

main
