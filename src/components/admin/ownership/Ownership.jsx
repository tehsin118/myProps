import React from "react";
import "./owner.scss";
const Ownership = () => {
  return (
    <div>
      <section className="ownership-admin">
        <div className="section-head">
          <h1>Requests To Change</h1>
        </div>
        <div className="request-tabel">
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Owner</th>
                  <th scope="col">New owner</th>
                  <th scope="col">Property</th>
                  <th scope="col">Bonds</th>
                  <th scope="col">Price</th>
                  <th scope="col">Contract</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>

                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ownership;
