<template>
<div class="classify-wrap">
    <el-card shadow='never' class="table-container">
        <el-table :data="tableData" style="width: 100%" height="250">
            <el-table-column v-for="(item) in column" :prop="item.name" :label="item.label" :width="item.width" :key='item.name' :fixed="item.fixed">
            </el-table-column>
            <el-table-column prop="action" label="操作" width="150" key='action' fixed="right" align='center'>
                <template v-slot='item'>
                    <div class="action-container">
                        <el-button type="primary" @click="edit(item)">编辑</el-button>
                        <el-button @click="setDelModalVisible(item)">删除</el-button>
                    </div>
                </template>
            </el-table-column>

        </el-table>
    </el-card>
    <edit-modal :editItem='editItem' :visible='visible' :editFlag='editFlag' @updataState='updataState' />
    <delete-modal :visible='deleteVisible' @deleteItem='deleteItem' @updataState='updataState' />
</div>
</template>

<style lang="less" scoped>
.classify-wrap {
    .table-container {
        .action-container {
            display: flex;
        }
    }
}
</style>

<script>
import {
    column
} from "./const"
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
export default {
    data() {
        return {
            column,
            editItem: {},
            editFlag: false,
            tableData: [{
                id: '1',
                date: '2016-05-03',
                personName: '王小虎',
                classifyName: "零食"
            }, {
                id: "2",
                date: '2016-05-02',
                personName: "李梅",
                classifyName: "衣服"
            }],
            visible: false,
            deleteVisible: false,
            activeIndex: null
        }
    },
    components: {
        EditModal,
        DeleteModal
    },
    methods: {
        edit(item) {
            this.editItem = item.row
            console.log(item, item.row)
            this.editFlag = true
            this.visible = true
        },
        updataState(params) {
            Object.keys(params).forEach(item => {
                this[item] = params[item]
            })
        },
        setDelModalVisible(item) {
            this.activeIndex = item.$index;
            this.deleteVisible = !this.deleteVisible
        },
        deleteItem() {
            this.tableData.splice(this.activeIndex, 1)
        }
    },
}
</script>
