# Overview

This project is a short example react project, including associated technologies.
 
It is based upon the getting started with react pluralsight course: https://app.pluralsight.com/library/courses/react-js-getting-started/

# Installation

## Node

Install babel and react support etc by:

    npm install
    npm install --save-dev babel-plugin-transform-react-jsx


## Build

To perform a one off build, run:

    npm run build


## Development

While developing, you can have Babel automatically compile `JSX` for you.
Just run:

    babel -w src -d js
