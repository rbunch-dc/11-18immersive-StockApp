
// console.log("Sanity Check")
$(document).ready(()=>{
//   The DOM is done loading. Go get em JS!
    const stockForm = document.querySelector('.stock-form'); 
    console.log(stockForm)

    $('.stock-form').submit((event)=>{
        // stop the browser from sending the form to another page
        event.preventDefault();
        console.log(event);

        // .val() is jQuery, .value is native JS
        const symbol = $('#symbol').val();
        console.log(symbol);

        // our endoint
        // an endpoint is a web accessible URL, that responds with data
        const url = `https://api.iextrading.com/1.0/stock/${symbol}/quote`
        // getJSON method takes 2 args:
        // 1. where to get the JSON
        // 2. Function to run when I'm back
        $.getJSON(url,(theDataJSFoundIfAny)=>{
            console.log(theDataJSFoundIfAny)
            $('#stock-body').html(`
                <tr>
                    <td>${theDataJSFoundIfAny.symbol}</td>
                    <td>${theDataJSFoundIfAny.companyName}</td>
                    <td>${theDataJSFoundIfAny.high}</td>
                    <td>${theDataJSFoundIfAny.low}</td>
                    <td>${theDataJSFoundIfAny.change}</td>
                </tr>
            `)
        })
    })
});