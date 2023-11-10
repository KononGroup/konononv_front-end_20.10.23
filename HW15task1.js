const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = function (length, characters) {
    const base = characters.length;
    let key = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * base);
        key += characters[index];
    };
    return key;
}

const key = generateKey(16, characters);
console.log(key); 
