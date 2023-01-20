import Navbar from '../layouts/NavbarUser'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
function RumahkuEdit() {
  const onSubmitPicture = () => {

  }

  const onSubmitData = () => {

  }

  return(
    <>
      <Navbar />
      <div class="container">
        <div class="row mt-5 mb-5 justify-content-center">
          <div class="col">
            <h2 class="text-center">Edit Data Rumah</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4">
            <Form onSubmit={onSubmitPicture}>
              <img src="https://picsum.photos/300/200" width="100%" height="100%" alt="" class="img-thumbnail mx-auto" />
              <br /><br />
              <div class="mb-3">
                <Label for="picture">Ubah foto rumah di sini!</Label>
                <Input type="file" id="poster" name="poster" />
              </div>
              <button type="submit" class="btn btn-sm btn-dark form-control">Ubah Foto Rumah</button>
            </Form>
          </div>
          <div class="col-md-4 offset-md-1">
            <Form onSubmit={onSubmitData}>
              <FormGroup floating>
                <Input type="text" class="form-control" id="houseName" name="houseName" placeholder="Nama Rumah" value="" required />
                <Label for="houseName">Nama Rumah</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="text" class="form-control" id="unitCars" name="unitCars" placeholder="Jumlah Mobil" value="" required />
                <Label for="unitCars">Jumlah Mobil</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="text" class="form-control" id="unitMotorcycle" name="unitMotorcycle" placeholder="Jumlah Motor" value="" required />
                <Label for="unitMotorcycle">Jumlah Motor</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="text" class="form-control" id="address" name="address" placeholder="Alamat Rumah" value="" required />
                <Label for="address">Alamat Rumah</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="text" class="form-control" id="city" name="city" placeholder="Kota/Kabupaten" value="" required />
                <Label for="city">Kota/Kabupaten</Label>
              </FormGroup>
              <br />
              <Button type="submit" className="btn form-control" color="primary">Edit</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default RumahkuEdit;