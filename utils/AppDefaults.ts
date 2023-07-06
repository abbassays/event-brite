export const defaultCommission = 5;
export const defaultGST = 0;

type SessionType = {
  user: {
    id: string;
    role: "ADMIN" | "STAFF" | "ORGANISER" | "CUSTOMER";
  };
};

export const customSession: SessionType = {
  user: {
    id: "",
    role: "ADMIN",
  },
};
