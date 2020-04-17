import request from '@/utils/request'

export default {
  teacherQueryPage(pageSize, currentPage,teacherQuery) {
    return request({
      url: `/eduservice/teacher/teacherQueryPage/${pageSize}/${currentPage}`,
      method: 'post',
      data: {
          teacherQuery
      }
    })
  }

}