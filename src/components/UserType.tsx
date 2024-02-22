//Selection list:
//  Instructor
//  Student
//  Administrator
//  SystemAdministrator

import { FormLabel, Select } from "@chakra-ui/react";
import userTypesData from "../../public/assets/usertype.json";
import { useState } from "react";

function UserType() {
  const [userType, setUserType] = useState(userTypesData);
  setUserType;

  return (
    <>
      <FormLabel>
        User Type
        <br />
        <Select placeholder="Select user type" focusBorderColor="purple">
          {userType.map((ut) => (
            <option key={ut.id} value={ut.userType}>
              {ut.userType}
            </option>
          ))}
        </Select>
      </FormLabel>
    </>
  );
}

export default UserType;
