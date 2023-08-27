const output = document.querySelector('.result')
let query = ""


function calc(value) {
    if (value === '=') {
        try {
        
            if (query !== output.textContent) {
                query += output.textContent
            }
            let result = eval(query)
            if (!isFinite(result)) {
                throw EvalError("division by zero")
            }
            output.textContent = result
            query = ""
            console.log(query);

        } catch (e){
            let newValue = e.message
            output.textContent = newValue
            setTimeout(() => {
                output.textContent = ''
                query = ''
            }, 1500)
        }
        
    } else if (value === 'C') {
        output.textContent = ''
        query = ''
    } else if (value.match(/\+|\-|\*|\//)) {
        if (output.textContent !== '') {
            query += output.textContent
            query += value
            output.textContent = ''
        }
        console.log(query);
    } else {
        if (value === '.' && output.textContent.search(/\./) !== -1) {
            return
        }
        if (value === '0' && output.textContent.charAt(0) === "0" && output.textContent.length === 1) {
            return
        }
        if (output.textContent.length < 16) {
            output.textContent += value
        }
    }
}
