
// console.log("Sanity Check")
$(document).ready(()=>{
//   The DOM is done loading. Go get em JS!
    const stockForm = document.querySelector('.stock-form'); 
    console.log(stockForm)

    const url = `https://api.iextrading.com/1.0/stock/goog/chart`
    // getJSON method takes 2 args:
    // 1. where to get the JSON
    // 2. Function to run when I'm back
    $.getJSON(url,(theDataJSFoundIfAny)=>{
        console.log(theDataJSFoundIfAny)
        $('#stock-body').html(`
            <tr>
                <td>${theDataJSFoundIfAny[0].open}</td>
            </tr>
        `)
    })

});