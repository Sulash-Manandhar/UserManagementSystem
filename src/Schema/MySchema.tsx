export type UserSchema = {
  name: string;
  username: string;
  email: string;
  sex: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
};

export type UserWithId = UserSchema & { id: number };
