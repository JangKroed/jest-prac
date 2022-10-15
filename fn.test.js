const fn = require("./fn");

// toBe는 Matcher이다. 숫자열, 문자열을 비교
// test("1은 1이야", () => {
//   expect(1).toBe(1);
// });

// test("2 더하기 3은 5이야", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// // test("3 더하기 3은 5가 아니야", () => {
// //   expect(fn.add(3, 3)).not.toBe(5);
// // });

// // toEqual
// test("2 더하기 3은 5야", () => {
//     expect(fn.add(2, 3)).toEqual(5);
//   });

// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Mike", 30)).toEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Mike", 30)).toStrictEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

// toBeNull
// tobeUndefined
// toBeDefined

// test("null은 null입니다.", () => {
//   expect(null).toBeNull();
// });

// // toBeTruthy
// // toBeFalsy
// test("0은 false 입니다.", () => {
//   expect(fn.add(1, -1)).toBeFalsy();
// });

// // toBeGreaterThan 크다
// // toBeGreaterThanOrEqual 크거나 같다
// // toBeLessThan 작다
// // toBeLessThanOrEqual 작거나 같다

// test("ID는 10자 이하여야 합니다.", () => {
//   const id = "THE_BLACK";
//   expect(id.length).toBeLessThanOrEqual(10);
// });

// test("비밀번호 4자리", () => {
//   const pw = "1234";
//   expect(pw.length).toBe(4);
// });

// test("0.1 더하기 0.2 는 0.3 입니다.", () => {
//   expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
// });

// test("Hello World 에 a 라는 글자가 있나?", () => {
//   expect("Hello World").toMatch(/h/i);
// });

// // toContain

// test("유저 리스트에 Mike 가 있나?", () => {
//   const user = "Mike";
//   const userList = ["Tom", "Mike", "Kai"];
//   expect(userList).toContain(user);
// });

// // 에러 확인용
// test("이거 에러 나나요?", () => {
//   expect(() => fn.throwErr()).toThrow("xx");
// });

// 비동기 코드 테스트 - callback
// test("3초 후에 받아온 이름은 Mike", (done) => {
//   function callback(name) {
//     expect(name).toBe("Mike");
//     done();
//   }
//   fn.getName(callback);
// });

// test("3초 후에 받아온 이름은 Mike", (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (err) {
//       done();
//     }
//   }
//   fn.getName(callback);
// });

// Promise
// test("3초 후에 받아온 나이는 30", () => {
//   //   return fn.getAge().then((age) => {
//   //     expect(age).toBe(30);
//   //   });
//   //   return expect(fn.getAge()).resolves.toBe(30);
//   // 3초후에 에러가 납니다.
//   return expect(fn.getAge()).rejects.toMatch("err");
// });

// async, await
// test("3초 후에 받아온 나이는 30", async () => {
//   //   const age = await fn.getAge();
//   //   expect(age).toBe(30);
//   await expect(fn.getAge()).resolves.toBe(30);
// });

// 테스트 전후 작업
// let num = 0;

// // 테스트 이전에 초기화
// beforeEach(() => {
//   num = 0;
// });

// // 테스트 이후에 초기화
// afterEach(() => {
//   num = 0;
// });

// test("0 더하기 1은 1이야", () => {
//   num = fn.add(num, 1);
//   expect(num).toBe(1);
// });

// test("0 더하기 2은 2이야", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });

// test("0 더하기 3은 3이야", () => {
//   num = fn.add(num, 3);
//   expect(num).toBe(3);
// });

// test("0 더하기 4은 4이야", () => {
//   num = fn.add(num, 4);
//   expect(num).toBe(4);
// });

// beforAll, afterAll
// let user;

// beforeAll(async () => {
//   user = await fn.connecUserDb();
// });
// afterAll(() => {
//   return fn.disconnectDb();
// });

// test("이름은 Mike", () => {
//   expect(user.name).toBe("Mike");
// });

// test("나이는 30", () => {
//   expect(user.age).toBe(30);
// });

// test("성별은 남성", () => {
//   expect(user.gender).toBe("male");
// });

// // describe() 비슷한 것 묶기
// describe("Car 관련 작업", () => {
//   let car;

//   beforeAll(async () => {
//     car = await fn.connecCarDb();
//   });
//   afterAll(() => {
//     return fn.disconnectCarDb();
//   });

//   test("이름은 z4", () => {
//     expect(car.name).toBe("z4");
//   });

//   test("브랜드는 bmw", () => {
//     expect(car.brand).toBe("bmw");
//   });

//   test("색상은 red", () => {
//     expect(car.color).toBe("red");
//   });
// });

// beforeAll(() => console.log("밖 beforeAll")); // 1
// beforeEach(() => console.log("밖 beforeEach")); // 2, 6
// afterEach(() => console.log("밖 afterEach")); // 4, 10
// afterAll(() => console.log("밖 afterAll")); // 마지막

// test("0 + 1 = 1", () => {
//     console.log("밖 test")
//   expect(fn.add(0, 1)).toBe(1); // 3
// });

// descriobe("Car 관련 작업", () => {
//   beforeAll(() => console.log("밖 beforeAll")); // 5
//   beforeEach(() => console.log("밖 beforeEach")); // 7
//   afterEach(() => console.log("밖 afterEach")); // 9
//   afterAll(() => console.log("밖 afterAll"));  // 마지막 -1

//   test("0 + 1 = 1", () => {
//     console.log("안 test")
//     expect(fn.add(0, 1)).toBe(1); // 8
//   });
// });

// let num = 0;
// test("0 더하기 1 은 1", () => {
//   expect(fn.add(num, 1)).toBe(1);
// });
// test("0 더하기 2 은 2", () => {
//   expect(fn.add(num, 2)).toBe(2);
// });
// test("0 더하기 3 은 3", () => {
//   expect(fn.add(num, 3)).toBe(3);
// });
// // 건너뛰려면 test.skip
// test.skip("0 더하기 4 은 4", () => {
//   expect(fn.add(num, 4)).toBe(4);
//   num = 10;
// });
// // 하나만 테스트할때는 test.only
// test("0 더하기 5 은 5", () => {
//   expect(fn.add(num, 5)).toBe(5);
// });

// mock function

// const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// test("dd", () => {
//     // calls로 알 수 있는 것은 불린 횟수와 저장된 것을 배열로 볼 수 있다.
//   console.log(mockFn.mock.calls);
//   expect("dd").toBe("dd");
// });

// test("함수는 2번 호출됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// });

// test("2번째로 호출된 함수에 전달된 첫번째 인수는 1 입니다.", () => {
//   console.log(mockFn.mock.calls);
//   expect(mockFn.mock.calls[1][0]).toBe(1);
// });

// const mockFn = jest.fn();

// function forEachAdd1(arr) {
//   arr.forEach((num) => {
//     // fn(num + 1);
//     mockFn(num + 1);
//   });
// }

// forEachAdd1([10, 20, 30]);

// test("함수 호출은 3번 됩니다.",()=>{
//     expect(mockFn.mock.calls[0][0]).toBe(11)
//     expect(mockFn.mock.calls[1][0]).toBe(21)
//     expect(mockFn.mock.calls[2][0]).toBe(31)
// })

// const mockFn = jest.fn((num) => num + 1);

// mockFn(10);
// mockFn(20);
// mockFn(30);

// test("10에서 1 증가한 값이 반환된다..", () => {
//   // results에는 return된 값이 배열로 들어있다.
//   expect(mockFn.mock.results[0].value).toBe(11);
// });

// test("20에서 1 증가한 값이 반환된다..", () => {
//   expect(mockFn.mock.results[1].value).toBe(21);
// });

// test("30에서 1 증가한 값이 반환된다..", () => {
//   expect(mockFn.mock.results[2].value).toBe(31);
// });

// value - 실행될 때 마다 각각 다른 값을 return
const mockFn = jest.fn();

// mockFn
//   .mockReturnValueOnce(10)
//   .mockReturnValueOnce(20)
//   .mockReturnValueOnce(30)
//   .mockReturnValue(40);

// mockFn();
// mockFn();
// mockFn();
// mockFn();

// test("dd", () => {
//   console.log(mockFn.mock.results);
//   expect("dd").toBe("dd");
// });

// mock으로 짝수 찾기
// mockFn
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValue(true);

// const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

// test("홀수는 1,3,5", () => {
//   expect(result).toStrictEqual([1, 3, 5]);
// });

// 비동기 함수 흉내내기
// mockFn.mockResolvedValue({ name: "Mike" });

// test("받아온 이름은 Mike", () => {
//   mockFn().then((res) => {
//     expect(res.name).toBe("Mike");
//   });
// });

// mock을 사용할때 fakeDB사용법
// jest.mock("./fn");
// fn.createUser.mockReturnValue({ name: "Mike" });

// test("유저를 만든다", () => {
//   const user = fn.createUser("Mike");
//   expect(user.name).toBe("Mike");
// });

// 유용한 것들
mockFn(10, 20);
mockFn();
mockFn(30, 40);

test("한번 이상 호출?", () => {
  // 한번이라도 호출되면 통과
  expect(mockFn).toBeCalled();
});

test("정확히 세번 호출?", () => {
  // 전달받은 호출횟수 카운트
  expect(mockFn).toBeCalledTimes(3);
});

test("10이랑 20 전달받은 함수가 있는가?", () => {
  // 인수로 어떤 값들을 받아왔는가 - 함수로 전달 받은 단위
  expect(mockFn).toBeCalledWith(10, 20);
});

test("마지막 함수는 30이랑 40 받았음?", () => {
  // 마지막 함수로 받은 값만 체크
  expect(mockFn).lastCalledWith(30, 40);
});
