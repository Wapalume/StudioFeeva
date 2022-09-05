const testModule = {
  state: {
    questions: [
      {
        id: 1,
        questionTitle: "Рост спортсменки",
        questionValues: [
          "< 120 см",
          "120 - 140 см",
          "140 - 160 см",
          "> 160 см",
        ],
      },
      {
        id: 2,
        questionTitle: "Из какой ткани будем шить?",
        questionValues: ["Бифлекс Корея", "Бифлекс Carvico Италия"],
      },
      {
        id: 3,
        questionTitle: "Какой дизайн костюма планируете?",
        questionValues: [
          "Сложный аппликационный дизайн, ручная роспись",
          "Несложный аппликационный дизайн",
          "Дизайн преимущественно ручной росписью",
          "Однотонный костюм",
        ],
      },
      {
        id: 4,
        questionTitle: "Сколько страз вы хотите?",
        questionValues: [
          "Стразы не нужны 😱",
          "Немного, подчеркнуть элементы дизайна",
          "Достаточно, чтобы костюм блестел и играл красками",
          "Весь покрытый стразами, абсолютно весь",
        ],
      },
      {
        id: 5,
        questionTitle: "Нужны ли пришивные камни?",
        questionValues: [
          "нет необходимости",
          "можно, немного (10-20 шт)",
          "чтобы было роскошно! (40-50 шт)",
        ],
      },
      {
        id: 6,
        questionTitle: "Необходимо оформление рукавов в стилистике костюма?",
        questionValues: [
          "1 рукав",
          "2 рукава",
          "Не нужно (однотонные рукава из сетки или бифлекса",
        ],
      },
      {
        id: 7,
        questionTitle: "Необходимо оформление леггинсов в стилистике костюма?",
        questionValues: ["Нужно", "Не нужно (однотонные леггинсы)"],
      },
    ],
    price: [
      {
        1: {
          1: 700,
          2: 900,
          3: 1100,
          4: 1300,
        },
        2: {
          1: 1500,
          2: 1700,
          3: 1900,
          4: 2100,
        },
      },
      {
        1: {
          1: 2250,
          2: 2700,
          3: 3300,
          4: 3600,
        },
        2: {
          1: 1800,
          2: 2100,
          3: 2400,
          4: 2700,
        },
        3: {
          1: 1800,
          2: 2100,
          3: 2400,
          4: 2700,
        },
        4: {
          1: 1400,
          2: 1600,
          3: 1800,
          4: 2000,
        },
      },
      {
        1: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
        },
        2: {
          1: 600,
          2: 800,
          3: 1000,
          4: 1200,
        },
        3: {
          1: 1500,
          2: 2000,
          3: 2500,
          4: 3000,
        },
        4: {
          1: 3000,
          2: 4000,
          3: 5000,
          4: 6000,
        },
      },
      {
        1: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
        },
        2: {
          1: 1300,
          2: 1300,
          3: 1300,
          4: 1300,
        },
        3: {
          1: 3000,
          2: 3000,
          3: 3000,
          4: 3000,
        },
      },
      {
        1: {
          1: 600,
          2: 600,
          3: 600,
          4: 600,
        },
        2: {
          1: 1200,
          2: 1200,
          3: 1200,
          4: 1200,
        },
        3: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
        },
      },
      {
        1: {
          1: 1000,
          2: 1000,
          3: 1000,
          4: 1000,
        },
        2: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
        },
      },
    ],
    height: 0,
    currentPage: 0,
    results: [],
    resultcount: [],
  },
  mutations: {
    putquiz(state, payload) {
      state.results.push(payload.value);
      state.resultcount.push(
        state.price[payload.currentPage][payload.value][state.height]
      );
      console.log(state.resultcount);
    },
    selectHeight(state, payload) {
      state.height = payload.value;
      console.log(state.height);
    },
    nextQuest(state) {
      state.currentPage++;
    },
  },
  getters: {
    getQuestions(state) {
      return state.questions;
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
    getResults(state) {
      return state.results;
    },
    getAmmountPrice(state) {
      var result = 0;
      for (var i = 0; i < state.resultcount.length; i++) {
        result += state.resultcount[i];
      }
      console.log(result);
      return result;
    },
  },
};

export default testModule;
