import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Button, Card } from 'react-bootstrap';
import img_logo from '../../../images/images.png'
import axios from "axios";

const API_url = "http://localhost:7777/";
const SiteSetting = () => {
  const [site_name, setSite_name] = useState("");
  const [apiKey1, setApiKey1] = useState("");
  const [apiKey2, setApiKey2] = useState("");
  const [logo_url, setLogo_url] = useState();
  const [footer_url, setFooter_url] = useState();
  const [logo_file, setLogo_file] = useState(null);
  const [Footer_file, setFooter_file] = useState(null);

  const handleFile1 = (e) => {
    setLogo_file(e.target.files[0]);
    setLogo_url(URL.createObjectURL(e.target.files[0]));
  };
  const handleFile2 = (e) => {
    setFooter_file(e.target.files[0]);
    setFooter_url(URL.createObjectURL(e.target.files[0]));
  };
  const updateSetting = () =>{
    var formdata = new FormData();
    formdata.append("site_logo", logo_file);
    formdata.append("footer_logo", Footer_file);
    formdata.append("site_name", site_name);
    formdata.append("apiKey1", apiKey1);
    formdata.append("apiKey2", apiKey2);
    axios.post(`${API_url}update_settings`, formdata, {}).then((response) =>{
      if (response.data.success === true) {
        Swal.fire('Changes Saved!', '', 'success');
      }
    })
    
  };

  useEffect(() => {
    axios.get(`${API_url}get_settings`).then((response) => {
      if (response.data.success === true) {
        const setting_data = response.data.data;
        if (setting_data.site_name !== undefined && setting_data.site_name !== "") {
          setSite_name(setting_data.site_name);
        }
        if (setting_data.apiKey1 !== undefined && setting_data.apiKey1 !== "") {
          setApiKey1(setting_data.apiKey1);
        }
        if (setting_data.apiKey2 !== undefined && setting_data.apiKey2 !== "") {
          setApiKey2(setting_data.apiKey2);
        }
        if (setting_data.logo_url !== undefined && setting_data.logo_url !== "") {
          setLogo_url(`${API_url}` + setting_data.logo_url);
        }
        if (setting_data.footer_url !== undefined && setting_data.footer_url !== "") {
          setFooter_url(`${API_url}` + setting_data.footer_url);
        }
      }

    });
  }, []);

  return (

    <div className='m-5'>
      <Card >
        <div className="">
          <Card.Header >
            <h3>Upload App Images</h3>
          </Card.Header>
          <Card.Body>
            <div className="image_setting">
              <form className="form-horizontal" role="form">
                <div className="form-group pb-2 ">
                  <label className=" control-label"><b>Site Name : </b></label>
                  <div className="">
                    <input className="form-control" type="text"
                      name='site_name'
                      value={site_name}
                      onChange={(e) => setSite_name(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group pb-2 ">
                  <label className=" control-label"><b>API Key: </b></label>
                  <div className="">
                    <input className="form-control" type="text"
                      name='apiKey1'
                      value={apiKey1}
                      onChange={(e) => setApiKey1(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group pb-2 ">
                  <label className=" control-label"><b>API Key2 : </b></label>
                  <div className="">
                    <input className="form-control" type="text"
                      name='apiKey2'
                      value={apiKey2}
                      onChange={(e) => setApiKey2(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group pb-2 ">
                  <label className="col-md-3 control-label"> <b>Website logo : </b></label>
                  <div className="ms-5 ps-5">
                    <label>
                      <img src={logo_url ? logo_url : img_logo}
                        className="img-rounded mx-auto p-3"
                        alt="pic" width="150px"
                        height="150px"
                      />
                      <input
                        type="file"
                        onChange={handleFile1}
                        name="site_logo"
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group pb-2 ">
                  <label className="col-md-3 control-label"><b>Footer logo : </b></label>
                  <div className="ms-5 ps-5">
                    <label>
                      <img src={footer_url ? footer_url : img_logo} className="img-rounded mx-auto p-3" alt="pic" width="150px" height="150px" />
                      <input
                        type="file"
                        onChange={handleFile2}
                        name="footer_logo"
                        accept="image/*"
                      // hidden
                      />
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <Button variant="outline-primary" onClick={updateSetting}>Save Changes</Button>
                </div>
              </form>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  )
}
export default SiteSetting;