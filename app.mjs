import express from 'express'
import path from 'path'
import * as myModule from '../final-project-yanggezheng/db';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(process.env.PORT || 3000);
