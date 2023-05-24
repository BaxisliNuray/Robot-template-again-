import * as yup from 'yup'

export const ArtistValidation=yup.object().shape({
    name: yup.string().min(8, "title cant be less than 8").required("name REQUIRED"),
    img:yup.string().max(200,"URL can not be this much").required("img REQUIRED"),
    desc: yup.string().max(500).required("REQUIRED"),
    price:yup.number().integer().positive().required("price REQUIRED")
})