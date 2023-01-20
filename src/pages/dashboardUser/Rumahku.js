import Navbar from '../layouts/NavbarUser'
import { Button, Card, CardBody, Table } from 'reactstrap'
function Rumahku() {
  return(
    <>
      <Navbar />
      <div className="container justify-content-center">

        <div className="row mt-5 mb-3 d-flex justify-content-around">
          <div className="col-md-8">
            <h1 class="text-center">Data Rumah</h1>
            <Button color="primary"><i class="bi bi-plus"></i> Tambah Data Rumah</Button>
            <Card>
              <div className="row">
                <div className="col-md-4">
                  <img alt="Foto Rumah" src="https://picsum.photos/300/200" />
                </div>
                <div className="offset-md-1 col-md-5">
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
                        <th>Kote/Kabupaten</th>
                        <td>: xxxxx</td>
                      </tr>
                    </Table>
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