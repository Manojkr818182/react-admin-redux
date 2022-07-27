import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import img_log from '../../../images/images.png'

const SiteSetting = () => {
  const [file, setFile] = useState(null);
  const [img_src, setImg_src] = useState();
  const [img_srcc, setImg_srcc] = useState();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setImg_src(URL.createObjectURL(e.target.files[0]));
  };

  const handleFile2 = (e) => {
    setFile(e.target.files[0]);
    setImg_srcc(URL.createObjectURL(e.target.files[0]));
  };

  return (

    <div className='m-5'>
      <Card >
        <div class="">
          <Card.Header >
            <h3>Upload App Images</h3>
          </Card.Header>
          <Card.Body>
            <div class="image_setting">
              <form class="form-horizontal" role="form">
                <div class="form-group pb-2 ">
                  <label class=" control-label"><b>Site Name : </b></label>
                  <div class="">
                    <input class="form-control" type="text" value='Site Name' />
                  </div>
                </div>
                <div class="form-group pb-2 ">
                  <label class=" control-label"><b>API Key : </b></label>
                  <div class="">
                    <input class="form-control" type="text" value="4XYHRR556!KKJHIU54784" />
                  </div>
                </div>
                <div class="form-group pb-2 ">
                  <label class=" control-label"><b>API Key2 : </b></label>
                  <div class="">
                    <input class="form-control" type="text" value="4XYHRR556!NKJKKDJG44" />
                  </div>
                </div>
                <div class="form-group pb-2 ">
                  <label class="col-md-3 control-label"> <b>Website logo : </b></label>
                  <div class="ms-5 ps-5">
                    <label>
                      {img_src &&
                        <img src={img_src} className="img-rounded mx-auto p-3" alt="pic" width="150px" height="150px" />
                      }
                      {!img_src &&
                        <img src={img_log} className="img-rounded mx-auto p-3" alt="pic" width="100px" height="100px" />
                      }
                      <input
                        type="file"
                        onChange={handleFile}
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
                <div class="form-group pb-2 ">
                  <label class="col-md-3 control-label"><b>Footer Image : </b></label>
                  <div class="ms-5 ps-5">
                    <label>
                      {img_srcc &&
                        <img src={img_srcc} className="img-rounded mx-auto p-3" alt="pic" width="150px" height="150px" />
                      }
                      {!img_srcc &&
                        <img src={img_log} className="img-rounded mx-auto p-3" alt="pic" width="100px" height="100px" />
                      }
                      <input
                        type="file"
                        onChange={handleFile2}
                        accept="image/*"
                        // hidden
                      />
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <Button variant="outline-primary">Save Changes</Button>
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