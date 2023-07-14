<script setup>
import { onMounted, watch, ref } from 'vue';
import { Modal } from "bootstrap"
</script>
<template>
    <div class="modal fade animate__animated animate__slideInUp animate__faster" id="registerCourse" tabindex="-1"
        aria-labelledby="registerCourseLabel" aria-hidden="true" data-bs-backdrop="true">
        <div class="modal-dialog modal-md  modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header p-0 pt-3 pe-3 border-0">
                    <button data-bs-dismiss="modal" class="btn p-0 m-0  border-0 text-secondary opacity-75 ms-auto">
                        <i class="bi bi-x-circle fs-30px"></i>
                    </button>
                </div>
                <div class="modal-body p-5 px-md-5 pt-md-0 pb-md-3 hub-scroll">
                    <!-- Information Course -->
                    <div class="mb-3">
                        <h4 class="fw-semibold text-primary">Courses 1</h4>
                        <P class="text-dark">Make your 3D Game like Genshin Impact</P>
                        <P class="fw-semibold text-dark">ราคา : 1,290 บาท</P>
                        <div class="col-12 col-md-6 mx-auto">
                            <img src="@/assets/imgs/hub/project.png" class="img-fluid">
                        </div>
                    </div>
                    <!-- Form -->
                    <div class="mx-auto">
                        <form action="" class="needs-validation">
                            <!-- <label for="inputNickname" class="form-label">
                                ชื่อเล่น <span class="text-danger">*</span>
                            </label> -->
                            <!-- Firstname lastname -->
                            <!-- ทดสอบ Validate ให้ดูถ้าต้องการใช้ -->
                            <div class="mb-3 position-relative align-middle has-validatio">
                                <div class="position-absolute top-50 translate-middle-y ps-3">
                                    <i class="bi bi-person-fill fs-18px text-warning"></i>
                                </div>
                                <input type="text" class="form-control rounded-pill py-2 ps-5 is-invalid" id="inputFullname"
                                    placeholder="ชื่อ - นามสกุล" required>
                            </div>
                            <!-- Nickname  -->
                            <div class="mb-3 position-relative">
                                <div class="position-absolute top-50 translate-middle-y ps-3">
                                    <i class="bi bi-person-fill-lock fs-18px  text-warning"></i>
                                </div>
                                <input type="text" class="form-control rounded-pill py-2 ps-5" id="inputNickname"
                                    placeholder="ชื่อเล่น">
                            </div>
                            <!-- Age  -->
                            <div class="mb-3 position-relative">
                                <div class="position-absolute top-50 translate-middle-y ps-3">
                                    <i class="bi bi-calendar-check-fill fs-18px text-warning"></i>
                                </div>
                                <input type="text" class="form-control rounded-pill py-2 ps-5" id="inputAge"
                                    placeholder="อายุ">
                            </div>
                            <!-- Range  -->
                            <div class="mb-3 position-relative">
                                <div class="position-absolute top-50 translate-middle-y ps-3">
                                    <i class="bi bi-clock-fill fs-18px  text-warning"></i>
                                </div>
                                <select class="form-select rounded-pill py-2 ps-5">
                                    <option value="" selected disabled>เลือกช่วงเวลาเรียน</option>
                                    <option value="1">12:00-13:00</option>
                                    <option value="2">14:00-15:00</option>
                                    <option value="3">16:00-17:00</option>
                                </select>
                            </div>
                            <!-- Skill  -->
                            <div class="mb-3 position-relative">
                                <div class="position-absolute top-50 translate-middle-y ps-3">
                                    <i class="bi bi-tree-fill fs-18px  text-warning"></i>
                                </div>
                                <input type="text" class="form-control rounded-pill py-2 ps-5" id="inputSkill"
                                    placeholder="ประสบการณ์การใช้คอมพิวเตอร์">
                            </div>
                            <!-- Suggest Code  -->
                            <div class="mb-3 position-relative">
                                <div class="position-absolute top-50 translate-middle-y ps-3">
                                    <i class="bi bi-tag-fill fs-18px  text-blue6"></i>
                                </div>
                                <input type="text" class="form-control rounded-pill border border-blue6 py-2 ps-5"
                                    id="inputSuggestCode" placeholder="รหัสผู้แนะนำ (ถ้ามี)  ">
                            </div>
                            <!-- Submit -->
                            <div class="col-12 d-grid">
                                <button type="submit" class="btn btn-warning py-2 rounded-pill">
                                    ยืนยันการสมัคร
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 text-center mt-4 mt-md-2">
                        <button data-bs-dismiss="modal" class="btn p-0 m-0  border-0 text-secondary opacity-75">
                            <i class="bi bi-x-circle fs-30px"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* <!-- กำหนดปุ่มทุกปุ่มให้ขยายตอนคลิ้กแค่หน้า hub --> */
.btn {
    transition: transform 0.1s ease;
}

.btn:active {
    transform: scale(0.95);
}
</style>