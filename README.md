# Тестовое задание от --НАЗВАНИЕ ОРГАНИЗАЦИИ--

[Вакансия](https://hh.ru/vacancy/49507551 "Junior Frontend-разработчик в AI")  
[Задание](https://s.neurus.ru/vuejstesttask1 "Задание")  
_[Ссылка на приложение](https://beagle-elgaeb.github.io/test-neurus/ "Приложение")_

<p>
  <a href="https://developer.mozilla.org/ru/docs/Web/CSS"><img src="readme/icon-css3.svg" alt="CSS3"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://developer.mozilla.org/ru/docs/Glossary/HTML5"><img src="readme/icon-html5.svg" alt="HTML5"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript"><img src="readme/icon-js.svg" alt="JS"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://v3.ru.vuejs.org/"><img src="readme/icon-vue.svg" alt="Vue"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://next.vuex.vuejs.org/"><img src="readme/icon-vuex.svg" alt="Vuex"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <!--
  <a href="https://vitejs.dev/guide/"><img src="readme/icon-vite.svg" alt="Vite"></a> 
    <img src="readme/icon-whitespace-5px.svg"/>
  -->
  <a href="https://yarnpkg.com/"><img src="readme/icon-yarn.svg" alt="Yarn"></a>
</p>

## Задание

1. Реализовать хранилище `Vuex`, в котором будут храниться товары из приложенного файла, сгруппированные по id сессии
2. Создать простой пользовательский интерфейс, показывающий сессии, каждая сессия одна за другой
3. В этом пользовательском интерфейсе должна быть возможность:

- изменить количество конкретных продуктов
- удалить продукт из списка
- добавить новый продукт
- изменить сеанс продукта

4. Сделать возможным отправить сеанс (отметить его как отправленный в `vuex` и сделать невозможным его последующее изменение)

#### Теоретические вопросы

- В производстве у нас было бы 100 тысяч событий в день, как вы предлагаете работать с этим объемом данных?
- Как вы можете предложить использовать здесь веб-сокеты?
  Если речь о клиенте конкретного пользователя, а ему должны приходить только его собственные события, а это значительно меньшее количество операций.  
  Но в случае, если компьютерное видение может записывать много лишних операций, разумно делать первичную обработку событий на сервере. А на фронтенде делать отложенную на пару секунд отрисовку (с помощью веб-сокетов), чтобы успевало накапливаться какое-то разумное количество уже подготовленных данных.  
  Также стоит сделать для пользователя онлайн изменение списка товаров и сесий, принимаемых с помощью веб-сокетов.

- Какие оптимизации vue, по вашему мнению, важно учитывать?
  Вероятно было бы полезно замораживать списки товаров после их сохранения (Object.freeze).

### Задачи проекта

Демонстрация компетенций в соответствии с тестовым заданием.

## Функциональность получившегося приложения

В соответствии с заданием.  
Также:

- [страница размещена на GitHub Pages](https://beagle-elgaeb.github.io/test-neurus/ "Выполненое тестовое задание");
- страница адаптируется в пределах 280-700px.

## Возможные улучшения

- не предполагаются.

## Директории

- `/src` — рабочая папка проекта;
- `/readme` — папка с иконками стека;
- остальные директории вспомогательные, создаются при необходимости разработчиком.

## Как использовать

Установка сопутствующих библиотек:  
`yarn`

Локальный запуск приложения:  
`yarn dev`

Сборка приложения:  
`yarn build`

Деплой приложения на GH Pages:  
`yarn deploy`

---

## Связаться со мной

<p>
  <a href="https://t.me/evgevgevge"><img src="readme/icon-tg.svg" alt="Telegram"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="mailto:beagle-elgaeb@ya.ru"><img src="readme/icon-mail.svg" alt="Mail"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://www.instagram.com/evg._.su/"><img src="readme/icon-inst.svg" alt="Instagram"></a>
</p>
