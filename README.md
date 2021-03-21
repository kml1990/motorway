# Running this project
  
- Run `npm install`

- Run `npm run serve`

- Run `npm run start`

## Comments

### UI development

* Project was tested in Chrome Browser
* Project is fully responsive
* Application has two routes - /gallery and /form
* Simple CSS grid was added to display images
* In order to fit images of the same size in the grid 'object-fit' property was used which is currently not supported on IE browsers.
* Depending on the need, I would also consider using `background-image` CSS property for image display.
* Alternatively if backend could provide various image resolutions for each image, a `HTML picture` tag could be used to load images.
* Each image can be previewed in modal by hovering over the image and clicking 'preview image' button. This functionality is also accessible on mobile, by clicking on image.
* User avatar was embeded into image and is visible on hover and active state.
* Image filter (grayscale) was added on hover and active state. This property is also not supported on IE browsers.

### Performance

* To speed up initial page render, a library called `react-lazyload` was used. It only loads images that are visible in the viewport.
* Often image optimisations are handled on the backend, therefore I would use tool such as `imagemin` to provide optimised images to the client.
* Some of the ways to measure performance of this application are:
    * Check `finish` time in nextwork tab, this would include testing with various throttling options.
    * Recording `runtime performance` to check performance issues.
    * Recording `runtime performance` with different CPU options select to simulate app behaviour on mobile devices.
    * Running an audit on `lighthouse` tool.

### Forms

* Formik was used for handling from validation and submission.
* Yup was used to define validation schema for Formik.


### Additional comments

* TypeScript was added to the project to limit possible bugs, add static typing and code completion.
* Scss support was added to the project to enable CSS preprocessing and keep consistency in the app.
* Due to limited time, performance aspect has not been fully expolored for possible solutions on loading high resolution images.
* I have recently created a little project on github that allows me to quickly startup a project and some of the settings/components/styles were copied over to this project. These include
    * Linter/prieetier/husky settings
    * Styles
    * Some of the common components.
* Due to limited time, tests were not added to this tech test 
