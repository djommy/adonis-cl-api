'use strict'

/*
|--------------------------------------------------------------------------
| ClubSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ClubSeeder {
  async run () {
    // return Database.table('clubs').del();
    await Database.table('clubs').insert([
      {
        name: "Borussia Dortmund",
        country: "Germany",
        group: "A",
        position: "Winner",
        season: "2018_19"
      },
      {
        name: "Atletico Madrid",
        country: "Spain",
        group: "A",
        position: "Follower",
        season: "2018_19"
      },
      {
        name: "FC Barcelona",
        country: "Spain",
        group: "B",
        position: "Winner",
        season: "2018_19"
      },
      {
        name: "Tottenham",
        country: "England",
        group: "B",
        position: "Follower",
        season: "2018_19"
      },
      {
        name: "PSG",
        country: "France",
        group: "C",
        position: "Winner",
        season: "2018_19"
      },
      {
        name: "Liverpool FC",
        country: "England",
        group: "C",
        position: "Follower",
        season: "2018_19"
      },
      {
        name: "FC Porto",
        country: "Portugal",
        group: "D",
        position: "Winner",
        season: "2018_19"
      },
      {
        name: "FC Schalke 04",
        country: "Germany",
        group: "D",
        position: "Follower",
        season: "2018_19"
      },
      {
        name: "FC Bayern Munchen",
        country: "Germany",
        group: "E",
        position: "Winner",
        season: "2018_19"
      },
      {
        name: "AFC Ajax",
        country: "Netherlands",
        group: "E",
        position: "Follower",
        season: "2018_19"
      },
      {
        name: "Manchester City FC",
        country: "England",
        group: "F",
        position: "Winner",
        season: "2018_19"
      },
      {
        name: "Olimpique Lyonnais",
        country: "France",
        group: "F",
        position: "Follower",
        season: "2018_19"
      },
      {
        name: "Real Madrid",
        country: "Spain",
        group: "G",
        position: "Winner",
        season: "2018_19"
      },
      {
        name: "AS Roma",
        country: "Italy",
        group: "G",
        position: "Follower",
        season: "2018_19"
      },
      {
        name: "Juventus",
        country: "Italy",
        group: "H",
        position: "Winner",
        season: "2018_19"
      },
      {
        name: "Manchester United FC",
        country: "England",
        group: "H",
        position: "Follower",
        season: "2018_19"
      }
    ])
  }
}

module.exports = ClubSeeder
