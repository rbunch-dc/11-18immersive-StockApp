
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
        $('#symbol').val('');
        // console.log(symbol);

        // How can we make an array out of a string based 
        // on where the , are?
        const symbols = symbol.split(',')
        // ex for symbols =
        // ['msft', 'goog ', ' x ']
        // console.log(symbols)
        symbols.forEach((s)=>{
            // get rid of the whitespace
            s = s.trim();
            // our endoint
            // an endpoint is a web accessible URL, that responds with data
            const url = `https://api.iextrading.com/1.0/stock/${s}/quote`
            // getJSON method takes 2 args:
            // 1. where to get the JSON
            // 2. Function to run when I'm back
            $.getJSON(url,(theDataJSFoundIfAny)=>{
                // console.log(theDataJSFoundIfAny)
                let changeClass = "";
                if(theDataJSFoundIfAny.change > 0){
                    changeClass = "bg-success";
                }else{
                    changeClass = "bg-danger"
                }


                $('#stock-body').append(`
                    <tr>
                        <td>${theDataJSFoundIfAny.symbol}</td>
                        <td>${theDataJSFoundIfAny.companyName}</td>
                        <td>${theDataJSFoundIfAny.high}</td>
                        <td>${theDataJSFoundIfAny.low}</td>
                        <td class=${changeClass}>${theDataJSFoundIfAny.change}</td>
                    </tr>
                `); //End append
            }); // end getJSON
        }); // end foreach
        $('#stock-table').DataTable();
    }); // end submit handler
}); // end documet.ready()