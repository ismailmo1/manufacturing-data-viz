# Documentation

This file contains general documentation related to this project. For details on the specific visualisation, check out their respective folders in the [src folder](../src/).

## How to use this project

1.  Clone this repository into the required location i.e. the VM where the visualisations need to be hosted on.

    E.g. if this repository is hosted at https://github.com/ismailmo1/manufacturing-data-viz.git then log on to the machine you want to download the code to (make sure git is installed), open up a terminal and enter:

    ` git clone https://github.com/ismailmo1/manufacturing-data-viz.git`

2.  The build files are included in this repository so you can view the website by opening the index.html file in `./dist/index.html`.

### Development

1.  Clone the repository as above and then install the packages required for development (make sure you are inside the project folder):

    `npm install --include=dev"`

2.  Make changes to the code in the `./src/` folder, each folder has been structured the same way:

    ```
    |--src
    |   |--visualisation-name
    |       |--index.html <- used as template by webpack
    |       |--styles.css <- loaded in via main.js
    |       |--scripts
    |           |--main.js <- entrypoint for webpack
    |           |--other.js         -
    |           |--...               | - .js files related to this visualisation
    |           |--charts            |
    |              |--other.js      -
    ```

    Files can be added to the script folder to help structure your application, however the main.js file must not be changed or moved as it used by webpack as the entrypoint.

    If you are going to add another visualisation/webpage it is recommended to read through the webpack [starter guide](https://webpack.js.org/guides/getting-started). You will need to create a new folder in the `./src/` folder and copy the structure (i'd recommend just copying an existing folder e.g. `./dist/salt-curve/` and changing the name of the folder). You will also need to edit the ./webpack.config.js file, specifically:

    - add another key/value pair to the "entry" object so webpack knows the entrypoint (copy the same format as the other visualisations to make your life easy)
    - add another instance of the HtmlWebpackPlugin to the plugins object: the chunk name is the name you added to the entry object above.

    These two steps will be easier if you just copy an existing folder structure and change the names so then you can also copy the webpack config and change the names so they match the folder.

3.  Build the website (this project uses [webpack](https://webpack.js.org/concepts/) as a module bundler)

    `npm run build`

4.  The build files will be located in the `./dist/` folder so you can access it the same way as above (see "How to use this project")
