import { defineStore } from 'pinia'
//! สมมุตินี่คือ IMG URL
import Teacher from "@/assets/imgs/chat/Teacher.png"
import Student1 from "@/assets/imgs/chat/Student1.png"
import Student2 from "@/assets/imgs/chat/Student2.png"
import Student3 from "@/assets/imgs/chat/Student3.png"

export const useCourseStore = defineStore('course', {
    state: () => {
        return {
            courseDetails: {
                courseID: null,
                courseName: null,
                courseLevel: [
                    {
                        level: 1, 
                        name: "Roblox Level 1"},
                    {
                        level: 2, 
                        name: "Roblox Level 2"
                    },
                    {
                        level: 3,
                        name: "Roblox Level 3"
                    },
                    {
                        level: 4,
                        name: "Roblox Level 4"
                    },
                    {
                        level: 5,
                        name: "Roblox Level 5"
                    },
                ],
                courseFeedback: [
                    { author: "พี่เอก", text: "เรียนจบแล้วเป็นอย่างไรบ้างครับ ?", type: "start", profileUrl: Teacher, bgColor: "#FFCDA5", status: true },
                    { author: "น้องข้าว", text: "สอนเข้าใจง่ายมาเลยค่ะ แม้เรื่องที่จะยากพี่เขาก็จะอธิบายให้เข้าใจทีละขั้นตอน", type: "end", profileUrl: Student1, bgColor: "#F5F3F1", status: true },
                    { author: "น้องกัน", text: "พี่เขาใจดีมากเลยครับ สงสัยอะไรก็ถาม พี่เขาจะคอยตอบตลอด", type: "end", profileUrl: Student2, bgColor: "#FFE8E8", status: true },
                    { author: "น้องน้ำ", text: "ชอบที่พี่เขาให้ทำงานที่ใช้ได้จริงๆหลังเรียนจบด้วย และได้นำเสนองานกับเพื่อนๆ", type: "end", profileUrl: Student3, bgColor: "#F5F3F1", status: true },
                    { author: "น้องจ๊ะ", text: "ไม่รู้ๆๆๆๆ", type: "end", profileUrl: Student1, bgColor: "#fff", status: false },
                ]
            },
            maxLevel: 0,
            currentCourseLevel: {
                level: 0 , 
                name: null
            }
        }
    },
    actions: {
        updateMaxLevel(level){
            const state = this
            state.maxLevel = level
        },
        updateCurrentLevel(level){
            const state =  this
            state.currentCourseLevel = state.courseDetails.courseLevel[level]
        }
    },
    getters: {
        getCourseDetails: (state) => state.courseDetails,
        getCurrentCourseLevel: (state) => state.currentCourseLevel,
        getMaxLevel: (state) => state.maxLevel,
    }
})
