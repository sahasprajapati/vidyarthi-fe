import Icon from 'assets/svg/Icon';
import Button from 'components/button';
import Heading from 'components/heading';
import React, { useState } from 'react';
import CourseDescriptionModal from './CourseDescriptionModal';
import CourseVideoModal from './CourseVideoModal';
import SectionModal from './SectionNameModal';
export interface Lecture {
  name: string;
  video?: string;
  notes?: string;
  description?: 'string';
  listOrder: number;
}
export interface Section {
  name: string;
  lecture: Lecture[];
  listOrder: number;
}
const CurriculumSection = ({ handleSubmit }: { handleSubmit: () => void }) => {
  const [showNameModal, setShowNameModal] = useState(false);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState<{
    section: number;
    lecture?: number;
  }>({
    section: 0,
  });
  const initialValue = {
    name: 'Section name',
    lecture: [
      {
        name: 'Lecture name',
        listOrder: 1,
      },
    ],
    listOrder: 1,
  };
  const [sections, setSections] = useState<Section[]>([initialValue]);

  const handleSectionAdd = () => {
    setSections([
      ...sections,
      { ...initialValue, listOrder: (sections?.length ?? 0) + 1 },
    ]);
  };
  const handleSectionDelete = (sectionIndex: number) => {
    const section = [...sections];
    section.splice(sectionIndex, 1);
    setSections([...section]);
  };
  const handleLectureDelete = (sectionIndex: number, lectureIndex: number) => {
    const newSections = [...sections];

    const lecture = [...newSections[sectionIndex]?.lecture];
    lecture.splice(lectureIndex, 1);
    if (newSections[sectionIndex])
      newSections[sectionIndex].lecture = [...lecture];
    setSections([...newSections]);
  };

  const handleLectureAdd = (index: number) => {
    const newSections = [...sections];

    if (newSections[index])
      newSections[index].lecture = [
        ...newSections[index]?.lecture,
        {
          name: 'Lecture name',
          listOrder: (newSections[index]?.lecture?.length ?? 0) + 1,
        },
      ];
    setSections([...newSections]);
  };

  const handleLectureEdit = (
    sectionIndex: number,
    lectureIndex: number,
    data: any
  ) => {
    const newSections = [...sections];

    const lecture = [...newSections[sectionIndex]?.lecture];
    if (lecture?.length > 0) {
      if (lecture[lectureIndex]) {
        lecture[lectureIndex] = {
          ...lecture[lectureIndex],
          ...data,
        };
      }
    }
    if (newSections[sectionIndex])
      newSections[sectionIndex].lecture = [...lecture];
    setSections([...newSections]);
  };
  const handleSectionEdit = (sectionIndex: number, data: any) => {
    const newSections = [...sections];

    if (newSections[sectionIndex])
      newSections[sectionIndex] = { ...newSections[sectionIndex], ...data };
    setSections([...newSections]);
  };

  console.log('Sections', sections);
  return (
    <>
      <div className="">
        <div className="my-4">
          <Heading title={'Curriculum'} />
        </div>
        {sections?.map((section, i) => {
          return (
            <div key={i} className="mb-5">
              <div className="flex-between mt-5">
                <div className="flex">
                  <Icon name="menu" height={20} />
                  <p className="mt-3 ms-3">{`Section ${i + 1}: ${
                    section?.name
                  }`}</p>
                </div>

                <div className="flex">
                  <div
                    onClick={() => {
                      handleSectionDelete(i);
                    }}
                  >
                    <Icon name="trash" height={18} />
                  </div>
                  <div
                    onClick={() => {
                      setShowNameModal(true);
                      setSelectedSection({
                        section: i,
                      });
                    }}
                    className="mx-3 f-14"
                  >
                    Edit
                  </div>
                  <div
                    onClick={() => {
                      handleLectureAdd(i);
                    }}
                  >
                    <Icon name="plus" height={24} />
                  </div>
                </div>
              </div>

              {section?.lecture?.map((lecture, li) => {
                return (
                  <div className="flex-between px-5 py-2" key={li}>
                    <div className="flex">
                      <Icon name="menu" height={20} />
                      <p className="mt-3 ms-3">{lecture?.name}</p>
                    </div>

                    <div className="flex">
                      <div>
                        <div className="flex-between course__filter__container">
                          <select
                            value="content"
                            id=""
                            className="form-control shadow-none bg-transparent outline-none border-none"
                          >
                            <option value="content">Content</option>
                            <option
                              onClick={(e) => {
                                setShowVideoModal(true);
                                setSelectedSection({
                                  section: i,
                                  lecture: li,
                                });
                              }}
                            >
                              Video
                            </option>
                            {/* <option value="file" onClick={(e) => {}}>
                              Attach File
                            </option> */}
                            <option
                              value="description"
                              onClick={(e) => {
                                setShowDescriptionModal(true);
                                setSelectedSection({
                                  section: i,
                                  lecture: li,
                                });
                              }}
                            >
                              Descriptions
                            </option>
                            {/* <option value="note" onClick={(e) => {}}>
                              Course Notes
                            </option> */}
                          </select>
                          <Icon name="down-arrow" />
                        </div>
                      </div>

                      <div
                        onClick={() => {
                          setShowNameModal(true);
                          setSelectedSection({
                            section: i,
                            lecture: li,
                          });
                        }}
                        className="mx-3 f-14"
                      >
                        Edit
                      </div>
                      {/* <Icon name="plus" height={20} /> */}
                      <div
                        onClick={() => {
                          handleLectureDelete(i, li);
                        }}
                      >
                        <Icon name="trash" height={18} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        <Button
          variant="secondary"
          type="button"
          isValid={true}
          onClick={() => {
            handleSectionAdd();
          }}
          className="w-100 py-1"
        >
          <p className="text-center mt-3">Add Section</p>
        </Button>
      </div>

      {showNameModal && (
        <SectionModal
          initialValue={
            sections &&
            sections?.length > 0 &&
            sections[selectedSection?.section]
              ? isNaN(selectedSection.lecture ?? NaN)
                ? sections[selectedSection?.section].name
                : sections[selectedSection?.section]?.lecture?.length > 0 &&
                  selectedSection?.lecture &&
                  sections[selectedSection?.section]?.lecture[
                    selectedSection?.lecture
                  ]?.name
              : null
          }
          handleModal={() => setShowNameModal(!showNameModal)}
          handleChange={(data: any) => {
            if (!isNaN(selectedSection.lecture ?? NaN))
              handleLectureEdit(
                selectedSection.section,
                selectedSection.lecture as number,
                data
              );
            else handleSectionEdit(selectedSection.section, data);
          }}
          isSection={isNaN(selectedSection.lecture ?? NaN)}
        />
      )}
      {showDescriptionModal && (
        <CourseDescriptionModal
          initialValue={
            sections &&
            sections?.length > 0 &&
            sections[selectedSection?.section] &&
            sections[selectedSection?.section]?.lecture?.length > 0 &&
            selectedSection?.lecture &&
            sections[selectedSection?.section]?.lecture[
              selectedSection?.lecture
            ]?.description
          }
          handleModal={() => setShowDescriptionModal(!showDescriptionModal)}
          handleChange={(data: any) => {
            handleLectureEdit(
              selectedSection.section,
              selectedSection.lecture as number,
              data
            );
          }}
        />
      )}
      {showVideoModal && (
        <CourseVideoModal
          initialValue={
            sections &&
            sections?.length > 0 &&
            sections[selectedSection?.section] &&
            sections[selectedSection?.section]?.lecture?.length > 0 &&
            selectedSection?.lecture &&
            sections[selectedSection?.section]?.lecture[
              selectedSection?.lecture
            ]?.video
          }
          handleModal={() => setShowVideoModal(!showVideoModal)}
          handleChange={(data: any) => {
            handleLectureEdit(
              selectedSection.section,
              selectedSection.lecture as number,
              data
            );
          }}
        />
      )}
    </>
  );
};

export default CurriculumSection;
