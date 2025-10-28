import toast from "react-hot-toast";
import { create } from "zustand";

const API_END_POINT = "https://backendapi.mindcruize.com/api/v1/blog";

const useBlogStore = create((set) => ({
   allCategories: [],
   loading: false,
   blogs: [],
   singleBlogData: null,
   hasMorePage: true,
   loadingLogo: false,

   getSingleVlogData: async (slug) => {
      try {
         set({ loading: true });
         const response = await fetch(`${API_END_POINT}/getSingleBlogData/${slug}`);
         const responseData = await response.json();
         if (responseData.success) {
            set({ loading: false, singleBlogData: responseData.data });
         }

         if (responseData.error) {
            set({ loading: false });
            toast.error(responseData.message);
         }
      } catch (error) {
         console.log(error);
      }
   },

   createBlog: async (formData) => {
      try {
         set({ loading: true });
         const response = await fetch(`${API_END_POINT}/createBlog`, {
            method: "POST",
            credentials: "include",
            body: formData,
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
         console.log(error);
      }
   },

   editBlog: async (slug, input) => {
      try {
         set({ loading: true });
         const response = await fetch(`${API_END_POINT}/editBlog/${slug}`, {
            method: "PATCH",
            credentials: "include",
            body: input,
         });
         const responseData = await response.json();
         if (responseData.success) {
            set({ loading: false, singleBlogData: responseData.data });
            toast.success(responseData.message);
         }
         return responseData;
      } catch (error) {
         console.log(error);
      }
   },

   viewAllBlogs: async (page) => {
      const state = useBlogStore.getState();
      if (state.loading) return;
      try {
         set({ loading: true });
         const response = await fetch(`${API_END_POINT}/getAllBlog?page=${page}&limit=9`);
         const responseData = await response.json();
         if (responseData.success) {
            set((state) => ({
               blogs: page === 1 ? responseData.data : [...state.blogs, ...responseData.data],
               hasMorePage: responseData.hasmore,
               loading: false,
            }));
         }

         if (responseData.error) {
            set({ loading: false });
            toast.error(responseData.message);
         }

      } catch (error) {
         console.log(error);
      }
   },

   deleteBlog: async (slug) => {
      try {
         set({ loading: true });
         const response = await fetch(`${API_END_POINT}/deleteBlog/${slug}`, {
            method: "DELETE",
            credentials: "include"
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
         set({ loading: false });
         toast.error("Some internal error occur...");
         console.log(error);
      }
   },

   getAllCategories: async () => {
      try {
         const response = await fetch(`${API_END_POINT}/getAllCategory`);
         const responseData = await response.json();
         set({ allCategories: responseData.data });
      } catch (error) {
         console.log(error);
      }
   }

}));

export default useBlogStore;
