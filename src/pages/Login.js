import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Login() {
  return(
    <div className="container mt-5">
      <div className="row d-flex justify-content-around">
        <div className="col-md-6">
          <h1 className="text-center mb-5">Form Login</h1>

          <div className="row">
            <div className="col justify-content-center">
              <Form>
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
                <br />
                <Button type="submit" className="form-control btn btn-dark">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login;