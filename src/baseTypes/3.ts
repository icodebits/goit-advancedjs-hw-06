let some:unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') { // Перевірка тип some як string
    str = some;
} else {
    // Обробка випадку, коли some не є строкою
}

export {};