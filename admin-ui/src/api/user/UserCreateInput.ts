import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  isAdmin: boolean;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
