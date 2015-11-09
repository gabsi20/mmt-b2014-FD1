import $ from 'jquery'
import page from 'page'
import fetch from 'isomorphic-fetch'
import templateHome from './templates/home.hbs'
import templateDrivers from './templates/drivers.hbs'
import templateConstructors from './templates/constructors.hbs'
import templateContact from './templates/contact.hbs'
import templateResults from './templates/results.hbs'

const $content = $('#content')
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

function haus() {
	$content.html(templateHome())
}
function drivers() {
	$content.html(templateDrivers())
}
function contact() {
	$content.html(templateContact())
}
function constructors() {
	$content.html(templateConstructors())
}
function results() {
	$content.html(templateResults())
}


page('/home', haus())
//page('/contact', contact())
//page('/results',results())
//page('/constructors',constructors())
//page('/drivers',drivers())
//page('/', haus())
//page('*', haus())



