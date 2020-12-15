// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов


const country = prompt('Укажите страну доставки');

if (!country) {
    alert('Отменено пользователем!');

} else if (Number.isInteger(+country)) {
    alert ('введите число');
}

else { 
    let normalizedCountry = country.toLowerCase();


switch (normalizedCountry) {
    case 'китай': {
        price = 100;
        console.log(`Доставка в ${normalizedCountry} будет стоить ${price} кредитов`)
        break;
    }
    case 'чили': {
        price = 250;
        console.log(`Доставка в ${normalizedCountry} будет стоить ${price} кредитов`)
        break;
        }
    case 'австралия': {
        price = 170;
        console.log(`Доставка в ${normalizedCountry} будет стоить ${price} кредитов`)
        break;
    }
        
     case 'индия': {
        price = 80;
        console.log(`Доставка в ${normalizedCountry} будет стоить ${price} кредитов`)
        break;
    }
    case 'ямайка': {
        price = 120;
        console.log(`Доставка в ${normalizedCountry} будет стоить ${price} кредитов`)
        break;
    }
        
    default:
        console.log ('В вашей стране доставка не доступна');
    }
    }


    
// let country= charAt(0).toUpperCase(); to check trim!