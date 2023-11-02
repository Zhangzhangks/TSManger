<template>
    <div class="search-box">
        <el-form :model="data" label-width="120px">
            <el-form-item label="标题">
                <el-input v-model="data.select.title" placeholder="请输入关键字" />
            </el-form-item>
            <el-form-item label="详情">
                <el-input v-model="data.select.introduce" placeholder="请输入关键字" />
            </el-form-item>
        </el-form>
    </div>
    <el-table :data="dataList.comList" border style="width: 100%">
        <el-table-column type="index" label="索引" width="180" />
        <el-table-column prop="userid" label="ID" width="180" />
        <el-table-column prop="title" label="Name" width="180" />
        <el-table-column prop="introduce" label="详情" />
    </el-table>
    <el-pagination @size-change="sizeChange" @current-change="currentChange" layout="prev, pager, next"
        :total="data.select.count" />
</template> 

<script setup lang="ts">
import { onMounted, reactive, } from 'vue';
import { getGoodlist } from '../../Api/login.ts'
import { initData } from '../../type/good'
import { computed } from '@vue/reactivity';
const data = reactive(new initData());
const currentChange = function (page: number) {
    data.select.page = page
}
const sizeChange = function (pagesize: number) {
    data.select.pagesize = pagesize
}
onMounted(async () => {
    const res: any = await getGoodlist();
    console.log(res);
    data.list = res?.goods
    data.select.count = res.goods.length

})
const dataList = reactive({
    comList: computed(() => {
        let start: number = (data.select.page - 1) * data.select.pagesize;
        let end = data.select.page * data.select.pagesize;
        console.log(start,end);
        

        return data.list.slice(start, end)

    })
})

</script>

<style lang="less" scoped></style>