import { defineStore } from 'pinia'
import projectExamImg from "@/assets/imgs/hub/ourcourse.png"
import courseExamImg from "@/assets/imgs/hub/project.png"

export const useTestStore = defineStore('test', {
    state: () => {
        return {
            projectList: [
                { id: "P001", title: "Project 1", addClass: "bg-black text-white", imgCover: projectExamImg, urlLearn: "#" },
                { id: "P002", title: "Project 2", addClass: "bg-black text-white", imgCover: projectExamImg, urlLearn: "#" },
                { id: "P003", title: "Project 3", addClass: "bg-black text-white", imgCover: projectExamImg, urlLearn: "#" },
            ],
            courseList: [
                { id: "C001", title: "Course 1", addClass: "bg-light-hub", imgCover: courseExamImg, urlLearn: "#", btnJoin: true },
                { id: "C002", title: "Course 2", addClass: "bg-light-hub", imgCover: courseExamImg, urlLearn: "#", btnJoin: true },
            ],
        }
    },
    actions: {
        fetchProjectList(data){
            const state = this
            state.projectList = data
        },
        fetchCourseList(data){
            const state = this
            state.courseList = data
        },
    },
    getters: {
        getProjectList: (state) => state.projectList,
        getCourseList: (state) => state.courseList,
    }
})
