# Test Project for Consuming the Monday.com API

This is a test project I created to consume the Monday.com API. I'm leaving it saved in case it is useful to me someday or helpful to someone else.

## Description

This project demonstrates how to interact with the Monday.com API to perform actions such as creating items, retrieving information, updating columns, etc.

## Installation
**I strongly recommend using a virtual environment** to keep your dependencies organized and avoid conflicts with other Python projects. You can create and activate a virtual environment as follows:
- On Linux:
  ```bash
  python3 -m venv venv
  source venv/bin/activate
  ```
  On Windows:
  ```bash
  py -m venv venv
  venv\Scripts\activate
  ```
1. Clone this repository:
   ```bash
   git clone https://github.com/eljelves-o/monday_api
   ```
2. Install dependencies:
   ```bash
    pip install -r requirements.txt
   ```
3. Set up your Monday.com API Key, Django Secret Key and Board ID in the .env file.
4. Run the project:  
   Linux:  
   ```bash
   python3 manage.py runserver
   ```
   Windows:
   ```bash
   py manage.py runserver
   ```
