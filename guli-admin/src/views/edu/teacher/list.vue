<template>
    <h1>讲师列表</h1>
</template>


<script>

import teacher from '@/api/edu/teacher'

export default {
    // data:{

    // },
    data(){
        return {
            list:null,
            pageSize:10,
            currentPage:1,
            total:0,
            teacherQuery:{}
        }
    },
    created(){
        this.getList();
    },
    methods :{

        getList(){
            teacher.teacherQueryPage(this.pageSize,this.currentPage,this.teacherQuery).then(
                    response =>{
                        console.log(response)
                    }
                ).catch(error =>{
                    console.log(error)
                })
        }
    }
}
</script>

