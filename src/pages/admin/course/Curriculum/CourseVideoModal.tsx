import Button from 'components/button';
import Modal from 'components/modal';
import TextField from 'components/text-field';
import { Form, Formik } from 'formik';
import React from 'react';
import Service from 'setup/network';
import { defaultImage } from 'assets/images';
import Icon from 'assets/svg/Icon';

const CourseVideoModal = ({
  previewImage,
  handleModal,
  handleChange,
  initialValue,
}: any) => {
  const [videoSourceUrl, setVideoSourceUrl] = React.useState('');
  const [videoProgressReport, setVideoProgressReport] = React.useState(0);
  const inputVideoRef = React.useRef<any>(null);

  const configs = {
    onUploadProgress: function (progressEvent: any) {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      setVideoProgressReport(percentCompleted);
    },
  };

  const handleChangeVideo = async (
    event: React.ChangeEvent<HTMLInputElement> | any,
    setFieldValue: any
  ) => {
    const file = new FormData();
    const files = event?.target?.files[0];
    file.append('file', files);
    // const videoUrl = URL.createObjectURL(files);
    // setVideoSourceUrl(videoUrl);
    try {
      const request = await Service.post('/upload/video', file, configs);
      console.log('this is requrest', request);
      setVideoSourceUrl(request?.data?.data?.url);
      setFieldValue('video', request?.data?.data?.url);
    } catch (error) {}
  };

  const previewVideoDiv = React.useMemo(
    () => (
      <video
        src={videoSourceUrl}
        width="230px"
        height="160px"
        controls
        autoPlay
      />
    ),
    [previewImage]
  );
  return (
    <Modal
      title="Edit Section Name"
      modalClose={handleModal}
      onClick={handleModal}
    >
      <Formik
        onSubmit={(val) => {
          handleChange(val);
          handleModal();
        }}
        validateOnMount
        initialValues={{
          video: initialValue ?? '',
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="row px-3 my-5">
              <h6 className="course__upload__adv__info__title">
                Lecture Video
              </h6>
              <div className="flex">
                <div className="me-3">
                  <input
                    hidden
                    ref={inputVideoRef}
                    type="file"
                    name="video"
                    accept=".mp4"
                    id=""
                    onChange={(e) => handleChangeVideo(e, setFieldValue)}
                  />
                  {videoSourceUrl ? (
                    previewVideoDiv
                  ) : (
                    <img src={defaultImage} width={230} height={160} />
                  )}
                </div>

                <div className="flex-col">
                  <p className="course__thumbnail__text">
                    Upload your course Thumbnail here.
                    <span className="font-weight-bold">
                      Important guidelines:
                    </span>
                    1200x800 pixels or 12:8 Ratio. Supported format: .jpg,
                    .jpeg, or .png
                  </p>
                  {videoProgressReport > 0 ? (
                    <p>Uploading {videoProgressReport} % </p>
                  ) : (
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => inputVideoRef.current.click()}
                      isValid={true}
                    >
                      <div className="flex">
                        <span className="me-3">Upload Image</span>
                        <Icon name="upload" />
                      </div>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-between">
              <Button
                onClick={handleModal}
                variant={'primary'}
                type={'button'}
                isValid={true}
              >
                Cancel
              </Button>

              <Button
                onClick={handleModal}
                variant={'primary'}
                type={'button'}
                isValid={true}
              >
                Save Changes
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CourseVideoModal;
