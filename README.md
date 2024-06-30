### Configuration
In _package.json_:

```json
{
  "name": "your-app-name", <===== CHANGE THIS
  "version": "1.0.0",
  "main": "expo-router/entry",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@tamagui/config": "^1.101.5",
    "@types/react": "~18.2.79",
    "expo": "~51.0.17",
    "expo-constants": "~16.0.2",
    "expo-linking": "~6.3.1",
    "expo-router": "~3.5.17",
    "expo-status-bar": "~1.12.1",
    "nativewind": "^2.0.11",
    "react": "18.2.0",
    "react-native": "0.74.2",
    "react-native-safe-area-context": "4.10.1",
    "react-native-screens": "3.31.1",
    "tamagui": "^1.101.5",
    "typescript": "~5.3.3"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "tailwindcss": "^3.3.2"
  },
  "private": true
}

```

In _package-lock.json_:

```json
{
  "name": "your-app-name", <===== CHANGE THIS
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    [...]
```

In _app.json_:

```json
{
  "expo": {
    "name": "Netreach", <===== CHANGE THIS,
    "slug": "Netreach", <===== THIS,
    "scheme": "Netreach", <===== AND THIS
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "expo-router"
    ]
  }
}

```