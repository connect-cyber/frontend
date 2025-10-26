import toast from "react-hot-toast";
import { create } from "zustand";
const API_END_POINT = "https://backendapi.mindcruize.com/api/v1/contactus/send-mail";
export const useSendEmailStore = create((set) => ({
    loading: false,
    sendingContactUsEmail: async (contactData) => {
        try {
            set({ loading: true });
            const response = await fetch(`${API_END_POINT}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactData)
            });
            const responseData = await response.json();
            if (responseData.success) {
                set({ loading: false });
                toast.success(responseData.message, { duration: 6000 });
            }
            if (responseData.error) {
                set({ loading: false });
                toast.error(responseData.message);
            }
            return responseData;
        } catch (error) {
            console.log(error)
        }
    },

    // sendBookOneToOneSession: async (data) => {
    //     try {
    //         set({ loading: true });
    //         const response = await fetch(`${API_END_POINT}/bookSession`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(data)
    //         });
    //         const responseData = await response.json();
    //         if (responseData.success) {
    //             set({ loading: false });
    //             toast.success(responseData.message, { duration: 6000 });
    //         }
    //         if (responseData.error) {
    //             set({ loading: false });
    //             toast.error(responseData.message);
    //         }
    //         return responseData;
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },

    saveToGoogleSheet: async (data) => {
        set({ loading: true });
        const response = await fetch(`https://backendapi.mindcruize.com/api/v1/g/googleSheet`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
            mode: "cors"
        });

        const responseData = await response.json();

        if (responseData.responseData?.result === "success") {
            set({ loading: false });
            return responseData;
        } else {
            toast.error("Failed to submit details!");
        }
    }

}));
