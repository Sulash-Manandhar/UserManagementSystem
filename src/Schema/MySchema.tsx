export type UserSchema = {
  id: number;
  name?: string;
  username?: string;
  email?: string;
  sex?: string;
  address: {
    street: string;
    city: string;
  };
  phone: number;
};
