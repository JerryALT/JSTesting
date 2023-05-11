const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const puppeteer = require('puppeteer');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/html', (req, res) => {
	const filePath = path.join(__dirname, 'index.html');
	fs.readFile(filePath, 'utf8', (err, data) => { 
		res.send(data);
	});
});

app.get('/', (req, res) => {res.send('Hello, world!');});
app.post('api/data', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
});

/*
(async () => {
	const browser = await puppeteer.launch({ headless: false });
  	const page = await browser.newPage();
  	await page.goto('https://todomvc.com/examples/emberjs/');

  	// Add a task
  	await page.type('#new-todo', 'Task 1\n');
  	await page.type('#new-todo', 'Task 228\n');
  	await page.type('#new-todo', 'Task 3\n');

  	// Wait for the task to be added to the list
  	await page.waitForSelector('todo-list');


  	//ember-view

  	// Check if the task was added
  	const taskText = await page.$eval('todo-list', el => el.innerText);
  	if (taskText === 'Task 1') {
  		console.log('Task added successfully');

  	// Click the "X" button to delete the task
  	await page.click('todo-list .destroy');

  	// Wait for the task to be removed from the list
  	await page.waitForSelector('todo-list', { hidden: true });

	// Check if the task was deleted
  	const taskExists = await page.evaluate(() => {
  	  const task = document.querySelector('todo-list');
  	  return task ? task.innerText.includes('Task 1') : false;
  	});
  	if (!taskExists) {
  	  console.log('Task deleted successfully');
  	} else {
  	  console.error('Error deleting task');
  	}

  	  console.log('Task deleted successfully');
  	} else {
  	  console.error('Error adding task');
  	}

  	await browser.close();
})();
*/

/*
(async () => {
  	const browser = await puppeteer.launch({ headless: false });
  	const page = await browser.newPage();
  	await page.goto('https://todomvc.com/examples/emberjs/');

  	// Add a task
  	await page.type('#new-todo', 'Task 1\n');

  	// Wait for the task to be added to the list
  	await page.waitForSelector('todo-list');

  	// Check if the task was added
  	const taskText = await page.$eval('todo-list', el => el.innerText);
  	if (taskText === 'Task 1') {
  	  console.log('Task added successfully');
  	} else {
  	  console.error('Error adding task');
  	}

  	// Edit the task
  	await page.click('todo-list label');
  	await page.keyboard.down('Control');
  	await page.keyboard.press('KeyA');
  	await page.keyboard.up('Control');
  	await page.keyboard.press('Backspace');
  	await page.type('.edit', 'Task 1 Edited\n');
  	await page.keyboard.press('Enter');

  	// Wait for the edited task to be updated in the list
  	await page.waitForSelector('todo-list:nth-child(1).completed');

  	// Check if the task was edited
  	const editedTaskText = await page.$eval('todo-list:nth-child(1) label', el => el.innerText);
  	if (editedTaskText === 'Task 1 Edited') {
  	  console.log('Task edited successfully');
  	} else {
  	  console.error('Error editing task');
  	}

  	// Delete the task
  	await page.hover('.todo-list:nth-child(1)');
  	await page.click('.todo-list:nth-child(1) button.destroy');

  	// Wait for the task to be deleted from the list
  	await page.waitForSelector('todo-list', { hidden: true });

  	// Check if the task was deleted
  	const taskDeleted = await page.$$('todo-list');
  	if (taskDeleted.length === 0) {
  	  console.log('Task deleted successfully');
  	} else {
  	  console.error('Error deleting task');
  	}

  	await browser.close();
})();
*/

//1 Option
(async () => {
  	const browser = await puppeteer.launch({ headless: 'new' });
  	const page = await browser.newPage();

  	await page.goto('https://google.com');

	const input = await page.$('[name="q"]');
  	await input.type('puppeteer');
  	await input.press('Enter');

  	await page.waitForNavigation();

  	const results = await page.$$eval('h3', headers => headers.map(header => header.textContent));
  	console.log(results);

  	await browser.close();
})();

//6 Option
// (async () => {
// 	const browser = await puppeteer.launch({ headless: 'new' });
//   	const page = await browser.newPage();
//   	await page.goto('https://ru.wikipedia.org/wiki/Albert_Einstein');

// 	const content = await page.$eval('#mw-content-text', el => el.innerText);

//   	// Save the contents to a file
//   	fs.writeFileSync('albert-einstein.txt', content);

//   	await browser.close();
// })();

//app.listen(2228, () => { console.log("Server listening on http://localhost:2228")});