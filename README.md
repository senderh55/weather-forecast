# Weather Forecast App

This project is inspired by a Figma design which you can view [here](<https://www.figma.com/file/UGXwqppRSF7goQEYDIrJ2r/Weather-App-UI-Design-(Community)?type=design&node-id=2-811&mode=design&t=Oclrgpit5KO7K0U6-0>).

## Preview

![Weather App Preview](https://github.com/senderh55/weather-forecast/blob/main/assets/preview/weather_react_app.gif)

## Installation

First, Clone the repository:

```sh
git clone https://github.com/senderh55/weather-forecast.git
```

Then Navigate to the project directory:

```sh
cd weather-forecast
```

### Using Docker

To run this app using Docker, follow these steps:

1. Build the Docker image:
   ```sh
   docker build -t weather-forecast .
   ```
2. Run the Docker container:
   ```sh
    docker run -d -p 3000:3000 weather-forecast
   ```

### Using Next.js

If you prefer to run the app without Docker, you can do so with the following steps:

1. Install the dependencies:
   ```sh
   npm install
   ```
2. Run the app:
   ```sh
    npm run dev
   ```

After installation pen your browser and navigate to `http://localhost:3000/`
