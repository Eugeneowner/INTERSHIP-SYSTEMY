import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: 1,
  currentPage: 1,
  pagesTitle: [ 
    "Заполните данные отправителя",
    "Заполните данные получателя",
    "Заполните данные о содержимом посылки",
    "ГОТОВО! Пожалуйста, проверьте данные"
    
  ],
  pages: [
    [
      {
        label: "Имя",
        placeholder: "Joe",
        name: "firstnameS",
      },
      {
        label: "Фамилия",
        placeholder: "Joe",
        name: "lastnameS",
      },
      {
        label: "Телефон",
        placeholder: "+380",
        name: "phoneS",
      },
      {
        label: "E-mail",
        placeholder: "example@gmail.com",
        name: "emailS",
      },
      {
        label: "Город",
        placeholder: "Введите город отправителя",
        name: "cityS",
      },
      {
        label: "Индекс",
        placeholder: "Введите индекс отправителяs",
        name: "indexSender",
      },
      {
        label: "Адрес отправителя",
        placeholder: "Введите адрес отправителя",
        name: "addressSender",
        size: "big",
      },
    ],
    [
      {
        label: "Имя2",
        placeholder: "Joe",
        name: "firstnameR",
      },
      {
        label: "Фамилия2",
        placeholder: "Joe",
        name: "lastnameR",
      },
      {
        label: "Телефон2",
        placeholder: "+380",
        name: "phoneR",
      },
      {
        label: "E-mail2",
        placeholder: "example@gmail.com",
        name: "emailR",
      },
      {
        label: "Город",
        placeholder: "Введите город отправителя",
        name: "cityR",
      },
      {
        label: "Индекс",
        placeholder: "Введите индекс отправителяs",
        name: "indexRecipient",
      },
      {
        label: "Адрес отправителя",
        placeholder: "Введите адрес отправителя",
        name: "addressRecipient",
        size: "big",
      },
    ],
    [
      {
        label: "Описание содержимого посылки",
        placeholder: "Введите название товара",
        name: "description",
        size: "big",
      },
      {
        label: "Приблизительный вес посылки кг",
        placeholder: "Укажите вес товара",
        name: "weight",
      },
      {
        label: "Оценочная стоимость посылки €",
        checkbox: {
          text: "цена выше 150€",
          name: "isRich150",
        },
        placeholder: "Укажите цену",
        name: "price",
      },
    ],
  ],
  info: {
    firstnameS: "",
    lastnameS: "",
    phoneS: "",
    emailS: "",
    cityS: "",
    indexSender: "",
    addressSender: "",
    firstnameR: "",
    lastnameR: "",
    phoneR: "",
    emailR: "",
    cityR: "",
    indexRecipient: "",
    addressRecipient: "",
    description: "",
    weight: "",
    price: "",
    isRich150: false,
  },
  pagesInfo: [
    [
      "firstnameS",
      "lastnameS",
      "phoneS",
      "emailS",
      "cityS",
      "indexSender",
      "addressSender",
    ],
    [
      "firstnameR",
      "lastnameR",
      "phoneR",
      "emailR",
      "cityS",
      "indexRecipient",
      "addressRecipient",
    ],
    ["description", "weight", "price"],
  ],
  error: null,
};

const checkInputValue = (page, pagesInfo, info) => {
  let error = false;
  pagesInfo[page - 1].forEach((item) => {
    if (!error) {
      if (info[item].length === 0) {
        console.log(`${item} - Yes `);
        error = item;
      }
    }
  });
  return error;
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    changePlan: (state, { payload }) => {
      state.plan = payload;
    },
    changeFormInput: (state, { payload }) => {
      const { type, value } = payload;
      if (type === "price" && Number(value) > 150) { 
        state.info.isRich150 = true
      }
      state.info[type] = value;
    },
    nextPage: (state) => {
      const error = checkInputValue(
        state.currentPage,
        state.pagesInfo,
        state.info
      );
      state.error = error;
      if (!error) {
        state.currentPage += 1;
      }
    },
    prevPage: (state) => { 
      if ( state.currentPage !== 1){
        state.currentPage -= 1
      }
    },
    resetPage: state => {
      state.currentPage = 1
    }
  },
});

export const { changeFormInput, changePlan, nextPage, resetPage, prevPage } = orderSlice.actions;

export default orderSlice.reducer;
