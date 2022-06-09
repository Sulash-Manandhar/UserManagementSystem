import React, { useContext, createContext, useState } from "react";
interface Props {
  children: React.ReactNode;
}
interface UserIdSchema {
  userId: number;
  handleUserId: (userId: number) => void;
}

export const UserIdContext = createContext<UserIdSchema>({
  userId: 1,
  handleUserId: (userId: number) => {},
});

export const useUserIdContext = () => useContext(UserIdContext);

const UserIdProvider: React.FC<Props> = ({ children }) => {
  const [userId, setUserId] = useState<number>(0);

  const handleUserId = (userId: number) => {
    setUserId(userId);
  };

  return (
    <UserIdContext.Provider value={{ userId, handleUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};

export default UserIdProvider;
