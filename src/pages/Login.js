import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { iuranApi } from "../api/iuranApi";

function Login() {
  const [validation, setValidation] = useState([]);
  const navigate = useNavigate();

  const onSubmitLogin = (e) => {
    const formData = new FormData(e.target)

    e.preventDefault();

    iuranApi.post('/login', formData, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.authorisation.token)
        navigate(`/${res.data.user.role_name}/dashboard`)
      })
      .catch(error => {
        console.log(error.response.data.message)
        setValidation(error.response.data.message)
      });

  };

  return(
    <div className="container mt-5">
      <div className="row d-flex justify-content-around">
        <div className="col-md-6">
          <h1 className="text-center mb-5">Form Login</h1>

          <div className="row">
            <div className="col justify-content-center">
              <Form onSubmit={onSubmitLogin}>
                <FormGroup>
                  <Label for="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Masukkan email Anda ..."
                    type="email"
                  />
                </FormGroup>
                {
                  validation.email && (
                    <Alert color="danger">{validation.email[0]}</Alert>
                  )
                }
                <FormGroup>
                  <Label for="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Masukkan password Anda ..."
                    type="password"
                  />
                </FormGroup>
                {
                  validation.password && (
                    <Alert color="danger">{validation.password[0]}</Alert>
                  )
                }
                <br />
                <Button type="submit" className="form-control btn btn-dark">
                  Login
                </Button>
              </Form>
              <hr />
              <p className="text-dark text-center">Belum memiliki akun? <a href="/register" className="text-reset fw-bold">Klik registrasi!</a></p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login;