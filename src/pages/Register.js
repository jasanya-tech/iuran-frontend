import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();

    Axios.post('https://iuran.jasanya.tech/api/register', {
      full_name: fullName,
      email,
      password
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    navigate('/');
  };

  return(
    <div className="container mt-5">
      <div className="row d-flex justify-content-around">
        <div className="col-md-6">
          <h1 className="text-center mb-5">Form Registrasi</h1>

          <div className="row">
            <div className="col justify-content-center">
              <Form onSubmit={onSubmitForm}>
                <FormGroup>
                  <Label for="fullName">
                    Nama Lengkap
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="Masukkan nama lengkap Anda ..."
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Masukkan password Anda ..."
                    type="password"
                  />
                </FormGroup>
                <br />
                <Button type="submit" className="form-control btn btn-dark">
                  Register
                </Button>
              </Form>
              <hr />
              <p className="text-dark text-center">Sudah memiliki akun? <a href="/" className="text-reset fw-bold">Klik login!</a></p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Register;