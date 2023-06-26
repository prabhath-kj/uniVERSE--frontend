import instance from "./ApiInstacnce";
export default {
  Register: async (payload: object) => {
    const response = await instance.post("auth/register", payload);
    return response;
  },
  // User side
  Login: async (payload: any) => {
    const response = await instance.post("/login", payload);
    return response.data;
  },

  GetUser: async () => {
    const response = await instance.get("/get-user");
    return response.data;
  },
};
