import App from './class/App.js';

const environment = async () => {
  try {
    const myApp = new App();
    await myApp.init();
    console.log(`Environment started successfully`);
  } catch (error) {
    console.error(`Error in environment start:\n${error}`);
  }
};

environment();
