// module.exports = {
    
//     searchPage: {
//         searchInput: 'id=searchInput',
//         searchButton: 'id=searchButton'
//     },
    
//     search: (item) => {
//         web.type(po.searchPage.searchInput, item)
//         web.click(po.searchPage.searchButton)
//     }
// }

module.exports = {

    timeouts: {
            standart: 10*1000,
            short: 2*1000,
            slow: 60*1000
    }
}