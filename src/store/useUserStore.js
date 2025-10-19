import toast from 'react-hot-toast';
import { create } from 'zustand'

const API_END_POINT = "https://backendapi.mindcruize.com/api/v1/user";
const useUserStore = create((set) => ({
    loading: false,
    user: null,
    isAuthenticated: false,
    isCheckingAuth: true,
    allUsers: [],

    signup: async (input) => {
        try {
            set({ loading: true });
            const response = await fetch(`${API_END_POINT}/register`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });
            const responseData = await response.json();
            if (!response.ok) {
                toast.error(responseData.message || "Something went wrong");
                set({ loading: false });
                return;
            }
            toast.success(responseData.message);
            set({
                loading: false
            });
            return responseData
        } catch (error) {
            set({ loading: false });
            console.log("Error Occur -->>", error);
        }
    },

    login: async (input) => {
        try {
            set({ loading: true });
            const response = await fetch(`${API_END_POINT}/login`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });
            const responseData = await response.json();
            if (responseData.success) {
                toast.success(responseData.message);
                set({
                    loading: false,
                    user: responseData.data,
                    isAuthenticated: true,
                });
            }

            if (responseData.error) {
                set({ loading: false });
                toast.error(responseData.message);
            }
            return responseData;
        } catch (error) {
            set({ loading: false });
            console.log("Error Occur -->>", error);
        }
    },

    logout: async () => {
        try {
            set({ loading: true });
            const response = await fetch(`${API_END_POINT}/logout`, {
                method: "POST",
                credentials: "include",
            });
            const responseData = await response.json();
            if (responseData.success) {
                toast.success(responseData.message);
                set({ loading: false, user: null, isAuthenticated: false });
            }
        } catch (error) {
            set({ loading: false });
            console.log(error);
        }
    },

    checkAuthentication: async () => {
        try {
            set({ isCheckingAuth: true });
            const response = await fetch(`${API_END_POINT}/checkAuth`, {
                method: "GET",
                credentials: "include",
            });
            const responseData = await response.json();
            if (responseData.success) {
                set({
                    user: responseData.data,
                    isAuthenticated: true,
                    isCheckingAuth: false,
                });
            }

            if (responseData.error) {
                set({
                    user: null,
                    isAuthenticated: false,
                    isCheckingAuth: false,
                });
            }
        } catch (error) {
            set({ isAuthenticated: false, isCheckingAuth: false });
            console.log(error);
        }
    },

    getAllUsers: async () => {
        try {
            set({ loading: true });
            const response = await fetch(`${API_END_POINT}/getAllUser`, {
                method: "GET",
                credentials: "include",
            });
            const responseData = await response.json();
            if (responseData.success) {
                set({
                    loading: false,
                    allUsers: responseData.data,
                });
            }

            if (responseData.error) {
                set({ loading: false });
                toast.error(responseData.message);
            }
        } catch (error) {
            set({ loading: false });
            console.log("Error Occur -->>", error);
        }
    },

    changeUserRole: async (email, role) => {
        try {
            set({ loading: true });
            const response = await fetch(`${API_END_POINT}/changeRole`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, role }),
            });
            const responseData = await response.json();
            if (responseData.success) {
                set({ loading: false });
                toast.success(responseData.message);
            }

            if (responseData.error) {
                set({ loading: false });
                toast.error(responseData.message);
            }
            return responseData;
        } catch (error) {
            console.log("Error Occur -->>", error);
        }
    },

    deleteUser: async (email) => {
        try {
            set({ loading: true });
            const response = await fetch(`${API_END_POINT}/deleteUser/${email}`, {
                method: "DELETE",
                credentials: "include",
            });
            const responseData = await response.json();
            if (responseData.success) {
                set({ loading: false });
                toast.success(responseData.message);
            }

            if (responseData.error) {
                set({ loading: false });
                toast.error(responseData.message);
            }
            return responseData;
        } catch (error) {
            console.log("Error Occur -->>", error);
        }
    },

}));

export default useUserStore;