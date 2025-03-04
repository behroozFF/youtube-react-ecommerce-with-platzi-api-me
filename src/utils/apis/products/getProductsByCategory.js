import apiClient from "../../../constants/axios-interceptor";

const getProductsByCategory =  async (id) => {
    try{
        return await apiClient.get(`categories/${id}/products`);
    }catch(error){
        return error;
    }
};

export default getProductsByCategory