import React from 'react'
import { useForm } from 'react-hook-form'

const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input name={label} ref={register({ required })} />
  </>
)
