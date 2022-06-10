import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Select,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { UserSchema } from "../Schema/MySchema";

const AddUserForm = () => {
  const [userInputData, setUserInputData] = useState<UserSchema>({
    id: 0,
    name: "",
    username: "",
    email: "",
    sex: "Male",
    phone: 0,
    address: {
      street: "",
      city: "",
    },
  });

  const updateUserInputData = (e: any) => {
    e.preventDefault();
    let temp;
    if (e.target.name === "city" || e.target.name === "street") {
      temp = {
        ...userInputData,
        address: {
          ...userInputData.address,
          [e.target.name]: e.target.value,
        },
      };
    } else {
      temp = { ...userInputData, [e.target.name]: e.target.value };
    }
    // console.log(temp);
    setUserInputData(temp);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(userInputData);
  };

  return (
    <Flex w={"100%"} direction="column" gap={"15px"}>
      <form action="">
        <Flex gap={5}>
          {/* Full Name  */}
          <FormControl _focus={{ boxShadow: "outline" }}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder={"Full Name"}
              _focus={{ boxShadow: "outline" }}
              onChange={updateUserInputData}
              required
            />
          </FormControl>
          {/* UserName  */}
          <FormControl>
            <FormLabel htmlFor="uname">Username</FormLabel>
            <Input
              id="uname"
              type="text"
              name="username"
              pattern="[a-z]{5,}"
              placeholder={"username"}
              _focus={{ boxShadow: "outline" }}
              onChange={updateUserInputData}
              required
            />
          </FormControl>
        </Flex>
        {/* Email Address  */}
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder={"career@diagonal.software"}
            _focus={{ boxShadow: "outline" }}
            onChange={updateUserInputData}
            required
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <Flex gap={5}>
          {/* Sex */}
          <FormControl>
            <FormLabel htmlFor="Sex">Sex</FormLabel>
            <Select
              id="Sex"
              placeholder="Select sex"
              name="sex"
              onChange={updateUserInputData}
              required
            >
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"Other"}>Other</option>
            </Select>
          </FormControl>
          {/* Phone Number  */}
          <FormControl>
            <FormLabel htmlFor="number">Phone</FormLabel>
            <Input
              id="number"
              type="tel"
              name="phone"
              pattern="[9]{1}[9]{1}[0-9]{8}"
              placeholder={"98******"}
              _focus={{ boxShadow: "outline" }}
              onChange={updateUserInputData}
              required
            />
          </FormControl>
        </Flex>

        <Flex gap={5}>
          {/* cITY  */}
          <FormControl _focus={{ boxShadow: "outline" }}>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input
              id="city"
              type="text"
              name="city"
              placeholder={"City Name"}
              _focus={{ boxShadow: "outline" }}
              onChange={updateUserInputData}
              required
            />
          </FormControl>
          {/* Street  */}
          <FormControl>
            <FormLabel htmlFor="street">Street</FormLabel>
            <Input
              id="street"
              type="text"
              name="street"
              placeholder={"Your Street"}
              _focus={{ boxShadow: "outline" }}
              onChange={updateUserInputData}
              required
            />
          </FormControl>
        </Flex>
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          w="100%"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </Flex>
  );
};

export default AddUserForm;
