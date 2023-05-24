import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import Button from '@mui/material/Button';
import { ArtistValidation } from '../validation/Schema';
import Helmet from "react-helmet"
import { postRobots } from '../api/requests';
import { useNavigate } from "react-router-dom";

function Add() {
  const [robots,setRobots]=useState()
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    await postRobots(values);
    setRobots([robots,values])
    actions.resetForm()
    navigate('/home')
}
const formik = useFormik({
    initialValues: {
        name: '',
        price: '',
        desc: '',
        img: ''
    },
    validationSchema: ArtistValidation,
    onSubmit: handleSubmit
})
  return (
    <>
    <Helmet>
      <title>ADD</title>
    </Helmet>
    <div style={{paddingTop:'5%'}} >
    <form onSubmit={formik.handleSubmit} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} >
        <TextField
          className={formik.errors.name && formik.touched.name ? "input-error" : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="name"
          value={formik.values.name}
          type='text' style={{ display: 'block' }} id="outlined-basic" label="Title" variant="outlined" /> <br />
        {(formik.errors.name && formik.touched.name) && <small style={{ color: "red" }}>{formik.errors.name}</small>}
        <TextField
          className={formik.errors.desc && formik.touched.desc ? "input-error" : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="desc"
          value={formik.values.desc}
          type='string' style={{ display: 'block' }} id="outlined-basic" label="desc" variant="outlined" /><br />
        {(formik.errors.desc && formik.touched.desc) && <small style={{ color: "red" }}>{formik.errors.desc}</small>}

        <TextField
          className={formik.errors.price && formik.touched.price ? "input-error" : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="price"
          value={formik.values.price}
          type='number' style={{ display: 'block' }} id="outlined-basic" label="price" variant="outlined" /><br />
        {(formik.errors.price && formik.touched.price) && <small style={{ color: "red" }}>{formik.errors.price}</small>}

        <TextField
          className={formik.errors.img && formik.touched.img ? "input-error" : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="img"
          value={formik.values.img}
          type='url' style={{ display: 'block' }} id="outlined-basic" label="Image" variant="outlined" /><br />
        {(formik.errors.img && formik.touched.img) && <small style={{ color: "red" }} >{formik.errors.img}</small>}


        <Button size="small" type='submit' disabled={Object.keys(formik.errors).length > 0} style={{ color: 'blue', display: 'flex', justifyContent: 'start' }}>Add</Button>




      </form>
      
    </div>
    </>
  )
}

export default Add