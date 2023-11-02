import { authFetch } from "../utils/authFetch";
import { ENV } from "../utils/constants"


const getMe = async (token) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPINTS.USERS_ME}`;
        const response = await authFetch(url);

        return await response.json();
    } catch (error) {
        console.log("(users.js)", error);
        return null;
    }
}

const actualizaUser = async (id, data) => {
    
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPINTS.USERS}/${id}`;
      const params = {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
      const response = await authFetch(url, params);
      if (response.statusCode) throw "Error al actualizar el usuario";
      return await response.json();
    } catch (error) {
      throw error;
    }
}

export const userController = {
    getMe,
    actualizaUser
}