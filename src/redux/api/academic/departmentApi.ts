import { tagTypes } from "@/redux/tags-types";
import { IMeta } from "@/types";
import { baseApi } from "../baseApi";

const ACADEMIC_DEPARTMENT_URL = "/academic-departments";

export const academicDepartmentsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    academicDepartments: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ACADEMIC_DEPARTMENT_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (Response, meta: IMeta) => {
        return {
          academicDepartments: Response,
          meta,
        };
      },
      providesTags: [tagTypes.academicDepartment],
    }),
    academicDepartment: build.query({
      query: (id: string) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.academicDepartment],
    }),
    addAcademicDepartment: build.mutation({
      query: (data) => ({
        url: ACADEMIC_DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.academicDepartment],
    }),
    updateAcademicDepartment: build.mutation({
      query: (data) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.academicDepartment],
    }),
    deleteAcademicDepartment: build.mutation({
      query: (id) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.academicDepartment],
    }),
  }),
});

export const {
  useAcademicDepartmentsQuery,
  useAcademicDepartmentQuery,
  useAddAcademicDepartmentMutation,
  useDeleteAcademicDepartmentMutation,
  useUpdateAcademicDepartmentMutation,
} = academicDepartmentsApi;
