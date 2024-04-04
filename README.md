# Eco Sorter

EcoSorter empowers you to recycle right! This web app guides waste sorting, showcases community recycling leaders, and offers secure accounts to track your impact. Join the fight for a greener planet! 

## Table of Contents

* [Features](#features)
* [Tech Stack](#stack)
* [Installation](#installation)
* [Screenshots](#screenshots)
* [License](#license)

<h2 id="features">Features</h2>

🗑️ **Machine Learning Powered Sorting**: EcoSorter employs machine learning algorithms to analyze waste characteristics, ensuring accurate sorting. <br>

📋 **Dynamic Community Leaderboard**: User sorting data feeds into EcoSorter's machine learning model, continuously refining waste classification and generating an up-to-date leaderboard that reflects the true champions of community recycling. <br>

🔐 **Secure User Authentication**: Robust authentication protocols safeguard user data and personalize the waste sorting experience, allowing users to track their impact on the environment.

<h2 id="stack">Technology Stack</h2>

[![My Skills](https://skillicons.dev/icons?i=react,tailwind,nodejs,express,mongodb,fastapi&theme=dark)](https://skillicons.dev)
<img src="https://github.com/Team-DeepStack/EcoSorter/assets/118868981/f6019778-f484-4549-b876-cc5f9730b69f" alt="drawing" width="50"/>

## Screenhots

<div markdown="1" style="display: flex;" align="left">
  <img src="https://github.com/Team-DeepStack/EcoSorter/assets/118868981/ca10e8e0-f0b6-4a44-9526-2702af219eea" width="400">
  <img src="https://github.com/Team-DeepStack/EcoSorter/assets/118868981/91c03b86-4079-4eba-8368-05015b6d012a" width="400">
  <img src="https://github.com/Team-DeepStack/EcoSorter/assets/118868981/b90ddaf4-e9e8-47d1-960f-fc702e08201f" width="400">
  <img src="https://github.com/Team-DeepStack/EcoSorter/assets/118868981/83151616-52b7-4b9f-97cd-0c667f7aa52a" width="400">
  <img src="https://github.com/Team-DeepStack/EcoSorter/assets/118868981/adc42d76-1278-4f6f-895c-d0225bba03c8" width="400">
</div>

<h2 id="installation">Installation</h2>

### Setting up the Express Server

1. Accessing the `server/` folder

   ```
   cd server
   
   ```
2. Running the Express App
   - Make sure there is an entry point(`index.js`)
   - Install the dependencies listed in `package.json` using:
   
     ```
     npm install

     ```
   - Run the app
     ```
     npm run start

     ```
### Setting up the FastAPI server
1. Setting up virtual environment
   - Create a new virtual environment using:
   
     ```
     python -m venv venv
     ```
   - Activate the virtual environment
   
     ```
     venv\Scripts\activate
     ```
2. Running the FastAPI app
   - Install the required dependencies from `requirements.txt` using:
   
     ```
      pip install -r requirement.txt
     ```
   - Start the FastAPI app
   
     ```
     uvicorn app:app --reload
     ```
### Running React App
1. Access the `client/` folder in the root of the project
   ```
   cd client/
   ```
2. Running the React App
   - Install all the dependencies in `package.json` using:
   ```
   npm intall
   ```
  - Run the React Application using:
   ```
   npm run start
   ```


## License

[![License Badge](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge.svg)](https://opensource.org/licenses/MIT)
```
MIT License

Copyright (c) [2023-24] [Ratul Saha]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


