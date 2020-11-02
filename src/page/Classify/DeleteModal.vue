<template>
<el-dialog title='删除分类' :visible='visible'>
    <span>你确定删除''分类吗</span><br />
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
    },
    methods: {
        closeModal() {
            this.$emit('updataState', {
                deleteVisible: false
            })
        },
        confirmModal() {
            this.$emit('deleteItem');
            this.closeModal()
        }

    }
}
</script>
