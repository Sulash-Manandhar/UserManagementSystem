import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Select,
  Button,
  ListItem,
  List,
  Box,
  Alert,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { UserSchema } from "../Schema/MySchema";
import { AiFillWarning } from "react-icons/ai";

const AddUserForm = () => {
  const [userInputData, setUserInputData] = useState<UserSchema>({
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

  interface errorMessage {
    msg: string;
  }
  const [errorsMessages, setErrorMessages] = useState<errorMessage[]>([]);

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

  const validateForm = (userInputData: UserSchema): boolean => {
    let errors = [];
    if (
      userInputData.name === "" ||
      userInputData.username === "" ||
      userInputData.email === "" ||
      userInputData.phone === 0 ||
      userInputData.address.street === "" ||
      userInputData.address.city === ""
    ) {
      errors.push({ msg: "Details are missing " });
    }
    if (errors.length > 0) {
      setErrorMessages(errors);
      return false;
    } else {
      if (!/\b[a-z]{5,}\b/g.test(userInputData.username)) {
        errors.push({ msg: "Username must contain only lowercase" });
      }
      if (errors.length > 0) {
        setErrorMessages(errors);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateForm(userInputData)) {
      axios
        .post("http://localhost:4001/users", userInputData)
        .then((res) => {
          if (res.status > 200 && res.status < 210) {
            setErrorMessages([]);
            console.log("Success");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Flex w={"100%"} direction="column" gap={"10px"}>
      <Box mb="10">
        {errorsMessages.length > 0 &&
          errorsMessages.map((item, index) => (
            <List spacing={1} key={index}>
              <ListItem>
                <Alert background="tomato" borderRadius={6} color={"white"}>
                  <Flex alignItems={"center"} gap="3">
                    <AiFillWarning />
                    {item.msg}
                  </Flex>
                </Alert>
              </ListItem>
            </List>
          ))}
      </Box>
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
    </Flex>
  );
};

export default AddUserForm;
