// Create web server

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

let comments = [
  {
    username: 'Alice