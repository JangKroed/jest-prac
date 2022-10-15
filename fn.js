const fn = {
  add: (num1, num2) => num1 + num2,
  createUser: (name) => {
    console.log("실제로 사용자가 생성되었습니다.");
    return {
      name,
    };
  },
  connecUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "Mike",
          age: 30,
          gender: "male",
        });
      }, 500);
    });
  },
  disconnectDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },

  connecCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "bmw",
          name: "z4",
          color: "red",
        });
      }, 500);
    });
  },
  disconnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },

  //   makeUser: (name, age) => ({ name, age, gender: undefined }),
  //   throwErr: () => {
  //     throw new Error("xx");
  //   },

  //   // 비동기 코드 테스트 - Callback
  //   getName: (callback) => {
  //     const name = "Mike";
  //     setTimeout(() => {
  //       //   callback(name);
  //       throw new Error("서버 에러..");
  //     }, 3000);
  //   },
  //   // Promise
  //   getAge: () => {
  //     const age = 30;
  //     return new Promise((res, rej) => {
  //       setTimeout(() => {
  //         res(age);
  //         // rej("err");
  //       }, 3000);
  //     });
  //   },
};

module.exports = fn;
