import React from "react";
import { LoginUser } from "../../apicalls/users";
import { Button, Form, Input, message } from "antd";
import{Link, useNavigate} from 'react-router-dom';



const Login = () => {

const navigate = useNavigate();

const onFinish = async(values) => {
  try{
    const response= await LoginUser(values);
    if(response.success)
      {
          message.success(response.message);
          localStorage.setItem('token',response.data);
          navigate('/');
      }
  else {
      message.error(response.message);
      console.log(response.message); 
  }

  }catch(err)
  {
    message.error( err);
  }
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

return(
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: "Please input your email!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    
    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Link to="/register">Go to Register Page</Link>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>

     
    </Form.Item>
  </Form>
);
};

export default Login;
