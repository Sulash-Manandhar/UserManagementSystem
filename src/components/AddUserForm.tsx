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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { UserSchema } from "../Schema/MySchema";
import { AiFillWarning } from "react-icons/ai";
interface Props {
  handlePageNavigation: (params: string) => void;
}
const AddUserForm: React.FC<Props> = (props) => {
  const toast = useToast();
  const { handlePageNavigation } = props;

  const [userInputData, setUserInputData] = useState<UserSchema>({
    name: "",
    username: "",
    email: "",
    sex: "Male",
    phone: "",
    address: {
      street: "",
      city: "",
    },
  });

  interface errorMessage {
    msg: string;
  }
  const [errorsMessages, setErrorMessages] = useState<errorMessage[]>([]);

  //@desc handle form input change
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

  //@desc form validation
  const validateForm = (userInputData: UserSchema): boolean => {
    let errors = [];
    let validPhoneNumber = /\b[9]{1}[8]{1}[0-8]{8}\b/g;
    if (
      userInputData.name === "" ||
      userInputData.username === "" ||
      userInputData.email === "" ||
      userInputData.phone === "" ||
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
      // if (!validPhoneNumber.test(userInputData.phone)) {
      //   errors.push({
      //     msg: "Phone number must be 10 digits. Pattern (98********)",
      //   });
      // }
      if (errors.length > 0) {
        setErrorMessages(errors);
        return false;
      }
    }
    return true;
  };

  //@desc handle from submission
  //@route /users
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateForm(userInputData)) {
      axios
        .post("http://localhost:4001/users", userInputData)
        .then((res) => {
          if (res.status > 200 && res.status < 210) {
            setErrorMessages([]);
            setUserInputData({
              name: "",
              username: "",
              email: "",
              sex: "Male",
              phone: "",
              address: {
                street: "",
                city: "",
              },
            });
            //@desc success toast
            toast({
              title: "User Added Successfully",
              description: "You can view your profile from dashboard",
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "bottom-right",
            });
          } else {
            //@desc error toast
            toast({
              title: "Error Adding user",
              description: "There was an error adding user",
              status: "error",
              duration: 9000,
              isClosable: true,
              position: "bottom-right",
            });
          }
          handlePageNavigation("Home");
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
