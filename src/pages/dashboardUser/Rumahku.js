import Navbar from '../layouts/NavbarUser'
import { Button, Card, CardBody, Table } from 'reactstrap'
function Rumahku() {
  return(
    <>
      <Navbar />
      <div className="container justify-content-center">

        <div className="row mt-5 mb-3 d-flex justify-content-around">
          <div className="col-md-8">
            <h1 className="text-center mb-5">Data Rumah</h1>
            <Button color="primary" className="mb-5"><i className="bi bi-plus"></i> Tambah Data Rumah</Button>
            <Card>
              <div className="row">
                <div className="col-md-5">
                  <img alt="Foto Rumah" src="https://picsum.photos/300/200" width="100%" height="100%" />
                </div>
                <div className="col-md-7">
                  <CardBody>
                    <Table>
                      <tr>
                        <th>Nama Rumah</th>
                        <td>: xxxxx</td>
                      </tr>
                      <tr>
                        <th>Pemilik Rumah</th>
                        <td>: xxxxx</td>
                      </tr>
                      <tr>
                        <th>Jumlah Mobil</th>
                        <td>: xxxxx</td>
                      </tr>
                      <tr>
                        <th>Jumlah Motor</th>
                        <td>: xxxxx</td>
                      </tr>
                      <tr>
                        <th>Alamat</th>
                        <td>: xxxxx</td>
                      </tr>
                      <tr>
                        <th>Kota/Kabupaten</th>
                        <td>: xxxxx</td>
                      </tr>
                    </Table>
                    <a href="/warga/rumahku/edit">
                      <Button className="btn btn-sm float-end mb-3">Edit</Button>
                    </a>
                  </CardBody>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rumahku;