import './RegistrationForm.css';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import {
  Typography,
  Card,
  Form,
  Input,
  Button
} from 'antd';
const { Title, Text, Paragraph } = Typography;
import { REGISTER_USER } from '../../graphql/mutations';

import { useCurrentUserContext } from '../../context/CurrentUser';

export default function Registration() {
  const { loginUser } = useCurrentUserContext();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [register] = useMutation(REGISTER_USER);
  const [duplicateEmailError, setDuplicateEmailError] = useState(false);

  const handleFormSubmit = async () => {
    try {
      setDuplicateEmailError(false);
      const formValues = await form.validateFields();
      const { firstName, lastName, email, password } = formValues;
      const mutationResponse = await register({
        variables: {
          firstName,
          lastName,
          email,
          password,
        },
      });
      const { token, user } = mutationResponse.data.register;
      loginUser(user, token);
      navigate('/dashboard');
    } catch (e) {
      // If error message indicates duplicate key error, set duplicateEmailError to true to alert user
      setDuplicateEmailError(true);
      console.log(e);
    }
  };


  return (
    <>
    <div>
      <Card 
      bordered={false} 
      style={{ width: 300 }} 
      className='registrationForm'
    >
      <Form 
      id="registration-form" 
      onFinish={handleFormSubmit}
      form={form}
      layout="vertical"
      >
        <Title className='form-header'>Register</Title>
        <Form.Item
          label="First name"
          className='form-item'
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your first name',
            },
          ]}
        >
          <Input
            className="form-input"
            placeholder="First name"
          />
        </Form.Item>
        <Form.Item
          label="Last name"
          className='form-item'
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Please input your last name',
            },
          ]}
        >
          <Input
            className="form-input"
            placeholder="Last name"
          />
        </Form.Item>
        <Form.Item
          label="Email"
          className='form-item'
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email address, this will be your username',
            },
            {
              type: 'email',
              message: 'Please enter a valid email address',
            },
          ]}
        >
          <Input
            placeholder="youremail@test.com"
            className="form-input"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          className='form-item'
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            { min: 5, message: "Password must be at least 5 characters" },
          ]}
        >
          <Input.Password
            className="form-input"
            placeholder="******"
          />
        </Form.Item>
        {duplicateEmailError && (
          <Form.Item>
            <Text type="danger">
              An account with that email already exists.
            </Text>
          </Form.Item>
        )}
        <Button className='submit-btn' type='primary' htmlType="submit">
          Sign Up
        </Button>
        <Paragraph className="paragraph-text">
          Already have an account? login
          {' '}
          <Link to="/login">here</Link>
        </Paragraph>
      </Form>
      </Card>
      </div>
    </>
  );
}