# Vue.js applicant testing work. 
The application performs the following actions according to the task requirements and provided Figma mackups:
- retreives user data from backend with GET request
- controlls pagination and navigation
- retreives tocken from backend for registration of new user
- validates data entered by user (img file check for size, gabarites, format)
- sends registration data to backend with POST request
- retreives and render obtained users data
# Vue.js розробник - тестова робота.
- Додаток виконує наступні дії згідно до вимог тествого завдання та наданих макетів у Figma:
- отримує дані користувачів у вигляді масиву об'єктів з бекенду
- виконує пагінацію та навігацію
- отримує токен з бекенду для подальшої реєстарції нового користувача
- перевіряє відопвідність введених даних в т.ч. файл - зображення на фактичні розміри, об'єм та формат
- надсилає дані до бекенду
- отримує та відображує оновлені дані
  
Applied tools:
SDK - Visual Studio Code
Framework - Vue 3 CLI
Main libraries - Vue Router, Vuex
Add-ons: Axios
Lang: JS, Styles: SCSS
Verification: Pixel Perfect, LightHouse, GT Metrix

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
