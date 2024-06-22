import React from 'react';
import { Link ,useNavigate} from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from "antd";
import { RegisterUser } from '../../apicalls/users';



const Register = () => {
    const navigate=useNavigate();
    const onFinish = async(values) => {
        console.log("Form values:", values);
        try{
             const response= await RegisterUser(values);
             if(response.success)
                {
                    message.success(response.message);
                    console.log(response.message);
                    navigate('/login')
                }
            else {
                message.error(response.message);
                console.log(response.message);
            }
        }
        catch(err)
        {
           message.error(err);
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
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
            label="Username"
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Please input your email!',
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
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Link to="/login">Go To Login Page</Link>

        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Register
            </Button>
        </Form.Item>
    </Form>
)
}
export default Register;