
# Paw-Locate

A cross platform native mobile app , i created for my capstone project at brainstaion.
Created to streamline the process of reporting lost pets as well as to assist in finding them.



## Installation
This app is meant to be used in conjunction with the Paw-locate-api.Please make sure it is installed and setup before running this app.

### #1 Download and install Expo go
To run this app you will need Expo go install on your mobile device.
Please download it from your respective app store.

### #2 Create .env file
Use the .env-sample file included in the code (or below) to create a .env file in the project folder.

```bash
    EXPO_PUBLIC_API_URL=http://<your local ipv4 address>:8080
```
To find your local ipv4 address please refer to this guide https://www.avg.com/en/signal/find-ip-address

### #3 Install Dependencies
use the below code to install all Dependencies:

```bash
  npm i
```



    
## Deployment

Before deploying this app , make sure the Paw-locate-api is running.

### #1 Start dev server
To start the development server , use the code below:

```bash
  npx expo start
```
### #2 Launch app with Expo go

#### for andorid
Open the expo go app on your device and scan the QR code in the console

#### for ios
Open your camera app and scan the QR, to launch expo go

## Warnings & Known bugs

While this app is intended to be crossplatform and will run on both android and ios. It was developed and tested mainly on an android phone. 
So some features may break to not be implemented on ios.


### bugs
#1 When submitting an edit to a report. The inital submit may not be successful. Try uploading a new image(or the same one again) , and editing at least one text field. give it 2 seconds and press submit 

#2 Toast notifications do not work on ios. 

#3 When submitting new data on ios, sometimes it will not refresh the page/data on mount