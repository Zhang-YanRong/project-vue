<template>
<el-dialog title="删除分类" :visible="visible" @close="closeModal">
    <span>你确定删除{{ editItem.classifyName }}分类吗</span><br />
    <span>删除之后该分类下的所有商品将会被移动到未分类组别</span>
    <div slot="footer" class="dialog-footer">
        <el-button @click="closeModal">取 消</el-button>
        <el-button type="primary" @click="confirmModal">确 定</el-button>
    </div>
</el-dialog>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        className: String,
        visible: Boolean,
        editItem: Object,
    },
    methods: {
        closeModal() {
            this.$emit("updataState", {
                deleteVisible: false,
            })
        },
        confirmModal() {
            this.$emit("deleteItem")
            this.closeModal()
        },
    },
}
</script>
