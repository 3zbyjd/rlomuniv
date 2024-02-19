//Selection list:
//  Instructor
//  Student
//  Administrator
//  SystemAdministrator

import { Select } from "@chakra-ui/react";
import userTypesData from "../../public/assets/usertype.json";
import { useState } from "react";

function UserType(){
const [userType, setUserType] = useState(userTypesData);
setUserType;

    return(
        <>
            <Select placeholder='Select option'>
                {userType.map((ut) => (
                    <option key={ut.id} value={ut.userType}>{ut.userType}</option>
                ))}
            </Select>
        </>
    );
}

export default UserType;