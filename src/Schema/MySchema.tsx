export type UserSchema = {
  name: string;
  username: string;
  email: string;
  sex: string;
  address: {
    street: string;
    city: string;
  };
  phone: number;
};

export type UserWithId = UserSchema & { id: number };
