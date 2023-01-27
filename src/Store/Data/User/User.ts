import { UserDetail } from "@/Store/Type/User/User";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom<UserDetail>({
  key: "UserInfo",
  default: {
    userId: 0,
    userName: "",
    userEmail: "",
    role: "",
  },
  effects_UNSTABLE: [persistAtom],
});
