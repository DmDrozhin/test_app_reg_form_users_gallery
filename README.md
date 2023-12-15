# Test work. User cards gallery. New user registration form
The following tools were used to carry out the task:
SDK:  Visual Studio Code
Framework: Vue 3 CLI
Main libraries: Vue Router, Vuex
Add-on labs: Axios, Normalise.css, .Env
Scripts lang:  JS, Styles: SCSS

-	Implemented a single page application (SPA) concept using the Vue Router library, allowing the application to be converted to a multi-page application without complex refactoring.
-	The Vuex state management library is used to centrally retrieve, store and process data. The data is segmented by topic into namespaced modules.
-	The structure of the application follows the idea of compact, reusable components that can be reused without complex re-adjustments.
-	The Axios library is used for asynchronous fetching and posting of data (stable and widespread solution).
-	The Normilze.css library helps to avoid unwanted styling of DOM elements by browsers.
	
-	The application has four adaptive mode breakpoints and page block geometry according to the mockup. Scheme of the adaptation - from the min. in to the max. screan.
-	The navigation menu (NAV) is fixed at the top and is always visible. The content below the NAV is a SPA.
-	The rendering of the phone number format is controlled by a custom directive.
-	The email tooltip reflexes to entering position of the cursor.
-	Entered data errors processing and form validation fulfilled according to the provided – ‘Test Assignment API documentation’


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
