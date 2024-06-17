//test bot
const TOKEN = '7384728233:AAEqn5NrLORpp-CpywQkperU_Rk0YS7exLM';
const CHAT_ID = '951582541';

// TG BOT START
// const TOKEN = '7363871608:AAFrCmY9oX2-fYIfEfGIWWiiaRU9BiylqCg';
// const CHAT_ID = '-1002227620906';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


// // //TRELLO BOT START

const TRELLO_API_KEY = 'd0827a93b81c8ee3d2a8d429f03ee94d';
const TRELLO_API_TOKEN = 'ATTAe13c971304ee5aef49bc60bee64f4f831430c37a07036304d6ace681bbbd4a078E6013ED';
const TRELLO_BOARD_ID = 'j9qwCoBc';
const TRELLO_LIST_NAME = 'Заявки'; // Имя списка, куда нужно добавить карточку на Trello

//form variables

let productName = document.getElementById("productName");
const placeOrderForm = document.getElementById("placeOrderForm");
let nameInput = document.querySelector( '#userName' );


let tapkiSize = document.getElementById("tapkiSize");

//перевірка номеру
let inputPhone = document.querySelector( '#phone' );	
// Маска для телефона
const mask = new IMask( inputPhone, {
	mask:`{+373}(00)00-00-00`,
	lazy: false
} );


function checkInput() {
    if (inputPhone.value.length > 0 && inputPhone.value[5] == '0' || inputPhone.value[0] == 0) {
        inputPhone.value = '';
    }
}

//phone validation and send oreder to bot and trello

placeOrderForm.addEventListener("submit", ( e ) =>{
	e.preventDefault();
    if (!inputPhone.value || inputPhone.value.indexOf('_') !== -1) {
		alert('Введие правильный номер телефона.');
        return false;
	}

    let messageTG = `Заявка c сайта: ${productName.value} \n
	Имя: ${nameInput.value} \n
	Номер: ${inputPhone.value} \n
	Размер: ${tapkiSize.value}`;

    let message = `Заявка c сайта: ${productName.value} \n
	Имя: ${nameInput.value} \n
	Номер: ${inputPhone.value} \n
    Размер: ${tapkiSize.value} \n
    Количество: \n 
	Адрес: \n `;
    console.log(message);

	axios.post(URI_API, {
			chat_id: CHAT_ID,
			parse_mode: 'html',
			text: messageTG
		})
		.then( ( res ) => {
            console.log("all good");
			// alert("All good!")
            // location.href = "thank-you-page.html";
		} )
		.catch( ( err ) => {
			console.log(err);
			alert("Ошибка!")
			sendOrderForm.reset();
		} )
        //TGbot send data end
        
        //send order Trello start

        axios.get(`https://api.trello.com/1/boards/${TRELLO_BOARD_ID}/lists?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`)
        .then((res) => {
            const lists = res.data;
            const list = lists.find(l => l.name === TRELLO_LIST_NAME);
            if (list) {
                // Добавление карточки в список
                axios.post(`https://api.trello.com/1/cards`, {
                    key: TRELLO_API_KEY,
                    token: TRELLO_API_TOKEN,
                    idList: list.id,
                    name: `Заявка c сайта: foam.codeshop.md \n Имя: ${nameInput.value} \n Номер: ${inputPhone.value}`,
                    desc: message
                })
                .then((res) => {
                    console.log("Заявка успешно добавлена в Trello:", res.data);
                    setTimeout(() => {
                        location.href = "thank-you-page.html";
                    }, 100);
                })
                .catch((err) => {
                    console.error("Ошибка при добавлении заявки в Trello:", err);
                    alert("Ошибка при отправке в Trello!");
                });
            } else {
                console.error("Список с именем 'Заявки' не найден");
                alert("Список с именем 'Заявки' не найден");
            }
        })
        .catch((err) => {
            console.error("Ошибка при получении списков Trello:", err);
            alert("Ошибка при получении списков Trello!");
        });
});