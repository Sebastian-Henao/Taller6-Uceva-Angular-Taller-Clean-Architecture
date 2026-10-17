export const faker = {
  person: {
    firstName: () => 'John',
    lastName: () => 'Doe',
  },
  number: {
    int: () => 25,
  },
  internet: {
    email: () => 'test@example.com',
  },
  helpers: {
    arrayElement: <T>(arr: T[]): T => arr[0],
  },
  commerce: {
    productName: () => 'Test Product',
    price: () => 10,
  },
};
