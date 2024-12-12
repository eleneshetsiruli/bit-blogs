// import * as Yup from "yup";

// export const schemaBlogs = Yup.object().shape({
//   title_en: Yup.string()
//     .required("createBlog-page.required")
//     .matches(/^[^\d]*$/, "createBlog-page.matches"),
//   title_ka: Yup.string()
//     .required("createBlog-page.required")
//     .matches(/^[^\d]*$/, "createBlog-page.matches"),
//   description_en: Yup.string()
//     .required("createBlog-page.required")
//     .matches(/^[^\d]*$/, "createBlog-page.matches"),
//   description_ka: Yup.string()
//     .required("createBlog-page.required")
//     .matches(/^[^\d]*$/, "createBlog-page.matches"),
//   image_url: Yup.mixed<File>().required("createBlog-page.required"),
//   user_id: Yup.string().required("User ID is required"),
// });
import * as Yup from "yup";
export const schemaBlogs = Yup.object().shape({
  title_en: Yup.string()
    .required("Title in English is required")
    .matches(/^[^\d]*$/, "Title cannot contain numbers"),
  title_ka: Yup.string()
    .required("Title in Georgian is required")
    .matches(/^[^\d]*$/, "Title cannot contain numbers"),
  description_en: Yup.string()
    .required("Description in English is required")
    .matches(/^[^\d]*$/, "Description cannot contain numbers"),
  description_ka: Yup.string()
    .required("Description in Georgian is required")
    .matches(/^[^\d]*$/, "Description cannot contain numbers"),
  image_url: Yup.mixed<File>().required("Image is required"),
  user_id: Yup.string().required("User ID is required"),
});
