document.addEventListener('DOMContentLoaded', () => {

    // Tabs (Lesson 038)

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');


    function hideTabContent() {
        for (const tabContent of tabsContent) {
            tabContent.classList.add('hide');
            tabContent.classList.remove('show', 'fade');
        }

        for (const tab of tabs) {
            tab.classList.remove('tabheader__item_active');
        }

    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {

        const target = event.target;

        if (target && target.matches('.tabheader__item')) {
            tabs.forEach((tab, i) => {
                if (target == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });

        }
    });

    // Timer (Lesson 041)

    // Функция помощник. Если число однозначное - добавляет нуль
    function getZero(num) {
        if (num >= 0 && num < 10) {
            num = "0" + num;
        }
        return num;
    }

    const now = new Date();

    // const now = new Date(2021, 10, 7, 20);
    const currentYear = now.getFullYear(); // получить год
    const currentMonth = now.getMonth(); // получить месяц
    const currentDate = now.getDate(); // получить число (день)
    // const currentDay = now.getDay(); // получить день недели
    // const currentTime = now.getTime('1974-05-30T17:00:00.737Z'); // получить число (день)

    // Определим крайнюю дату (дедлайн). Текущая дата + 3 дня
    const deadline = `${currentYear}-${getZero(currentMonth + 1)}-${getZero(currentDate + 3)}`; // формат "2021-12-31";


    // Функция, определяет разницу между дедлайном и текущим временем
    function getTimeRemain(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), // переводим разницу во времени в формате милисекунд
            days = Math.floor(t / (24 * 3600 * 1000)),
            hours = Math.floor((t / (3600 * 1000)) % 24),
            minutes = Math.floor((t / (60 * 1000)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        // возвращаем данные в виде объекта
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }


    // Устанавливает значения обратного отсчета в html
    // В функцию передаем имя блока и время дедлайна (".timer")
    function setClock(endtime) {
        const timer = document.querySelector('.timer'),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),

            // устанавливаем интервал смены значений в 1 сек.
            timeInterval = setInterval((updateClock), 1000);

        updateClock();

        // обновляет значения таймера в html
        function updateClock() {
            const t = getTimeRemain(deadline);


            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            // если наступил дедлайн остановить таймер
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    // Запускаем таймер
    setClock(deadline);



    // ======== MODAL =========
    const modalTriggers = document.querySelectorAll('[data-modal]'),
        modalWindow = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]');

    // ЭТО БЫЛ МОЙ ВАРИАНТ
    // modalTriggers.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         modalWindow.style.display = 'block';
    //     });
    // });

    // modalClose.addEventListener('click', () => {
    //     modalWindow.style.display = 'none';
    // });


    // Открывает модальное окно
    function showModal() {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        // отключаем функцию автоматического вызова окна
        // если пользователь сам его открыл
        clearInterval(modalTimerId);
    }

    // Открывает модальное окно когда пользователь доскролил до конца страницы
    // и отключает обработчик страницы "скролл"
    function showModalByScroll() {
        if (window.pageYOffset + // отскроленная область страницы
            document.documentElement.clientHeight >= // высота видимой части страницы
            document.documentElement.scrollHeight) { // общая высота страницы
            showModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    // Закрывает модальное окно
    function closeModal() {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = 'auto';
    }


    //ВАРИАНТ ОТ ПРОФЕССИОНАЛА
    // Открыть модальное окно после нажатия на кнопку
    modalTriggers.forEach(btn => {
        btn.addEventListener('click', showModal);
    });

    // Закрыть модальное окно после нажатия на кнопку
    modalClose.addEventListener('click', closeModal);

    // Закрыть модальное окно после нажатия на фоновую область модального окна 
    modalWindow.addEventListener('click', (event) => {
        if (event.target.className == 'modal show') {
            closeModal();
        }
    });

    // Закрыть модальное окно после нажатия на кнопку Esc при включенном модальном окне 
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });

    // Открытие модального окна через интервал в 3 сек
    // const modalTimerId = setTimeout(showModal, 3000);

    // Открытие модального окна когда пользователь доскролил до конца страницы
    window.addEventListener('scroll', showModalByScroll);


    // Урок 048. Классы
    // *******************************************************
    
    // Динамические данные. Поступают от сервера

    const title = [
        'Фитнес',
        'Премиум',
        'Постное'
    ],
    
    src = [
        'img/tabs/vegy.jpg',
        'img/tabs/elite.jpg',
        'img/tabs/post.jpg'
    ],

    alt = [
        'vegy',
        'elite',
        'post'
    ],

    descr = [
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.'
    ],

    cost = [5, 9, 3],

    classes = ['menu__item', 'menu__item', 'menu__item'];

    
    // Создаем КОНЦЕПТ карточек с меню с использованием класса

    class MenuItem {
        constructor(src, alt, title, descr, cost, parentSelector, ...classes) {
            this.cardImgSrc = src; // ссылка на изображение
            this.cardImgAlt = alt; // информация об изображении
            this.cardTitle = title; // заголовок карточки
            this.cardDescr = descr; // описание карточки
            this.cardCost = cost; // стоимость продукта
            this.classes = classes; // массив имен классов
            this.parent = document.querySelector(parentSelector); // селектор-класс родителя
            this.currencyRate = 72; //Курс валют
            this.changeToRub(); //Метод переводит цену в рубли
        }

        //Конвертирование валют: из $ -> руб
        changeToRub() {
            this.cardCost = this.cardCost * this.currencyRate;
        }

        //Формирует динамический элемент и вставляет в html
        render() {
            //1 Создаем элемент (карточку)

            // Создаем новый элемент
            const element = document.createElement('div');

            // Если имя класса не передано, по умолчанию для карточки использовать класс 'menu__item'
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                //Присваиваем созданному элементу все классы REST (из массива)
                this.classes.forEach(className => element.classList.add(className));
                // element.className = 'menu__item';

            }

            // Создаем html структуру внутри созданного элемента
            element.innerHTML = `
                <img src=${this.cardImgSrc} alt=${this.cardImgAlt}>
                <h3 class="menu__item-subtitle">${this.cardTitle}</h3>
                <div class="menu__item-descr">${this.cardDescr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.cardCost}</span> руб/день</div>
                </div>
            `;

            // ***************************************************
            // *                Моя попытка                      *
            // ***************************************************
            // const items = document.querySelector('.menu__item'),
            // pic = items.querySelector('img'),
            // title = items.querySelector('.menu__item-subtitle'),
            // descr = items.querySelector('.menu__item-descr'),
            // cost = items.querySelector('span');
            
            // pic.src = this.cardImgSrc;
            // title.textContent = this.cardTitle;
            // descr.textContent = this.cardDescr;
            // cost.textContent = this.cardCost;
            // ***************************************************
            // ***************************************************

            // 2 Пушим структуру вовнутрь родительского элемента
            this.parent.append(element);
        }
    }

    // Создаем массив объектов (карточек)
    // Добавляем элементы массива (карточки) в html
    const menus = [];
    let i = 0;
    for (0; i <= 2; i++) {
        menus[i] = new MenuItem(src[i], alt[i], title[i], descr[i], cost[i], '.menu__field .container', classes[i]).render();
    }
    
});