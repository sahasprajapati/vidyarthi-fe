import { courseConstant } from './../actions/course.constant';

export type Category = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  parentCategoryId: number;
};

export enum Language {
  ENGLISH,
  NEPALI,
}

export enum Level {
  BEGINNER,
  INTERMEDIATE,
  PROFESSIONAL,
}

export type Note = {
  id: number;

  noteDescription?: string;

  // urls to note files
  noteFiles: string[];
};
export type Lecture = {
  id: number;
  name: string;

  listOrder: number;
  description?: string;
  length: string;
  note?: Note;
  section?: Section;
  // url video
  video: string;
};

export type Section = {
  id: number;
  name: string;

  listOrder: number;
  lectures: Lecture[];
};

export type Course = {
  id: number;
  courseId: string;
  title: string;
  subtitle: string;
  price: number;
  discountAmount: number;
  discountPercent: number;
  topic: string;
  language: Language;
  subtitleLanguage: Language;
  level: Level;
  createdAt: Date;
  updatedAt: Date;
  categoryId: number;
  subCategoryId: number;
  description: string;
  learnableContent: string[];
  skills: string[];
  welcomeMessage: string;
  congratulationMessage: string;
  thumbnail: string;
  trailer: string;
  sections: Section[];
  ratings: {
    id: number;
    message: string;
    rate: number;
    ratedBy: { name: string };
    createdAt: string;
  }[];
  groupedRatings: { _count: { rate: number }; rate: number }[];
  instructors: { name: string; occupation: string }[];
  ratingsAvg: number;
  ratingsUserCount: number;
  coursesOnStudents: any[];
  myCourse: {
    progress: { completedLectures: any[]; progressPercentage: number };
  };
};

export type PaginationArgs = {
  take: number;
  page: number;
  filter: string;
  order: 'asc' | 'desc';
  totalCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
};

export type CourseReducer = {
  error: string;
  isLoading: boolean;
  isSuccess: boolean;
  course: Course[];
  selectedCourse: any;
  take: number;
  page: number;
  filter: string;
  order: 'asc' | 'desc';
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};
const initState: CourseReducer = {
  error: '',
  isLoading: false,
  isSuccess: false,
  course: [],
  selectedCourse: {},
  take: 10,
  page: 1,
  filter: '',
  order: 'desc',
  totalCount: 0,
  hasPreviousPage: false,
  hasNextPage: true,
};

export const courseReducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case courseConstant.COURSE_FETCH_SUCCESS:
      state = {
        ...state,
        course: payload?.data?.course,
        isLoading: false,
        isSuccess: true,
      };
      break;
    case courseConstant.COURSE_FETCH_FAILED:
      state = {
        ...state,
        error: payload,
        isSuccess: false,
        isLoading: false,
      };
      break;
    case courseConstant.COURSE_UPDATE_PAGINATION_ARGS:
      state = {
        ...state,
        take: payload?.data?.take,
        page: payload?.data?.page,
        filter: payload?.data?.filter,
        order: payload?.data?.order,
        ...(payload?.data?.totalCount && {
          totalCount: payload?.data?.totalCount,
        }),
        ...(typeof payload?.data?.hasPreviousPage === 'boolean' && {
          hasPreviousPage: payload?.data?.hasPreviousPage,
        }),
        ...(typeof payload?.data?.totalCount === 'boolean' && {
          totalCount: payload?.data?.totalCount,
        }),
      };
      break;
    case courseConstant.COURSE_SET_LOADING:
      state = {
        ...state,
        isLoading: payload?.data?.isLoading,
        isSuccess: false,
        error: '',
      };
      break;
    case courseConstant.COURSE_ADD_REQUSET:
      state = {
        ...state,
        isLoading: false,
        isSuccess: true,
        error: '',
        selectedCourse: payload?.data?.course,
      };
      break;
    case courseConstant.COURSE_SELECTED_COURSE:
      state = {
        ...state,
        isLoading: false,
        isSuccess: true,
        error: '',
        selectedCourse: payload?.data?.course,
      };
      break;
  }
  return state;
};
