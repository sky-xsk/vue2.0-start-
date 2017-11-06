<template>
  <div class="foo">
        <el-button style='margin-bottom:20px;' type="primary" icon="document" @click="handleDownload()" :loading="downloadLoading">导出excel</el-button>
         <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期"width="180">
                </el-table-column>
                <el-table-column prop="name"  label="姓名"  width="180">
                </el-table-column>
            <el-table-column  prop="address" label="地址">
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
    export default {
        name: 'foo',
        data() {
            return {
                tableData:[
                    {date:"1955-56-56",name:"xsk",address:'wuxi'},
                    {date:"1955-56-56",name:"xsk",address:'wuxi'},
                    {date:"1955-56-56",name:"xsk",address:'wuxi'},
                    {date:"1955-56-56",name:"xsk",address:'wuxi'},
                    {date:"1955-56-56",name:"xsk",address:'wuxi'}
                ],
                downloadLoading: false
            }
        },
        methods:{
            handleDownload() {
                this.downloadLoading = true
                require.ensure([], () => {
                const { export_json_to_excel } = require('../vendor/Export2Excel')
                const tHeader = ['日期', '姓名', '地址']
                const filterVal = ['date', 'name', 'address']
                const list = this.tableData
                const data = this.formatJson(filterVal, list)
                export_json_to_excel(tHeader, data, '人员信息表')
                this.downloadLoading = false
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            },
        }
    }
</script>

<style scoped>

</style>