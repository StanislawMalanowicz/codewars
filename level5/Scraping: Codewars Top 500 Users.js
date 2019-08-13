// You should get and parse the html of the codewars leaderboard page.

// You can use Nokogiri(Ruby) or BeautifulSoup(Python) or CheerioJS(Javascript).

// For Javascript: Return a Promise resolved with your 'Leaderboard' Object!

// You must meet the following criteria:

// Return a 'Leaderboard' object with a position property. ``` Leaderboard#position should contain 500 'User' objects. Leaderboard#position[i] should return the ith ranked User(1 based index). ```
// Each User should have the following properties:


// solution:

const cheerio = require('cheerio');
const URL = 'https://www.codewars.com/users/leaderboard';
const request = require('request');
function solution() {
    return new Promise((resolve, reject) => {
        request(URL, (error, response, html) => {
            if (error) {
                reject(error)
                console.log('error is: ', error)
            }
            const $ = cheerio.load(html)
            const list = $('tr');
            let leaderboard = { position: {} }
            //       list.slice(1)
            console.log('list: ', list.html())
            list.each((i, el) => {
                const item = $(el)
                const name = item.attr('data-username')
                const clan = item.find('.is-big').next().text();
                const honor = Number(item.find('.is-big').next().next().text().replace(/,/g, ''));

                leaderboard.position[i] = {
                    name,
                    clan,
                    honor
                }
            })


            delete leaderboard.position[0]
            console.log('leader: ', leaderboard.position[3].honor)
            resolve(leaderboard)
        })
    })

}
let antek = solution();

console.log('antek: ', antek)
