<template>
<div>
    <el-card shadow='never'>
        <el-table :data="tableData" style="width: 100%" height="250">
            <template v-for="(item) in column">
                <el-table-column :prop="item.name" :label="item.label" :width="item.width" :key='item.name' :fixed="item.fixed">
                </el-table-column>
            </template>
            <el-table-column prop="action" label="操作" width="120" key='action' fixed="right">
                <div class="action-container">
                    <el-button>编辑</el-button>
                    <el-button>删除</el-button>
                </div>
            </el-table-column>

        </el-table>
    </el-card>
</div>
</template>

<style lang="less" scoped>

</style>

<script>
import {
    column
} from "./const"
export default {
    data() {
        return {
            column,
            tableData: [{
                date: '2016-05-03',
                personName: '王小虎',
                classifyName: "零食"
            }, {
                date: '2016-05-02',
                personName: "李梅",
                classifyName: "衣服"
            }]
        }
    }
}
</script>
