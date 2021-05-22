# PlantManager - ReactNative                                                     
                                  
<p align="center">
<img src="assets/plantmanager.gif" /> 
</p>
This code was developed during an online event called NextLevelWeek organized by RocketSeat

## ⚡️ The Project
  The PlatManager project was designed to make people be able to organize the plants that they take care of, being able to schedule notifications to remember them to water a certain plant. Each plant has its own informations and characteristics, you can also delete a plant from your personal list. 
  
## 🎯 Features
 - Async Storage
 - Dinamic lists based on FAKE API data
 - API Conection via AXIOS
 - Stack and Tab navigations
  
## 🖥️ Used Tecnologies
 - [ReactNative](https://reactnative.dev/)
 - [Expo](https://expo.io/)
 - [Styled-Components](https://styled-components.com/)
 - [Axios](https://axios-http.com/docs/intro)

## ⚙️ Dependencies
 - [Yarn](https://yarnpkg.com/)
 - [Expo](https://expo.io/)
 - [JsonServer](https://github.com/typicode/json-server)
 
## 🚀️ Getting Started

1. Clone this repository: 

```bash
git clone https://github.com/avnerjose/react-native-nlw-5-plantmanager.git
```
2. Install all dependencies

```bash
  yarn
```
3. Go to the folder you cloned the repository and install the app
```base
expo start
```
4. Start the fake API service
```bash
json-server ./src/services server.json --host <yourIP> --port 3333 --delay 700
```
5. Go to the file "api.ts" and change the API address to your IP
