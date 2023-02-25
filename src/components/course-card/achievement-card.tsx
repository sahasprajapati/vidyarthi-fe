import Heading from 'components/heading';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
interface Props {
  types?: 'cursoul' | 'normal';
  imageUrl: string;
  courseTag: string;
  title: string;
  descriptions?: string;
  isPrice?: 'yes' | 'no';
  price?: string;
  isCourseDisplay?: 'yes' | 'no';
  isIcon?: 'yes' | 'no';
  icon?: JSX.Element;
}

const AchievementCard: React.FC<Props> = ({
  types,
  imageUrl,
  isCourseDisplay,
  courseTag,
  isIcon,
  isPrice,
  title,
  descriptions,
  price,
  icon,
}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  return (
    <div
      style={{
        width: 'fit-content',
        height: 'fit-content',
      }}
      className={
        types === 'cursoul'
          ? 'course__card__container__cursol p-2 my-3'
          : 'course__card__container p-2 my-3'
      }
    >
      {/* <img
        src={imageUrl}
        alt="course_image"
        className="home__page__course__card__image"
      /> */}

      {imageUrl && (
        <div className="p-2">
          <Document file={imageUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              scale={0.25}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
          {/* <p>
            Page {pageNumber} of {numPages}
          </p> */}
        </div>
      )}

      <div className="p-2">
        <h6 className="course__card__descriptions__tag mb-3">{courseTag} </h6>
        <Heading title={title} />

        <p className="course__card__description">{descriptions}</p>
        <div className="flex-between">
          <div>
            {isPrice && (
              <span>
                <span className="course__card__price">{price ?? 0}</span>
                <span> / </span>
              </span>
            )}

            {isCourseDisplay && (
              <span className="course__card__price__tag">Courses</span>
            )}
          </div>
          {isIcon && (
            <div className="homepage__course__next pointer flex-center ">
              {icon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(AchievementCard);
