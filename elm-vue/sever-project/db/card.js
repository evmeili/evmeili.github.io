const https = require('https')
const {
    insert
} = require('./db')
https.get('https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=23.124817&longitude=113.361597&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        let restaurants = JSON.parse(rawData).items
        console.log(restaurants)
        restaurants.forEach(element => {
            insert('card', [{
                name: element.restaurant.name,
                recent_order_num: element.restaurant.recent_order_num,
                support_tags: element.restaurant.support_tags,
                activities: element.restaurant.activities
            }])
        });
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
})