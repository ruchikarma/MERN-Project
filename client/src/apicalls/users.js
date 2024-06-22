import {axiosInstance} from ".";


//register whatever postman was doing below will do
export const RegisterUser = async (payload)=>
    {
        try{
        const response = await axiosInstance.post('/api/user/register',payload);
        return response.data;
        }
        catch(err)
        {
            return err.response ? err.response.data : { success: false, message: err.message };
        }
    }

    export const LoginUser = async (payload)=>
        {
            try{
            const response = await axiosInstance.post('/api/user/login',payload);
            return response.data;
            }
            catch(err)
            {
                return err.response ? err.response.data : { success: false, message: err.message };
            }
        };

// export const LoginUser = async (payload)=>
//     {
//         try{
//         const response = await axiosInstance.post('/api/user/login',payload);
//         return response.data;
//         }
//         catch(err)
//         {
//             return err.response ? err.response.data : { success: false, message: err.message };
//         }
//     };