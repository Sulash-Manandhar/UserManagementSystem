import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Select,
  Button,
  Box,
  WrapItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUserIdContext } from "../context/UserIdContext";
import { UserWithId } from "../Schema/MySchema";

interface Address {
  city: string;
  street: string;
}

const EditUserForm = () => {
  const { userId } = useUserIdContext();
  const [viewForm, setViewForm] = useState(true);
  const [userData, setUserData] = useState<UserWithId>();
  const [temp, setTemp] = useState<UserWithId>();

  useEffect(() => {
    axios
      .get(`http://localhost:4001/users/${userId}`)
      .then((res: any) => {
        setUserData(res.data);
        setTemp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const updateData = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4001/users/${userId}`, userData)
      .then((res) => {
        console.log(res);
        window.alert("Success");
        setViewForm(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUserInputData = (e: any) => {
    e.preventDefault();
    if (e.target.name === "city" || e.target.name === "street") {
      setUserData({
        ...(userData as UserWithId),
        address: {
          ...(userData?.address as Address),
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setUserData({
        ...(userData as UserWithId),
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <Flex
      w={"100%"}
      direction="column"
      gap={"10px"}
      pb="2"
      borderBottom="2px solid teal"
    >
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
            value={userData?.name}
            readOnly={viewForm}
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
            value={userData?.username}
            readOnly={viewForm}
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
          value={userData?.email}
          readOnly={viewForm}
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
            value={userData?.sex}
            isReadOnly={viewForm}
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
            value={userData?.phone}
            readOnly={viewForm}
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
            value={userData?.address?.city}
            readOnly={viewForm}
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
            value={userData?.address?.street}
            readOnly={viewForm}
            onChange={updateUserInputData}
          />
        </FormControl>
      </Flex>
      <Box textAlign={"right"}>
        {viewForm ? (
          <Button
            colorScheme="yellow"
            color={"white"}
            onClick={() => setViewForm(false)}
          >
            Edit
          </Button>
        ) : (
          <>
            <Button
              _hover={{ bg: "darkBlue" }}
              bg="blue"
              color={"white"}
              mr="5"
              onClick={updateData}
            >
              Save
            </Button>
            <Button
              colorScheme="gray"
              onClick={() => {
                setUserData({ ...(temp as UserWithId) });
                setViewForm(true);
              }}
            >
              Cancel
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default EditUserForm;
