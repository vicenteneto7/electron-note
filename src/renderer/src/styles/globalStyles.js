/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;

    font-family: "Roboto", sans-serif;
}

body {
    font-size: 1.6rem;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: blue;
        
    }
`
