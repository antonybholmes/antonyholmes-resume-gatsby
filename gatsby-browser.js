/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/normalize.scss"
import "./src/styles/index.scss"
import "./src/styles/publications.scss"

import "@fontsource/inter/400.css"
import "@fontsource/inter/600.css"

//import "fontsource-lato/400.css"
//import "fontsource-lato/700.css"

import "@fontsource/poppins/400.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"

import "@fontsource/bodoni-moda/400.css"
import "@fontsource/bodoni-moda/600.css"

import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"

import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
dayjs.extend(advancedFormat)
