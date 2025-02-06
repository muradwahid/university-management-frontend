import { tagTypes } from "@/redux/tags-types";
import { IMeta } from "@/types";
import { baseApi } from "../baseApi";

const ACADEMIC_SEMESTER_URL = "/academic-semesters";

export const academicSemesterApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addAcademicSemester: build.mutation({
            query: (data) => ({
                url: ACADEMIC_SEMESTER_URL,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.academicSemester],
        }),
        academicSemesters: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: ACADEMIC_SEMESTER_URL,
                    method: "GET",
                    params: arg,
                };
            },
            transformResponse: (response, meta: IMeta[]) => {
                return {
                    academicSemesters: response,
                    meta,
                };
            },
            providesTags: [tagTypes.academicSemester],
        }),
        academicSemester: build.query({
            query: (id: string | string[] | undefined) => ({
                url: `${ACADEMIC_SEMESTER_URL}/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.academicSemester],
        }),
        updateAcademicSemester: build.mutation({
            query: (data) => ({
                url: `${ACADEMIC_SEMESTER_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.academicSemester],
        }),
        deleteAcademicSemester: build.mutation({
            query: (id: string | string[] | undefined) => ({
                url: `${ACADEMIC_SEMESTER_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.academicSemester],
        }),
    }),
});

export const {
    useAddAcademicSemesterMutation,
    useAcademicSemestersQuery,
    useAcademicSemesterQuery,
    useUpdateAcademicSemesterMutation,
    useDeleteAcademicSemesterMutation,
} = academicSemesterApi;
