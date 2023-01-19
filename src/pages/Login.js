import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iuranApi } from "../api/iuranApi";

function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    const formData = new FormData(e.target)

    e.preventDefault();

    iuranApi.post('/login', formData, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log(res.data)
        navigate(`/${res.data.user.role_name}/dashboard`);
      })
      .catch(err => console.log(err.message.email));

  };

  return(
    <div className="container mt-5">
      <div className="row d-flex justify-content-around">
        <div className="col-md-6">
          <h1 className="text-center mb-5">Form Login</h1>

          <div className="row">
            <div className="col justify-content-center">
              <Form onSubmit={onSubmitForm}>
                <FormGroup>
                  <Label for="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    // value={email}
                    // onChange={e => setEmail(e.target.value)}
                    placeholder="Masukkan email Anda ..."
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    // value={password}
                    // onChange={e => setPassword(e.target.value)}
                    placeholder="Masukkan password Anda ..."
                    type="password"
                  />
                </FormGroup>
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