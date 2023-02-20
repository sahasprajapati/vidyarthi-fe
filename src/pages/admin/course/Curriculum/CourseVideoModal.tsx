import Button from 'components/button';
import Modal from 'components/modal';
import TextField from 'components/text-field';
import { Form, Formik } from 'formik';
import React, { useRef } from 'react';
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
      setVideoSourceUrl(request?.data?.data?.url);
      setFieldValue('video', request?.data?.data?.url);
    } catch (error) {}
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideoDiv = React.useMemo(
    () => (
      <video
        src={videoSourceUrl}
        width="230px"
        height="160px"
        controls
        ref={videoRef}
      />
    ),
    [previewImage, videoSourceUrl]
  );
  return (
    <Modal
      title="Edit Section Name"
      modalClose={handleModal}
      onClick={handleModal}
    >
      <Formik
        onSubmit={(val) => {
          const length = videoRef.current?.duration ?? initialValue?.length;
          handleChange({
            ...val,
            ...(length
              ? {
                  length: new Date(length * 1000).toISOString().slice(11, 19),
                }
              : {}),
          });
          handleModal();
        }}
        validateOnMount
        initialValues={{
          video: initialValue?.video ?? '',
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
                  {initialValue?.video ? (
                    <video
                      src={initialValue?.video}
                      width="230px"
                      height="160px"
                      controls
                    />
                  ) : videoSourceUrl ? (
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

              <Button variant={'primary'} type={'submit'} isValid={true}>
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
