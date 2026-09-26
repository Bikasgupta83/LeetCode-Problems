// 443. String Compression


//getting extra spaces
var compress = function(chars) {
  let result = [];
  let i =0;
  let ch = chars[0];
  let count = 0;

  while(i<chars.length){
    if(ch !== chars[i]){
        if(count !== 1){
            result.push(ch,count);
        }else{
            result.push(ch);
        }
        count = 0;
        ch = chars[i];
    }
    count++;
    i++;
  }
  
  (count !== 1)?result.push(ch,count):result.push(ch);
  console.log(result);
  console.log(result.length);
};


// compress(["a","a","b","b","c","c","c"]);
// compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]);
// compress(["a"])




var compressingString = function(chars) {
    let write = 0;
    let i = 0;

    while (i < chars.length) {
        let ch = chars[i];
        let count = 0;

        while (i < chars.length && chars[i] === ch) {
            count++;
            i++;
        }

        chars[write] = ch;
        write++;

        if (count > 1) {
            let countString = String(count);

            for (let digit of countString) {
                chars[write] = digit;
                write++;
            }
        }
    }

    console.log(write)
};


compressingString(["a","a","b","b","c","c","c"]);
compressingString(["a","b","b","b","b","b","b","b","b","b","b","b","b"]);
compressingString(["a"])