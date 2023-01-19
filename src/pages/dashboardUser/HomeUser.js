import NavbarUser from '../layouts/NavbarUser';
import { Card, CardBody, Table } from 'reactstrap';

function HomeUser() {
  return(
    <>
      <NavbarUser />

      <div className="container">

        <div className="row mt-3 mb-5">
          <div className="col mb-3">
            <Card className="text-center">
              <CardBody>
                <h5 className="card-title">Jumlah Rumah</h5>
                <h2 className="card-text">2</h2>
              </CardBody>
            </Card>
          </div>
          <div className="col mb-3">
            <Card className="text-center">
              <CardBody>
                <h5 className="card-title">Jumlah Kendaraan</h5>
                <h2 className="card-text">4</h2>
              </CardBody>
            </Card>
          </div>
          <div className="col mb-3">
            <Card className="text-center">
              <CardBody>
                <h5 className="card-title">Jumlah Iuran</h5>
                <h2 className="card-text">Rp35.000</h2>
              </CardBody>
            </Card>
          </div>
        </div>

        <h3 className="text-center mb-4">Riwayat Pembayaran Iuran</h3>

        <Table bordered>
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Rumah</th>
              <th>Pemilik</th>
              <th>Periode</th>
              <th>Total Iuran</th>
              <th>Status Pembayaran</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>xxxxx</td>
              <td>xxxxx</td>
              <td>xxxxx</td>
              <td>xxxxx</td>
              <td>xxxxx</td>
            </tr>
          </tbody>
        </Table>

      </div>

    </>
  )
}

export default HomeUser;