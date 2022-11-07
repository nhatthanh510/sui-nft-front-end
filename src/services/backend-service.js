import { faker } from "@faker-js/faker";

export const dummyNftList = [];

export function createRandomUser() {
  return {
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  dummyNftList.push(createRandomUser());
});

export const getListNft = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyNftList);
    }, 1500);
  });
};
