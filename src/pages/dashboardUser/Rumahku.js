import Navbar from '../layouts/NavbarUser'
import { Button, Card } from 'reactstrap'

function Rumahku() {
  return(
    <>
      <Navbar />
      <div className="container">

        <div className="row mt-5 mb-3">
          <div className="col">
            <h1 class="text-center">Data Rumah</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Button color="primary"><i class="bi bi-plus"></i> Tambah Data Rumah</Button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Card>

            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rumahku;