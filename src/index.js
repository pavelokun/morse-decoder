const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
        MORSE_TABLE[""] = " ";
      
        let result = "";
        
        let arr = expr.match(/.{1,10}/g);
        
        arr.map(letter => {
            const arr_with_zeros = letter.match(/.{1,2}/g);
            const arr_with_morses = arr_with_zeros.map((char)=>{
                if(char === "10") {return "."} 
                if(char === "00" || char === "**") {return " "}
                if(char === "11") {return "-"}
            });
     
            result += MORSE_TABLE[arr_with_morses.join("").trim()];
        })
        return result;
      
}

module.exports = {
    decode
}