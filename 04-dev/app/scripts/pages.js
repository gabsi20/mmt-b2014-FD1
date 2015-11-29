import $ from 'jquery'
import config from './config'
import url from 'url'
import page from 'page'
import templateHome from '../templates/home.hbs'
import templateDrivers from '../templates/drivers.hbs'
import templateDriver from '../templates/driver.hbs'
import templateConstructors from '../templates/constructors.hbs'
import templateContact from '../templates/contact.hbs'
import templateResults from '../templates/results.hbs'
import templateResult from '../templates/result.hbs'

const $content = $('#content')

export function haus() {
	$content.html(templateHome())
}
export function drivers(ctx) {
  let urli = url.parse(ctx.path, true)
  let page = Math.max(0, urli.query.page ? urli.query.page : 0)
  console.log(page)
	fetch(config.api.url + `/drivers.json?limit=25&offset=${page*25}`)
    .then(response => {

      if (response.status >= 400) {
        return page('error')
      }

      return response.json()
    })
    .then(data => {

      $content.html(
        templateDrivers({
          drivers: data.MRData.DriverTable.Drivers,
          page: (page<=5) ? 1 : page-5,
          current: page
        }))
       
    })
    .catch(err => {
      globalError = err
      page('/error')
    })
}

export function driver(ctx){
  fetch(config.api.url + `/drivers/${ctx.params.driver}.json`)
    .then(response => {

        if (response.status >= 400) {
          return page('error')
        }

        return response.json()
      })
      .then(data => {
        $content.html(
          templateDriver({driver: data.MRData.DriverTable.Drivers[0]}))
         
      })
      .catch(err => {
        globalError = err
        page('/error')
      })
}

export function contact() {
	$content.html(templateContact())
}
export function constructors() {
	$content.html(templateConstructors())
}

export function result(ctx){
  fetch(config.api.url + `/${ctx.params.season}/${ctx.params.round}/results.json`)
  .then(response => {

        if (response.status >= 400) {
          return page('error')
        }

        return response.json()
      })
      .then(data => {
        console.log(data)
        $content.html(
          templateResult({result: data.MRData.RaceTable.Races[0]}))
         
      })
      .catch(err => {
        globalError = err
        page('/error')
      })
}
export function results() {
  fetch(config.api.url + '/current.json')
    .then(response => {

      if (response.status >= 400) {
        return page('error')
      }

      return response.json()
    })
    .then(data => {

      $content.html(
        templateResults({races: data.MRData.RaceTable.Races}))
       
    })
    .catch(err => {
      globalError = err
      page('/error')
    })
}
