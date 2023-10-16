const fs = require('fs');

// 数据对象
const assignment = {
    name: 'Assignment 1',
    content: 'This is the content of Assignment 1',
    link: 'https://example.com/assignment1'
};

// 将数据保存到文件
fs.writeFileSync('zuoye.json', JSON.stringify(assignment));

// 从文件中读取数据
const readData = fs.readFileSync('zuoye.json', 'utf-8');
const parsedData = JSON.parse(readData);

console.log(parsedData);
