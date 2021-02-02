# alpinism

## Сайт услуг промышленного альпинизма.

В ходе реализации использовались следующие технологии: Vue/Nuxt, Python/Django.

```bash
Структура проекта:
Весь проект разбит на компоненты, разные по смыслу и функционалу элементы проекта.
Акцент всего проекта был сделан на услуги:
1. Возможность увидеть несколько услуг на главной странице,
   открыть список всех услуг, подробное описание каждой услуги, возможность группировки комплексных услуг(реализовано на фронте).
   Компонеты услуг:
   https://github.com/aazubakin/comercial-projects/blob/alpinism/alpinism/frontend/components/Services/ServiceItem.vue
   https://github.com/aazubakin/comercial-projects/blob/alpinism/alpinism/frontend/components/Services/ServiceItemPrice.vue
   https://github.com/aazubakin/comercial-projects/blob/alpinism/alpinism/frontend/components/Services/ServiceList.vue

2. Функции, которые повторяются в различных компонентах были вынесены в миксины:
  https://github.com/aazubakin/comercial-projects/blob/alpinism/alpinism/frontend/mixins/page.js
  https://github.com/aazubakin/comercial-projects/blob/alpinism/alpinism/frontend/mixins/sort.js

  Стоит отметить при написании миксина была допущена семантическая ошибка, когда в функции sort изменили
  props, при этом eslint не выдал нам эту ошибку. Из этого у нас сломались слайдеры на проде, мы почему то решили, что дело в слайдерах.
  Но подключив другой, с сохранением не работоспособности слайдера, стали искать дальше. В ходе по этапного разбора кода, нашли данную ошибку,
  иключив изменение массива в функции сортировки все слайдеры зароботали.

3. В папке utils находятся вспомогательные функции, описание которых целесообразно вынести в отдельных файл.
Тут находятся в том числе запросы к api:
https://github.com/aazubakin/comercial-projects/blob/alpinism/alpinism/frontend/utils/api.js

4. В проекте использовались следующие плагиы: owl carasuel, yandex maps, lightbox, go top.
Верстка и стили использовались с шаблона: https://templates.hibootstrap.com/constik/default/index-3.html
```
