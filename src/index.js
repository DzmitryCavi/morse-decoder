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
        let words = expr.split("**********");
        let result_str ="";
        words.map(function(elem){
           let word = "";
           for(let i = 0 ;  i < elem.length; i += 10 ){
             word = "";
            for(let j = i; j < i+10; j += 2){
              if(elem[j]+elem[j+1] == '10') {word +='.';};
              if(elem[j]+elem[j+1] == '11') {word +='-';};
            }
            result_str += MORSE_TABLE[word] ? MORSE_TABLE[word] : '';
           }
           result_str += " ";
         })   
       return result_str.substr(0, result_str.length - 1);
}

module.exports = {
    decode
}