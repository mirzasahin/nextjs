import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import Layout from "../Components/Layout";

const Form = styled.form`
  display: grid;
  gap: 20px;
`;

const Select = styled.select``;

const Error = styled.span`
color: tomato;
`;

export default function Contact() {
  const { register, handleSubmit, formState: { errors} } = useForm();

  const onSubmit = (data) => {
    console.log('Form gönderiliyor..');
    console.log('data', data);
  }

  return (
    <Layout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input {...register("name", { required: 'İsim zorunludur.' })} type="text" id="name" name="name" />
        {errors.name && <Error>{errors.name.message}</Error>}

        <label htmlFor="source"> Where did you find us from?</label>
        <Select id="source" name="source" {...register("source")}>
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter</option>
          <option value="websites">Websites</option>
        </Select>

        <input type="submit" />
      </Form>
    </Layout>
  );
}
