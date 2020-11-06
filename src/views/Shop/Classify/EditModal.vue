<template>
<el-dialog :title="`${editFlag ? '编辑' : '新增'}分类`" :visible="visible" @close="closeModal">
    <el-form :model="editItem" :rules="rules" ref="editModal">
        <el-form-item label="分类名称" label-width="120px" prop="classifyName">
            <el-input v-model="editItem.classifyName" autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="closeModal">取 消</el-button>
        <el-button type="primary" @click="confirmModal">确 定</el-button>
    </div>
</el-dialog>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                classifyName: [{
                    required: true,
                    message: "请输入分类名称",
                }, ],
            },
        }
    },
    props: {
        visible: Boolean,
        editItem: Object,
        editFlag: Boolean,
    },
    methods: {
        closeModal() {
            this.$emit("updataState", {
                visible: false,
            })
        },
        confirmModal() {
            this.$refs["editModal"].validate((valid) => {
                if (valid) {
                    this.closeModal()
                    if (this.editFlag) {
                        this.$emit("updataState", {
                            editItem: this.editItem,
                        })
                    } else {
                        this.$emit("addItem", {
                            ...this.editItem,
                        })
                    }
                }
            })
        },
    },

    computed: {},
}
</script>
