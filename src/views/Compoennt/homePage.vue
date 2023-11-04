<template>
    <div class="search-box" style="width: 420px;">
        <el-form :model="data" label-width="120px">
            <el-form-item label="标题">
                <el-input v-model="data.select.title" placeholder="请输入关键字" />
            </el-form-item>
            <el-form-item label="详情">
                <el-input v-model="data.select.introduce" placeholder="请输入关键字" />
            </el-form-item>
        </el-form>
    </div>
    <el-button type="primary" @click="submit">查询</el-button>
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
import { onMounted, reactive, watch, } from 'vue';
import { getGoodlist } from '../../Api/login'
import { initData, Igoods } from '../../type/good'
import { computed } from '@vue/reactivity';
const data = reactive(new initData());
const currentChange = function (page: number) {
    data.select.page = page
}
const sizeChange = function (pagesize: number) {
    data.select.pagesize = pagesize
}
async function getGoodValue() {
    const res: any = await getGoodlist();
    // console.log(res);
    data.list = res?.goods
    data.select.count = res.goods.length
}
onMounted(getGoodValue);


watch([() => data.select.title, () => data.select.introduce], ([newval, inval]) => {

    if (newval === '' || inval == '') {
        getGoodValue()
    }
}, { deep: true });



const dataList = reactive({
    comList: computed(() => {
        let start: number = (data.select.page - 1) * data.select.pagesize;
        let end = data.select.page * data.select.pagesize;
        return data.list.slice(start, end)

    })
})
const submit = function () {
    let arr: Igoods[] = [];
    if (data.select.title || data.select.introduce) {
        if (data.select.title) {
            arr = data.list.filter(item => {
                return item.title.includes(data.select.title)
            })
        }

        if (data.select.introduce) {
            arr = data.list.filter(item => {
                return item.introduce.includes(data.select.introduce)
            })
        }
    }
    data.list = arr;
    data.select.count = data.list.length
}
</script>

<style lang="less" scoped></style>