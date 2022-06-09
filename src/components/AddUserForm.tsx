import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Select,
  Button,
} from "@chakra-ui/react";
const AddUserForm = () => {
  return (
    <form action="">
      <Flex w={"100%"} direction="column" gap={"15px"}>
        <Flex gap={5}>
          {/* Full Name  */}
          <FormControl _focus={{ boxShadow: "outline" }}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              placeholder={"Full Name"}
              _focus={{ boxShadow: "outline" }}
            />
          </FormControl>
          {/* UserName  */}
          <FormControl>
            <FormLabel htmlFor="uname">Username</FormLabel>
            <Input
              id="uname"
              type="text"
              placeholder={"username"}
              _focus={{ boxShadow: "outline" }}
            />
          </FormControl>
        </Flex>
        {/* Email Address  */}
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder={"career@diagonal.software"}
            _focus={{ boxShadow: "outline" }}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <Flex gap={5}>
          {/* Sex */}
          <FormControl>
            <FormLabel htmlFor="Sex">Sex</FormLabel>
            <Select id="Sex" placeholder="Select sex" required>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Select>
          </FormControl>
          {/* Phone Number  */}
          <FormControl>
            <FormLabel htmlFor="number">Phone</FormLabel>
            <Input
              id="number"
              type="number"
              placeholder={"98******"}
              _focus={{ boxShadow: "outline" }}
            />
          </FormControl>
        </Flex>

        <Flex gap={5}>
          {/* Street  */}
          <FormControl _focus={{ boxShadow: "outline" }}>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input
              id="city"
              type="text"
              placeholder={"City Name"}
              _focus={{ boxShadow: "outline" }}
            />
          </FormControl>
          {/* City  */}
          <FormControl>
            <FormLabel htmlFor="street">Street</FormLabel>
            <Input
              id="street"
              type="text"
              placeholder={"Your Street"}
              _focus={{ boxShadow: "outline" }}
            />
          </FormControl>
        </Flex>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default AddUserForm;
