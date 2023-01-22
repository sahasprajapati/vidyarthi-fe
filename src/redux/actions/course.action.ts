import { courseConstant } from './course.constant';
import { PaginationArgs } from 'redux/reducers/course.reducer';
import Service from 'setup/network';

export const fetchCourse = (paginationArgs: PaginationArgs) => {
  return async (dispatch: any) => {
    try {
      let url = `/course?order=${paginationArgs?.order}&page=${paginationArgs?.page}&take=${paginationArgs?.take}`;
      if (paginationArgs?.filter) {
        url += `&filter=${paginationArgs?.filter}`;
      }
      const { data } = await Service.get(url);
      console.log('data', data.data);
      console.log('data', data.meta);

      dispatch({
        type: courseConstant.COURSE_FETCH_SUCCESS,
        payload: {
          data: {
            course: data.data,
          },
        },
      });

      dispatch({
        type: courseConstant.COURSE_UPDATE_PAGINATION_ARGS,
        payload: {
          data: {
            ...paginationArgs,
            totalCount: data?.meta?.itemCount,
            hasNextPage: data?.meta?.hasNextPage,
            hasPreviousPage: data?.meta?.hasPreviousPage,
          },
        },
      });
    } catch (err: any) {
      dispatch({
        type: courseConstant.COURSE_FETCH_FAILED,
        payload: err?.response?.data?.message,
      });
    }
  };
};

export const updatePaginationArgs = (paginationArgs: PaginationArgs) => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: courseConstant.COURSE_UPDATE_PAGINATION_ARGS,
        payload: {
          data: {
            ...paginationArgs,
          },
        },
      });
    } catch (err: any) {
      dispatch({
        type: courseConstant.COURSE_FETCH_FAILED,
        payload: err?.response?.data?.message,
      });
    }
  };
};

export const addCourse = (createData: any) => {
  return async (dispatch: any) => {
    try {
      const url = `/course`;

      const { data } = await Service.post(url, createData);
      console.log('data', data.data);
      console.log('data', data.meta);

      dispatch({
        type: courseConstant.COURSE_ADD_REQUSET,
        payload: {
          data: {
            course: data.data,
          },
        },
      });
    } catch (err: any) {
      dispatch({
        type: courseConstant.COURSE_ADD_FAILED,
        payload: err?.response?.data?.message,
      });
    }
  };
};

export const updateCourse = (updateData: any) => {
  return async (dispatch: any) => {
    try {
      const url = `/course`;

      const { data } = await Service.patch(url, updateData);
      console.log('data', data.data);
      console.log('data', data.meta);

      dispatch({
        type: courseConstant.COURSE_ADD_SUCCESS,
        payload: {
          data: {
            course: data.data,
          },
        },
      });
    } catch (err: any) {
      dispatch({
        type: courseConstant.COURSE_ADD_FAILED,
        payload: err?.response?.data?.message,
      });
    }
  };
};

export const selectCourse = (course: any) => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: courseConstant.COURSE_SELECTED_COURSE,
        payload: {
          data: {
            course: course,
          },
        },
      });
    } catch (err: any) {
      dispatch({
        type: courseConstant.COURSE_ADD_FAILED,
        payload: err?.response?.data?.message,
      });
    }
  };
};
