import toast from "react-hot-toast";
import { create } from "zustand";

const API_END_POINT = "https://backendapi.mindcruize.com/api/v1/partner";
export const usePartnerUpload = create((set) => ({
    allPartnerList: [],
    loadingLogo: false,
    
    UploadPartnerLogo: async (formData) => {
        try {
            set({ loadingLogo: true });
            const response = await fetch(`${API_END_POINT}/create-partner`, {
                method: "POST",
                credentials: "include",
                body: formData,
            });
            const responseData = await response.json();
            if (responseData.success) {
                set({ loadingLogo: false });
                toast.success(responseData.message);
            }
            if (responseData.error) {
                set({ loadingLogo: false });
                toast.error(responseData.message);
            }
        } catch (error) {
            set({ loadingLogo: false });
            console.log(error);
        }
    },

    getAllPartnerLogo: async () => {
        try {
            set({ loadingLogo: true });
            const response = await fetch(`${API_END_POINT}/getAllPartnerData`);
            const responseData = await response.json();
            if (responseData.success) {
                set({ loadingLogo: false, allPartnerList: responseData.data });
            }
            if (responseData.error) {
                set({ loadingLogo: false });
                toast.error(responseData.message || "Error while loading the Partner Data")
            }
        } catch (error) {
            set({ loadingLogo: false });
            console.log(error);
        }
    }

}));