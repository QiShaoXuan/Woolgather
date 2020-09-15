const axios = require("axios");
const { token } = require("./private-config");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const logSymbols = require("log-symbols");
const ora = require("ora");

const articlesDir = path.resolve(process.cwd(), "./articles");
const spinner = ora({ text: `正在发布` });

const httpPublish = content => {
  return axios({
    url: "https://giki.app/api/talks/create",
    method: "post",
    headers: {
      authorization: `Basic ${token}`
    },
    data: {
      actions: [],
      image: [],
      tags: [],
      text: content
    }
  });
};

const getArtilces = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(path.resolve(articlesDir), (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
};

const getArticleContent = name => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(articlesDir, name), "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const publish = () => {
  getArtilces()
    .then(async articleList => {
      return await inquirer.prompt([
        {
          name: "name",
          type: "list",
          message: `选择需要发布的文章:`,
          choices: articleList.map(v => ({ name: v, value: v }))
        }
      ]);
    })
    .then(({ name }) => {
      spinner.start();
      return getArticleContent(name);
    })
    .then(content => httpPublish(content))
    .then(res => {
      if (res.data) {
        console.log(logSymbols.success, chalk.green("发布成功 :)"));
      }
      spinner.stop();
    })
    .catch(err => {
      spinner.stop();
      console.log(chalk.red("发布失败 :("));
      console.log("err", err);
    });
};

publish();
