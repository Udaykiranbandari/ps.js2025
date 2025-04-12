// dynamicLoader.js
async function loadModule() {
    const module = await import('./greetings.js');
    module.sayHello(); // Output: Hello from dynamically imported module!
  }
  
  loadModule();
  