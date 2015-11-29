import $ from 'jquery'
import page from 'page'
import Handlebars from 'hbsfy/runtime'
import * as pages from './pages'
import dateFormat from '../helper/date-format'
import times from 'handlebars-helper-repeat'
import eq from '../helper/eq'

Handlebars.registerHelper('dateFormat', dateFormat)
Handlebars.registerHelper('times', times)
Handlebars.registerHelper('eq', eq)

const $nav = $('#nav')


page('*', function(ctx, next) {
  $nav
    .children()
    .removeClass('active')
  $nav
    .find('a[href|="' + ctx.path + '"]')
    .parent()
    .addClass('active')
  next()
})




page('/home', pages.haus)
page('/contact', pages.contact)
page('/results',pages.results)
page('/results/:season/:round', pages.result)
page('/constructors',pages.constructors)
page('/drivers',pages.drivers)
page('/drivers/:driver', pages.driver)
page('/', pages.haus)
page('*', pages.haus)
page()


