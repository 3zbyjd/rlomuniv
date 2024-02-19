import { FormControl, FormLabel } from "@chakra-ui/react";
import UserType from "../../components/UserType";

function User() {
    return (
        <>
            <FormControl>
                <FormLabel>
                    First Name
                    <input type="text" placeholder="Enter Firstname" />
                </FormLabel>
                
                <FormLabel>
                    Last Name
                    <input type="text" placeholder="Enter Firstname" />
                </FormLabel>
                
                <FormLabel>
                    Email
                    <input type="email" placeholder="Enter Email" />
                </FormLabel>
                
                <FormLabel>
                    Phone
                    <input type="tel" placeholder="Enter Phone Number" />
                </FormLabel>
                
                <UserType />
            </FormControl>
        </>
    )
}

export default User;