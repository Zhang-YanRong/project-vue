<template>
<!-- TODO: 编辑校验 -->
<!-- TODO: 编辑分类转用set -->
<div class="classify-wrap">
    <el-button class="add-button" type="primary" @click="setAddModalVisible">添加分类</el-button>
    <el-table :data="tableData" style="width: 100%" height="250">
        <el-table-column v-for="item in column" :prop="item.name" :label="item.label" :width="item.width" :key="item.name" :fixed="item.fixed">
        </el-table-column>
        <el-table-column prop="action" label="操作" width="150" key="action" fixed="right" align="center">
            <template v-slot="item">
                <div class="action-container">
                    <el-button type="primary" @click="edit(item)">编辑</el-button>
                    <el-button @click="setDelModalVisible(item)">删除</el-button>
                </div>
            </template>
        </el-table-column>
    </el-table>
    <edit-modal :editItem="editItem" :visible="visible" :editFlag="editFlag" @updataState="updataState" @addItem="addItem" />
    <delete-modal :visible="deleteVisible" @deleteItem="deleteItem" @updataState="updataState" :editItem="editItem" />
</div>
</template>

<style lang="less" scoped>
.classify-wrap {
    .table-container {
        .action-container {
            display: flex;
        }
    }

    .add-button {
        display: flex;
        margin-bottom: 10px;
    }
}
</style>

<script>
import {
    column
} from "./const"
import DeleteModal from "./DeleteModal"
import EditModal from "./EditModal"
export default {
    data() {
        return {
            column,
            editItem: {},
            editFlag: false,
            tableData: [{
                    id: "1",
                    date: "2016-05-03",
                    personName: "王小虎",
                    classifyName: "零食",
                },
                {
                    id: "2",
                    date: "2016-05-02",
                    personName: "李梅",
                    classifyName: "衣服",
                },
            ],
            visible: false,
            deleteVisible: false,
            activeIndex: null,
        }
    },
    components: {
        EditModal,
        DeleteModal,
    },
    methods: {
        edit(item) {
            this.editItem = item.row
            this.editFlag = true
            this.visible = true
        },
        updataState(params) {
            Object.keys(params).forEach((item) => {
                this[item] = params[item]
            })
        },
        setDelModalVisible(item) {
            this.activeIndex = item.$index
            this.deleteVisible = !this.deleteVisible
            this.editItem = item.row
        },
        deleteItem() {
            this.tableData.splice(this.activeIndex, 1)
        },
        setAddModalVisible() {
            this.visible = !this.visible
            this.editFlag = false
            this.editItem = {}
        },
        addItem(item) {
            this.$set(this.tableData, this.tableData.length, item)
        },
    },
}
</script>
